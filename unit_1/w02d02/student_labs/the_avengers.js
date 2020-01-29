const ironMan = {
    regularName: 'Anthony Edward "Tony" Stark',
    abilities: ['genius-level intellect', 'proficient scientist and engineer', 'powered armor suit'],
    marvelMovieAppearances: {
        ironMan: true,
        theHulk: true,
        ironManTwo: true,
        thor: false,
        captainAmerica: false,
        theAvengers: true,
        ironManThree: true,
        thorTwo: false,
        captainAmericaTwo: false,
        guardiansOfTheGalaxy: false,
        avengersTwo: true,
        antMan: false,
        captainAmericaThree: true,
        doctorStrange: false,
        guardiansOfTheGalaxyTwo: false,
        spiderManHomecoming: false,
        thorThree: false,
        blackPanther: false,
        avengersThree: true
    },
    jarvisAreYouThere: () => {
       console.log('At your service, sir')
    }
}

// console.log(ironMan.abilities[2]);

for(let i = 0; i < ironMan.abilities.length; i++) {
      console.log(ironMan.abilities[i])
  }

  // console.log(ironMan.marvelMovieAppearances.spiderManHomecoming);
  // ironMan.marvelMovieAppearances.spiderManHomecoming = true;
  // console.log(ironMan.marvelMovieAppearances.spiderManHomecoming);
console.log(ironMan.jarvisAreYouThere());

//Assembling other Avengers
//

createCaptain = () => {
return {
  aliases: {
    superheroName: 'Captain America'
  }
}
}
console.log(createCaptain().aliases.superheroName)


createCaptain = () => {
return {
  abilities: ['super powers', 'keen eyesight', 'peak human strength']
}

}

console.log(createCaptain().abilities[2]);

createCaptain = () => {
sayPhrase: () => { return 'I will attack!'}

}

console.log(createCaptain.sayPhrase());
