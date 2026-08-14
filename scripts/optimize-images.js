const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '..', 'images');

const imageConfigs = [
  // LCP Hero Image
  { src: 'hero.png', dist: 'hero.webp', width: 800, quality: 80 },
  { src: 'hero.png', dist: 'hero-sm.webp', width: 450, quality: 80 },

  // Brand Logo
  { src: 'logo.jpg', dist: 'logo.webp', width: 100, height: 100, quality: 85 },

  // Featured / Core Category Images
  { src: 'prep_table.png', dist: 'prep_table.webp', width: 640, quality: 80 },
  { src: 'prep_table.png', dist: 'prep_table-sm.webp', width: 380, quality: 80 },

  { src: 'idly_steamer.png', dist: 'idly_steamer.webp', width: 640, quality: 80 },
  { src: 'idly_steamer.png', dist: 'idly_steamer-sm.webp', width: 380, quality: 80 },

  { src: 'baking_oven.png', dist: 'baking_oven.webp', width: 640, quality: 80 },
  { src: 'baking_oven.png', dist: 'baking_oven-sm.webp', width: 380, quality: 80 },

  { src: 'sink_unit.png', dist: 'sink_unit.webp', width: 640, quality: 80 },
  { src: 'sink_unit.png', dist: 'sink_unit-sm.webp', width: 380, quality: 80 },

  // Product & Installation Gallery
  { src: 'bain_marie.png', dist: 'bain_marie.webp', width: 640, quality: 80 },
  { src: 'burner_oven.png', dist: 'burner_oven.webp', width: 640, quality: 80 },
  { src: 'deep_fryer.png', dist: 'deep_fryer.webp', width: 640, quality: 80 },
  { src: 'dosa_tawa.png', dist: 'dosa_tawa.webp', width: 640, quality: 80 },
  { src: 'exhaust_hood.png', dist: 'exhaust_hood.webp', width: 640, quality: 80 },
  { src: 'four_burner_oven.png', dist: 'four_burner_oven.webp', width: 640, quality: 80 },
  { src: 'installation_bakery.png', dist: 'installation_bakery.webp', width: 640, quality: 80 },
  { src: 'installation_cloud_kitchen.png', dist: 'installation_cloud_kitchen.webp', width: 640, quality: 80 },
  { src: 'installation_dosa_bhatti.png', dist: 'installation_dosa_bhatti.webp', width: 640, quality: 80 },
  { src: 'shawarma_machine.png', dist: 'shawarma_machine.webp', width: 640, quality: 80 },
  { src: 'vertical_chiller.png', dist: 'vertical_chiller.webp', width: 640, quality: 80 },
];

async function optimize() {
  console.log('🚀 Starting Image Optimization...\n');
  let totalOrigBytes = 0;
  let totalNewBytes = 0;

  for (const cfg of imageConfigs) {
    const srcPath = path.join(imagesDir, cfg.src);
    const distPath = path.join(imagesDir, cfg.dist);

    if (!fs.existsSync(srcPath)) {
      console.warn(`⚠️ Source image missing: ${cfg.src}`);
      continue;
    }

    let transform = sharp(srcPath);

    if (cfg.width || cfg.height) {
      transform = transform.resize({
        width: cfg.width,
        height: cfg.height,
        withoutEnlargement: true,
        fit: cfg.height ? 'cover' : 'inside',
      });
    }

    const buffer = await transform
      .webp({ quality: cfg.quality || 80, effort: 6 })
      .toBuffer();

    fs.writeFileSync(distPath, buffer);

    const srcStat = fs.statSync(srcPath);
    const newSizeKb = (buffer.length / 1024).toFixed(1);
    
    // Track savings comparing dist webp size
    totalNewBytes += buffer.length;

    console.log(`  ✅ ${cfg.dist.padEnd(25)} (${cfg.width || 'auto'}px) -> ${newSizeKb} KB`);
  }

  console.log(`\n🎉 Image optimization completed! Total WebP assets output: ${(totalNewBytes / 1024).toFixed(1)} KB`);
}

optimize().catch(err => {
  console.error('❌ Error optimizing images:', err);
  process.exit(1);
});
