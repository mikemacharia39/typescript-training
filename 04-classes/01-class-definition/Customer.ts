class Customer1 {

    firstName: string;
    lastName: string;

    constructor(theFirst: string, theLast: string) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}

let myCustomer1 = new Customer1("Mikehenry", "Maina");

console.log(myCustomer1.firstName)
console.log(myCustomer1.lastName);