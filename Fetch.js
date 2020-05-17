const sendHttpRequest = (method, url, data) => {
    return fetch(url, {
      method: method,
      body: JSON.stringify(data),
      headers: data ? { 'Content-Type': 'application/json' } : {}
    }).then(response => {
      if (response.status >= 400) {
        // !response.ok
        return response.json().then(errResData => {
          const error = new Error('Something went wrong!');
          error.data = errResData;
          throw error;
        });
      }
      return response.json();
    });
  };
  
  const GetData = () => {
    sendHttpRequest('GET', 'https://reqres.in/api/users').then(responseData => {
      console.log(responseData);
    });
  };
  
  const PostData = () => {
    sendHttpRequest('POST', 'https://reqres.in/api/register', {
      email: 'eve.holt@reqres.in',
      password: 'pistol'
    })
      .then(responseData => {
        console.log(responseData);
      })
      .catch(err => {
        console.log(err, err.data);
      });
  };
  const PutData = () => {
    sendHttpRequest('PUT', 'https://reqres.in/api/register', {
      name: "morpheus",
      job: "zion resident"
    })
      .then(responseData => {
        console.log(responseData);
      })
      .catch(err => {
        console.log(err, err.data);
      });
  };
  const PatchData = () => {
    sendHttpRequest('PATCH', 'https://reqres.in/api/users/2', {
      name: "morpheus",
      job: "zion resident"
    })
      .then(responseData => {
        console.log(responseData);
      })
      .catch(err => {
        console.log(err, err.data);
      });
  };
  const DeleteData = () => {
    sendHttpRequest('DELETE', 'https://reqres.in/api/users/2')
      .then(responseData => {
        console.log(responseData);
      })
      .catch(err => {
        console.log(err);
      });
  };
  