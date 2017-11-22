# OMDB search tool

[![Build Status](https://travis-ci.org/GeoDoo/omdb.svg?branch=master)](https://travis-ci.org/GeoDoo/omdb) [![codecov](https://codecov.io/gh/GeoDoo/omdb/branch/master/graph/badge.svg)](https://codecov.io/gh/GeoDoo/omdb)

Query OMDB (Open Movie DataBase) and find movies, TV series and episodes or even games that you have been seeking forever with ease!

The API can be found here: http://www.omdbapi.com

## Application Setup

### Get your API KEY

To get your API KEY go to: http://www.omdbapi.com/apikey.aspx, register for one and it will be sent to you in your mailbox. 

### Add .env file

After this, create a .env file on your ROOT folder with this key pair:

REACT_APP_API_KEY=yourKey (replace only yourKey with the actual key)

### Available scripts

```sh
npm start

```sh
npm test

To create a production build, use 

```sh
npm run build