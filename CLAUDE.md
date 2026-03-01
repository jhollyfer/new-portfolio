# Projeto: jhollyfer.com.br

## Stack
- Next.js 15 (App Router, RSC)
- Tailwind CSS v4 (CSS-first config com @theme)
- shadcn/ui (estilo new-york, neutral base)
- TypeScript
- Geist font family
- Lucide React icons

## Design Guidelines
- Dark mode como padrao (class="dark" no html)
- Cor accent: green-400
- Bordas sutis: white/[0.08]
- Espacamento generoso
- Tipografia: tracking-tight em headings, text-balance em descriptions
- Animacoes: apenas transform/opacity, respeitar prefers-reduced-motion

## Skills Instaladas
Ao gerar ou refatorar codigo frontend, considerar:
- `.claude/skills/react-best-practices/` - Performance React/Next.js
- `.claude/skills/web-design-guidelines/` - Acessibilidade e UI
- `.claude/skills/shadcn-ui/` - Padroes de componentes
- `.claude/skills/tailwind-design-system/` - Design tokens Tailwind v4
- `.claude/skills/ui-ux-pro-max/` - Design intelligence, paletas, tipografia
- `.claude/skills/react-doctor/` - Diagnostico de performance React

## Convencoes
- Usar `cn()` de `@/lib/utils` para merge de classes
- Componentes shadcn em `@/components/ui/`
- Templates de pagina em `@/templates/<pagina>/`
- Usar semantic colors (bg-background, text-foreground, text-muted-foreground)
- Nao usar emojis em textos ou componentes
- Labels em portugues
