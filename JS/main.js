// Handle Mobile Menu & Overlay

let mobileMenu = document.querySelector("header nav .mobile-menu");
let barsIcon = document.querySelector("header nav .bars");
let closeIcons = document.querySelectorAll(".closeIcon");
let overlay = document.querySelector("header .overlay");
let imagePreviewHolder = document.querySelector(".product .image-preview-holder");

barsIcon.addEventListener("click", () => {
  mobileMenu.classList.add("show");
  overlay.classList.add("show");
})

closeIcons.forEach(closeIcon => {
  closeIcon.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
    overlay.classList.remove("show");
    imagePreviewHolder.classList.remove("show");
  })
})

// Handle Images show & slider

let counter = 0;
let previewCounter = 0
let imageThumbnail = document.querySelector(".product .product-images .thumbnail-image img");
let images = document.querySelectorAll(".product .product-images .images-show li");
let leftArrow = document.querySelector(".product .product-images .thumbnail-image .left");
let rightArrow = document.querySelector(".product .product-images .thumbnail-image .right");
let imagePreviewThumbnail = document.querySelector(".product .image-preview-holder .image-preview .thumbnail-image img");
let leftPreviewArrow = document.querySelector(".product .image-preview-holder .image-preview .thumbnail-image .left");
let rightPreviewArrow = document.querySelector(".product .image-preview-holder .image-preview .thumbnail-image .right");
let previewImages = document.querySelectorAll(".product .image-preview-holder .image-preview .images-show li");
let imageArr = [
  "./Images/image-product-1.jpg",
  "./Images/image-product-2.jpg",
  "./Images/image-product-3.jpg",
  "./Images/image-product-4.jpg"
];

images.forEach((img, i) => {
  img.addEventListener("click", () => {
    counter = i;
    images.forEach(img => {
      img.classList.remove("active");
    });
    img.classList.add("active");
    imageThumbnail.setAttribute("src", img.children[0].getAttribute("src"));
  })
})

previewImages.forEach((img, i) => {
  img.addEventListener("click", () => {
    previewCounter = i;
    previewImages.forEach(img => {
      img.classList.remove("active");
    });
    img.classList.add("active");
    imagePreviewThumbnail.setAttribute("src", img.children[0].getAttribute("src"));
  })
})

function imageActivated() {
  images.forEach((img, i) => {
    if(i === counter) {
      images.forEach(img => {
        img.classList.remove("active");
      });
      img.classList.add("active");
    }
  })
}

function previewImageActivated() {
  previewImages.forEach((img, i) => {
    if(i === previewCounter) {
      previewImages.forEach(img => {
        img.classList.remove("active");
      });
      img.classList.add("active");
    }
  })
}

function decrease() {
  counter > 0 ? --counter : counter;
  imageThumbnail.setAttribute("src", imageArr[counter]);
  imageActivated();
}

function previewDecrease() {
  previewCounter > 0 ? --previewCounter : previewCounter;
  imagePreviewThumbnail.setAttribute("src", imageArr[previewCounter]);
  previewImageActivated();
}

function increase() {
  counter < imageArr.length - 1 ? ++counter : counter;
  imageThumbnail.setAttribute("src", imageArr[counter]);
  imageActivated();
}

function previewIncrease() {
  previewCounter < imageArr.length - 1 ? ++previewCounter : previewCounter;
  imagePreviewThumbnail.setAttribute("src", imageArr[previewCounter]);
  previewImageActivated();
}

leftArrow.addEventListener("click", () => {
  decrease();
})

leftPreviewArrow.addEventListener("click", () => {
  previewDecrease();
})

rightArrow.addEventListener("click", () => {
  increase();
})

rightPreviewArrow.addEventListener("click", () => {
  previewIncrease();
})

// Handle Image Preview

imageThumbnail.addEventListener("click", () => {
  imagePreviewHolder.classList.add("show");
});

// Handle Cart Counter

let increaseProductNumber = document.querySelector(".product .product-info .cart-process .counter .increase");
let decreaseProductNumber = document.querySelector(".product .product-info .cart-process .counter .decrease");
let numberOfProduct = document.querySelector(".product .product-info .cart-process .counter .count-number");
let countValue = 0;
let addCartBtn = document.querySelector(".product .product-info .cart-process .main-btn");
let cartIcon = document.querySelector("header .icons .cart-icon > span");
let emptyList = document.querySelector("header .cart-list-holder .cart-list > h3");
let cartContent = document.querySelector("header .cart-list-holder .cart-list > .content");
let productNmubers = document.querySelector("header .cart-list-holder .cart-list > .content .product-holder .product-item .product-info span:nth-of-type(1)");
let productResult = document.querySelector("header .cart-list-holder .cart-list > .content .product-holder .product-item .product-info span:nth-of-type(2)");
let removeProducts = document.querySelector("header .cart-list-holder .cart-list > .content .product-holder .product-item > i");

removeProducts.addEventListener("click", () => {
  countValue = 0;
  numberOfProduct.textContent = 0;
  removeZeroValue();
  cartProductNumbers();
  handleCartList();
})

function calculateResult() {
  productNmubers.textContent = `$125.00 x ${countValue}`;
  productResult.textContent = `$${125 * countValue}.00`;
}

function handleCartList() {
  if(countValue !== 0) {
    emptyList.classList.add("hide");
    cartContent.classList.add("show");
  } else {
    emptyList.classList.remove("hide");
    cartContent.classList.remove("show");
  }
}

addCartBtn.addEventListener("click", () => {
  handleCartList();
  calculateResult();
})

function cartProductNumbers() {
  cartIcon.textContent = countValue;
}

function removeZeroValue() {
  if(countValue == 0) {
    cartIcon.classList.remove("show");
  } else {
    cartIcon.classList.add("show");
  }
}

increaseProductNumber.addEventListener("click", () => {
  if(+numberOfProduct.textContent <= 9) {
    numberOfProduct.textContent = +numberOfProduct.textContent + 1
    countValue = +numberOfProduct.textContent;
  }
  cartProductNumbers();
  removeZeroValue();
})

decreaseProductNumber.addEventListener("click", () => {
  if(+numberOfProduct.textContent > 0) {
    numberOfProduct.textContent = +numberOfProduct.textContent - 1
    countValue = +numberOfProduct.textContent;
  }
  cartProductNumbers();
  removeZeroValue();
})

// Handle Shopping Cart

let shoppingCart = document.querySelector("header .icons .cart-icon .shopping-cart");
let cartList = document.querySelector("header .cart-list-holder");

shoppingCart.addEventListener("click", () => {
  cartList.classList.toggle("show");
})

