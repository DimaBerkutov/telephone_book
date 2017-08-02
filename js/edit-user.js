`use strict`;

class EditUser{
    constructor(){
        let header = `<div class="container top-radius">
                    <h2>Edit contact</h2>
                </div>`;
        document.body.querySelector('header').innerHTML = header;
    }
    requestUsers(){
        this.renderTable();
    }
    renderTable(){
// name photo info
        let editMainInfo = `<div class="edit-main-info">
                        <div class="edit-foto"><img src="images/user-face-mini.png" alt="#" class="user-img img-circle center-block"></div>
                        <div class="main-info-holder">`;
        let contactNameInfo = val => {
            editMainInfo += `<div class="edit-field">
                                <button href="#" class="add-btn">
                                    <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                                    <span class="contenteditable" contenteditable="true">${val}</span>
                                </button>
                            </div>`;
        };
        contactNameInfo('First Name');
        contactNameInfo('Last Name');
        contactNameInfo('Company');

        editMainInfo += '</div></div>';
// name photo info
        let scrollHolder = `<div class="scroll-holder">
                            <div class="edit-info">`;
        let contactContactInfo = val => {
            scrollHolder += `<div class="edit-field">
                                <button href="#" class="add-btn">
                                    <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                                    <span class="contenteditable" contenteditable="true">${val}</span>
                                </button>
                            </div>`;
        };
        contactContactInfo('+38 (063) 733 44 55');
        contactContactInfo('add home phone');
        contactContactInfo('add email');
        contactContactInfo('add address');
        contactContactInfo('add birthday');
        contactContactInfo('add social profile');
        contactContactInfo('add field');

        scrollHolder += `<div class="edit-field">
                            <button href="#" class="delete-contact">delete contact</button>
                        </div></div></div>`;
        
        document.getElementById('top_main').innerHTML = ``;
        document.getElementById('bot_main').innerHTML = `${editMainInfo} ${scrollHolder}`;
        this.mainClick();
    }
// click
    mainClick(){
        let mainClick = document.body.querySelector('main');
        mainClick.addEventListener('click', (event) => {
            if(event.target.className == 'contenteditable')event.target.style.backgroundColor = '#fff';
        });
    }
}