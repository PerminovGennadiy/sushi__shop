// Увеличиваем / уменьшаем счётчик при выборе товара

window.addEventListener('click', function (e) {

    let counter;

    if (e.target.dataset.action === 'plus' || e.target.dataset.action === 'minus') {

    // Отлавливаем ближайшего родителя с классом 'counter-wrapper'
    const counterWrapper = e.target.closest('.counter-wrapper');
    // Находим счётчик внутри "counter-wrapper"
    counter = counterWrapper.querySelector('[data-counter]');
    }

    //  в первом условии отлавливаем дата-атрибут action, со значением plus (если его выведем в консоль, то выведет plus)
    // во втором условии со значением minus
    //  <div class="items__control" data-action="minus">-</div>
    //  <div class="items__current" data-counter>1</div>
    //  <div class="items__control" data-action="plus">+</div>

    if (e.target.dataset.action === 'plus') {
        // Изменяем счётчик, у этого "counter-wrapper"
        counter.innerText = ++counter.innerText;
    }

    if (e.target.dataset.action === 'minus') {

        if (parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText;

        // Проверка, если товар в корзине и пользователь пытается сделать счётчик меньше 1, то удалить этот товар из корзины
        } else if (e.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
            e.target.closest('.cart-item').remove();

            // Отображение, есть ли товар в корзине или нет
            toggleCartStatus();
            
            calcCartPriceAndDelivery();
        }
    }

    // проверяем клик на + или - внутри корзины
    if (e.target.hasAttribute('data-action') && e.target.closest('.cart-wrapper')) {
        calcCartPriceAndDelivery();
    }

    

    if (e.target.querySelectorAll('.icon-xmark')) {
        e.target.closest('.cart-item').remove();
        toggleCartStatus();
        calcCartPriceAndDelivery();
    }

    
});