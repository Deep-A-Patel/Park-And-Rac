console.log("Park And rac");

const parksContainer = document.querySelector(".parksContainer");
//fetching a data with the help of fetch from api
fetch(
  "https://raw.githubusercontent.com/nss-day-cohort-31/national-parks/master/database.json"
)
  .then(results => results.json())

  .then(parsedResults => {
    const allParks = parsedResults.parks;
    console.log("all parks", allParks);

    allParks.forEach(park => {
      fetch(
        `https://blooming-mesa-53816.herokuapp.com/ac442503f2fd83e5ef93b036c410ed6c/${
          park.latitude
        },${park.longitude}`
      )
        .then(results => results.json())
        .then(parsedWeatherResult => {
          console.log("parsedWeatherResult", parsedWeatherResult);
        });
      console.log("one park", park);

      const parkHTML = `
      <article class="park_visited_${park.visited}">
      <h3>${park.name}</h3>
      <p>State the park in located in: ${park.state}</p>
      <p>Weather:</p>
      <ul>
        <li>Currently: ${currently.Summary}</li>
        <li>Hourly: ${hourly.Summary}</li>
        <li>Daily: ${daily.Summary}</li>
      </ul>
</article>`;
      parksContainer.innerHTML += parkHTML;
    });
  });
