export const predealVideoName = (name: String) => {
    // let result = name.match(/[(]P(.*)\-/)
    let result = name.match(/[(]P(.*)/)
    if (result && result[1]) {
        return result[1]
    } else {
        return name
    }
}

export const getVideoID = (name:string) => {
    return Number(name.split('.')[0])
}

export interface IPCInfo {
    type: string;
    data: object;
  }
