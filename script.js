// navbar pop up script
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    navbar.style.top = "-135px";
  } else {
    // Scrolling up
    navbar.style.top = "0";
  }

  lastScrollTop = scrollTop;
});

// searchbar script
const searchBox = document.getElementById("searchBox");
const searchInput = document.getElementById("searchInput");
const searchIcon = document.getElementById("searchIcon");

searchIcon.addEventListener("click", () => {
  searchBox.classList.add("active");
  searchInput.focus();
});

document.addEventListener("click", (e) => {
  if (!searchBox.contains(e.target)) {
    searchBox.classList.remove("active");
  }
});



// shoe slider script


let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

setInterval(() => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}, 4500);

// Rotating text
const texts = ["Jump Higher", "Run Faster", "Fly in Style", "Feel the Future", "Elite Comfort"];
let currentText = 0;

const element = document.getElementById("rotating-text");

function changeText() {
  // Fade out
  element.style.opacity = 0;

  // Wait for fade out duration (.5s here)
  setTimeout(() => {
    // Change text when invisible
    currentText = (currentText + 1) % texts.length;
    element.textContent = texts[currentText];

    // Fade in
    element.style.opacity = 1;
  }, 500);  // same as CSS transition duration
}

// Initial text set (optional)
element.textContent = texts[currentText];

// Change text every 4.5 seconds (adjust to keep enough time for fade in/out)
setInterval(changeText, 4500);




// mens sorter

const shoes = [
  {
    title: "Air Max 270",
    category: "sneakers",
    price: "$120",
    img:"https://images.unsplash.com/photo-1559050993-d4e4fbf11769?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNuZWFrZXJzfGVufDB8MnwwfHx8MA%3D%3D" 
  },
  {
    title: "Combat Boot",
    category: "boots",
    price: "$140",
    img: "https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Canvas Casual",
    category: "casuals",
    price: "$60",
    img: "https://images.unsplash.com/photo-1518894781321-630e638d0742?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNob2VzfGVufDB8MnwwfHx8MA%3D%3D"
  },
  {
    title: "Oxford Classic",
    category: "formals",
    price: "$95",
    img: "https://images.unsplash.com/photo-1561808843-7adeb9606939?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8MnwwfHx8MA%3D%3D"
  },
  {
    title: "Brown Loafers",
    category: "loafers",
    price: "$75",
    img: "https://images.unsplash.com/photo-1615979474401-8a6a344de5bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9hZmVyc3xlbnwwfDJ8MHx8fDA%3D"
  },
  {
    title: "White Street Sneakers",
    category: "sneakers",
    price: "$130",
    img: "https://images.unsplash.com/photo-1643535170091-319c6fe2e191?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHNuZWFrZXJzfGVufDB8MnwwfHx8MA%3D%3D"
  },
  {
    title: "Air Max 270",
    category: "sneakers",
    price: "$120",
    img:"https://images.unsplash.com/photo-1559050993-d4e4fbf11769?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNuZWFrZXJzfGVufDB8MnwwfHx8MA%3D%3D" 
  },
  {
    title: "Combat Boot",
    category: "boots",
    price: "$140",
    img: "https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Canvas Casual",
    category: "casuals",
    price: "$60",
    img: "https://images.unsplash.com/photo-1518894781321-630e638d0742?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNob2VzfGVufDB8MnwwfHx8MA%3D%3D"
  },
  {
    title: "Oxford Classic",
    category: "formals",
    price: "$95",
    img: "https://images.unsplash.com/photo-1561808843-7adeb9606939?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8MnwwfHx8MA%3D%3D"
  },
  {
    title: "Brown Loafers",
    category: "loafers",
    price: "$75",
    img: "https://images.unsplash.com/photo-1615979474401-8a6a344de5bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9hZmVyc3xlbnwwfDJ8MHx8fDA%3D"
  },
  {
    title: "White Street Sneakers",
    category: "sneakers",
    price: "$130",
    img: "https://images.unsplash.com/photo-1643535170091-319c6fe2e191?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHNuZWFrZXJzfGVufDB8MnwwfHx8MA%3D%3D"
  }
];

const container = document.getElementById('shoeContainer');

function displayShoes() {
  container.innerHTML = "";
  shoes.forEach(shoe => {
    const div = document.createElement('div');
    div.classList.add('shoe-card');
    div.setAttribute('data-category', shoe.category);
      div.innerHTML = `
      <img src="${shoe.img}" alt="${shoe.title}">
      <h3>${shoe.title}</h3>
      <p>Category: ${shoe.category.charAt(0).toUpperCase() + shoe.category.slice(1)}</p>
      <div class="price">${shoe.price}</div>
    `;
    container.appendChild(div);
  });
}

function filterShoes(type, btn) {
  const cards = document.querySelectorAll('.shoe-card');
  cards.forEach(card => {
    if(type === "all" || card.getAttribute('data-category') === type) {
      card.style.display = "block";  // show matched
    } else {
      card.style.display = "none";   // hide unmatched
    }
  });

  // Active button styling
  document.querySelectorAll('.filter-btn').forEach(button => button.classList.remove('active'));
  btn.classList.add('active');
}

window.onload = () => {
  displayShoes();
  filterShoes('all', document.querySelector('.filter-btn.active'));
};





// womens

const womensFootwearCollection = [
  {
    name: "Stiletto Heels",
    type: "heels",
    cost: "$150",
    image: "https://images.unsplash.com/photo-1584473457417-bd0afe798ae1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fHdvbWVuJTIwZm9vdHdlYXJzfGVufDB8fDB8fHww"
  },
  {
    name: "Classic Flats",
    type: "flats",
    cost: "$80",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHdvbWVuJTIwZm9vdHdlYXJzfGVufDB8fDB8fHww"
  },
  {
    name: "Leather Boots",
    type: "boots",
    cost: "$160",
    image: "https://plus.unsplash.com/premium_photo-1671718111927-4b40f0ca9240?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fHdvbWVuJTIwZm9vdHdlYXJzfGVufDB8fDB8fHww"
  },
  {
    name: "Beach Sandals",
    type: "sandals",
    cost: "$45",
    image: "https://plus.unsplash.com/premium_photo-1671028365097-104512e9c1a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvbWVuJTIwZm9vdHdlYXJzfGVufDB8fDB8fHww"
  },
  {
    name: "Suede Heels",
    type: "heels",
    cost: "$170",
    image: "https://images.unsplash.com/photo-1670938258821-2956d4ce9c9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29tZW4lMjBmb290d2VhcnN8ZW58MHx8MHx8fDA%3D"
  }
];

const wfootGrid = document.getElementById('wfootGrid');

function loadWfootItems() {
  wfootGrid.innerHTML = "";
  womensFootwearCollection.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('wfoot-card');
    card.setAttribute('data-type', item.type);
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>Category: ${item.type.charAt(0).toUpperCase() + item.type.slice(1)}</p>
      <div class="wfoot-price">${item.cost}</div>
    `;
    wfootGrid.appendChild(card);
  });
}

function wfootFilter(category, btn) {
  const cards = document.querySelectorAll('.wfoot-card');
  cards.forEach(card => {
    if(category === 'all' || card.getAttribute('data-type') === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });

  // Remove active class from all buttons
  document.querySelectorAll('.wfoot-filter-btn').forEach(button => button.classList.remove('active'));

  // Add active class to clicked button
  btn.classList.add('active');
}

// Initialize on page load
window.addEventListener('load', () => {
  loadWfootItems();
  wfootFilter('all', document.querySelector('.wfoot-filter-btn.active'));
});



// search 


const searchinputwork = document.getElementById('searchInput');

function filterCards(query) {
  const menCards = Array.from(document.querySelectorAll('#shoeContainer .shoe-card'));
  const womenCards = Array.from(document.querySelectorAll('#wfootGrid .wfoot-card'));

  menCards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    card.style.display = title.includes(query) ? 'block' : 'none';
  });

  womenCards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    card.style.display = title.includes(query) ? 'block' : 'none';
  });
}

function checkAndShowNoResults(query) {
  const menCards = document.querySelectorAll('#shoeContainer .shoe-card');
  const womenCards = document.querySelectorAll('#wfootGrid .wfoot-card');

  const menHasVisible = Array.from(menCards).some(card => card.style.display !== 'none');
  const womenHasVisible = Array.from(womenCards).some(card => card.style.display !== 'none');

  document.getElementById('noResultsMen').style.display = menHasVisible ? 'none' : 'block';
  document.getElementById('noResultsWfoot').style.display = womenHasVisible ? 'none' : 'block';

  return { menHasVisible, womenHasVisible };
}

function scrollToFirstMatch(query, results) {
  const allCards = [
    ...document.querySelectorAll('#shoeContainer .shoe-card'),
    ...document.querySelectorAll('#wfootGrid .wfoot-card')
  ];

  for (const card of allCards) {
    const title = card.querySelector('h3').textContent.toLowerCase();
    if (title.includes(query)) {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
  }

  // If no visible cards in either section, scroll to no-results message
  if (!results.menHasVisible && !results.womenHasVisible) {
    // Scroll to one of the visible "no results" elements
    const noResultEl = document.getElementById('noResultsMen').style.display !== 'none'
      ? document.getElementById('noResultsMen')
      : document.getElementById('noResultsWfoot');
    
    noResultEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

// Typing filters only
searchinputwork.addEventListener('input', () => {
  filterCards(searchinputwork.value.toLowerCase());
});

// Enter triggers scroll + no-results check
searchinputwork.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    const query = searchinputwork.value.toLowerCase();
    const results = checkAndShowNoResults(query);
    scrollToFirstMatch(query, results);
  }
});


