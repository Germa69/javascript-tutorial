/** 
 *  1. Render songs
 *  2. Scroll top
 *  3. Play / pause / seek
 *  4. CD rotate
 *  5. Next / Prev
 *  6. Random
 *  7. Next / Repeat When ended
 *  8. Actice song
 *  9. Scroll active song into view
 *  10. Play song when click
 * 
 *  11. Add timer when play song
*/

/**
 * - Object.defineProperty ()
 *  + Phương thức static Object.defineProperty()định nghĩa một thuộc tính mới trực tiếp trên một đối tượng 
 * hoặc sửa đổi một thuộc tính hiện có trên một đối tượng và trả về đối tượng. 
 *  + Object.defineProperty(obj, prop, descriptor)
 *      . obj: Đối tượng để xác định thuộc tính.
 *      . prop: Tên hoặc Symbolthuộc tính được xác định hoặc sửa đổi.
 *      . descriptor: Bộ mô tả cho thuộc tính đang được xác định hoặc sửa đổi.
 * 
 * - Element.animate()
 *      + Cú pháp: animate(keyframes, options)
 *      + Trả về 1 đối tượng animate
 * 
 * - Element.scrollIntoView()
 *      + element.scrollIntoView();
 *      + element.scrollIntoView(alignToTop); // Boolean parameter
 *      + element.scrollIntoView(scrollIntoViewOptions); // Object parameter
*/

// Khởi tạo biến

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const PLAYER_STORAGE_KEY = 'F8_PLAYER'

const player    = $('.player')
const cd        = $('.cd')
const title     = $('header h4')
const heading   = $('header h2')
const cdThumb   = $('.cd-thumb')
const audio     = $('#audio')
const playBtn   = $('.btn-toggle-play')
const progress  = $('#progress')
const prevBtn   = $('.btn-prev')
const nextBtn   = $('.btn-next')
const randomBtn = $('.btn-random')
const repeatBtn = $('.btn-repeat')
const playlist  = $('.playlist')
const timeStart = $('#timeStart')
const timeEnd   = $('#timeEnd')

const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
    setConfig: function (key, value) {
        this.config[key] = value
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config))
    },

    songs: [
        {
            name: '999 Đóa Hoa Hồng',
            singer: 'Lý Hải',
            path: './assets/music/999-Doa-Hong-Ly-Hai.mp3',
            image: './assets/img/999-Doa-Hong-Ly-Hai.jpg'
        },
        {
            name: 'Bay Giữa Ngân Hà',
            singer: 'Nam Cường',
            path: './assets/music/Bay-Giua-Ngan-Ha-Nam-Cuong.mp3',
            image: './assets/img/Bay-Giua-Ngan-Ha-Nam-Cuong.jpg'
        },
        {
            name: 'Cầu Vồng Khuyết',
            singer: 'Tuấn Hưng',
            path: './assets/music/Cau-Vong-Khuyet-Tuan-Hung.mp3',
            image: './assets/img/Cau-Vong-Khuyet-Tuan-Hung.jpg'
        },
        {
            name: 'Tình là gì',
            singer: 'Tuấn Hưng',
            path: './assets/music/Tinh-La-Gi-Tuan-Hung.mp3',
            image: './assets/img/Tinh-La-Gi-Tuan-Hung.jpg'
        },
        {
            name: 'Dĩ Vãng Cuộc Tình',
            singer: 'Duy Mạnh',
            path: './assets/music/Di-Vang-Cuoc-Tinh-Duy-Manh.mp3',
            image: './assets/img/Di-Vang-Cuoc-Tinh-Duy-Manh.jpg'
        },
        {
            name: 'Hãy Về Đây Bên Anh',
            singer: 'Duy Mạnh',
            path: './assets/music/Hay-Ve-Day-Ben-Anh-Duy-Manh.mp3',
            image: './assets/img/Hay-Ve-Day-Ben-Anh-Duy-Manh.jpg'
        },
        {
            name: 'Không Quan Tâm',
            singer: 'Chi Dân',
            path: './assets/music/Khong-Quan-Tam-Chi-Dan.mp3',
            image: './assets/img/Khong-Quan-Tam-Chi-Dan.jpg'
        },
        {
            name: 'Sự thật sau một lời hứa',
            singer: 'Chi Dân',
            path: './assets/music/Su-That-Sau-Mot-Loi-Hua-Chi-Dan.mp3',
            image: './assets/img/Su-That-Sau-Mot-Loi-Hua-Chi-Dan.jpg'
        },
        {
            name: 'Ngắm Hoa Lệ Rơi',
            singer: 'Châu Khải Phong',
            path: './assets/music/Ngam-Hoa-Le-Roi-Chau-Khai-Phong.mp3',
            image: './assets/img/Ngam-Hoa-Le-Roi-Chau-Khai-Phong.jpg'
        },
        {
            name: 'Yêu lại từ đầu',
            singer: 'Khắc Việt',
            path: './assets/music/Yeu-Lai-Tu-Dau-Khac-Viet.mp3',
            image: './assets/img/Yeu-Lai-Tu-Dau-Khac-Viet.jpg'
        },
    ],

    render: function () {
        const htmls = this.songs.map((song, index) => {
            return `
                <div class="song ${index === this.currentIndex ? 'active' : ''}" data-index=${index}>
                    <div class="thumb" style="background-image: url('${song.image}')">
                    </div>
                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.singer}</p>
                    </div>
                    <div class="option">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
            `
        })

        playlist.innerHTML = htmls.join('')
    },

    defineProperties: function () {
        // Định nghĩa ra 1 getter
        Object.defineProperty(this, 'currentSong', {
            // Lấy ra bài đầu tiên
            get: function () {
                return this.songs[this.currentIndex]
            }
        })
    },

    handleEvents: function () {
        // Gán biến this (app)
        const _this = this
        const cdWidth = cd.offsetWidth

        // Xử lý CD quay / dừng
        const cdThumbAnimate = cdThumb.animate([
            { 
                transform: 'rotate(360deg)'
            }
        ], {
            duration: 10000, // 10s
            iterations: Infinity, // Loop 
        })
        cdThumbAnimate.pause()
        
        document.onscroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            const newCdWidth = cdWidth - scrollTop

            // Xét lại width cho cd + kiểm tra width trả về âm hay k?
            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px': 0
            // Làm mơ khi scroll về 0
            cd.style.opacity = newCdWidth / cdWidth
        }

        // Xử lý khi click play
        playBtn.onclick = function () {
            if(_this.isPlaying) {
                audio.pause()
            } else {
                audio.play()
            }
        }

        // Khi lắng nghe sự kiện play
        audio.onplay = function () {
            _this.isPlaying = true
            player.classList.add("playing")
            title.textContent = 'Now playing'
            cdThumbAnimate.play()
        }

        // Khi lắng nghe sự kiện pause
        audio.onpause = function () {
            _this.isPlaying = false
            player.classList.remove("playing")
            title.textContent = 'Pause'
            cdThumbAnimate.pause()
        }

        // Khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function () {
            const currentTime =  Math.floor(audio.currentTime)
            const duration =  Math.floor(audio.duration)

            timeStart.innerHTML = formatSecondsAsTime(currentTime)

            if(isNaN(duration)) {
                progress.value = 0
                timeEnd.innerHTML = '00:00'
            }else {
                const progressPercent = Math.floor(currentTime / duration * 100)
                progress.value = progressPercent
                timeEnd.innerHTML = formatSecondsAsTime(duration)
            }
        }

        function formatSecondsAsTime(secs) {
            var hr  = Math.floor(secs / 3600)
            var min = Math.floor((secs - (hr * 3600))/60)
            var sec = Math.floor(secs - (hr * 3600) -  (min * 60))

            if (min < 10){ 
                min = "0" + min 
            }
            if (sec < 10){ 
                sec  = "0" + sec
            }

            return min + ':' + sec
        }

        // Xử lý khi tua bài hát
        progress.onchange = function (e) {
            var seekTime = e.target.value * audio.duration / 100
            audio.currentTime = seekTime
        }

        // Khi next bài hát
        nextBtn.onclick = function() {
            if(_this.isRandom) {
                _this.playRandomSong()
            } else {
                _this.nextSong()
            }
            audio.play()
            _this.render()
            _this.scrollToActiveSong()
        }

        // Khi prev bài hát
        prevBtn.onclick = function() {
            if(_this.isRandom) {
                _this.playRandomSong()
            } else {
                _this.prevSong()
            }
            audio.play()
            _this.render()
            _this.scrollToActiveSong()
        }

        // Xử lý bật / tắt random
        randomBtn.onclick = function(e) {
            _this.isRandom = !_this.isRandom
            _this.setConfig('isRandom', _this.isRandom)
            randomBtn.classList.toggle('active', _this.isRandom)
        }

        // Xử lý lặp lại 1 bài hát 
        repeatBtn.onclick = function(e) {
            _this.isRepeat = !_this.isRepeat
            _this.setConfig('isRepeat', _this.isRepeat)
            repeatBtn.classList.toggle('active', _this.isRepeat)
        }   

        // Xử lý next bài hát khi audio kết thúc
        audio.onended = function () {
            if(_this.isRepeat) {
                audio.play()
            } else if (_this.isRandom) {
                _this.playRandomSong()
                _this.render()
                _this.scrollToActiveSong()  
                audio.play()
            }else {
                _this.nextSong() 
                _this.render()
                audio.play()
            }
        }

        // Lắng nghe hành vi click vào playlist
        playlist.onclick = function (e) {
            const songNode = e.target.closest('.song:not(.active)')
            const optionNode = !e.target.closest('.option')
            if(songNode && optionNode) {
                // Xử lý khi click vào bài hát
                const indexSong = Number(songNode.dataset.index)
                _this.currentIndex = indexSong
                _this.loadCurrentSong()
                _this.render()
                _this.scrollToActiveSong()  
                audio.play()
            }else {
                // Xử lý lựa chọn khác
            }
        }
    },

    scrollToActiveSong: function () {
        let _this = this
        setTimeout(function () {
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: `${_this.currentIndex < 3 ? 'end' : 'center'}`
            })
        }, 300)
    },

    loadCurrentSong: function () {
        heading.textContent = this.currentSong.name
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path
    },

    loadConfig: function() {
        this.isRandom = this.config.isRandom,
        this.isRepeat = this.config.isRepeat
    },

    nextSong: function () {
        this.currentIndex ++
        if (this.currentIndex > this.songs.length - 1)
        {
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },

    prevSong: function () {
        this.currentIndex --
        if (this.currentIndex < 0)
        {
            this.currentIndex = this.songs.length - 1
        }
        this.loadCurrentSong()
    },

    playRandomSong: function () {
        let newIndex
        do {
            newIndex = Math.floor(Math.random() * this.songs.length)
        } while (newIndex === this.currentIndex)

        this.currentIndex = newIndex
        this.loadCurrentSong()
    },

    // Hàm chạy chính
    start: function () {
        // Gán cấu hình từ config vào ứng dụng
        this.loadConfig()

        // Định nghĩa các thuộc tính cho Object 
        this.defineProperties()

        // Lắng nghe / xử lý các sự kiện (DOM Events)
        this.handleEvents()

        // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
        this.loadCurrentSong()

        // Render Playlist
        this.render()

        // Trạng thái các nút
        randomBtn.classList.toggle('active', this.isRandom)
        repeatBtn.classList.toggle('active', this.isRepeat)
    }
}

app.start()