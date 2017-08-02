`use strict`;

class Contacts{
    constructor(appState){
        this.appState = appState;
        console.log(appState);

        let header = '';
        header = `<div class="container top-radius">
                        <h2>Contacts</h2>
                    </div>`;
        document.body.querySelector('header').innerHTML = header;
    }
    requestUsers(){
         api.reqestGet().then(json => {
            app.state.db = json;
            console.log('parsed json',  app.state.db)
            return this.formSearch();
        });
    }
// search
    formSearch(){
        let form = `<form class="form-inline search-form">
                        <div class="form-group">
                            <label class="sr-only" for="search">Contacts</label>
                            <input type="text" class="form-control" id="search" placeholder="Search">
                        </div>
                    </form>`;
        document.getElementById('top_main').innerHTML = `${form}`;

        this.renderTable(app.state.db.users);
    }
    renderTable(base){
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
    }
//clicks   
    clickSort(){
        //sort click    
        let clickBlock = document.getElementById('sort_click');
        clickBlock.addEventListener('click', event => {
            this.SortUserClass(event.target.innerHTML.toLowerCase());
            this.renderTable(this.appState.db.users);
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
                }
            });
        });
    }
//search field storage
    searchFieldStorage(){
        // let searchGet = window.sessionStorage.getItem('search')
        let input = document.getElementById('search');
        // input.value = searchGet;
        input.addEventListener('keyup', () => {
            this.keypressFilter(input.value);
        });
    }
//keypress storage save
    keypressFilter(value){
        // let inputStorage = window.sessionStorage.setItem('search', value);
        this.FilterUserClass(value);

    }
//Сортировка пользователей по номеру телефона, фамилии, имени и тд, по любому из свойств пользователя
    SortUserClass(val){
        console.log(this.appState.db.users)
       this.appState.db.users.sort((a, b) => {
        if (val == 'name' || val == 'last name'){
            val = 'fullName';
        }
        if (a[val] > b[val]) {
            return 1
        }
        if (a[val] < b[val]) {
            return -1
        }
            return 0
        });
    }
//Фильтр по указанному свойству
    FilterUserClass(val){
        this.appState.locals.newDb = [];
        this.appState.db.users.forEach((elem, index) => {
            let filterLength = elem.fullName.slice(0, val.length);
                console.log('filter')
            if (filterLength == val ){
                this.appState.locals.newDb.push(elem);
            }
        });
                console.log('filterDb', this.appState.locals.newDb)
        this.renderTable(this.appState.locals.newDb);
    }
}
