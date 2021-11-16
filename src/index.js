import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import JiphyGif from './jiphy.js';

$(document).ready(function() {
  $('#wordGif').click(function() {
    $('.showGif').html("");
    const word = $('#word').val();
    console.log(word);
    $('#word').val("");

    let promise = JiphyGif.getJiphy(word);
    promise.then(function(response) {
      const body = JSON.parse(response);
      for (let i=Math.floor(Math.random() * 2); i < body.data.length; i++) {
       $('.showGif').prepend('<img src="' + body.data[i].images.original.url + '">');
      }
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
      $('.showHumidity').text("");
      $('.showTemp').text("");
    });
  });
});
  











  
//   $("#trendGif").click(function() {
//     let trendRequest = new XMLHttpRequest();
//     const trendUrl = `http://api.giphy.com/v1/gifs/trending?api_key=${process.env.API_KEY}`;

//     trendRequest.onreadystatechange = function() {
//       if (this.readyState === 4 && this.status === 200) {
//         const response = JSON.parse(this.responseText);
//         getTrends(response);
//       }
//     };

//     trendRequest.open("GET", trendUrl, true);
//     trendRequest.send();

//     function getTrends(response) {
//       for (let i = 0; i < response.data.length; i++) {
//         $('.showTrend').prepend('<img src"' + response.data[i].images.original.url + '">');
//       }
//     }
//   });
// });