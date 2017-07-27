`use strict`;

class PageRenderHeader{
    constructor(){}
    renderTable(){
        let header = '';
        header += `<div class="container top-radius">
                        <h2>Contacts</h2>
                    </div>`;
        document.body.querySelector('header').innerHTML = header;
    }
}
class PageRenderMain{
    constructor(){}
    renderTable(){
        let main = '', form = '', table = '', tHead = '',  tBody = '';
// search
        form += `<form class="form-inline search-form">
                    <div class="form-group">
                        <label class="sr-only" for="search">Search</label>
                        <input type="text" class="form-control" id="search" placeholder="Search">
                    </div>
                </form>`;
// thead
        tHead += `<thead>
                    <tr id = "sort_click">`;
        contactsDb.contactsColumn.forEach(elem => {
            tHead += `<th>${elem}</th>`;
        });
        tHead += `</tr></thead>`;
// tbody
        tBody += '<tbody>';
        contactsDb.contactsBase.forEach(elem1 => {
            console.log(elem1)
            tBody += '<tr>';
            for (let key1 in elem1){
                if(key1 !== '_id' && key1 !== 'created' && key1 !== 'phone'){
                        tBody += `<td>${elem1[key1]}</td>`;
                }
            }
            tBody += '</tr>';
        });
        // tBody += '<tbody>';
        // let name = [], lastName = [], email = [];
        // contactsDb.contactsBase.forEach(elem1 => {
        //     let fullName = elem1.fullName.split(' ');
        //     tBody += `<tr>
        //                 <td>${fullName[0]}</td>
        //                 <td>${fullName[1]}</td>
        //                 <td>${elem1.email}</td>
        //             </tr>`;
        //             name.push(fullName[0]);
        //             lastName.push(fullName[1]);
        //             email.push(elem1.email);
        // });
        tBody += `</tbody>`;
        table += `<table class="table table-hover contacts">
                    ${tHead}${tBody}
                </table>`;
// main
        main += `<div class="container">${form}${table}</div>`;
        document.body.querySelector('main').innerHTML = main;
        this.clickSort();
    }
    clickSort(){
    //click    
        let clickBlock = document.getElementById('sort_click');
        clickBlock.addEventListener('click', (event) => { 
            let phonebook6 = new SortUserClass().sortUser(event.target.innerHTML.toLowerCase());
            this.renderTable();
        });
    }
}

let val1 = new PageRenderHeader().renderTable();
let val2 = new PageRenderMain().renderTable();