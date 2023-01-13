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
    get Salary() {
        return this.#rate * this.#days
    }
    get fullName(){
        return `${this.#firstName} ${this.#surname}`;
    }
    get Surname(){
        return this.#surname;
    }
}
let worker1 = new Worker('Артём', 'Щербинский', 15000, 4)
let worker2 = new Worker('Семён', 'Киреев', 14999, 5)
console.log(worker1.Salary)
console.log(worker1.fullName)

