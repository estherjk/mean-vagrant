#!/usr/bin/env bash

# install MongoDB
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list

# install initial packages
sudo apt-get update
sudo apt-get install -y build-essential python-software-properties git mongodb-10gen libfontconfig

# install latest version of node.js
sudo add-apt-repository -y ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install -y nodejs

# install npm packages
sudo npm install -g bower grunt-cli supervisor

# clean npm cache to make sure npm install works locally
# see https://github.com/npm/npm/issues/2773
sudo npm cache clean