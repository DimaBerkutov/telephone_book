`use strict`;

class PageRenderMain{
    constructor(){
        let header = '';
        header = `<div class="container top-radius">
                        <h2>Contacts</h2>
                    </div>`;
        document.body.querySelector('header').innerHTML = header;
    }
    requestUsers(base){
        //  api.reqestGet();
         api.reqestGet().then(users => {
            //  users.json()
             console.log(users)
         });

        this.formSearch(base);
    }
// search
    formSearch(base){
        let form = `<form class="form-inline search-form">
                        <div class="form-group">
                            <label class="sr-only" for="search">Contacts</label>
                            <input type="text" class="form-control" id="search" placeholder="Search">
                        </div>
                    </form>`;
        document.getElementById('top_main').innerHTML = `${form}`;
        this.renderTable(base);
    }
    renderTable(base){
        //  api.reqestGet().then(json => {
            // console.log('response', json);
            //  console.log('users', users)
            //  console.log('contactsDb.contactsBase', contactsDb.contactsBase)
// thead
            let tHead = `<thead>
                        <tr id = "sort_click">`;
            let contactsColumn = val => {
                tHead += `<th>${val}</th>`;
            };
            contactsColumn('Name');
            contactsColumn('Last name');
            contactsColumn('Email');
            
            tHead +=    `</tr>
                    </thead>`;
// tbody
            let name = [], lastName = [], email = [];
            let tBody = '<tbody>';
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
            let table = `<table class="table table-hover contacts">
                            ${tHead}${tBody}
                        </table>`;
// main
            document.getElementById('bot_main').innerHTML = `${table}`;
            
            this.searchFieldStorage();
            this.clickSort();
            this.selectContact();
        //  })
    }
//clicks   
    clickSort(){
        //sort click    
        let clickBlock = document.getElementById('sort_click');
        clickBlock.addEventListener('click', event => {
            this.SortUserClass(event.target.innerHTML.toLowerCase());
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
                    // api.reqestDelete(elem._id);
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
        this.FilterUserClass(value);

    }
//Сортировка пользователей по номеру телефона, фамилии, имени и тд, по любому из свойств пользователя
    SortUserClass(val){
       contactsDb.contactsBase.sort((a, b) => {
        if (val == 'name' || val == 'last name'){
            val = 'fullName';
        }
        let sss = document.body.querySelectorAll
        if (a[val] > b[val]) {
            return 1
        }
        if (a[val] < b[val]) {
            return -1
        }
        // a должно быть равным b
            return 0
        });
    }
//Фильтр по указанному свойству
    FilterUserClass(val){
        let filterDb = [];
        contactsDb.contactsBase.forEach((elem, index) => {
            let filterLength = elem.fullName.slice(0, val.length);
                console.log('filter')
            if (filterLength == val ){
                filterDb.push(elem);
            }
        });
                console.log('filterDb', filterDb)
        let baseRender = new PageRenderMain().renderTable(filterDb);
    }
}

let val3 = new PageRenderMain().requestUsers(contactsDb.contactsBase);