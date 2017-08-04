`use strict`;

class EditUser{
    constructor(){
        this.header = `<div class="container top-radius">
                            <nav class="user-top-line">
                                <a href="user.html">Cansel</a>
                                <button class ="edit-btn">Done</button>
                            </nav>
                            <h2>Edit contact</h2>
                        </div>`;
    }
    requestUsers(user){
        this.user = user;
        this.renderTable();
    }
    renderTable(){
        console.log(this.user);
// name photo info
        let editMainInfo = `<div class="edit-main-info">
                        <div class="edit-foto"><img src="images/user-face-mini.png" alt="#" class="user-img img-circle center-block"></div>
                        <div class="main-info-holder">`;
        let contactNameInfo = (val, id) => {
            editMainInfo += `<div class="edit-field">
                                <button href="#" class="add-btn">
                                    <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                                    <span id="${id}" class="contenteditable" contenteditable="true">${val}</span>
                                </button>
                            </div>`;
        };
        if(this.user){
            contactNameInfo(this.user.fullName.split(' ')[0], 'firstName');
            contactNameInfo(this.user.fullName.split(' ')[1], 'lastName');
        }else{
            contactNameInfo('First Name', 'firstName');
            contactNameInfo('Last Name', 'lastName');
        }
        contactNameInfo('Company', 'company');

        editMainInfo += '</div></div>';
// name photo info
        let scrollHolder = `<div class="scroll-holder">
                            <div class="edit-info">`;
        let contactContactInfo = (val, id) => {
            scrollHolder += `<div class="edit-field">
                                <button href="#" class="add-btn">
                                    <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                                    <span id="${id}" class="contenteditable" contenteditable="true">${val}</span>
                                </button>
                            </div>`;
        };
        if(this.user){
            contactContactInfo(this.user.phone, 'addMobilePhone');
            contactContactInfo('add home phone', 'addHomePhone');
            contactContactInfo(this.user.email, 'addEmail');
        }else{
            contactContactInfo('add mobile phone', 'addMobilePhone');
            contactContactInfo('add home phone', 'addHomePhone');
            contactContactInfo('add email', 'addEmail');
        }
        contactContactInfo('add address', 'addAddress');
        contactContactInfo('add birthday', 'addBirthday');
        contactContactInfo('add social profile', 'addSocialProfile');
        contactContactInfo('add field', 'addField');

        scrollHolder += `<div class="edit-field">
                            <button href="#" class="delete-contact">delete contact</button>
                        </div></div></div>`;
        
                        
        document.body.querySelector('header').innerHTML = this.header;
        document.getElementById('top_main').innerHTML = ``;
        document.getElementById('bot_main').innerHTML = `${editMainInfo} ${scrollHolder}`;

        this.mainClick();
        this.contactDell();
        this.editClick();
    }
// click
    mainClick(){
        let mainClick = document.body.querySelector('main');
        mainClick.addEventListener('click', (event) => {
            if(event.target.className == 'contenteditable')event.target.style.backgroundColor = '#fff';
        });
    }
    contactDell(){
        if(this.user){
            document.querySelector('.delete-contact').addEventListener('click', () => {
                api.reqestDelete(this.user._id);
            });
        }
    }
    editClick(){
        console.log('this.user', this.user);
        if(this.user){            
            document.querySelector('.edit-btn').addEventListener('click', () => {
                let firstName = document.getElementById('firstName').textContent;
                let lastName = document.getElementById('lastName').textContent;
                let email = document.getElementById('addEmail').textContent;
                let phone = document.getElementById('addMobilePhone').textContent;
                console.log(firstName, lastName, email, phone, this.user._id)
                api.reqestPatch(firstName, lastName, email, phone, this.user._id);
            });
        }
    }
}