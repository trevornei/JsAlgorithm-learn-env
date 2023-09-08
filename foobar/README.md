# JsAlgorithm-learn-env

NOTE: This project uses these dependencies.
ncy is a code coverage generator which shows how much of our code has been unit tested!
Mocha is a testing library for node.js
Chai is an assertion library that is used in conjunction with Mocha.
    - Assertion libraries help you verify that code is correct.

What are the benefits of using Chai's BDD vs Assert?
    - More human readable
    - Can chain together testing methods.

Setup Mocha and Chai
  Once the dependencies have been installed, jump to the package.json file and edit the "scripts" object.
  Alter the value of test to the string "mocha test".
  Test will be the folder that runs all of the unit tests.

Create a folder named: test
Create file named: app.test.spec.js (.spec extention file is optional)

Run command: npm run test
    -Should expect "0 passing"

Export the function that you would like to select inside the file that it resides in.