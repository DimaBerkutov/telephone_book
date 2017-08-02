`use strict`;

class AddUser{
    constructor(){
        let header = `<div class="container top-radius">
                            <nav class="user-top-line">
                                <a href="user.html">Cansel</a>
                                <button class = "done-btn">Done</button>
                            </nav>
                            <h2>Add user</h2>
                        </div>`;
        document.body.querySelector('header').innerHTML = header;
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
        let contactNameInfo = val => {
            let valId = val.split(' ').join('');
            editMainInfo += `<div class="edit-field">
                                <button href="#" class="add-btn">
                                    <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                                    <span id="${valId}" class="contenteditable" contenteditable="true">${val}</span>
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
            let valId = val.split(' ').join('');
            scrollHolder += `<div class="edit-field">
                                <button href="#" class="add-btn">
                                    <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                                    <span id="${valId}" class="contenteditable" contenteditable="true">${val}</span>
                                </button>
                            </div>`;
        };
        contactContactInfo('add mobile phone');
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
        let mainClick = document.body;
        mainClick.addEventListener('click', (event) => {
            if(event.target.className == 'contenteditable')event.target.style.backgroundColor = '#fff';
            if(event.target.className == 'done-btn'){
                let firstName = document.getElementById('FirstName').textContent;
                let lastName = document.getElementById('LastName').textContent;
                let phone = document.getElementById('addmobilephone').textContent;
                let email = document.getElementById('addemail').textContent;
                let apiGet = new Api().reqestPost(firstName, lastName,email, phone);
            }
        });
    }
}