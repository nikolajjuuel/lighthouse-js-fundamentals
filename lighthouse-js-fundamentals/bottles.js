x = 100 ;

while (x > 1 ){

  if (x === 1){
    let song = `${x} bottle of juice on the wall! ${x} bottles of juice! Take one down, pass it around... ${x-1} bottles of juice on the wall!`;
    console.log(song);

  } else {
    let song = `${x} bottles of juice on the wall! ${x} bottles of juice! Take one down, pass it around... ${x-1} bottles of juice on the wall!`;
    console.log(song);

}
   x--;


}

x = 60 ;

while (x > 1 ){
    let countDown ="";
    
    if (x === 50){
       console.log('Orbiter transfers from ground to internal power');
    } else{
        countDown = `T-${x} secounds`;
        x--;
        console.log(countDown);

}    

 x--
}

// Orbiter transfers from ground to internal power (T-50 seconds)
// Ground launch sequencer is go for auto sequence start (T-31 seconds)
// Activate launch pad sound suppression system (T-16 seconds)
// Activate main engine hydrogen burnoff system (T-10 seconds)
// Main engine start (T-6 seconds)
// Solid rocket booster ignition and liftoff! (T-0 seconds)