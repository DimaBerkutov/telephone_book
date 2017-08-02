`use strict`;

class Keypad{
    constructor(){
        let header = `<div class="container top-radius">
                        <h2>Keypad</h2>
                    </div>`;
        document.body.querySelector('header').innerHTML = header;
    }
    requestUsers(){
        this.renderTable();
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
        
        document.getElementById('top_main').innerHTML = ``;
        document.getElementById('bot_main').innerHTML = `${input} ${keypad}`;
        this.keypadInputSave();
    }
    keypadInputSave(){
        let inputNumber = document.getElementById('numbers_input'),
            inputSave = '';
            this.numberMethod();
//method call
        let numberMethodCall = () => {
            this.numberMethod(inputSave, inputNumber);
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
            if(inputSave.length >= 10) inputSave = inputSave.slice(0, 9);
            numberMethodCall();
        });
// click input dell
		document.getElementById('dell_contact').onclick = () => {
            inputSave = '';
            numberMethodCall();
        }
    }
//Проверка, что телефонный номер содержит только числа
    numberMethod(val, inputNumber){
        let inputKeypad = '';
        if(val !== undefined){
            window.sessionStorage.setItem('keypad', inputKeypad);
            for (let i = 0; i < val.length; i++) {
                if (isNaN(val[i])) alert('Error, please enter correct phone number');
                window.sessionStorage.setItem('keypad', val.replace(/\D/g, ''));
            }
        }
        let inputKeypadGet = window.sessionStorage.getItem('keypad');
        if(inputKeypadGet == null) inputKeypadGet = '';
        this.formatMethod(inputKeypadGet, inputNumber);
    }
//Формат ввода номера телефона
    formatMethod(val, formatMethod){
        let inputNumber = document.getElementById('numbers_input');
        let newNumber = `(${val.slice(0, 3)})-${val.slice(3, 5)}-${val.slice(5, 7)}-${val.slice(7, 10)}`;
        if(val !== undefined && val.length !== 0) inputNumber.textContent = newNumber.replace(/-+$/, '');
        else inputNumber.textContent = newNumber.replace(/[()-]+$/, '');
    }
}