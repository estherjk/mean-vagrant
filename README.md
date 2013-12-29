# mean-vagrant

An Ubuntu 12.04 Vagrant VM (64-bit) for kickstarting web application development on the [MEAN](http://blog.mongodb.org/post/49262866911/the-mean-stack-mongodb-expressjs-angularjs-and) stack

## Prerequisites

* [VirtualBox](https://www.virtualbox.org/)
* [Vagrant](http://www.vagrantup.com/)

## VM Environment

### What's provisioned in the VM

* [Ubuntu 12.04 (64-bit)](http://www.ubuntu.com/): Linux OS
* [MongoDB](http://www.mongodb.org/): document NoSQL database
* [Node](http://nodejs.org/): server-side JavaScript platform
* [Bower](http://bower.io/): front-end package manager for the web
* [Grunt](http://gruntjs.com/): JavaScript task runner
* [Supervisor](https://github.com/isaacs/node-supervisor): supervisor script for Node that listens for changes in the directory and re-launches Node when a change is made; it makes Node development a lot quicker

See `provision.sh` for more details

### Node packages

* [ExpressJS](http://expressjs.com/): web application framework for node
* [Jade](http://jade-lang.com/): Node template engine
* [Mongoose](http://mongoosejs.com/): MongoDB object modeling for Node

See `package.json` for more details

### Bower packages

* [AngularJS](http://angularjs.org/): JavaScript MVW framework 
* [Bootstrap](http://getbootstrap.com/): collection of HTML and CSS design templates
* [Font Awesome](http://fontawesome.io/): free icon library for Bootstrap
* [jQuery](http://jquery.com/): JavaScript library for HTML DOM manipulation

See `bower.json` for more details

## Setup

1. Make sure you have VirtualBox and Vagrant installed (see Prerequisites)
2. Clone this repository and `cd` into the directory
    * Launch the VM by typing `vagrant up`
        * When this command is executed, the VM is initialized (see VM content)
        * Note that this step may take some time to complete
3. SSH into the VM by typing `vagrant ssh`
    * The repository files on the host machine are also shared with the VM; type `cd /vagrant` to navigate to the shared folder
    * Install the node and bower packages
        * To install the node packages, type `npm install`
        * To install the bower packages, type `bower install`
    * Seed MongoDB with a sample user by typing `grunt dbseed` (see Gruntfile.js)
4. Launch the node app
    * You can launch the node app in 2 ways:
        * Simply type `node app.js`
        * Or type `supervisor app.js`
    * Navigate to `localhost:3000`. The app should be up and running!