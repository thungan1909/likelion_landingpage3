
const _likeBtn = document.querySelectorAll(".likeBtn");




// _likeBtn.addEventListener("click", function () {
//     _likeIcon.classList.replace("fa-thumbs-up", "fa-check");
// })


_likeBtn.forEach( (btn) => {
    btn.addEventListener("click", function () {
        btn.children[0].classList.replace("fa-thumbs-up", "fa-check");
        btn.children[1].textContent = "Liked"; 
    });
})