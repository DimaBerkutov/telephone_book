`use strict`;

class PageRenderHeader{
    constructor(){}
    renderTable(){
        let header = '';
        header += `<div class="container top-radius">
                        <h2>Contacts</h2>
                    </div>`;
        document.body.querySelector('header').innerHTML = header;
    }
}
class PageRenderMainSearch{
    constructor(){}
    renderTable(val){
        let form = '';
// search
        form += `<form class="form-inline search-form">
                    <div class="form-group">
                        <label class="sr-only" for="search">${val}</label>
                        <input type="text" class="form-control" id="search" placeholder="Search">
                    </div>
                </form>`;
                document.getElementById('top_main').innerHTML = form;
    }
}
class PageRenderMain{
    constructor(){}
   
    renderTable(base){
        let main = '',  table = '', tHead = '',  tBody = '';
        
// thead
        tHead += `<thead>
                    <tr id = "sort_click">`;
        contactsDb.contactsColumn.forEach(elem => {
            tHead += `<th>${elem}</th>`;
        });
        tHead += `</tr></thead>`;
// tbody
        tBody += '<tbody>';
        let name = [], lastName = [], email = [];
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
        table += `<table class="table table-hover contacts">
                    ${tHead}${tBody}
                </table>`;
// main
        main += `${table}`;
        document.getElementById('bot_main').innerHTML = main;
        this.renderSearch()
        this.clickSort();
        this.keypressFilter();
    }
    clickSort(){
//click    
        let clickBlock = document.getElementById('sort_click');
        clickBlock.addEventListener('click', event => {
            let phonebook6 = new SortUserClass().sortUser(event.target.innerHTML.toLowerCase());
            this.renderTable();
        });
    }
//keypress
    keypressFilter(){
        let input = document.getElementById('search');
        input.addEventListener('keyup', event => {
            let phonebook7 = new FilterUserClass().filterUser(input.value);
        });
    }
     renderSearch(val){
    }
}

let val1 = new PageRenderHeader().renderTable();
let val2 = new PageRenderMainSearch().renderTable();
let val3 = new PageRenderMain().renderTable(contactsDb.contactsBase);