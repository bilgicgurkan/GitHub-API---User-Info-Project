const github = new Github()
const ui = new UI();
const storage = new Storage();
const searchBtn = document.querySelector("#search-btn");
const userName = document.getElementById("search");
const lastSearch = document.querySelector(".last-search");
const listSearchTitle = document.querySelector(".list-search-title");



document.addEventListener("DOMContentLoaded", function () {
    showRepoTitle()
    showLastSearch()
    getAllDeleteFromStorageAndUI()
})


eventListeners();

function eventListeners() {
    searchBtn.addEventListener("click", function () {
        getUsers();
        getRepos();
    });
}

function getUsers() {

    let nickname = userName.value.trim();

    github.getGİthubData(nickname)
        .then(result => {
            if (result.message === "Not Found") {
                alert("Böyle bir kullanıcı bulunamadı!")
            }
            else {
                ui.showUserInfo(result)
                ui.showUserFollower(result)
                ui.showUserNickname(result)
                ui.reloadSearchİnput();
                ui.showRepoHeading();
                storage.addUserToStorage(nickname);
            }
        })
        .catch(err => console.log(err));
}

function getRepos() {
    let nickname = userName.value.trim();

    github.getGithubRepo(nickname)
        .then(repoResult => {
            ui.showUserRepos(repoResult)
        })
        .catch(err => console.log(err))
}

function showRepoTitle() {
    listSearchTitle.innerHTML =
        `
    <div id="last-search-title-text">Son Arananlar</div>
    <button id="delete-last-search">Son Arananları Temizle</button>
    `
}

function showLastSearch() {
    lastSearch.innerHTML = "";

    let searched = storage.getUserFromStorage();

    searched.forEach(search => {
        lastSearch.innerHTML +=
            `
        <div class="last-search-list">
        ${search}
        </div>
        `
    })
}

function getAllDeleteFromStorageAndUI() {
    const deleteBtn = document.getElementById("delete-last-search");

    deleteBtn.addEventListener("click", function () {
        if (confirm("Onaylıyor musunuz?")) {
            storage.deleteStorage();
            ui.deleteLastSearch();
        }
    })
}