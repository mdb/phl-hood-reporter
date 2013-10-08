# Phl Hood Reporter

A dirt simple web application that reports what Philadelphia neighborhood you're in.

The app retrieves your geocoordinates and uses the [philly-hoods](https://github.com/davewalk/philly-hoods) API to determine what neighborhood you're currently in.

## Why?

Wow friends with an expert knowledge of the nebulous boundaries between Kensington and Port Richmond! Prove that Cedar Park is not Spruce Hill!

## Demo

[Check it out in action!](http://bit.ly/19dtPA1)

## Install, Develop, Build &amp; Deploy

1. Install [bundler](http://bundler.io/), [Node.js](http://nodejs.org/), and [bower](http://bower.io/)

2. Clone phl-hood-reporter and install its dependencies:

  git@github.com:mdb/phl-hood-reporter.git
  cd phl-hood-reporter
  bundle install
  bower install

3. Run the development server to access the app at localhost:4567

  bundle server

4. Compile the app to static HTML, CSS, and JavaScript files

  rake build

5. Deploy to Amazon S3

  rake deploy
