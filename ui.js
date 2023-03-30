class UI {
    constructor() {
        this.avatarArea = document.querySelector(".avatar-area");
        this.followerArea = document.querySelector(".follower-area");
        this.repoArea = document.querySelector(".repos");
        this.nicknameArea = document.querySelector(".nickname-area");
        this.searchArea = document.getElementById("search");
        this.repoTitle = document.querySelector(".repos-heading");
        this.storage = new Storage();


    }
    showUserInfo(user) {
        this.avatarArea.innerHTML =
            `
        <div class="user-info">
            <div class="name-area">
                <div class="name-area-background">name</div>
                <span class="name-text">${user.name ? user.name : 'Bu kullanıcının adı yok'}</span>
            </div>
            <div class="mail-area">
                <div class="mail-area-background">mail</div>
                <span class="mail-text">${user.mail ? user.mail : 'Bu kullanıcının mail bilgisi yok'}</span>
            </div>
            <div class="bio-area">
                <div class="bio-area-background">bio</div>
                <span class="bio-text">${user.bio ? user.bio : 'Bu kullanıcının biyografisi yok'}</span>
            </div>
            <div class="company-area">
                <div class="company-area-background">company</div>
                <span class="company-text">${user.company ? user.company : 'Bu kullanıcının şirket bilgisi yok'}</span>
            </div>
            <div class="location-area">
                <div class="location-area-background">location</div>
                <span class="location-text">${user.location ? user.location : 'Bu kullanıcının adres bilgisi yok'}</span>
            </div>
        </div>
        <div class="avatar">
            <img src="${user.avatar_url}" alt="user-avatar" class="avatar-settings">
        </div>
        `
    }
    showUserFollower(user) {
        this.followerArea.innerHTML =
            `
        <div class="followers">
            <div class="followers-heading">Takipçi</div>
            <div class="followers-description">
                <div class="followers-image"><img src="image/rating.png" alt="" class="followers-image"></div>
                <div class="followers-count">${user.followers}</div>
            </div>
        </div>
        <div class="following">
            <div class="following-heading">Takip Edilen</div>
            <div class="following-description">
                <div class="following-image"><img src="image/search.png" alt="" class="followers-image"></div>
                <div class="following-count">${user.following}</div>
            </div>
        </div>
        `
    }
    showUserRepos(repo) {
        this.repoArea.innerHTML = "";

        repo.forEach(repository => {
            this.repoArea.innerHTML +=
                `
                    <div class="repo-area">
                        <div class="repo-title">
                            ${repository.name}
                        </div>
                        <div class="repo-info">
                            <div class="repo-star">
                                <div class="stars">
                                    Stars
                                </div>
                                <div class="star-count">
                                    ${repository.stargazers_count}
                                </div>
                            </div>
                            <div class="repo-fork">
                                <div class="forks">
                                    Forks
                                </div>
                                <div class="fork-count">
                                    ${repository.forks_count}
                                </div>
                            </div>
                            <div class="repo-watch">
                                <div class="watching">
                                    Watching
                                </div>
                                <div class="watch-count">
                                    ${repository.watchers_count}
                                </div>
                            </div>
                        </div>
                    </div>
                `
        })
    }
    showUserNickname(user) {
        this.nicknameArea.innerHTML =
            `
        <a href="${user.html_url}">
            ${user.login}
        </a> 
        `
    }
    reloadSearchİnput() {
        this.searchArea.value = "";
    }
    showRepoHeading() {
        this.repoTitle.innerHTML =
            `
        <span>
        <span id="repos-head-text">Repositories</span>
        </span>
        `
    }
    deleteLastSearch() {
        const lastSearch = document.querySelector(".last-search");

        while (lastSearch.firstElementChild !== null) {
            lastSearch.removeChild(lastSearch.firstElementChild)
        }
    }
}