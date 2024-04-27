// Playlist-LeftBar
function playListLeftBar() {
    const listParent = document.querySelector('.player__nav-library')
    const playList = document.querySelector('.player__nav-library .nav-library__playlist-wrap')

    const list = {
        lists: [
            {
                img: './assets/img/img_playlist.png',
                title: 'Liked Songs',
                quantity: '163 songs',
            },
            {
                img: './assets/img/img_playlist1.png',
                title: 'Liked Songs',
                quantity: '163 songs',
            },
            {
                img: './assets/img/billie.png',
                title: 'Billie Eilish',
                quantity: 'Artist',
            }
        ],
        render: function() {
            const htmls = this.lists.map(function(list,index) {
                return `
                    <div class="nav-library__playlist nav-library__playlist--${index === 0 ? 'active' : ''}">
                        <img src="${list.img}" alt="" class="library__playlist-img">
                        <div class="library__playlist-about">
                            <p class="playlist-about-1">${list.title}</p>
                            <div class="playlist-about-2 playlist-about-2--${index === 0 ? 'active' : ''}">
                                <i class="fa-solid fa-thumbtack playlist-about-2-icon "></i>
                                <p class="">${list.quantity}</p>
                            </div>
                        </div>
                    </div>
                `
            });
            playList.innerHTML = htmls.join('');
        },
        handleEvent: function() {
            const _this = this
            
        },
        start: function() {
            //render ra man hinh
            this.render();
        }
    }
    list.start();
    
};
playListLeftBar();

//Playlist-Content
function playListContent() {

};