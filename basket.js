"use strict";
let totalPriceEl = document.querySelector(".totalPrice");
totalPriceEl.innerText = null ?? "$ 0";
let totalEl = document.querySelector(".price-cart");
let buttonCartEl = document.querySelector(".cart-details");
let cartEl = document.querySelector(".cart-block");
let navigationPage = document.querySelector(".navigation-page");
let blockForProductsInCart = document.querySelector(".block-for-products");
let countBuyEl = document.querySelector(".count-buy");
const API_URL =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";
////////////////////////////////////
function makeGETRequest(url) {
  return new Promise((resolve, reject) => {
    var xhr;
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status == 200) {
          resolve(xhr.responseText);
        } else {
          reject("Error");
        }
      }
    };
    xhr.send();
  });
}
//Каталог товаров
class GoodsList {
  constructor() {
    this.total = 0;
    this.productsArr = [];
    //Массив товаров, которые будут считываться с сервера
    this.goods = [];
    //Все товары со страницы, кроме серверных.
    this.allProducts = [];
  }
  //Подгрузка товаров с сервера + рендеринг
  async fetchGoods() {
    let testArr = [];
    await makeGETRequest(`${API_URL}/catalogData.json`).then((value) => {
      testArr = JSON.parse(value);
    });
    this.goods = testArr;

    //добавление свойства image объектам массива, изменение id товара с сервера и добавление продуктов с сервера в общий массив продуктов
    for (let i = 0; i < this.goods.length; i++) {
      this.goods[i].image = `image/product-card-${
        this.allProducts.length + 1
      }.png`;
      this.goods[i].id_product = this.allProducts.length;
      this.allProducts.push(this.goods[i]);
    }
  }

  //Заполнение массива продуктов
  createAllProducts() {
    this.allProducts = [
      {
        id_product: 0,
        product_name: "MANGO PEOPLE T-SHIRT",
        price: 52,
        image: "image/product-card-1.png",
      },
      {
        id_product: 1,
        product_name: "MANGO MAN T-SHIRT",
        price: 55,
        image: "image/product-card-2.png",
      },
      {
        id_product: 2,
        product_name: "MANGO PEOPLE BAGS",
        price: 35,
        image: "image/product-card-3.png",
      },
      {
        id_product: 3,
        product_name: "MANGO PEOPLE PANTS",
        price: 44,
        image: "image/product-card-4.png",
      },
      {
        id_product: 4,
        product_name: "MANGO PEOPLE T-SHIRT",
        price: 52,
        image: "image/product-card-5.png",
      },
      {
        id_product: 5,
        product_name: "MANGO PEOPLE T-SHIRT",
        price: 52,
        image: "image/product-card-6.png",
      },
      {
        id_product: 6,
        product_name: "MANGO PEOPLE T-SHIRT",
        price: 52,
        image: "image/product-card-7.png",
      },
      {
        id_product: 7,
        product_name: "MANGO PEOPLE T-SHIRT",
        price: 52,
        image: "image/product-card-8.png",
      },
      {
        id_product: 8,
        product_name: "MANGO PEOPLE T-SHIRT",
        price: 52,
        image: "image/product-card-9.png",
      },
    ];
  }
  //Отрисовка продуктов на странице
  renderProductsOnPage() {
    let productCardBar = `<div class="product-card-bar"><ul class="item-card-bar">`;
    for (let i = 0; i < this.allProducts.length; i++) {
      productCardBar += `<li class="item-products card-icon">
    <a class="card-link" href="single_page.html">
      <div class="picture-card">
        <img class="img-product" src=${this.allProducts[i].image} alt="photo" />
      </div>
      <h4 class="name-product">${this.allProducts[i].product_name}</h4>
      <div class="text-rating-block">
        <p class="price">$${this.allProducts[i].price.toFixed(2)}</p>
        <div class="rating-product">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
      </div>
    </a>
    <button data-id="${this.allProducts[i].id_product}" class="add-product">
      <img class="cart" src="image/white-cart.svg" alt="white-cart" />
      Add to cart
    </button>
  </li>`;
    }
    productCardBar += `</ul></div>`;
    navigationPage.insertAdjacentHTML("beforebegin", productCardBar);
  }
  //Добавление товаров в массив продуктов
  addProductToBasket(product) {
    this.productsArr.push(product);
  }
}
//Продукты в корзине
class ProductsInCart {
  constructor() {
    this.basket = {};
    //Массив карточек товаров, добавленных в корзину
    this.renderProducts = [];
  }
  //Функция добавления и увеличения товаров в корзине
  addProduct(id) {
    if (!(id in this.basket)) {
      this.basket[id] = 1;
    } else {
      this.basket[id]++;
    }
  }
  removeProduct(id) {
    if (id in this.basket) {
      this.basket[id]--;
    }
  }
  //Функция рисует товар в окне корзины.
  renderProductInBasket() {
    if (this.renderProducts.length > 0) {
      this.renderProducts = [];
      //обнуление
      blockForProductsInCart.innerHTML = ``;
    }
    let renderArr = goodlist.allProducts;
    for (let i = 0; i < renderArr.length; i++) {
      if (i in this.basket && this.basket[i] > 0) {
        let image = renderArr[i].image;
        let name = renderArr[i].product_name;
        let price = renderArr[i].price;
        let count = this.basket[i];
        let idSpan = renderArr[i].id_product;
        let productBox = `<div class="cart-element">
                    <img
                      class="img-cart" width="100px" height="100px"
                      src="${image}"
                      alt="photo"
                    />
                    <div class="cart-info">
                      <h2 class="heading-cart">${name}</h2>
                      <div class="rating-block">
                        <i class="fas fa-star"></i><i class="fas fa-star"></i
                        ><i class="fas fa-star"></i><i class="fas fa-star"></i
                        ><i class="fas fa-star-half-alt"></i>
                      </div>
                      <p class="count-cart">${count} x $${price}</p>
                    </div>
                    <span data-idSpan="${idSpan}" class="delete-cart">
                      <i class="fas fa-times-circle"></i>
                    </span>
                  </div>`;
        this.renderProducts.push(productBox);
      }
    }
    this.renderProducts.forEach((elem) => {
      blockForProductsInCart.insertAdjacentHTML("beforeend", elem);
    });
  }
}
// Класс корзины
class Cart {
  showHidden() {
    cartEl.classList.toggle("hidden");
  }
  //Функция подсчета общей стоимости корзины.
  recalculationTotalSum() {
    let totalSum = 0;
    for (let id in productsInCart.basket) {
      totalSum += productsInCart.basket[id] * goodlist.allProducts[id].price;
    }
    totalPriceEl.textContent = "$ " + totalSum.toFixed(2);
  }
  //Функция отображения индикатора количества продуктов в корзине.
  showLogoCart() {
    let countLogo = Number(countBuyEl.textContent);
    if (countLogo > 0) {
      countBuyEl.style.display = "block";
    } else {
      countBuyEl.style.display = "none";
    }
  }
  //Функция увеличивает количество товаров на логотипе
  increaseCountLogo() {
    countBuyEl.textContent = Number(countBuyEl.textContent) + 1;
  }
  //Функция уменьшает количество товаров на логотипе
  decreaseCountLogo() {
    countBuyEl.textContent = Number(countBuyEl.textContent) - 1;
  }
}
let goodlist = new GoodsList();
let productsInCart = new ProductsInCart();
let cart = new Cart();

function addProduct(event) {
  let id = event.currentTarget.getAttribute("data-id");
  productsInCart.addProduct(id);
  productsInCart.renderProductInBasket();
  cart.recalculationTotalSum();
  addListenerDelete();
  cart.increaseCountLogo();
  cart.showLogoCart();
}
function removeProduct(event) {
  let id = event.currentTarget.getAttribute("data-idSpan");
  productsInCart.removeProduct(id);
  productsInCart.renderProductInBasket();
  cart.recalculationTotalSum();
  //рекурсия функции удаления
  addListenerDelete();
  cart.decreaseCountLogo();
  cart.showLogoCart();
}
//функция задает слушатели на кнопки добавления товаров
function addListener() {
  let buttons = document.querySelectorAll(".add-product");
  buttons.forEach(function (buttonEl) {
    buttonEl.addEventListener("click", addProduct);
  });
  addListenerDelete();
}
//функция задает слушатели на кнопки удаления товаров
function addListenerDelete() {
  let buttonsDelete = document.querySelectorAll(".delete-cart");
  if (buttonsDelete.length > 0) {
    buttonsDelete.forEach(function (buttonDeleteEl) {
      buttonDeleteEl.addEventListener("click", removeProduct);
    });
  }
}

//Обработчик логотипа корзины. Открывает окно корзины с классом hidden.
buttonCartEl.addEventListener("click", function () {
  cart.showHidden();
});

//основная функция
async function mainStream() {
  goodlist.createAllProducts();
  await goodlist.fetchGoods();
  goodlist.renderProductsOnPage();
  addListener();
}
mainStream();
