# React + Vite Health Application

This project is a web application built using React and Vite. It focuses on various aspects of React development, including form handling, state management using hooks like useState, useContext, useReducer, styling, props, asynchronous API integration, routing, testing, and more. The application is themed around the healthcare domain and consumes data from an API provided within the repository.

## Table of Contents
- Overview
- Features
- Getting Started
  - Prerequisites
  - Installation
- Usage
- Contributing
- License
- Acknowledgments

## Overview
The project demonstrates key React concepts and practices by creating a web application related to healthcare. It covers the following aspects:

- Global context for theme management (light or dark).
- Integration with an API to fetch data.
- Use of useReducer for managing global state, including theme switching.
- Routing using React Router with the following routes:
  - /home: Displays a card for each dentist retrieved from the API.
  - /dentist/:id: Shows detailed information about a specific dentist.
  - /contacto: Implements a form with user information capture and validation.
  - /favs: Renders cards for dentists marked as favorites, stored in localStorage.
- Navbar and footer components shared across routes.
- Ability to mark dentists as favorites and store them in the current session's localStorage.
- Styling based on the selected theme (light or dark).

## Features
- Global state management with context and useReducer.
- Integration with an external API.
- Routing using React Router.
- Form handling with input validation.
- Theme switching between light and dark modes.
- Marking dentists as favorites.

## Getting Started
To get the project up and running on your local machine, follow these steps:

### Prerequisites
- Node.js installed (https://nodejs.org/)
- npm or yarn installed (usually comes with Node.js)

### Installation
1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run the following command to install dependencies:
...