import { LightningElement } from 'lwc';

export default class ContactCard extends LightningElement {
    showMore = false;
    editable = false;
    contact = {
        'Name' : 'Mr. Ashwin Bretto',
        'FirstName' : 'Developer',
        'Salutation' : 'Mr.',
        'LastName' : 'Name',
        'Email' : 'dev@bretto.lwc',
        'City' : 'Chennai',
        'Country' : 'India',
        'Street' : 'Dream Park St 13',
        'PostalCode' : '600126',
        'Province' : 'Tamil Nadu'
    };

    showMoreFields() {
        this.showMore = !this.showMore;
    }
    toggleEditable() {
        this.editable = !this.editable;
    }
}