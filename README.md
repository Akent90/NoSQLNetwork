# NoSQLNetwork

![License Badge](https://img.shields.io/badge/license-MIT-blue.svg)

## Description

NoSQLNetwork is a complete back-end API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. This app uses Express.js for RESTful API routing, a MongoDB database, and the Mongoose ODM.

Here is a video recording of the API endpoints being tested in Insomnia:

https://drive.google.com/file/d/1S3zohJyODKK_quM_VaNKI3KnQdO-6fzj/view

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Questions](#questions)
- [References](#References)
- [License](#license)

## Installation

Installation Requirements:

Node.js: Download and install Node.js from the official website.
npm (Node Package Manager): npm comes bundled with Node.js.
MongoDB: Install MongoDB Community Edition from the official website.
Installation Steps:

Clone the repository to your local machine: git clone https://github.com/Akent90/NoSQLNetwork.git
Navigate to the project directory: cd NoSQLNetwork
Install dependencies using npm: npm install
Set up environment variables:
Create a .env file in the root directory of the project.
Define environment variables in the .env file, such as MONGODB_URI.
Seed the database (if necessary): npm run seed
Start the server: npm start
Access the API endpoints using tools like Insomnia or Postman.
Additional Notes:

Ensure MongoDB is running on your machine before starting the server.
Refer to the project documentation or reach out to the maintainers for assistance with any issues.

## Usage

Explore and interact with the available API endpoints using tools like Insomnia, Postman, or any HTTP client. If available, refer to the API documentation for detailed information on each endpoint, including request methods, parameters, and response formats. Test various functionalities of the application by sending requests to the API endpoints and verifying the responses.

## Contributing

Fork and clone the repository, then create a new branch for your contribution. Make changes to the codebase, commit them with descriptive messages, and push to your forked repository. Submit a pull request from your branch to the main repository, providing clear descriptions of your changes. Participate in the review process, addressing feedback as needed, until your changes are merged into the main branch.

## Tests

There are currently no tests, but future development will include Jest.

## Questions

Feel free to reach out to me directly at alexanderkent099@gmail.com

## References

This project was enhanced and informed by the following resources:

Mongoose Connection Options: https://mongoosejs.com/docs/5.x/docs/connections.html
Mongoose Populate Method: https://mongoosejs.com/docs/populate.html
Directly defining controllers as exports: https://stackoverflow.com/questions/48392379/how-to-call-mongoose-exported-model-function-from-express-controller-then-return, https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes, and https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export

## License

This project is licensed under the MIT license. More information can be found at [MIT](https://opensource.org/licenses/MIT).
