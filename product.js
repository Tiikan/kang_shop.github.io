
///html block code link javaScript + html + css
const casebox = document.querySelector(".casebox");
const boxsize = document.querySelector(".boxsize");
const firstCarsWidth = boxsize.querySelector(".cars").offsetWidth;
const btnArrow = document.querySelectorAll(".casebox i");
const boxsizeChildrens = [...boxsize.children];

let isStarting = false,
  isAutoPlaying = true,
  startingX,
  playScrollLeft,
  timeId;

// Get the number of cards that can fit in the carousel at once
let carsPerView = Math.round(boxsize.offsetWidth / firstCarsWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
boxsizeChildrens
  .slice(-carsPerView)
  .reverse()
  .forEach((cars) => {
    boxsize.insertAdjacentHTML("afterbegin", cars.outerHTML);
  });

// Insert copies of the first few cards to end of carousel for infinite scrolling
boxsizeChildrens.slice(0, carsPerView).forEach((cars) => {
  boxsize.insertAdjacentHTML("beforeend", cars.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
boxsize.classList.add("no-transition");
boxsize.scrollLeft = boxsize.offsetWidth;
boxsize.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
btnArrow.forEach((btn) => {
  btn.addEventListener("click", () => {
    boxsize.scrollLeft += btn.id == "lefts" ? -firstCarsWidth : firstCarsWidth;
  });
});

const startDrarg = (e) => {
  isStarting = true;
  boxsize.classList.add("dragsting");
  // Records the initial cursor and scroll position of the carousel
  startingX = e.pageX;
  playScrollLeft = boxsize.scrollLeft;
};

const dragsting = (e) => {
  if (!isStarting) return; // if isDragging is false return from here
  // Updates the scroll position of the carousel based on the cursor movement
  boxsize.scrollLeft = playScrollLeft - (e.pageX - startingX);
};

const dragStoping = () => {
  isStarting = false;
  boxsize.classList.remove("dragsting");
};

const finScroll = () => {
  // If the carousel is at the beginning, scroll to the end
  if (boxsize.scrollLeft === 0) {
    boxsize.classList.add("not-transition");
    boxsize.scrollLeft = boxsize.scrollWidth - 2 * boxsize.offsetWidth;
    boxsize.classList.remove("no-transition");
  }
  // If the carousel is at the end, scroll to the beginning
  else if (
    Math.ceil(boxsize.scrollLeft) ===
    boxsize.scrollWidth - boxsize.offsetWidth
  ) {
    boxsize.classList.add("not-transition");
    boxsize.scrollLeft = boxsize.offsetWidth;
    boxsize.classList.remove("not-transition");
  }

  // Clear existing timeout & start autoplay if mouse is not hovering over carousel
  clearTimeout(timeId);
  if (!casebox.matches(":hover")) autoPlaying();
};

const autoPlaying = () => {
  if (casebox.innerWidth < 800 || !isAutoPlaying) return; // Return if window is smaller than 800 or isAutoPlay is false
  // Autoplay the carousel after every 2500 ms
  timeId = setTimeout(() => (boxsize.scrollLeft += firstCarsWidth), 2500);
};
autoPlaying();

boxsize.addEventListener("mousedown", startDrarg);
boxsize.addEventListener("mousemove", dragsting);
document.addEventListener("mouseup", dragStoping);
boxsize.addEventListener("scroll", finScroll);
casebox.addEventListener("mouseenter", () => clearTimeout(timeId));
casebox.addEventListener("mouseleave", autoPlaying);





const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false,
  isAutoPlay = true,
  startX,
  startScrollLeft,
  timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens
  .slice(-cardPerView)
  .reverse()
  .forEach((card) => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
  });

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach((card) => {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  // Records the initial cursor and scroll position of the carousel
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return; // if isDragging is false return from here
  // Updates the scroll position of the carousel based on the cursor movement
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
};

const infiniteScroll = () => {
  // If the carousel is at the beginning, scroll to the end
  if (carousel.scrollLeft === 0) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }
  // If the carousel is at the end, scroll to the beginning
  else if (
    Math.ceil(carousel.scrollLeft) ===
    carousel.scrollWidth - carousel.offsetWidth
  ) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }

  // Clear existing timeout & start autoplay if mouse is not hovering over carousel
  clearTimeout(timeoutId);
  if (!wrapper.matches(":hover")) autoPlay();
};

const autoPlay = () => {
  if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
  // Autoplay the carousel after every 2500 ms
  timeoutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth), 900);
};
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);

// javadesing code html block




// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("bx-search" ,"bx-x");
  }else {
    searchBox.classList.replace("bx-x" ,"bx-search");
  }
});

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}
///siderscrull bar
const languages = [
    {
      category: ["mobile"],
      logo: "photo/oppo reno 8z.jpg",
      title: "Oppo Reno 8Z 5G ",
      textplay: "$389.00",
      button: "Oder Now",
    },
    {
      category: ["tablet"],
      logo: "photo/taple_lanovo.png",
      title: "Tablet Lanovo",
      textplay: "Tab M9. 3.0. (2). $249.00",
      button: "Oder Now",
    },
    {
      category: ["smart"],
      logo: "photo/smartwarch.jpg",
      title: "TOZO S3 Smart warch",
      textplay: "$33.99",
      button: "Oder Now",
    },
    {
      category: ["laptob"],
      logo: "photo/asus-rog-strix-g1517.jpg",
      title: "ROG Strix Scar 17X 3D (2023)",
      textplay: "$1300.00",
      button: "Oder Now",
    },
    {
      category: ["mobile"],
      logo: "photo/ihpne 14 promax1.jpg",
      title: "Iphone 14 Pro Max",
      textplay: "$700.00",
      button: "Oder Now",
    },
    {
      category: ["mobile"],
      logo: "photo/vivo Y50.jpg",
      title: "Vivo Y50",
      textplay: "$400.00",
      button: "Oder Now",
    },
    {
      category: ["laptob"],
      logo: "photo/Macbook Air laptop.jpg",
      title: "Macbook Air",
      textplay: "$1300.00",
      button: "Oder Now",
    },
    {
      category: ["laptob"],
      logo: "photo/msi katana gf66 11ug-220 laptop.jpg",
      title: "MSI Kanata GF66 11ug-220",
      textplay: "$900.00",
      button: "Oder Now",
    },
    {
      category: ["smart"],
      logo: "photo/Samsung Galaxy Gear Warch.jpg",
      title: "Samsung Galaxy Gear",
      textplay: "$200.00",
      button: "Oder Now",
    },
    {
      category: ["smart"],
      logo: "photo/huawei-watch-fit-2-smart-watch.jpg",
      title: "Huawei watch Fit 2",
      textplay: "$300.00",
      button: "Oder Now",
    },
    {
      category: ["tablet"],
      logo: "photo/Galaxy Tab s9.jpg",
      title: "Galaxy Tab S9",
      textplay: "$500.00",
      button: "Oder Now",
    },
    {
      category: ["mobile"],
      logo: "photo/iphone 11.jpg",
      title: "Iphon 11",
      textplay: "$500.00",
      button: "Oder Now",
    },
    {
      category: ["mobile"],
      logo: "photo/vivo x90 5g.jpg",
      title: "Vivo X90 5G",
      textplay: "$400.00",
      button: "Oder Now",
    },
    {
      category: ["laptob"],
      logo: "photo/lenovo ldeapad Gaming latop.jpg",
      title: "Lenovo Ldeapad Gaming",
      textplay: "$850.00",
      button: "Oder Now",
    },
    {
      category: ["laptob"],
      logo: "photo/Asus tuf A15.jpg",
      title: "ASUS TUF A15",
      textplay: "$719.00",
      button: "Oder Now",
    },
    {
      category: ["smart"],
      logo: "photo/Apple extend warch.jpg",
      title: "Apple Extend Warch",
      textplay: "$200.00",
      button: "Oder Now",
    },
    {
      category: ["smart"],
      logo: "photo/Gear Geek.jpg",
      title: "Gear Geek",
      textplay: "$150.00",
      button: "Oder Now",
    },
    {
      category: ["tablet"],
      logo: "photo/Lenovo Tab gen 2.jpg",
      title: "Lenovo Tab Gen 2",
      textplay: "$500.00",
      button: "Oder Now",
    },
    {
      category: ["smart"],
      logo: "photo/Realme Watch.jpg",
      title: "Realme watch",
      textplay: "$150.00",
      button: "Oder Now",
    },
    {
      category: ["tablet"],
      logo: "photo/Lenovo_Tab_M10_Plus_Gen_3_tablet_sale.jpg",
      title: "Lenovo Tab M10 Plus Gen 3",
      textplay: "$500.00",
      button: "Oder Now",
    },
    {
      category: ["mobile"],
      logo: "photo/iphone xr.jpg",
      title: "Iphone XR",
      textplay: "$500.00",
      button: "Oder Now",
    },
    {
      category: ["smart"],
      logo: "photo/oppo warch.jpg",
      title: "Oppo watch",
      textplay: "$250.00",
      button: "Oder Now",
    },
    {
      category: ["laptob"],
      logo: "photo/Dell Vostro 3510 laptob.jpg",
      title: "Dell Vostro 3510",
      textplay: "$399.00",
      button: "Oder Now",
    },
    {
      category: ["laptob"],
      logo: "photo/DELL inspiron 15 3520 laptob.jpg",
      title: "Dell Inspiron 15 3520",
      textplay: "$600.00",
      button: "Oder Now",
    },
    {
      category: ["mobile"],
      logo: "photo/poco.png",
      title: "Poco",
      textplay: "$300.00",
      button: "Oder Now",
    },
    {
      category: ["smart"],
      logo: "photo/Nokia G300 G50 XR20 warch.jpg",
      title: "Nokia G300 G50 XR20 warch",
      textplay: "$350.00",
      button: "Oder Now",
    },
    {
      category: ["mobile"],
      logo: "photo/somsung.png",
      title: "Samsung",
      textplay: "$450.00",
      button: "Oder Now",
    },
    {
      category: ["smart"],
      logo: "photo/lige Smartwatch.jpg",
      title: "Lige Smartwatch",
      textplay: "$250.00",
      button: "Oder Now",
    },
    {
      category: ["laptob"],
      logo: "photo/Asus flow Z13.jpg",
      title: "Asus Flow Z13",
      textplay: "$1000.00",
      button: "Oder Now",
    },
    {
      category: ["smart"],
      logo: "photo/Sony Smart warch.jpg",
      title: "Sony Smart watch",
      textplay: "$100.00",
      button: "Oder Now",
    },
    {
      category: ["laptob"],
      logo: "photo/Mencari Gaming laptop.jpg",
      title: "Mencari Gaming",
      textplay: "$1100.00",
      button: "Oder Now",
    },
    {
      category: ["laptob"],
      logo: "photo/Macbook Pro 15.jpg",
      title: "Macbook Pro 15",
      textplay: "$2000.00",
      button: "Oder Now",
    },
    {
      category: ["tablet"],
      logo: "photo/realme Pad Tablet.jpg",
      title: "Realme Pad",
      textplay: "$550.00",
      button: "Oder Now",
    },
    {
      category: ["laptob"],
      logo: "photo/Microsoft laptob.jpg",
      title: "Microsoft",
      textplay: "$700.00",
      button: "Oder Now",
    },
    {
      category: ["tablet"],
      logo: "photo/Sunny 10 Gray Tablet.jpg",
      title: "Suny 10 Gray ",
      textplay: "$450.00",
      button: "Oder Now",
    },
    {
      category: ["mobile"],
      logo: "photo/Tecno Spark phone.jpg",
      title: "Tecno Spark",
      textplay: "$250.00",
      button: "Oder Now",
    },
    {
      category: ["mobile"],
      logo: "photo/Tecno phone.jpg",
      title: "Tecno",
      textplay: "$200.00",
      button: "Oder Now",
    },
    {
      category: ["tablet"],
      logo: "photo/taplat.png",
      title: "Taplat ",
      textplay: "$450.00",
      button: "Oder Now",
    },
    {
      category: ["laptob"],
      logo: "photo/Surface Laptob.jpg",
      title: "Microsoft Suface",
      textplay: "$750.00",
      button: "Oder Now",
    },
    {
      category: ["mobile"],
      logo: "photo/vivo Y50.jpg",
      title: "Vivo Y50",
      textplay: "$350.00",
      button: "Oder Now",
    },
    {
      category: ["mobile"],
      logo: "photo/iphone 13 pro max1.jpg",
      title: "Iphone 13 Pro Max",
      textplay: "$650.00",
      button: "Oder Now",
    },
    {
      category: ["mobile"],
      logo: "photo/vivo y35.jpg",
      title: "Vivo Y35",
      textplay: "$400.00",
      button: "Oder Now",
    },
    {
      category: ["laptob"],
      logo: "photo/Acer Aspire 5 laptob.jpg",
      title: "Acer Aspire 5",
      textplay: "$400.00",
      button: "Oder Now",
    },
    {
      category: ["mobile"],
      logo: "photo/vivo v23 5g.jpg",
      title: "Vivo V23",
      textplay: "$350.00",
      button: "Oder Now",
    },
    {
      category: ["laptob"],
      logo: "photo/Acer announces laptob.jpg",
      title: "Acer Announces",
      textplay: "$500.00",
      button: "Oder Now",
    },
    {
      category: ["laptob"],
      logo: "photo/Macbook Pro M1.jpg",
      title: "Macbook Pro M1",
      textplay: "$1500.00",
      button: "Oder Now",
    },
    {
      category: ["tablet"],
      logo: "photo/Maxim Ultra Slim table.jpg",
      title: "Maxim Ultra Slim",
      textplay: "$750.00",
      button: "Oder Now",
    },
    {
      category: ["mobile"],
      logo: "photo/vivo v27.jpg",
      title: "Vivo V27",
      textplay: "$350.00",
      button: "Oder Now",
    },
    {
      category: ["mobile"],
      logo: "photo/vivo v29e.jpg",
      title: "Vivo V29E",
      textplay: "$300.00",
      button: "Oder Now",
    },
    {
      category: ["mobile"],
      logo: "photo/iphone xs max.jpg",
      title: "Iphone Xs Max",
      textplay: "$450.00",
      button: "Oder Now",
    },
    {
      category: ["tablet"],
      logo: "photo/Ipad Air Apple puts new tablet.jpg",
      title: "Ipad Air Apple",
      textplay: "$650.00",
      button: "Oder Now",
    },
    {
      category: ["tablet"],
      logo: "photo/Galaxy Tab s9.jpg",
      title: "Galaxy Tab s9",
      textplay: "$710.00",
      button: "Oder Now",
    },
  ];
  const cardContainer = document.querySelector(".boxs-flixe");
  const listBtn = document.querySelector(".list");
  const button = document.querySelectorAll(".item");
  let value = "all";
  displayType(languages);
  button.forEach((btn) => {
    btn.addEventListener("click", function (click) {
      const check = click.currentTarget;
      if (check.classList.contains("active")) {
        return null;
      } else {
        for (let i = 0; i < button.length; i++) {
          button[i].classList.remove("active");
        }
        check.classList.add("active");
      }
      const title = check.textContent;
      const splitTitle = title.split(" ");
      value = splitTitle[0].toLowerCase();
      const filterLanguages = languages.filter((each) => {
        return (
          each.category[0] == value ||
          each.category[1] == value ||
          each.category[2] == value
        );
      });
      if (value == "all") {
        displayType(languages);
      } else {
        displayType(filterLanguages);
      }
    });
  });
  function displayType(condition) {
    const display = condition
      .map(function (item) {
        return `<article class="boxs">
          <img class="logo" src="${item.logo}" />
          <h2 class="titlee">${item.title}</h2>
          <h3 class="textplay">${item.textplay}</h3>
          <h3 class="click"><a href="#">${item.button}</a></h3>
          </article>`;
      })
      .join("");
    cardContainer.innerHTML = display;
  }
  //srull bar 2
  