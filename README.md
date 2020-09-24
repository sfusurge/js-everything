# js-everything
js 0-100 crash course
look at `plan.md` for the order I planned to do stuff in... didn't go to plan (no pun intended) but still the best order to learn stuff in my opinion

# Running the Examples
## Requirements:
  1. install [NodeJS](https://nodejs.org/en/) (kinda like the 'python' program)
  2. git clone this repo
  3. open a terminal (I use gitbash on Windows, but any will work) and cd to wherever you downloaded the repo
  4. type in `npm install` to install the required JS libraries
  4. type in `node server.js` to start up the localhost server.
  5. type this into your browser `localhost:3000/`
  6. open up `index.js` in some text editor or IDE (I use [VSCode](https://code.visualstudio.com/))

## Running a module
  - `index.js` has a bunch of 'modules' that show off differnt parts of JS. They are named pretty well so find the topic your are interested in and open up that JS file ex `var.js`
  - Uncomment that module (by removing the two `//` in front) in `index.js` and comment out the rest (make sure every other `import {} from ..` has a `//` infront of it).
  - refresh your browser page (the `localhost:3000/` webpage)
  - click F12 or right click anywhere on the browser and click `inspect...`
  - navigate to the `console tab` in the newly opened 'dev tools' sidebar.
  - you should see the `console.log(...)` calls seen in the uncommented module.

