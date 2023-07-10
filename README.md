<h2 align="center">CHAIRMAN HAB</h2>

**A React-Node Based Application** developed by Students' Web Committee, IIT Guwahati, for HAB Chairman Dr. Gagan Kumar.

-------

# Development Readme

### Prerequisites

1.  [Git](https://git-scm.com/downloads).
2.  [Node & npm](https://nodejs.org/en/download/) _(version 18 or greater)_.
3.  [nvm](https://dev.to/skaytech/how-to-install-node-version-manager-nvm-for-windows-10-4nbi).
4.  Clone of the repo.

## Installation of the Project

1. Clone the project by -  `git clone https://github.com/swciitg/Chairman_HAB.git` to ensure it clones all the submodules as well.
2. Go to the directory backend by -  `cd backend`
3. Follow the next procedures to run the project in your local environment.


## Running the Project

### Steps to run backend

In order to install all packages follow the steps below:

 1. Move to <b> backend </b> folder
 3. To make sure you have the required npm version -  `nvm use 18`
 4. If you don't have the desired version of node install it by -  `nvm install 18` and then run -  `nvm use 18`
 5. Then to install all the required packages run -  `npm install`
 6. Then run `node index.js`
 7. Your server should start!

 > The server will be served on **http://localhost:5000/**

<br>

### Steps To Set Up Frontend

In order to install all packages follow the steps below:

 1. Move to <b> frontend </b>
 3. `npm install`
 4. Run `npm start` to start the front-end.

> You can now view frontend in the browser **http://localhost:3000/chairman_hab**.

### Directory Structure

The following is a high-level overview of relevant files and folders.

```
backend
├── config
│   ├── keys.js
│   └── passport-setup.js
├── controller
│   ├── about.js
│   ├── alumni(PhD-Scholars).js
│   └── ...
├── dirname.js
├── index.js
├── models
│   ├── about.js
│   ├── alumni(PhD-Scholars).js
│   ├── books.js
│   ├── collabarators.js
│   ├── collaborators.js
│   ├── experimentalFacilities.js
│   ├── groupMembers.js
│   ├── homePageImage.js
│   ├── invitedTalks.js
│   ├── journalPublications.js
│   ├── keyReasearchArea.js
│   ├── miscellaneous.js
│   ├── pastMember.js
│   ├── profile.js
│   ├── projects.js
│   ├── publishedConferencePapers.js
│   ├── simulationSoftwares.js
│   ├── updates.js
│   └── user.js
├── package-lock.json
├── package.json
├── requests
│   └── post.rest
├── routes
│   └── ...
└── utils
    └── appError.js


frontend
├── README.md
├── dist
│   └── output.css
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   └── ...
├── src
│   ├── App.js
│   ├── components
│   │   ├── Aboutus
│   │   ├── Admin
│   │   │   ├── AboutForm
│   │   │   ├── AlumniForm
│   │   │   ...
│   │   │   └── UserForm
│   │   ├── Footer
│   │   ├── Header
│   │   ├── Members
│   │   └── Project-Table
│   ├── constant
│   ├── index.css
│   ├── index.js
│   └── screens
│       ├── Home
│       │   ├── HomeScreen.js
│       │   └── image1.png
│       ├── Main
│       │   └── Main.js
│       │   ...
│       ├── admin
└── tailwind.config.js

```
