`use strict`;

class PageRenderHeader{
    constructor(){}
    renderTable(){
        let header = '';
        header = `<div class="container top-radius">
                        <h2>${contactsDb.pages[0]}</h2>
                    </div>`;
        document.body.querySelector('header').innerHTML = header;
        let phonebookGet = new Phonebook().reqestGet();
        let val3 = new PageRenderMain().formSearch(contactsDb.contactsBase);
    }
}
class PageRenderMain{
    constructor(){}
    formSearch(base){
// search
        let form = `<form class="form-inline search-form">
                        <div class="form-group">
                            <label class="sr-only" for="search">${contactsDb.pages[0]}</label>
                            <input type="text" class="form-control" id="search" placeholder="Search">
                        </div>
                    </form>`;
        document.getElementById('top_main').innerHTML = `${form}`;
        this.renderTable(base);
    }
    renderTable(base){
        let table = '', tHead = '',  tBody = '';
// thead
        tHead = `<thead>
                    <tr id = "sort_click">`;
        contactsDb.contactsColumn.forEach(elem => {
            tHead += `<th>${elem}</th>`;
        });
        tHead +=    `</tr>
                </thead>`;
// tbody
        let name = [], lastName = [], email = [];
        tBody = '<tbody>';
        console.log('base', base.length)
        base.forEach(elem1 => {
            let fullName = elem1.fullName.split(' ');
            tBody += `<tr>
                        <td>${fullName[0]}</td>
                        <td>${fullName[1]}</td>
                        <td>${elem1.email}</td>
                    </tr>`;
                    name.push(fullName[0]);
                    lastName.push(fullName[1]);
                    email.push(elem1.email);
        });
        tBody += `</tbody>`;
        table = `<table class="table table-hover contacts">
                    ${tHead}${tBody}
                </table>`;
// main
        document.getElementById('bot_main').innerHTML = `${table}`;

        this.searchFieldStorage();
        this.clickSort();
        this.selectContact();

    }
//clicks   
    clickSort(){
        //sort click    
        let clickBlock = document.getElementById('sort_click');
        clickBlock.addEventListener('click', event => {
            let phonebook6 = new SortUserClass(event.target.innerHTML.toLowerCase());
            this.renderTable(contactsDb.contactsBase);
        });
    }
    selectContact(){
        //select contact click
        let contactSelect = document.querySelector('main').querySelector('tbody');
        contactSelect.addEventListener('click', (event) => {
            event.target.id = 'clickTd';
            let name = document.getElementById('clickTd').parentElement.children[0].textContent;
            let lastName = document.getElementById('clickTd').parentElement.children[1].textContent;
            let email = document.getElementById('clickTd').parentElement.children[2].textContent;
            contactsDb.contactsBase.forEach(elem => {
                let definedLastName = `${name} ${lastName}`,
                    undefinedLastName = `${name}`;
                if(lastName == 'undefined') definedLastName = undefinedLastName;
                if(elem.fullName == definedLastName && elem.email.toLocaleLowerCase() == email.toLocaleLowerCase()){
                    console.log('_id', elem._id);
                    // let phonebookDelete = new Phonebook().reqestDelete(elem._id);
                    // let phonebookdell = new DeleteUserClass(input.value);
                }
            });
        });
    }
//search field storage
    searchFieldStorage(){
        let searchGet = window.sessionStorage.getItem('search'),
            input = document.getElementById('search');
        // console.log('searchGet', searchGet);
        // console.log('input', input);
        input.value = searchGet;
        // console.log('input.value', input.value);
        input.addEventListener('keyup', () => {
            this.keypressFilter(input.value);
        // console.log('keyup');
        });
    }
//keypress storage save
    keypressFilter(value){
        let inputStorage = window.sessionStorage.setItem('search', value);
        // console.log('inputStorage')
        let phonebook7 = new FilterUserClass(value);

    }
}
let tableRender = new PageRenderHeader().renderTable();