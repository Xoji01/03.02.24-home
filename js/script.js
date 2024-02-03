import { arr } from "./db.js"
import { reloadSlots } from "./ui.js"

// a

let slots = document.querySelector('.slots')
reloadSlots(arr, slots)

let showFive = document.querySelector('#show_five')
let showFull = document.querySelector('#show_full')

showFive.onclick = () => {
    let sliced = arr.slice(0,5)
    reloadSlots(sliced, slots)
}
showFull.onclick = () => {
    reloadSlots(arr, slots)
}
