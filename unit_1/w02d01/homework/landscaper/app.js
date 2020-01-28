//console.log('It works!');

let dollars;


const start = () => {
  dollars = 20;
  showStatus()
  askForAction()
};

const showStatus = () => {
  alert(`You have ${dollars} dollars!`)
};


const askForAction = () => {
let choice = prompt(`You have ${dollars} dollars. Buy a (t)ool or (m)ow some grass?`)
if (choice === 'm') {
alert('Mowing grass')
mowGrass()
} else if (choice === 't') {
  alert('buy a tool')
  buyTool()
} else {'not a good choice'}
}

const buyTool = () => {
let tool = prompt('Pick a tool - (a)teeth-free, (b)rusty scissors-$5, (c)old-timey push lawnmower-$25, (d)fancy battery-powered lawnmower-$250')
 if (tool === 'a') {
   mowGrass()
 } else if (tool === 'd') {
   if (dollars < 250) {
   alert('You don\'t have the money to purchase this tool')
 } else (calculatePurchase())

} else if (tool === 'c') {
  if (dollars < 25) {
    alert('You don\'t have the money to purchase this tool')
  } else (calculatePurchase())
}
 else if (tool === 'b') {
   console.log(tool)
   if (dollars < 5) {
     alert('You don\'t have the money to purchase this tool')
   } else (calculatePurchase(tool))
 }
}




const calculatePurchase = (tool) => {
  //calculate purchase of tool
  console.log(tool)
 if (tool === 'b') {
   dollars -= 5
   alert(`You have ${dollars} after the purchase of rusty scissors`)
   } else if (tool === 'd') {
   dollars -= 250
   alert(`You have ${dollars} after the purchase of the fancy battery-powered lawnmower`)
 } else if (tool === 'c') {
   dollars -= 25
   alert(`You have ${dollars} after the purchase of the old-timey push mower`)
 }
}

const mowGrass = () => {
  //calculate money made mowing grass
  //rusty scissors
  if (tool = 'b') {
  dollars += 5
  alert(`You made $5 mowing with the rusty scissors for a total of ${dollars} dollars`)
  //old-timey push mower
} else if (tool === 'c') {
  dollars += 50
  alert(`You made $50 mowing with the rusty scissors for a total of ${dollars} dollars`)
} else if (tool === 'd') {
  dollars += 100
  alert(`You made $100 mowing with the rusty scissors for a total of ${dollars} dollars`)
}
}

start()
