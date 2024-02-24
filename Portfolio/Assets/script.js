const toogleBar = document.querySelector(".sidebar")
const circularProgress = document.querySelectorAll(".circular-progress")
const progressBar = document.querySelectorAll(".progress-bar")

function showSideBar() {
 toogleBar.style.display = "flex";
}

function removeSideBar() {
 toogleBar.style.display = "none";
}


let progressStart = 0
let speed = 100
for (let i = 0; i < progressBar.length; i++) {


 let progress = setInterval(() => {
  progressStart++
  let progressEnd = progressBar[i].getAttribute("data-value")
  progressBar[i].textContent = `${progressStart}%`
  circularProgress[i].style.background = `conic-gradient(#bd9106 ${progressStart * 3.6}deg, #000 0deg)`
  if (progressStart >= progressEnd) {
   clearInterval(progress)
  }
 },
  speed)
}