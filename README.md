# WeFoxAdrianGarcia 
Test for joining wefox company.

> You will need docker, docker-compose and angular-cli to run the app
## Docker development version
Use [docker-compose](https://docs.docker.com/compose/install/) and run the command to start wefoxclient and wefoxapi containers.

docker-compose up

In your local machine, navigate to [http://localhost:8089](http://localhost:8089).
## Development mode
Follow the steps

Run the command

_ docker run --rm -p 3050:3000 wefoxgroup/wg-web-challenge

after run the docker images run: 

_ ng serve

Go to your browers and reach -> [http://localhost:4200](http://localhost:4200).

Note: Be aware to have [angular/cli](https://angular.io/cli) installed, start the API

## Author
Adrian Garcia

# Wefox

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
