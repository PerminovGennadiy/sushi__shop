// Скрываем / показываем блок с "Корзина пуста" и "Оформить заказ"

function toggleCartStatus() {
    
    // Ищём корзину
    const cartWrapper = document.querySelector('.cart-wrapper');
    // Элементы, который нужно скрыть/показать
    // "Корзина пуста"
    const cartEmptyBadge = document.querySelector('[data-cart-empty]');
    // Оформить заказ 
    const orderForm = document.querySelector('#order-form');

    // Возвращает коллекцию дочерних элементов у корзины (cartWrapper.children). Возвращает количетсво дочерних элеметов (cartWrapper.children.length)
    if (cartWrapper.children.length > 0) {
        cartEmptyBadge.classList.add('none');
        orderForm.classList.remove('none');
    } else {
        cartEmptyBadge.classList.remove('none');
        orderForm.classList.add('none');
    }
}