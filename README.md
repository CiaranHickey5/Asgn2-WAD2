# Assignment 2 - Web API.

Name: Ciaran Hickey

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Setup requirements](#setup-requirements)
- [API Configuration](#api-configuration)
- [API Design](#api-design)
- [Security and Authentication](#security-and-uthentication)
- [Integrating with React App](#integrating-with-react-app)

## Overview

## Features.

- Login and Sign Up pages added
- Protected routes included to allow users to view movies only when logged in
- Login and sign up added to site header
- API endpoints called from the frontend app

## Setup requirements.

To setup the app after cloning my react app, I started the react app in the terminal npm start. This run the app on localhost:3000. I then configured my api and finally ran npm start for the api server which ran on 8080.

## API Configuration

These are examples of what was placed in my .env file to configure my API before running it.

NODEENV=development
PORT=8080
HOST=
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret

## API Design

This is an overview of the web API design:

- /api/movie | GET | Gets a list of movies
- /api/movie/{movieid} | GET | Gets a single movie
- /api/movie/{movieid}/reviews | GET | Get all reviews for movie
- /api/movie/upcoming | GET | Get list of upcoming movies
- /api/movie/genres | GET | Get movie genres
- /api/movie/:id/images | GET | Get movie genres
- /api/movie/:id/videos | GET | Get movie videos
- /api/movie/:id/similar | GET | Get list of similar movies
- /api/movie/now_playing | GET | Get list of now playing movies
- /api/movie/popular | GET | Get list of popular movies

## Security and Authentication

Passport and JWT(JSON Web Tokens) were used for security and authentication.

## Integrating with React App

To integrate with my react app I changed the endpoints to use my movie api to fetch from the client side instead of calling from the TMDB database.
