export const predealVideoName = (name: String) => {
    let result = name.match(/[(]P(.*)\-/)
    if (result && result[1]) {
        return result[1]
    } else {
        return name
    }
}