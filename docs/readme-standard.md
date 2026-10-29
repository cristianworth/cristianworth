# Padrão de apresentação dos projetos

Objetivo: permitir que alguém entenda o produto, encontre a demonstração e identifique o que vale examinar no código em uma leitura rápida. Padrão adotado em 28/10/2026; preservar a língua e as convenções de cada projeto.

Este padrão se aplica aos READMEs dos aplicativos. O perfil pessoal tem uma [direção visual própria](profile-design.md), com banners, ícones e animação na apresentação.

## Ordem de leitura

1. **Nome e proposta:** um título e até duas frases sobre público, problema e resultado. A stack vem depois do produto.
2. **Experimente:** seção própria perto do início, antes da primeira captura. Quando a versão online estiver verificada, usar um único botão visual e um link de texto. Explicar conta/instalação, dados reais ou fictícios e operações simuladas. Se não houver demo, escrever isso e apontar para a execução local; não colocar botão desabilitado, placeholder ou URL presumida.
3. **Produto em uso:** uma captura atual de um fluxo importante, com legenda e texto alternativo. Usar dados fictícios/autorizados. Galeria móvel e variações são opcionais e podem ficar em details. Uma captura não comprova disponibilidade online.
4. **O que resolve:** cinco a sete capacidades concretas já implementadas. Separar demo de piloto, produção de simulação e implementação de planejamento.
5. **Decisões de engenharia:** até três pontos que expliquem escolhas e trade-offs reais; apontar para arquitetura e evidências detalhadas.
6. **Execução local:** requisitos reais e o caminho mínimo de clone, instalação e inicialização. Configuração de serviços, migrações e publicação ficam em guias próprios.
7. **Estado e limites:** estágio atual, limitações importantes, participação humana/IA e fonte de próximos passos. Não alegar escala, uso por clientes, qualidade certificada ou métricas não verificadas.
8. **Documentação, contribuição e licença:** mapa curto para guias existentes. Não criar arquivos só para preencher uma lista; se a licença não foi definida, registrar essa pendência sem inventá-la.

O README deve funcionar como entrada do projeto, normalmente com 80–140 linhas. Isso é uma referência editorial, não um limite que justifique cortar informações necessárias.

## Estilo

- Frases curtas e específicas. Descrever ações e resultados, evitando adjetivos promocionais genéricos.
- Sem emojis nos títulos e sem animações decorativas. No máximo dois badges auxiliares, depois da proposta/demo; evitar painéis de estatísticas sem relação com a entrega.
- Botão da demo como link de imagem SVG local, estático e acessível. Manter um link de texto ao lado ou logo abaixo para não depender da imagem.
- O botão de demonstração usa o texto do README: `Try the live demo` ou `Experimentar online`. O ativo canônico fica em assets/ deste repositório; cópias ficam em docs/assets/ dos projetos que já têm uma demo online.
- Não substituir a marca do produto pelo padrão do portfólio. Cada aplicação mantém identidade, cores e screenshots próprios.
- Preferir links relativos para documentação e imagens do próprio repositório. Links externos precisam ter destino real, HTTPS e função clara.
- Não colocar diário de implementação, histórico completo de redesign, comandos operacionais extensos, handoffs ou contagens antigas de testes no topo.

## Onde guardar o restante

| Conteúdo                           | Destino                                       |
| ---------------------------------- | --------------------------------------------- |
| Execução, configuração e migrações | Guia de instalação/uso em docs/               |
| Arquitetura e contratos            | Documento curto de arquitetura                |
| Paleta, marca e referências        | Estudo visual em docs/                        |
| Comportamento e evidências         | Guias funcionais e validação                  |
| Entregas publicadas                | Changelog, quando adotado pelo projeto        |
| Próximo trabalho                   | Roadmap único, sem duplicar backlog no perfil |
| Inventário entre projetos          | docs/project-status.md deste perfil           |

## Conferência antes de publicar

- Produto e caminho de experimentação aparecem antes do histórico técnico.
- Demo responde e corresponde ao projeto; HTTP 200 comprova alcance, não o fluxo inteiro.
- Links locais, âncoras e imagens resolvem; arquivos novos fazem parte da entrega.
- Capturas e exemplos não contêm dados pessoais, credenciais ou acervo privado.
- Requisitos e comandos existem no projeto. Uma edição documental não deve disparar testes de produto sem necessidade.
- Mudanças existentes de outros chats são preservadas. Ler as regras locais de Git e changelog antes de commits/pushes; o padrão não concede essas autorizações.

## Adoção atual

Aplicativos: Nextage Class, Worklog for Redmine, Gacha Management Cloud, Fitness Lab e Weather Lab. Laboratórios, bases documentais e estudos antigos usam uma versão proporcional; não precisam de uma demo web nem de todas as seções de um aplicativo.
