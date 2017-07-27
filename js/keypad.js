/**
 * Created by user on 17.07.2017.
 */
`use strict`;


class PageRenderHeader{
    constructor(){}
    renderTable(){
        let header = '';
        header += `<div class="container top-radius">
                        <h2>Keypad</h2>
                    </div>`;
        document.body.querySelector('header').innerHTML = header;
    }
}
class PageRenderMain{
    constructor(){}
    renderTable(){
        let keypadTable = [1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'],
        input = '', buttons = '', keypad = '';
// input
        input += `<div class="number">
                    <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                        <input class="numbers" id="numbers_input" placeholder="Enter phone number">
                    <span id="dell_contact" class="glyphicon glyphicon-circle-arrow-left" aria-hidden="true"></span>
                </div>`;
// buttons
        keypadTable.forEach(elem => {
            buttons += `<button class="key">${elem}</button>`;
        });
        keypad += `<div id="keypad" class="keypad-holder">
                    ${buttons}
                    <button class="key glyphicon glyphicon-earphone"></button>
                </div>`;
        
        document.body.querySelector('main').innerHTML = `<div class="container"> ${input} ${keypad} </div>`;
        console.log(document.getElementById('keypad'))
// clicks
		document.getElementById('keypad').querySelectorAll('button').forEach(elem => {
            elem.addEventListener('click', () => document.getElementById('numbers_input').value += elem.textContent);
        });
		document.getElementById('dell_contact').onclick = () => document.getElementById('numbers_input').value = '';
    }
}
let KeypadHeader = new PageRenderHeader().renderTable();
let KeypadMain = new PageRenderMain().renderTable();