import { dogsData } from "./data.js"
import Dog from "./Dog.js"

let currentDogIndex = 0

document.addEventListener("click", (e) => {
  if (e.target.dataset.state) {
    if (e.target.dataset.state === "accept") {
      handleHeartBtnClick()
    } else if (e.target.dataset.state === "reject") {
      handleRejectBtnClick()
    }
  }
})

function handleHeartBtnClick() {
  dog.likeDog()
  if (currentDogIndex < dogsData.length - 1) {
    currentDogIndex++
  } else {
    currentDogIndex = 0
  }

  renderDog()
  setTimeout(() => {
    dog = getNewDog()
    renderDog()
  }, 750)
}

function handleRejectBtnClick() {
  dog.swipeDog()
  if (currentDogIndex > 0) {
    currentDogIndex--
  } else {
    currentDogIndex = dogsData.length - 1
  }

  renderDog()
  setTimeout(() => {
    dog = getNewDog()
    renderDog()
  }, 750)
}

function renderDog() {
  document.getElementById('profile').innerHTML = dog.getDogHtml()


  console.log(`Liked: ${dog.hasBeenLiked} \nSwipped: ${dog.hasBeenSwiped}`)
}

function getNewDog() {
  return new Dog(dogsData[currentDogIndex])
}

let dog = getNewDog()

renderDog()