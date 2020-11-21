# Rest-API-Client
Express Js, Node Js


  David Lin Full Stack application
  https://www.linkedin.com/in/davidlin98/
  <br>
  <a href="mailto:david@codingbydave.com"> david@codingbydave.com </a>
  <br>
  <a tel="+16048288683"> 604 828 8683 </a>

to start

1. Npm install
2. Npm start

REQUIRES: https://github.com/EricaNichol/REST-API-BACKEND

h3 Notes
- Spent around 4 hours
- Does not include a DB
- Took assignment tasks at face value

h3 Features

- BE API repo
- Frontend app that consumes the BE repo
- on home page, unique ID is retrieved from BE
- on home page, all users are retrieved from BE
- Has Jest testing but ran in to Babel issues.

Available API endpoints to test.<br>
There's no DB, so the users below are from a MockSeed file.

- curl http://localhost:5000/users, (gets all users)
- curl http://localhost:5000/id , (gets unique id)
- curl http://localhost:5000/users/id, (gets user description. id 1, 2 or 3)
