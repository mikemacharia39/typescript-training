class Customer {

    constructor(private _firstName: string, private _lastName: string) {
        // automatically caters for assignments
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }


}

let myCustomer = new Customer("Henry", "Maina");

console.log(myCustomer.firstName)
console.log(myCustomer.lastName);