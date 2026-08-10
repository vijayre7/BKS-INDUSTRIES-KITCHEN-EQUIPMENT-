// BKS Industries - Modern Commercial Kitchen & SS Fabrication Application Logic

// Equipment Data Source
const equipmentData = [
  {
    id: 'eq-1',
    name: 'Industrial Heavy Duty Double Burner Range',
    category: 'cooking',
    categoryLabel: 'Cooking Range',
    image: 'images/hero.png',
    specs: ['Material: Food Grade SS 304', 'High BTU Cast Iron Burners', 'Pilot Light & Safety Valves', 'Removable Drip Trays'],
    priceEstimate: '₹28,500',
    priceValue: 28500,
    desc: 'Heavy-duty commercial double burner gas stove designed for high-capacity hotel and restaurant kitchens. Engineered for maximum heat efficiency and durable daily continuous operation.'
  },
  {
    id: 'eq-2',
    name: 'Custom SS Work Table with Under-Shelf & Sink',
    category: 'ss_fabrication',
    categoryLabel: 'SS Fabrication',
    image: 'images/prep_table.png',
    specs: ['Material: 16-Gauge SS 304', 'Sound Deadened Top Board', 'Adjustable Bullet Feet', 'Custom Size Options'],
    priceEstimate: '₹18,200',
    priceValue: 18200,
    desc: 'Custom-crafted stainless steel kitchen prep table with integrated deep bowl sink unit. Built for heavy chopping, food prep, and easy sanitation compliance.'
  },
  {
    id: 'eq-3',
    name: 'Bain Marie Food Warmer Buffet Counter',
    category: 'warming',
    categoryLabel: 'Warming & Display',
    image: 'images/bain_marie.png',
    specs: ['Capacity: 4 to 8 GN Containers', 'Curved Toughened Glass Canopy', 'Precision Thermostat (30°C - 110°C)', 'Drain Valve for Easy Clean'],
    priceEstimate: '₹34,000',
    priceValue: 34000,
    desc: 'Commercial electric Bain Marie hot food counter with glass display. Keeps cooked gravies, rice, and appetizers hot and fresh for buffet service.'
  },
  {
    id: 'eq-4',
    name: 'SS Commercial Exhaust Hood & Ducting System',
    category: 'exhaust',
    categoryLabel: 'Exhaust & Ventilation',
    image: 'images/hero.png',
    specs: ['Material: SS 304 Baffle Filters', 'Built-in Oil Collector Tray', 'Heavy Duty Blower Fan System', 'Custom Ducting Layout'],
    priceEstimate: '₹42,000',
    priceValue: 42000,
    desc: 'Heavy-duty stainless steel commercial kitchen hood with high-efficiency baffle filters. Removes heat, grease, and smoke for a clean kitchen environment.'
  },
  {
    id: 'eq-5',
    name: 'Multi-Tier SS Storage Rack & Trolley',
    category: 'storage',
    categoryLabel: 'Storage & Trolleys',
    image: 'images/prep_table.png',
    specs: ['4-Tier Heavy Load Capacity', 'Swivel Locking Castor Wheels', 'Material: SS 304 Tubular Frame', 'Easy Disassembly'],
    priceEstimate: '₹14,500',
    priceValue: 14500,
    desc: 'Multi-purpose stainless steel storage rack and transport trolley. Perfect for storing heavy kitchen pots, ingredients, and bulk inventory.'
  },
  {
    id: 'eq-6',
    name: 'Commercial Dosa Tawa & Chapati Plate Range',
    category: 'cooking',
    categoryLabel: 'Cooking Range',
    image: 'images/hero.png',
    specs: ['Heavy Mild Steel Top Plate (16mm)', 'Uniform Heat Gas V-Burners', 'SS Body Frame', 'Front Oil Drip Trough'],
    priceEstimate: '₹22,000',
    priceValue: 22000,
    desc: 'Industrial high-output Dosa hot plate unit. Fast heat retention and uniform temperature distribution for crisp dosas and quick chapatis.'
  }
];

// App State
let quoteCart = [];
let activeCategory = 'all';
let searchKeyword = '';

let configState = {
  type: 'cloud_kitchen',
  sizeSqFt: 400,
  modules: ['cooking', 'prep', 'exhaust']
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
  renderCatalog();
  setupEventListeners();
  updateConfigurator();
});

// Setup Global Event Listeners
function setupEventListeners() {
  // Category Tab Clicks
  const tabs = document.querySelectorAll('.category-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      tabs.forEach(t => t.classList.remove('active'));
      e.target.classList.add('active');
      activeCategory = e.target.dataset.category;
      renderCatalog();
    });
  });

  // Search Input
  const searchInput = document.getElementById('catalogSearch');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchKeyword = e.target.value.toLowerCase().trim();
      renderCatalog();
    });
  }

  // Drawer Toggle
  const cartToggleBtns = document.querySelectorAll('.cart-toggle-btn');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const quoteDrawer = document.getElementById('quoteDrawer');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');

  cartToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      drawerBackdrop.classList.add('active');
      quoteDrawer.classList.add('active');
    });
  });

  if (closeDrawerBtn) {
    closeDrawerBtn.addEventListener('click', closeQuoteDrawer);
  }
  if (drawerBackdrop) {
    drawerBackdrop.addEventListener('click', closeQuoteDrawer);
  }

  // Configurator Kitchen Type Select
  const typeBtns = document.querySelectorAll('.type-option-btn');
  typeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      typeBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      configState.type = btn.dataset.type;
      updateConfigurator();
    });
  });

  // Configurator Slider
  const sizeSlider = document.getElementById('kitchenSizeSlider');
  if (sizeSlider) {
    sizeSlider.addEventListener('input', (e) => {
      configState.sizeSqFt = parseInt(e.target.value);
      document.getElementById('sizeSqFtVal').innerText = `${configState.sizeSqFt} sq. ft.`;
      updateConfigurator();
    });
  }

  // Configurator Checkboxes
  const moduleCheckboxes = document.querySelectorAll('.module-checkbox input');
  moduleCheckboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      configState.modules = Array.from(moduleCheckboxes)
        .filter(c => c.checked)
        .map(c => c.value);
      updateConfigurator();
    });
  });

  // Contact Form Submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', handleContactSubmit);
  }
}

function closeQuoteDrawer() {
  document.getElementById('drawerBackdrop').classList.remove('active');
  document.getElementById('quoteDrawer').classList.remove('active');
}

// Render Equipment Catalog
function renderCatalog() {
  const container = document.getElementById('catalogGrid');
  if (!container) return;

  const filtered = equipmentData.filter(item => {
    const matchesCat = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchKeyword) ||
                          item.categoryLabel.toLowerCase().includes(searchKeyword);
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; background: #ffffff; border-radius: 16px;">
        <i class="fa-solid fa-store-slash" style="font-size: 2.5rem; color: #94a3b8; margin-bottom: 1rem;"></i>
        <h3 style="font-size: 1.2rem; color: #0f172a;">No equipment matching your criteria</h3>
        <p style="color: #64748b; font-size: 0.9rem;">Try adjusting your category selection or search term.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="equipment-card">
      <div class="card-image-wrap">
        <img src="${item.image}" alt="${item.name}">
        <span class="category-tag">${item.categoryLabel}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${item.name}</h3>
        <ul class="card-specs-list">
          ${item.specs.map(spec => `<li><i class="fa-solid fa-circle-check"></i> ${spec}</li>`).join('')}
        </ul>
        <div class="card-footer">
          <div class="price-estimate">
            <span class="price-label">Starting From</span>
            <span class="price-value">${item.priceEstimate}</span>
          </div>
          <div style="display: flex; gap: 0.5rem;">
            <button class="btn btn-outline" onclick="openSpecModal('${item.id}')" style="padding: 0.5rem 0.8rem; font-size: 0.85rem;" title="View Specifications">
              <i class="fa-solid fa-eye"></i> Specs
            </button>
            <button class="btn btn-primary" onclick="addToQuote('${item.id}')" style="padding: 0.5rem 0.9rem; font-size: 0.85rem;">
              <i class="fa-solid fa-plus"></i> Add
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// Add Item to Quote Cart
function addToQuote(id) {
  const item = equipmentData.find(e => e.id === id);
  if (!item) return;

  const existing = quoteCart.find(c => c.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    quoteCart.push({ ...item, qty: 1 });
  }

  updateCartUI();
  // Open drawer automatically on add
  document.getElementById('drawerBackdrop').classList.add('active');
  document.getElementById('quoteDrawer').classList.add('active');
}

// Update Cart Drawer UI
function updateCartUI() {
  const cartBadge = document.getElementById('cartBadgeCount');
  const drawerList = document.getElementById('drawerItemList');
  const drawerSubtotal = document.getElementById('drawerSubtotal');

  const totalQty = quoteCart.reduce((sum, item) => sum + item.qty, 0);
  if (cartBadge) cartBadge.innerText = totalQty;

  if (quoteCart.length === 0) {
    drawerList.innerHTML = `
      <div style="text-align: center; padding: 2rem 1rem; color: #64748b;">
        <i class="fa-solid fa-basket-shopping" style="font-size: 2.5rem; color: #cbd5e1; margin-bottom: 0.8rem;"></i>
        <p style="font-weight: 600;">Your Kitchen Quote List is empty.</p>
        <p style="font-size: 0.85rem; margin-top: 0.3rem;">Browse equipment above and click "Add" to build your custom inquiry.</p>
      </div>
    `;
    if (drawerSubtotal) drawerSubtotal.innerText = '₹0';
    return;
  }

  let totalCost = 0;
  drawerList.innerHTML = quoteCart.map(item => {
    const itemTotal = item.priceValue * item.qty;
    totalCost += itemTotal;
    return `
      <div style="display: flex; gap: 0.8rem; align-items: center; padding: 0.8rem 0; border-bottom: 1px solid #e2e8f0;">
        <img src="${item.image}" style="width: 54px; height: 54px; border-radius: 8px; object-fit: cover;">
        <div style="flex: 1; min-width: 0;">
          <h4 style="font-size: 0.9rem; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.name}</h4>
          <span style="font-size: 0.8rem; color: #f59e0b; font-weight: 700;">${item.priceEstimate}</span>
        </div>
        <div style="display: flex; align-items: center; gap: 0.4rem; background: #f1f5f9; padding: 0.2rem 0.5rem; border-radius: 6px;">
          <button onclick="changeQty('${item.id}', -1)" style="background: none; font-size: 0.9rem; width: 20px;">-</button>
          <span style="font-weight: 700; font-size: 0.85rem;">${item.qty}</span>
          <button onclick="changeQty('${item.id}', 1)" style="background: none; font-size: 0.9rem; width: 20px;">+</button>
        </div>
        <button onclick="removeFromCart('${item.id}')" style="color: #ef4444; background: none; font-size: 0.9rem; margin-left: 0.3rem;">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `;
  }).join('');

  if (drawerSubtotal) drawerSubtotal.innerText = `₹${totalCost.toLocaleString('en-IN')}`;
}

function changeQty(id, delta) {
  const item = quoteCart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    quoteCart = quoteCart.filter(c => c.id !== id);
  }
  updateCartUI();
}

function removeFromCart(id) {
  quoteCart = quoteCart.filter(c => c.id !== id);
  updateCartUI();
}

// Send Quote via WhatsApp
function sendQuoteWhatsApp() {
  if (quoteCart.length === 0) {
    alert('Please add at least one equipment item to your quote list first!');
    return;
  }

  let text = `*New Kitchen Equipment Inquiry - BKS Industries*\n\n`;
  text += `*Selected Equipment List:*\n`;
  let totalEst = 0;

  quoteCart.forEach((item, index) => {
    const itemTotal = item.priceValue * item.qty;
    totalEst += itemTotal;
    text += `${index + 1}. ${item.name} x ${item.qty} - ₹${itemTotal.toLocaleString('en-IN')}\n`;
  });

  text += `\n*Estimated Total:* ₹${totalEst.toLocaleString('en-IN')}\n`;
  text += `\nPlease provide your formal price quotation and availability for Bengaluru.`;

  const phone = '918123939433';
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

// Update Interactive Kitchen Configurator
function updateConfigurator() {
  const summaryList = document.getElementById('configSummaryList');
  const totalElem = document.getElementById('configTotalVal');
  if (!summaryList || !totalElem) return;

  const typeMultiplier = {
    cloud_kitchen: 1.0,
    restaurant: 1.4,
    hotel: 2.2,
    bakery: 1.2
  };

  const baseSqFtRate = 120; // rate per sq ft base equipment
  const multiplier = typeMultiplier[configState.type] || 1.0;
  
  let estTotal = configState.sizeSqFt * baseSqFtRate * multiplier;

  // Add module costs
  const moduleRates = {
    cooking: 45000,
    prep: 32000,
    exhaust: 40000,
    warming: 35000,
    storage: 20000,
    conveyor: 28000
  };

  let activeModules = [];
  configState.modules.forEach(m => {
    if (moduleRates[m]) {
      estTotal += moduleRates[m];
      activeModules.push(m.toUpperCase() + ' System Package');
    }
  });

  summaryList.innerHTML = `
    <li><span>Kitchen Type:</span> <strong>${configState.type.replace('_', ' ').toUpperCase()}</strong></li>
    <li><span>Estimated Area:</span> <strong>${configState.sizeSqFt} sq. ft.</strong></li>
    <li><span>Selected Modules:</span> <strong>${configState.modules.length} Packages</strong></li>
    <li style="font-size: 0.8rem; color: #94a3b8; margin-top: 0.5rem;">Includes custom SS 304 food-grade fabrication & on-site fitting.</li>
  `;

  totalElem.innerText = `₹${Math.round(estTotal).toLocaleString('en-IN')}`;
}

function sendConfiguratorWhatsApp() {
  let text = `*Custom Kitchen Configurator Inquiry - BKS Industries*\n\n`;
  text += `*Kitchen Setup Type:* ${configState.type.replace('_', ' ').toUpperCase()}\n`;
  text += `*Kitchen Space Area:* ${configState.sizeSqFt} sq. ft.\n`;
  text += `*Selected Packages:* ${configState.modules.join(', ')}\n`;
  text += `*Estimated Budget:* ${document.getElementById('configTotalVal').innerText}\n\n`;
  text += `Please contact me with a custom architectural layout & itemized quotation.`;

  const phone = '918123939433';
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

// Spec Modal Popup
function openSpecModal(id) {
  const item = equipmentData.find(e => e.id === id);
  if (!item) return;

  const modalHtml = `
    <div id="specModalBackdrop" style="position: fixed; inset: 0; background: rgba(15,23,42,0.7); backdrop-filter: blur(6px); z-index: 300; display: flex; align-items: center; justify-content: center; padding: 1rem;">
      <div style="background: #ffffff; border-radius: 20px; max-width: 550px; width: 100%; padding: 2rem; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); position: relative;">
        <button onclick="closeSpecModal()" style="position: absolute; top: 1.2rem; right: 1.2rem; background: #f1f5f9; border: none; width: 36px; height: 36px; border-radius: 50%; font-size: 1.1rem; cursor: pointer;">&times;</button>
        
        <img src="${item.image}" style="width: 100%; height: 220px; object-fit: cover; border-radius: 12px; margin-bottom: 1.2rem;">
        <span style="background: #e0f2fe; color: #0284c7; padding: 0.2rem 0.6rem; border-radius: 99px; font-weight: 700; font-size: 0.75rem;">${item.categoryLabel}</span>
        <h3 style="font-size: 1.4rem; color: #0f172a; margin: 0.5rem 0;">${item.name}</h3>
        <p style="color: #64748b; font-size: 0.9rem; margin-bottom: 1.2rem;">${item.desc}</p>
        
        <h4 style="font-size: 0.95rem; font-weight: 700; color: #0f172a; margin-bottom: 0.5rem;">Key Specifications:</h4>
        <ul style="list-style: none; margin-bottom: 1.5rem; display: flex; flex-direction: column; gap: 0.4rem;">
          ${item.specs.map(s => `<li style="font-size: 0.88rem; color: #334155;"><i class="fa-solid fa-check" style="color: #10b981; margin-right: 0.5rem;"></i> ${s}</li>`).join('')}
        </ul>

        <div style="display: flex; justify-content: space-between; align-items: center; pt-1rem; border-top: 1px solid #e2e8f0;">
          <span style="font-size: 1.3rem; font-weight: 800; color: #d97706;">${item.priceEstimate}</span>
          <button class="btn btn-primary" onclick="addToQuote('${item.id}'); closeSpecModal();">
            <i class="fa-solid fa-plus"></i> Add to Quote
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function closeSpecModal() {
  const modal = document.getElementById('specModalBackdrop');
  if (modal) modal.remove();
}

// Contact Form Handler
function handleContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('contactName').value;
  const phoneInput = document.getElementById('contactPhone').value;
  const kType = document.getElementById('contactKitchenType').value;
  const msg = document.getElementById('contactMsg').value;

  let text = `*New Direct Inquiry - BKS Industries Website*\n\n`;
  text += `*Name:* ${name}\n`;
  text += `*Phone:* ${phoneInput}\n`;
  text += `*Kitchen Type:* ${kType}\n`;
  text += `*Requirements / Details:* ${msg}\n`;

  const phone = '918123939433';
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');

  alert('Thank you! Your inquiry details have been formatted for instant WhatsApp dispatch.');
  document.getElementById('contactForm').reset();
}
