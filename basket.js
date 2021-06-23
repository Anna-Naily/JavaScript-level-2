"use strict";
let totalPriceEl = document.querySelector(".totalPrice");
totalPriceEl.innerText = null ?? "$ 0";
let totalEl = document.querySelector(".price-cart");
let buttonCartEl = document.querySelector(".cart-details");
let cartEl = document.querySelector(".cart-block");
//Создание массива объектов продуктов
let productsArr = [];
//Создание объекта корзины
let basket = {};
//Создание класса продуктов
class Products {
  constructor(id, name, price, image) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
  }
}
//Поиск карточек продуктов и помещение их в массив.
//Перебирание карточек и выявление данных из них.
//Создание объекта продукта и добавление объекта в массив продуктов.
let productCards = document.querySelectorAll(".item-products");
productCards.forEach(function (productCard) {
  let productId = productCard.querySelector("button[data-id]").textContent;
  let productName = productCard.querySelector(".name-product").textContent;
  let productPriceArr = productCard
    .querySelector(".price")
    .textContent.split("$");
  let productPrice = Number(productPriceArr[1]).toFixed(2);
  let productImg = productCard
    .querySelector(".img-product")
    .getAttribute("src");
  let productObj = new Products(
    productId,
    productName,
    productPrice,
    productImg
  );
  productsArr.push(productObj);
});
//Функция рисует товар в окне корзины.
function renderProductInBasket(product) {
  let productBox = `<div class="cart-element">
                  <img
                    class="img-cart" width="100px" height="100px"
                    src="${product.image}"
                    alt="photo"
                  />
                  <div class="cart-info">
                    <h2 class="heading-cart">${product.name}</h2>
                    <div class="rating-block">
                      <i class="fas fa-star"></i><i class="fas fa-star"></i
                      ><i class="fas fa-star"></i><i class="fas fa-star"></i
                      ><i class="fas fa-star-half-alt"></i>
                    </div>
                    <p class="count-cart">1 x $${product.price}</p>
                  </div>
                  <span class="delete-cart">
                    <i class="fas fa-times-circle"></i>
                  </span>
                </div>`;
  totalEl.insertAdjacentHTML("beforebegin", productBox);
}
//Обработчик логотипа корзины. Открывает окно корзины с классом hidden.
buttonCartEl.addEventListener("click", function () {
  cartEl.classList.toggle("hidden");
});
//Отрисовка всех товаров в корзине (временно все товары добавлены, далее будут добавляться по кнопке.)
productsArr.forEach(function (product) {
  renderProductInBasket(product);
});
