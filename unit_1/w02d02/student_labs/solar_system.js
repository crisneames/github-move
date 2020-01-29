const milkyway = {
  type: 'barred spiral',
  age: 13600000000,
  containsEarth: false
}

console.log(milkyway.containsEarth);
milkyway.containsEarth = true;
console.log(milkyway.containsEarth);

milkyway['NumberOfStars'] = '100-400 billion'
console.log(milkyway.NumberOfStars)
  console.log(milkyway)

  const solarSystem = [
	{ name: "Mercury", ringSystem: false, moons: [] },
	{ name: "Venus", ringSystem: false, moons: [] },
	{ name: "Earth", ringSystem: false, moons: ["The Moon"] },
	{ name: "Mars", ringSystem: false, moons: ["Phobos", "Deimos"] },
	{ name: "Jupiter", ringSystem: true, moons: ["Europa", "Ganymede", "Io", "Callisto"] },
	{ name: "Saturn", ringSystem: true, moons: ["Titan", "Enceladus", "Rhea", "Mimas"] },
	{ name: "Uranus", ringSystem: true, moons: ["Miranda", "Titania", "Ariel", "Umbriel"] },
	{ name: "Neptune", ringSystem: true, moons: ["Triton", "Nereid"] }
];

console.log(solarSystem[0].ringSystem);
console.log(solarSystem[4].moons);
console.log(solarSystem[7].moons[1]);

//milkyway[1].moons[0] = 'Endor';
console.log(solarSystem[1])
