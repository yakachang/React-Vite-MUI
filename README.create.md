# React + TypeScript + Vite + Material UI

## Getting Started from zero
Step 1: Create a React app with TypeScript
```bash
# Yarn
yarn create vite

# NPM
npm create vite@latest
```

Step 2: Input Project Info
- Project name: `<Type Your Project Name>`
- Package name: `<Type Your Package Name>`
- Select a framework: `React`
- Select a variant: `TypeScript`

Step 3: Install Dependencies
```bash
# Yarn
yarn install

# NPM
npm install
```

Step 4: Setup Prettier
- Install package `prettier`
```bash
# Yarn
yarn add prettier

# NPM
npm install prettier
```

- Create a `.prettierrc` file and add following settings:
```json
{
	"printWidth": 100,
	"tabWidth": 2,
	"semi": false,
	"singleQuote": true,
	"bracketSameLine": false,
	"trailingComma": "es5",
	"bracketSpacing": true,
	"arrowParens": "avoid",
	"parser": "typescript",
}
```