# Ocius Website

![Build Status](https://codebuild.ap-southeast-2.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoid2Z4V2xWZzM2U3IzZmkzVE9RUnNnd3AwSk1VRzhlTkxJbUxpYUVkazFKdm80Z1E4U2NXUFFFSERnWmlpejA0UDZGbGZlc29Ta1NKZTNiVkFiUTBwMEY0PSIsIml2UGFyYW1ldGVyU3BlYyI6IjdHcU1MSEk4My9VWnZrcVoiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master)

This is the official repository for Ocius website, located at https://ocius.com.au. Ocius Technology Ltd (formerly Solar Sailor Holdings Ltd) is an Australian public unlisted company with Research and Development facilities at the University of NSW. The company is widely recognized in the international marine transportation industry.

## Structure

The project is split into two parts, [main website](https://ocius.com.au) and the [live page](https://ocius.com.au/live). You'll probably just want to head over over there and see them directly on the web. Technologies are used:
- [GatsbyJS](https://www.gatsbyjs.org)
- [AWS Amplify](https://aws.amazon.com/amplify/), hosting
- [Styled Components](https://styled-components.com)
- [Carbon Components](https://www.carbondesignsystem.com)
- [Loadable Components](https://loadable-components.com)

## Coding style

This project uses prettier (with Airbnb config). The project also uses ESLint to enforce good practice and consistency, the configuration is common to the whole project, to run it:

```
npm run lint
```

## Installation

```
# Clone this repo
git clone https://github.com/ocius/website ocius

# Change directory
cd ocius

# Install dependencies
npm install
npm install -g gatsby-cli

# Run project locally (for development), go to http://localhost:8000
gatsby develop

# Build the project (for production)
gatsby build

# Test the built project locally, go to http://localhost:8000
gatsby serve
```

## Contributing 

- Check out the `development` branch 
- Commit your changes 
- Run `git push origin development`

