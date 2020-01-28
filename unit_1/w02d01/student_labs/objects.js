

const me = {

};

me.firstName = 'Cristi';
me.lastName = 'Neames';
me.age = 48;
me.email = 'crisneamesgmail.com';

console.log(me);

const fancyGreeting = () => {
return console.log("Greetings " + me.firstName);

};

fancyGreeting(me);
