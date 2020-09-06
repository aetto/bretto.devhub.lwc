import { LightningElement, track, api } from 'lwc';

export default class ContactCard extends LightningElement {

    constructor(){
        super();
    }

    showMore = false;
    editable = false;
    @api contact = {
        'Name' : 'Mr. Ashwin Bretto',
        'FirstName' : 'Developer',
        'Salutation' : 'Mr.',
        'LastName' : 'Name',
        'Title' : 'Developer',
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
    @api
    toggleEditable() {
        console.log('toggleEditable Called');
        this.showMore = true;
        this.editable = !this.editable;
    }
    bindName(event) {
        //console.log('name binding',event);
        this.contact = JSON.parse(JSON.stringify(this.contact));
        this.contact.FirstName = event.detail.firstName;
        this.contact.LastName = event.detail.lastName;
        const nameChangeEvent = new CustomEvent('namechange', 
                                                        {
                                                            detail: this.contact, 
                                                            bubbles: true
                                                        });
        this.dispatchEvent(nameChangeEvent);
        //console.log('contact',this.contact);
    }
}