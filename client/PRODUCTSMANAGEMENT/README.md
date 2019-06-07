# Technology used
For this implemented task Angular was used with Bootstrap 4.Also Karma and Jasmine were used for unit testing purposes.

#To run docker file locally (if you are using Windows)
Make sure that docker toolboox is running before attempting to run the docker file locally
1-right click on command Palette in DockerFile then select Docker:Build Image if Docker extension is installed
otherwise type : docker build --rm -f "DockerFile" -t productsmanagement:(the name you would like to call the image)
2-then type in vs code terminal while on DockerFile : docker run -p 80:80 productsmanagement:(the name you called it)
3- open 192.168.99.100 in chrome

#To run the automated code that deploys the app to aws 
1-navigate to scripts then deploy.js then type node deploy.js in the the vscode erminal

# PRODUCTSMANAGEMENT
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
