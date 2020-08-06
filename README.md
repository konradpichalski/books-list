# Books List

Books list is a front-end React app build using `create-react-app` with `react-bootstrap` as UI library.

It utiles the API POST request, which results are then displayed to the user. It can be done by paginated results:

![Image of the app front page](/src/images/screen1.png)

or using search input for the filtered results:

![Image of the app search functionality](/src/images/screen2.png)

## Addtional libraries

The project uses `axios` for handling API requests, `react-router-dom` for routing and `jest` + `enzyme` for unit tests.

## Installation

To run the app, please follow the below:

1. Clone or download the repository from Github: https://github.com/konradpichalski/books-list

2. Use the command line tool of your choice to install all the dependencies. To do that, you need to run `yarn install` from within the project folder (root directory)

3. To run the app in your localhost directory, use the `yarn start` command line, which will run the application in `http://localhost:3000` in your browser where you can interact with the app.

## Additional notes

1. There are unit tests that you can run by using `yarn test` in your command line from within the project root directory.

2. Wildcard for 'page not found' have been added to handle wrong directory inside the app.

3. There's an option to search the books base by any filter - if there's no results, or if you simply want to get back to the full books list - you can use the 'Reset' button on results display.
