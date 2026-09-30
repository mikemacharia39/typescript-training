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