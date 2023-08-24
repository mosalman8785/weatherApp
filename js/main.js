var inputSearch=document.getElementById("WeatherSearch");
var getdata=document.getElementById("getdata");
var d=new Date();
function returnDay(days){
   f= new Date(days).getDay()
   if(f==0){
    return "Sunday"
   }
   else if(f==1){
    return "Monday"
   }
   else if(f==2){
    return "Tuesday"
   }
   else if(f==3){
    return "Wednesday"
   }
   else if(f==4){
    return "Thursday"
   }
   else if(f==5){
    return "Friday"
   }
   else if(f==6){
    return "Saturday"
   }


}
function returnMonth(months){
    mon= new Date(months).getMonth()
    if(mon==0){
     return "January "
    }
    else if(mon==1){
     return "February "
    }
    else if(mon==2){
     return "March"
    }
    else if(mon==3){
     return "April "
    }
    else if(mon==4){
     return "May"
    }
    else if(mon==5){
     return "June "
    }
    else if(mon==6){
     return "July"
    }
    else if(mon==7){
        return "August "
       }
       else if(mon==8){
        return "September"
       }
       else if(mon==9){
        return "October"
       }
       else if(mon==10){
        return "November"
       }
       else if(mon==11){
        return "December"
       }
}


var reqWeather=[]
async function requestWeather(gets){
    var x= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=2f6ab4a5ebeb4ab8aac153610232108&q=${gets}&days=3`)
    reqWeather=  await x.json();
    
 

        return reqWeather;
    
}

// requestWeather();
inputSearch.addEventListener("keyup",async function(){
//    var  DataSent=await requestWeather(this.value);
//    console.log(DataSent);
    if(this.value==""){
        var  DataSent=await requestWeather("cairo");
        // console.log(DataSent);
        showData(DataSent);
    }
    else{
        var  DataSent=await requestWeather(this.value);
        showData(DataSent); 
        console.log(DataSent)  ; 
    }
   
})
function showData(DataSended){
    getdata.innerHTML=
    `     <div class="row py-5 gx-0 gy-2">
    <div class="col-lg-4 col-md-11">
        <div class="card card1 w-100 ">
            <div class="card-header d-flex justify-content-between align-items-center ">
                <p class=" mt-3 gray-color">${returnDay(DataSended.current.last_updated)}</p>    <p class="mt-3 gray-color">${new Date(DataSended.current.last_updated).getDate()},${returnMonth(DataSended.current.last_updated)}</p>
            </div>
            <div class="card-body  rounded-bottom-2">

              <h5 class="card-title gray-color">${DataSended.location.name}</h5>
              <div class="weather-content d-flex justify-content-between align-items-center">
                <p class="weather-degree text-white">${DataSended.current.temp_c}°C</p>
                <img src="https:${DataSended.current.condition.icon}"class="weather-condition me-3" alt=" weather condition">

              </div>
              <div class="card-rest">
                <p class="text-info text-center ">${DataSended.current.condition.text}</p>
                <div class="card-bottom pt-4 d-flex justify-content-evenly align-items-center">
                    <div class=" d-flex  justify-content-center align-items-center flex-column gap-3">
                        <i class="fa-solid fa-umbrella  fa-xl" style="color: #818188;"></i>
                        <p class=" ms-1 gray-color">20%</p>
                    </div>
                    <div class=" d-flex  justify-content-center align-items-center flex-column gap-3">
                        <i class="fa-solid fa-wind fa-xl" style="color: #818188;"></i>
                        <p class=" ms-1 gray-color">${DataSended.current.wind_kph}km/h</p>
                    </div>
                    <div class=" d-flex  justify-content-center align-items-center flex-column gap-3">
                        <i class="fa-solid fa-cloud fa-xl" style="color: #818188;"></i>

                        <p class=" ms-1 gray-color">${DataSended.current.cloud}</p>
                    </div>

                </div>
              </div>
              
            </div>

    </div>
</div>
<div class="col-lg-4 col-md-11">
    <div class="card card2 w-100 ">
        <div class="card-header d-flex justify-content-center align-items-center  ">
            <p class=" mt-3 gray-color">${returnDay(DataSended.forecast.forecastday[1].date)}</p>   
        </div>
        <div class="card-body  rounded-bottom-2 ">

         
          <div class="weather-content d-flex justify-content-between mt-2 align-items-center flex-column gap-3">
            <img src="https:${DataSended.forecast.forecastday[1].day.condition.icon}" class="weather-condition " alt=" weather condition">
            <div class="conta4 d-flex justify-content-around mt-4  align-items-center flex-column">
                <p class="weather-degree2 text-white">${DataSended.forecast.forecastday[1].day.avgtemp_c}</p>
                <p class="gray-color ">35.1°</p>
            </div>
            <p class="text-info text-center">${DataSended.forecast.forecastday[1].day.condition.text}</p>

          </div>
        
          
        </div>

</div>
</div>
<div class="col-lg-4 col-md-11">
<div class="card card3 w-100 ">
  
    <div class="card-header d-flex justify-content-center align-items-center  ">
        <p class=" mt-3 gray-color">${returnDay(DataSended.forecast.forecastday[2].date)}</p>   
    </div>
    <div class="card-body  rounded-bottom-2 ">

     
      <div class="weather-content d-flex justify-content-between mt-2 align-items-center flex-column gap-3">
        <img src="https:${DataSended.forecast.forecastday[2].day.condition.icon}" class="weather-condition " alt=" weather condition">
        <div class="conta4 d-flex justify-content-around mt-4  align-items-center flex-column">
            <p class="weather-degree2 text-white">${DataSended.forecast.forecastday[2].day.avgtemp_c}</p>
            <p class="gray-color ">35.1°</p>
        </div>
        <p class="text-info text-center">${DataSended.forecast.forecastday[2].day.avgtemp_c}</p>
       

      </div>
    
      
    </div>

</div>
</div>
</div>`
}
