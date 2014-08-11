# mean-vagrant

An Ubuntu 12.04 Vagrant VM (64-bit) for developing web applications on the [MEAN](http://blog.mongodb.org/post/49262866911/the-mean-stack-mongodb-expressjs-angularjs-and) stack.

The sample web application illustrates a scalable directory structure, a REST API example, server-side unit testing with [Mocha](http://visionmedia.github.io/mocha/) & [Chai](http://chaijs.com/), and client-side unit testing with [Karma](http://karma-runner.github.io/) & [Jasmine](http://jasmine.github.io/).

## Prerequisites

* [VirtualBox](https://www.virtualbox.org/)
* [Vagrant](http://www.vagrantup.com/)

## Setup

### Starting the VM

* Make sure you have VirtualBox and Vagrant installed (see Prerequisites)
* Clone this repository and `cd` into the directory
    * Launch the VM by typing `vagrant up`
        * When this command is executed, the VM is initialized (see VM Environment)
        * Note that this step may take some time to complete
* SSH into the VM by typing `vagrant ssh`
* Type `cd /vagrant` to navigate to the shared folder

### Installing packages

#### Server-side packages

* `cd` into the `server` directory
* Type `npm install` to install the server-side Node packages 

#### Client-side packages

* `cd` into the `client` directory
* Type `npm install` to install the client-side Node packages 
* Type `bower install` to install the Bower packages

#### Installation tips when running npm install

* If you receive an error prompting you to re-run command as root, try `sudo npm cache clean` first and re-run the command
* If you are running on Windows and receive an error related to creating symlinks on a Windows share, try `npm install --no-bin-links`

### Running the app

* `cd` into the `server` directory
* You can launch the Node app in 2 ways:
    * Simply type `node server.js`
    * Or type `supervisor server.js` to use the Node supervisor script
* Open a browser window and go to `localhost:3000`

The app should be up and running!

### Running the tests

#### Server-side tests

Server-side unit tests use Mocha & Chai and are executed using grunt. See `server/Gruntfile.js` for more details. Note that it's best to run in a new terminal window.

* `cd` into the `server` directory
* You can launch the test in 2 ways:
    * Type `grunt mochaTest` to run the tests once
    * Type `grunt watch` to automatically re-run tests when any file in the `server` directory has changed

#### Client-side tests

Client-side unit tests use Karma and Jasmine and are executed using grunt. See `client/Gruntfile.js` for more details. Note that it's best to run in a new terminal window.

* `cd` into the `client` directory
* Type `grunt karma`; note that tests will automatically re-run when any file in the 'client/app' directory has changed

## Directory structure

    ├── provision.sh            --> Vagrant VM provision file
    ├── Vagrantfile             --> Vagrant VM configuration file
    ├── client                  --> client-side files
    │   ├── Gruntfile.js        --> client-side grunt file
    │   ├── app                 --> AngularJS files organized by feature
    │   │   ├── app.js          --> main AngularJS file
    │   │   ├── common          --> AngularJS files that are common across app
    │   │   ├── example
    │   │   ├── home
    │   │   └── navbar
    │   ├── bower.json          --> bower packages
    │   ├── index.html          --> main HTML page for app
    │   ├── package.json        --> client-side npm packages
    │   └── styles              --> CSS files
    │       └── app.css
    └── server                  --> server-side files
        ├── Gruntfile.js        --> server-side grunt file
        ├── lib                 --> core server-side files
        │   ├── config          --> server configuration
        │   ├── models          --> MongoDB models
        │   └── routes          --> routes for serving index.html and REST API
        ├── package.json        --> server-side npm packages
        └── server.js           --> Node / ExpressJS server file

Note that test files are placed alongside the files they test, rather than in a separate directory. Test files end in `.spec.js`.