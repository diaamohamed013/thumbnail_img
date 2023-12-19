// var demo = document.getElementById("demo");

// document.addEventListener("mousemove", function (e) {
//     demo.style.left = e.clientX + 'px';
//     demo.style.top = e.clientY + 'px';
// })

var items = Array.from(document.querySelectorAll(".item img"));
var lightBoxContainer = document.getElementById("lightBoxContainer");
var lightBox = document.getElementById("lightBox");
var closeBtn = document.getElementById("close");

var currentIndex = 0;

function toggleActiveClass(item) {
    var elems = document.querySelector(".active");
    if (elems !== null) {
        elems.classList.remove("active");
    }
    item.classList.add("active");
    if (lightBoxContainer.style.display == "none"){
        item.classList.remove("active");
    }
}

for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function (e) {
        lightBoxContainer.style.display = "flex";
        var imgSrc = e.target.getAttribute("src");
        currentIndex = items.indexOf(e.target);
        lightBox.style.backgroundImage = `url(${imgSrc})`;
        toggleActiveClass(this.parentElement);
    });
};

function nextImg() {
    currentIndex++;
    if (currentIndex == items.length) {
        currentIndex = 0;
    }
    var imgSrc = items[currentIndex].getAttribute("src");
    lightBox.style.backgroundImage = `url(${imgSrc})`;
}

function prevImg() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = items.length - 1;
    }
    var imgSrc = items[currentIndex].getAttribute("src");
    lightBox.style.backgroundImage = `url(${imgSrc})`;
}

// function closeImg() {
//     lightBoxContainer.style.display = "none";
// }

// closeBtn.addEventListener("click", function () {
//     closeImg();
// });

// document.addEventListener("keyup" ,function(e){
//     if(e.key == "ArrowLeft"){
//         prevImg();
//     }
//     else if(e.key == "ArrowRight"){
//         nextImg();
//     }
//     else if(e.key == "Escape"){
//         closeImg();
//     }
// })