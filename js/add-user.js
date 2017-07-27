`use strict`;

class PageRenderHeader{
    constructor(){}
    renderTable(){
        let header = '';
        header += '<div class="container top-radius">';
		header += '<h2>Add user</h2>';
		header += '</div>';
        document.body.querySelector('header').innerHTML = header;
    }
}
class PageRenderBeforeHeader{
    constructor(){}
    renderTable(){
        let beforeHeader = '';
        beforeHeader += '<nav class="user-top-line">';
        beforeHeader += '<a href="user.html">Cansel</a>';
        beforeHeader += '<button class = "done-btn">Done</button>';
        beforeHeader += '</nav>';
        document.body.querySelector('header').children[0].insertAdjacentHTML('afterbegin', beforeHeader);
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
        editMainInfo += '<div class="edit-foto">';
        editMainInfo += '<button class="add-foto-btn">';
        editMainInfo += '<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span><span>add foto</span>';
        editMainInfo += '</button></div>';
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
        console.log('dsd')
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
let UserHeader = new PageRenderHeader().renderTable();
let UserBeforeHeader = new PageRenderBeforeHeader().renderTable();
let UserMain = new PageRenderMain().renderTable();