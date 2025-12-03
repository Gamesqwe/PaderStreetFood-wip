const PLACEHOLDER_IMG = '\coming soon.jpeg';
const menuData = [
  // Pizza
  {
    category: 'pizza',
    name: 'Pizza Margherita',
    description: 'Mit Tomatensoße & Käse',
    image: PLACEHOLDER_IMG,
    sizes: { "22er": 5.50, "28er": 7.50 }
  },
  {
    category: 'pizza',
    name: 'Pizza Funghi',
    description: 'Mit Tomatensoße, Käse & Pilzen',
    image: PLACEHOLDER_IMG,
    sizes: { "22er": 6.00, "28er": 8.50 }
  },
  {
    category: 'pizza',
    name: 'Pizza Salami',
    description: 'Mit Tomatensoße, Käse & Truthahnsalami',
    image: PLACEHOLDER_IMG,
    sizes: { "22er": 6.00, "28er": 8.50 }
  },
  {
    category: 'pizza',
    name: 'Pizza Schinken',
    description: 'Mit Tomatensoße, Käse & Putenschnken',
    image: PLACEHOLDER_IMG,
    sizes: { "22er": 6.00, "28er": 8.50 }
  },
  {
    category: 'pizza',
    name: 'Pizza Brokkoli',
    description: 'Mit Tomatensoße, Käse & Brokkoli',
    image: PLACEHOLDER_IMG,
    sizes: { "22er": 6.00, "28er": 8.50 }
  },
  {
    category: 'pizza',
    name: 'Pizza Thunfisch',
    description: 'Mit Tomatensoße, Käse, Thunfisch & Zwiebeln',
    image: PLACEHOLDER_IMG,
       sizes: { "22er": 6.50, "28er": 9.00 }
  },
  {
    category: 'pizza',
    name: 'Pizza Diavolo',
    description: 'Mit Tomatensoße, Käse,Truthahnsalami, Tomaten, Champignons & Peperoni',
    image: PLACEHOLDER_IMG,
    sizes: { "22er": 7.00, "28er": 10.00 }
  },
  {
    category: 'pizza',
    name: 'Pizza Hollondaise',
    description: 'Mit Tomatensoße, Käse, Hähnchenbrust, Brokkoli, Mais & Sauce Hollondaise',
    image: PLACEHOLDER_IMG,
    sizes: { "22er": 7.00, "28er": 10.00 }
  },
  {
    category: 'pizza',
    name: 'Unsere Pizza',
    description: 'Mit Tomatensoße, Käse, Drehspießfleisch, Zwiebeln, Mais & Sauce Hollondaise',
    image: PLACEHOLDER_IMG,
    sizes: { "22er": 7.00, "28er": 10.00 }
  },
  {
    category: 'pizza',
    name: 'Pizza Sucuk',
    description: 'Mit Tomatensoße, Käse, Knoblauchwurst & Peperoni',
    image: PLACEHOLDER_IMG,
    sizes: { "22er": 7.00, "28er": 10.00 }
  },

  // Snacks
  {
    category: 'snacks',
    name: 'Pommes',
    description: 'Knusprige goldgelbe Pommes',
    image: PLACEHOLDER_IMG,
    sizes: { "klein": 2.50 , "Groß": 4.00}
  },
  {
    category: 'snacks',
    name: 'Bratwurst',
    description: 'Qualitäts-Wurst vom Rind',
    image: PLACEHOLDER_IMG,
    sizes: { "Standard": 5.00 }
  },
  {
    category: 'snacks',
    name: 'Currywurst',
    description: 'Qualitäts-Wurst vom Rind',
    image: PLACEHOLDER_IMG,
    sizes: { "Standard": 6.00 }
  },
  {
    category: 'snacks',
    name: 'Mantaplatte',
    description: 'Qualitäts-Wurst vom Rind mit Pommes',
    image: PLACEHOLDER_IMG,
    sizes: { "Standard": 8.00 }
  },
  {
    category: 'snacks',
    name: '7 Chicken Nuggets',
    description: 'mit Pommes',
    image: PLACEHOLDER_IMG,
    sizes: { "Standard": 8.00 }
  },
  {
    category: 'snacks',
    name: 'Schnitzel &quot;Wiener Art&quot;',
    description: '180g Geflügel-Schnitzel mit Pommes & Salat',
    image: PLACEHOLDER_IMG,
    sizes: { "Standard": 9.00 }
  },
  

  // Burger
  {
    category: 'burger',
    name: 'Hamburger',
    description: 'vom Rind 120g',
    image: PLACEHOLDER_IMG,
    sizes: { "Einzeln": 6.00, "Menü": 10.00 }
  },
  {
    category: 'burger',
    name: 'Cheeseburger',
    description: 'vom Rind 120g',
    image: PLACEHOLDER_IMG,
    sizes: { "Einzeln": 7.00, "Menü": 11.00 }
  },
  {
    category: 'burger',
    name: 'Crispy Chickenburger',
    description: 'Crispy-Chicken Patty 135g',
    image: PLACEHOLDER_IMG,
    sizes: { "Einzeln": 7.00, "Menü": 11.00 }
  },

  // Drehspieß
  {
    category: 'drehspieß',
    name: 'Drehspieß Tasche',
    description: 'mit Salat & eine Sauce nach Wahl im Fladenbrot',
    image: PLACEHOLDER_IMG,
    sizes: { "Hähnchen": 6.50, "Kalb": 7.50 }
  },
  {
    category: 'drehspieß',
    name: 'Drehspieß Box',
    description: 'mit Pommes oder Salat',
    image: PLACEHOLDER_IMG,
    sizes: { "Hähnchen": 6.50, "Kalb": 7.50 }
  },
  {
    category: 'drehspieß',
    name: 'Drehspieß Teller',
    description: 'mit Pommes & Salat',
    image: PLACEHOLDER_IMG,
    sizes: { "Hähnchen": 11.00, "Kalb": 13.00 }
  },
  {
    category: 'drehspieß',
    name: 'Drehspieß Überbacken',
    description: 'mit Tomaten-Sahnesauce, Käse, Pommes & Salat',
    image: PLACEHOLDER_IMG,
    sizes: { "Hähnchen": 12.00, "Kalb": 14.00 }
  },

  // Lahmacun
  {
    category: 'lahmacun',
    name: 'Lahmacun',
    description: 'mit Salat & Sauce',
    image: PLACEHOLDER_IMG,
    sizes: { "Standart": 6.00 }
  },
  {
    category: 'lahmacun',
    name: 'Lahmacun Spezial',
    description: 'mit Drehspießfleisch, Salat & 1 Sauce nach Wahl',
    image: PLACEHOLDER_IMG,
    sizes: { "Hähnchen": 8.00, "Kalb": 9.00 }
  },
  {
    category: 'lahmacun',
    name: 'Lahmacun Überbacken',
    description: 'mit Drehspießfleisch, Tomaten-Sahnesauce & Salat',
    image: PLACEHOLDER_IMG,
    sizes: { "Hähnchen": 10.00, "Kalb": 12.00 }
  },

  // Dürüm
  {
    category: 'dürüm',
    name: 'Drehspieß Dürüm',
    description: 'mit Salat, Sauce & Hähnchen oder Kalb',
    image: PLACEHOLDER_IMG,
    sizes: { "Hähnchen": 8.00, "Kalb": 9.00 }
  },
  {
    category: 'dürüm',
    name: 'Tavuk Sis Dürüm',
    description: 'mit Salat',
    image: PLACEHOLDER_IMG,
    sizes: { "Standart": 10.00 }
  },
  {
    category: 'dürüm',
    name: 'Adana Dürüm',
    description: 'Hackspieß (auf Wunsch Scharf)',
    image: PLACEHOLDER_IMG,
    sizes: { "Standart": 10.00 }
  },
  {
    category: 'dürüm',
    name: 'Lammspieß Dürüm',
    description: 'mit Salat',
    image: PLACEHOLDER_IMG,
    sizes: { "Standart": 11.00 }
  },

  // Grill
  {
    category: 'grill',
    name: 'Tavuk Sis Kebap',
    description: 'Hänchenspieß',
    image: PLACEHOLDER_IMG,
    sizes: { "Portion": 14.00 }
  },
  {
    category: 'grill',
    name: 'Adana Spieß',
    description: 'Hackspieß (auf Wunsch Scharf)',
    image: PLACEHOLDER_IMG,
    sizes: { "Portion": 15.00 }
  },
  {
    category: 'grill',
    name: 'Lamm Spieß Teller',
    description: '',
    image: PLACEHOLDER_IMG,
    sizes: { "Portion": 18.00 }
  },
  {
    category: 'grill',
    name: 'Gemischte Grillplatte',
    description: '',
    image: PLACEHOLDER_IMG,
    sizes: { "Portion": 20.00 }
  },

  //Veggie
  {
    category: 'veggie',
    name: 'Veggie Tasche',
    description: 'mit Salat, Weißkäse & Sauce nach Wahl im Fladenbrot',
    image: PLACEHOLDER_IMG,
    sizes: { "Portion": 6.00 }
  },
  {
    category: 'veggie',
    name: 'Veggie Dürüm',
    description: 'mit Salat, Weißkäse & Sauce nach Wahl',
    image: PLACEHOLDER_IMG,
    sizes: { "Portion": 7.00 }
  },
  {
    category: 'veggie',
    name: 'Falafel Tasche',
    description: 'mit Salat & Sauce nach Wahl im Fladenbrot',
    image: PLACEHOLDER_IMG,
    sizes: { "Portion": 6.50 }
  },
  {
    category: 'veggie',
    name: 'Falafel Dürüm',
    description: 'mit Salat & Sauce',
    image: PLACEHOLDER_IMG,
    sizes: { "Portion": 8.00 }
  },
  {
    category: 'veggie',
    name: 'Falafel Teller',
    description: 'mit Pommes, Salat & Sauce',
    image: PLACEHOLDER_IMG,
    sizes: { "Portion": 10.00 }
  },

  //Salate
  {
    category: 'salate',
    name: 'Gemischter Salat',
    description: '',
    image: PLACEHOLDER_IMG,
    sizes: { "Portion": 7.00 }
  },
  {
    category: 'salate',
    name: 'Thunfischsalat',
    description: 'mit Thunfisch',
    image: PLACEHOLDER_IMG,
    sizes: { "Portion": 8.00 }
  },
  {
    category: 'salate',
    name: 'Drehspießsalat',
    description: 'Wahlweise mit Hähnchen oder Kalb',
    image: PLACEHOLDER_IMG,
    sizes: { "Hähnchen": 8.00, "Kalb": 9.00 }
  },

  //Getränke
  {
    category: 'getreanke',
    name: 'Coca-Cola',
    description: '',
    image: PLACEHOLDER_IMG,
    sizes: { "0,33l": 2.00, "1l": 4.00 }
  },
  {
    category: 'getreanke',
    name: 'Coca-Cola Zero',
    description: '',
    image: PLACEHOLDER_IMG,
    sizes: { "0,33l": 2.00, "1l": 4.00 }
  },
  {
    category: 'getreanke',
    name: 'Fanta',
    description: '',
    image: PLACEHOLDER_IMG,
    sizes: { "0,33l": 2.00, "1l": 4.00 }
  },
  {
    category: 'getreanke',
    name: 'Sprite',
    description: '',
    image: PLACEHOLDER_IMG,
    sizes: { "0,33l": 2.00, "1l": 4.00 }
  },
  {
    category: 'getreanke',
    name: 'Uludag',
    description: '',
    image: PLACEHOLDER_IMG,
    sizes: { "0,33l": 2.00, "1l": 4.00 }
  },
  {
    category: 'getreanke',
    name: 'Wasser',
    description: '0,50l',
    image: PLACEHOLDER_IMG,
    sizes: { "Still": 2.00, "Mineral": 2.00 }
  },
  {
    category: 'getreanke',
    name: 'Ayran',
    description: '',
    image: PLACEHOLDER_IMG,
    sizes: { "0,25l": 2.00 }
  },
  {
    category: 'getreanke',
    name: 'Bier',
    description: '',
    image: PLACEHOLDER_IMG,
    sizes: { "0,33l Bier": 2.50, "0,33l Radler": 2.50 }
  },
  {
    category: 'getreanke',
    name: 'Wein',
    description: '',
    image: PLACEHOLDER_IMG,
    sizes: { "0,75l Weißwein": 12.00, "0,75l Rotwein": 12.00 }
  },

];

// --- Warenkorb aus localStorage ---
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentCategory = 'pizza';

// --- Kategorie wechseln ---
function filterCategory(cat) {
  currentCategory = cat;
  document.querySelectorAll('nav button').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  renderMenu();
}

// --- Menü rendern ---
function renderMenu() {
  const container = document.getElementById('menu');
  container.innerHTML = '';
  menuData.filter(item => item.category === currentCategory).forEach(item => {
    const div = document.createElement('div');
    div.className = 'item';
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <h3>${item.name}</h3>
      <p class="description">${item.description}</p>
      <select aria-label="Größe wählen">
        ${Object.entries(item.sizes)
          .map(([size, price]) => `<option value="${size}|${price}">${size} - €${price.toFixed(2)}</option>`)
          .join('')}
      </select>
      <button onclick="addToCart('${item.name}', this.previousElementSibling.value)">In den Warenkorb</button>
    `;
    container.appendChild(div);
  });
}

// --- In den Warenkorb ---
function addToCart(name, value) {
  const [size, price] = value.split('|');
  const existing = cart.find(i => i.name===name && i.size===size);
  if(existing) existing.quantity+=1;
  else cart.push({name, size, price: parseFloat(price), quantity:1});
  saveCart();
  renderCart();
}

// --- Warenkorb speichern ---
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// --- Warenkorb rendern ---
function renderCart() {
  const containerModal = document.getElementById('cart-items-modal');
  const countSpan = document.getElementById('cart-count');
  const totalDivModal = document.getElementById('cart-total-modal');
  
  // Stelle sicher, dass die Elemente existieren, bevor du sie manipulierst (wichtig nach submitOrder)
  if (!containerModal || !countSpan) return; 

  containerModal.innerHTML = '';
  let totalCount = 0;
  let totalPrice = 0;

  cart.forEach((item,index)=>{
    const itemTotal = item.price * item.quantity;
    totalPrice += itemTotal;
    totalCount += item.quantity;
    
    // Warenkorb-Eintrag für das Modal
    const div = document.createElement('div');
    div.className='cart-item';
    div.innerHTML = `${item.quantity}x ${item.name} (${item.size}) - €${itemTotal.toFixed(2)} <button onclick="removeItem(${index})">&times;</button>`;
    containerModal.appendChild(div);
  });

  // Zähler und Gesamtbetrag aktualisieren
  countSpan.textContent = totalCount;
  totalDivModal.textContent = `Gesamt: €${totalPrice.toFixed(2)}`;
  
  // Verstecke/Zeige den "Warenkorb bestellen" Button im Modal basierend auf dem Inhalt
  const orderBtn = document.getElementById('modal-order-btn');
  if (orderBtn) {
    orderBtn.style.display = cart.length > 0 ? 'block' : 'none';
  }

}

// --- Item entfernen ---
function removeItem(index) {
  if(cart[index].quantity>1) cart[index].quantity-=1;
  else cart.splice(index,1);
  saveCart();
  renderCart();
}

// --- Modal öffnen/schließen ---
function toggleCartModal() {
  const modal = document.getElementById('cart-modal');
  if (modal.style.display === "block") {
    modal.style.display = "none";
  } else {
    renderCart(); // Warenkorb beim Öffnen neu rendern
    modal.style.display = "block";
  }
}

// --- Bestellung ---
function submitOrder() {
  if (cart.length === 0) {
    alert("Ihr Warenkorb ist leer!");
    return;
  }
  
  // Schließe das Modal und leite den Benutzer zum statischen Formular weiter.
  toggleCartModal(); 
  
  // WICHTIG: Ersetze 'bestellen/index.html' durch den tatsächlichen Pfad zu Ihrem Formular.
  // Basierend auf Ihrer Erklärung, dass es im Ordner "bestellen" liegt:
  window.location.href = 'Bestellen/index.html'; 
}

// --- Initial ---
renderMenu();
renderCart();

document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("overlay");
  const btn = document.getElementById("overlay-btn");

  if (btn) {
    btn.addEventListener("click", () => {
      overlay.style.display = "none";
    });
  }
});

