var fetch = require('node-fetch');





function makeRequest(url) {

  return fetch(url)

    .then(function(data){return data.json(); });

}



module.exports = {

  search: function (movie, callback) {

    return makeRequest('http://www.omdbapi.com/?t='+movie+'&y=&plot=short&r=json');

      .then(function(data) {

        if(callback) callback(data);

        return data;

      });

  }

};
