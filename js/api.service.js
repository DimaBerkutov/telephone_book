`use strict`;
let contactsDb = {
    pages: ['Contacts', 'Keypad', 'Edit contact', 'User', 'Add user'],
    contactsColumn: ['Name', 'Last name', 'Email'],
    contactsBase: []
    // contactsBase: [{"_id":"597b41664994e4001185928e","fullName":"Сергей Якименко","email":"sergey@yakimenko.com","created":"2017-07-28T13:51:34.581Z","phone":"00000000"},{"_id":"597b45284994e40011859292","fullName":"qqqq","email":"qqqq@qqq.com","created":"2017-07-28T14:07:36.251Z","phone":"00000000"},{"_id":"597b40fb4994e4001185928c","fullName":"Екатерина Палкина","email":"ekaterina@palkina.com","created":"2017-07-28T13:49:47.479Z","phone":"00000000"},{"_id":"597b45ac4994e40011859293","fullName":"Dima","email":"faffaf@ukr.net","created":"2017-07-28T14:09:48.387Z","phone":"00000000"},{"_id":"597b46884994e40011859295","fullName":"Александр Руденко","email":"alexandr@rudenko.com","created":"2017-07-28T14:13:28.544Z","phone":"00000000"},{"_id":"597b40084994e40011859288","fullName":"Александр Челенко","email":"alexandr@chelenco.com","created":"2017-07-28T13:45:44.940Z","phone":"00000000"},{"_id":"597b3fdd4994e40011859287","fullName":"Вова Челенко","email":"vova@chelenco.com","created":"2017-07-28T13:45:01.648Z","phone":"00000000"},{"_id":"597b3fab4994e40011859286","fullName":"Сергей Заворотнюк","email":"sergey@zavorotnuk.com","created":"2017-07-28T13:44:11.129Z","phone":"00000000"},{"_id":"597b3f854994e40011859285","fullName":"Юлия Прилучная","email":"july@priluchnaya.com","created":"2017-07-28T13:43:33.981Z","phone":"00000000"},{"_id":"597b3f6e4994e40011859284","fullName":"Евгения Жукова","email":"evgenia@jucova.com","created":"2017-07-28T13:43:10.803Z","phone":"00000000"},{"_id":"597b41c74994e4001185928f","fullName":"Антон Старшов","email":"starshov@andon.com","created":"2017-07-28T13:53:11.827Z","phone":"00000000"},{"_id":"597b3f3d4994e40011859281","fullName":"Марина Осипова","email":"marina@osipova.com","created":"2017-07-28T13:42:21.729Z","phone":"00000000"},{"_id":"597c4cdd1b2239001113a672","fullName":"Кристина Морозова","email":"khristina@morozova.com","created":"2017-07-29T08:52:45.760Z","phone":"00000000"},{"_id":"597c676a2ce1e50011f179ca","fullName":"Ольга Дрозд","email":"olga@drozd.com","created":"2017-07-29T10:46:02.893Z","phone":"0948982784"}];

};
    let sds = {
       url:'DimaBerkutov/users',
       method: 'GET'
    };
const url = 'http://easycode-js.herokuapp.com/';
class Phonebook {
    constructor(){}
    reqestGet(){
        fetch(`${url}DimaBerkutov/users`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            console.log('response', response);
            return response.json()
        }).then(json => {
            contactsDb.contactsBase = json;
            console.log('parsed json', json)
        }).catch(e => {
            console.log('parsing failed', e)
        })
    }
    reqestPost(name, lastName ,email, phone){
        console.log(name ,email, phone)
        fetch(`${url}DimaBerkutov/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fullName: `${name} ${lastName}`,
                email: email,
                phone: phone
            })
        }).then(response => {
            alert('Information saved successfully');
        }).catch(e => {
            console.log(e);
        });
    }
    reqestDelete(id){        
        fetch(`${url}DimaBerkutov/users/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            alert('Contact successfully deleted');
        }).catch(e => {
            console.log(e);
        });
        // let val3 = new PageRenderMain().renderTable(contactsDb.contactsBase);
    }
    // reqestPatch(firstName, lastName, phone, email){
    //     const changeUser = {
    //         fullName: `${firstName} ${lastName}`,
    //         email: email,
    //         phone: phone
    //     };
    //     let postRequest = new XMLHttpRequest();
    //     postRequest.addEventListener('readystatechange', () =>{
    //         if (postRequest.readyState == 4) alert('Information successfully updated');
    //     });
    //     postRequest.open('PATCH', url + 'DimaBerkutov/users', true);
    //     postRequest.setRequestHeader('Content-Type', 'application/json');
    //     postRequest.send(JSON.stringify(changeUser));
    // }
}
//Проверка, что телефонный номер содержит только числа
class numberMethod extends Phonebook{
    constructor(val, inputNumber){
        super()
        let inputKeypad = '';
        if(val !== 0 && val !== undefined){
            inputKeypad = window.sessionStorage.setItem('keypad', val);
            for (let i = 0; i < val.length; i++) {
                if (isNaN(val[i])) alert('Error, please enter correct phone number');
                // inputKeypad = val.replace(/\D/g, '');
                inputKeypad = window.sessionStorage.setItem('keypad', val.replace(/\D/g, ''));
            }
        }
        let inputKeypadGet = window.sessionStorage.getItem('keypad');
        let format = new formatMethod(inputKeypadGet, inputNumber);
    }
}
//Формат ввода номера телефона
class formatMethod extends Phonebook{
    constructor(val, formatMethod){
        super()
        let inputNumber = document.getElementById('numbers_input');
        let newNumber = `(${val.slice(0, 3)})-${val.slice(3, 5)}-${val.slice(5, 7)}-${val.slice(7, 10)}`;
        if(val !== undefined && val.length !== 0) inputNumber.textContent = newNumber.replace(/-+$/, '');
        else inputNumber.textContent = newNumber.replace(/[()-]+$/, '');
    }
}
//Добавление пользователей в объект
// class AddUserClass extends Phonebook {
//     constructor(){
//         super()
//     }
//     addUser(val1, val2, val3, val4){
//         contactsDb.contactsBase.push({_id: val1, fullName: val2, email: val3, created: val4, phone: val5});
//         console.log("3) db after add User", contactsDb.contactsBase);
//     }
// }
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
    constructor(val){
        super()
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
}
//Фильтр по указанному свойству
class FilterUserClass extends Phonebook {
    constructor(val){
        super()
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


// let phonebookGet = new Phonebook().reqestGet();
//let phonebook1 = new Phonebook().numberMethod("0993378130");
//let phonebook2 = new AddUserClass().addUser(5, 'Marina', 'Tomilina', '0953253554');
//let phonebook3 = new DeleteUserClass().deleteUser('Petr', 'Jiharev');
//let phonebook4 = new SearchUserClass().searchUser('Vasya');
//let phonebook5 = new EditUserClass().editUser('Vasya', 'Ivanov', 'name', 'Nikita',);
// let phonebook6 = new SortUserClass().sortUser('name');
//let phonebook7 = new FilterUserClass().filterUser('phone');
// let phonebook7 = new Phonebook().editFullName('Дима Беркутов');


// json.forEach(elem => {
    
// let phonebookGet = new Phonebook().reqestPost(elem.fullName, elem.email, elem.phone);
// });