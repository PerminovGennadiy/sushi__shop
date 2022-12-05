// Добавляем товар в корзину

// div внутри корзины, в который мы добавляем товары
const cartWrapper = document.querySelector('.cart-wrapper');

window.addEventListener('click', function (e) {
    
    // Проверяем что клик был совершён по кнопке "Добавить в корзину"
    if (e.target.hasAttribute('data-cart')) {
        
        // Находим карточку с товаром, внтури которой был клик
        const card = e.target.closest('.card');

        // Собираем данные с этого товара (количество товара, картинка, вес и т.д) и записываем в объект productInfo
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            itemsInBox: card.querySelector('[data-items-in-box]').innerText,
            weight: card.querySelector('.price__weight').innerText,
            price: card.querySelector('.price__currency').innerText,
            counter: card.querySelector('[data-counter]').innerText,
        };

        // Проверяем, есть ли такой товар в корзине
        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`)
        // Есть ли товар в корзине
        if (itemInCart) {
            // Счётчик в корзине
            const counterElement = itemInCart.querySelector('[data-counter]');
            counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
        } else {

            // Собранные данные поставим в шаблон для товара в корзине
            const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
                                    <div class="cart-item__top">
                                        <div class="cart-item__img">
                                            <img src="${productInfo.imgSrc}" alt="">
                                        </div>
                                        <div class="cart-item__desc">
                                            <div class="cart-item__title">${productInfo.title}</div>
                                            <div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>
                                            <!-- cart-item__details -->
                                            <div class="cart-item__details">
                                                <div class="items items--small counter-wrapper">
                                                    <div class="items__control" data-action="minus">-</div>
                                                    <div class="items__current" data-counter="">${productInfo.counter}</div>
                                                    <div class="items__control" data-action="plus">+</div>
                                                </div>
                                                <div class="price">
                                                    <div class="price__currency">${productInfo.price}</div>
                                                </div>
                                            </div>
                                        <!-- // cart-item__details -->
                                        </div>
                                    </div>
                                </div>`;
            
            // Отобразим товары в корзине
            cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
        }

        // Сбрасываем значение счётчика до 1, когда пользователь добавил товар в корзину
        card.querySelector('[data-counter]').innerText = '1';

        // Отображение, есть ли товар в корзине или нет
        toggleCartStatus();

        // Высчитываем сумму товаров в корзине
        calcCartPriceAndDelivery();
    }
});