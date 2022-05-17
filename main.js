let elorderQuestion = document.querySelectorAll('#question1 label')
let orderQuestionText = document.querySelectorAll('#question1  .selection-heading')
let elPlan = document.querySelector('#plan1')

elorderQuestion.forEach(function (item, index) {
   item.addEventListener('click', function () {
      elPlan.innerText = orderQuestionText[index].innerText
   })
})

let elorderQuestion2 = document.querySelectorAll('#question2 label')
let orderQuestionText2 = document.querySelectorAll('#question2  .selection-heading')
let elPlan2 = document.querySelector('#plan2')

elorderQuestion2.forEach(function (item, index) {
   item.addEventListener('click', function () {
      elPlan2.innerText = orderQuestionText2[index].innerText
   })
})

let elorderQuestion3 = document.querySelectorAll('#question3 label')
let orderQuestionText3 = document.querySelectorAll('#question3  .selection-heading')
let elPlan3 = document.querySelector('#plan3')

elorderQuestion3.forEach(function (item, index) {
   item.addEventListener('click', function () {
      elPlan3.innerText = orderQuestionText3[index].innerText
   })
})

let elorderQuestion4 = document.querySelectorAll('#question4 label')
let orderQuestionText4 = document.querySelectorAll('#question4  .selection-heading')
let elPlan4 = document.querySelector('#plan4')

elorderQuestion4.forEach(function (item, index) {
   item.addEventListener('click', function () {
      elPlan4.innerText = orderQuestionText4[index].innerText
   })
})

let elorderQuestion5 = document.querySelectorAll('#question5 label')
let orderQuestionText5 = document.querySelectorAll('#question5  .selection-heading')
let elPlan5 = document.querySelector('#plan5')

elorderQuestion5.forEach(function (item, index) {
   item.addEventListener('click', function () {
      elPlan5.innerText = orderQuestionText5[index].innerText
   })
})

let elHeading = document.querySelectorAll(".questions-consumer-heading");
let elSelections = document.querySelectorAll(".selections");

elHeading.forEach(function(item, index) {
    item.addEventListener("click", function () {
        elSelections[index].classList.toggle("visually-hidden")
    })
})