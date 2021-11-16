export default class JiphyGif {
  static getJiphy(word) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const searchUrl = `http://api.giphy.com/v1/gifs/search?q=${word}&api_key=${process.env.API_KEY}`;

      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", searchUrl, true);
      request.send();
    });
  }
}