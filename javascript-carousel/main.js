var CarouselObj = new Carousel();

var counter = 0;

var int = setInterval(function() {
  CarouselObj.imageSwap();
}, 3000);

function Carousel(images, dots, left, right, holder, dotParent) {
  this.images = ["images/025.png", "images/001.png", "images/004.png", "images/007.png", "images/039.png"];
  this.dots = [document.querySelector('#dot-one'), document.querySelector('#dot-two'),
    document.querySelector('#dot-three'), document.querySelector('#dot-four'), document.querySelector('#dot-five')];
  this.left = document.querySelector('#left');
  this.right = document.querySelector('#right');
  this.holder = document.querySelector('.pikachu');
  this.dotParent = document.querySelector('.dot-image');
}

Carousel.prototype.imageSwap = function() {
  counter++
  if (counter === 5) {
    counter = 0;
    CarouselObj.dots[4].setAttribute("class", "far fa-circle");
  } else {
    CarouselObj.dots[counter - 1].setAttribute("class", "far fa-circle");
  }
  CarouselObj.holder.setAttribute("src", CarouselObj.images[counter]);
  CarouselObj.dots[counter].setAttribute("class", "fas fa-circle");
}

Carousel.prototype.imageSwapReverse = function() {
  counter--;
  if (counter === -1 || counter === 4) {
    counter = 4;
    CarouselObj.dots[0].setAttribute("class", "far fa-circle");
  } else {
    CarouselObj.dots[counter + 1].setAttribute("class", "far fa-circle");
  }
  CarouselObj.holder.setAttribute("src", CarouselObj.images[counter]);
  CarouselObj.dots[counter].setAttribute("class", "fas fa-circle");
}

Carousel.prototype.dotSwap = function(event) {
  for (var i = 0; CarouselObj.dots.length > i; i++) {
    if (event.target === CarouselObj.dots[i]) {
      CarouselObj.dots[counter].setAttribute("class", "far fa-circle");
      CarouselObj.holder.setAttribute("src", CarouselObj.images[i]);
      CarouselObj.dots[i].setAttribute("class", "fas fa-circle");
      counter = i;
    }
  }
}

CarouselObj.left.addEventListener("click", function() {
  clearInterval(int);
  CarouselObj.imageSwapReverse();
  int = setInterval(function() {
    CarouselObj.imageSwap();
  }, 3000);
});

CarouselObj.right.addEventListener("click", function() {
  clearInterval(int);
  CarouselObj.imageSwap();
  int = setInterval(function () {
    CarouselObj.imageSwap();
  }, 3000);
});

CarouselObj.dotParent.addEventListener("click", function() {
  clearInterval(int);
  CarouselObj.dotSwap(event);
  int = setInterval(function () {
    CarouselObj.imageSwap();
  }, 3000);
});
