import { LightningElement, track } from 'lwc';

export default class ContactsList extends LightningElement {
    contactsList = [{
        'Id' : 'con001',
        'Name' : 'Mr. Ashwin Bretto',
        'FirstName' : 'Ashwin',
        'Salutation' : 'Mr.',
        'LastName' : 'Bretto',
        'Title' : 'Sr. Developer',
        'Email' : 'dev@bretto.lwc',
        'City' : 'Chennai',
        'Country' : 'India',
        'Street' : 'Dream Park St 13',
        'PostalCode' : '600126',
        'Province' : 'Tamil Nadu'
    },
    {
        'Id' : 'con002',
        'Name' : 'Mr. Resly Mathews',
        'FirstName' : 'Resly',
        'Salutation' : 'Mr.',
        'LastName' : 'Mathews',
        'Title' : 'Director',
        'Email' : 'dev@bretto.lwc',
        'City' : 'Chennai',
        'Country' : 'India',
        'Street' : 'Dream Park St 13',
        'PostalCode' : '600126',
        'Province' : 'Tamil Nadu'
    },
    {
        'Id' : 'con003',
        'Name' : 'Mr. Jon',
        'FirstName' : 'Jon',
        'Salutation' : 'Mr.',
        'LastName' : '',
        'Title' : 'Manager',
        'Email' : 'dev@bretto.lwc',
        'City' : 'Chennai',
        'Country' : 'India',
        'Street' : 'Dream Park St 13',
        'PostalCode' : '600126',
        'Province' : 'Tamil Nadu'
    },
    {
        'Id' : 'con004',
        'Name' : 'Mr. Seth',
        'FirstName' : 'Seth',
        'Salutation' : 'Mr.',
        'LastName' : '',
        'Title' : 'Manager',
        'Email' : 'dev@bretto.lwc',
        'City' : 'Chennai',
        'Country' : 'India',
        'Street' : 'Dream Park St 13',
        'PostalCode' : '600126',
        'Province' : 'Tamil Nadu'
    }];

    @track primaryContact;

    makeAllEditable() {
        console.log('makeAllEditable ');
        this.template.querySelectorAll('c-contact-card').forEach(element => {
            console.log('element', element);
            element.toggleEditable();
        });
    }
}