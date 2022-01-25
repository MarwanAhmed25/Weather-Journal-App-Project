Weather-Journal App Project

-Content
    .Description
        -set up
        -output format 
    .Front-end
        -index.html
        -app.js
    .Server side
        -server.js
    
    .Technologies
    .Tools
    .Auther
    .Credits

-Description & set up

    .The project is a weather app API using api to get data for weather from openweathermap website and show the fetched data to 
    front end page.

    .How to set up?

        -Dependencies
            .install nodejs & npm [ 'https://nodejs.org/en/download/' ] - [ 'https://docs.npmjs.com/cli/v8/commands/npm-install' ]
            .install express, cors, and body-parser ex( 'https://www.javatpoint.com/install-expressjs' )
            .set up the server and run the server open any browser and open [ 'http://localhost:<port>/' ]
        
        -Output format that fetched from openweather api
            zipCode = 32511 ,
            Key = '&appid=594ae6906c5acebc23eec5858398c2f2' ,
            baseUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=' ,

            fetched url = baseUrl + zipCode + Key

                {coord: {…}, weather: Array(1), base: 'stations', main: {…}, visibility: 10000, …}
                base: "stations"
                clouds: {all: 75}
                cod: 200
                coord: {lon: -87.2917, lat: 30.4061}
                dt: 1639239537
                id: 0
                main: {temp: 297.6, feels_like: 298.19, temp_min: 296.09, temp_max: 299.46, pressure: 1018, …}
                name: "Pensacola"
                sys: {type: 1, id: 5099, country: 'US', sunrise: 1639226170, sunset: 1639262953}
                timezone: -21600
                visibility: 10000
                weather: [{…}]
                wind: {speed: 5.66, deg: 180}
                [[Prototype]]: Object

    .Front-end

        -index.html
            .Some simple labels, buttos and text area to show data fetched

        -app.js
            .The JavaScript File for front end and dynamic website.
            .Fetch Data and the link between the server and the front end(index.html)

    .Server Side

        .server.js
            .This file create the server and contain the basic routs 

    .Technologies 

        -HTML 
        -CSS 
        -JavaScript

    .Tools 
        
        -VS code 
        -Google chrome

    .Auther: Marwan Ahmed

    .Credits 

        -Udacity 
        -MDN 
        -Openweathermap.org
        -Wikipedia