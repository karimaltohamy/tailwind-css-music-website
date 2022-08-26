let index = 0;
let song = new Audio("/audio/1.mp3")
song.volume = 0.0
// array song
const songs = [
    {
        id: "01",
        img: "/images/1poster.jpg",
        title: `Racore
                    <span class="text-[14px] text-gray-500 font-medium -mt-[2px]">marwan pablo</span>`
    },
    {
        id: "02",
        img: "/images/2poster.jpg",
        title: `Samurai
                    <span class="text-[14px] text-gray-500 font-medium -mt-[2px]">Cairokee</span>`
    },
    {
        id: "03",
        img: "/images/3poster.jpg",
        title: `kun Ashiqan
                    <span class="text-[14px] text-gray-500 font-medium -mt-[2px]">Faia Younan</span>`
    },
    {
        id: "04",
        img: "/images/4poster.jpg",
        title: `El Bosla
                    <span class="text-[14px] text-gray-500 font-medium -mt-[2px]">MArwan Moussa</span>`
    },
    {
        id: "05",
        img: "/images/5poster.jpg",
        title: `El Bakht
                    <span class="text-[14px] text-gray-500 font-medium -mt-[2px]">Wegz</span>`
    },
    {
        id: "06",
        img: "/images/6poster.jpg",
        title: `Adrenaline
                    <span class="text-[14px] text-gray-500 font-medium -mt-[2px]">Hamaki</span>`
    },
    {
        id: "07",
        img: "/images/7poster.jpg",
        title: `Khalek Fakerny
                    <span class="text-[14px] text-gray-500 font-medium -mt-[2px]">Amr Diab</span>`
    },
    {
        id: "08",
        img: "/images/8poster.jpg",
        title: `Enta Ekhtart
                    <span class="text-[14px] text-gray-500 font-medium -mt-[2px]">Tamer Ashour</span>`
    },
    {
        id: "09",
        img: "/images/9poster.jpg",
        title: `Kan Nefsy
                    <span class="text-[14px] text-gray-500 font-medium -mt-[2px]">Wegz</span>`
    },
    {
        id: "10",
        img: "/images/10poster.jpg",
        title: `Lovely
                    <span class="text-[14px] text-gray-500 font-medium -mt-[2px]">Billi Eilish</span>`
    },
    {
        id: "11",
        img: "/images/11poster.jpg",
        title: `Don
                    <span class="text-[14px] text-gray-500 font-medium -mt-[2px]">marwan pablo</span>`
    },
    {
        id: "12",
        img: "/images/12poster.jpg",
        title: `02:00Am
                    <span class="text-[14px] text-gray-500 font-medium -mt-[2px]">Lege Cy</span>`
    },
    {
        id: "13",
        img: "/images/13poster.jpg",
        title: `Halal
                    <span class="text-[14px] text-gray-500 font-medium -mt-[2px]">marwan pablo</span>`
    },
    {
        id: "14",
        img: "/images/14poster.jpg",
        title: `The Night We Met
                    <span class="text-[14px] text-gray-500 font-medium -mt-[2px]">Lord Huron</span>`
    },
    {
        id: "15",
        img: "/images/15poster.jpg",
        title: `Tany Tany
                    <span class="text-[14px] text-gray-500 font-medium -mt-[2px]">Lege Cy</span>`
    },
    {
        id: "16",
        img: "/images/16poster.jpg",
        title: `Barbary
                    <span class="text-[14px] text-gray-500 font-medium -mt-[2px]">marwan pablo</span>`
    }
];

// change images and title
Array.from(document.querySelectorAll(".item-song")).forEach((ele,i) => {
    let imge = ele.querySelector("img");
    let title = ele.querySelector("h3");
    
    imge.src = songs[i].img;
    title.innerHTML = songs[i].title
});

let playSong = document.querySelector(".play")
let wave = document.querySelector(".wave")

// toogle change main play
playSong.addEventListener("click", () => {
    if (song.paused || song.currentTime <= 0) {
        index = 1
        song.play()
        playSong.classList.remove("bi-play-fill")
        playSong.classList.add("bi-pause-fill")
        wave.classList.add("active2")
    }else {
        song.pause()
        playSong.classList.add("bi-play-fill")
        playSong.classList.remove("bi-pause-fill")
        wave.classList.remove("active2")
    }
});

// change to play circle
function playallICon() {
    Array.from(document.querySelectorAll(".item-song i")).forEach((ele) => {
            ele.classList.add("bi-play-circle-fill");
    })
};

function removeActivebg() {
    Array.from(document.querySelectorAll(".item-song")).forEach((ele) => {
            ele.classList.remove("active4")
    })
};


let currentimg = document.querySelector(".current-song img");
let currentTitle = document.querySelector(".current-song h3")

Array.from(document.querySelectorAll(".item-song i")).forEach((ele) => {
    ele.addEventListener("click", (e) => {
        index = +e.target.id  /* array start index 0*/
        playallICon()

        // toggle change play and pause circle 
        ele.classList.remove("bi-play-circle-fill");
        ele.classList.add("bi-pause-circle-fill");
        song.src = `/audio/${index}.mp3`
        song.play()

        // toggle change main play
        playSong.classList.remove("bi-play-fill")
        playSong.classList.add("bi-pause-fill")
        wave.classList.add("active2")

        // change current img and title
        currentimg.src = songs[index - 1].img;
        currentTitle.innerHTML = songs[index - 1].title;

        // active background
        removeActivebg()
        Array.from(document.querySelectorAll(".item-song"))[index - 1].classList.add("active4");

        // end song
        song.addEventListener("ended", () => {
            song.pause()
            playSong.classList.add("bi-play-fill")
            playSong.classList.remove("bi-pause-fill")
            wave.classList.remove("active2")
        })
    })
});


let currentTime = document.querySelector(".current-time");
let mainTime = document.querySelector(".main-time");
let bar2 = document.querySelector(".bar2");
let dot = document.querySelector(".dot");
// progress bar song
song.addEventListener("timeupdate", () => {
    let currentSong = song.currentTime;
    let durationSong = song.duration

    let min = Math.floor(currentSong / 60)
    let sec = Math.floor(currentSong % 60)

    if (sec < 10) {
        sec = `0${sec}`
    }

    currentTime.innerHTML = `${min}:${sec}`

    let min2 = Math.floor(durationSong / 60)
    let sec2 = Math.floor(durationSong % 60)

    if (sec2 < 10) {
        sec2 = `0${sec2}`
    }

    mainTime.innerHTML = `${min2}:${sec2}`

    bar2.style.width =`${(currentSong / durationSong * 100).toFixed(2)}%`
    dot.style.left =`${(currentSong / durationSong * 100 - .5).toFixed(2)}%`
});

let range = document.querySelector(".range")
range.addEventListener("change", () => {
    song.currentTime = range.value * song.duration / 100
}) 

song.addEventListener("ended", () => {
    song.pause()
    playSong.classList.add("bi-play-fill")
    playSong.classList.remove("bi-pause-fill")
    wave.classList.remove("active2")
})


// song volume

let rangeVal = document.querySelector(".range-val");
let val2 = document.querySelector(".val2");
let dotVal = document.querySelector(".dot-val")
let volIcon = document.querySelector(".vol-icon")

rangeVal.addEventListener("change", () => {
    if (rangeVal.value == 0) {
        volIcon.classList.remove("bi-volume-down-fill")
        volIcon.classList.add("bi-volume-mute-fill")
        volIcon.classList.remove("bi-mute-up-fill")
    }else if (rangeVal.value > 0) {
        volIcon.classList.add("bi-volume-down-fill")
        volIcon.classList.remove("bi-volume-mute-fill")
        volIcon.classList.remove("bi-mute-up-fill")
    }else if (range.value > 50) {
        volIcon.classList.remove("bi-volume-down-fill")
        volIcon.classList.remove("bi-volume-mute-fill")
        volIcon.classList.add("bi-mute-up-fill")
    }

    val2.style.width = `${rangeVal.value}%`
    dotVal.style.left = `${rangeVal.value}%`

    song.volume = rangeVal.value / 100
});


// back and next music
let next = document.querySelector(".next");
let back = document.querySelector(".back");

next.addEventListener("click", () => {
    index += 1;
    if (index > Array.from(document.querySelectorAll(".item-song")).length) {
        index =  1
    }
    playallICon()

    // toggle change play and pause circle 
    // Array.from(document.querySelectorAll(".item-song i"))[index].classList.remove("bi-play-circle-fill");
    // Array.from(document.querySelectorAll(".item-song i"))[index].classList.add("bi-pause-circle-fill");
    song.src = `/audio/${index}.mp3`
    song.play()

    // toggle change main play
    playSong.classList.remove("bi-play-fill")
    playSong.classList.add("bi-pause-fill")
    wave.classList.add("active2")

    // change current img and title
    currentimg.src = songs[index - 1].img;
    currentTitle.innerHTML = songs[index - 1].title;

    // active background
    removeActivebg()
    Array.from(document.querySelectorAll(".item-song"))[index - 1].classList.add("active4");
});


back.addEventListener("click", () => {
    index -= 1;
    if (index < 1) {
        index =  Array.from(document.querySelectorAll(".item-song")).length
    }
    playallICon()

    // toggle change play and pause circle 
    // Array.from(document.querySelectorAll(".item-song i"))[index].classList.remove("bi-play-circle-fill");
    // Array.from(document.querySelectorAll(".item-song i"))[index].classList.add("bi-pause-circle-fill");
    song.src = `/audio/${index}.mp3`
    song.play()

    // toggle change main play
    playSong.classList.remove("bi-play-fill")
    playSong.classList.add("bi-pause-fill")
    wave.classList.add("active2")

    // change current img and title
    currentimg.src = songs[index - 1].img;
    currentTitle.innerHTML = songs[index - 1].title;

    // active background
    removeActivebg()
    Array.from(document.querySelectorAll(".item-song"))[index - 1].classList.add("active4");
});


// arrow next left and right side
let nextRight = document.querySelectorAll(".next-right");
let nextLeft = document.querySelectorAll(".next-left");
let popeSong = document.querySelector(".pope-song");
let popeArtist = document.querySelector(".pope-artist") 

nextRight.forEach((right) => {
    right.addEventListener("click", (e) => {
        e.target.parentNode.parentNode.parentNode.children[1].scrollLeft += 150
    })
});

nextLeft.forEach((left) => {
    left.addEventListener("click", (e) => {
        e.target.parentNode.parentNode.parentNode.children[1].scrollLeft += -150
    })
});



// mobil playlist

let menuEle = document.querySelectorAll(".menu-ele");
let menuSide = document.querySelector(".menu-side")
let myLibrary = document.querySelector(".my-library");
let closeMenu = document.querySelector(".close")
let sideSong = document.querySelector(".side-song")
let disccover = document.querySelector(".disccover")

myLibrary.addEventListener("click", (e) => {
    // remove class active from all element
    menuEle.forEach((element) => element.classList.remove("active3"))
    e.target.classList.add("active3")
    menuSide.classList.remove("hidden")
    sideSong.classList.add("hidden")
});

closeMenu.addEventListener("click", (e) => {
    menuEle.forEach((element) => element.classList.remove("active3"))
    disccover.classList.add("active3")
    menuSide.classList.add("hidden")
    sideSong.classList.remove("hidden")
})