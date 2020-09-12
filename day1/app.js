console.log(document) // DOM

let dv = document.getElementById('dv')
console.log(dv)

let ce = document.getElementById('ce')
console.log(ce)
console.log(console)

let mobiles = ['Android', 'iOS', 'BB', 'Windows', 'PalmTop', 'Samsung']

let olMob = document.getElementById('mob')

for (let i = 0; i < mobiles.length; i++) {
    let li = document.createElement('li')
    li.textContent = mobiles[i]
}
