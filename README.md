# Preact Example Game with Typescript + Docker

## Installation

1. Clone repository.
2. Run 'npm install' in the local copy (I hope you have NodeJS and NPM installed =)
3. Use one of:
   - `npm run build` for production build
   - `npm run dev` for development build (no minification)
   - `npm run start` for live server on `http://localhost:3030/`

Also, Windows shortcuts are here. See `*.bat` files.

## Docker

### Quick start

You can just run `docker-compose up` script.

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

#### NOTES ABOUT THE EXERCISE

Due to the time , i wont be able to do test for all classes and other things that i have to research more becouse when you work with webcomponents in preact ther are some things that you cant do like pass functions, objects or even the context. Anyway i put a list of pendings things to finish this project.

- Finish test (almost)
- Research if it is posible to replace Service for Context in preact (i tried to use context with webcomponents before with unsuccesfull result, but i should try again)

I realised that Preact library for webcomponents is usefull for webcomponents that are simple , for bigger components i think is not the best solution to use Preact Webcomponent. It will need more integrations in order to work easier with it.
