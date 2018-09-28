# React-Nyne

[![Build Status](https://travis-ci.org/abdulfataiaka/react-nyne.svg?branch=develop)](https://travis-ci.org/abdulfataiaka/react-nyne)

This is a simple react game application which requires players to select different possible combinations of numbers based on the number of stars shown to them.

Players wins the game when they successfully use all available numbers while they have the ability to refresh the number stars shown by clicking on the refresh button a limited number of times, usually `5 times`.

Players looses the game when they have no more refresh counts and there is no possible combination available for the displayed number of stars.

## Getting started

The requirements for this application includes
- [NodeJS v8.11.3+](https://nodejs.org/en/)
- [Yarn Package Manager](https://yarnpkg.com/en/docs/install#mac-stable)

To run the application on your local machine, follow the steps below
```console

$ git clone https://github.com/abdulfataiaka/react-nyne.git

$ yarn install

$ yarn start

```

## Running tests

Tests has been written to ensure implementations don't break at any point in time. Run the tests using the command below.

If jest has been installed local to the project, Run
```console
$ yarn run tests
```

Otherwise, Run
```console
$ jest
```

## Deployment

This game application has been deployed on now, install `NOW` with yarn globally
```console

$ yarn global add now

```

See all deployed instances of `react-nyne` app
```console

$ now list react-nyne

```

To remove the deployed instances for `react-nyne` app
```console

$ now remove react-nyne

```

To deploy application again, checkout to the instance of the app you want to deploy
```console

$ now deploy

```

## Development technologies

The below list includes technologies put together to build this application
- [React Library](https://reactjs.org/docs/)
- [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/)
- [SCSS](https://sass-lang.com/)
- [Enzyme](http://airbnb.io/enzyme/)
- [Babel 7](https://babeljs.io/docs/)
- [Jest](https://jestjs.io/)
- [Font Awesome](https://fontawesome.com/icons)

## Author

Abdulfatai Aka - `Software Developer` - [Andela](https://andela.com)
