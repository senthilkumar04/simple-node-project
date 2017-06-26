# Simple Node Notes Application Project

Simple notes application which creates, read, and deletes the notes through the file which will be getting created in your local machine.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the applciation and how to install them

```
Node -- any versiion
NPM -- any version

```

### Installing

A step by step series of examples that tell you have to get a development env running

1. Clone the project using the command
```
git clone "repo-name" or download the repo
```

2. Install the packages needed for the application using the commnand
```
npm install
```

3. To use the application :
```
* **To add a note**
node app.js add -t='Title of the note' -b='Body of the note'

* **To get the list of notes**
node app.js list

* **To get a note**
node app.js get -t='Title of the note'

* **To remove a note**
node app.js remove -t='Title of the note'
```

## Running the tests

To run the tests for application use the below command
```
npm test
```


## Authors

* **Senthil Kumar**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
