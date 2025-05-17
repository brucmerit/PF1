//get  DOM element
        const holidayApp = document.getElementById("holidayApp");
        const myHeaders = new Headers();
        myHeaders.append("x-api-key", "cnfUpsxR1ElNd4nROP4b0g==yKB800JXwI6gybw2");

        const requestOptions = {
         method: "GET",
         headers: myHeaders,
         redirect: "follow"
        };

        const countryName = document.getElementById("countryName");
        const holidayBtn = document.getElementById("holidayBtn");

        holidayBtn.addEventListener("click", function() { 
            //get value input field ("countryName")
            const countryValue = countryName.value;
            
        fetch(`https://api.api-ninjas.com/v1/holidays?major_holiday=&country=${countryValue}`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
         //loop through holiday
         let holidayContent = "";
        //cycle through the result
        //get the information that i want to display on the app
        for(let holidayCount = 0; holidayCount < result.length; holidayCount++ ){
        holidayContent += `
            <div>
                <h2>${result[holidayCount].date}<span>(${result[holidayCount].day})</h2>
                <h3>${result[holidayCount].name}</h3>
             </div>
               `;
           }
           holidayApp.innerHTML = holidayContent;
           //holidayText.innerHTML = result[0].name;
         })
         .catch((error) => console.error(error));
     });