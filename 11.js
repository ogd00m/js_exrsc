class Worker {
    constructor(firstName, surname, rate, days) {
        this.firstName = firstName;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary() {
        console.log(this.firstName + " " + this.surname + " " + this.rate * this.days)
    }
}
let worker1 = new Worker('Артём', 'Щербинский', 15000, 4)
let worker2 = new Worker('Семён', 'Киреев', 14999, 5)
worker1.getSalary()
worker2.getSalary()