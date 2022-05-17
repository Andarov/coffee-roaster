let elHeading = document.querySelectorAll(".questions-consumer-heading");
let elSelections = document.querySelectorAll(".selections");

elHeading.forEach(function(item, index) {
    item.addEventListener("click", function () {
        elSelections[index].classList.toggle("visually-hidden")
    })
})