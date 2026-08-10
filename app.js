// BKS Industries - Modern Commercial Kitchen & SS Fabrication Application Logic

// Complete Official BKS Industries Equipment Data Catalog (60+ Items)
const equipmentData = [
  // --- COOKING RANGES & BURNERS ---
  {
    id: 'eq-101',
    name: 'Single Burner Range',
    category: 'cooking',
    categoryLabel: 'Cooking Ranges',
    image: 'images/hero.png',
    fuel: 'LPG / PNG Gas',
    powerKw: 0,
    exhaustCfm: 400,
    specs: ['Food Grade SS 304 Body', 'Cast Iron High BTU Burner', 'Heavy Duty Pan Support Grid', 'Removable SS Drip Tray'],
    priceEstimate: '₹14,500',
    priceValue: 14500,
    dimensions: '24" L x 24" W x 34" H',
    desc: 'Heavy-duty single burner gas cooking range for commercial hotels, restaurants, and cloud kitchens.'
  },
  {
    id: 'eq-102',
    name: 'Two Burner Range',
    category: 'cooking',
    categoryLabel: 'Cooking Ranges',
    image: 'images/hero.png',
    fuel: 'LPG / PNG Gas',
    powerKw: 0,
    exhaustCfm: 600,
    specs: ['Dual Heavy Duty Cast Iron Burners', 'Pilot Light & Brass Valves', '16 Gauge SS 304 Frame', 'Under-shelf for Storage'],
    priceEstimate: '₹24,000',
    priceValue: 24000,
    dimensions: '48" L x 24" W x 34" H',
    desc: 'Commercial double burner range engineered for continuous high-capacity cooking.'
  },
  {
    id: 'eq-103',
    name: 'Three Burner Range',
    category: 'cooking',
    categoryLabel: 'Cooking Ranges',
    image: 'images/hero.png',
    fuel: 'LPG / PNG Gas',
    powerKw: 0,
    exhaustCfm: 900,
    specs: ['3 High Efficiency Gas Burners', 'Heavy Cast Iron Grates', 'Front Control Knobs', 'Heavy Duty Tubular Frame'],
    priceEstimate: '₹32,500',
    priceValue: 32500,
    dimensions: '66" L x 24" W x 34" H',
    desc: 'Industrial 3-burner gas cooking line for high-volume catering and hotel kitchens.'
  },
  {
    id: 'eq-104',
    name: 'Four Burner Range',
    category: 'cooking',
    categoryLabel: 'Cooking Ranges',
    image: 'images/burner_oven.png',
    fuel: 'LPG / PNG Gas',
    powerKw: 0,
    exhaustCfm: 1200,
    specs: ['4 High Output Cast Iron Burners', 'Stainless Steel Drip Trays', 'Heavy Duty Base Frame', 'Precision Gas Controls'],
    priceEstimate: '₹38,000',
    priceValue: 38000,
    dimensions: '36" L x 36" W x 34" H',
    desc: 'Four-burner commercial gas stove line designed for restaurant main cooking stations.'
  },
  {
    id: 'eq-105',
    name: 'Four Burner Range with Oven',
    category: 'cooking',
    categoryLabel: 'Cooking Ranges',
    image: 'images/burner_oven.png',
    fuel: 'LPG / PNG Gas',
    powerKw: 0,
    exhaustCfm: 1200,
    specs: ['4 Top Burners + Thermostatic Oven', 'Insulated Double-Walled Oven Door', 'Removable Grates', 'Heavy SS 304 Body'],
    priceEstimate: '₹62,000',
    priceValue: 62000,
    dimensions: '36" L x 36" W x 34" H',
    desc: 'All-in-one commercial cooking center featuring 4 burners and integrated bottom baking oven.'
  },
  {
    id: 'eq-106',
    name: 'Single Chinese Burner Range',
    category: 'cooking',
    categoryLabel: 'Cooking Ranges',
    image: 'images/hero.png',
    fuel: 'LPG High Pressure Gas',
    powerKw: 0,
    exhaustCfm: 800,
    specs: ['High Pressure Jet Burner', 'Integrated Water Wash System', 'Heavy Cast Iron Ring Wok Holder', 'Front Water Trough'],
    priceEstimate: '₹22,500',
    priceValue: 22500,
    dimensions: '30" L x 30" W x 34" H',
    desc: 'Specialized commercial high-flame Chinese wok burner with integrated water cooling channel.'
  },
  {
    id: 'eq-107',
    name: 'Two Chinese Burner Range',
    category: 'cooking',
    categoryLabel: 'Cooking Ranges',
    image: 'images/hero.png',
    fuel: 'LPG High Pressure Gas',
    powerKw: 0,
    exhaustCfm: 1400,
    specs: ['Dual High Pressure Wok Jet Burners', 'Continuous Water Spray Cooling', 'Swivel Faucet Fired Top', 'Removable Oil Drain Tray'],
    priceEstimate: '₹38,000',
    priceValue: 38000,
    dimensions: '60" L x 30" W x 34" H',
    desc: 'Double high-flame Chinese wok range for fast Asian food preparation.'
  },
  {
    id: 'eq-108',
    name: 'Indian & Chinese Combo Burner',
    category: 'cooking',
    categoryLabel: 'Cooking Ranges',
    image: 'images/hero.png',
    fuel: 'LPG / PNG Gas',
    powerKw: 0,
    exhaustCfm: 1100,
    specs: ['Combination Indian Stock Burner + Wok Jet', 'Heavy Duty SS 304 Construction', 'Dual Gas Valves', 'Water Wash Channel'],
    priceEstimate: '₹34,500',
    priceValue: 34500,
    dimensions: '54" L x 30" W x 34" H',
    desc: 'Hybrid cooking range combining Indian high-BTU stock pot burner with high-pressure Chinese wok burner.'
  },
  {
    id: 'eq-109',
    name: 'Tilting Pan (Bratt Pan)',
    category: 'cooking',
    categoryLabel: 'Cooking Ranges',
    image: 'images/hero.png',
    fuel: 'Electric 415V / LPG Gas',
    powerKw: 9.0,
    exhaustCfm: 600,
    specs: ['80 Litre Capacity SS 304 Pan', 'Manual Worm Gear Tilting Mechanism', 'Thermostatic Temperature Control', 'Heavy Counterbalanced Lid'],
    priceEstimate: '₹1,15,000',
    priceValue: 115000,
    dimensions: '40" L x 36" W x 36" H',
    desc: 'Commercial tilting braising pan for bulk frying, boiling, stewing, and sauteing in large institutions and hotels.'
  },
  {
    id: 'eq-110',
    name: 'Commercial Tandoor (SS Body Clay Pot)',
    category: 'cooking',
    categoryLabel: 'Cooking Ranges',
    image: 'images/hero.png',
    fuel: 'Charcoal / LPG Gas',
    powerKw: 0,
    exhaustCfm: 800,
    specs: ['Authentic Heavy Clay Pot Inside', 'SS 304 Square Outer Casing', 'Thermal Rockwool Insulation', 'Includes Tandoor Skewers & Covers'],
    priceEstimate: '₹26,000',
    priceValue: 26000,
    dimensions: '30" L x 30" W x 36" H',
    desc: 'Heavy-duty stainless steel clad clay tandoor oven for naan, roti, and tandoori grills.'
  },
  {
    id: 'eq-111',
    name: 'Commercial Barbeque Grill Counter',
    category: 'cooking',
    categoryLabel: 'Cooking Ranges',
    image: 'images/hero.png',
    fuel: 'Charcoal / Gas',
    powerKw: 0,
    exhaustCfm: 900,
    specs: ['SS Skewer Racks', 'Refractory Brick Lining', 'Bottom Ash Tray', 'Castor Wheels for Mobility'],
    priceEstimate: '₹28,000',
    priceValue: 28000,
    dimensions: '48" L x 24" W x 34" H',
    desc: 'Heavy-duty commercial BBQ charcoal grill for live kababs and grilled appetizers.'
  },
  {
    id: 'eq-112',
    name: 'Salamander Electric / Gas Griller',
    category: 'cooking',
    categoryLabel: 'Cooking Ranges',
    image: 'images/hero.png',
    fuel: 'Electric 220V / Gas',
    powerKw: 3.5,
    exhaustCfm: 300,
    specs: ['Adjustable Height Heating Rack', 'Infrared Ceramic Heating Elements', 'Crumb Collection Tray', 'Wall Mountable / Countertop'],
    priceEstimate: '₹24,500',
    priceValue: 24500,
    dimensions: '30" L x 18" W x 18" H',
    desc: 'Overhead salamander broiler for quick browning, melting cheese, and finishing dishes.'
  },
  {
    id: 'eq-113',
    name: 'Sandwich Griller (Contact Grill)',
    category: 'cooking',
    categoryLabel: 'Cooking Ranges',
    image: 'images/hero.png',
    fuel: 'Electric 220V',
    powerKw: 2.2,
    exhaustCfm: 0,
    specs: ['Cast Iron Ribbed Top & Bottom Plates', 'Thermostat Control (50°C - 300°C)', 'Removable Grease Tray', 'Heat Insulated Handle'],
    priceEstimate: '₹14,200',
    priceValue: 14200,
    dimensions: '18" L x 16" W x 10" H',
    desc: 'Heavy commercial panini and sandwich contact griller for quick cafes and snack counters.'
  },
  {
    id: 'eq-114',
    name: 'Table Top Deep Fat Fryer',
    category: 'cooking',
    categoryLabel: 'Cooking Ranges',
    image: 'images/deep_fryer.png',
    fuel: 'Electric 220V',
    powerKw: 3.0,
    exhaustCfm: 200,
    specs: ['Single 6L / 8L SS Oil Tank', 'Precision Thermostat Control', 'Nickel Plated Wire Mesh Basket', 'Safety Cut-Off Micro Switch'],
    priceEstimate: '₹11,500',
    priceValue: 11500,
    dimensions: '12" L x 18" W x 12" H',
    desc: 'Compact electric table-top deep fat fryer for fries, snacks, and appetizers.'
  },
  {
    id: 'eq-115',
    name: 'Deep Fat Fryer with Stand',
    category: 'cooking',
    categoryLabel: 'Cooking Ranges',
    image: 'images/deep_fryer.png',
    fuel: 'Electric 415V 3-Phase / Gas',
    powerKw: 6.0,
    exhaustCfm: 400,
    specs: ['Double 12L SS Frying Tanks', 'Heavy Duty Tubular SS Stand', 'Drain Valve for Quick Oil Change', 'Includes Dual Fry Baskets'],
    priceEstimate: '₹31,500',
    priceValue: 31500,
    dimensions: '24" L x 28" W x 38" H',
    desc: 'Floor standing commercial double deep fat fryer for high production fast food centers.'
  },
  {
    id: 'eq-116',
    name: 'Commercial Plaza Oven',
    category: 'cooking',
    categoryLabel: 'Cooking Ranges',
    image: 'images/baking_oven.png',
    fuel: 'Electric 220V / Gas',
    powerKw: 4.5,
    exhaustCfm: 300,
    specs: ['High Heat Ceramic Baking Deck', 'Insulated Stainless Steel Outer Casing', 'Viewing Glass Window & Lamp', 'Digital Timer Controller'],
    priceEstimate: '₹42,000',
    priceValue: 42000,
    dimensions: '36" L x 28" W x 22" H',
    desc: 'Heavy-duty commercial plaza baking oven for pizzas, breads, and confectionery products.'
  },

  // --- DOSA & STEAMER EQUIPMENT ---
  {
    id: 'eq-201',
    name: 'Dosa / Chapathi Plate with LPG',
    category: 'dosa_steamers',
    categoryLabel: 'Dosa & Steamers',
    image: 'images/dosa_tawa.png',
    fuel: 'LPG Gas',
    powerKw: 0,
    exhaustCfm: 700,
    specs: ['16mm Heavy Mild Steel Top Plate', 'Uniform Heat V-Burners', 'SS Body Frame with Oil Channel', 'Front Removable Drip Cup'],
    priceEstimate: '₹24,500',
    priceValue: 24500,
    dimensions: '48" L x 24" W x 34" H',
    desc: 'Industrial high-output Dosa hot plate unit with LPG gas heating.'
  },
  {
    id: 'eq-202',
    name: 'Dosa / Chapathi Plate Electric',
    category: 'dosa_steamers',
    categoryLabel: 'Dosa & Steamers',
    image: 'images/dosa_tawa.png',
    fuel: 'Electric 415V 3-Phase',
    powerKw: 6.0,
    exhaustCfm: 500,
    specs: ['Heavy Polished Steel Plate Top', 'Heavy Duty Tubular Heaters', 'Thermostatic Heat Regulator', 'Full SS 304 Outer Enclosure'],
    priceEstimate: '₹28,000',
    priceValue: 28000,
    dimensions: '48" L x 24" W x 34" H',
    desc: 'Electric commercial Dosa and Chapati flat plate range with precise temperature control.'
  },
  {
    id: 'eq-203',
    name: 'Table Top Dosa / Chapathi Plate',
    category: 'dosa_steamers',
    categoryLabel: 'Dosa & Steamers',
    image: 'images/dosa_tawa.png',
    fuel: 'LPG Gas / Electric',
    powerKw: 3.0,
    exhaustCfm: 300,
    specs: ['12mm Machined Steel Plate', 'Compact Table-top Design', 'Rubber Feet Base', 'Easy Clean Drain Lip'],
    priceEstimate: '₹16,500',
    priceValue: 16500,
    dimensions: '30" L x 20" W x 12" H',
    desc: 'Compact table top hot plate unit for cafes, breakfast stalls, and small diners.'
  },
  {
    id: 'eq-204',
    name: 'Idly Box with Steamer Stand',
    category: 'dosa_steamers',
    categoryLabel: 'Dosa & Steamers',
    image: 'images/hero.png',
    fuel: 'LPG Gas / Electric',
    powerKw: 4.5,
    exhaustCfm: 200,
    specs: ['Capacity: 54 / 72 Idly Trays', 'Heavy SS 304 Steam Boiler Base', 'Silicone Gasket Sealed Door', 'Pressure Release Valve'],
    priceEstimate: '₹28,500',
    priceValue: 28500,
    dimensions: '24" L x 24" W x 54" H',
    desc: 'Commercial stainless steel Idly steam cooker unit with bottom steam boiler chamber.'
  },
  {
    id: 'eq-205',
    name: '120 Idly LPG Steamer',
    category: 'dosa_steamers',
    categoryLabel: 'Dosa & Steamers',
    image: 'images/hero.png',
    fuel: 'LPG Gas',
    powerKw: 0,
    exhaustCfm: 300,
    specs: ['High Capacity: 120 Idlies per Batch', 'Includes Aluminium / SS Idly Trays', 'Water Level Indicator & Valve', 'Heavy Duty Insulated Body'],
    priceEstimate: '₹38,000',
    priceValue: 38000,
    dimensions: '30" L x 24" W x 60" H',
    desc: 'Large capacity commercial 120-idly LPG steam cabinet for hotel breakfast production.'
  },
  {
    id: 'eq-206',
    name: 'Roomali Roti Machine',
    category: 'dosa_steamers',
    categoryLabel: 'Dosa & Steamers',
    image: 'images/hero.png',
    fuel: 'LPG Gas',
    powerKw: 0,
    exhaustCfm: 500,
    specs: ['Hemispherical Dome Top Plate', 'High Heat Ring Burner Below', 'Mobile Cart with Castor Wheels', 'SS Protective Side Panels'],
    priceEstimate: '₹22,000',
    priceValue: 22000,
    dimensions: '36" L x 30" W x 36" H',
    desc: 'Specialized Roomali Roti dome cooker with high pressure heating for thin soft rotis.'
  },
  {
    id: 'eq-207',
    name: 'Commercial Milk Boiler',
    category: 'dosa_steamers',
    categoryLabel: 'Dosa & Steamers',
    image: 'images/hero.png',
    fuel: 'LPG Gas / Electric',
    powerKw: 3.0,
    exhaustCfm: 0,
    specs: ['Double Jacketed Water Tank', 'Capacity: 30 / 50 Litres', 'Prevent Milk Scorching', 'Brass Dispensing Tap'],
    priceEstimate: '₹18,500',
    priceValue: 18500,
    dimensions: '20" Dia x 34" H',
    desc: 'Double jacketed stainless steel milk boiler for tea stalls, hotels, and canteens.'
  },
  {
    id: 'eq-208',
    name: '4 Hole Milk Boiler Counter',
    category: 'dosa_steamers',
    categoryLabel: 'Dosa & Steamers',
    image: 'images/hero.png',
    fuel: 'LPG Gas / Electric',
    powerKw: 4.5,
    exhaustCfm: 0,
    specs: ['4 Container Boiling Rings', 'SS 304 Outer Enclosure', 'Individual Water Jacket Chambers', 'Front Drainage Tap'],
    priceEstimate: '₹32,000',
    priceValue: 32000,
    dimensions: '42" L x 28" W x 34" H',
    desc: 'Multi-vessel milk and tea boiling counter for high output South Indian tea shops.'
  },

  // --- SHAWARMA & GRILLS ---
  {
    id: 'eq-301',
    name: 'Shawarma Machine (Double Burner)',
    category: 'shawarma_grills',
    categoryLabel: 'Shawarma & Grills',
    image: 'images/hero.png',
    fuel: 'LPG Gas / Electric',
    powerKw: 3.0,
    exhaustCfm: 300,
    specs: ['Infrared Radiant Ceramic Burners', 'Motorized SS Central Spit Rod', 'Bottom Oil Drip Collection Pan', 'Includes Meat Catch Plate'],
    priceEstimate: '₹28,000',
    priceValue: 28000,
    dimensions: '24" L x 24" W x 42" H',
    desc: 'Commercial vertical gas shawarma toaster machine with motorized spit rotation.'
  },
  {
    id: 'eq-302',
    name: 'Single Shawarma Machine',
    category: 'shawarma_grills',
    categoryLabel: 'Shawarma & Grills',
    image: 'images/hero.png',
    fuel: 'LPG Gas',
    powerKw: 0,
    exhaustCfm: 200,
    specs: ['Single Ceramic Heating Burner', 'Manual / Motorized Spit Rotation', 'Compact Countertop Footprint', 'SS Heat Shield'],
    priceEstimate: '₹19,500',
    priceValue: 19500,
    dimensions: '18" L x 18" W x 36" H',
    desc: 'Compact vertical single burner shawarma machine for small quick-service outlets.'
  },
  {
    id: 'eq-303',
    name: 'Commercial Chicken Grill (Rotisserie)',
    category: 'shawarma_grills',
    categoryLabel: 'Shawarma & Grills',
    image: 'images/hero.png',
    fuel: 'LPG Gas / Electric',
    powerKw: 4.5,
    exhaustCfm: 400,
    specs: ['Multi-Spit Rotisserie (9-15 Birds)', 'Glass Window Front', 'Internal Lighting Lamp', 'Motorized Chain Drive'],
    priceEstimate: '₹48,000',
    priceValue: 48000,
    dimensions: '42" L x 24" W x 48" H',
    desc: 'Commercial rotary chicken grill rotisserie cabinet with glass viewing display.'
  },

  // --- WARMING & DISPLAY COUNTERS ---
  {
    id: 'eq-401',
    name: 'Bain Marie Hot Counter',
    category: 'warming',
    categoryLabel: 'Warming & Display',
    image: 'images/bain_marie.png',
    fuel: 'Electric 220V',
    powerKw: 3.0,
    exhaustCfm: 0,
    specs: ['Capacity: 4 to 8 GN Pan Containers', 'Curved Toughened Glass Canopy', 'Thermostat Control (30°C - 110°C)', 'Bottom Drain Valve'],
    priceEstimate: '₹34,000',
    priceValue: 34000,
    dimensions: '56" L x 28" W x 52" H',
    desc: 'Electric Bain Marie hot food counter with glass display for buffet service.'
  },
  {
    id: 'eq-402',
    name: 'Bain Marie Over Shelf Counter',
    category: 'warming',
    categoryLabel: 'Warming & Display',
    image: 'images/bain_marie.png',
    fuel: 'Electric 220V',
    powerKw: 3.5,
    exhaustCfm: 0,
    specs: ['GN Pan Food Warmer Base', 'Includes Overhead Pick-up Glass Shelf', 'Heat Lamps Fitted Under Shelf', 'SS 304 Slanted Display'],
    priceEstimate: '₹42,000',
    priceValue: 42000,
    dimensions: '60" L x 28" W x 54" H',
    desc: 'Bain Marie warmer equipped with overhead pick-up service shelf and infrared heating lamps.'
  },
  {
    id: 'eq-403',
    name: 'Biriyani Bain Marie Counter',
    category: 'warming',
    categoryLabel: 'Warming & Display',
    image: 'images/bain_marie.png',
    fuel: 'LPG Gas / Electric',
    powerKw: 3.0,
    exhaustCfm: 0,
    specs: ['Designed for Deep Round Biriyani Vessels', 'Insulated Double Wall Casing', 'Heavy Duty Top Plate Ring Cutouts', 'Bottom Storage Cabinet'],
    priceEstimate: '₹36,000',
    priceValue: 36000,
    dimensions: '54" L x 30" W x 34" H',
    desc: 'Specialized hot display counter for keeping biriyani pots hot during active service.'
  },
  {
    id: 'eq-404',
    name: '6 Vessel Hot Case Counter',
    category: 'warming',
    categoryLabel: 'Warming & Display',
    image: 'images/bain_marie.png',
    fuel: 'LPG Gas / Electric',
    powerKw: 3.0,
    exhaustCfm: 0,
    specs: ['6 Round Curry Vessels with Lids', 'Water Bath Heating Jacket', 'Front Sliding Doors Cabinet', 'SS 304 Construction'],
    priceEstimate: '₹31,000',
    priceValue: 31000,
    dimensions: '48" L x 28" W x 34" H',
    desc: '6-vessel commercial hot case counter for curries, gravies, and rice dishes.'
  },
  {
    id: 'eq-405',
    name: 'Sweet Corn Counter',
    category: 'warming',
    categoryLabel: 'Warming & Display',
    image: 'images/hero.png',
    fuel: 'Electric 220V',
    powerKw: 2.0,
    exhaustCfm: 0,
    specs: ['Integrated Steamer Pot', 'SS Overhead Canopy with Acrylic Graphics', 'Front Cup Holders & Condiment Rack', 'Castor Wheels fitted'],
    priceEstimate: '₹22,000',
    priceValue: 22000,
    dimensions: '36" L x 24" W x 72" H',
    desc: 'Mobile sweet corn steamer and seasoning counter for mall kiosks and street food stalls.'
  },
  {
    id: 'eq-406',
    name: 'Food Warmer Trolley (Heated Cart)',
    category: 'warming',
    categoryLabel: 'Warming & Display',
    image: 'images/hero.png',
    fuel: 'Electric 220V',
    powerKw: 2.5,
    exhaustCfm: 0,
    specs: ['Insulated Double Wall Cabinet', 'Holds 12 - 24 Food Pans / Trays', 'Forced Air Heating Fan', 'Heavy Duty Bumper Castor Wheels'],
    priceEstimate: '₹46,000',
    priceValue: 46000,
    dimensions: '30" L x 30" W x 54" H',
    desc: 'Insulated mobile food warming cabinet trolley for banquet catering and hospital food service.'
  },
  {
    id: 'eq-407',
    name: 'Chat Counter / Pani Puri Counter',
    category: 'warming',
    categoryLabel: 'Warming & Display',
    image: 'images/hero.png',
    fuel: 'Electric / Gas Option',
    powerKw: 1.5,
    exhaustCfm: 0,
    specs: ['Stainless Steel Countertop with Glass Guard', 'GN Pan Cutouts for Chutneys & Ingredients', 'Custom Front Decorative Panel', 'Under-Counter Storage Shelf'],
    priceEstimate: '₹38,000',
    priceValue: 38000,
    dimensions: '60" L x 30" W x 54" H',
    desc: 'Custom stainless steel chat and Pani Puri preparation and service display counter.'
  },

  // --- COMMERCIAL REFRIGERATION ---
  {
    id: 'eq-501',
    name: 'Two Door Vertical Fridge / Chiller',
    category: 'refrigeration',
    categoryLabel: 'Refrigeration',
    image: 'images/hero.png',
    fuel: 'Electric 220V',
    powerKw: 0.9,
    exhaustCfm: 0,
    specs: ['Capacity: 500 Litres SS Chiller', 'Embraco / Danfoss Compressor', 'Digital Temp Controller (1°C - 8°C)', 'Adjustable Wire Shelves'],
    priceEstimate: '₹54,000',
    priceValue: 54000,
    dimensions: '30" L x 30" W x 78" H',
    desc: 'Two-door commercial upright reach-in vertical refrigerator for prep kitchens.'
  },
  {
    id: 'eq-502',
    name: 'Four Door Vertical Fridge / Chiller',
    category: 'refrigeration',
    categoryLabel: 'Refrigeration',
    image: 'images/hero.png',
    fuel: 'Electric 220V',
    powerKw: 1.4,
    exhaustCfm: 0,
    specs: ['Capacity: 1000 Litres Heavy Duty', '4 SS Self-Closing Solid Doors', 'Auto Defrost & Forced Air Cooling', 'SS 304 Interior & Exterior'],
    priceEstimate: '₹78,000',
    priceValue: 78000,
    dimensions: '54" L x 30" W x 78" H',
    desc: 'Large capacity 4-door vertical commercial reach-in refrigerator for hotel bulk storage.'
  },
  {
    id: 'eq-503',
    name: 'Table Top Under-Counter Fridge',
    category: 'refrigeration',
    categoryLabel: 'Refrigeration',
    image: 'images/hero.png',
    fuel: 'Electric 220V',
    powerKw: 0.6,
    exhaustCfm: 0,
    specs: ['Flat SS Prep Top Counter', 'Capacity: 250 Litres Under Storage', 'Magnetic Door Gaskets', 'Compact Kitchen Footprint'],
    priceEstimate: '₹38,000',
    priceValue: 38000,
    dimensions: '48" L x 28" W x 34" H',
    desc: 'Commercial under-counter refrigerated work table for chef prep stations.'
  },
  {
    id: 'eq-504',
    name: 'Salad & Sandwich Counter Fridge',
    category: 'refrigeration',
    categoryLabel: 'Refrigeration',
    image: 'images/hero.png',
    fuel: 'Electric 220V',
    powerKw: 0.8,
    exhaustCfm: 0,
    specs: ['Top Cold Well holds 6 - 9 GN Pans', 'Under-counter Refrigerated Cabinet', 'Cutting Board Work Edge', 'Night Cover Hood'],
    priceEstimate: '₹46,000',
    priceValue: 46000,
    dimensions: '48" L x 30" W x 42" H',
    desc: 'Refrigerated salad and sandwich preparation counter with top chilled condiment pans.'
  },

  // --- STAINLESS STEEL TABLES & FABRICATION ---
  {
    id: 'eq-601',
    name: 'Work Table with 2 Under-shelves (2 U/S)',
    category: 'ss_fabrication',
    categoryLabel: 'SS Tables & Sinks',
    image: 'images/prep_table.png',
    fuel: 'None',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['16 Gauge SS 304 Top Sheet', '2 Tier SS Under Storage Shelves', 'Adjustable Bullet Feet', 'Sound Deadened Top Board'],
    priceEstimate: '₹18,200',
    priceValue: 18200,
    dimensions: '60" L x 28" W x 34" H',
    desc: 'Heavy-duty stainless steel prep table with two lower storage shelves.'
  },
  {
    id: 'eq-602',
    name: 'Work Table with Integrated Sink',
    category: 'ss_fabrication',
    categoryLabel: 'SS Tables & Sinks',
    image: 'images/sink_unit.png',
    fuel: 'Water Inlet / Drain',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['16" x 16" Deep SS Sink Bowl', 'Prep Worktable Board', 'Rear 150mm Splashback Guard', 'Under-shelf Base'],
    priceEstimate: '₹21,000',
    priceValue: 21000,
    dimensions: '60" L x 28" W x 34" H',
    desc: 'Combination kitchen preparation table with built-in deep washing sink.'
  },
  {
    id: 'eq-603',
    name: 'Hand Wash Sink Counter',
    category: 'ss_fabrication',
    categoryLabel: 'SS Tables & Sinks',
    image: 'images/sink_unit.png',
    fuel: 'Water Inlet / Drain',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Compact Wall Mounted / Free Standing', 'Knee-Operated / Sensor Tap option', 'Full SS 304 Construction', 'Soap Dispenser Rail'],
    priceEstimate: '₹9,800',
    priceValue: 9800,
    dimensions: '20" L x 20" W x 34" H',
    desc: 'Dedicated commercial hand washing sink unit for hygiene compliance.'
  },
  {
    id: 'eq-604',
    name: 'Two Sink (Double Bowl Sink Unit)',
    category: 'ss_fabrication',
    categoryLabel: 'SS Tables & Sinks',
    image: 'images/sink_unit.png',
    fuel: 'Water Inlet / Drain',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Dual 18"x18" Deep SS Sink Bowls', 'Heavy Duty Tubular SS Legs', 'Includes Swivel Faucet Tap', 'Corner Drain Strainers'],
    priceEstimate: '₹22,800',
    priceValue: 22800,
    dimensions: '60" L x 28" W x 34" H',
    desc: 'Double bowl commercial stainless steel pot washing sink unit.'
  },
  {
    id: 'eq-605',
    name: 'Three Sink (Triple Bowl Wash Unit)',
    category: 'ss_fabrication',
    categoryLabel: 'SS Tables & Sinks',
    image: 'images/sink_unit.png',
    fuel: 'Water Inlet / Drain',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['3 Wash / Rinse / Sanitize Bowls', 'Compliance Food Service Standard', 'Heavy Duty Frame Legs', 'Integrated Drainboard'],
    priceEstimate: '₹31,000',
    priceValue: 31000,
    dimensions: '84" L x 28" W x 34" H',
    desc: 'Commercial triple bowl sink unit for wash, rinse, and sanitize dishwashing workflow.'
  },
  {
    id: 'eq-606',
    name: 'Sink with Splashback (Flash Sink)',
    category: 'ss_fabrication',
    categoryLabel: 'SS Tables & Sinks',
    image: 'images/sink_unit.png',
    fuel: 'Water Inlet / Drain',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['High 200mm Rear Wall Splashback', 'Deep Drawn SS Bowl', 'Adjustable Feet', 'Reinforced Under Frame'],
    priceEstimate: '₹16,500',
    priceValue: 16500,
    dimensions: '30" L x 28" W x 34" H',
    desc: 'Single bowl washing sink with extended rear wall splash guard.'
  },
  {
    id: 'eq-607',
    name: 'Standing Table (Dining Counter)',
    category: 'ss_fabrication',
    categoryLabel: 'SS Tables & Sinks',
    image: 'images/prep_table.png',
    fuel: 'None',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Round / Square Top Plate', 'Central Heavy Pipe Pedestal Base', 'SS 304 Satin Finish', 'Easy Wipe Sanitation'],
    priceEstimate: '₹8,500',
    priceValue: 8500,
    dimensions: '30" Dia x 42" H',
    desc: 'High standing stainless steel eating table for fast food joints and self-service outlets.'
  },
  {
    id: 'eq-608',
    name: 'Standing Table with Toughened Glass Top',
    category: 'ss_fabrication',
    categoryLabel: 'SS Tables & Sinks',
    image: 'images/prep_table.png',
    fuel: 'None',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['10mm Toughened Glass Top Board', 'SS Pedestal Frame', 'Modern Fast Food Styling', 'Heavy Floor Base'],
    priceEstimate: '₹11,500',
    priceValue: 11500,
    dimensions: '32" Dia x 42" H',
    desc: 'Modern standing dining table with toughened glass top and stainless steel pedestal.'
  },
  {
    id: 'eq-609',
    name: '8 Seat Dining Table with Fixed Stools',
    category: 'ss_fabrication',
    categoryLabel: 'SS Tables & Sinks',
    image: 'images/prep_table.png',
    fuel: 'None',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Integrated 8 SS Round Swivel Stools', 'Heavy Frame Canteen Structure', 'Easy Floor Cleaning Clearance', 'SS 304 Top Board'],
    priceEstimate: '₹34,000',
    priceValue: 34000,
    dimensions: '84" L x 48" W x 30" H',
    desc: 'Institutional 8-seater canteen dining table with attached swivel seats.'
  },
  {
    id: 'eq-610',
    name: 'Work Table with Attached Seats',
    category: 'ss_fabrication',
    categoryLabel: 'SS Tables & Sinks',
    image: 'images/prep_table.png',
    fuel: 'None',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['4 / 6 Attached Swing Seats', 'SS Tubular Heavy Base', 'Space Saving Design', 'Ideal for Staff Refectory'],
    priceEstimate: '₹26,000',
    priceValue: 26000,
    dimensions: '60" L x 42" W x 30" H',
    desc: 'Space-saving work and dining table with attached swing-out seating.'
  },
  {
    id: 'eq-611',
    name: 'Commercial Folding Table',
    category: 'ss_fabrication',
    categoryLabel: 'SS Tables & Sinks',
    image: 'images/prep_table.png',
    fuel: 'None',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Foldable Leg Frame Mechanism', 'Portable SS 304 Top Sheet', 'Easy Storage & Outdoor Catering', 'Heavy Duty Hinges'],
    priceEstimate: '₹12,800',
    priceValue: 12800,
    dimensions: '60" L x 28" W x 30" H',
    desc: 'Portable heavy-duty stainless steel folding table for outdoor catering and temporary setups.'
  },
  {
    id: 'eq-612',
    name: 'Cash Table / Billing Counter',
    category: 'ss_fabrication',
    categoryLabel: 'SS Tables & Sinks',
    image: 'images/prep_table.png',
    fuel: 'None',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Lockable Cash Drawers', 'Cable Wire Hole Grommet', 'Footrest Bar', 'Polished SS Finish'],
    priceEstimate: '₹19,500',
    priceValue: 19500,
    dimensions: '42" L x 24" W x 36" H',
    desc: 'Stainless steel cash counter desk with lockable storage drawers for restaurant billing.'
  },
  {
    id: 'eq-613',
    name: 'Vegetable Prep Table',
    category: 'ss_fabrication',
    categoryLabel: 'SS Tables & Sinks',
    image: 'images/prep_table.png',
    fuel: 'None',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Tilted Top Cutting Edge', 'Integrated Waste Chute Hole', 'SS Mesh Bottom Drain Shelf', 'Easy Wash Down'],
    priceEstimate: '₹17,500',
    priceValue: 17500,
    dimensions: '48" L x 28" W x 34" H',
    desc: 'Specialized stainless steel vegetable chopping and sorting prep table with waste chute.'
  },
  {
    id: 'eq-614',
    name: 'Stainless Steel Storage Cabinet',
    category: 'ss_fabrication',
    categoryLabel: 'SS Tables & Sinks',
    image: 'images/prep_table.png',
    fuel: 'None',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Hinged / Sliding SS Lockable Doors', '2 Adjustable Storage Shelves Inside', 'Dust & Pest Proof Enclosure', 'SS 304 Material'],
    priceEstimate: '₹28,500',
    priceValue: 28500,
    dimensions: '48" L x 20" W x 60" H',
    desc: 'Enclosed stainless steel storage cabinet with lockable doors for clean storage of spices and cutlery.'
  },
  {
    id: 'eq-615',
    name: 'SS Slipper Stand / Shoe Rack',
    category: 'ss_fabrication',
    categoryLabel: 'SS Tables & Sinks',
    image: 'images/prep_table.png',
    fuel: 'None',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['3 / 4 Tier Slanted SS Racks', 'Hygienic Clean Entry Standard', 'Washable Tubular Frame', 'Heavy Floor Base'],
    priceEstimate: '₹9,500',
    priceValue: 9500,
    dimensions: '36" L x 14" W x 42" H',
    desc: 'Stainless steel footwear rack for maintaining hygiene standards at kitchen entryways.'
  },
  {
    id: 'eq-616',
    name: 'Commercial SS Water Tank',
    category: 'ss_fabrication',
    categoryLabel: 'SS Tables & Sinks',
    image: 'images/hero.png',
    fuel: 'None',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Capacity: 200 to 1000 Litres', 'Food Grade SS 304 Sheet', 'Includes Drainage Valve & Top Lid', 'Leg Support Stand'],
    priceEstimate: '₹24,000',
    priceValue: 24000,
    dimensions: '36" Dia x 48" H',
    desc: 'Custom food-grade stainless steel storage water tank for commercial kitchens.'
  },

  // --- STORAGE & TROLLEYS ---
  {
    id: 'eq-701',
    name: '4-Tier SS Storage Rack',
    category: 'storage_trolleys',
    categoryLabel: 'Storage & Trolleys',
    image: 'images/prep_table.png',
    fuel: 'None',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['4 Heavy Load SS Shelves', 'Solid / Perforated Shelf Options', 'Load Capacity: 250kg Per Shelf', 'Adjustable Feet'],
    priceEstimate: '₹14,500',
    priceValue: 14500,
    dimensions: '48" L x 20" W x 72" H',
    desc: 'Multi-tier stainless steel heavy-duty rack for storing cookware, ingredients, and dry stock.'
  },
  {
    id: 'eq-702',
    name: 'Commercial Pot Rack',
    category: 'storage_trolleys',
    categoryLabel: 'Storage & Trolleys',
    image: 'images/prep_table.png',
    fuel: 'None',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Tubular Slatted Racks for Drainage', 'Wall Mounted or Free Standing', 'Heavy Capacity for Kadai & Vessels', 'Corrosion Free SS 304'],
    priceEstimate: '₹12,500',
    priceValue: 12500,
    dimensions: '48" L x 18" W x 60" H',
    desc: 'Slatted stainless steel pot drying rack designed for heavy vessels and pans.'
  },
  {
    id: 'eq-703',
    name: 'Platform Heavy Duty Trolley',
    category: 'storage_trolleys',
    categoryLabel: 'Storage & Trolleys',
    image: 'images/prep_table.png',
    fuel: 'None',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Flat Heavy Duty SS Base Plate', 'Ergonomic Push Handle Bar', 'Heavy Load Swivel Castors (300kg capacity)', 'Rubber Bumper Corners'],
    priceEstimate: '₹9,800',
    priceValue: 9800,
    dimensions: '36" L x 24" W x 36" H',
    desc: 'Heavy-duty stainless steel platform trolley for moving bulk gas cylinders and flour sacks.'
  },
  {
    id: 'eq-704',
    name: 'Plate Collection & Dish Trolley',
    category: 'storage_trolleys',
    categoryLabel: 'Storage & Trolleys',
    image: 'images/prep_table.png',
    fuel: 'None',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Includes Plastic / SS Tubs for Cutlery', '3 Rimmed Tray Tiers', 'Lockable Castor Wheels', 'Easy Wash Down Frame'],
    priceEstimate: '₹11,800',
    priceValue: 11800,
    dimensions: '32" L x 20" W x 36" H',
    desc: 'Service trolley designed for quick collection of dirty dining plates and cutlery.'
  },
  {
    id: 'eq-705',
    name: 'Vegetable Rack Holding Trolley',
    category: 'storage_trolleys',
    categoryLabel: 'Storage & Trolleys',
    image: 'images/prep_table.png',
    fuel: 'None',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Holds 8 to 12 Perforated Plastic Crates', 'Slanted Angle Racks for Airflow', 'Mobile Castor Wheels Base', 'Heavy SS Frame'],
    priceEstimate: '₹16,500',
    priceValue: 16500,
    dimensions: '38" L x 24" W x 60" H',
    desc: 'Mobile rack trolley designed to hold vegetable crates with maximum ventilation.'
  }
];

// Blog & Knowledge Hub Articles Data
const blogArticles = [
  {
    id: 'blog-1',
    title: 'Essential Commercial Kitchen Equipment Checklist for Restaurants & Hotels in Bangalore (2026)',
    category: 'Setup & Planning Guide',
    date: 'August 2026',
    readTime: '6 min read',
    image: 'images/hero.png',
    author: 'BKS Engineering Team',
    summary: 'Planning a commercial kitchen setup in Bangalore requires selecting certified food-grade SS 304 equipment, high BTU burners, proper ventilation CFM, and ergonomic prep space.',
    content: `
      <h3>Introduction to Commercial Kitchen Setup in Bengaluru</h3>
      <p>Setting up a commercial hotel, restaurant, or cloud kitchen in Bangalore is an ambitious venture. With high daily order volumes and strict municipal hygiene standards, choosing factory-direct, food-grade SS 304 stainless steel equipment is essential for longevity and seamless operations.</p>
      
      <h4>1. High-Performance Cooking Line</h4>
      <p>The cooking line is the heart of your kitchen. Depending on your menu (South Indian, Chinese, Tandoori, Continental), ensure you invest in heavy-duty cast iron gas ranges:</p>
      <ul>
        <li><strong>High Pressure Single & Dual Burners:</strong> For fast boiling, stock pots, and curries.</li>
        <li><strong>16mm Mild Steel Dosa Tawa:</strong> Essential for uniform heat distribution without burning dosas or chapatis.</li>
        <li><strong>Chinese Wok Jet Burners:</strong> Fitted with water cooling channels to manage intense cooking flames.</li>
      </ul>

      <h4>2. Exhaust Hood & Ducting Ventilation</h4>
      <p>Bangalore climate and enclosed kitchen spaces demand efficient exhaust hoods with baffle filters to capture grease, heat, and smoke. Ensure your blower motor CFM is sized accurately (approx. 300 to 450 CFM per linear foot of hood).</p>

      <h4>3. Stainless Steel Prep & Sanitation Station</h4>
      <p>Chopping tables and pot wash sinks must use 16-gauge SS 304 food-grade sheet to prevent rusting from moisture and acids. Dual or triple-bowl sink units are mandatory for wash-rinse-sanitize protocols.</p>

      <h4>4. Commercial Refrigeration & Hot Display</h4>
      <p>Reach-in vertical 2-door or 4-door chillers maintain safe holding temperatures (1°C - 8°C), while electric Bain Marie hot counters keep cooked gravies hot for fast buffet and delivery dispatches.</p>
    `
  },
  {
    id: 'blog-2',
    title: 'Cloud Kitchen Setup Blueprint: How to Build a High-Output Delivery Hub in 300 Sq. Ft.',
    category: 'Cloud Kitchen Strategy',
    date: 'August 2026',
    readTime: '5 min read',
    image: 'images/prep_table.png',
    author: 'BKS Technical Specialist',
    summary: 'Learn how to optimize a compact 300 sq. ft. cloud kitchen space in Bengaluru for multi-brand food delivery with high order throughput.',
    content: `
      <h3>Maximizing Output in a Compact Delivery Kitchen</h3>
      <p>Cloud kitchens rely on speed, minimal movement waste, and compact multipurpose machinery. In a 300 to 400 sq. ft. footprint, layout design dictates profitability.</p>

      <h4>Key Equipment Modules for Cloud Kitchens</h4>
      <ul>
        <li><strong>Multi-Tasking Cooking Ranges:</strong> Combination Indian & Chinese jet burners save floor space.</li>
        <li><strong>Compact Table-Top Fryers & Grillers:</strong> Instant frying of appetizers with minimal oil degradation.</li>
        <li><strong>Under-Counter Refrigeration:</strong> Refrigerated work tables double as chopping stations on top while storing dough and sauces below.</li>
        <li><strong>Wall-Mounted Pot Racks:</strong> Utilize vertical wall height for pot drying and dry inventory storage.</li>
      </ul>
      <p>BKS Industries specializes in custom CAD floor planning tailored for Swiggy & Zomato cloud kitchen hubs across Bengaluru.</p>
    `
  },
  {
    id: 'blog-3',
    title: 'Stainless Steel SS 304 vs SS 316: Why Food-Grade Fabrication Matters for Kitchens',
    category: 'Metallurgy & Safety',
    date: 'August 2026',
    readTime: '4 min read',
    image: 'images/sink_unit.png',
    author: 'BKS Metallurgy Experts',
    summary: 'Discover the differences between SS 202, SS 304, and SS 316 stainless steel grades, and why non-corrosive SS 304 is the golden standard for food hygiene.',
    content: `
      <h3>Why Stainless Steel Grade Selection Dictates Equipment Lifespan</h3>
      <p>Commercial kitchens are harsh environments exposed to moisture, salt, spices, citrus acids, and high heat. Using sub-standard stainless steel like SS 202 leads to premature rusting and food contamination.</p>

      <h4>SS 304 (18/8 Chrome-Nickel Alloy)</h4>
      <p>SS 304 is the universal standard for commercial food equipment. Its 18% chromium and 8% nickel content provides superior resistance to oxidation, rust, and organic acids found in Indian gravies and spices.</p>

      <h4>SS 316 (Molybdenum Enriched)</h4>
      <p>SS 316 includes 2-3% molybdenum for extreme chemical and saline resistance. It is used in marine applications and high-acid industrial food processing.</p>

      <p>At BKS Industries, we guarantee 100% certified SS 304 food-grade fabrication for all work tables, sink units, Bain Maries, and storage racks.</p>
    `
  },
  {
    id: 'blog-4',
    title: 'Commercial Kitchen Ventilation: Calculating Exhaust Hood CFM Airflow & Duct Sizing',
    category: 'Engineering & Safety',
    date: 'August 2026',
    readTime: '5 min read',
    image: 'images/exhaust_hood.png',
    author: 'BKS HVAC Engineers',
    summary: 'A step-by-step technical guide to calculating exhaust hood CFM, duct diameter, and blower motor horsepower for restaurant fire safety.',
    content: `
      <h3>The Science of Commercial Kitchen Smoke & Heat Extraction</h3>
      <p>Proper ventilation is not just about comfort—it is a critical fire safety and municipal health requirement in Bengaluru commercial buildings.</p>

      <h4>CFM Calculation Formula</h4>
      <p><strong>Required CFM = Hood Length (in feet) × Duty Rating Factor</strong></p>
      <ul>
        <li><strong>Light Duty (Steam & Boiling):</strong> 250 CFM / linear ft</li>
        <li><strong>Medium Duty (Burners, Fryers, Tawa):</strong> 350 CFM / linear ft</li>
        <li><strong>Heavy Duty (Charcoal, Wok Jet, Tandoor):</strong> 450 CFM / linear ft</li>
      </ul>

      <h4>Duct Velocity & Blower Sizing</h4>
      <p>Maintain duct velocity between 1,500 and 1,800 FPM (Feet Per Minute) to prevent oil grease settling inside ducts. BKS Industries custom fabricates SS baffle filter hoods paired with heavy centrifugal blowers.</p>
    `
  }
];

// Preset Kitchen Floor Plan Layout Templates
const layoutPresets = {
  cloud_kitchen: {
    name: 'Cloud Kitchen (300 sq.ft)',
    widthFt: 20,
    lengthFt: 15,
    items: [
      { eqId: 'eq-102', x: 2, y: 2, label: 'Two Burner' },
      { eqId: 'eq-201', x: 7, y: 2, label: 'Dosa Tawa' },
      { eqId: 'eq-601', x: 12, y: 2, label: 'Prep Table 2 U/S' },
      { eqId: 'eq-115', x: 2, y: 8, label: 'Deep Fryer' },
      { eqId: 'eq-701', x: 14, y: 8, label: 'Storage Rack' }
    ]
  },
  restaurant: {
    name: 'Restaurant Kitchen (800 sq.ft)',
    widthFt: 32,
    lengthFt: 25,
    items: [
      { eqId: 'eq-105', x: 2, y: 2, label: '4-Burner & Oven' },
      { eqId: 'eq-108', x: 8, y: 2, label: 'Ind-Chinese Combo' },
      { eqId: 'eq-201', x: 14, y: 2, label: 'Dosa Tawa' },
      { eqId: 'eq-601', x: 22, y: 2, label: 'Prep Table 2 U/S' },
      { eqId: 'eq-604', x: 22, y: 10, label: 'Double Sink' },
      { eqId: 'eq-401', x: 2, y: 12, label: 'Bain Marie' },
      { eqId: 'eq-502', x: 14, y: 16, label: '4-Door Fridge' },
      { eqId: 'eq-701', x: 22, y: 18, label: 'Storage Rack' }
    ]
  },
  banquet: {
    name: 'Hotel & Banquet Setup (1500 sq.ft)',
    widthFt: 50,
    lengthFt: 30,
    items: [
      { eqId: 'eq-105', x: 2, y: 2, label: '4-Burner Range' },
      { eqId: 'eq-109', x: 8, y: 2, label: 'Tilting Bratt Pan' },
      { eqId: 'eq-205', x: 14, y: 2, label: '120 Idly Steamer' },
      { eqId: 'eq-601', x: 32, y: 2, label: 'Prep Table' },
      { eqId: 'eq-605', x: 38, y: 2, label: 'Triple Bowl Sink' },
      { eqId: 'eq-402', x: 2, y: 14, label: 'Bain Marie Over Shelf' },
      { eqId: 'eq-502', x: 22, y: 14, label: '4-Door Fridge' },
      { eqId: 'eq-701', x: 32, y: 14, label: 'Storage Rack' },
      { eqId: 'eq-704', x: 38, y: 14, label: 'Plate Trolley' }
    ]
  }
};

// Global App State
let quoteCart = [];
let activeCategory = 'all';
let searchKeyword = '';

let configState = {
  type: 'cloud_kitchen',
  sizeSqFt: 400,
  modules: ['cooking', 'prep', 'exhaust']
};

let plannerState = {
  widthFt: 24,
  lengthFt: 18,
  placedItems: []
};

// DOM Initializer
document.addEventListener('DOMContentLoaded', () => {
  renderCatalog();
  renderBlogsGrid();
  setupEventListeners();
  updateConfigurator();
  initFloorPlanPlanner();
});

// Toast Helper
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast-message toast-${type}`;
  toast.innerHTML = `<i class="fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-circle-info'}"></i> ${message}`;
  
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  container.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Global Event Listeners
function setupEventListeners() {
  // Scroll listener for header glass effect elevation
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    });
  }

  // Mobile Nav Drawer Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const closeMobileNavBtn = document.getElementById('closeMobileNavBtn');
  const mobileNavBackdrop = document.getElementById('mobileNavBackdrop');

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      if (mobileNavDrawer && mobileNavBackdrop) {
        mobileNavDrawer.classList.add('active');
        mobileNavBackdrop.classList.add('active');
      }
    });
  }

  const closeMobileNav = () => {
    if (mobileNavDrawer && mobileNavBackdrop) {
      mobileNavDrawer.classList.remove('active');
      mobileNavBackdrop.classList.remove('active');
    }
  };

  if (closeMobileNavBtn) closeMobileNavBtn.addEventListener('click', closeMobileNav);
  if (mobileNavBackdrop) mobileNavBackdrop.addEventListener('click', closeMobileNav);

  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  mobileNavLinks.forEach(link => link.addEventListener('click', closeMobileNav));

  // Category Tab Filter
  const tabs = document.querySelectorAll('.category-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      tabs.forEach(t => t.classList.remove('active'));
      e.currentTarget.classList.add('active');
      activeCategory = e.currentTarget.dataset.category;
      renderCatalog();
    });
  });

  // Search Input Filter
  const searchInput = document.getElementById('catalogSearch');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchKeyword = e.target.value.toLowerCase().trim();
      renderCatalog();
    });
  }

  // Quote Drawer Toggle
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

  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeQuoteDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeQuoteDrawer);

  // Configurator Buttons
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
      const valDisplay = document.getElementById('sizeSqFtVal');
      if (valDisplay) valDisplay.innerText = `${configState.sizeSqFt} sq. ft.`;
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

  // Calculators Listener
  const cfmCalcForm = document.getElementById('cfmCalcForm');
  if (cfmCalcForm) {
    cfmCalcForm.addEventListener('input', calculateCFM);
    calculateCFM();
  }

  const lpgCalcForm = document.getElementById('lpgCalcForm');
  if (lpgCalcForm) {
    lpgCalcForm.addEventListener('input', calculateLPG);
    calculateLPG();
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
                          item.categoryLabel.toLowerCase().includes(searchKeyword) ||
                          item.specs.some(s => s.toLowerCase().includes(searchKeyword));
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3.5rem 1.5rem; background: #ffffff; border-radius: 20px; border: 1px dashed var(--steel-border);">
        <i class="fa-solid fa-store-slash" style="font-size: 3rem; color: #94a3b8; margin-bottom: 1rem;"></i>
        <h3 style="font-size: 1.3rem; color: #0f172a; font-weight: 700;">No equipment found matching criteria</h3>
        <p style="color: #64748b; font-size: 0.95rem; margin-top: 0.3rem;">Try broadening your category filter or search terms.</p>
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
        <p style="font-size: 0.82rem; color: var(--steel); margin-bottom: 0.8rem;"><i class="fa-solid fa-ruler-combined" style="color: var(--primary);"></i> ${item.dimensions} | ${item.fuel}</p>
        <ul class="card-specs-list">
          ${item.specs.slice(0, 3).map(spec => `<li><i class="fa-solid fa-circle-check"></i> ${spec}</li>`).join('')}
        </ul>
        <div class="card-footer">
          <div class="price-estimate">
            <span class="price-label">Starting From</span>
            <span class="price-value">${item.priceEstimate}</span>
          </div>
          <div style="display: flex; gap: 0.4rem;">
            <button class="btn btn-outline" onclick="openSpecModal('${item.id}')" style="padding: 0.5rem 0.75rem; font-size: 0.85rem;" title="View Technical Specs & Options">
              <i class="fa-solid fa-sliders"></i> Specs
            </button>
            <button class="btn btn-primary" onclick="addToQuote('${item.id}')" style="padding: 0.5rem 0.85rem; font-size: 0.85rem;">
              <i class="fa-solid fa-plus"></i> Add
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// Render Blog Articles Grid
function renderBlogsGrid() {
  const container = document.getElementById('blogsGrid');
  if (!container) return;

  container.innerHTML = blogArticles.map(article => `
    <div class="blog-card">
      <div class="blog-image-wrap">
        <img src="${article.image}" alt="${article.title}">
        <span class="blog-category-tag">${article.category}</span>
      </div>
      <div class="blog-body">
        <div class="blog-meta">
          <span><i class="fa-regular fa-calendar"></i> ${article.date}</span>
          <span><i class="fa-regular fa-clock"></i> ${article.readTime}</span>
        </div>
        <h3 class="blog-title">${article.title}</h3>
        <p class="blog-summary">${article.summary}</p>
        <button class="btn btn-outline" onclick="openBlogModal('${article.id}')" style="margin-top: auto; padding: 0.6rem 1rem; font-size: 0.88rem;">
          <i class="fa-solid fa-book-open"></i> Read Full Guide
        </button>
      </div>
    </div>
  `).join('');
}

// Open Interactive Blog Article Reader Modal
function openBlogModal(id) {
  const article = blogArticles.find(b => b.id === id);
  if (!article) return;

  const modalHtml = `
    <div id="blogModalBackdrop" class="modal-backdrop">
      <div class="modal-card" style="max-width: 820px; max-height: 90vh; overflow-y: auto;">
        <button onclick="closeBlogModal()" class="modal-close-btn">&times;</button>
        
        <div style="margin-bottom: 1.2rem;">
          <span class="badge-tag" style="background: rgba(245, 158, 11, 0.18); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.35);"><i class="fa-solid fa-bookmark"></i> ${article.category}</span>
          <h2 style="font-size: 1.6rem; color: #ffffff; margin: 0.6rem 0;">${article.title}</h2>
          <div style="font-size: 0.85rem; color: #94a3b8; display: flex; gap: 1.2rem; align-items: center;">
            <span><i class="fa-solid fa-user-gear" style="color: var(--accent);"></i> ${article.author}</span>
            <span><i class="fa-regular fa-calendar"></i> ${article.date}</span>
            <span><i class="fa-regular fa-clock"></i> ${article.readTime}</span>
          </div>
        </div>

        <img src="${article.image}" style="width: 100%; height: 280px; object-fit: cover; border-radius: 14px; margin-bottom: 1.5rem; border: 1px solid rgba(255, 255, 255, 0.15);">

        <div class="blog-article-content" style="color: #cbd5e1; line-height: 1.7; font-size: 0.98rem; margin-bottom: 2rem;">
          ${article.content}
        </div>

        <div style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 14px; padding: 1.25rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
          <div>
            <h4 style="font-size: 1rem; color: #ffffff; margin-bottom: 0.2rem;">Need Expert Layout & Fabrication Advice?</h4>
            <p style="font-size: 0.85rem; color: #94a3b8;">Speak with BKS Industries engineers for a custom layout quote in Bengaluru.</p>
          </div>
          <button class="btn btn-primary" onclick="sendArticleInquiryWhatsApp('${article.title}')">
            <i class="fa-brands fa-whatsapp"></i> Chat with Kitchen Engineer
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function closeBlogModal() {
  const modal = document.getElementById('blogModalBackdrop');
  if (modal) modal.remove();
}

function sendArticleInquiryWhatsApp(articleTitle) {
  let text = `*Inquiry from BKS Industries Blog Guide*\n\n`;
  text += `I was reading your article: "${articleTitle}"\n`;
  text += `I would like to consult with an engineer regarding commercial equipment & layout setup for my kitchen in Bengaluru.`;

  const phone = '918123939433';
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

// Add Item to Quote Cart
function addToQuote(id, customPrice = null, customSpecNotes = '') {
  const item = equipmentData.find(e => e.id === id);
  if (!item) return;

  const priceVal = customPrice !== null ? customPrice : item.priceValue;

  const existing = quoteCart.find(c => c.id === id && c.notes === customSpecNotes);
  if (existing) {
    existing.qty += 1;
  } else {
    quoteCart.push({
      ...item,
      priceValue: priceVal,
      priceEstimate: `₹${priceVal.toLocaleString('en-IN')}`,
      notes: customSpecNotes,
      qty: 1
    });
  }

  updateCartUI();
  showToast(`Added "${item.name}" to Quote List`);

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
      <div style="text-align: center; padding: 3rem 1rem; color: #94a3b8;">
        <i class="fa-solid fa-clipboard-list" style="font-size: 3rem; color: rgba(255,255,255,0.2); margin-bottom: 1rem;"></i>
        <p style="font-weight: 700; font-size: 1.05rem; color: #ffffff;">Your Quote List is empty</p>
        <p style="font-size: 0.85rem; margin-top: 0.4rem;">Explore commercial equipment and click "Add" to generate a formal quote PDF or WhatsApp inquiry.</p>
      </div>
    `;
    if (drawerSubtotal) drawerSubtotal.innerText = '₹0';
    return;
  }

  let totalCost = 0;
  drawerList.innerHTML = quoteCart.map((item, index) => {
    const itemTotal = item.priceValue * item.qty;
    totalCost += itemTotal;
    return `
      <div style="display: flex; gap: 0.8rem; align-items: center; padding: 0.9rem 0; border-bottom: 1px solid #e2e8f0;">
        <img src="${item.image}" style="width: 56px; height: 56px; border-radius: 10px; object-fit: cover; border: 1px solid #cbd5e1;">
        <div style="flex: 1; min-width: 0;">
          <h4 style="font-size: 0.88rem; font-weight: 700; color: #0f172a; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.name}</h4>
          ${item.notes ? `<p style="font-size: 0.72rem; color: #0284c7; font-weight: 600;">${item.notes}</p>` : ''}
          <span style="font-size: 0.82rem; color: var(--accent-hover); font-weight: 700;">${item.priceEstimate}</span>
        </div>
        <div style="display: flex; align-items: center; gap: 0.4rem; background: #f1f5f9; padding: 0.25rem 0.5rem; border-radius: 6px;">
          <button onclick="changeQty(${index}, -1)" style="background: none; font-size: 0.9rem; font-weight: 700; cursor: pointer; width: 20px;">-</button>
          <span style="font-weight: 700; font-size: 0.85rem;">${item.qty}</span>
          <button onclick="changeQty(${index}, 1)" style="background: none; font-size: 0.9rem; font-weight: 700; cursor: pointer; width: 20px;">+</button>
        </div>
        <button onclick="removeFromCart(${index})" style="color: #ef4444; background: none; border: none; font-size: 0.95rem; cursor: pointer; padding: 0.3rem;" title="Remove Item">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `;
  }).join('');

  if (drawerSubtotal) drawerSubtotal.innerText = `₹${totalCost.toLocaleString('en-IN')}`;
}

function changeQty(index, delta) {
  if (!quoteCart[index]) return;
  quoteCart[index].qty += delta;
  if (quoteCart[index].qty <= 0) {
    quoteCart.splice(index, 1);
  }
  updateCartUI();
}

function removeFromCart(index) {
  if (!quoteCart[index]) return;
  quoteCart.splice(index, 1);
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

  quoteCart.forEach((item, idx) => {
    const itemTotal = item.priceValue * item.qty;
    totalEst += itemTotal;
    text += `${idx + 1}. ${item.name} x ${item.qty} - ₹${itemTotal.toLocaleString('en-IN')}\n`;
    if (item.notes) text += `   (Specs: ${item.notes})\n`;
  });

  text += `\n*Estimated Equipment Total:* ₹${totalEst.toLocaleString('en-IN')}\n`;
  text += `\nPlease provide your formal price quotation and availability for Bengaluru setup.`;

  const phone = '918123939433';
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

// Printable PDF Formal Quote Sheet Generator
function downloadQuotePDF() {
  if (quoteCart.length === 0) {
    alert('Please add equipment items to your quote list before generating PDF!');
    return;
  }

  let totalBeforeGst = 0;
  quoteCart.forEach(item => {
    totalBeforeGst += item.priceValue * item.qty;
  });

  const gstAmount = Math.round(totalBeforeGst * 0.18);
  const grandTotal = totalBeforeGst + gstAmount;

  const quoteNo = 'BKSI-QT-' + Math.floor(100000 + Math.random() * 900000);
  const currentDate = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });

  const printWindow = window.open('', '_blank');
  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Formal Quotation - BKS Industries (${quoteNo})</title>
      <style>
        body { font-family: 'Helvetica Neue', Arial, sans-serif; margin: 40px; color: #0f172a; line-height: 1.5; }
        .header { display: flex; justify-content: space-between; border-bottom: 2px solid #0284c7; padding-bottom: 20px; margin-bottom: 25px; }
        .brand { font-size: 24px; font-weight: 800; color: #0f172a; }
        .subbrand { font-size: 12px; color: #64748b; font-weight: 700; text-transform: uppercase; }
        .meta-box { text-align: right; font-size: 13px; color: #334155; }
        .client-section { background: #f8fafc; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 25px; display: flex; justify-content: space-between; }
        table { width: 100%; border-collapse: collapse; margin-bottom: 25px; }
        th { background: #0f172a; color: #ffffff; text-align: left; padding: 10px 12px; font-size: 13px; text-transform: uppercase; }
        td { padding: 10px 12px; border-bottom: 1px solid #e2e8f0; font-size: 13px; }
        .total-table { width: 320px; margin-left: auto; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; }
        .total-table td { padding: 8px 12px; font-weight: 600; }
        .grand-total { background: #fef3c7; color: #b45309; font-size: 16px; font-weight: 800; }
        .terms { margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 15px; font-size: 12px; color: #64748b; }
        .footer-note { text-align: center; margin-top: 40px; font-size: 12px; color: #94a3b8; }
        @media print {
          .no-print { display: none; }
        }
      </style>
    </head>
    <body>
      <div class="no-print" style="margin-bottom: 20px; text-align: right;">
        <button onclick="window.print()" style="background: #0284c7; color: #fff; border: none; padding: 10px 20px; border-radius: 6px; font-weight: bold; cursor: pointer;">Print / Save as PDF</button>
      </div>

      <div class="header">
        <div>
          <div class="brand">BKS INDUSTRIES</div>
          <div class="subbrand">Commercial Kitchen Equipments, Railings & General Fabrications</div>
          <div style="font-size: 12px; color: #475569; margin-top: 4px;">Lakshmidevinagar, Bengaluru 560096 | Ph: +91 81239 39433</div>
          <div style="font-size: 11px; color: #0284c7;">Email: Bks-industries@outlook.com / Bksindustries23@gmail.com | Web: www.bkskitchenequipment.com</div>
        </div>
        <div class="meta-box">
          <div style="font-size: 18px; font-weight: 800; color: #0284c7;">FORMAL QUOTATION</div>
          <div><strong>Quote No:</strong> ${quoteNo}</div>
          <div><strong>Date:</strong> ${currentDate}</div>
          <div><strong>Validity:</strong> 30 Days</div>
        </div>
      </div>

      <div class="client-section">
        <div>
          <div style="font-weight: 700; color: #0f172a; margin-bottom: 4px;">PREPARED FOR:</div>
          <div>Commercial Kitchen Client / Operator</div>
          <div>Location: Bengaluru, Karnataka</div>
        </div>
        <div>
          <div style="font-weight: 700; color: #0f172a; margin-bottom: 4px;">MANUFACTURER DETAILS:</div>
          <div>BKS Industries (SS 304 Certified)</div>
          <div>Lakshmidevinagar, Bengaluru 560096</div>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Equipment Description & Specifications</th>
            <th>Qty</th>
            <th>Unit Rate (₹)</th>
            <th style="text-align: right;">Amount (₹)</th>
          </tr>
        </thead>
        <tbody>
          ${quoteCart.map((item, i) => `
            <tr>
              <td>${i + 1}</td>
              <td>
                <strong>${item.name}</strong>
                ${item.notes ? `<br><small style="color: #0284c7;">Specs: ${item.notes}</small>` : `<br><small style="color: #64748b;">${item.dimensions} | ${item.fuel}</small>`}
              </td>
              <td>${item.qty}</td>
              <td>₹${item.priceValue.toLocaleString('en-IN')}</td>
              <td style="text-align: right;">₹${(item.priceValue * item.qty).toLocaleString('en-IN')}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>

      <table class="total-table">
        <tr>
          <td>Equipment Subtotal:</td>
          <td style="text-align: right;">₹${totalBeforeGst.toLocaleString('en-IN')}</td>
        </tr>
        <tr>
          <td>GST @ 18%:</td>
          <td style="text-align: right;">₹${gstAmount.toLocaleString('en-IN')}</td>
        </tr>
        <tr class="grand-total">
          <td>Estimated Total:</td>
          <td style="text-align: right;">₹${grandTotal.toLocaleString('en-IN')}</td>
        </tr>
      </table>

      <div class="terms">
        <strong>TERMS & CONDITIONS:</strong>
        <ol style="margin-top: 6px; padding-left: 18px;">
          <li>Payment Terms: 50% advance along with purchase order, balance prior to dispatch.</li>
          <li>Delivery: 7 - 10 working days from date of advance receipt.</li>
          <li>Warranty: 1 Year comprehensive factory warranty against manufacturing defects on all SS 304 fabrications.</li>
          <li>Transportation & On-site Installation: Included within Bengaluru Metropolitan Limits.</li>
        </ol>
      </div>

      <div class="footer-note">
        This is a computer-generated quotation from BKS Industries, Bengaluru. Email: Bks-industries@outlook.com | Ph: +91 81239 39433
      </div>
    </body>
    </html>
  `);
  printWindow.document.close();
}

// Update Interactive Kitchen Configurator Section
function updateConfigurator() {
  const summaryList = document.getElementById('configSummaryList');
  const totalElem = document.getElementById('configTotalVal');
  if (!summaryList || !totalElem) return;

  const typeMultiplier = {
    cloud_kitchen: 1.0,
    restaurant: 1.45,
    hotel: 2.25,
    bakery: 1.25
  };

  const baseSqFtRate = 125;
  const multiplier = typeMultiplier[configState.type] || 1.0;
  
  let estTotal = configState.sizeSqFt * baseSqFtRate * multiplier;

  const moduleRates = {
    cooking: 48000,
    prep: 34000,
    exhaust: 42000,
    warming: 36000,
    storage: 22000,
    conveyor: 30000
  };

  configState.modules.forEach(m => {
    if (moduleRates[m]) {
      estTotal += moduleRates[m];
    }
  });

  summaryList.innerHTML = `
    <li><span>Kitchen Concept:</span> <strong>${configState.type.replace('_', ' ').toUpperCase()}</strong></li>
    <li><span>Carpet Area:</span> <strong>${configState.sizeSqFt} sq. ft.</strong></li>
    <li><span>Selected Modules:</span> <strong>${configState.modules.length} Equipment Packages</strong></li>
    <li style="font-size: 0.8rem; color: #94a3b8; margin-top: 0.5rem; line-height: 1.4;"><i class="fa-solid fa-circle-check" style="color: #10b981;"></i> Includes Food-Grade SS 304 fabrication, layout optimization & on-site fitting in Bengaluru.</li>
  `;

  totalElem.innerText = `₹${Math.round(estTotal).toLocaleString('en-IN')}`;
}

function sendConfiguratorWhatsApp() {
  let text = `*Turnkey Kitchen Estimator Inquiry - BKS Industries*\n\n`;
  text += `*Kitchen Concept:* ${configState.type.replace('_', ' ').toUpperCase()}\n`;
  text += `*Carpet Area:* ${configState.sizeSqFt} sq. ft.\n`;
  text += `*Selected Modules:* ${configState.modules.join(', ').toUpperCase()}\n`;
  text += `*Estimated Budget:* ${document.getElementById('configTotalVal').innerText}\n\n`;
  text += `Please send an engineer to inspect our site in Bengaluru and share an itemized quote.`;

  const phone = '918123939433';
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

// Spec Customizer Modal Popup
function openSpecModal(id) {
  const item = equipmentData.find(e => e.id === id);
  if (!item) return;

  const modalHtml = `
    <div id="specModalBackdrop" class="modal-backdrop">
      <div class="modal-card">
        <button onclick="closeSpecModal()" class="modal-close-btn">&times;</button>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;" class="modal-grid-wrap">
          <div>
            <img src="${item.image}" style="width: 100%; height: 240px; object-fit: cover; border-radius: 14px; border: 1px solid var(--steel-border);">
            <div style="margin-top: 1rem; display: flex; gap: 0.5rem; flex-wrap: wrap;">
              <span class="badge-tag"><i class="fa-solid fa-layer-group"></i> ${item.categoryLabel}</span>
              <span class="badge-tag"><i class="fa-solid fa-ruler-combined"></i> ${item.dimensions}</span>
              <span class="badge-tag"><i class="fa-solid fa-fire"></i> ${item.fuel}</span>
            </div>
          </div>

          <div>
            <h3 style="font-size: 1.35rem; color: #0f172a; margin-bottom: 0.4rem;">${item.name}</h3>
            <p style="color: #64748b; font-size: 0.88rem; margin-bottom: 1rem; line-height: 1.4;">${item.desc}</p>
            
            <form id="modalCustomizerForm" onchange="calculateModalPrice('${item.id}')">
              <div style="margin-bottom: 0.8rem;">
                <label style="font-size: 0.82rem; font-weight: 700; color: #0f172a;">Stainless Steel Grade & Gauge:</label>
                <select id="modalGauge" class="form-control" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; margin-top: 0.2rem;">
                  <option value="1.0" selected>SS 304 Food Grade - 16 Gauge Heavy Duty</option>
                  <option value="0.88">SS 304 Food Grade - 18 Gauge Standard</option>
                  <option value="1.15">SS 316 Premium Chemical/Acid Resistance (+15%)</option>
                </select>
              </div>

              <div style="margin-bottom: 0.8rem;">
                <label style="font-size: 0.82rem; font-weight: 700; color: #0f172a;">Power / Fuel Configuration:</label>
                <select id="modalFuel" class="form-control" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; margin-top: 0.2rem;">
                  <option value="standard" selected>Standard (${item.fuel})</option>
                  <option value="custom_png">Commercial PNG Pipeline Fitting</option>
                  <option value="custom_elec">Electric Heavy Heating Elements</option>
                </select>
              </div>

              <div style="margin-bottom: 1.2rem;">
                <label style="font-size: 0.82rem; font-weight: 700; color: #0f172a;">Custom Options / Add-ons:</label>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.4rem; margin-top: 0.3rem;">
                  <label style="font-size: 0.78rem; display: flex; align-items: center; gap: 0.3rem;">
                    <input type="checkbox" id="addWheels" value="2500"> Lockable Castor Wheels (+₹2,500)
                  </label>
                  <label style="font-size: 0.78rem; display: flex; align-items: center; gap: 0.3rem;">
                    <input type="checkbox" id="addShelf" value="3500"> Overhead SS Shelf (+₹3,500)
                  </label>
                </div>
              </div>

              <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 0.8rem; border-top: 1px solid #e2e8f0;">
                <div>
                  <span style="font-size: 0.75rem; color: #64748b; text-transform: uppercase; font-weight: 700; display: block;">Customized Price:</span>
                  <span id="modalCalculatedPrice" style="font-size: 1.4rem; font-weight: 800; color: var(--accent-hover);">${item.priceEstimate}</span>
                </div>
                <button type="button" class="btn btn-primary" onclick="addModalCustomToQuote('${item.id}')">
                  <i class="fa-solid fa-plus"></i> Add Customized to Quote
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function calculateModalPrice(id) {
  const item = equipmentData.find(e => e.id === id);
  if (!item) return;

  const gaugeSelect = document.getElementById('modalGauge');
  const addWheels = document.getElementById('addWheels');
  const addShelf = document.getElementById('addShelf');

  let base = item.priceValue;
  const gaugeMultiplier = parseFloat(gaugeSelect ? gaugeSelect.value : 1.0);
  base = base * gaugeMultiplier;

  if (addWheels && addWheels.checked) base += parseInt(addWheels.value);
  if (addShelf && addShelf.checked) base += parseInt(addShelf.value);

  const rounded = Math.round(base);
  const displayElem = document.getElementById('modalCalculatedPrice');
  if (displayElem) displayElem.innerText = `₹${rounded.toLocaleString('en-IN')}`;

  return rounded;
}

function addModalCustomToQuote(id) {
  const calculatedPrice = calculateModalPrice(id);
  const gaugeSelect = document.getElementById('modalGauge');
  const gaugeText = gaugeSelect ? gaugeSelect.options[gaugeSelect.selectedIndex].text.split('-')[1] || '' : '';

  closeSpecModal();
  addToQuote(id, calculatedPrice, gaugeText.trim());
}

function closeSpecModal() {
  const modal = document.getElementById('specModalBackdrop');
  if (modal) modal.remove();
}

// -------------------------------------------------------------
// Interactive 2D Visual Kitchen Floor Plan Builder
// -------------------------------------------------------------
function initFloorPlanPlanner() {
  const canvasGrid = document.getElementById('plannerCanvasGrid');
  if (!canvasGrid) return;

  renderPlannerPalette();
  loadLayoutPreset('cloud_kitchen');

  const presetBtns = document.querySelectorAll('.preset-btn');
  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      presetBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      loadLayoutPreset(btn.dataset.preset);
    });
  });

  const widthInput = document.getElementById('plannerWidthInput');
  const lengthInput = document.getElementById('plannerLengthInput');

  if (widthInput && lengthInput) {
    widthInput.addEventListener('change', () => {
      plannerState.widthFt = Math.max(10, Math.min(60, parseInt(widthInput.value) || 20));
      updatePlannerUI();
    });
    lengthInput.addEventListener('change', () => {
      plannerState.lengthFt = Math.max(10, Math.min(60, parseInt(lengthInput.value) || 15));
      updatePlannerUI();
    });
  }
}

function renderPlannerPalette() {
  const paletteContainer = document.getElementById('plannerPaletteList');
  if (!paletteContainer) return;

  paletteContainer.innerHTML = equipmentData.map(item => `
    <div class="planner-palette-item" onclick="addEquipmentToPlanner('${item.id}')" title="Click to add ${item.name} to layout canvas">
      <img src="${item.image}" alt="${item.name}">
      <div>
        <div style="font-weight: 700; font-size: 0.82rem; color: #ffffff;">${item.name}</div>
        <div style="font-size: 0.72rem; color: #94a3b8;">${item.dimensions} • ${item.priceEstimate}</div>
      </div>
      <i class="fa-solid fa-plus-circle" style="color: var(--accent); margin-left: auto; font-size: 1.1rem;"></i>
    </div>
  `).join('');
}

function loadLayoutPreset(presetKey) {
  const preset = layoutPresets[presetKey];
  if (!preset) return;

  plannerState.widthFt = preset.widthFt;
  plannerState.lengthFt = preset.lengthFt;

  const wInput = document.getElementById('plannerWidthInput');
  const lInput = document.getElementById('plannerLengthInput');
  if (wInput) wInput.value = preset.widthFt;
  if (lInput) lInput.value = preset.lengthFt;

  plannerState.placedItems = preset.items.map((it, idx) => ({
    id: `placed-${Date.now()}-${idx}`,
    eqId: it.eqId,
    x: it.x,
    y: it.y,
    label: it.label
  }));

  updatePlannerUI();
}

function addEquipmentToPlanner(eqId) {
  const eq = equipmentData.find(e => e.id === eqId);
  if (!eq) return;

  const newX = (plannerState.placedItems.length * 3) % (plannerState.widthFt - 4) + 2;
  const newY = (plannerState.placedItems.length * 2) % (plannerState.lengthFt - 4) + 2;

  plannerState.placedItems.push({
    id: `placed-${Date.now()}`,
    eqId: eq.id,
    x: newX,
    y: newY,
    label: eq.name.split(' ')[0] + ' ' + (eq.name.split(' ')[1] || '')
  });

  updatePlannerUI();
  showToast(`Added ${eq.name} to Floor Plan Grid`);
}

function removePlannerItem(placedId) {
  plannerState.placedItems = plannerState.placedItems.filter(p => p.id !== placedId);
  updatePlannerUI();
}

function clearPlannerGrid() {
  if (plannerState.placedItems.length === 0) return;
  if (confirm('Are you sure you want to clear all equipment from the layout grid?')) {
    plannerState.placedItems = [];
    updatePlannerUI();
  }
}

function updatePlannerUI() {
  const canvasGrid = document.getElementById('plannerCanvasGrid');
  if (!canvasGrid) return;

  canvasGrid.style.gridTemplateColumns = `repeat(${plannerState.widthFt}, 1fr)`;
  canvasGrid.style.gridTemplateRows = `repeat(${plannerState.lengthFt}, 1fr)`;

  let totalCfm = 0;
  let totalKw = 0;
  let gasPoints = 0;
  let totalCost = 0;

  canvasGrid.innerHTML = `
    <div class="planner-grid-dimensions-badge">${plannerState.widthFt} ft (W) × ${plannerState.lengthFt} ft (L) [Total: ${plannerState.widthFt * plannerState.lengthFt} sq.ft]</div>
  ` + plannerState.placedItems.map(item => {
    const eq = equipmentData.find(e => e.id === item.eqId);
    if (!eq) return '';

    totalCfm += eq.exhaustCfm;
    totalKw += eq.powerKw;
    if (eq.fuel.includes('Gas') || eq.fuel.includes('LPG')) gasPoints += 1;
    totalCost += eq.priceValue;

    return `
      <div class="planner-placed-node" style="grid-column: ${Math.min(item.x, plannerState.widthFt - 2)} / span 4; grid-row: ${Math.min(item.y, plannerState.lengthFt - 2)} / span 3;" title="${eq.name}">
        <span class="placed-node-cat">${eq.categoryLabel}</span>
        <div class="placed-node-title">${item.label || eq.name}</div>
        <button class="placed-node-delete" onclick="removePlannerItem('${item.id}')">&times;</button>
      </div>
    `;
  }).join('');

  document.getElementById('planStatCount').innerText = plannerState.placedItems.length;
  document.getElementById('planStatCFM').innerText = `${totalCfm.toLocaleString('en-IN')} CFM`;
  document.getElementById('planStatPower').innerText = `${totalKw.toFixed(1)} kW / ${gasPoints} Gas`;
  document.getElementById('planStatCost').innerText = `₹${totalCost.toLocaleString('en-IN')}`;
}

function exportPlannerLayoutWhatsApp() {
  if (plannerState.placedItems.length === 0) {
    alert('Please add equipment to your floor plan grid first!');
    return;
  }

  let text = `*Custom Kitchen Floor Plan Inquiry - BKS Industries*\n\n`;
  text += `*Dimensions:* ${plannerState.widthFt} ft x ${plannerState.lengthFt} ft (${plannerState.widthFt * plannerState.lengthFt} sq.ft)\n`;
  text += `*Placed Equipment (${plannerState.placedItems.length} Units):*\n`;

  let totalCost = 0;
  plannerState.placedItems.forEach((p, idx) => {
    const eq = equipmentData.find(e => e.id === p.eqId);
    if (eq) {
      totalCost += eq.priceValue;
      text += `${idx + 1}. ${eq.name} (${eq.dimensions})\n`;
    }
  });

  text += `\n*Calculated Airflow Exhaust Required:* ${document.getElementById('planStatCFM').innerText}\n`;
  text += `*Calculated Electric/Gas Load:* ${document.getElementById('planStatPower').innerText}\n`;
  text += `*Estimated Turnkey Budget:* ₹${totalCost.toLocaleString('en-IN')}\n\n`;
  text += `Please send an engineer with detailed AutoCAD floor layout drawings.`;

  const phone = '918123939433';
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

// -------------------------------------------------------------
// Kitchen Engineering Calculators Logic
// -------------------------------------------------------------
function calculateCFM() {
  const length = parseFloat(document.getElementById('cfmLength').value) || 8;
  const depth = parseFloat(document.getElementById('cfmDepth').value) || 3.5;
  const typeMultiplier = parseFloat(document.getElementById('cfmCookingType').value) || 350;

  const requiredCFM = Math.round(length * typeMultiplier);
  const ductAreaSqFt = requiredCFM / 1500;
  const ductDiameterInches = Math.round(Math.sqrt((4 * ductAreaSqFt) / Math.PI) * 12);
  
  let motorHp = '1.0 HP';
  if (requiredCFM > 3500) motorHp = '3.0 HP (3-Phase)';
  else if (requiredCFM > 2000) motorHp = '2.0 HP (3-Phase)';
  else if (requiredCFM > 1200) motorHp = '1.5 HP';

  const resCfm = document.getElementById('resCFM');
  const resDuct = document.getElementById('resDuct');
  const resHp = document.getElementById('resMotorHp');

  if (resCfm) resCfm.innerText = `${requiredCFM.toLocaleString('en-IN')} CFM`;
  if (resDuct) resDuct.innerText = `${ductDiameterInches}" Round Duct`;
  if (resHp) resHp.innerText = motorHp;
}

function calculateLPG() {
  const burnerCount = parseInt(document.getElementById('lpgBurners').value) || 4;
  const hours = parseFloat(document.getElementById('lpgHours').value) || 10;

  const dailyKg = burnerCount * hours * 0.4;
  const monthlyCylinders = Math.ceil((dailyKg * 30) / 19);
  const approxMonthlyCost = monthlyCylinders * 1850;

  const resKg = document.getElementById('resLpgDaily');
  const resCyl = document.getElementById('resLpgCylinders');
  const resCost = document.getElementById('resLpgCost');

  if (resKg) resKg.innerText = `${dailyKg.toFixed(1)} kg / day`;
  if (resCyl) resCyl.innerText = `${monthlyCylinders} Cylinders (19kg)`;
  if (resCost) resCost.innerText = `₹${approxMonthlyCost.toLocaleString('en-IN')} / mo`;
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

  showToast('Thank you! Your inquiry details have been formatted for instant WhatsApp dispatch.');
  document.getElementById('contactForm').reset();
}
