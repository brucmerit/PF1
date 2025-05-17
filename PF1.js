//get  DOM element
        const holidayApp = document.getElementById("holidayApp");
        const myHeaders = new Headers();
        myHeaders.append("x-api-key", "cnfUpsxR1ElNd4nROP4b0g==yKB800JXwI6gybw2");
        const pexelsHeaders = new Headers();
        pexelsHeaders.append("Authorization", "FvW1j3VVc6W6y70nX1efew51iXLYEXnhddpTLQrci5sHtDFoERn1HsxG");

        const requestOptions = {
         method: "GET",
         headers: myHeaders,
         redirect: "follow"
        };

        const countryName = document.getElementById("countryName");
        const holidayBtn = document.getElementById("holidayBtn");
        const imageContainer = document.getElementById("imageContainer");

        holidayBtn.addEventListener("click", function() { 
            //get value input field ("countryName")
            const countryValue = countryName.value;
        
          
        fetch(`https://api.api-ninjas.com/v1/holidays?public_holiday=&country=${countryValue}`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
  let holidayContent = "";

  // Sort by date in ascending order
  result.sort((a, b) => new Date(a.date) - new Date(b.date));

  // Loop through each holiday
  for (let holiday of result) {
    const isLongWeekend = holiday.day === "Friday" || holiday.day === "Monday";

    holidayContent += `
      <div>
        <h2>${holiday.date} <span>(${holiday.day})</span></h2>
        <h3>${holiday.name}</h3>
        ${isLongWeekend ? "<p><strong>It's a long weekend!</strong></p>" : ""}
      </div>
    `;
  }

  holidayApp.innerHTML = holidayContent;
         })
         .catch((error) => console.error(error));
      

         // Fetch images from Pexels
    fetch(`https://api.pexels.com/v1/search?query=${countryValue}&per_page=3`, {
      method: "GET",
      headers: pexelsHeaders,
      redirect: "follow"
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.photos && data.photos.length > 0) {
          data.photos.forEach((photo) => {
            const img = document.createElement("img");
            img.src = photo.src.medium;
            imageContainer.appendChild(img);
          });
        } else {
          imageContainer.innerHTML = "<p>No images found for this country.</p>";
        }
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
        imageContainer.innerHTML = "<p>Error loading images. Please try again.</p>";
      });
    })
