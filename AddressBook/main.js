const Contact = require("./contact"); 
const AddressBook = require("./addressbook");

let addressbook = new AddressBook();

let contact1 = new Contact(
    "Adarsh",
    "Patel",
    "123 Main st",
    "SpringField",
    "ILkm",
    "62704",
    "1234567890",
    "adarshpatel@gmail.com"
);

let contact2 = new Contact(
    "Uday",
    "Kourav",
    "234 Main vt",
    "Boston",
    "Makm",
    "02108",
    "9876543210",
    "udaykourav@example.com"
);

addressbook.addContacts(contact1);
addressbook.addContacts(contact2);

addressbook.editDetails("Uday", "Kourav", {
    firstName: "Sanket",
    lastName: "Patel",
    phoneNumber: "8435216790",
    email: "sanketpatel@gmail.com",
});

console.log("All contacts: \n", addressbook.displayContacts());