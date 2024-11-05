# travis-ci
Configuration Management Activity - IFPE

# PASSO A PASSO PARA EXECUTAR O TRAVIS CI

Primeiro passo é clonar o projeto do repositorio do GitHub

# Inicialize o projeto com um arquivo package.json

npm init -y

# Instale o TypeScript e Jest
npm install typescript jest ts-jest @types/jest --save-dev

# Inicialize o TypeScript
npx tsc --init

# Inicialize o Jest para TypeScript
npx ts-jest config:init