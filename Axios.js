const getData = () => {
    axios.get('https://reqres.in/api/users').then(response => {
      console.log(response);
    });
  };
  
  const sendData = () => {
    axios
      .post(
        'https://reqres.in/api/register',
        {
          email: 'eve.holt@reqres.in',
          password: 'pistol'
        }
      )
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err, err.response);
      });
  };
  const PutData = () => {
    axios
      .put(
        'https://reqres.in/api/users/2', 
        {
            name: "morpheus",
            job: "zion resident"
        }
      )
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err, err.response);
      });
  };
  const PatchData = () => {
    axios
      .patch(
        'https://reqres.in/api/users/2', 
        {
            name: "morpheus",
            job: "zion resident"
        }
      )
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err, err.response);
      });
  };
  const DeleteData = () => {
    axios
      .delete(
        'https://reqres.in/api/users/2')
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err, err.response);
      });
  };
  
  