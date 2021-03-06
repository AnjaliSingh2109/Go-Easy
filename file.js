 const weatherApi = {
     key: "c3c66c64bc4212e3ebb058487beefa62",
     baseUrl: "https://api.openweathermap.org/data/2.5/weather"
 }

 const Input = document.getElementById('city');

 //Event Listener Function on keypress
 Input.addEventListener('keypress', (event) => {
<<<<<<< HEAD
     //  console.log(Input.value)
=======
>>>>>>> 10504a5035ee1920d15b16bd84559448460d79a4
     console.log(Input.value);
     fetch(`${weatherApi.baseUrl}?q=${Input.value}&appid=${weatherApi.key}`).then(city => {
         return city.json();
     }).then((showWeatherReport) => {
         let place = document.getElementById('place');
         place.innerText = `${showWeatherReport.name},${showWeatherReport.sys.country}`;

         let temp = document.getElementById('temp');
         temp.innerHTML = `${Math.round(showWeatherReport.main.temp - 273)}°C`;

         let MaxMin = document.getElementById('MaxMin');
         MaxMin.innerHTML = `${Math.floor(showWeatherReport.main.temp_min - 273)}°C (min)/${Math.ceil(showWeatherReport.main.temp_max - 273)}°C (max)`;

         let weather1 = document.getElementById('weather1');
         weather1.innerText = `${showWeatherReport.weather[0].main}`;

         let date = document.getElementById('date');
         let todayDate = new Date();
         date.innerText = dateManage(todayDate);

         console.log(showWeatherReport);
     }).catch((err) => {
         console.log(err);
     })
 });


 function dateManage(dateArg) {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

<<<<<<< HEAD
 //Show Weather Report
 function showWeatherReport(wrapper) {
     console.log(wrapper);

     let place = document.getElementById('place');
     place.innerText = `${weather.name},${weather.sys.country}`;

     let temp = document.getElementById('temp');
     city.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

     let MaxMin = document.getElementById('MaxMin');
     MaxMin.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/${Math.ceil(weather.main.temp_max)}&deg;C (max)`;

     let weather1 = document.getElementById('weather1');
     weather1.innerText = `${weather.weather[0].main}`;

     let date = document.getElementById('date');
     let todayDate = newDate();
     date.innerText = dateManage(todayDate);

     if (weatherType.textContent == 'Clear') {
         document.body.style.backgroundImage = "url('sunny.jpg')";
     } else if (weatherType.textContent == 'Haze') {
         document.body.style.backgroundImage = "url('haze.jpg')";
     } else if (weatherType.textContent == 'Rain') {
         document.body.style.backgroundImage = "url('rain.jpg')";
     } else if (weatherType.textContent == 'Snow') {
         document.body.style.backgroundImage = "url('snow.jpg')";
     } else if (weatherType.textContent == 'Thunderstorm') {
         document.body.style.backgroundImage = "url('storm.jpg')";
     }
 }
 // //Date Manage
 function dateManage(dateArg) {

     let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

     let months = ["January", "February", "March", "June", "July", "August", "September", "October", "November", "December"];

     let year = dateArg.getFullYear();
     let month = [dateArg.getMonth()];
     let date = dateArg.getDate();
     let day = [dateArg.getDay()]
     return `${date} ${month} $({day}), ${year}`;


 }
=======
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;
}


>>>>>>> 10504a5035ee1920d15b16bd84559448460d79a4











// const weatherApi = {
//     key: "c3c66c64bc4212e3ebb058487beefa62",
//     baseUrl: "https://api.openweathermap.org/data/2.5/weather?"
// }

// const Input = document.getElementById('city');

// //Event Listener Function on keypress
// Input.addEventListener('keypress', (event) => {
//     console.log(Input.value);
//     //  if (event.key == 3) {
//     //      console.log(Input.value);
//     //  }
//     // console.log(Input.value);
// });

// //Get Weather Report
// function getWeatherReport(city) {
//     fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}`)
// }
// fetch("https://api.openweathermap.org/data/2.5/weather?q={}}&appid={}")
//     .then(weather => {
//         return weather.json();
//     }).then((showWeatherReport) => {
//         console.log(showWeatherReport);
//     });

// //Show Weather Report
// function showWeatherReport(wrapper) {
//     console.log(wrapper);

//     let place = document.getElementById('place');
//     place.innerText = `${weather.name},${weather.sys.country}`;

//     let temp = document.getElementById('temp');
//     city.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

//     let MaxMin = document.getElementById('MaxMin');
//     MaxMin.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/${Math.ceil(weather.main.temp_max)}&deg;C (max)`;

//     let weather1 = document.getElementById('weather1');
//     weather1.innerText = `${weather.weather[0].main}`;

//     let date = document.getElementById('date');
//     let todayDate = newDate();
//     date.innerText = dateManage(todayDate);

//     if (weatherType.textContent == 'Clear') {
//         document.body.style.backgroundImage = "url('sunny.jpg')";
//     } else if (weatherType.textContent == 'Haze') {
//         document.body.style.backgroundImage = "url('haze.jpg')";
//     } else if (weatherType.textContent == 'Rain') {
//         document.body.style.backgroundImage = "url('rain.jpg')";
//     } else if (weatherType.textContent == 'Snow') {
//         document.body.style.backgroundImage = "url('snow.jpg')";
//     } else if (weatherType.textContent == 'Thunderstorm') {
//         document.body.style.backgroundImage = "url('storm.jpg')";
//     }
// }
// // //Date Manage
// function dateManage(dateArg) {

//     let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//     let months = ["January", "February", "March", "June", "July", "August", "September", "October", "November", "December"];

//     let year = dateArg.getFullYear();
//     let month = [dateArg.getMonth()];
//     let date = dateArg.getDate();
//     let day = [dateArg.getDay()]
//     return `${date} ${month} $({day}), ${year}`;


// }

// const cityApi = {
//     key: "c3c66c64bc4212e3ebb058487beefa62",
//     baseUrl: "http://api.openweathermap.org/geo/1.0/direct?"
// }

// function getGeolocation(location) {
//     fetch(`${cityApi.baseUrl}?q=${city}&appid=${cityApi.key}`)
//         .then(city => {
//             return city.json();
//         }).then(showCity);
// }
// //https://api.openweathermap.org/data/2.5/weather?lat=52.3676&lon=4.9041&appid=c3c66c64bc4212e3ebb058487beefa62