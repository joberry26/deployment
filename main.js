const preOrder = document.querySelector("#one")
const FAQs = document.querySelector("#two")
const haloWay = document.querySelector("#three")

function order () {
    window.open("https://www.xbox.com/en-US/games/halo-infinite", "_blank")
}

function faqs () {
    window.open("https://www.halowaypoint.com/en-us/forums/29568daf8cd14083bd1b70a810bf3581/topics/halo-infinite-faq/fb50f77c-d4d2-4afe-b740-44011ecb5583/posts", "_blank")
}

function HaloWay () {
    window.open("https://www.halowaypoint.com/en-us", "_blank")
}



preOrder.addEventListener('click', order)
FAQs.addEventListener('click', faqs)
haloWay.addEventListener('click', HaloWay)