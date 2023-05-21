# Simple ExpressJS app to check if word can form a palindrome

## Tools used
- ExpressJS
- Jest + Supertest

## Installation + starting the server

1. Clone the app:

```bash
$ git clone git@github.com:elainedcb/palindrome-checker-express-js.git
```

2. Install Dependencies

```bash
$ yarn install
```

3. Start the server
```bash
$ yarn start
```

Note: Ensure that port :8081 is available

## Send word to check if it can be a palindrome

Once server is up, in postman or in your browser, go to `http://localhost:8081/{textToCheck}`

Example

```bash
$ curl http://localhost:8081/test
```

It should return
```bash
$ {"data":{"anagram":"test","canFormPalindrome":false}}
```

## Running tests using Jest

To run the jest tests, simply use the command

```bash
$ yarn test
```