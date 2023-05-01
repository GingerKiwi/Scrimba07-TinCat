// Create the Dog class here
import cats from './data'
class Cat {
    constructor(data) {
        Object.assign(this, data)
    }

    getCatHtml() {
        const { name, avatar, alt, age, bio, hasBeenSwiped, hasBeenLiked } = this
        return `
        <div class="profile">
          <img src="${avatar}" alt="${alt}" />
          <h2 class="cat-name" id="cat-name">${name} ${age}</h2>
          <div class="cat-bio" id="cat-bio">${bio}</div>
        </div>`
    }
}

export { Cat }