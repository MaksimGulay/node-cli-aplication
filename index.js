// index.js

const List = require("./contacts")


const invokeAction = async ({action, id , name, email, phone}) =>  {
switch(action) {
    case 'list':
        const allContacts = await List.listContacts();
        console.log(allContacts);
      break;
    case 'get':
      const oneContact = await List.getContactById(id);
      console.log(oneContact);
      break;

    case 'add':
      const newContsct = await List.addContact(name, email, phone);
      console.log(newContsct)
      break;

    case 'remove':
      const contactDelite = await List.removeContact(id);
      console.log(contactDelite)
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
    
}
}

// invokeAction({action: "list"})
// invokeAction({action: "get", id: "qdggE76Jtbfd9eWJHrssH"})
// invokeAction({action: "add", name: "Jon Dou", email: "djon@mail.com", phone: "(992) 96-7895"})
invokeAction({action: "remove", id: "OyJQnT6Sr55LN4uhdSIQh"})
