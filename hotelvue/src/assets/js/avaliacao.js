export default class Avaliacao {
    name
    id
    room
    stars
    comments
    constructor(id) {
        id ? (this.id = id++) : (this.id = 0)
    }
    addName(name) {
        this.name = name
    }
    addRoom(room) {
        this.room = room
    }
    addComments(comments) {
        this.comments = comments
    }
    addStars(stars) {
        this.stars = stars
    }
    readRating() {
        let rating = {}

        if (localStorage.getItem('avaliacoes')) {
            this.local = JSON.parse(localStorage.getItem('avaliacoes'))
            this.id = this.local[this.local.length - 1]['id'] + 1
        }

        rating.name = this.name
        rating.id = this.id
        rating.room = this.room
        rating.stars = this.stars
        rating.comments = this.comments

        return rating
    }
}
