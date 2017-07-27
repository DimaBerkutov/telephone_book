`use strict`;

class PageRenderHeader{
    constructor(){}
    renderTable(){
        let header = '';
        header += '<div class="container top-radius">';
		header += '<h2>Edit Contact</h2>';
		header += '</div>';
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
        editMainInfo = '<div class="edit-main-info">';
        editMainInfo += '<div class="edit-foto"><img src="images/user-face-mini.png" alt="#" class="user-img img-circle center-block"></div>';
        editMainInfo += '<div class="main-info-holder">';
        contactNameInfo.forEach(elem => {
            editMainInfo += '<div class="edit-field">';
            editMainInfo += '<button href="#" class="add-btn">';
            editMainInfo += '<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>';
            editMainInfo += `<span class="contenteditable" contenteditable="true">${elem}</span>`;
            editMainInfo += '</button>';
            editMainInfo += '</div>';
        });
        editMainInfo += '</div></div>';
// name photo info
        scrollHolder += '<div class="scroll-holder">';
        scrollHolder += '<div class="edit-info">';
        contactContactInfo.forEach(elem => {
            scrollHolder += '<div class="edit-field">';
            scrollHolder += '<button href="#" class="add-btn">';
            scrollHolder += '<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>';
            scrollHolder += `<span class="contenteditable" contenteditable="true">${elem}</span>`;
            scrollHolder += '</button>';
            scrollHolder += '</div>';
        });
        scrollHolder += '<div class="edit-field">';
        scrollHolder += '<button href="#" class="delete-contact">delete contact</button>';
        scrollHolder += '</div></div></div>';
        
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