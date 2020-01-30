const host = {
  name: 'Martin',
  occupation: "programmer",
  saySpecs: () => {console.log(`I am ${host.name}. I'm a ${host.occupation}.`)}
}

console.log(host);


class BasicHost {
  constructor (name, occupation) {
    this.name = name
    this.occupation = occupation
  }
  greet (name, occupation) {
    console.log(`name: ${BasicHost.name}, occupation: ${BasicHost.occupation});
  }

}

const host1 = new BasicHost("Michael", "Creator")

host1.greet('Cristi', 'Programmer')
