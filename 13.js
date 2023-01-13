class Worker {
    #firstName;
    #surname;
    #rate;
    #days;
    #salary;
    constructor(firstName, surname, rate, days, salary) {
        this.#firstName = firstName;
        this.#surname = surname;
        this.#rate = rate;
        this.#days = days;
        this.#salary = salary
    }
    get salary() {
        return this.#rate * this.#days
    }
    set salary(value){
        this.#salary = this.#rate * this.#days
    }
    get fullName(){
        return `${this.#firstName} ${this.#surname}`;
    }
    get Surname(){
        return this.#surname;
    }
    get days(){
        return this.#days;
    }
    set days(day){
        this.#days = day
    }
}
let worker1 = new Worker('Артём', 'Щербинский', 15000, 4)
let worker2 = new Worker('Семён', 'Киреев', 14999, 5)
console.log(worker1.salary)
console.log(worker1.fullName)
worker1.days = 1500
worker1.rate = 1000
console.log(worker1.salary)

