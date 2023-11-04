import { menuArray } from "./data.js"


const menuHtml = menuArray.map(function (dish) {
    const tempArr =
        `
<div id='item-1'>${dish.name}</div>
`


    return tempArr
}).join('')

document.querySelector('main').innerHTML = menuHtml