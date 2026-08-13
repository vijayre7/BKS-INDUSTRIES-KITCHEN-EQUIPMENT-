// BKS Industries - Modern Commercial Kitchen & SS Fabrication Application Logic

// Complete Official BKS Industries Equipment Data Catalog (71 Items across 8 Categories)
const equipmentData = [
  // =========================================================================
  // 1. PREPARATION EQUIPMENT
  // =========================================================================
  {
    id: 'eq-101',
    name: 'SS Plain Work Table',
    category: 'prep',
    categoryLabel: 'Preparation Equipment',
    image: 'images/prep_table.webp',
    fuel: 'None',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['16 Gauge SS 304 Food Grade Sheet', 'Heavy Duty Tubular Pipe Legs', 'Adjustable SS Bullet Feet', 'Sound Deadened Board Under Top'],
    priceEstimate: '₹14,500',
    priceValue: 14500,
    dimensions: '60" L x 28" W x 34" H',
    desc: 'Heavy-duty plain stainless steel preparation work table for commercial kitchens.'
  },
  {
    id: 'eq-102',
    name: 'SS Work Table with Undershelf',
    category: 'prep',
    categoryLabel: 'Preparation Equipment',
    image: 'images/prep_table.webp',
    fuel: 'None',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Food Grade SS 304 Top Sheet', '1 / 2 Tier SS Storage Undershelves', 'Heavy Load Capacity Legs', 'Satin Finish Stainless Steel'],
    priceEstimate: '₹18,200',
    priceValue: 18200,
    dimensions: '60" L x 28" W x 34" H',
    desc: 'Commercial stainless steel prep work table with integrated lower storage shelf.'
  },
  {
    id: 'eq-103',
    name: 'SS Work Table with Sink (1-Bowl / 2-Bowl)',
    category: 'prep',
    categoryLabel: 'Preparation Equipment',
    image: 'images/sink_unit.webp',
    fuel: 'Water Inlet / Drain',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Integrated Single or Double Deep Sink Bowl', 'Full Prep Table Work Area', 'Rear Wall Splashback Guard', 'Includes Swivel Water Tap'],
    priceEstimate: '₹21,000',
    priceValue: 21000,
    dimensions: '60" L x 28" W x 34" H',
    desc: 'Multipurpose preparation table featuring an integrated washing sink bowl.'
  },
  {
    id: 'eq-104',
    name: 'SS Work Table with Splashback',
    category: 'prep',
    categoryLabel: 'Preparation Equipment',
    image: 'images/prep_table.webp',
    fuel: 'None',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['150mm High Rear Wall Splash Guard', 'Heavy 16 Gauge SS 304 Top', 'Cross Reinforced Understructure', 'Adjustable Levelling Feet'],
    priceEstimate: '₹16,500',
    priceValue: 16500,
    dimensions: '60" L x 28" W x 34" H',
    desc: 'Food prep table equipped with rear wall splashback to prevent spills.'
  },
  {
    id: 'eq-105',
    name: 'SS Table with Cross Bracing',
    category: 'prep',
    categoryLabel: 'Preparation Equipment',
    image: 'images/prep_table.webp',
    fuel: 'None',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['3-Side Tubular SS Cross Bracing', 'Heavy Duty Work Surface', 'Ideal for Mobile Undercounter Units', 'SS 304 Food Grade Material'],
    priceEstimate: '₹13,800',
    priceValue: 13800,
    dimensions: '48" L x 28" W x 34" H',
    desc: 'Sturdy open-base stainless steel table with 3-sided tubular cross bracing.'
  },
  {
    id: 'eq-107',
    name: 'SS Dough Kneading Machine',
    category: 'prep',
    categoryLabel: 'Preparation Equipment',
    image: 'images/baking_oven.webp',
    fuel: 'Electric 220V / 415V',
    powerKw: 2.2,
    exhaustCfm: 0,
    specs: ['Capacity: 10kg / 25kg Batter', 'Food Grade SS 304 Mixing Bowl', 'Heavy Duty Gear Box Drive', 'Safety Mesh Cover Guard'],
    priceEstimate: '₹34,500',
    priceValue: 34500,
    dimensions: '28" L x 20" W x 36" H',
    desc: 'Electric flour dough kneader machine for bulk chapatis, rotis, and bakery items.'
  },
  {
    id: 'eq-108',
    name: 'Commercial Wet Grinder (Tilting / Conventional)',
    category: 'prep',
    categoryLabel: 'Preparation Equipment',
    image: 'images/idly_steamer.webp',
    fuel: 'Electric 220V / 415V',
    powerKw: 1.5,
    exhaustCfm: 0,
    specs: ['High Quality Natural Black Granite Stones', 'Capacity: 5L / 10L / 20L', 'Manual Tilting Mechanism for Easy Emptying', 'Heavy SS 304 Outer Drum'],
    priceEstimate: '₹28,500',
    priceValue: 28500,
    dimensions: '30" L x 22" W x 42" H',
    desc: 'Heavy-duty commercial wet grinder for high volume idly and dosa batter.'
  },

  // =========================================================================
  // 2. WASHING & CLEANING EQUIPMENT
  // =========================================================================
  {
    id: 'eq-201',
    name: 'Single Sink Unit',
    category: 'washing',
    categoryLabel: 'Washing & Cleaning Equipment',
    image: 'images/sink_unit.webp',
    fuel: 'Water Inlet / Drain',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Single Deep Drawn 18"x18" SS Bowl', '16 Gauge SS 304 Construction', 'Rear 150mm Wall Splash Guard', 'Swivel Spout Faucet Included'],
    priceEstimate: '₹14,500',
    priceValue: 14500,
    dimensions: '30" L x 28" W x 34" H',
    desc: 'Commercial single bowl stainless steel pot washing sink unit.'
  },
  {
    id: 'eq-202',
    name: 'Double Sink Unit',
    category: 'washing',
    categoryLabel: 'Washing & Cleaning Equipment',
    image: 'images/sink_unit.webp',
    fuel: 'Water Inlet / Drain',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Dual 18"x18" Deep SS Sink Bowls', 'Heavy Duty Tubular Legs', 'Swivel Faucet Water Connections', 'Corner Waste Strainers'],
    priceEstimate: '₹22,800',
    priceValue: 22800,
    dimensions: '60" L x 28" W x 34" H',
    desc: 'Double bowl stainless steel kitchen wash and rinse sink.'
  },
  {
    id: 'eq-203',
    name: 'Triple Sink Unit',
    category: 'washing',
    categoryLabel: 'Washing & Cleaning Equipment',
    image: 'images/sink_unit.webp',
    fuel: 'Water Inlet / Drain',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['3 Separate Bowls for Wash, Rinse, Sanitize', 'Health Dept Compliance Standard', 'Integrated Drainboard Section', 'Heavy Duty SS Frame'],
    priceEstimate: '₹31,000',
    priceValue: 31000,
    dimensions: '84" L x 28" W x 34" H',
    desc: 'Triple bowl commercial dishwashing sink unit for strict sanitation protocols.'
  },
  {
    id: 'eq-204',
    name: 'Pot Wash Sink (Heavy Duty)',
    category: 'washing',
    categoryLabel: 'Washing & Cleaning Equipment',
    image: 'images/sink_unit.webp',
    fuel: 'Water Inlet / Drain',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Extra-Deep 24"x24" x 16" Deep Bowl', 'Heavy 14-16 Gauge SS 304 Sheet', 'Designed for Heavy Kadais & Degs', 'Reinforced Leg Supports'],
    priceEstimate: '₹24,500',
    priceValue: 24500,
    dimensions: '36" L x 30" W x 34" H',
    desc: 'Heavy duty deep pot washing sink specifically for large hotel cookware.'
  },
  {
    id: 'eq-205',
    name: 'Dish Landing Table (Soiled)',
    category: 'washing',
    categoryLabel: 'Washing & Cleaning Equipment',
    image: 'images/sink_unit.webp',
    fuel: 'Water Inlet / Drain',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Includes Rubber Rim Waste Scrap Hole', 'Overhead Rack Storage Rail', 'Raised Overflow Edges', 'Connects to Dishwasher Inlet'],
    priceEstimate: '₹19,800',
    priceValue: 19800,
    dimensions: '60" L x 30" W x 34" H',
    desc: 'Soiled dish entry table with waste scrap hole and rack sliding rail.'
  },
  {
    id: 'eq-206',
    name: 'Clean Dish Table',
    category: 'washing',
    categoryLabel: 'Washing & Cleaning Equipment',
    image: 'images/prep_table.webp',
    fuel: 'None',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Attaches directly to Dishwasher Exit', 'SS Storage Undershelf', 'Drying Drain Channels', 'Full SS 304 Construction'],
    priceEstimate: '₹16,200',
    priceValue: 16200,
    dimensions: '48" L x 30" W x 34" H',
    desc: 'Clean dish exit table for receiving and air drying clean rack loads.'
  },
  {
    id: 'eq-207',
    name: 'SS Mop Sink',
    category: 'washing',
    categoryLabel: 'Washing & Cleaning Equipment',
    image: 'images/sink_unit.webp',
    fuel: 'Water Inlet / Drain',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Floor-Mounted Low Height Basin', 'Heavy Removable Strainer Grid', 'Rear High Wall Splash Guard', 'Full SS 304 Sheet'],
    priceEstimate: '₹11,500',
    priceValue: 11500,
    dimensions: '24" L x 24" W x 18" H',
    desc: 'Low-profile mop bucket filling and cleaning sink unit.'
  },
  {
    id: 'eq-208',
    name: 'Pre-Rinse Shower with Add-on Faucet',
    category: 'washing',
    categoryLabel: 'Washing & Cleaning Equipment',
    image: 'images/sink_unit.webp',
    fuel: 'Water Inlet / Drain',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Heavy-Duty Flex Stainless Spring Hose', 'High Pressure Spray Valve', 'Deck-Mounted Add-on Faucet Spout', 'Brass Internal Plumbing'],
    priceEstimate: '₹12,800',
    priceValue: 12800,
    dimensions: '8" Deck Mount x 38" Height',
    desc: 'Commercial overhead spring spray pre-rinse unit for dishwashing stations.'
  },
  {
    id: 'eq-211',
    name: 'Conveyor Dishwasher',
    category: 'washing',
    categoryLabel: 'Washing & Cleaning Equipment',
    image: 'images/vertical_chiller.webp',
    fuel: 'Electric 415V 3-Phase',
    powerKw: 18.0,
    exhaustCfm: 600,
    specs: ['Capacity: 150 - 200 Racks per Hour', 'Continuous Rack Conveyor System', 'Multi-Stage Wash & Dry Zones', 'Heavy Duty Industrial Build'],
    priceEstimate: '₹3,40,000',
    priceValue: 340000,
    dimensions: '80" L x 32" W x 64" H',
    desc: 'High volume flight conveyor dishwashing machine for banquet halls and large canteens.'
  },

  // =========================================================================
  // 3. COOKING EQUIPMENT
  // =========================================================================
  {
    id: 'eq-302',
    name: 'Continental Gas Range',
    category: 'cooking',
    categoryLabel: 'Cooking Equipment',
    image: 'images/four_burner_oven.webp',
    fuel: 'LPG / PNG Gas',
    powerKw: 0,
    exhaustCfm: 1000,
    specs: ['Heavy Open Top Cast Iron Grates', 'Precision Brass Flame Valves', 'Option for Bottom Baking Oven', 'Full SS 304 Construction'],
    priceEstimate: '₹42,000',
    priceValue: 42000,
    dimensions: '36" L x 36" W x 34" H',
    desc: 'Continental heavy-duty gas cooking range for saucepans, skillets, and multi-dish lines.'
  },
  {
    id: 'eq-303',
    name: 'Chinese Cooking Range (High Pressure)',
    category: 'cooking',
    categoryLabel: 'Cooking Equipment',
    image: 'images/burner_oven.webp',
    fuel: 'LPG High Pressure Gas',
    powerKw: 0,
    exhaustCfm: 1200,
    specs: ['High Pressure Jet Wok Burners', 'Integrated Water Wash System', 'Heavy Cast Iron Wok Rings', 'Swivel Water Faucet'],
    priceEstimate: '₹22,500',
    priceValue: 22500,
    dimensions: '30" to 60" L x 30" W x 34" H',
    desc: 'Specialized commercial high-flame Chinese wok burner range with water cooling trough.'
  },
  {
    id: 'eq-304',
    name: 'Low Height Stock Pot Range',
    category: 'cooking',
    categoryLabel: 'Cooking Equipment',
    image: 'images/burner_oven.webp',
    fuel: 'LPG / PNG Gas',
    powerKw: 0,
    exhaustCfm: 500,
    specs: ['Ergonomic Low 18" Cooking Height', 'Extra Heavy Cast Iron Burner & Grid', 'Handles 100L+ Heavy Boiling Pots', 'SS 304 Heavy Casing'],
    priceEstimate: '₹16,500',
    priceValue: 16500,
    dimensions: '24" L x 24" W x 18" H',
    desc: 'Low height commercial gas range designed for heavy stock pots, biriyani degs, and soups.'
  },
  {
    id: 'eq-305',
    name: 'Bulk Cooking Range',
    category: 'cooking',
    categoryLabel: 'Cooking Equipment',
    image: 'images/burner_oven.webp',
    fuel: 'LPG / PNG Gas',
    powerKw: 0,
    exhaustCfm: 800,
    specs: ['Dual Concentric High BTU Ring Burners', 'Heavy Tubular SS Support Frame', 'Independent Inner/Outer Flame Control', 'Removable Spillage Tray'],
    priceEstimate: '₹29,500',
    priceValue: 29500,
    dimensions: '36" L x 36" W x 24" H',
    desc: 'Industrial bulk cooking range for large volume hotel catering and institution kitchens.'
  },
  {
    id: 'eq-306',
    name: 'SS Dosa Bhatti / Hot Plate',
    category: 'cooking',
    categoryLabel: 'Cooking Equipment',
    image: 'images/dosa_tawa.webp',
    fuel: 'LPG Gas / Electric',
    powerKw: 6.0,
    exhaustCfm: 700,
    specs: ['16mm Machined Mild Steel Top Plate', 'Uniform V-Type Gas Burners', 'Front Oil Collection Trough', 'Full SS 304 Outer Enclosure'],
    priceEstimate: '₹24,500',
    priceValue: 24500,
    dimensions: '48" L x 24" W x 34" H',
    desc: 'Heavy duty commercial Dosa hot plate cooking range.'
  },
  {
    id: 'eq-307',
    name: 'Chapati Puffer Plate',
    category: 'cooking',
    categoryLabel: 'Cooking Equipment',
    image: 'images/dosa_tawa.webp',
    fuel: 'LPG Gas',
    powerKw: 0,
    exhaustCfm: 600,
    specs: ['Combined Cooking Plate + Gas Puffer Grid', 'Separate Burner Controls', 'Heavy Steel Tawa Top', 'SS Protective Side Skirts'],
    priceEstimate: '₹21,500',
    priceValue: 21500,
    dimensions: '42" L x 24" W x 34" H',
    desc: 'Specialized chapati baking plate with integrated puffing burner section.'
  },
  {
    id: 'eq-308',
    name: 'SS Flat Top Griddle',
    category: 'cooking',
    categoryLabel: 'Cooking Equipment',
    image: 'images/dosa_tawa.webp',
    fuel: 'Electric 220V / LPG',
    powerKw: 4.5,
    exhaustCfm: 400,
    specs: ['Polished Chrome / Steel Griddle Plate', 'Thermostatic Temp Control (50°C - 300°C)', 'Removable Front Grease Drawer', 'Countertop / Stand Options'],
    priceEstimate: '₹26,000',
    priceValue: 26000,
    dimensions: '30" L x 24" W x 14" H',
    desc: 'Commercial flat top griddle for burgers, eggs, and breakfast items.'
  },
  {
    id: 'eq-309',
    name: 'Deep Fat Fryer (Electric / Gas - Single/Double Tank)',
    category: 'cooking',
    categoryLabel: 'Cooking Equipment',
    image: 'images/deep_fryer.webp',
    fuel: 'Electric 220V / 415V / LPG',
    powerKw: 6.0,
    exhaustCfm: 400,
    specs: ['Capacity: 6L to 28L Oil Tanks', 'Precision Thermostatic Control', 'Includes SS Nickel Wire Baskets', 'Cold Zone Tech to Prevent Oil Burning'],
    priceEstimate: '₹11,500',
    priceValue: 11500,
    dimensions: '12" to 24" L x 20" W x 34" H',
    desc: 'Commercial deep fat fryer available in single or double tank gas/electric models.'
  },
  {
    id: 'eq-310',
    name: 'Tilting Brat Pan',
    category: 'cooking',
    categoryLabel: 'Cooking Equipment',
    image: 'images/burner_oven.webp',
    fuel: 'Electric 415V / LPG',
    powerKw: 9.0,
    exhaustCfm: 600,
    specs: ['Capacity: 80L SS 304 Pan', 'Manual Worm Gear Tilting System', 'Thermostatic Heat Regulation', 'Counterbalanced Insulated Lid'],
    priceEstimate: '₹1,15,000',
    priceValue: 115000,
    dimensions: '40" L x 36" W x 36" H',
    desc: 'Commercial tilting braising pan for bulk frying, boiling, and sautéing.'
  },
  {
    id: 'eq-311',
    name: 'Boiling Pan (Jacketed)',
    category: 'cooking',
    categoryLabel: 'Cooking Equipment',
    image: 'images/idly_steamer.webp',
    fuel: 'Steam / Electric 415V / LPG',
    powerKw: 12.0,
    exhaustCfm: 500,
    specs: ['Capacity: 100L / 150L / 200L', 'Indirect Water Jacket Heating prevents burning', 'Large 2" Bottom Discharge Valve', 'Full SS 304 Construction'],
    priceEstimate: '₹1,45,000',
    priceValue: 145000,
    dimensions: '36" Dia x 42" H',
    desc: 'Heavy duty steam/gas/electric jacketed boiling pan for rice, sambar, and soups.'
  },
  {
    id: 'eq-312',
    name: 'SS Clay Tandoor (Gas / Charcoal)',
    category: 'cooking',
    categoryLabel: 'Cooking Equipment',
    image: 'images/burner_oven.webp',
    fuel: 'Charcoal / LPG Gas',
    powerKw: 0,
    exhaustCfm: 800,
    specs: ['Authentic Heavy Hand-Crafted Clay Pot', 'SS 304 Square Casing with Insulation', 'High Heat Thermal Rockwool Filling', 'Includes Tandoor Skewers & Lids'],
    priceEstimate: '₹26,000',
    priceValue: 26000,
    dimensions: '30" L x 30" W x 36" H',
    desc: 'Commercial stainless steel encased clay tandoor oven for naan, rotis, and kebabs.'
  },
  {
    id: 'eq-313',
    name: 'Shawarma Machine',
    category: 'cooking',
    categoryLabel: 'Cooking Equipment',
    image: 'images/shawarma_machine.webp',
    fuel: 'LPG Gas / Electric',
    powerKw: 3.0,
    exhaustCfm: 300,
    specs: ['Infrared Ceramic Gas Heating Burners', 'Motorized SS Central Spit Rod', 'Bottom Oil Drip Catch Pan', 'Adjustable Burner Distance'],
    priceEstimate: '₹28,000',
    priceValue: 28000,
    dimensions: '24" L x 24" W x 42" H',
    desc: 'Commercial vertical gas/electric shawarma toaster machine.'
  },
  {
    id: 'eq-314',
    name: 'Salamander (Gas / Electric)',
    category: 'cooking',
    categoryLabel: 'Cooking Equipment',
    image: 'images/shawarma_machine.webp',
    fuel: 'Electric 220V / LPG',
    powerKw: 3.5,
    exhaustCfm: 300,
    specs: ['Height Adjustable Heating Rack Grid', 'Infrared Ceramic Heating Elements', 'Crumb & Grease Collection Tray', 'Countertop or Wall Mountable'],
    priceEstimate: '₹24,500',
    priceValue: 24500,
    dimensions: '30" L x 18" W x 18" H',
    desc: 'Overhead salamander griller for quick browning, cheese melting, and finishing.'
  },
  {
    id: 'eq-315',
    name: 'Commercial Microwave Oven',
    category: 'cooking',
    categoryLabel: 'Cooking Equipment',
    image: 'images/baking_oven.webp',
    fuel: 'Electric 220V',
    powerKw: 1.8,
    exhaustCfm: 0,
    specs: ['Heavy Duty 1000W - 1800W Magnetron', 'Stainless Steel Cavity & Outer Casing', 'Programmable Memory Presets', 'Built for Continuous Heavy Usage'],
    priceEstimate: '₹28,000',
    priceValue: 28000,
    dimensions: '20" L x 18" W x 14" H',
    desc: 'High-output stainless steel commercial microwave oven for quick re-heating.'
  },
  {
    id: 'eq-316',
    name: 'Pizza Make-line Table',
    category: 'cooking',
    categoryLabel: 'Cooking Equipment',
    image: 'images/vertical_chiller.webp',
    fuel: 'Electric 220V',
    powerKw: 0.9,
    exhaustCfm: 0,
    specs: ['Refrigerated Base Storage Cabinet', 'Raised Chilled Top Rail holds 6-9 GN Pans', 'Thick Granite / SS Dough Prep Top', 'Night Cover Shield Included'],
    priceEstimate: '₹68,000',
    priceValue: 68000,
    dimensions: '60" L x 32" W x 42" H',
    desc: 'Refrigerated pizza preparation counter with chilled topping rail.'
  },

  // =========================================================================
  // 4. BAKERY & CAFE EQUIPMENT
  // =========================================================================
  {
    id: 'eq-401',
    name: 'Deck Oven (1, 2, or 3 Deck)',
    category: 'bakery',
    categoryLabel: 'Bakery & Cafe Equipment',
    image: 'images/baking_oven.webp',
    fuel: 'Electric 415V / LPG Gas',
    powerKw: 6.5,
    exhaustCfm: 400,
    specs: ['High Temperature Ceramic Stone Deck', 'Independent Top & Bottom Thermostats', 'Internal Lighting & Glass Door', 'Gas or Electric Heating Options'],
    priceEstimate: '₹45,000',
    priceValue: 45000,
    dimensions: '48" L x 36" W x 24" to 66" H',
    desc: 'Commercial bakery deck oven available in 1, 2, or 3 deck configurations.'
  },
  {
    id: 'eq-403',
    name: 'Convection Oven',
    category: 'bakery',
    categoryLabel: 'Bakery & Cafe Equipment',
    image: 'images/baking_oven.webp',
    fuel: 'Electric 220V / 415V',
    powerKw: 4.5,
    exhaustCfm: 250,
    specs: ['Forced Air Circulation Fan Motors', 'Capacity: 4 / 5 Trays GN 1/1', 'Steam Moisture Injection Control', 'Digital Temperature & Timer'],
    priceEstimate: '₹62,000',
    priceValue: 62000,
    dimensions: '32" L x 30" W x 28" H',
    desc: 'Commercial convection oven for even baking of pastries, cakes, and roasts.'
  },
  {
    id: 'eq-405',
    name: 'Spiral Dough Mixer',
    category: 'bakery',
    categoryLabel: 'Bakery & Cafe Equipment',
    image: 'images/baking_oven.webp',
    fuel: 'Electric 415V 3-Phase',
    powerKw: 3.0,
    exhaustCfm: 0,
    specs: ['Capacity: 20kg / 35kg / 50kg Dough', 'Dual Speed Motor (Bowl & Hook rotate)', 'Heavy Duty Steel Structure', 'Safety Guard Grid'],
    priceEstimate: '₹68,000',
    priceValue: 68000,
    dimensions: '34" L x 22" W x 42" H',
    desc: 'Heavy duty spiral dough kneader machine for commercial bakeries and pizzerias.'
  },
  {
    id: 'eq-407',
    name: 'Dough Proofer',
    category: 'bakery',
    categoryLabel: 'Bakery & Cafe Equipment',
    image: 'images/baking_oven.webp',
    fuel: 'Electric 220V',
    powerKw: 2.6,
    exhaustCfm: 0,
    specs: ['Holds 16 to 32 Bakery Trays', 'Precision Humidity & Temperature Controls', 'Glass View Doors with Gasket', 'Insulated SS Casing'],
    priceEstimate: '₹42,000',
    priceValue: 42000,
    dimensions: '24" L x 32" W x 72" H',
    desc: 'Dough proofing cabinet for controlled fermentation of bread and buns.'
  },
  {
    id: 'eq-408',
    name: 'Commercial Espresso Machine',
    category: 'bakery',
    categoryLabel: 'Bakery & Cafe Equipment',
    image: 'images/baking_oven.webp',
    fuel: 'Electric 220V',
    powerKw: 3.5,
    exhaustCfm: 0,
    specs: ['1-Group / 2-Group Options', 'Copper Boiler with Rotary Pump', 'Dual Steam Wands & Hot Water Tap', 'Built-in Cup Warmer Top'],
    priceEstimate: '₹1,45,000',
    priceValue: 145000,
    dimensions: '28" L x 22" W x 20" H',
    desc: 'Professional commercial espresso coffee machine for cafes and restaurants.'
  },
  {
    id: 'eq-410',
    name: 'Heavy Duty Blender / Frappe Maker',
    category: 'bakery',
    categoryLabel: 'Bakery & Cafe Equipment',
    image: 'images/baking_oven.webp',
    fuel: 'Electric 220V',
    powerKw: 1.8,
    exhaustCfm: 0,
    specs: ['High Power 1800W - 2200W Motor', '2.0L Unbreakable Polycarbonate Jar', 'Sound Dampening Enclosure Cover', 'Japanese Stainless Steel Blades'],
    priceEstimate: '₹18,500',
    priceValue: 18500,
    dimensions: '9" L x 10" W x 18" H',
    desc: 'Commercial high-speed blender for smoothies, frappes, and milkshakes.'
  },
  {
    id: 'eq-411',
    name: 'Waffle Baker / Crepe Maker',
    category: 'bakery',
    categoryLabel: 'Bakery & Cafe Equipment',
    image: 'images/dosa_tawa.webp',
    fuel: 'Electric 220V',
    powerKw: 2.0,
    exhaustCfm: 0,
    specs: ['Heavy Cast Iron Non-Stick Cooking Grid', 'Thermostat Control (50°C - 300°C)', '360° Rotating Waffle Mechanism Option', 'SS Base Casing'],
    priceEstimate: '₹14,500',
    priceValue: 14500,
    dimensions: '16" L x 16" W x 10" H',
    desc: 'Commercial electric waffle baker and round French crepe maker machine.'
  },

  // =========================================================================
  // 5. REFRIGERATION & FREEZING
  // =========================================================================
  {
    id: 'eq-501',
    name: 'Vertical Refrigerator (2-Door / 4-Door)',
    category: 'refrigeration',
    categoryLabel: 'Refrigeration & Freezing',
    image: 'images/vertical_chiller.webp',
    fuel: 'Electric 220V',
    powerKw: 0.9,
    exhaustCfm: 0,
    specs: ['Capacity: 500L (2-Door) / 1000L (4-Door)', 'Embraco / Danfoss Heavy Compressor', 'Digital Temp Controller (1°C to 8°C)', 'Full SS 304 Outer & Inner'],
    priceEstimate: '₹54,000',
    priceValue: 54000,
    dimensions: '30" to 54" L x 30" W x 78" H',
    desc: 'Commercial upright reach-in vertical refrigerator for food storage.'
  },
  {
    id: 'eq-502',
    name: 'Vertical Deep Freezer (2-Door / 4-Door)',
    category: 'refrigeration',
    categoryLabel: 'Refrigeration & Freezing',
    image: 'images/vertical_chiller.webp',
    fuel: 'Electric 220V',
    powerKw: 1.4,
    exhaustCfm: 0,
    specs: ['Temperature Range: -18°C to -22°C', 'Auto Defrost & Forced Air Circulation', 'Heavy Insulated SS Solid Doors', 'Adjustable PVC Wire Shelves'],
    priceEstimate: '₹62,000',
    priceValue: 62000,
    dimensions: '30" to 54" L x 30" W x 78" H',
    desc: 'Commercial upright reach-in vertical deep freezer for raw meat and frozen goods.'
  },
  {
    id: 'eq-503',
    name: 'Under-Counter Refrigerator',
    category: 'refrigeration',
    categoryLabel: 'Refrigeration & Freezing',
    image: 'images/vertical_chiller.webp',
    fuel: 'Electric 220V',
    powerKw: 0.6,
    exhaustCfm: 0,
    specs: ['Flat SS Top Work Table Surface', 'Under-Counter Chilled Cabinet (250L-400L)', 'Magnetic Self-Closing Doors', 'Compact Kitchen Footprint'],
    priceEstimate: '₹38,000',
    priceValue: 38000,
    dimensions: '48" to 60" L x 28" W x 34" H',
    desc: 'Under-counter refrigerated work table for chef preparation stations.'
  },
  {
    id: 'eq-504',
    name: 'Under-Counter Freezer',
    category: 'refrigeration',
    categoryLabel: 'Refrigeration & Freezing',
    image: 'images/vertical_chiller.webp',
    fuel: 'Electric 220V',
    powerKw: 0.8,
    exhaustCfm: 0,
    specs: ['Temperature Range: -15°C to -20°C', 'Heavy SS Top Prep Counter', 'Digital Thermostat Control', 'Heavy Duty Compressor Unit'],
    priceEstimate: '₹44,000',
    priceValue: 44000,
    dimensions: '48" to 60" L x 28" W x 34" H',
    desc: 'Under-counter commercial frozen storage cabinet with worktop.'
  },
  {
    id: 'eq-505',
    name: 'Chest Freezer (Hard Top / Glass Top)',
    category: 'refrigeration',
    categoryLabel: 'Refrigeration & Freezing',
    image: 'images/vertical_chiller.webp',
    fuel: 'Electric 220V',
    powerKw: 0.4,
    exhaustCfm: 0,
    specs: ['Capacity: 300L / 400L / 500L', 'Hard Top Lid or Sliding Glass Top', 'Tropicalized Heavy Compressor', 'Castor Wheels for Mobility'],
    priceEstimate: '₹26,000',
    priceValue: 26000,
    dimensions: '44" L x 26" W x 34" H',
    desc: 'Commercial chest deep freezer for bulk frozen food storage and ice creams.'
  },
  {
    id: 'eq-506',
    name: 'Visi Cooler (Display Chiller)',
    category: 'refrigeration',
    categoryLabel: 'Refrigeration & Freezing',
    image: 'images/vertical_chiller.webp',
    fuel: 'Electric 220V',
    powerKw: 0.5,
    exhaustCfm: 0,
    specs: ['Toughened Double Glass Door', 'Illuminated LED Canopy & Interior', 'Temp Range: 2°C to 10°C', 'Adjustable Wire Shelves'],
    priceEstimate: '₹32,000',
    priceValue: 32000,
    dimensions: '24" L x 24" W x 72" H',
    desc: 'Glass door vertical visi cooler for beverages, dairy, and cold dispatches.'
  },
  {
    id: 'eq-507',
    name: 'Refrigerated Salad Bar / Saladette',
    category: 'refrigeration',
    categoryLabel: 'Refrigeration & Freezing',
    image: 'images/vertical_chiller.webp',
    fuel: 'Electric 220V',
    powerKw: 0.75,
    exhaustCfm: 0,
    specs: ['Top Cold Well holds 6 - 9 GN Pans', 'Under-counter Refrigerated Storage', 'Polyethylene Prep Cutting Board Edge', 'Night Hood Lid'],
    priceEstimate: '₹46,000',
    priceValue: 46000,
    dimensions: '48" L x 30" W x 42" H',
    desc: 'Refrigerated salad and sandwich preparation counter with chilled top well.'
  },
  {
    id: 'eq-508',
    name: 'Pastry / Cake Display Cabinet (Curved / Straight Glass)',
    category: 'refrigeration',
    categoryLabel: 'Refrigeration & Freezing',
    image: 'images/vertical_chiller.webp',
    fuel: 'Electric 220V',
    powerKw: 0.85,
    exhaustCfm: 0,
    specs: ['Curved or Straight Double Glass Structure', 'Warm LED Shelf Lighting', 'Humidity Controlled Chilling (4°C - 8°C)', 'Rear Sliding Glass Doors'],
    priceEstimate: '₹58,000',
    priceValue: 58000,
    dimensions: '48" L x 28" W x 48" H',
    desc: 'Premium refrigerated cake and pastry display showcase cabinet.'
  },
  {
    id: 'eq-509',
    name: 'Commercial Water Cooler',
    category: 'refrigeration',
    categoryLabel: 'Refrigeration & Freezing',
    image: 'images/vertical_chiller.webp',
    fuel: 'Electric 220V',
    powerKw: 0.5,
    exhaustCfm: 0,
    specs: ['Capacity: 50L / 100L / 150L Storage Tank', 'Food Grade SS 304 Tank & Outer Body', 'Fast Cooling Compressor System', 'Brass Water Dispensing Taps'],
    priceEstimate: '₹24,500',
    priceValue: 24500,
    dimensions: '20" L x 20" W x 54" H',
    desc: 'Stainless steel commercial drinking water storage chiller cooler.'
  },
  {
    id: 'eq-510',
    name: 'Ice Cube Making Machine',
    category: 'refrigeration',
    categoryLabel: 'Refrigeration & Freezing',
    image: 'images/vertical_chiller.webp',
    fuel: 'Electric 220V',
    powerKw: 0.65,
    exhaustCfm: 0,
    specs: ['Output: 30kg / 60kg / 100kg per 24 Hrs', 'Crystal Clear Dice Ice Cubes', 'Insulated Storage Ice Bin', 'Auto Shut-off Sensor'],
    priceEstimate: '₹52,000',
    priceValue: 52000,
    dimensions: '22" L x 24" W x 36" H',
    desc: 'Automatic commercial ice cube maker machine for bars, hotels, and cafes.'
  },

  // =========================================================================
  // 6. SERVICE & DISPLAY EQUIPMENT
  // =========================================================================
  {
    id: 'eq-601',
    name: 'Hot Food Bain Marie (Countertop / Freestanding)',
    category: 'service',
    categoryLabel: 'Service & Display Equipment',
    image: 'images/bain_marie.webp',
    fuel: 'Electric 220V',
    powerKw: 3.0,
    exhaustCfm: 0,
    specs: ['Capacity: 4 to 8 GN Pan Containers', 'Curved Toughened Glass Display Guard', 'Thermostatic Heating (30°C - 110°C)', 'Bottom Water Drain Valve'],
    priceEstimate: '₹34,000',
    priceValue: 34000,
    dimensions: '56" L x 28" W x 52" H',
    desc: 'Electric Bain Marie hot food counter with glass display canopy.'
  },
  {
    id: 'eq-602',
    name: 'Cold Bain Marie',
    category: 'service',
    categoryLabel: 'Service & Display Equipment',
    image: 'images/bain_marie.webp',
    fuel: 'Electric 220V',
    powerKw: 0.75,
    exhaustCfm: 0,
    specs: ['Chilled Cold Water Bath / Plate Well', 'Holds 4 - 8 GN Pan Containers', 'Glass Guard Display Canopy', 'SS 304 Sanitary Construction'],
    priceEstimate: '₹42,000',
    priceValue: 42000,
    dimensions: '56" L x 28" W x 52" H',
    desc: 'Refrigerated cold Bain Marie display counter for salads, desserts, and dips.'
  },
  {
    id: 'eq-603',
    name: 'Food Warmer Display Unit',
    category: 'service',
    categoryLabel: 'Service & Display Equipment',
    image: 'images/bain_marie.webp',
    fuel: 'Electric 220V',
    powerKw: 1.2,
    exhaustCfm: 0,
    specs: ['Toughened 4-Side Glass Showcase', 'Infrared Heating Element & Lamp', 'Humidity Water Tray prevents drying', 'Removable Wire Shelves'],
    priceEstimate: '₹18,500',
    priceValue: 18500,
    dimensions: '26" L x 18" W x 24" H',
    desc: 'Countertop heated display cabinet for samosas, patties, and fried snacks.'
  },
  {
    id: 'eq-604',
    name: 'SS Pick-up Counter',
    category: 'service',
    categoryLabel: 'Service & Display Equipment',
    image: 'images/prep_table.webp',
    fuel: 'None',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Smooth SS 304 Service Surface', 'Under-shelf for Plate Storage', 'Optional Overhead Infrared Heat Lamps', 'Heavy Frame Legs'],
    priceEstimate: '₹26,000',
    priceValue: 26000,
    dimensions: '60" L x 30" W x 34" H',
    desc: 'Stainless steel dispatch and order pick-up service counter for chefs.'
  },
  {
    id: 'eq-605',
    name: 'SS Pass-through Window Frame / Shelf',
    category: 'service',
    categoryLabel: 'Service & Display Equipment',
    image: 'images/prep_table.webp',
    fuel: 'None / Electric Option',
    powerKw: 0.5,
    exhaustCfm: 0,
    specs: ['Wall Pass-Through Opening Structure', 'Heated or Ambient SS Shelf', 'Easy Clean Satin SS Finish', 'Custom Dimensions Available'],
    priceEstimate: '₹19,500',
    priceValue: 19500,
    dimensions: '48" L x 18" W x 24" H',
    desc: 'Stainless steel pass-through window frame connecting kitchen line to service hall.'
  },
  {
    id: 'eq-606',
    name: 'Cashier / Billing Counter',
    category: 'service',
    categoryLabel: 'Service & Display Equipment',
    image: 'images/prep_table.webp',
    fuel: 'None',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Lockable Cash & Document Drawers', 'Cable Wire Hole Grommet', 'Footrest Ergonomic Bar', 'Full SS 304 Construction'],
    priceEstimate: '₹19,500',
    priceValue: 19500,
    dimensions: '42" L x 24" W x 36" H',
    desc: 'Stainless steel cashier counter desk with lockable storage for billing POS.'
  },
  {
    id: 'eq-607',
    name: 'Chaat Counter (Custom Fabricated)',
    category: 'service',
    categoryLabel: 'Service & Display Equipment',
    image: 'images/bain_marie.webp',
    fuel: 'LPG / Electric Option',
    powerKw: 1.5,
    exhaustCfm: 0,
    specs: ['Glass Sneeze Guard Canopy', 'GN Pan Cutouts for Chutneys & Ingredients', 'Bottom Storage Cabinet', 'Front Decorative SS / Acrylic Panel'],
    priceEstimate: '₹38,000',
    priceValue: 38000,
    dimensions: '60" L x 30" W x 54" H',
    desc: 'Custom fabricated stainless steel Pani Puri and Chaat service counter.'
  },

  // =========================================================================
  // 7. EXHAUST & VENTILATION
  // =========================================================================
  {
    id: 'eq-701',
    name: 'SS Island Exhaust Hood',
    category: 'exhaust',
    categoryLabel: 'Exhaust & Ventilation',
    image: 'images/exhaust_hood.webp',
    fuel: 'None',
    powerKw: 0.1,
    exhaustCfm: 3000,
    specs: ['Ceiling Suspended Central Island Design', 'Includes SS Baffle Grease Filters', 'Perimeter Oil Collector Trough', 'Internal Fire Retardant Wiring & Lights'],
    priceEstimate: '₹38,000',
    priceValue: 38000,
    dimensions: '96" L x 48" W x 24" H',
    desc: 'Central island exhaust hood canopy for open kitchen cooking lines.'
  },
  {
    id: 'eq-702',
    name: 'SS Wall-Mounted Exhaust Hood',
    category: 'exhaust',
    categoryLabel: 'Exhaust & Ventilation',
    image: 'images/exhaust_hood.webp',
    fuel: 'None',
    powerKw: 0.1,
    exhaustCfm: 1800,
    specs: ['Wall Anchored Hood Canopy', 'Removable SS Baffle Filters', 'Bottom Drain Tap for Oil Cup', '16 Gauge SS 304 Sheet'],
    priceEstimate: '₹28,000',
    priceValue: 28000,
    dimensions: '72" L x 36" W x 24" H',
    desc: 'Heavy duty wall mounted kitchen exhaust ventilation hood.'
  },
  {
    id: 'eq-703',
    name: 'Exhaust Hood with Baffle Filters',
    category: 'exhaust',
    categoryLabel: 'Exhaust & Ventilation',
    image: 'images/exhaust_hood.webp',
    fuel: 'None',
    powerKw: 0.1,
    exhaustCfm: 2200,
    specs: ['High Efficiency SS Baffle Filters', 'Flame Guard Protection', 'Easy Dishwasher Washable Filters', 'Satin Finish SS 304 Casing'],
    priceEstimate: '₹32,000',
    priceValue: 32000,
    dimensions: '84" L x 36" W x 24" H',
    desc: 'Commercial kitchen exhaust hood featuring removable baffle grease filters.'
  },
  {
    id: 'eq-704',
    name: 'Fresh Air Input System',
    category: 'exhaust',
    categoryLabel: 'Exhaust & Ventilation',
    image: 'images/exhaust_hood.webp',
    fuel: 'Electric 415V 3-Phase',
    powerKw: 1.5,
    exhaustCfm: 0,
    specs: ['Fresh Makeup Air Blower Motor', 'Washable Dust Filter Plenums', 'Keeps Kitchen Air Balance & Cool', 'Heavy Duty Casing'],
    priceEstimate: '₹36,000',
    priceValue: 36000,
    dimensions: '36" L x 36" W x 30" H',
    desc: 'Fresh makeup air supply system to maintain proper kitchen air pressure balance.'
  },
  {
    id: 'eq-705',
    name: 'Centrifugal Exhaust Blower',
    category: 'exhaust',
    categoryLabel: 'Exhaust & Ventilation',
    image: 'images/exhaust_hood.webp',
    fuel: 'Electric 415V 3-Phase',
    powerKw: 2.2,
    exhaustCfm: 0,
    specs: ['Belt Driven SISW / DIDW Motor Blower', 'Power: 1.0 HP to 5.0 HP', 'High Static Pressure Fan Wheel', 'Weatherproof Outdoor Housing'],
    priceEstimate: '₹28,500',
    priceValue: 28500,
    dimensions: '30" L x 30" W x 36" H',
    desc: 'Industrial centrifugal exhaust blower motor for suction ductwork.'
  },
  {
    id: 'eq-706',
    name: 'GI Ducting',
    category: 'exhaust',
    categoryLabel: 'Exhaust & Ventilation',
    image: 'images/exhaust_hood.webp',
    fuel: 'None',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Heavy Gauge Galvanized Iron Sheet', 'Flanged Joints with Neoprene Gaskets', 'Acoustic / Thermal Insulation Option', 'Custom Fabrication Sizing'],
    priceEstimate: '₹450 / sq.ft',
    priceValue: 450,
    dimensions: 'Custom Sizing (per sq.ft)',
    desc: 'Galvanized iron kitchen exhaust ducting system for smoke transport.'
  },

  // =========================================================================
  // 8. STORAGE, SHELVING & TROLLEYS
  // =========================================================================
  {
    id: 'eq-801',
    name: 'SS Slotted Angle Rack (4-Tier / 5-Tier)',
    category: 'storage',
    categoryLabel: 'Storage, Shelving & Trolleys',
    image: 'images/prep_table.webp',
    fuel: 'None',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['4 or 5 Adjustable Storage Shelves', 'Load Capacity: 200kg Per Shelf', 'Solid or Perforated SS Shelves', 'Heavy Slotted Angle Posts'],
    priceEstimate: '₹14,500',
    priceValue: 14500,
    dimensions: '48" L x 18" W x 72" H',
    desc: 'Adjustable multi-tier stainless steel slotted angle storage rack.'
  },
  {
    id: 'eq-802',
    name: 'SS Pot Rack / Heavy Duty Storage Rack',
    category: 'storage',
    categoryLabel: 'Storage, Shelving & Trolleys',
    image: 'images/prep_table.webp',
    fuel: 'None',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Tubular Slatted Racks for Air Drainage', 'Designed for Heavy Kadais, Degs & Pots', 'Corrosion Free SS 304 Material', 'Heavy Load Base Feet'],
    priceEstimate: '₹12,500',
    priceValue: 12500,
    dimensions: '48" L x 20" W x 60" H',
    desc: 'Heavy-duty slatted stainless steel pot drying and storage rack.'
  },
  {
    id: 'eq-803',
    name: 'SS Wall Mounted Shelf (Solid / Pipe)',
    category: 'storage',
    categoryLabel: 'Storage, Shelving & Trolleys',
    image: 'images/prep_table.webp',
    fuel: 'None',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Solid Sheet or Tubular Pipe Top Shelf', 'Heavy Wall Mounting Brackets', 'Satin Finish Stainless Steel', 'Saves Floor Space'],
    priceEstimate: '₹6,800',
    priceValue: 6800,
    dimensions: '48" L x 14" W x 12" H',
    desc: 'Wall mounted stainless steel storage shelf for spices, pans, and utensils.'
  },
  {
    id: 'eq-804',
    name: 'SS Onion & Potato Bin',
    category: 'storage',
    categoryLabel: 'Storage, Shelving & Trolleys',
    image: 'images/prep_table.webp',
    fuel: 'None',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Perforated SS Mesh Bins for Airflow', '2 or 3 Compartment Storage', 'Mobile Castor Wheels Base', 'Prevents Spoilage & Moisture'],
    priceEstimate: '₹11,800',
    priceValue: 11800,
    dimensions: '36" L x 24" W x 30" H',
    desc: 'Ventilated stainless steel storage bin trolley for raw onions and potatoes.'
  },
  {
    id: 'eq-805',
    name: 'Gastronorm (GN) Pan Trolley',
    category: 'storage',
    categoryLabel: 'Storage, Shelving & Trolleys',
    image: 'images/prep_table.webp',
    fuel: 'None',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Holds 15 to 30 GN 1/1 Pans', 'Vertical Angle Runner Slides', '4 Heavy Swivel Lockable Castors', 'Full SS 304 Structure'],
    priceEstimate: '₹18,500',
    priceValue: 18500,
    dimensions: '22" L x 26" W x 66" H',
    desc: 'Vertical stainless steel rack trolley for transporting Gastronorm food pans.'
  },
  {
    id: 'eq-806',
    name: 'Masala Trolley',
    category: 'storage',
    categoryLabel: 'Storage, Shelving & Trolleys',
    image: 'images/prep_table.webp',
    fuel: 'None',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Holds 6 to 12 Deep Spice GN Containers', 'Ergonomic Push Handle Bar', 'Under-shelf for Extra Storage', 'Lockable Castor Wheels'],
    priceEstimate: '₹12,800',
    priceValue: 12800,
    dimensions: '30" L x 20" W x 34" H',
    desc: 'Mobile stainless steel spice trolley for active chef cooking stations.'
  },
  {
    id: 'eq-807',
    name: 'Platform Trolley',
    category: 'storage',
    categoryLabel: 'Storage, Shelving & Trolleys',
    image: 'images/prep_table.webp',
    fuel: 'None',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Heavy SS Base Plate (300kg Load Cap)', 'Foldable / Rigid Push Handle Bar', 'Heavy Duty Rubber Castor Wheels', 'Corner Bumper Guards'],
    priceEstimate: '₹9,800',
    priceValue: 9800,
    dimensions: '36" L x 24" W x 36" H',
    desc: 'Heavy duty platform trolley for moving gas cylinders, flour bags, and stock.'
  },
  {
    id: 'eq-808',
    name: 'Service Trolley (2-Tier / 3-Tier)',
    category: 'storage',
    categoryLabel: 'Storage, Shelving & Trolleys',
    image: 'images/prep_table.webp',
    fuel: 'None',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['2 or 3 Rimmed SS Tray Tiers', 'Silent Swivel Castor Wheels', 'Heavy Duty Tubular Frame', 'Easy Wipe Sanitation'],
    priceEstimate: '₹10,500',
    priceValue: 10500,
    dimensions: '32" L x 20" W x 36" H',
    desc: 'Multi-tier food service utility trolley for hotel and dining room service.'
  },
  {
    id: 'eq-809',
    name: 'Soiled Dish Clearance Trolley',
    category: 'storage',
    categoryLabel: 'Storage, Shelving & Trolleys',
    image: 'images/prep_table.webp',
    fuel: 'None',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Includes Heavy Duty Removable Plastic Tubs', 'Cutlery Collection Bucket Attachment', '4 Swivel Lockable Wheels', 'Full SS Frame'],
    priceEstimate: '₹11,800',
    priceValue: 11800,
    dimensions: '32" L x 20" W x 36" H',
    desc: 'Dining hall dish clearance trolley with removable waste tubs.'
  },
  {
    id: 'eq-810',
    name: 'Tea / Coffee Snack Trolley',
    category: 'storage',
    categoryLabel: 'Storage, Shelving & Trolleys',
    image: 'images/prep_table.webp',
    fuel: 'None',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Holds Milk Boiler & Tea Urn', 'Cup & Snack Storage Rack Shelf', 'Gas Cylinder Base Housing Option', 'Smooth Rolling Castor Wheels'],
    priceEstimate: '₹19,500',
    priceValue: 19500,
    dimensions: '42" L x 24" W x 36" H',
    desc: 'Mobile tea, coffee, and snack serving trolley for corporate offices and canteens.'
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
    image: 'images/hero.webp',
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
    image: 'images/prep_table.webp',
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
    image: 'images/sink_unit.webp',
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
    image: 'images/exhaust_hood.webp',
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
      { eqId: 'eq-302', x: 2, y: 2, label: 'Continental Gas Range' },
      { eqId: 'eq-306', x: 7, y: 2, label: 'Dosa Bhatti' },
      { eqId: 'eq-102', x: 12, y: 2, label: 'SS Work Table' },
      { eqId: 'eq-309', x: 2, y: 8, label: 'Deep Fryer' },
      { eqId: 'eq-801', x: 14, y: 8, label: 'Storage Rack' }
    ]
  },
  restaurant: {
    name: 'Restaurant Kitchen (800 sq.ft)',
    widthFt: 32,
    lengthFt: 25,
    items: [
      { eqId: 'eq-302', x: 2, y: 2, label: 'Continental Gas Range' },
      { eqId: 'eq-303', x: 8, y: 2, label: 'Chinese Range' },
      { eqId: 'eq-306', x: 14, y: 2, label: 'Dosa Bhatti' },
      { eqId: 'eq-102', x: 22, y: 2, label: 'SS Work Table' },
      { eqId: 'eq-202', x: 22, y: 10, label: 'Double Sink' },
      { eqId: 'eq-601', x: 2, y: 12, label: 'Bain Marie' },
      { eqId: 'eq-501', x: 14, y: 16, label: 'Vertical Refrigerator' },
      { eqId: 'eq-801', x: 22, y: 18, label: 'Storage Rack' }
    ]
  },
  banquet: {
    name: 'Hotel & Banquet Setup (1500 sq.ft)',
    widthFt: 50,
    lengthFt: 30,
    items: [
      { eqId: 'eq-302', x: 2, y: 2, label: 'Continental Gas Range' },
      { eqId: 'eq-310', x: 8, y: 2, label: 'Tilting Brat Pan' },
      { eqId: 'eq-305', x: 14, y: 2, label: 'Bulk Cooking Range' },
      { eqId: 'eq-102', x: 32, y: 2, label: 'SS Work Table' },
      { eqId: 'eq-203', x: 38, y: 2, label: 'Triple Sink Unit' },
      { eqId: 'eq-601', x: 2, y: 14, label: 'Bain Marie Hot Counter' },
      { eqId: 'eq-501', x: 22, y: 14, label: 'Vertical Refrigerator' },
      { eqId: 'eq-801', x: 32, y: 14, label: 'Storage Rack' },
      { eqId: 'eq-808', x: 38, y: 14, label: 'Service Trolley' }
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

// DOM Initializer (Chunked to eliminate long main-thread tasks)
document.addEventListener('DOMContentLoaded', () => {
  setupEventListeners();
  renderCatalog();

  // Yield main thread before non-critical component rendering
  requestAnimationFrame(() => {
    updateConfigurator();
    renderBlogsGrid();

    setTimeout(() => {
      if (typeof initFloorPlanPlanner === 'function') {
        initFloorPlanPlanner();
      }
    }, 20);
  });
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
    setTimeout(() => {
      if (toast && typeof toast.remove === 'function') {
        toast.remove();
      } else if (toast && toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
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
  const backdrop = document.getElementById('drawerBackdrop');
  const drawer = document.getElementById('quoteDrawer');
  if (backdrop) backdrop.classList.remove('active');
  if (drawer) drawer.classList.remove('active');
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
        <img src="${item.image}" alt="${item.name} - Commercial Kitchen Equipment Manufacturer BKS Industries Bangalore" width="300" height="200" loading="lazy" decoding="async">
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
        <img src="${article.image}" alt="${article.title} - BKS Industries Commercial Kitchen Guide Bangalore" width="350" height="200" loading="lazy" decoding="async">
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

        <img src="${article.image}" alt="${article.title} - BKS Industries Commercial Kitchen Guide" style="width: 100%; height: 280px; object-fit: cover; border-radius: 14px; margin-bottom: 1.5rem; border: 1px solid rgba(255, 255, 255, 0.15);" width="800" height="280" loading="lazy" decoding="async">

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

  const backdrop = document.getElementById('drawerBackdrop');
  const drawer = document.getElementById('quoteDrawer');
  if (backdrop) backdrop.classList.add('active');
  if (drawer) drawer.classList.add('active');
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
        <img src="${item.image}" alt="${item.name} - Commercial Kitchen Equipment BKS Industries Bangalore" style="width: 56px; height: 56px; border-radius: 10px; object-fit: cover; border: 1px solid #cbd5e1;" width="56" height="56" loading="lazy" decoding="async">
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

// Send Quote via Email
function sendQuoteEmail() {
  if (quoteCart.length === 0) {
    alert('Please add at least one equipment item to your quote list first!');
    return;
  }

  let totalEst = 0;
  let body = `New Commercial Kitchen Equipment Quote Request\n`;
  body += `===============================================\n\n`;
  body += `Selected Equipment List:\n`;

  quoteCart.forEach((item, idx) => {
    const itemTotal = item.priceValue * item.qty;
    totalEst += itemTotal;
    body += `${idx + 1}. ${item.name} x ${item.qty} - ₹${itemTotal.toLocaleString('en-IN')}\n`;
    if (item.notes) body += `   (Specs: ${item.notes})\n`;
  });

  body += `\nEstimated Equipment Total: ₹${totalEst.toLocaleString('en-IN')}\n\n`;
  body += `Please provide your formal price quotation, tax invoice details, and delivery timeline for Bengaluru setup.\n\n`;
  body += `-----------------------------------------------\n`;
  body += `Dispatched via BKS Industries Official Website (www.bksindustries.in)`;

  const recipient = 'Bks-industries@outlook.com';
  const ccRecipient = 'Bksindustries23@gmail.com';
  const subject = `Equipment Quote Request - BKS Industries (${quoteCart.length} Items)`;

  const mailtoUrl = `mailto:${recipient}?cc=${ccRecipient}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoUrl;

  showToast('Opening your email composer to send quote request to Bks-industries@outlook.com');
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
          <div style="font-size: 12px; color: #475569; margin-top: 4px;">Lakshmidevinagar, Bengaluru 560096 | Ph: +91 81239 39433 / +91 98801 31901</div>
          <div style="font-size: 11px; color: #0284c7;">GSTIN: 29AWOPM7903Q1ZH | Email: Bks-industries@outlook.com / Bksindustries23@gmail.com | Web: www.bksindustries.in</div>
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
          <div><strong>GSTIN:</strong> 29AWOPM7903Q1ZH</div>
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
        This is a computer-generated quotation from BKS Industries, Bengaluru. Email: Bks-industries@outlook.com | Ph: +91 81239 39433 / +91 98801 31901
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
  const totalValElem = document.getElementById('configTotalVal');
  const totalValText = totalValElem ? totalValElem.innerText : '₹0';

  let text = `*Turnkey Kitchen Estimator Inquiry - BKS Industries*\n\n`;
  text += `*Kitchen Concept:* ${configState.type.replace('_', ' ').toUpperCase()}\n`;
  text += `*Carpet Area:* ${configState.sizeSqFt} sq. ft.\n`;
  text += `*Selected Modules:* ${configState.modules.join(', ').toUpperCase()}\n`;
  text += `*Estimated Budget:* ${totalValText}\n\n`;
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
            <img src="${item.image}" alt="${item.name} - BKS Industries SS Fabrication Bangalore" style="width: 100%; height: 240px; object-fit: cover; border-radius: 14px; border: 1px solid var(--steel-border);" width="400" height="240" loading="lazy" decoding="async">
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
                <label for="modalGauge" style="font-size: 0.82rem; font-weight: 700; color: #0f172a;">Stainless Steel Grade & Gauge:</label>
                <select id="modalGauge" class="form-control" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; margin-top: 0.2rem;" aria-label="Stainless Steel Grade and Gauge">
                  <option value="1.0" selected>SS 304 Food Grade - 16 Gauge Heavy Duty</option>
                  <option value="0.88">SS 304 Food Grade - 18 Gauge Standard</option>
                  <option value="1.15">SS 316 Premium Chemical/Acid Resistance (+15%)</option>
                </select>
              </div>

              <div style="margin-bottom: 0.8rem;">
                <label for="modalFuel" style="font-size: 0.82rem; font-weight: 700; color: #0f172a;">Power / Fuel Configuration:</label>
                <select id="modalFuel" class="form-control" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; margin-top: 0.2rem;" aria-label="Power or Fuel Configuration">
                  <option value="standard" selected>Standard (${item.fuel})</option>
                  <option value="custom_png">Commercial PNG Pipeline Fitting</option>
                  <option value="custom_elec">Electric Heavy Heating Elements</option>
                </select>
              </div>

              <div style="margin-bottom: 1.2rem;">
                <label style="font-size: 0.82rem; font-weight: 700; color: #0f172a;">Custom Options / Add-ons:</label>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.4rem; margin-top: 0.3rem;">
                  <label for="addWheels" style="font-size: 0.78rem; display: flex; align-items: center; gap: 0.3rem;">
                    <input type="checkbox" id="addWheels" value="2500" aria-label="Lockable Castor Wheels"> Lockable Castor Wheels (+₹2,500)
                  </label>
                  <label for="addShelf" style="font-size: 0.78rem; display: flex; align-items: center; gap: 0.3rem;">
                    <input type="checkbox" id="addShelf" value="3500" aria-label="Overhead SS Shelf"> Overhead SS Shelf (+₹3,500)
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
  let gaugeText = '';
  if (gaugeSelect && gaugeSelect.selectedIndex >= 0 && gaugeSelect.options[gaugeSelect.selectedIndex]) {
    const optText = gaugeSelect.options[gaugeSelect.selectedIndex].text;
    gaugeText = (optText.split('-')[1] || optText).trim();
  }

  closeSpecModal();
  addToQuote(id, calculatedPrice, gaugeText);
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
      <img src="${item.image}" alt="${item.name} - Commercial Kitchen Equipment BKS Industries Bangalore">
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
  if (typeof confirm === 'undefined' || confirm('Are you sure you want to clear all equipment from the layout grid?')) {
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

  const cfmElem = document.getElementById('planStatCFM');
  const powerElem = document.getElementById('planStatPower');
  const cfmText = cfmElem ? cfmElem.innerText : 'N/A';
  const powerText = powerElem ? powerElem.innerText : 'N/A';

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

  text += `\n*Calculated Airflow Exhaust Required:* ${cfmText}\n`;
  text += `*Calculated Electric/Gas Load:* ${powerText}\n`;
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
  const lengthInput = document.getElementById('cfmLength');
  const depthInput = document.getElementById('cfmDepth');
  const typeInput = document.getElementById('cfmCookingType');

  const length = lengthInput ? (parseFloat(lengthInput.value) || 8) : 8;
  const depth = depthInput ? (parseFloat(depthInput.value) || 3.5) : 3.5;
  const typeMultiplier = typeInput ? (parseFloat(typeInput.value) || 350) : 350;

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
  const burnerInput = document.getElementById('lpgBurners');
  const hoursInput = document.getElementById('lpgHours');

  const burnerCount = burnerInput ? (parseInt(burnerInput.value) || 4) : 4;
  const hours = hoursInput ? (parseFloat(hoursInput.value) || 10) : 10;

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

// Contact Form Handler - Direct Email Dispatch to BKS Industries
function handleContactSubmit(e) {
  if (e && e.preventDefault) e.preventDefault();

  const nameEl = document.getElementById('contactName');
  const emailEl = document.getElementById('contactEmail');
  const phoneEl = document.getElementById('contactPhone');
  const kTypeEl = document.getElementById('contactKitchenType');
  const msgEl = document.getElementById('contactMsg');

  const name = nameEl ? nameEl.value : 'Client';
  const emailInput = emailEl ? emailEl.value : '';
  const phoneInput = phoneEl ? phoneEl.value : '';
  const kType = kTypeEl ? kTypeEl.value : 'Commercial Kitchen Setup';
  const msg = msgEl ? msgEl.value : '';

  const recipient = 'Bks-industries@outlook.com';
  const ccRecipient = 'Bksindustries23@gmail.com';
  const subject = `New Instant Kitchen Inquiry from ${name} (${kType})`;
  
  let body = `Instant Commercial Kitchen Equipment Inquiry\n`;
  body += `===============================================\n\n`;
  body += `Client Name: ${name}\n`;
  if (emailInput) body += `Client Email: ${emailInput}\n`;
  body += `Phone / WhatsApp: ${phoneInput}\n`;
  body += `Business / Kitchen Type: ${kType}\n\n`;
  body += `Equipment Requirements & Project Notes:\n${msg || 'No additional notes provided.'}\n\n`;
  body += `-----------------------------------------------\n`;
  body += `Dispatched via BKS Industries Official Website (www.bksindustries.in)`;

  const mailtoUrl = `mailto:${recipient}?cc=${ccRecipient}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoUrl;

  showToast('Opening email client to send your instant inquiry to Bks-industries@outlook.com');
  
  const formEl = document.getElementById('contactForm');
  if (formEl) formEl.reset();
}

// Optional WhatsApp Dispatch Handler for Contact Form
function sendContactWhatsApp() {
  const nameEl = document.getElementById('contactName');
  const emailEl = document.getElementById('contactEmail');
  const phoneEl = document.getElementById('contactPhone');
  const kTypeEl = document.getElementById('contactKitchenType');
  const msgEl = document.getElementById('contactMsg');

  const name = nameEl ? nameEl.value || 'Client' : 'Client';
  const emailInput = emailEl ? emailEl.value : '';
  const phoneInput = phoneEl ? phoneEl.value || '' : '';
  const kType = kTypeEl ? kTypeEl.value || 'Commercial Kitchen Setup' : 'Commercial Kitchen Setup';
  const msg = msgEl ? msgEl.value || '' : '';

  let text = `*New Direct Inquiry - BKS Industries Website*\n\n`;
  text += `*Name:* ${name}\n`;
  if (emailInput) text += `*Email:* ${emailInput}\n`;
  text += `*Phone:* ${phoneInput}\n`;
  text += `*Kitchen Type:* ${kType}\n`;
  text += `*Requirements:* ${msg}\n`;

  const phone = '918123939433';
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}



