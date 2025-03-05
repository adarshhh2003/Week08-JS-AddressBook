class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContacts(contact) {
        this.contacts.push(contact);
    }

    displayContacts() {
        return this.contacts.map((contact) => contact.toString()).join("\n");
    }

    editDetails(firstName, lastName, newDetails) {
        let contact = this.contacts.find(contact => 
            contact.firstName.toLowerCase()===firstName.toLowerCase() &&
            contact.lastName.toLowerCase()===lastName.toLowerCase()
        );

        if(contact) {
            Object.assign(contact, newDetails);
            console.log("Contact Updated Successfully: \n", contact);
        } else {
            console.log("Contact Not Found");
        }
    }
}

module.exports = AddressBook;