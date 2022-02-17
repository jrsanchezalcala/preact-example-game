# Preact Example Game with Typescript + Docker


## Installation

1. Clone repository.
2. Run 'npm install' in the local copy (I hope you have NodeJS and NPM installed =)
3. Use one of:
    * `npm run build` for production build
    * `npm run dev` for development build (no minification)
    * `npm run start` for live server on `http://localhost:3030/`

Also, Windows shortcuts are here. See `*.bat` files.


## Docker

### Quick start

You can just run `docker_build.cmd` script.

Before run please remove `dist` folder, if any.

## Modes

### Production mode (build `dist` folder and exit)

In root folder run `docker-compose up` to build the files. Result will be
placed into `dist` folder. Stop the container afterwards.

#### Development + watch mode (build and watch changes)

In root folder run `docker-compose -f docker-compose.watch.yml up` to build the files. Result will be placed into `dist` folder and Webpack will start watching.

`node_modules` and `dist` folders will be mapped.

#### Development + devserver mode (build and run development server)

In root folder run `docker-compose -f docker-compose.start.yml up` to build the files. Result will be placed into `dist` folder and application will start watching. Webserver will be available on URL `localhost:3030`.

`node_modules` and `dist` folders will be mapped.

