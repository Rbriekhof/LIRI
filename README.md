# LIRI

## ABOUT THE APP
LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in values and gives back data. The user has the option of using four commands (listed below) in conjuntion with values associated with the commands. The  `Commands` are:

   * `concert-this`

   * `spotify-this-song`

   * `movie-this`

   * `do-what-it-says`

- - -
## HOW TO USE LIRI

1. Open your terminal such as Bash.
2. Navigate to the folder that contains the `liri.js` file. 
3. Type into Bash "node liri.js 'command' 'value'". 

    **Command 1**: Run the `concert-this` command
    
        node liri.js concert-this <name of artist or band>
    
    This command will return a list of concerts related to that artist(s). It will give the name of the venue, city location of venue, and date of the concert.

    ![Results](/screenshots/concert.PNG)

    **Command 2**: Run the `spotify-this-song` command
    
        node liri.js spotify-this-song <name of song>
    
   This command will return a list that matches the song name you typed. Each entry will give the artist, album, and a preview link.

    ![Results](/screenshots/song.PNG)

    **Command 3**: Run the `movie-this` command
    
        node liri.js movie-this <name of movie>
    
    This command will return data concerning the movie; Date of release, Rotten Tomatoes score, Cast, Plot summary, etc. 

    ![Results](/screenshots/movie.PNG)


    **Command 4**: Run the `do-what-it-says` command
        
        node liri.js do-what-it-says
        
    Output: The system will read the text in the random.txt file, and perform the command listed in the random.txt file. 
    
    ![Results](/screenshots/whatitSays.PNG)
