import axios from 'axios';

axios
  .post('http://localhost:3000/users', {
    name: 'myName',
    age: 30
  })
  .then((response) => {
    console.log('response', response);
    return response.data.id;
    // return response;
  })
  .then((returnId: number) => {
    axios.get(`http://localhost:3000/users/${returnId}`);
  })
  .catch((err) => console.log('err', err));

// axios.get(`http://localhost:3000/users/${newId}`);
