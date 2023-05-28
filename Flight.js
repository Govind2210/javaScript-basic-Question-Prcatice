function minPlanes(fuel) {
    let planes = 0;
    let i = 0;
    while (i < fuel.length) {
      // If there is no fuel available at the current airport,
      // it is not possible to reach the last airport
      if (fuel[i] === 0) {
        return -1;
      }
      // Choose the plane with the maximum amount of fuel
      // at the current airport
      let maxFuel = 0;
      let maxFuelIndex = -1;
      for (let j = i; j < fuel.length; j++) {
        if (fuel[j] > maxFuel) {
          maxFuel = fuel[j];
          maxFuelIndex = j;
        }
      }
      // Increase the number of planes by 1
      planes += 1;
      // Move to the next airport
      i = maxFuelIndex + 1;
    }
    console.log(planes) ;
  }

let fuel = [1,6,3,4,5,0,0,0,6]
minPlanes(fuel)