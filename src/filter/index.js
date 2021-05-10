export const register = (value) => {
    if(!value) return "";
    let array = value.split(" ")
    return array[0]
}