const https = require('https');
const fs = require('fs');
const path = require('path');

// Image URLs from Pexels (free to use)
const images = [
  {
    url: 'https://images.pexels.com/photos/8853472/pexels-photo-8853472.jpeg?auto=compress&cs=tinysrgb&w=1200',
    filename: 'roofing-hero-real.jpg',
    industry: 'roofing'
  },
  {
    url: 'https://images.pexels.com/photos/7788242/pexels-photo-7788242.jpeg?auto=compress&cs=tinysrgb&w=1200',
    filename: 'hvac-hero-real.jpg',
    industry: 'hvac'
  },
  {
    url: 'https://images.pexels.com/photos/31763537/pexels-photo-31763537.jpeg?auto=compress&cs=tinysrgb&w=1200',
    filename: 'plumbing-hero-real.jpg',
    industry: 'plumbing'
  },
  {
    url: 'https://images.pexels.com/photos/8829881/pexels-photo-8829881.jpeg?auto=compress&cs=tinysrgb&w=1200',
    filename: 'electrical-hero-real.jpg',
    industry: 'electrical'
  },
  {
    url: 'https://images.pexels.com/photos/28812511/pexels-photo-28812511.jpeg?auto=compress&cs=tinysrgb&w=1200',
    filename: 'landscaping-hero-real.jpg',
    industry: 'landscaping'
  },
  {
    url: 'https://images.pexels.com/photos/28885519/pexels-photo-28885519.jpeg?auto=compress&cs=tinysrgb&w=1200',
    filename: 'pest-control-hero-real.jpg',
    industry: 'pest-control'
  },
  {
    url: 'https://images.pexels.com/photos/33379361/pexels-photo-33379361.jpeg?auto=compress&cs=tinysrgb&w=1200',
    filename: 'solar-hero-real.jpg',
    industry: 'solar'
  },
  {
    url: 'https://images.pexels.com/photos/12243107/pexels-photo-12243107.jpeg?auto=compress&cs=tinysrgb&w=1200',
    filename: 'window-cleaning-hero-real.jpg',
    industry: 'window-cleaning'
  },
  {
    url: 'https://images.pexels.com/photos/3990359/pexels-photo-3990359.jpeg?auto=compress&cs=tinysrgb&w=1200',
    filename: 'commercial-cleaning-hero-real.jpg',
    industry: 'commercial-cleaning'
  }
];

function downloadImage(imageUrl, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(__dirname, 'public', filename);
    const file = fs.createWriteStream(filePath);
    
    https.get(imageUrl, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${filename}: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`✅ Downloaded: ${filename}`);
        resolve();
      });
      
      file.on('error', (err) => {
        fs.unlink(filePath, () => {}); // Delete the file on error
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function downloadAllImages() {
  console.log('🚀 Starting image downloads...');
  
  for (const image of images) {
    try {
      await downloadImage(image.url, image.filename);
    } catch (error) {
      console.error(`❌ Failed to download ${image.filename}:`, error.message);
    }
  }
  
  console.log('✨ All downloads completed!');
}

downloadAllImages();
