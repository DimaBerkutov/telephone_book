`use strict`;

class Keypad{
    constructor(appState){
        this.appState = appState;
        this.header = `<div class="container top-radius">
                        <h2>Keypad</h2>
                    </div>`;
    }
    requestUsers(){
        if(window.localStorage.getItem('login') !== '' && window.localStorage.getItem('login') !== null){
            this.renderTable();
        }
    }
    renderTable(){
// input
        let input = `<div class="number">
                    <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                        <span class="numbers" id="numbers_input" placeholder="Enter phone number"></span>
                    <span id="dell_contact" class="glyphicon glyphicon-circle-arrow-left" aria-hidden="true"></span>
                </div>`;
// buttons
        let buttons = '';
        let keypadTable = [1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'];
        keypadTable.forEach(elem => {
            buttons += `<button class="key">${elem}</button>`;
        });
        let keypad = `<div id="keypad" class="keypad-holder">
                    ${buttons}
                    <button class="key glyphicon glyphicon-earphone"></button>
                </div>`;
        

        document.body.querySelector('header').innerHTML = this.header;
        document.getElementById('top_main').innerHTML = ``;
        document.getElementById('bot_main').innerHTML = `${input} ${keypad}`;
        this.keypadInputSave();
    }
    keypadInputSave(){
        let inputNumber = document.getElementById('numbers_input'),
            inputSave = this.appState.locals.keypadNumm;
            this.numberMethod();
//method call
        let numberMethodCall = () => {
            if(inputSave.length >= 10) inputSave = inputSave.slice(0, 9);
            this.numberMethod(inputSave);
            inputSave = inputSave.replace(/\D/g, '');
        };
//keypress input
        document.body.addEventListener('keydown', (event) => {
            if(event.keyCode >= '48' && event.keyCode <= '57'){
                inputSave += event.key;
                numberMethodCall();
            }
        });
// click input
        document.getElementById('keypad').addEventListener('click', (event) => {
            inputSave += event.target.innerHTML;
            numberMethodCall();
        });
// click input dell
		document.getElementById('dell_contact').addEventListener('click', () => {
            inputSave = '';
            inputNumber.textContent = '';
            app.state.locals.keypadNumm ='';
        });
    }
//Проверка, что телефонный номер содержит только числа
    numberMethod(val){
        if(val !== undefined){
            for (let i = 0; i < val.length; i++) {
                if (isNaN(val[i])) alert('Error, please enter correct phone number');
                app.state.locals.keypadNumm = val.replace(/\D/g, '');
            }
        }
        this.formatMethod(this.appState.locals.keypadNumm);
    }
//Формат ввода номера телефона
    formatMethod(val){
        let inputNumber = document.getElementById('numbers_input');
        let newNumber = `(${val.slice(0, 3)})-${val.slice(3, 5)}-${val.slice(5, 7)}-${val.slice(7, 10)}`;
        if(val !== undefined && val.length !== 0) inputNumber.textContent = newNumber.replace(/-+$/, '');
        else inputNumber.textContent = newNumber.replace(/[()-]+$/, '');
    }
}