

const sendHttpRequest = (method, url, data) => {
    const promise = new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
  
      xhr.responseType = 'json';
  
      if (data) {
        xhr.setRequestHeader('Content-Type', 'application/json');
      }
  
      xhr.onload = () => {
        if (xhr.status >= 400) {
          reject(xhr.response);
        } else {
          resolve(xhr.response);
        }
      };
  
      xhr.onerror = () => {
        reject('Something went wrong!');
      };
  
      xhr.send(JSON.stringify(data));
    });
    return promise;
  };
  
  const GetData = () => {
    sendHttpRequest('GET', 'https://reqres.in/api/users').then(responseData => {
      console.log(responseData);
    });
  };
  
  const SendData = () => {
    sendHttpRequest('POST', 'https://reqres.in/api/register', {
      email: 'eve.holt@reqres.in',
       password: 'pistol'
    })
      .then(responseData => {
        console.log(responseData);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const PutData = () => {
    sendHttpRequest('PUT', 'https://reqres.in/api/users/2', {
      name: "morpheus",
      job: "zion resident"
    })
      .then(responseData => {
        console.log(responseData);
      })
      .catch(err => {
        console.log(err);
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
        console.log(err);
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

  