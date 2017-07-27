`use strict`;

class PageRenderHeader{
    constructor(){}
    renderTable(){
        let header = '';
        header += `<div class="container top-radius">
                    <h2>Add user</h2>
                </div>`;
        document.body.querySelector('header').innerHTML = header;
    }
}
class PageRenderBeforeHeader{
    constructor(){}
    renderTable(){
        let beforeHeader = '';
        beforeHeader += `<nav class="user-top-line">
                            <a href="user.html">Cansel</a>
                            <button class = "done-btn">Done</button>
                        </nav>`;
        document.body.querySelector('header').children[0].insertAdjacentHTML('afterbegin', beforeHeader);
    }
}
class PageRenderMain{
    constructor(){}
    renderTable(){
        let contactNameInfo = ['First Name', 'Last Name', 'Company'],
        contactContactInfo = ['add mobile phone', 'add home phone', 'add email', 'add address', 'add birthday', 'add social profile', 'add field'],
        editMainInfo = '', scrollHolder = '';
// name photo info
        editMainInfo = `<div class="edit-main-info">
                            <div class="edit-foto">
                                <button class="add-foto-btn">
                                    <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span><span>add foto</span>
                                </button>
                            </div>
                        <div class="main-info-holder">`;
        contactNameInfo.forEach(elem => {
            let elemId = elem.split(' ').join('');
            editMainInfo += `<div class="edit-field">
                                <button href="#" class="add-btn">
                                    <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                                    <span id="${elemId}" class="contenteditable" contenteditable="true">${elem}</span>
                                </button>
                            </div>`;
        });
        editMainInfo += '</div></div>';
// name photo info
        scrollHolder += `<div class="scroll-holder">
                            <div class="edit-info">`;
        contactContactInfo.forEach(elem => {
            let elemId = elem.split(' ').join('');
            scrollHolder += `<div class="edit-field">
                                <button href="#" class="add-btn">
                                    <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                                    <span id="${elemId}" class="contenteditable" contenteditable="true">${elem}</span>
                                </button>
                            </div>`;
        });
        scrollHolder += `<div class="edit-field">
                            <button href="#" class="delete-contact">delete contact</button>
                        </div></div></div>`;
        
        document.body.querySelector('main').innerHTML = `<div class="container"> ${editMainInfo} ${scrollHolder} </div>`;
// click
        let mainClick = document.body;
        mainClick.addEventListener('click', (event) => {
            if(event.target.className == 'contenteditable')event.target.style.backgroundColor = '#fff';
            if(event.target.className == 'done-btn'){
                let firstName = document.getElementById('FirstName').textContent;
                let lastName = document.getElementById('LastName').textContent;
                let phone = document.getElementById('addmobilephone').textContent;
                let email = document.getElementById('addemail').textContent;
                let phonebookGet = new Phonebook().reqestPost(firstName, lastName, phone, email);
            }
        });
    }
}
let UserHeader = new PageRenderHeader().renderTable();
let UserBeforeHeader = new PageRenderBeforeHeader().renderTable();
let UserMain = new PageRenderMain().renderTable();