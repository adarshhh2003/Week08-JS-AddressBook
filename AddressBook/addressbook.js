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
}

module.exports = AddressBook;