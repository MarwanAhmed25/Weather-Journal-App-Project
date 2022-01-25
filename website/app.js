// Personal API Key for OpenWeatherMap API
const apiKey='&appid=594c23eec5858398c2f2&units=imperial';
//api.openweathermap.org/data/2.5/weather?q={city code},{country code}&appid={API key}
const apiBase = 'https://api.openweathermap.org/data/2.5/weather?zip=';

//create date 
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();
let DATA = {date:newDate, temp:'', zipCode:'', userResponse:''};

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', clickedFunction);

/* Function called by event listener */
function clickedFunction(){

  getFunction()
  .then((data)=>{
    postFunction('/add', DATA)
    .then(
      applyChanges()
    
    )
  }
  )
  
}



/* Function to GET Web API Data*/
async function getFunction(){
  const entryData =  document.getElementById('zip').value;
  const userRes = document.getElementById('feelings').value;
  const res = await fetch(apiBase+entryData+apiKey);
  
  try {
    const jsonData = await res.json();
    console.log(jsonData,'.....openweathermap..data........');
    DATA.zipCode = entryData;
    DATA.temp = jsonData.main.temp;
    DATA.userResponse = userRes;
   return jsonData;
  } catch (e) {
      console.log('error:',e);
  }
}

/* Function to POST data */
async function postFunction(url='', data){
  //console.log(data);
  const rs = await fetch(url, 
    {
      method:'POST',
      credentials:'same-origin',
      headers:{
       'Content-Type': 'application/json',
      }
    
    ,body: JSON.stringify(data),
   });

   try {
     const resData = await rs.json();
     return resData;
   } catch (e) {
     console.log('error',e);
   }
}


/* Function to GET Project Data */
async function applyChanges(){

  const res = await fetch('/all');

  try {
    const data = await res.json();
    console.log(data, '......output.....');
    document.getElementById('date').innerHTML = `Date: ${data.date}`;
    document.getElementById('temp').innerHTML = `temprature: ${Math.round(data.temp)} degree.`;
    document.getElementById('zipcode').innerHTML = `zip code: ${data.zipCode}`;
    document.getElementById('content').innerHTML = `Feelings: ${data.userResponse}`;
    
  } catch (e) {
    console.log('error',e);
  }

}
