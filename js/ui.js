



export function reloadSlots(arr, place) {
    place.innerHTML = ''
    for (let item of arr) {
        let slot = document.createElement('div')

        let photo = document.createElement('div')
        let img = document.createElement('img')

        let descr = document.createElement('div')
        let slotName = document.createElement('h3')
        let p = document.createElement('p')

        let icons = document.createElement('div')
        let price = document.createElement('div')
        let priceImg = document.createElement('img')

        let star = document.createElement('div')
        let starImg = document.createElement('img')

        let pack = document.createElement('div')
        let packImg = document.createElement('img')

        let button = document.createElement('button')


        // b

        slot.classList.add('slot')
        photo.classList.add('photo')
        descr.classList.add('descr')
        slotName.classList.add('slot-name')
        p.classList.add('descr-p')
        icons.classList.add('icons')
        button.classList.add('to-star')

        place.append(slot)
        slot.append(photo)
        photo.append(img)
        img.src = item.image
        slot.append(descr)
        descr.append(slotName, p, icons, button)
        slotName.innerHTML = item.category
        p.innerHTML = item.description
        icons.append(price, star, pack)
        price.append(priceImg, item.price)
        priceImg.src = './img/dollar.svg'
        star.append(starImg, item.rating.rate)
        starImg.src = './img/star.svg'
        pack.append(packImg, item.rating.count)
        packImg.src = './img/box.svg'
        button.innerHTML = 'В избранное'


        button.onclick = () => {
            let numView = document.querySelector('#in_pocket')
            let num = +numView.innerText
            if(!button.classList.contains('to-star_active')) {
                button.innerHTML = 'Добавлено'
                button.classList.add('to-star_active')
                numView.innerHTML = num + 1
            } else {
                button.innerHTML = 'В избранное'
                button.classList.remove('to-star_active')
                numView.innerHTML = num - 1
            }
        }
    }
}

let openmenu = document.querySelector('#openModalBtn')
let menu = document.querySelector('.menu')

openmenu.onclick = () => {
  menu.classList.toggle('open')
}

const menuverx = document.querySelector('.menuverx ')

const allblock = document.createElement('div')
const imgblock = document.createElement('div')
const productImg = document.createElement('img')

const blockname = document.createElement('div')
const title = document.createElement('h3')
const bname = document.createElement('p')
const x = document.createElement('span')
const blockcount= document.createElement('div')
const counts = document.createElement('div')
const minus = document.createElement('span')
const nums = document.createElement('span')
const counttt = document.createElement('span')
const priceitem = document.createElement('div')
const price = document.createElement('span')
allblock.classList.add('productsBlock')
imgblock.classList.add('product_Img')
productImg.setAttribute('src', 'https://amigos51.ru/nuber/images/shop/product/a12cf6f9-f296-4d79-937b-919af0cb3c0c/1c02c599-b5d5-4aaa-b307-e484a00bb3dc.jpg')
blockname.classList.add('product__title')
title.classList.add('product_name')
title.innerHTML ='пицца пеперони 25см'
bname.classList.add('product_paragraph')
bname.innerHTML= 'Пепперони, сыр моцарелла, пицца-соус томатный, орегано. 370 гр. '
blockcount.classList.add('product_counter_block')
counts.classList.add('product_counter')
minus.classList.add('prev')
minus.innerHTML = '-'
nums.classList.add('nums')
nums.innerHTML = '1'
counttt.classList.add('count')
counttt.innerHTML = '+'
priceitem.classList.add('product_price')
price.classList.add('span')
price.innerHTML = '0$'
menuverx.append(allblock)
allblock.append(imgblock)
imgblock.append(productImg)
allblock.append(blockname)
blockname.append(title, bname)
menuverx.append(blockcount)
blockcount.append(counts)
counts.append(minus, nums, counttt)
blockcount.append(priceitem)
priceitem.append(price)
let count = 0;

counttt.onclick = function () {
    count += 1;
    nums.innerHTML = count;
    price.innerHTML = count*100 + "$"
}

minus.onclick = function () {
    count -= 1;
    nums.innerHTML = count;
    price.innerHTML = count*100 + "$"
}
