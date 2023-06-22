# Forkify

Forkify is a vanilla Javascript application that interacts with the forkify API to get and display food recipes.
The app uses modern JavaScript tools such as Webpack to bundle the modules, and, Babel to convert ES6, ES7 and ES8 back to ES5. 
The user can search for a specific recipe, adjust their serving size, and add the ingredients to their shopping list.
They can also save their favourite recipes via local storage.

The app is deployed and available to use via:

https://arcane-hollows-91222.herokuapp.com/

Fokify is a project from Jonas Schmedtmann's 'The Complete JavaScript Course' on Udemy.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Search for recipes: Users can search for recipes by entering keywords or ingredients.
- Recipe details: Detailed information about each recipe, including ingredients, preparation time, servings, and directions.
- Bookmarking: Users can bookmark their favorite recipes for easy access.
- Shopping list: Users can add ingredients from the recipes to a shopping list, which can be printed or saved for later use.
- Responsive design: The application is fully responsive and can be accessed from various devices.
- User authentication: Registered users can create accounts, log in, and access their saved bookmarks and shopping lists.

## Installation

1. Clone the repository:
git clone https://github.com/joenele/forkify.git


2. Change into the project directory:
cd forkify


3. Install the dependencies:
npm install


4. Obtain an API key from [Food2Fork](https://www.food2fork.com/about/api) and set it as an environment variable named `FORKIFY_API_KEY`. You can do this by creating a new file named `.env` in the root directory and adding the following line:
FORKIFY_API_KEY=your-api-key


5. Start the development server:
npm start


6. Open your web browser and visit `http://localhost:8080` to access the application.

## Usage

- **Search for recipes**: Enter keywords or ingredients in the search bar and press Enter or click the search button. The application will display a list of matching recipes.
- **View recipe details**: Click on a recipe from the search results to view its details, including ingredients and preparation steps.
- **Bookmark a recipe**: To bookmark a recipe, click the bookmark icon on the recipe details page. You will need to create an account or log in if you haven't already.
- **Create a shopping list**: On the recipe details page, you can add ingredients to the shopping list by clicking the "Add to shopping list" button. You can access and manage your shopping list through the navigation menu.
- **Manage bookmarks and shopping lists**: After logging in, you can access your saved bookmarks and shopping lists through the navigation menu.

## Contributing

Contributions to Forkify are welcome! If you find any bugs, have suggestions for improvements, or would like to add new features, please open an issue or submit a pull request. When contributing, please follow the existing code style and conventions, and provide detailed information about your changes.

## License

This project is licensed under the [MIT License](LICENSE).
