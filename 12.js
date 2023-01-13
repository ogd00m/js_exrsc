class Worker {
    #firstName;
    #surname;
    #rate;
    #days;
    constructor(firstName, surname, rate, days) {
        this.#firstName = firstName;
        this.#surname = surname;
        this.#rate = rate;
        this.#days = days;
    }
    getSalary() {
        console.log(this.#firstName + " " + this.#surname + " " + this.#rate * this.#days)
    }
    getFirstName(){
        return this.#firstName;
    }
    getSurname(){
        return this.#surname;
    }
}
let worker1 = new Worker('Артём', 'Щербинский', 15000, 4)
let worker2 = new Worker('Семён', 'Киреев', 14999, 5)
worker1.getSalary()
worker2.getSalary()
console.log(worker1.getFirstName())

