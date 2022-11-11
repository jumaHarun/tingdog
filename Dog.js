import { getlikeBadgeHtml, getSwipedBadgeHtml } from "./utils.js"

class Dog {
  constructor(data) {
    Object.assign(this, data)
  }

  likeDog() {
    this.hasBeenLiked = true
    this.hasBeenSwiped = false
  }

  swipeDog() {
    if (this.hasBeenLiked) {
      this.hasBeenLiked = false
    }
    this.hasBeenSwiped = true

  }

  getDogHtml() {
    const { name, avatar, age, bio, hasBeenLiked, hasBeenSwiped } = this
    const badgeImgHtml = hasBeenLiked ? getlikeBadgeHtml()
      : hasBeenSwiped ? getSwipedBadgeHtml()
        : ''

    return `
    <img src="${avatar}" class="profile-img">
    <div class="caption">
      <h2 class="caption-title">${name}, ${age}</h2>
      <p class="caption-text">${bio}</p>
    </div>
    <div class="badge" id="badge">
      ${badgeImgHtml}
    </div>
    `
  }
}

export default Dog