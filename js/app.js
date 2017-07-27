/**
 * Created by user on 17.07.2017.
 */
`use strict`;

class PageRenderHeader{
    constructor(){}
    renderTable(){
        let header = '';
        header += '<header class="header">';
        header += '<div class="container top-radius">';
		header += '<h2>Contacts</h2>';
		header += '</div>';
		header += '</header>';
        document.body.querySelector('header').innerHTML = header;
    }
}
class PageRenderMain{
    constructor(){}
    renderTable(){
        let main = '', form = '', table = '', tHead = '',  tBody = '';
// search
        form += '<form class="form-inline search-form">';
        form += '<div class="form-group">';
        form += '<label class="sr-only" for="search">Search</label>';
        form += '<input type="text" class="form-control" id="search" placeholder="Search">';
        form += '</div>';
        form +=  '</form>';
        table += '<table class="table table-hover contacts">';
// thead
        tHead += '<thead>';
        tHead += '<tr id = "sort_click">';
        contactsDb.contactsColumn.forEach(elem => {
            tHead += '<th>';
            tHead += elem;
            tHead += '</th>';
        });
        tHead += '</tr>';
        tHead += '</thead>';
        table += tHead;
// tbody
        tBody += '<tbody>';
        contactsDb.contactsBase.forEach(elem1 => {
            console.log(elem1)
            tBody += '<tr>';
            for (let key1 in elem1){
                if(key1 !== '_id' && key1 !== 'created' && key1 !== 'phone'){
                    // let phonebook7 = new Phonebook().editFullName(elem1[key1]);
                    // let fullNameEdit = (name, lastName) =>{
                        tBody += `<td>${elem1[key1]}</td>`;
                    // }
                }
            }
            tBody += '</tr>';
        });
        tBody += '</tbody>';
        table += tBody;
        table += '</table>';
// main
        main += '<div class="container">';
        main += form;
        main += table;
        main += '</div>';
        document.body.querySelector('main').innerHTML = main;
    }
}

// let phonebookGet = new Phonebook().reqestGet();

// let phonebookGet = new Phonebook().serverReqestGet();
    let val1 = new PageRenderHeader().renderTable();
    let val2 = new PageRenderMain().renderTable();
// document.getElementById('sort_click').querySelectorAll('th').forEach(elem => {
// console.log(elem.textContent.toLowerCase());
    let clickBlock = document.getElementById('sort_click');
    clickBlock.addEventListener('click', () => {
        let phonebook6 = new SortUserClass().sortUser('email');
        // document.getElementById('sort_click').querySelectorAll('th');
        ContactMain = new PageRenderMain().renderTable();
        // console.log(document.getElementById('sort_click').querySelectorAll('th'));
    });
// });