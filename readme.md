Dummy
Dummy is a utility library for generating dummy data for testing purposes.

Installation
To use Dummy in your project, you can install it via npm:

Copy code
npm install dummy
Usage
After installing the Dummy package, you can import it into your project using require:

javascript
Copy code
const Dummy = require('dummy');
Once imported, you can use the various functions provided by Dummy to generate dummy data for testing. Here's an example of how to use the word function to generate a random word:

javascript
Copy code
const randomWord = Dummy.word();
console.log(randomWord); // Output: ExampleWord
Functions
Dummy provides the following functions for generating dummy data:

word(): Generates a random word.
name(): Generates a random name.
paragraph(count): Generates random paragraphs.
email(): Generates a random email address.
phoneNumber(): Generates a random phone number.
number(options): Generates a random number within a specified range.
date(options): Generates a random date within a specified range.
uniqueId(idLength): Generates a unique identifier consisting of random alphanumeric characters.
For detailed documentation on each function and its usage, please refer to the API Documentation section below.

API Documentation
For detailed documentation on each function provided by Dummy, including parameter descriptions, return types, and usage examples, please refer to the API Documentation.

License
This project is licensed under the MIT License - see the LICENSE file for details.