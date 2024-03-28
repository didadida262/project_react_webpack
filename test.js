
// localStorage.setItem('data', 123, expires)
// localStorage.getItem('data')

class newLocal {
    constructor() {
        this.expires = null
        this.obj = {}

    }
    getItem(key) {
        return this.obj[key]
    }
    setItem(key, data, time) {
        this.obj[key] = data
        setTimeout(() => {
            this.obj[key] = null
        }, time)
        
    }
}

const test = new newLocal()
test.setItem('data', 123, 1000)
test.getItem('data')