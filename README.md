
# myPetPal

Taking care of our pets is a lot of work! Use this app to keep track of all the tasks necessary to keep your furry, feathered, & scaley friends happy & healthy.
***
## Table of Contents
* [myPetPal](#mypetpal)
* [Table of Contents](#table-of-contents)
* [Links:](#links-)
* [Demo](#demo)
* [Screenshots](#screenshots)
  + [Home page](#home-page)
  + [Calendar](#calendar)
  + [Pet dashboard](#pet-dashboard)
  + [Add tasks](#add-tasks)
* [Tech Stack](#tech-stack)
* [Features](#features)
* [Run Locally](#run-locally)
* [Environment Variables](#environment-variables)
* [Roadmap](#roadmap)
* [Lessons Learned](#lessons-learned)
* [Authors](#authors)
***
## Links: 
- [Submit a bug/issue](https://github.com/raissa-k/myPetPal/issues)
- [User flow (in Wiki)](https://github.com/raissa-k/myPetPal/wiki/User-flow)


## Demo

[myPetPal](https://myPetPal.onrender.com)

Note that the website is hosted on Render and may take a while to load if it has been inactive for a while.
```
To avoid signing up, you may log in with the following credentials:
- Email: tester3@gmail.com
- Password: testtest
```


## Screenshots

### Home page
![Home Page](https://i.imgur.com/4itp9b7l.png)

### Calendar
![Calendar view](https://i.imgur.com/JBcxCOtl.png)

### Pet dashboard
![Pet Dashboard](https://i.imgur.com/UhVx5tPl.png)

### Add tasks
![Add tasks](https://i.imgur.com/j4AB1z3l.png)



## Tech Stack

**Client:** JavaScript, EJS, Bootstrap CSS

**Server:** Node, Express, MongoDB

**Dependencies:** 
```bcrypt, connect-mongo, cross-fetch, date-fns, dotenv, ejs, express, express-flash, express-session, method-override, mongodb, mongoose, morgan, node-cache, nodemon, passport, passport-local, validator```


## Features

- Secure login with Passport Auth
- Cache for external API calls
- Responsive for desktop & mobile


## Run Locally

Clone the project

```bash
  git clone https://github.com/raissa-k/myPetPal.git
```

Go to the project directory

```bash
  cd mypetpal
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file in `/config/.env`

`PORT: <port>` (can be any port, ex: 3000)

`DB_STRING: <your database uri>`


## Roadmap

- [x] ~~Add cache method for external API calls, namely Unsplash for the index picture~~
- [x] ~~Increased readability of controllers~~
- [x] ~~Improved accessibility by adding ARIA roles, adding an accessible date picker, and ensuring buttons, labels and inputs had appropriate names/descriptions.~~
- [ ] Clean and minimize .css and .js files
- [ ] Add monthly calendar view for tasks color-coded for each pet and/or type of task
- [x] ~~Improve accessibility by adjusting color contrast, reviewing roles, and ensuring keyboard navigation~~
- [x] ~~Add accessible modals for task/pet editing.~~
- [x] ~~Warn users that deletion is permanent.~~
- [ ] Enable marking tasks complete from All Tasks page
- [x] ~~Improve a date's to-do list view~~
- [x] ~~Reproduce and fix an error where an edited pet is duplicated~~
- [x] ~~Add template partials~~
- [ ] Re-style the app into a more elegant template


## Lessons Learned
As a team:
- We also learned how important good communication is for successful app development as a team.
  * Communicating and tracking issues is critical. Even without Jira, Github projects helps keep track of what needs to be done.
- Having a clear view of the final product is invaluable to guide decisions, especially when there isn't a team lead
  * Wireframes and user flows, even with no UI/UX professionals around, helps with such a view

On the technical aspect:
- Handling merge conflicts
- Bootstrap classes 
- Working with date formats
- Storing external API calls in local cache
- Method overriding


## Authors
- [@raissa-k](https://www.github.com/raissa-k)
- [@AdamRobinsonSE](https://www.github.com/AdamRobinsonSE)
- [@valerievozza](https://www.github.com/valerievozza)
- [@HauntedHamburger](https://www.github.com/HauntedHamburger)
- [@Jaehwajh](https://www.github.com/Jaehwajh)
- [@KClemente11](https://www.github.com/KClemente11)