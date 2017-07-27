
`use strict`;


class PageRenderHeader{
    constructor(){}
    renderTable(){
        let header = '';
        header += '<div class="container top-radius">';
		header += '<h2>User</h2>';
		header += '</div>';
        document.body.querySelector('header').innerHTML = header;
    }
}
class PageRenderBeforeHeader{
    constructor(){}
    renderTable(){
        let beforeHeader = '';
        beforeHeader += '<div class="user-top-line">';
        beforeHeader += '<a href="index.html"><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>Contacts</a>';
        beforeHeader += '<a href="edit-contact.html">Edit</a>';
        beforeHeader += '</div>';
        document.body.querySelector('header').children[0].insertAdjacentHTML('afterbegin', beforeHeader);
    }
}
class PageRenderMain{
    constructor(){}
    renderTable(){
        let iconsArr = ['glyphicon-comment message', 'glyphicon-earphone call', 'glyphicon-facetime-video video', 'glyphicon-envelope mail'],
        options = ['Notes', 'Send message', 'Share contact', 'Add to favorites', 'Share my location', 'Block this caller'],
        photoIcons = '', phonesOptions = '';
// photo and icons
        photoIcons += '<img src="images/user-face.png" alt="#" class=" user-img img-circle center-block">';
        photoIcons += '<div class="user-name">User Name</div>';
        photoIcons += '<div class="options-line">';
        iconsArr.forEach(elem => {
            let elemArr = elem.split(' ');
            photoIcons += `<div class="${elemArr[1]}">`;
             
            photoIcons += `<div class= "options-icon"><span class="icon glyphicon ${elemArr[0]}" aria-hidden="true"></span></div>`;
            photoIcons += `<span class = options-text">${elemArr[1]}</span>`;
            photoIcons += '</div>';
        })
        photoIcons += '</div>';
// phones and options
        phonesOptions += '<div class="tel-number">';
        phonesOptions += '<h3>mobile</h3>';
        phonesOptions += '<div> +38 (093) 989 89 89</div>';
        phonesOptions += '</div>';
        phonesOptions += '<div class="tel-number">';
        phonesOptions += '<h3>home</h3>';
        phonesOptions += '<div> +38 (093) 989 89 89</div>';
        phonesOptions += '</div>';
        phonesOptions += '<div class="options-table">';
        options.forEach(elem => {
            phonesOptions += `<div class ="options-item"><a href="#">${elem}</a></div>`;
        });
        phonesOptions += '</div>';
        
		document.body.querySelector('main').innerHTML = `<div class="container"> ${photoIcons} ${phonesOptions} </div>`;
    }
}
let UserHeader = new PageRenderHeader().renderTable();
let UserBeforeHeader = new PageRenderBeforeHeader().renderTable();
let UserMain = new PageRenderMain().renderTable();