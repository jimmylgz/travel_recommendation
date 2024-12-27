const btnSearch = document.getElementById("btnSearch");

function searchDestination() {
    const input = document.getElementById('conditionInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    
    fetch("travel_recommendation_api.json")
    .then(response => response.json())
    .then(data => {
        switch (input) {
            case "beach":
            case "beaches":
                // console.log(data.beaches);
                for (const beach of data.beaches) {
                    resultDiv.innerHTML += `<img src="${beach.imageUrl}" alt="beach_photo">`;
                    resultDiv.innerHTML += `<h2>${beach.name}</h2>`;
                    resultDiv.innerHTML += `<p>${beach.description}</p>`
                }
                break;
            case "country":
            case "countries":
                // console.log(data.countries);
                for (const country of data.countries) {
                    resultDiv.innerHTML += `<img src="${country.imageUrl}" alt="country_photo">`;
                    resultDiv.innerHTML += `<h2>${country.cities.name}</h2>`;
                    resultDiv.innerHTML += `<p>${country.cities.description}</p>`
                }
                break;
            case "temple":
            case "temples":
                // console.log(data.temples);
                for (const temple of data.temples) {
                    resultDiv.innerHTML += `<img src="${temple.imageUrl}" alt="temple_photo">`;
                    resultDiv.innerHTML += `<h2>${temple.name}</h2>`;
                    resultDiv.innerHTML += `<p>${temple.description}</p>`
                }
                break;
        }
    })
}

btnSearch.addEventListener("click", searchDestination);