/**
 * Created by user on 06.07.2017.
 */

`use strict`;
let contactsDb = {
    pages: ['Contacts'],
    contactsColumn: ['Name', 'Last name', 'Email'],
    // contactsBase: []
    contactsBase: [
        {
            _id: 1,
            fullName: 'Иван Петров',
            phone: '0974532641',
            email: 'IvanPetrov@ec.ua'
        },
        {
            _id: 2,
            fullName: 'Сергей Иванов',
            phone: '0634573611',
            email: 'SergeiSergeev@ec.ua'
        },
        {
            _id: 3,
            fullName: 'Александр Александров',
            phone: '0974576341',
            email: 'IvanIvanov@ec.ua'
        },
        {
            _id: 4,
            fullName: 'Алекс Смирнов',
            phone: '0954553141',
            email: 'AlexAlex@ec.ua'
        },
        {
            _id: 5,
            fullName: 'Сергей Волков',
            phone: '0934532411',
            email: 'VolkovSergey@ec.ua'
        },
        {
            _id: 6,
            fullName: 'Елена Лещенко',
            phone: '0954242641',
            email: 'ElenaLeshenko@ec.ua'
        },
        {
            _id: 7,
            fullName: 'Алекс Сергеев',
            phone: '0974524641',
            email: 'ShemyakinaN@ec.ua'
        },
        {
            _id: 8,
            fullName: 'Кира Воробьева',
            phone: '0974246341',
            email: 'Kira1990@ec.ua'
        }
    ]
};
const url = 'http://easycode-js.herokuapp.com/';
class Phonebook {
    constructor(){}
    reqestGet(){
            let getRequest = new XMLHttpRequest();
            getRequest.addEventListener('readystatechange', () =>{
                if(getRequest.readyState == 4 && getRequest.DONE == 4){
                    contactsDb.contactsBase = JSON.parse(getRequest.responseText);
                    console.log(contactsDb.contactsBase);
                    console.log(contactsDb);
                }
            });
            getRequest.open('GET', url + 'DimaBerkutov/users', true);
            getRequest.send();
    }
    reqestPost(firstName, lastName, phone, email){
        console.log(firstName, lastName, phone, email)
        const newUser = {
            fullName: `${firstName} ${lastName}`,
            email: email,
            phone: phone
        };
        let postRequest = new XMLHttpRequest();
        postRequest.addEventListener('readystatechange', () =>{
            if(postRequest.readyState == 4){
                console.log(newUser);
                console.log(contactsDb);
            }
        });
        postRequest.open('POST', url + 'DimaBerkutov/users', true);
        postRequest.setRequestHeader('Content-Type', 'application/json');
        postRequest.send(JSON.stringify(newUser));
    }
    numberMethod(val){
//Проверка, что телефонный номер содержит только числа
        for (let i = 0; i < val.length; i++) {
            if (isNaN(+val[i])) {
                console.log('Error, please enter correct phone number');
                return
            }
            this.formatMethod(val);
        }
    }
    formatMethod(val){
        let newNumber = `(${val.slice(0, 3)}) ${val.slice(3, 5)}-${val.slice(5, 7)}-${val.slice(7, 11)}`;
        console.log(newNumber);
        return newNumber;
    }
}
//Добавление пользователей в объект
class AddUserClass extends Phonebook {
    constructor(){
        super()
    }
    addUser(val1, val2, val3, val4){
        contactsDb.contactsBase.push({_id: val1, fullName: val2, email: val3, created: val4, phone: val5});
        console.log("3) db after add User", contactsDb.contactsBase);
    }
}
//Удаление пользователя по имени, фамилии
// class DeleteUserClass extends Phonebook {
//     constructor(){
//         super()
//     }
//     deleteUser(val1, val2){
//         let deleteDb = [];
//     contactsDb.contactsBase.forEach((elem, index) => {
//         if (elem.name !== val1 && elem.lastName !== val2) {
//             deleteDb.push(elem);
//         }
//     });
//     contactsDb.contactsBase = deleteDb;
//     console.log("4) db after delete User", contactsDb.contactsBase);
//     }
// }
// //Поиск пользователей по имени - отображает всех пользователей с одинаковым именем
// class SearchUserClass extends Phonebook {
//     constructor(){
//         super()
//     }
//     searchUser(val1){
//         let searchDb = [];
//         contactsDb.contactsBase.forEach((elem, index) => {
//             if (elem.name == val1) {
//                 searchDb.push(elem);
//             }
//         });
//         console.log("5) search User", searchDb);
//     }
// }
// //Изменение имени, фамилии, телефонного номера у выбраного пользователя
// class EditUserClass extends Phonebook {
//     constructor(){
//         super()
//     }
//     editUser(val1, val2, val3, val4){
//         contactsDb.contactsBase.forEach((elem, index) => {
//             if (elem.name == val1 && elem.lastName == val2) {
//                 console.log("6) elem before edit User", elem);
//                 elem[val3] = val4;
//                 console.log("6) elem after edit User", elem);
//             }
//         });
//         console.log("6) db after edit User", contactsDb.contactsBase);
//     }
// }
//Сортировка пользователей по номеру телефона, фамилии, имени и тд, по любому из свойств пользователя
class SortUserClass extends Phonebook {
    constructor(){
        super()
    }
    sortUser(val){
       contactsDb.contactsBase.sort((a, b) => {
        if (val == 'name'){
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
}
//Фильтр по указанному свойству
class FilterUserClass extends Phonebook {
    constructor(){
        super()
    }
    filterUser(val){
       let filterDb = [];
        contactsDb.contactsBase.forEach((elem, index) => {
        let filterLength = elem.fullName.slice(0, val.length);
        if (filterLength == val ){
            filterDb.push(elem);
        }
        });
        let val2 = new PageRenderMain().renderTable(filterDb);
    }
}


// let phonebookGet = new Phonebook().reqestGet();
//let phonebook1 = new Phonebook().numberMethod("0993378130");
//let phonebook2 = new AddUserClass().addUser(5, 'Marina', 'Tomilina', '0953253554');
//let phonebook3 = new DeleteUserClass().deleteUser('Petr', 'Jiharev');
//let phonebook4 = new SearchUserClass().searchUser('Vasya');
//let phonebook5 = new EditUserClass().editUser('Vasya', 'Ivanov', 'name', 'Nikita',);
// let phonebook6 = new SortUserClass().sortUser('name');
//let phonebook7 = new FilterUserClass().filterUser('phone');
// let phonebook7 = new Phonebook().editFullName('Дима Беркутов');
