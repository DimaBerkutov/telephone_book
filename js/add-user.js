`use strict`;

class AddUser{
    constructor(){
        this.header = `<div class="container top-radius">
                            <nav class="user-top-line">
                                <a href="user.html">Cansel</a>
                                <button class = "done-btn">Done</button>
                            </nav>
                            <h2>Add user</h2>
                        </div>`;
    }
    requestUsers(){
        this.renderTable();
    }
    renderTable(){
// name photo info
        let editMainInfo = `<div class="edit-main-info">
                            <div class="edit-foto">
                                <button class="add-foto-btn">
                                    <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span><span>add foto</span>
                                </button>
                            </div>
                        <div class="main-info-holder">`;
        let contactNameInfo = (val, id) => {
            editMainInfo += `<div class="edit-field">
                                <button href="#" class="add-btn">
                                    <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                                    <span id="${id}" class="contenteditable" contenteditable="true">${val}</span>
                                </button>
                            </div>`;
        };
        contactNameInfo('First Name', 'firstName');
        contactNameInfo('Last Name', 'lastName');
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
        contactContactInfo('add mobile phone', 'addMobilePhone');
        contactContactInfo('add home phone', 'addHomePhone');
        contactContactInfo('add email', 'addEmail');
        contactContactInfo('add address', 'addAddress');
        contactContactInfo('add birthday', 'addBirthday');
        contactContactInfo('add social profile', 'addSocialProfile');
        contactContactInfo('add field', 'addField');
        
        
        document.body.querySelector('header').innerHTML = this.header;
        document.getElementById('top_main').innerHTML = ``;
        document.getElementById('bot_main').innerHTML = `${editMainInfo} ${scrollHolder}`;
        this.mainClick();
    }
// click
    mainClick(){
        let mainClick = document.body;
        mainClick.addEventListener('click', (event) => {
            if(event.target.className == 'contenteditable')event.target.style.backgroundColor = '#fff';
            if(event.target.className == 'done-btn'){
                let firstName = document.getElementById('firstName').textContent;
                let lastName = document.getElementById('lastName').textContent;
                let email = document.getElementById('addEmail').textContent;
                let phone = document.getElementById('addMobilePhone').textContent;
                api.reqestPost(firstName, lastName, email, phone);
            }
        });
    }
}