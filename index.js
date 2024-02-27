let countEl = document.querySelector("#count-el")

let showEl = document.querySelector("#show-count")

let count = 0

document.querySelector("#increment-btn").addEventListener("click", function(e) {
    count += 1
    countEl.innerText = count
    console.log(count)
})

document.querySelector("#save-btn").addEventListener("click", function(e) {
    showEl.innerHTML += ` ${count} -`
    countEl.innerHTML = 0
    count = 0
})
