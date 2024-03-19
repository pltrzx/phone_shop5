'use strict'
const body = document.body
const bassket = document.getElementById('header-cart-orders-numbers')

const pageName = getPageName()

function getPageName(){
    const pageHref = location.href
    const htmlIndex = pageHref.lastIndexOf('.html')
    const slashIndex = pageHref.lastIndexOf('/') + 1
    return pageHref.slice(slashIndex, htmlIndex)

}

let orderCountier = 0

class PhoneDiv {
    constructor( phone ) {
        this.brand = phone.brand
        this.model = phone.model
        this.screen = phone.screen
        this.camera = phone.camera
        this.battery = phone.battery
        this.RAM = phone.RAM
        this.ROM = phone.ROM
        this.image = phone.image
        this.price = phone.price

        this.div = document.createElement('div')
        this.div.className = 'phone-card'

        this.is_on_cart = false

        this.fillCard()
    }

    // метод заполнения карточки товара
    fillCard() {
        // название
        let title = document.createElement('h3')
        title.innerHTML = this.brand + ` <span>${this.model}</span>`
        this.div.append( title )

        // фото и описание
        let divDescriptionContainer = document.createElement('div')
        divDescriptionContainer.className = 'description-container'
        this.div.append( divDescriptionContainer )

        let divImage = document.createElement('div') // див вокруг фото
        divImage.className = 'div-image'
        divDescriptionContainer.append( divImage ) 
        let image = document.createElement('img') // само фото
        image.src = this.image
        divImage.append( image )

        let divDescription = document.createElement('div')
        divDescription.className = 'description'
        divDescription.innerHTML = `
            <div><span>Экран:</span> ${this.screen} <span>дюймов</span></div>
            <div><span>Камера:</span> ${this.camera} <span>Мпикс.</span></div>
            <div><span>Батарея:</span> ${this.battery} <span>мА/час</span></div>
            <div><span>Оперативная память:</span> ${this.RAM} <span>ГБ</span></div>
            <div><span>Основная память:</span> ${this.ROM} <span>ГБ</span></div>
            `
        divDescriptionContainer.append( divDescription )

        // цена и кнопка заказа
        let divOrderContainer = document.createElement('div')
        divOrderContainer.className = 'order-container' 
        divDescription.append(divOrderContainer)

        let divPrice = document.createElement('div')
        divPrice.className = 'price'
        divPrice.innerHTML = `<span>Цена:</span> ${this.price} BYN`
        divOrderContainer.append(divPrice)

        this.button = document.createElement('button')
        this.button.innerText = 'ЗАКАЗАТЬ'
        this.button.onclick = this.addToCart.bind(this)
        divOrderContainer.append(this.button)

        body.append( this.div )
    }

    addToCart(){
        if (this.is_on_cart)

        orderCountier++
        bassket.innerText = orderCountier

        this.is_on_cart = true
        this.button.innerText = 'В КОРЗИНЕ'
    }
}

let phoneDivesList = []
PRODUCTS.forEach( addPhone )
function addPhone( phone ) {
    phoneDivesList.push( new PhoneDiv(phone) )
}