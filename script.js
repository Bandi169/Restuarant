// Menu data with categories — prices in QAR
const menuItems = [
  { id: 1, name: "Hummus Platter", category: "starters", description: "Creamy chickpeas, tahini, lemon, olive oil", price: 32, image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=200&fit=crop" },
  { id: 2, name: "Falafel Basket", category: "starters", description: "Crispy fried chickpea patties with tahini sauce", price: 36, image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=200&fit=crop" },
  { id: 3, name: "Lamb Tagine", category: "mains", description: "Slow-cooked lamb with apricots and preserved lemon", price: 88, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=200&fit=crop" },
  { id: 4, name: "Grilled Kofta", category: "mains", description: "Spiced lamb kofta with garlic sauce and rice", price: 72, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=200&fit=crop" },
  { id: 5, name: "Baklava", category: "desserts", description: "Layered filo pastry with nuts and honey syrup", price: 28, image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=200&fit=crop" },
  { id: 6, name: "Umm Ali", category: "desserts", description: "Egyptian bread pudding with raisins and nuts", price: 30, image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=200&fit=crop" },
  { id: 7, name: "Mint Lemonade", category: "drinks", description: "Fresh mint, lemon, sparkling water", price: 22, image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=200&fit=crop" },
  { id: 8, name: "Arabic Coffee", category: "drinks", description: "Traditional cardamom coffee", price: 18, image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=200&fit=crop" }
];

// Render menu items
function renderMenu(category = 'all') {
  const grid = document.getElementById('menu-grid');
  const filtered = category === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === category);

  grid.innerHTML = filtered.map(item => `
    <div class="menu-card fade-in">
      <img src="${item.image}" alt="${item.name}" loading="lazy">
      <div class="menu-card-body">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <span class="price">QAR ${item.price}</span>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === category);
  });

  // Observe freshly rendered cards so they animate in
  grid.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('show');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('show');
  });
});

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => renderMenu(btn.dataset.category));
});

// Reservation form
document.getElementById('reservation-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for your reservation! We will confirm shortly.');
  e.target.reset();
});

// Intersection Observer scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });

// Newsletter signup
const newsletterForm = document.querySelector('.newsletter form') || document.querySelector('.newsletter');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = newsletterForm.querySelector('input');
    if (input && input.value.trim()) {
      alert('Thank you for subscribing to the Sahara Bites newsletter!');
      input.value = '';
    }
  });
}

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Initialize
document.addEventListener('DOMContentLoaded', () => renderMenu('all'));