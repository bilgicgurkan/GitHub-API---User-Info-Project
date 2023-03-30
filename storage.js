class Storage {
    constructor() {

    }
    getUserFromStorage() {
        let users;

        if (localStorage.getItem("nickname") === null) {
            users = []
        }
        else {
            users = JSON.parse(localStorage.getItem("nickname"));
        }

        return users;
    }
    addUserToStorage(username) {
        let users = this.getUserFromStorage();

        if (users.indexOf(username) === -1) {
            users.push(username);

            localStorage.setItem("nickname", JSON.stringify(users))
        }
    }
    deleteStorage(){
        localStorage.clear();
    }
}