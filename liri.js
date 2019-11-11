require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var moment = require('moment');
moment().format();
var axios = require('axios');
var fs = require('fs');
var command = process.argv[2];
var value = process.argv[3];


UserInputs(command, value);
function UserInputs(command, value) {
    switch (command) {
        case "concert-this":
            concertThis(value);
            break;
        case "spotify-this-song":
            spotifySong(value);
            break;
        case "movie-this":
            movieThis(value);
            break;
        case "do-what-it-says":
            doThis();
            break;
    };
}
function concertThis(value) {
    axios.get("https://rest.bandsintown.com/artists/" + value + "/events?app_id=codingbootcamp")
        .then(function (response) {
            for (var i = 0; i < response.data.length; i++) {

                var datetime = response.data[i].datetime;
                var dateArr = datetime.split('T');

                var concertResults =
                    "\n--------------------------------------------------------------------" +
                    "\nVenue Name: " + response.data[i].venue.name +
                    "\nVenue Location: " + response.data[i].venue.city +
                    "\nDate of the Event: " + moment(dateArr[0]).format("MMMM Do YYYY") + 
                    "\n--------------------------------------------------------------------";
                console.log(concertResults);
                fs.appendFileSync("log.txt", concertResults);
            }
        })
        .catch(function (error) {
            console.log(error);
        });


}

function spotifySong(value) {
    if (!value) {
        value = "The Sign";
    }
    spotify
        .search({ type: 'track', query: value })
        .then(function (response) {
            for (var i = 0; i < 5; i++) {
                var spotifyResults =
                    "\n--------------------------------------------------------------------" +
                    "\nArtist(s): " + response.tracks.items[i].artists[0].name +
                    "\nSong Name: " + response.tracks.items[i].name +
                    "\nAlbum Name: " + response.tracks.items[i].album.name +
                    "\nPreview Link: " + response.tracks.items[i].preview_url +
                    "\n--------------------------------------------------------------------";

                console.log(spotifyResults);
                fs.appendFileSync("log.txt", spotifyResults);
            }
        })
        .catch(function (err) {
            console.log(err);
        });
}

function movieThis(value) {
    if (!value) {
        value = "mr nobody";
    }
    axios.get("https://www.omdbapi.com/?t=" + value + "&y=&plot=short&apikey=trilogy")
        .then(function (response) {
            var movieResults =
                "\n--------------------------------------------------------------------" +
                "\nMovie Title: " + response.data.Title +
                "\nYear of Release: " + response.data.Year +
                "\nIMDB Rating: " + response.data.imdbRating +
                "\nRotten Tomatoes Rating: " + response.data.Ratings[1].Value +
                "\nCountry Produced: " + response.data.Country +
                "\nLanguage: " + response.data.Language +
                "\nPlot: " + response.data.Plot +
                "\nActors/Actresses: " + response.data.Actors +
                "\n--------------------------------------------------------------------";
            console.log(movieResults);
            fs.appendFileSync("log.txt", movieResults);
        })
        .catch(function (error) {
            console.log(error);
        });

}

function doThis() {

    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        var dataArr = data.split(',');
        UserInputs(dataArr[0], dataArr[1]);
    })
}