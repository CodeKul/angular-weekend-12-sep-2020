
export class Car {

    constructor() {
        this.name = ''
    }
}

let cr = new Car()
cr.name = 10

let num = 10

if (true) {
    let num = 20
}
console.log('Number is ' + num)
console.log(`Number is ${num}`)


let fn = function () {
    console.log(this)
}
fn()

let fnLm = () => { console.log(this) }
fnLm()



