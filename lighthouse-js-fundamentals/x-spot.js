
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

function finalPosition (moves) {
    const coordinates = [];
    const x = [];

    for (let move of moves){
        if (move === 'north'){
            const north = +1;
            north.push(x);
        } else if (move === 'south') {
            const south = -1; 

        }
        console.log(move);
        console.log(x);
    }
}


nort = +1;
south = -1;
west = +1;
east = -1;

y = north - south;
x = west - east;

x.push(coordinates);
y.push(coordinates);
return coordinates;

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

