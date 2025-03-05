class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        if(!this.validateName(firstName)) throw new Error("Invalid firstName!");
        if(!this.validateName(lastName)) throw new Error("Invalid lastName!");
        if(!this.validateAddress(address)) throw new Error("Invalid address!");
        if(!this.validateAddress(city)) throw new Error("Invalid city!");
        if(!this.validateAddress(state)) throw new Error("Invalid state!");
        if(!this.validateZip(zip)) throw new Error("Invalid Zip!");
        if(!this.validatePhoneNumber(phone)) throw new Error("Invalid phone number!");
        if(!this.validateEmail(email)) throw new Error("Invalid email!");

        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }

    toString() {
        return `Name: ${this.firstName} ${this.lastName}, Address: ${this.address}, City: ${this.city},
        State: ${this.state}, Zip: ${this.zip}, Phone: ${this.phone}, Email: ${this.email}`;
    }

    validateName(name) {
        let namePattern = /^[A-Z][a-zA-Z]{3,}$/;
        return namePattern.test(name);
    }

    validateAddress(address) {
        let addressPatern = /^[A-Za-z0-9\s]{4,}$/;
        return addressPatern.test(address);
    }

    validateZip(zip) {
        let zipPattern = /^\d{5}(-\d{4})?$/;
        return zipPattern.test(zip);
    }

    validatePhoneNumber(phone) {
        let phonePattern = /^\d{10}$/;
        return phonePattern.test(phone);
    }

    validateEmail(email) {
        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }
}

module.exports = Contact; // Correctly export the class
