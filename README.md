![image](https://github.com/subhajittewary/assignment-rating-js/assets/48327032/e895ed46-54db-4d18-aebf-9e083f27a41b)

# Rating Component

This project demonstrates a reusable rating component implemented in vanilla JavaScript. The rating component allows users to interactively select a rating using stars.

## Features

- Renders a configurable number of star ratings.
- Updates the rating based on user clicks and hover events.
- No external dependencies; pure JavaScript implementation.

## Usage

To use the rating component in your project:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/rating-component.git
   cd rating-component
   ```

2. **Include the script:**

   Add the following script tag in your HTML file where you want to use the rating component:

   ```html
   <script type="module" src="index.js"></script>
   ```

3. **HTML Structure:**

   Define an element with an ID where you want to render the rating component:

   ```html
   <div id="app1"></div>
   <div id="app2"></div>
   ```

4. **JavaScript Initialization:**

   In your JavaScript file (e.g., `index.js`), import the rating component and initialize it for each container:

   ```javascript
   import { renderRatingComponent } from './index.js';

   document.addEventListener("DOMContentLoaded", () => {
     renderRatingComponent("app1", 4, 5);  // Example: Render a rating component with ID 'app1', default rating 4, and 5 stars
     renderRatingComponent("app2", 3, 10); // Example: Render another rating component with ID 'app2', default rating 3, and 10 stars
   });
   ```

5. **Customization:**

   - `renderRatingComponent(containerId, defaultRating, totalRating)`: Renders a rating component inside the element with ID `containerId`, starting with `defaultRating` and displaying `totalRating` stars.

6. **CSS Styling:**

   Customize the appearance of the rating stars by editing the CSS in `style.css`.

## Structure

The project structure is as follows:

- `index.js`: Contains the main JavaScript logic to render and manage the rating component.
- `utils.js`: Utility functions for updating stars based on user interactions.
- `style.css`: CSS styles for the rating component.
- `README.md`: This file, providing an overview of the project and instructions.
