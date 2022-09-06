
# myPetPal

Taking care of our pets is a lot of work! Use this app to keep track of all the tasks necessary to keep your furry, feathered, & scaley friends happy & healthy.

**Link to project:** [example.com/myPetPal](example.com/myPetPal)


## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## Tech Stack

**Client:** JavaScript, EJS, Bootstrap CSS

**Server:** Node, Express, MongoDB

**Dependencies:** bcrypt, connect-mongo, date-fns, dotenv, ejs, express, express-flash, express-session, method-override, mongodb, mongoose, morgan, nodemon, passport, passport-local, validator

## Features

- Secure login with Passport Auth
- Add multiple pets & assign tasks to pets
- View tasks by date
- Responsive for desktop & mobile


## Installation

Install with npm

```bash
  npm init
  npm install bcrypt connect-mongo date-fns dotenv ejs express express-flash express-session method-override mongodb mongoose morgan nodemon passport passport-local validator
```
## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file

`PORT: <port>` (can be any port, ex: 3000)

`DB_STRING: <your database uri>`
## Optimizations

- Implemented a date view so users can view tasks for specific dates
- Added ARIA roles
- Resolved icon issues

**Planned Features & Improvements:**

- Add monthly calendar view for tasks color-coded for each pet and/or type of task
- Increase accessibility by adjusting color contrast, ensuring that all buttons have names & titles, etc.

## Lessons Learned

We learned about the importance of branching, version control best practices, and resolving conflicts when merging pull requests. We also learned how important good communication is for successful app development as a team.

**What else we learned:** Bootstrap classes, working with date formats and comparing to database values, sorting tables


## Authors

- [@AdamRobinsonSE](https://www.github.com/AdamRobinsonSE)
- [@raissa-k](https://www.github.com/raissa-k)
- [@valerievozza](https://www.github.com/valerievozza)
- [@HauntedHamburger](https://www.github.com/HauntedHamburger)
- [@Jaehwajh](https://www.github.com/Jaehwajh)
- [@KClemente11](https://www.github.com/KClemente11)