import { LightningElement, track } from 'lwc';

export default class ContactCardWrap extends LightningElement {

    constructor() {
        super();
        this.template.addEventListener('namechange', this.handleNameChange.bind(this));
    }
    @track contactRec = {
        'Name' : 'Mr. Ashwin Bretto',
        'FirstName' : 'Ashwin',
        'Salutation' : 'Mr.',
        'LastName' : 'Bretto',
        'Title' : 'Architect',
        'Email' : 'dev@bretto.lwc',
        'City' : 'Ontorio',
        'Country' : 'Canada',
        'Street' : 'Dream Park St 13',
        'PostalCode' : '600126',
        'Province' : 'Toronto'
    }; 

    @track nameFromChild = '';

    handleNameChange(event) {
        console.log('event handler in parent',JSON.parse(JSON.stringify(event.detail)));
        this.contactRec = JSON.parse(JSON.stringify(event.detail));
    }

}