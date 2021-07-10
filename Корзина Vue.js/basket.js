"use strict";
const API_URL =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";
const app = new Vue({
  el: "#app",
  data: {
    goods: [],
    allProducts: [
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
    ],
    filteredGoods: [],
    searchLine: "",
    cartShow: false,
    basket: {},
    productsInBasket: [],
    cartCountShow: false,
    countBuy: 0,
    totalPrice: 0,
  },
  methods: {
    //функция считывания данных с сервера
    makeGETRequest(url, callback) {
      var xhr;

      if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
      } else if (window.ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
      }

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          callback(xhr.responseText);
        }
      };

      xhr.open("GET", url, true);
      xhr.send();
    },
    //функция фильтрации при поиске
    filterProducts() {
      const reg = new RegExp(this.searchLine, "i");
      this.filteredGoods = this.allProducts.filter((good) =>
        good.product_name.match(reg)
      );
    },
    //функция рендера товаров в корзине
    renderProductToBasket() {
      this.productsInBasket = [];
      for (let i = 0; i < this.allProducts.length; i++) {
        if (
          this.allProducts[i].id_product in this.basket &&
          this.basket[this.allProducts[i].id_product] > 0
        ) {
          this.productsInBasket.push(this.allProducts[i]);
        }
      }
    },
    //Функция добавления и увеличения количества товаров в корзине
    addProduct(id) {
      this.cartCountShow = true;
      this.countBuy++;
      if (!(id in this.basket)) {
        this.basket[id] = 1;
      } else {
        this.basket[id]++;
      }
      this.renderProductToBasket();
    },
    //Функция удаления и уменьшения количества товаров в корзине
    deleteProduct(id) {
      this.countBuy--;
      if (id in this.basket) {
        this.basket[id]--;
      }
      this.renderProductToBasket();
    },
  },
  mounted() {
    this.makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
      this.goods = JSON.parse(goods);
      for (let i = 0; i < this.goods.length; i++) {
        this.goods[i].image = `image/product-card-${
          this.allProducts.length + 1
        }.png`;
        this.goods[i].id_product = this.allProducts.length;
        this.allProducts.push(this.goods[i]);
      }
      this.filteredGoods = this.allProducts;
    });
  },
  computed: {
    //функция, показывающая количество товаров в корзине
    countBuyVision: function () {
      if (this.countBuy == 0) {
        this.cartCountShow = false;
      }
      return this.countBuy;
    },
    //функция подсчета общей стоимости корзины
    createTotalPrice: function () {
      this.totalPrice = 0;
      for (let i = 0; i < this.productsInBasket.length; i++) {
        this.totalPrice +=
          this.productsInBasket[i].price *
          this.basket[this.productsInBasket[i].id_product];
      }
      return this.totalPrice.toFixed(2);
    },
  },
});
