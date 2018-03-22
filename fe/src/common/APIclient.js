import axios from 'axios'



var API = {

  POST: (url, data, config) => {

    axios.post( url, JSON.stringify(data), config )
    .then(function(resp){
      console.log(resp)
    })
    .catch(function(err){
      console.log(err)
    })

  },

  GET: (url) => {

    axios.get(url)
    .then(resp => {
      console.log(resp)
    })
    .catch(err => {
      console.log(err)
    })

  }


}


export default API;

// class POST {
//     getPosts() {
//         return new Promise((resolve, reject) => {
//             const xhr = new XMLHttpRequest();
//             xhr.open('GET', `${API_ROOT}/posts`);
//             xhr.onreadystatechange = function() {
//                 if (xhr.readyState === 4) {
//                     const resp = JSON.parse(xhr.responseText);
//                     if (resp.error) {
//                         reject(resp.error);
//                     } else {
//                         resolve(resp);
//                     }
//                 }
//             }
//             xhr.send();
//         })
//     }
// }
