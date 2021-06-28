"use strict";
let navigationPage = document.querySelector(".navigation-page");
let productCardBar = `<div class="product-card-bar">
  <ul class="item-card-bar">
    <li class="item-products card-icon">
      <a class="card-link" href="single_page.html">
        <div class="picture-card">
          <img class="img-product" src="image/product-card-1.png" alt="photo" />
        </div>
        <h4 class="name-product">MANGO PEOPLE T-SHIRT</h4>
        <div class="text-rating-block">
          <p class="price">$52.00</p>
          <div class="rating-product">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
        </div>
      </a>
      <button data-id="0" class="add-product">
        <img class="cart" src="image/white-cart.svg" alt="white-cart" />
        Add to cart
      </button>
    </li>
    <li class="item-products card-icon">
      <a class="card-link" href="single_page.html">
        <div class="picture-card">
          <img class="img-product" src="image/product-card-2.png" alt="photo" />
        </div>
        <h4 class="name-product">MANGO WOMEN T-SHIRT</h4>
        <div class="text-rating-block">
          <p class="price">$55.00</p>
          <div class="rating-product">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
        </div>
      </a>
      <button data-id="1" class="add-product">
        <img class="cart" src="image/white-cart.svg" alt="white-cart" />
        Add to cart
      </button>
    </li>
    <li class="item-products card-icon">
      <a class="card-link" href="single_page.html">
        <div class="picture-card">
          <img class="img-product" src="image/product-card-3.png" alt="photo" />
        </div>
        <h4 class="name-product">MANGO PEOPLE PANTS</h4>
        <div class="text-rating-block">
          <p class="price">$35.00</p>
          <div class="rating-product">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
        </div>
      </a>
      <button data-id="2" class="add-product">
        <img class="cart" src="image/white-cart.svg" alt="white-cart" />
        Add to cart
      </button>
    </li>
    <li class="item-products card-icon">
      <a class="card-link" href="single_page.html">
        <div class="picture-card">
          <img class="img-product" src="image/product-card-4.png" alt="photo" />
        </div>
        <h4 class="name-product">MANGO PEOPLE BAGS</h4>
        <div class="text-rating-block">
          <p class="price">$44.00</p>
          <div class="rating-product">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
        </div>
      </a>
      <button data-id="3" class="add-product">
        <img class="cart" src="image/white-cart.svg" alt="white-cart" />
        Add to cart
      </button>
    </li>
    <li class="item-products card-icon">
      <a class="card-link" href="single_page.html">
        <div class="picture-card">
          <img class="img-product" src="image/product-card-5.png" alt="photo" />
        </div>
        <h4 class="name-product">MANGO PEOPLE T-SHIRT</h4>
        <div class="text-rating-block">
          <p class="price">$52.00</p>
          <div class="rating-product">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
        </div>
      </a>
      <button data-id="4" class="add-product">
        <img class="cart" src="image/white-cart.svg" alt="white-cart" />
        Add to cart
      </button>
    </li>
    <li class="item-products card-icon">
      <a class="card-link" href="single_page.html">
        <div class="picture-card">
          <img class="img-product" src="image/product-card-6.png" alt="photo" />
        </div>
        <h4 class="name-product">MANGO PEOPLE T-SHIRT</h4>
        <div class="text-rating-block">
          <p class="price">$52.00</p>
          <div class="rating-product">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
        </div>
      </a>
      <button data-id="5" class="add-product">
        <img class="cart" src="image/white-cart.svg" alt="white-cart" />
        Add to cart
      </button>
    </li>
    <li class="item-products card-icon">
      <a class="card-link" href="single_page.html">
        <div class="picture-card">
          <img class="img-product" src="image/product-card-7.png" alt="photo" />
        </div>
        <h4 class="name-product">MANGO PEOPLE T-SHIRT</h4>
        <div class="text-rating-block">
          <p class="price">$52.00</p>
          <div class="rating-product">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
        </div>
      </a>
      <button data-id="6" class="add-product">
        <img class="cart" src="image/white-cart.svg" alt="white-cart" />
        Add to cart
      </button>
    </li>
    <li class="item-products card-icon">
      <a class="card-link" href="single_page.html">
        <div class="picture-card">
          <img class="img-product" src="image/product-card-8.png" alt="photo" />
        </div>
        <h4 class="name-product">MANGO PEOPLE T-SHIRT</h4>
        <div class="text-rating-block">
          <p class="price">$52.00</p>
          <div class="rating-product">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
        </div>
      </a>
      <button data-id="7" class="add-product">
        <img class="cart" src="image/white-cart.svg" alt="white-cart" />
        Add to cart
      </button>
    </li>
    <li class="item-products card-icon">
      <a class="card-link" href="single_page.html">
        <div class="picture-card">
          <img class="img-product" src="image/product-card-9.png" alt="photo" />
        </div>
        <h4 class="name-product">MANGO PEOPLE T-SHIRT</h4>
        <div class="text-rating-block">
          <p class="price">$52.00</p>
          <div class="rating-product">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
        </div>
      </a>
      <button data-id="8" class="add-product">
        <img class="cart" src="image/white-cart.svg" alt="white-cart" />
        Add to cart
      </button>
    </li>
  </ul>
</div>;`;
navigationPage.insertAdjacentHTML("beforebegin", productCardBar);
