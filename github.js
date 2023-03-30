class Github {
    constructor() {
        this.url = "https://api.github.com/users/";
    }
    getGİthubData(username) {
        return new Promise((resolve, reject) => {
            fetch(this.url + username)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }
    getGithubRepo(username) {
        return new Promise((resolve, reject) => {
            fetch(this.url + username + "/repos")
                .then(response => response.json())
                .then(repo => resolve(repo))
                .catch(err => reject(err))
        })
    }
}