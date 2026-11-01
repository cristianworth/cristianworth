# Identidade visual do perfil

Direção aprovada em 01/11/2026: **opção A — completa**, inspirada no [perfil de Henrique Martinelli Frezzatti](https://github.com/henriquemf/henriquemf).

## Estrutura

1. Nome, cargo de Desenvolvedor Pleno e tecnologias no banner.
2. Linha animada com grupos de stacks e uma faixa de ícones.
3. Contatos para LinkedIn, portfólio e GitHub.
4. Sobre mim curto, com atuação e interesses.
5. Tech Stack agrupada em backend, frontend, dados/persistência e ferramentas/qualidade.
6. GitHub Stats, linguagens, sequência de contribuições e gráfico de atividade.

A seleção reúne tecnologias utilizadas no trabalho e nos projetos pessoais. Interesses futuros permanecem no texto de apresentação. A vitrine de produtos e os cases ficam no site do portfólio.

## Aparência e recursos

Paleta roxa: base `#1A0033`, destaque `#6A0DAD`, texto/acento `#C77DFF` e fundo do GitHub `#0D1117`. O texto usa a fonte nativa do GitHub; o banner e os ícones são imagens SVG. O README não executa JavaScript.

Os recursos publicados ficam em `assets/profile/`:

| Recurso                    | Origem e manutenção                                                                                                                                                                                                          |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Banner e rodapé em ondas   | [Capsule Render](https://github.com/kyechan99/capsule-render); [licença](../assets/profile/LICENSE-capsule-render.txt)                                                                                                       |
| Linha animada de stacks    | SVG próprio com primeiro quadro legível e suporte a movimento reduzido                                                                                                                                                       |
| Ícones de tecnologias      | [Skill Icons](https://github.com/tandpfun/skill-icons); [licença](../assets/profile/LICENSE-skill-icons.txt)                                                                                                                 |
| Badges e botões            | SVGs próprios com texto acessível                                                                                                                                                                                            |
| Estatísticas e linguagens  | API de [GitHub Stats Extended](https://github-stats-extended.vercel.app), baseada em [GitHub Readme Stats](https://github.com/anuraghazra/github-readme-stats); [licença](../assets/profile/LICENSE-github-readme-stats.txt) |
| Sequência de contribuições | [GitHub Readme Streak Stats](https://github.com/DenverCoder1/github-readme-streak-stats); [licença](../assets/profile/LICENSE-streak-stats.txt)                                                                              |
| Atividade                  | SVG próprio a partir do calendário público de contribuições do GitHub                                                                                                                                                        |

## Atualização dos painéis

O script `scripts/update-profile-stats.mjs` consulta apenas dados públicos, atualiza os quatro SVGs e registra fontes, período e horário em [stats-sources.json](../assets/profile/stats-sources.json). O gráfico mostra os últimos 31 dias disponíveis; os outros serviços têm seus próprios períodos e caches.

O workflow `.github/workflows/profile-stats.yml` executa diariamente e também aceita execução manual. Só grava os painéis e seus metadados. Não exige chave pessoal ou acesso a repositórios privados; usa o token temporário do GitHub Actions para commitar os arquivos deste repositório.

As fontes são obtidas e validadas antes de substituir os painéis. Se a consulta falhar, os arquivos anteriores permanecem publicados e o workflow informa a falha. A rotina pode ser executada localmente com:

```sh
node scripts/update-profile-stats.mjs
```

Antes de publicar alterações, conferir imagens, links, animação e leitura em desktop e celular. O [padrão dos aplicativos](readme-standard.md) continua separado da apresentação pessoal.
