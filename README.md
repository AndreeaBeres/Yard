#Skip Selection App

This is a Skip Selection App that allows users to choose a skip size from a list of available options. The app provides detailed information about each skip, including size, price per week, and availability for use on the road. It is built wih React and includes features like responsive design, dynamic data fetching, and visual feedback.


The following changes applied to this App:

1. Design and UI/UX Improvements

Modern Aesthetics:

 Added a gradient background to the main container for a modern look.
 Used consistent color schemes for text and buttons to improve visual appeal.

Consistent Styling:

 Applied consistent paddling and margins for a cleaner layout.
 Used uniform font sizes and styles for text elements to maintain visual consistency.

Visual Feedback:

 Implemented hover effects on skip cards to provide users with visual feedback.
 Added clear visual cues for selected skip cards, helping users understand their selection.

2. Functionality Intact
 
Selecting a Skip:

 Maintained the core functionality of selection a skip and displaying its details.
 Used React's useState hook to manage the selected skip state.

Error Handling:

 Added error handling to manage cases where the API fetch fails.
 Displayed error messages to inform users when something goes wrong with the data fetch.

3. Responsiveness

Media Queries:
 
 Ensured the layout adapts to different screen sizes using CSS media queries.
 Tested the application on various devices to ensure it looks good on both mobile and desktop
 screens.

Flexible Grid Layout:

 Implemented a grid system that adjusts the number of columns based on the screen width,
 ensuring a responsive design.

Avoiding Overlaps:

 Added padding to the bottom of the container to prevent the bottom bar from overlapping the 
 last few skip options.

4. Data Handling

API Fetch:

 Fetched skip data from the provided API endpoint.
 Merged the fetched data with default data to ensure all necessary fields are present.

Fallback  Data:

 Used default skip data as a fallback in case the API fetch fails or the fetched data is incomplete.

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
