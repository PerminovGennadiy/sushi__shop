// считаем сумму товаров в корзине

function calcCartPriceAndDelivery() {
    
    // Ищем корзину
    const cartWrapper = document.querySelector('.cart-wrapper');
    // ищем все карточки товаров из корзины
    const priceElement = cartWrapper.querySelectorAll('.price__currency');
    // Общая цена заказа
    const totalPriceEl = document.querySelector('.total-price');
    // Цена Доставки
    const deliveryCost = document.querySelector('.delivery-cost');
    // Элемент с ценой доставки
    const cartDelivery = document.querySelector('[data-cart-delivery]');
    // Элемент с надписью "Бесплатная дсотавка от 699 руб."
    const cartFreeDelivry = document.querySelector('[data-free-delivery]');

    // цена всей корзины
    let priceTotal = 0;

    priceElement.forEach(function (item) {
        // в первом элементе количетсов товара, во втором его цена
        const amountEl = item.closest('.cart-item').querySelector('[data-counter]');
        priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText);
    });

    // Отображаем цену на странице
    totalPriceEl.innerText = priceTotal;

    // Скрывем / показываем блок со стоимостью доставки
    if (priceTotal > 0) {
        cartDelivery.classList.remove('none');
    } else {
        cartDelivery.classList.add('none');
    }

    // Указываем стоимость доставки
    if (priceTotal > 699) {
        // цвет надписи станет зелёный
        deliveryCost.classList.add('free');
        // Изменяем цену доставки на бесплатную
        deliveryCost.innerText = 'Бесплатно';
        // Убираем надпись "Бесплатная дсотавка от 699 руб."
        cartFreeDelivry.classList.add('none');
    } else {
        deliveryCost.classList.remove('free');
        deliveryCost.innerText = '299 ₽';
        cartFreeDelivry.classList.remove('free');
    }
}
