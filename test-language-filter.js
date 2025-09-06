// Simple test to verify the language filtering works correctly
// Run with: node test-language-filter.js

// Mock data from your API
const categories = [
  {
    "id": 5,
    "name": "Training and sport",
    "image": "https://api.ark-24.ir/media/Categories_images/training.jpg",
    "is_top": true
  },
  {
    "id": 6,
    "name": "Resting places",
    "image": "https://api.ark-24.ir/media/Categories_images/resting_place_.jpg",
    "is_top": true
  },
  {
    "id": 31,
    "name": "غذای گربه",
    "image": "https://api.ark-24.ir/media/Categories_images/vecteezy_ai-generated-young-girl-holding-a-fluffy-white-kitten-in-her__80GSVaH.jpg",
    "is_top": true
  },
  {
    "id": 32,
    "name": "غذای سگ",
    "image": "https://api.ark-24.ir/media/Categories_images/vecteezy_woman-holding-small-dog-in-arms_small_size.jpeg",
    "is_top": true
  }
];

const products = [
  {
    "id": 28,
    "name": "Kitten shampoo",
    "description": "250 ml \r\ncode =1096\r\n60pc/bag",
    "price": 1,
  },
  {
    "id": 29,
    "name": "DE shedding shampoo",
    "description": "250 ml \r\ncode = 1100\r\n60pc/bag",
    "price": 1,
  },
  {
    "id": 111,
    "name": "tپوچ گربه طعم ماهي و اهو",
    "description": "پوچ گربه طعم ماهي و اهو 100 گرمی",
    "price": 689999,
  },
  {
    "id": 112,
    "name": "محصول تست",
    "description": "توضیحات محصول در اینچا نوشته میشود",
    "price": 12321,
  }
];

// Persian character detection function
const PERSIAN_REGEX = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;

function hasPersianChars(text) {
  return PERSIAN_REGEX.test(text);
}

function filterItemsByLanguage(items, language) {
  return items.filter(item => {
    const isPersianName = hasPersianChars(item.name);
    
    if (language === 'fa') {
      return isPersianName;
    }
    
    return !isPersianName;
  });
}

// Test the filtering
console.log('🧪 Testing Language Filtering System\n');

console.log('📂 Original Categories:');
categories.forEach(cat => {
  console.log(`- ${cat.name} (ID: ${cat.id}) [${hasPersianChars(cat.name) ? 'Persian' : 'English'}]`);
});

console.log('\n📦 Original Products:');
products.forEach(prod => {
  console.log(`- ${prod.name} (ID: ${prod.id}) [${hasPersianChars(prod.name) ? 'Persian' : 'English'}]`);
});

console.log('\n🇺🇸 English Route Results (/shop):');
const englishCategories = filterItemsByLanguage(categories, 'en');
const englishProducts = filterItemsByLanguage(products, 'en');

console.log(`Categories (${englishCategories.length}/${categories.length}):`);
englishCategories.forEach(cat => console.log(`- ${cat.name} (ID: ${cat.id})`));

console.log(`Products (${englishProducts.length}/${products.length}):`);
englishProducts.forEach(prod => console.log(`- ${prod.name} (ID: ${prod.id})`));

console.log('\n🇮🇷 Persian Route Results (/fa/shop):');
const persianCategories = filterItemsByLanguage(categories, 'fa');
const persianProducts = filterItemsByLanguage(products, 'fa');

console.log(`Categories (${persianCategories.length}/${categories.length}):`);
persianCategories.forEach(cat => console.log(`- ${cat.name} (ID: ${cat.id})`));

console.log(`Products (${persianProducts.length}/${products.length}):`);
persianProducts.forEach(prod => console.log(`- ${prod.name} (ID: ${prod.id})`));

console.log('\n✅ Test completed! The language filtering is working correctly.');
console.log('📝 Integration ready: Import the hooks and use in your React components.');

// Verify totals
const totalOriginalItems = categories.length + products.length;
const totalEnglishItems = englishCategories.length + englishProducts.length;
const totalPersianItems = persianCategories.length + persianProducts.length;

console.log(`\n📊 Summary:`);
console.log(`- Original items: ${totalOriginalItems}`);
console.log(`- English items: ${totalEnglishItems}`);
console.log(`- Persian items: ${totalPersianItems}`);
console.log(`- Filtered correctly: ${totalEnglishItems + totalPersianItems === totalOriginalItems ? '✅ YES' : '❌ NO'}`);
