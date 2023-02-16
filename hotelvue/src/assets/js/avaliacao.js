export default class Avaliacao {
    constructor(name, id, room, stars, comments) {
        this.name = name
        this.id = id
        this.room = room
        this.stars = stars
        this.comments = comments
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
    addID(id) {
        this.id = id
    }
    readRating() {
        let rating = {}

        if (localStorage.getItem('avaliacoes')) {
            this.local = JSON.parse(localStorage.getItem('avaliacoes'))
        }

        rating.name = this.name
        rating.id = this.id
        rating.room = this.room
        rating.stars = this.stars
        rating.comments = this.comments

        return rating
    }
}
