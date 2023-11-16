import { Component } from 'react'
import classes from './ContactList.module.css'

export class ContactList extends Component {

    render() {
        const {contacts, onRemove} = this.props;

        return (
            <ul className={classes.contactList}>
                {
                    contacts.map(contact => 
                        <li key={contact.id} className={classes.contactItem}>
                            <p className={classes.contactItemText}>{contact.name}: {contact.number}</p>
                            <button 
                                type='button' 
                                className={classes.removeBtn} 
                                onClick={() => onRemove(contact)}>Remove</button>
                        </li>    
                    )
                }
            </ul>
        )
    }
}