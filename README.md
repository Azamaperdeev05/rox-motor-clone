# Rox Motor Clone

Бұл Next.js жобасы Rox Motor компаниясының веб-сайтының клоны.

## Қажетті пакеттер

```bash
# Node.js және npm орнатылған болуы керек
# Node.js версиясы: 18.x немесе жоғары

# Жобаны клондау
git clone https://github.com/Azamaperdeev05/rox-motor-clone.git
cd rox-motor-clone

# Қажетті пакеттерді орнату
npm install

# shadcn/ui компоненттерін орнату
npx shadcn-ui@latest add select
npx shadcn-ui@latest add card
npx shadcn-ui@latest add input
npx shadcn-ui@latest add button
npx shadcn-ui@latest add label
```

## Қолданбаны іске қосу

```bash
# Әзірлеу режимінде іске қосу
npm run dev

# Өндіріс нұсқасын құру
npm run build

# Өндіріс нұсқасын іске қосу
npm run start
```

## Қолданылған технологиялар

- Next.js 15.x
- React 18.x
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Zustand (мемлекеттік басқару)
- React Hook Form
- Zod (валидация)

## Жоба құрылымы

```
src/
├── app/                 # Next.js app router
├── components/          # React компоненттері
│   ├── ui/             # shadcn/ui компоненттері
│   └── ...             # Басқа компоненттер
├── lib/                # Utility функциялары
│   ├── language-context.ts
│   └── translations.ts
└── styles/             # Global стильдер
```

## Тілдер

Қолданба қазіргі уақытта келесі тілдерді қолдайды:
- Қазақша
- Орысша
- Ағылшынша

## Лицензия

MIT

