# typescript-training
## What is typescript?
Simple definition: TypeScript is a superset of JavaScript that compiles to plain JavaScript

### Further definition
TypeScript is a free and open-source programming language developed by Microsoft that acts as a strict syntactic superset of JavaScript. In simple terms, it is "JavaScript with syntax for types". Because web browsers and runtimes cannot execute TypeScript directly, the code goes through a compilation (or transpilation) step where all the type syntax is stripped away, leaving plain JavaScript that can run anywhere.


Open source language from Microsoft
Static type
TypeScript is a superset of JavaScript
Provides optional static typing
Supports new ECMAScript features
IDE Support is a huge win

## Why should we adopt typescript?
Typed JavaScript, code quality and understanding
Types act as documentation
TypeScript as JavaScript
Type inference
Structural Types


## TypeScript vs JavaScript
TypeScript is a superset of JavaScript
TypeScript can be compiled to different versions of JavaScript i.e. ECMAScript versions

## TypeScript commands
tsc -version                    # check version
tsc --init                      # generated a tsconfig.json file
tsc                             # generates .js files from .ts files (Compiles the current project (tsconfig.json in the working directory.))
tsc -watch                      # detects for new file changes
tsc <path-to-ts-file>/<file.ts> # compiles the actual typescript file
tsc --outdir disc               # defines the directory to put the compiled files in. Can be defaulted in .tsconfig.json file 

## Setting up webpack for typescript
Webpack takes care of compiling our typescript and our localserver and tracking our changes

## Project setup fixes and notes

### Dependency versions
- `webpack-cli` must be pinned to `^5.x` — version 7+ requires `webpack-dev-server@^5` or `^6`, which conflicts with older setups
- `webpack-dev-server` was upgraded from `^4.x` to `^5.x` to match `webpack-cli@5`
- `typescript` was upgraded from `4.7.4` to `^5.4.0` because newer versions of `@types/node` (pulled in as a transitive dependency) use TypeScript 5.2+ syntax (`using` keyword). TypeScript 4.x cannot parse this, causing build errors even with `skipLibCheck: true`

### webpack.config.js
- `mode: 'development'` was added to suppress the webpack mode warning and enable development defaults (readable output, source maps etc.)
- `devServer.static: './'` was added so webpack-dev-server serves `index.html` from the project root. Without this it defaults to looking in a `public/` folder, resulting in a `Cannot GET /` error at localhost:3000