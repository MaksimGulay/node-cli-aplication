// contacts.js

    const {nanoid} = require("nanoid")
    const fs = require("fs/promises");
    const path = require('path');
    const contactsPath = path.join(__dirname,'bd', 'contacts.json');
    console.log (contactsPath);
 


    async function listContacts() {
        const data = await fs.readFile(contactsPath);
        return JSON.parse(data); 
    }
  
    async function getContactById(contactId) {
        const contacts = await listContacts();
        const result = contacts.find(item => item.id === contactId);
        return result || null;
      }
  
      
      async function addContact(name, email, phone) {
          const contacts = await listContacts();
          const newContsct =  {id:nanoid(),
            name, email, phone
        }
        contacts.push(newContsct);
        await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
        return newContsct;
    }

    async function removeContact(contactId) {
      const contacts = await listContacts();
      const index = contacts.findIndex(item => item.id === contactId);
      if(index === -1) {
        return null;
      }
      const [result] = contacts.splice(index, 1);
      await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
        return result;
        
      
    }
    
    module.exports = {
    listContacts,
    getContactById,
    addContact,
    removeContact
    }