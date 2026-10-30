# Projetos e demonstrações

Levantamento atualizado em 29/10/2026. Estado baseado nos READMEs atuais, nos remotos dos projetos e nas URLs verificadas. Uma resposta HTTP não substitui teste funcional completo. Este documento acompanha apresentação e publicação; os roadmaps de produto continuam em cada repositório.

## Vitrine e disponibilidade

| Projeto                                                                          | Estado de apresentação                                                         | Demonstração                                                                                                | Próxima ação                                                                      |
| -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [Nextage Class](https://github.com/cristianworth/nextage-class)                  | Demo pública com dados fictícios; piloto com servidor em desenvolvimento       | [GitHub Pages](https://cristianworth.github.io/nextage-class/) respondeu 200                                | Manter a separação entre demo e piloto; acompanhar os próximos fluxos persistidos |
| [Worklog](https://github.com/cristianworth/worklog-for-redmine)                  | Aplicação local e demo pública documentadas                                    | [GitHub Pages](https://cristianworth.github.io/worklog-for-redmine/) respondeu 200                          | Manter link, screenshot e limites de simulação alinhados                          |
| [Gacha Management Cloud](https://github.com/cristianworth/GachaManagement-cloud) | Aplicação pessoal online, com perfis públicos e dados compartilhados           | [Aplicação atual](https://cristianworth.github.io/GachaManagement-cloud/) respondeu 200; não é demo isolada | Delegar uma demonstração descartável ao chat do projeto                           |
| [Fitness Lab](https://github.com/cristianworth/fitness-lab)                      | Versão 0.3.0 com demo pública em banco separado dos registros pessoais         | [Demo isolada](https://cristianworth.github.io/fitness-lab/?mode=demo) respondeu 200                        | Manter isolamento, restauração explícita e documentação de backup                 |
| [Weather Lab](https://github.com/cristianworth/weather-lab)                      | Aplicação pública com API meteorológica real                                   | [GitHub Pages](https://cristianworth.github.io/weather-lab/) respondeu 200                                  | Manter o caminho online em destaque e as atribuições dos dados                    |
| [Gacha OCR Lab](https://github.com/cristianworth/gacha-ocr-lab)                  | Laboratório local; README e código já tinham alterações em andamento           | CLI, imagens e revisão local; sem demo web verificada                                                       | Opcional: exemplo público reproduzível ou vídeo curto com os limites do perfil    |
| [Gacha Advisor](https://github.com/cristianworth/gacha-advisor)                  | Base documental e instruções para um projeto ChatGPT                           | Não se aplica: não existe aplicativo próprio                                                                | Manter instruções de instalação e natureza documental explícitas                  |
| [Portfólio](https://github.com/cristianworth/portfolio)                          | Site público com experiência, seleção de produtos e cases de Nextage e Worklog | [Site publicado](https://cristianworth.github.io/portfolio/) e os dois cases responderam 200                | Refinar apresentação da experiência e manter links e estágios alinhados           |

Loveômetro é uma experiência pessoal local com mídia privada e não integra a vitrine profissional desta entrega. Repositórios acadêmicos/antigos permanecem fora desta padronização; a avaliação anterior não autoriza exclusão.

## Recortes para os chats responsáveis

### Nextage Class

Demo React publicada com dados fictícios, simulação da professora e do aluno e solicitações de horário. A captura pública e o roteiro estão no repositório do projeto. O piloto ASP.NET Core/PostgreSQL permanece separado; conta, convite e acesso real têm verificações próprias. A próxima apresentação deve acompanhar a evolução dos fluxos persistidos sem anunciar a demo como conclusão do piloto.

### Fitness Lab

Demo estática publicada em `?mode=demo`, com dados sintéticos em banco separado, confirmação de restauração e retorno ao modo pessoal. O README já aponta para o roteiro de revisão e as capturas públicas. Manter a conferência de treinar → finalizar → evolução e alimentação → edição → total quando esses fluxos mudarem, incluindo recarga e largura móvel.

### Gacha Management Cloud

Definir uma demo descartável para visitantes que não use o banco pessoal. A prévia local com PGlite e dados sintéticos já é uma referência técnica, não um artefato estático publicado. Escolher no próprio projeto uma solução proporcional para armazenamento, importações e chamadas externas; não presumir que o servidor de prévia pode simplesmente ser enviado ao Pages. Usar exemplos próprios, restauráveis e claramente identificados. Entregar URL, fluxo de perfil → rotina → tarefa e descrição do isolamento.

### OCR, se entrar como destaque

Preparar uma entrada e saída publicáveis, com comando reproduzível, origem dos exemplos e revisão dos campos incertos. Uma gravação curta pode demonstrar a ferramenta desktop sem transformar captura de jogo em um serviço web. Distinguir processamento de uma imagem, piloto de percurso e inventário completo.

## Lacunas de manutenção observadas

- Nextage Class: ainda não há LICENSE na raiz; a licença deve ser escolhida por Cristian. Há workflow de publicação Pages. A publicação da demo e os testes locais não comprovam a validação integrada do piloto com API.
- Gacha Management Cloud: o manifesto declara ISC, mas não há texto LICENSE na raiz. Tornar a distribuição e os créditos explícitos é uma pendência.
- Fitness, Weather e Worklog já têm licença, guias de contribuição e orientações de segurança; preservá-los em vez de gerar cópias genéricas.
- Credenciais anteriormente identificadas em repositórios antigos precisam de uma tarefa própria de saneamento/rotação, se ainda válidas. Não foram utilizadas nem alteradas nesta entrega.
