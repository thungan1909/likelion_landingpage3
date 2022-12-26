
const _likeBtn = document.querySelectorAll(".likeBtn");


_likeBtn.forEach( (btn) => {
    btn.addEventListener("click", function () {
        btn.children[0].classList.replace("fa-thumbs-up", "fa-check");
        btn.children[1].textContent = "Liked"; 
    });
})

const comments = document.querySelectorAll(".comments");
const replies = document.querySelectorAll(".reply");

replies.forEach((btn, index) => {
    btn.addEventListener("click", function() {
        comments[index].classList.toggle("d-none");
    });
});