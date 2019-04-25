# To Create Build

## Initial Setup
- install node.js if not already installed
- clone repo, then navigate to this folder in the shell (in VS Code, just open a terminal from this project and it will be in the right place)
- run ``npm install`` to get all dependencies installed

## To Create a New Build
- run ``npm run build`` to create new build in /dist folder

Note: I ran into problems creating a minified version of the build using uglifyify and minify via NPM (couldn't figure out how to avoid those tools mangling the property names of my solution functions, so the initial display of functions had silly one letter long parameters). As a workaround, I just chucked the bundle.js contents into an online minifier (used https://www.minifier.org/).
