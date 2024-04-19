
Title: Color Search Tool

Description:
The Color Search Tool is a web application designed to help users explore and search for colors based on their hexadecimal (hex) or RGB values. The application fetches a curated list of colors from the XKCD colors JSON file and displays them in a user-friendly interface. Users can search for colors by entering either a hex color code (e.g., "#FF0000") or an RGB color code (e.g., "rgb(255, 0, 0)"). Upon entering a valid color code and pressing Enter, the application sorts the colors based on their similarity to the inputted color and displays the top matching results.

Key Features:

Color Search: Users can enter either hex or RGB color codes to search for colors.
Color Similarity Sorting: The application sorts the colors based on their similarity to the searched color, allowing users to find visually similar colors quickly.
Color Information: Each color displayed in the table includes its name, hex code, RGB code, and HSL (Hue, Saturation, Lightness) code for easy reference.
Error Handling: The application provides error messages for invalid color inputs, guiding users to enter valid color codes.
Loading Indicator: A loading indicator is displayed while the color data is being fetched from the server or while searching for colors, providing feedback to users.
Technologies Used:

Frontend: React.js
Styling: CSS for styling components and layout
Data Fetching: Axios for making HTTP requests to fetch color data
Color Conversion: JavaScript functions for converting between hex, RGB, and HSL color formats
This Color Search Tool serves as a useful resource for designers, developers, and anyone working with colors to explore, search, and discover new color palettes efficiently.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
