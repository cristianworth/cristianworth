import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const username = "cristianworth";
const output = new URL("../assets/profile/", import.meta.url);
const statStyle =
  "theme=dark&hide_border=true&bg_color=0D1117&title_color=C77DFF&disable_animations=true";
const endpoints = {
  stats:
    "https://github-stats-extended.vercel.app/api?username=" +
    username +
    "&show_icons=true&icon_color=9D4EDD&" +
    statStyle,
  languages:
    "https://github-stats-extended.vercel.app/api/top-langs?username=" +
    username +
    "&layout=compact&" +
    statStyle,
  streak:
    "https://streak-stats.demolab.com/?user=" +
    username +
    "&theme=dark&hide_border=true&background=0D1117&ring=C77DFF&fire=9D4EDD&currStreakLabel=C77DFF&disable_animations=true&timezone=America%2FSao_Paulo",
};
const calendarUrl = "https://github.com/users/" + username + "/contributions";
const xml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll('"', "&quot;");

async function request(url) {
  const response = await fetch(url, {
    headers: { "User-Agent": "cristianworth-profile-stats" },
    signal: AbortSignal.timeout(30000),
  });
  if (!response.ok)
    throw new Error(new URL(url).hostname + ": HTTP " + response.status);
  return response.text();
}

function readCalendar(html) {
  const tips = new Map(
    [
      ...html.matchAll(
        /<tool-tip\b[^>]*for="([^"]+)"[^>]*>([\s\S]*?)<\/tool-tip>/g,
      ),
    ].map((match) => [match[1], match[2].replace(/<[^>]+>/g, "").trim()]),
  );
  const today = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
  const days = [
    ...html.matchAll(/<td\b[^>]*data-date="([^"]+)"[^>]*id="([^"]+)"[^>]*>/g),
  ]
    .map((match) => {
      const label = tips.get(match[2]) || "";
      const count = label.match(/([\d,]+) contributions? on/);
      return {
        date: match[1],
        count: count ? Number(count[1].replaceAll(",", "")) : 0,
        label,
      };
    })
    .filter((day) => day.date <= today)
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(-31);
  if (days.length !== 31 || days.some((day) => !day.label)) {
    throw new Error(
      "The public contribution calendar format was not recognized; previous assets are preserved.",
    );
  }
  return days;
}

function activityGraph(days) {
  const width = 920,
    height = 250,
    left = 48,
    top = 56,
    plotWidth = 830,
    plotHeight = 140;
  const max = Math.max(...days.map((day) => day.count), 1);
  const points = days.map((day, index) => [
    left + (index * plotWidth) / (days.length - 1),
    top + plotHeight - (day.count / max) * plotHeight,
  ]);
  const grid = Array.from({ length: 5 }, (_, index) => {
    const y = top + (plotHeight * index) / 4;
    return (
      '<path d="M' +
      left +
      " " +
      y +
      "h" +
      plotWidth +
      '" stroke="#263044" stroke-dasharray="3 6"/>' +
      '<text x="32" y="' +
      (y + 4) +
      '" text-anchor="end" fill="#8b949e" font-size="11">' +
      Math.round(max * (1 - index / 4)) +
      "</text>"
    );
  }).join("");
  const curve = points
    .map(
      (point, index) =>
        (index ? "L" : "M") + point.map((n) => n.toFixed(1)).join(" "),
    )
    .join(" ");
  const dots = points
    .map(
      ([x, y], index) =>
        '<circle cx="' +
        x +
        '" cy="' +
        y +
        '" r="3" fill="#d5b3ff"><title>' +
        xml(days[index].date + ": " + days[index].count + " contribuições") +
        "</title></circle>",
    )
    .join("");
  const labels = [0, 7, 14, 21, 30]
    .map(
      (index) =>
        '<text x="' +
        points[index][0] +
        '" y="224" text-anchor="middle" fill="#a7b0be" font-size="11">' +
        days[index].date.slice(8) +
        "/" +
        days[index].date.slice(5, 7) +
        "</text>",
    )
    .join("");
  const total = days.reduce((sum, day) => sum + day.count, 0);
  return (
    '<svg xmlns="http://www.w3.org/2000/svg" width="' +
    width +
    '" height="' +
    height +
    '" viewBox="0 0 ' +
    width +
    " " +
    height +
    '" role="img" aria-label="Contribuições públicas de ' +
    username +
    '">' +
    "<title>Contribuições públicas no GitHub: " +
    days[0].date +
    " a " +
    days.at(-1).date +
    "</title>" +
    '<rect width="' +
    width +
    '" height="' +
    height +
    '" rx="8" fill="#0d1117"/>' +
    '<g font-family="Segoe UI,Arial,sans-serif"><text x="28" y="30" font-size="18" font-weight="600" fill="#c77dff">Atividade no GitHub</text>' +
    '<text x="890" y="30" text-anchor="end" fill="#8b949e" font-size="11">Calendário público · ' +
    total +
    " contribuições no período</text>" +
    grid +
    '<path d="' +
    curve +
    " L" +
    points.at(-1)[0] +
    " " +
    (top + plotHeight) +
    " L" +
    left +
    " " +
    (top + plotHeight) +
    'Z" fill="#9d4edd" opacity=".12"/><path d="' +
    curve +
    '" fill="none" stroke="#b06cf5" stroke-width="2.5" stroke-linejoin="round"/>' +
    dots +
    labels +
    "</g></svg>\n"
  );
}

const cards = await Promise.all(
  Object.entries(endpoints).map(async ([name, url]) => {
    const svg = await request(url);
    if (
      !svg.includes("<svg") ||
      /Something went wrong|Error Fetching Resource|Could not resolve to a User|maximum retries|Vercel Security Checkpoint/i.test(
        svg,
      )
    ) {
      throw new Error(
        name + ": invalid stats response; previous assets are preserved.",
      );
    }
    return [name, svg];
  }),
);
const days = readCalendar(await request(calendarUrl));
cards.push(["activity", activityGraph(days)]);

// Fetch and validate every source before replacing any published card.
await mkdir(output, { recursive: true });
for (const [name, svg] of cards) {
  await writeFile(new URL(name + ".svg", output), svg.replace(/[\t ]+$/gm, "").trimEnd() + "\n");
}
await writeFile(
  new URL("stats-sources.json", output),
  JSON.stringify(
    {
      updatedAt: new Date().toISOString(),
      scope:
        "Public GitHub statistics; corporate SVN activity is not included.",
      sources: { ...endpoints, activity: calendarUrl },
      activityPeriod: { from: days[0].date, to: days.at(-1).date },
    },
    null,
    2,
  ) + "\n",
);
console.log("Updated public profile stats in " + fileURLToPath(output));
