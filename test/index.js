// mock API calls against json-server
const axios = require('axios')
const uuid = require('uuid').v4

axios.defaults.baseURL = "http://localhost:5000"

var data = {
  "id": uuid(),
  "email": "newuser.doe@gmail.com",
  "firstName": "new",
  "lastName": "user",
  "role": "asdf"
}

/**
 * Generate new user every three seconds.
 * Verifies that writes and deletes happen to db.json even though the file was replaced post-merge.
 */
setInterval(() => {
  data.id = uuid();
  axios.post('/users', data).then((response) => {
    console.log(response)
  }).catch((error) => {
    console.log(error)
  })   

  // delete every few entires
  if (Math.random() > 0.7) {
    setTimeout(() => {
      axios.delete(`/users/${data.id}`).catch((error) => console.log);
    }, 5000) 
  }
}, 3000)