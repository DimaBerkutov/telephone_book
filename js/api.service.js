`use strict`;
// let contactsDb = {
//     // contactsBase: [{"_id":"597b41664994e4001185928e","fullName":"Сергей Якименко","email":"sergey@yakimenko.com","created":"2017-07-28T13:51:34.581Z","phone":"00000000"},{"_id":"597b45284994e40011859292","fullName":"qqqq","email":"qqqq@qqq.com","created":"2017-07-28T14:07:36.251Z","phone":"00000000"},{"_id":"597b40fb4994e4001185928c","fullName":"Екатерина Палкина","email":"ekaterina@palkina.com","created":"2017-07-28T13:49:47.479Z","phone":"00000000"},{"_id":"597b45ac4994e40011859293","fullName":"Dima","email":"faffaf@ukr.net","created":"2017-07-28T14:09:48.387Z","phone":"00000000"},{"_id":"597b46884994e40011859295","fullName":"Александр Руденко","email":"alexandr@rudenko.com","created":"2017-07-28T14:13:28.544Z","phone":"00000000"},{"_id":"597b40084994e40011859288","fullName":"Александр Челенко","email":"alexandr@chelenco.com","created":"2017-07-28T13:45:44.940Z","phone":"00000000"},{"_id":"597b3fdd4994e40011859287","fullName":"Вова Челенко","email":"vova@chelenco.com","created":"2017-07-28T13:45:01.648Z","phone":"00000000"},{"_id":"597b3fab4994e40011859286","fullName":"Сергей Заворотнюк","email":"sergey@zavorotnuk.com","created":"2017-07-28T13:44:11.129Z","phone":"00000000"},{"_id":"597b3f854994e40011859285","fullName":"Юлия Прилучная","email":"july@priluchnaya.com","created":"2017-07-28T13:43:33.981Z","phone":"00000000"},{"_id":"597b3f6e4994e40011859284","fullName":"Евгения Жукова","email":"evgenia@jucova.com","created":"2017-07-28T13:43:10.803Z","phone":"00000000"},{"_id":"597b41c74994e4001185928f","fullName":"Антон Старшов","email":"starshov@andon.com","created":"2017-07-28T13:53:11.827Z","phone":"00000000"},{"_id":"597b3f3d4994e40011859281","fullName":"Марина Осипова","email":"marina@osipova.com","created":"2017-07-28T13:42:21.729Z","phone":"00000000"},{"_id":"597c4cdd1b2239001113a672","fullName":"Кристина Морозова","email":"khristina@morozova.com","created":"2017-07-29T08:52:45.760Z","phone":"00000000"},{"_id":"597c676a2ce1e50011f179ca","fullName":"Ольга Дрозд","email":"olga@drozd.com","created":"2017-07-29T10:46:02.893Z","phone":"0948982784"}]

// };
class Api {
    constructor(url){
        this.url = url;
        this.login = window.localStorage.getItem('login');
    }
    reqestGet(){
        console.log(this.url)
        console.log(this.login)
        if (this.login !== '') {
            return fetch(this.url + window.localStorage.getItem('login'))
            .then(json => json.json());
        }
    }
    reqestPost(name, lastName, email, phone){
        return fetch(`${this.url}${this.login}/users`, {
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
            if(response.status == 200) alert('Information saved successfully');
            else return alert('Error, try again later!');
        }).catch(e => {
            console.log(e);
        });
    }
    reqestDelete(id){        
        return fetch(`${this.url}${this.login}/users/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if(response.status == 200) alert('Contact successfully deleted');
            else return alert('Error, try again later!');
        }).catch(e => {
            console.log(e);
        });
    }
    reqestPatch(firstName, lastName, phone, email, id){
        console.log(firstName, lastName, email, phone, id)
        return fetch(`${this.url}${this.login}/users/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify({
                fullName: `${name} ${lastName}`,
                email: email,
                phone: phone
            })
        }).then(response => {
            if(response.status == 200) alert('Information saved successfully');
            else return alert('Error, try again later!');
        }).catch(e => {
            console.log(e);
        });
    }
}
const constUrl = 'https://easycode-js.herokuapp.com/';
const api = new Api(constUrl);