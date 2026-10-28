# Projetos e demonstrações

Levantamento em 28/10/2026. Estado baseado nos arquivos locais, nos remotos dos projetos e nas URLs conhecidas. Uma resposta HTTP não substitui teste funcional completo. Este documento acompanha apresentação e publicação; os roadmaps de produto continuam em cada repositório.

## Vitrine e disponibilidade

| Projeto                                                                          | Estado de apresentação                                                                                                | Demonstração                                                                                                | Próxima ação                                                                   |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| [Nextage Class](https://github.com/cristianworth/nextage-class)                  | Demo local e piloto com servidor em desenvolvimento; redesign local mais recente que o remoto no início desta entrega | Sem endereço público verificado; URL Pages conhecida respondeu 404                                          | Publicar somente a demo fictícia, independente do piloto e do acesso real      |
| [Worklog](https://github.com/cristianworth/worklog-for-redmine)                  | Aplicação local e demo pública documentadas                                                                           | [GitHub Pages](https://cristianworth.github.io/worklog-for-redmine/) respondeu 200                          | Manter link, screenshot e limites de simulação alinhados                       |
| [Gacha Management Cloud](https://github.com/cristianworth/GachaManagement-cloud) | Aplicação pessoal online, com perfis públicos e dados compartilhados                                                  | [Aplicação atual](https://cristianworth.github.io/GachaManagement-cloud/) respondeu 200; não é demo isolada | Delegar uma demonstração descartável ao chat do projeto                        |
| [Fitness Lab](https://github.com/cristianworth/fitness-lab)                      | Aplicação local, capturas e arquivo demonstrativo existentes                                                          | Sem hospedagem verificada; URL Pages conhecida respondeu 404                                                | Delegar hospedagem estática e entrada fácil nos exemplos                       |
| [Weather Lab](https://github.com/cristianworth/weather-lab)                      | Aplicação pública com API meteorológica real                                                                          | [GitHub Pages](https://cristianworth.github.io/weather-lab/) respondeu 200                                  | Manter o caminho online em destaque e as atribuições dos dados                 |
| [Gacha OCR Lab](https://github.com/cristianworth/gacha-ocr-lab)                  | Laboratório local; README e código já tinham alterações em andamento                                                  | CLI, imagens e revisão local; sem demo web verificada                                                       | Opcional: exemplo público reproduzível ou vídeo curto com os limites do perfil |
| [Gacha Advisor](https://github.com/cristianworth/gacha-advisor)                  | Base documental e instruções para um projeto ChatGPT                                                                  | Não se aplica: não existe aplicativo próprio                                                                | Manter instruções de instalação e natureza documental explícitas               |

Loveômetro é uma experiência pessoal local com mídia privada e não integra a vitrine profissional desta entrega. Repositórios acadêmicos/antigos permanecem fora desta padronização; a avaliação anterior não autoriza exclusão.

## Recortes para os chats responsáveis

### Nextage Class

Publicar a demo React com dados fictícios, permitindo percorrer professora, consulta do aluno e solicitação/aprovação de horário. Manter o piloto ASP.NET Core, contas reais, convites e configuração administrativa fora da demo. Verificar subcaminho da hospedagem, recarga, armazenamento do visitante e restauração dos exemplos. Entregar URL HTTPS, captura atual e um roteiro de três ações. A publicação da demo não deve ser anunciada como conclusão do piloto.

### Fitness Lab

Preparar hospedagem estática com um caminho evidente para experimentar dados sintéticos. Explicar e verificar a substituição/restauração de exemplos sem surpreender quem já usa seus próprios registros; preservar backup e os limites de armazenamento por origem. Conferir treinar → finalizar → evolução e alimentação → edição → total, incluindo recarga e largura móvel. Entregar URL HTTPS e atualização do estado no README.

### Gacha Management Cloud

Definir uma demo descartável para visitantes que não use o banco pessoal. A prévia local com PGlite e dados sintéticos já é uma referência técnica, não um artefato estático publicado. Escolher no próprio projeto uma solução proporcional para armazenamento, importações e chamadas externas; não presumir que o servidor de prévia pode simplesmente ser enviado ao Pages. Usar exemplos próprios, restauráveis e claramente identificados. Entregar URL, fluxo de perfil → rotina → tarefa e descrição do isolamento.

### OCR, se entrar como destaque

Preparar uma entrada e saída publicáveis, com comando reproduzível, origem dos exemplos e revisão dos campos incertos. Uma gravação curta pode demonstrar a ferramenta desktop sem transformar captura de jogo em um serviço web. Distinguir processamento de uma imagem, piloto de percurso e inventário completo.

## Lacunas de manutenção observadas

- Nextage Class: ainda não há LICENSE na raiz nem workflow versionado de CI identificado nesta leitura. A licença deve ser escolhida por Cristian; testes locais não substituem CI.
- Gacha Management Cloud: o manifesto declara ISC, mas não há texto LICENSE na raiz. Tornar a distribuição e os créditos explícitos é uma pendência.
- Fitness, Weather e Worklog já têm licença, guias de contribuição e orientações de segurança; preservá-los em vez de gerar cópias genéricas.
- Credenciais anteriormente identificadas em repositórios antigos precisam de uma tarefa própria de saneamento/rotação, se ainda válidas. Não foram utilizadas nem alteradas nesta entrega.
