// Setup empty JS object to act as endpoint for all routes
var projectData = {
    date:'',
    temp:'',
    zipCode:'',
    userResponse:''
};


//define port of the server

const port = 3000;

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
//app.use("/website", express.static('./static/'));

// Setup Server
const server = app.listen(port, ()=>{
    console.log(`running server port:${port}`);
});

// Initialize all route with a callback function
//get route
app.get('/all', routeFunction);

//post route
app.post('/add', routeFunction);




// Callback function to complete GET '/all' and POST '/add'

function routeFunction(req,  res){
    if(req.method.toLowerCase() === 'get')
    {
        console.log(projectData,'.....get.....');

        res.send(projectData);
    }
    else if (req.method.toLowerCase() === 'post')
    {
        const body = req.body;
        projectData.date = body.date;
        projectData.zipCode = body.zipCode;
        projectData.temp = body.temp;
        projectData.userResponse = body.userResponse;
        console.log(projectData,'.....post.....');

    }
}
