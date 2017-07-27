/**
 * Created by user on 06.07.2017.
 */

`use strict`;
let contactsDb = {
    pages: ['Contacts'],
    contactsColumn: ['Name', 'Last name', 'Email'],
    contactsBase: []
    // contactsBase: [
    //     {
    //         id: 1,
    //         name: 'Иван',
    //         lastName: 'Петров',
    //         phone: '0974532641',
    //         mail: 'IvanPetrov@ec.ua'
    //     },
    //     {
    //         id: 2,
    //         name: 'Сергей',
    //         lastName: 'Иванов',
    //         phone: '0634573611',
    //         mail: 'SergeiSergeev@ec.ua'
    //     },
    //     {
    //         id: 3,
    //         name: 'Александр',
    //         lastName: 'Александров',
    //         phone: '0974576341',
    //         mail: 'IvanIvanov@ec.ua'
    //     },
    //     {
    //         id: 4,
    //         name: 'Алекс',
    //         lastName: 'Смирнов',
    //         phone: '0954553141',
    //         mail: 'AlexAlex@ec.ua'
    //     },
    //     {
    //         id: 5,
    //         name: 'Сергей',
    //         lastName: 'Волков',
    //         phone: '0934532411',
    //         mail: 'VolkovSergey@ec.ua'
    //     },
    //     {
    //         id: 6,
    //         name: 'Елена',
    //         lastName: 'Лещенко',
    //         phone: '0954242641',
    //         mail: 'ElenaLeshenko@ec.ua'
    //     },
    //     {
    //         id: 7,
    //         name: 'Алекс',
    //         lastName: 'Сергеев',
    //         phone: '0974524641',
    //         mail: 'ShemyakinaN@ec.ua'
    //     },
    //     {
    //         id: 8,
    //         name: 'Кира',
    //         lastName: 'Воробьева',
    //         phone: '0974246341',
    //         mail: 'Kira1990@ec.ua'
    //     }
    // ]
};
class Phonebook {
    constructor(){}
    reqestGet(){
        const url = 'http://easycode-js.herokuapp.com/';
        const serverReqestGet = () => {
            let getRequest = new XMLHttpRequest();
            getRequest.addEventListener('readystatechange', () =>{
                if(getRequest.readyState == 4){
                    contactsDb.contactsBase = JSON.parse(getRequest.responseText);
                    console.log(contactsDb.contactsBase);
                    console.log(contactsDb);
                }
            });
            getRequest.open('GET', url + 'DimaBerkutov/users', true);
            getRequest.send();
        };
        serverReqestGet();
    }
    editFullName(fullName){
        fullName.split(' ');
        let name = fullName.split(' ')[0];
        let lastName = fullName.split(' ')[1];
        console.log(name, lastName);
        // PageRenderMain(name, lastName);
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
// //Изменение имени, фамилии, телефонного номера у выбраного пользователя ( здесь должно быть реализовано через this )
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
            if (a[val] > b[val]) {
                return 1
            }
            if (a[val] < b[val]) {
                return -1
            }
            // a должно быть равным b
            return 0
        });
        console.log("7) db after sort User", contactsDb.contactsBase)
    }
}
// //Фильтр по указанному свойству
// class FilterUserClass extends Phonebook {
//     constructor(){
//         super()
//     }
//     filterUser(val){
//        let filterDb = [];
//         contactsDb.contactsBase.forEach((elem, index) => {
//             if ( val in elem ){
//                 filterDb.push(elem);
//             }
//         });
//         console.log("8) db after filter User", filterDb);
//     }
// }


let phonebookGet = new Phonebook().reqestGet();
//let phonebook1 = new Phonebook().numberMethod("0993378130");
//let phonebook2 = new AddUserClass().addUser(5, 'Marina', 'Tomilina', '0953253554');
//let phonebook3 = new DeleteUserClass().deleteUser('Petr', 'Jiharev');
//let phonebook4 = new SearchUserClass().searchUser('Vasya');
//let phonebook5 = new EditUserClass().editUser('Vasya', 'Ivanov', 'name', 'Nikita',);
// let phonebook6 = new SortUserClass().sortUser('name');
//let phonebook7 = new FilterUserClass().filterUser('phone');
// let phonebook7 = new Phonebook().editFullName('Дима Беркутов');
