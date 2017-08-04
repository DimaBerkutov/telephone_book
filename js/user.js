`use strict`;

class User{
    constructor(){
        this.header = `<div class="container top-radius">
                        <div class="user-top-line">
                            <a href="index.html"><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>Contacts</a>
                            <a href="edit-contact.html">Edit</a>
                        </div>
                        <h2>User</h2>
                    </div>`;
    }
    requestUsers(){
        this.renderTable();
    }
    renderTable(){
// photo and icons
        let photoIcons = `<img src="images/user-face.png" alt="#" class=" user-img img-circle center-block">
                        <div class="user-name">User Name</div>
                        <div class="options-line">`;
        let iconsArr = (val1, val2) => {
            photoIcons += `<div class="${val2}">
                            <div class="options-icon">
                                <span class="icon glyphicon ${val1} glyphicon_user" aria-hidden="true"></span>
                            </div>
                            <span class="options-text">${val2}</span>
                        </div>`;
        }
        iconsArr('glyphicon-comment', 'message');
        iconsArr('glyphicon-earphone', 'call');
        iconsArr('glyphicon-facetime-video', 'video');
        iconsArr('glyphicon-envelope', 'mail');

        photoIcons += '</div>';
// phones and options
        let phonesOptions = `<div class="tel-number">
                                <h3>mobile</h3>
                                <div> +38 (093) 989 89 89</div>
                            </div>
                            <div class="tel-number">
                                <h3>home</h3>
                                <div> +38 (093) 989 89 89</div>
                            </div>
                        <div class="options-table">`;
        let options = val => {
            phonesOptions += `<div class ="options-item"><a href="#">${val}</a></div>`;
        };
        options('Notes');
        options('Send message');
        options('Share contact');
        options('Add to favorites');
        options('Share my location');
        options('Block this caller');

        phonesOptions += '</div>';
        
        
        document.body.querySelector('header').innerHTML = this.header;
        document.getElementById('top_main').innerHTML = ``;
        document.getElementById('bot_main').innerHTML = `${photoIcons} ${phonesOptions}`;
    }
}