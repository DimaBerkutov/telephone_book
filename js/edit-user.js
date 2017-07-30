`use strict`;

class PageRenderHeader{
    constructor(){}
    renderTable(){
        let header = '';
        header += `<div class="container top-radius">
                    <h2>${contactsDb.pages[2]}</h2>
                </div>`;
        document.body.querySelector('header').innerHTML = header;
    }
}
class PageRenderMain{
    constructor(){}
    renderTable(){
        let contactNameInfo = ['First Name', 'Last Name', 'Company'],
        contactContactInfo = ['+38 (063) 733 44 55', 'add home phone', 'add email', 'add address', 'add birthday', 'add social profile', 'add field'],
        editMainInfo = '', scrollHolder = '';
// name photo info
        editMainInfo = `<div class="edit-main-info">
                        <div class="edit-foto"><img src="images/user-face-mini.png" alt="#" class="user-img img-circle center-block"></div>
                        <div class="main-info-holder">`;
        contactNameInfo.forEach(elem => {
            editMainInfo += `<div class="edit-field">
                                <button href="#" class="add-btn">
                                    <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                                    <span class="contenteditable" contenteditable="true">${elem}</span>
                                </button>
                            </div>`;
        });
        editMainInfo += '</div></div>';
// name photo info
        scrollHolder += `<div class="scroll-holder">
                            <div class="edit-info">`;
        contactContactInfo.forEach(elem => {
            scrollHolder += `<div class="edit-field">
                                <button href="#" class="add-btn">
                                    <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                                    <span class="contenteditable" contenteditable="true">${elem}</span>
                                </button>
                            </div>`;
        });
        scrollHolder += `<div class="edit-field">
                            <button href="#" class="delete-contact">delete contact</button>
                        </div></div></div>`;
        
        document.body.querySelector('main').innerHTML = `<div class="container"> ${editMainInfo} ${scrollHolder} </div>`;
// click
        let mainClick = document.body.querySelector('main');
        mainClick.addEventListener('click', (event) => {
            if(event.target.className == 'contenteditable')event.target.style.backgroundColor = '#fff';
        });
    }
}
let EditContactHeader = new PageRenderHeader().renderTable();
let EditContactMain = new PageRenderMain().renderTable();