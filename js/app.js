`use strict`;

class Contacts{
    constructor(appState){
        this.appState = appState;

        this.header = `<div class="container top-radius">
                            <nav class="user-top-line">
                                <button class ="log_out">Log out</button>
                            </nav>
                        <h2>Contacts</h2>
                    </div>`;
    }
    requestUsers(){
        if(window.localStorage.getItem('login') == ''){
        // if(app.state.db.users){
            window.localStorage.clear('login');
        }
            api.reqestGet().then(json =>  this.formSearch(app.state.db = json));
        // }else this.formSearch();
    }
// login
    formSearch(){
        let header = `<div class="container top-radius">
                        <h2>Enter login</h2>
                    </div>`;

        let login = `<form class="form-inline search-form">
                        <div class="form-group">
                            <label class="sr-only" for="login">Login</label>
                            <input type="text" class="form-control" id="login" placeholder="Login">
                        </div>
                        </div>
                        <div class="form-group">
                            <button type="button" class="form-control" id='login_btn'>Login</button>
                        </div>
                    </form>`;
        if(window.localStorage.getItem('login') !== null && app.state.db.users){
            this.formSearchRender();
            this.logOut();
        }else{            
            document.body.querySelector('header').innerHTML = header;
            document.getElementById('top_main').innerHTML = `${login}`;
            document.getElementById('bot_main').innerHTML = '';
            this.login();
        }
    }
// search
    formSearchRender(){
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

            document.body.querySelector('header').innerHTML = this.header;
            document.getElementById('bot_main').innerHTML = `${table}`;
            
            this.searchFieldStorage();
            this.clickSort();
            this.selectContact();
            if(this.appState.locals.contactsInput !== ''){
                this.keypressFilter(this.appState.locals.contactsInput);
                this.appState.locals.contactsInput = '';
        }
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

            this.appState.db.users.forEach(elem => {
                let definedLastName = `${name} ${lastName}`,
                    undefinedLastName = `${name}`;
                if(lastName == 'undefined') definedLastName = undefinedLastName;
                if(elem.fullName == definedLastName && elem.email.toLocaleLowerCase() == email.toLocaleLowerCase()){
                    console.log('_id', elem._id);
                    app.render('editContact', elem);
                }
            });
        });
    }
//search field storage
    searchFieldStorage(){
        let input = document.getElementById('search');
        if(this.appState.locals.contactsInput == undefined) this.appState.locals.contactsInput = '';
        else input.value = this.appState.locals.contactsInput;
        input.addEventListener('keyup', () => {
            this.keypressFilter(input.value);
        });
    }
//keypress storage save
    keypressFilter(value){
        app.state.locals.contactsInput = value;
        this.FilterUserClass(value);

    }
//Сортировка пользователей по номеру телефона, фамилии, имени и тд, по любому из свойств пользователя
    SortUserClass(val){
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
    login(){
        document.getElementById('login_btn').addEventListener('click', () => {
            let login = document.getElementById('login').value;
            console.log(login)
            // if(login == '') {
            //     alert('Please, enter correct login!');
            // }
            window.localStorage.setItem('login', login);
            this.requestUsers();
        });
    }
    logOut(){
        console.log(document.getElementById('log_out'))
        document.querySelector('.log_out').addEventListener('click', () => {
            window.localStorage.clear();
            this.formSearch()
        })
    }
}
