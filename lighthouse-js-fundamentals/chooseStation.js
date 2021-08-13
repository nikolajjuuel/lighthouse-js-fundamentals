// In order for a station to be deemed appropriate,
// it must have a capacity of at least 20, and
// be a school or community centre.

const stations = [
  ["Big Bear Donair", 10, "restaurant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Centre", 45, "community centre"],
];

//   chooseStations(stations);

//   ['Bright Lights Elementary', 'Moose Mountain Community Centre']

const chooseStations = function (stations) {
  const appropriateStation = [];

  for (let i = 0; i < stations.length; i++) {
    const stationName = stations[i][0];
    const stationCapacity = stations[i][1];
    const stationVenue = stations[i][2];

    if (stationCapacity >= 20 && stationVenue === "school" || stationVenue === "community centre") 
    {
      appropriateStation.push(stationName);
    }
  }
  return appropriateStation;
};

//chooseStations(stations);
console.log(chooseStations(stations));
//console.log(appropriateStation);

//   const stationName = stations[i][0];
//   const stationCapacity = stations[i][1];
//   const stationVenue = stations[i][2];

//   stationCapacity <= 50;
//   stationVenue === "school" || "community centre"

function chooseStations (stations) {
    const goodStations = []

    for (const station of stations){
        const capacity = station[1];
        if (capacity>= 20){
            const type = station[2]
            if (type === "school" || type === "community centre"){
                goodStations.push(station[0])
            }
        }
    }
    return goodStations;
}
console.log(chooseStations(stations));