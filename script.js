const btnDonate = document.getElementById("btn-donate")
const btnLikes = document.querySelectorAll(".pet-card-btn")
const selectPet = document.getElementById("select-paw")
const btnLikesSpan = document.querySelectorAll(".pet-card-span")
const PetCardExtra = document.querySelectorAll(".pet-card-extra")

btnDonate.addEventListener("click", () => {
    btnDonate.style.display = "none"
})

function functionSelectPet() {
    if (selectPet.value == "dog") {
        alert("dog")
    } if (selectPet.value == "cat") {
        alert("cat")
    }
}

selectPet.addEventListener("change", () => {
    functionSelectPet()
})

btnLikes.forEach(button => {
    button.addEventListener("click", () => {
        const petCount = button.previousElementSibling.querySelector('.pet-card-span');
        petCount.textContent = parseInt(petCount.textContent) + 1;
    })
});

