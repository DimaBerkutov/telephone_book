`use strict`;
class App{
    constructor(){
        console.log('this_base', this)
        this.state = {
            db: [],
            locals: {}
        }
        this.ui = {
            contacts: new Contacts(),
            // keypad: new Keypad(),
            // editUser: new EditUser(),
            // user: new User(),
            // addUser: new AddUser()
        }
    }
    render(){
        console.log('this.state!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', this.state.db)
        this.ui.contacts.requestUsers(this.state.db);
    }
}
const app = new App();
app.render();
console.log('appStart!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', app)