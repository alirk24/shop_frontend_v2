# 🌍 Language Filtering System

This guide explains how to use the language filtering system to show Persian or English products/categories based on the current route.

## 📁 Files Created

1. **`src/lib/utils/language-filter.ts`** - Core filtering utilities
2. **`src/hooks/use-language-filter.hook.tsx`** - React hooks for easy integration
3. **`src/components/examples/language-filter-examples.tsx`** - Example components

## 🔧 How It Works

The system detects Persian characters in the `name` field using Unicode ranges and filters items accordingly:

- **Persian route** (`/fa/...`): Shows only items with Persian characters in name
- **English route** (`/...`): Shows only items without Persian characters in name

### Persian Character Detection

```typescript
// Detects Persian/Arabic/Urdu character ranges
const PERSIAN_REGEX = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;
```

## 🚀 Usage Examples

### 1. Basic Filtering Functions

```typescript
import { 
  filterCategoriesByLanguage, 
  filterProductsByLanguage,
  languageFilter 
} from '@/lib/utils/language-filter';

// Your API data
const categories = [
  { id: 5, name: "Training and sport", image: "...", is_top: true },
  { id: 31, name: "غذای گربه", image: "...", is_top: true }
];

const products = [
  { id: 28, name: "Kitten shampoo", ... },
  { id: 111, name: "پوچ گربه طعم ماهي و اهو", ... }
];

// Manual filtering
const englishCategories = filterCategoriesByLanguage(categories, 'en');
// Result: [{ id: 5, name: "Training and sport", ... }]

const persianCategories = filterCategoriesByLanguage(categories, 'fa');
// Result: [{ id: 31, name: "غذای گربه", ... }]

// Using the helper object
const englishProducts = languageFilter.products(products, 'en');
const persianProducts = languageFilter.products(products, 'fa');
```

### 2. React Hooks (Recommended)

```tsx
'use client';

import { useFilteredCategories, useFilteredProducts } from '@/hooks/use-language-filter.hook';

function ShopPage({ categories, products }) {
  // Automatically filters based on current route (/fa/shop vs /shop)
  const { 
    categories: filteredCategories, 
    language, 
    isPersian,
    totalCount,
    filteredCount 
  } = useFilteredCategories(categories);

  const { 
    products: filteredProducts,
    language: productLang,
    isPersian: isProductsPersian 
  } = useFilteredProducts(products);

  return (
    <div>
      <h1>{isPersian ? 'فروشگاه' : 'Shop'}</h1>
      <p>
        {isPersian 
          ? `${filteredCount} دسته‌بندی از ${totalCount} نمایش داده شده`
          : `Showing ${filteredCount} of ${totalCount} categories`
        }
      </p>

      {/* Categories */}
      <div className="grid grid-cols-3 gap-4">
        {filteredCategories.map(category => (
          <div key={category.id}>
            <h3>{category.name}</h3>
            <img src={category.image} alt={category.name} />
          </div>
        ))}
      </div>

      {/* Products */}
      <div className="grid grid-cols-4 gap-4">
        {filteredProducts.map(product => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span>${product.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
```

### 3. Server Components

```tsx
import { getLanguageFromPath, filterCategoriesByLanguage } from '@/lib/utils/language-filter';

async function ServerShopPage({ params, searchParams }) {
  // Get data from API
  const categoriesResponse = await fetch('https://api.ark-24.ir/categories');
  const categories = await categoriesResponse.json();

  // Detect language from route
  const pathname = '/fa/shop'; // or from params/headers
  const language = getLanguageFromPath(pathname);

  // Filter server-side
  const filteredCategories = filterCategoriesByLanguage(categories, language);

  return (
    <div>
      {filteredCategories.map(category => (
        <div key={category.id}>
          <h2>{category.name}</h2>
        </div>
      ))}
    </div>
  );
}
```

### 4. API Route Filtering

```typescript
// app/api/categories/route.ts
import { NextRequest } from 'next/server';
import { filterCategoriesByLanguage } from '@/lib/utils/language-filter';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const language = searchParams.get('lang') as 'en' | 'fa' || 'en';

  // Fetch all categories
  const allCategories = await fetchCategoriesFromDB();

  // Filter by language
  const filteredCategories = filterCategoriesByLanguage(allCategories, language);

  return Response.json(filteredCategories);
}
```

### 5. TanStack Query Integration

```tsx
import { useQuery } from '@tanstack/react-query';
import { useLanguageFilter } from '@/hooks/use-language-filter.hook';

function useCategories() {
  const { language } = useLanguageFilter();

  return useQuery({
    queryKey: ['categories', language],
    queryFn: async () => {
      const response = await fetch(`/api/categories?lang=${language}`);
      return response.json();
    }
  });
}

function CategoriesComponent() {
  const { data: categories, isLoading } = useCategories();
  const { isPersian } = useLanguageFilter();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>{isPersian ? 'دسته‌بندی‌ها' : 'Categories'}</h1>
      {categories.map(category => (
        <div key={category.id}>{category.name}</div>
      ))}
    </div>
  );
}
```

## 🎯 Testing Results

Based on your sample data:

### Categories
**English route (`/shop`)**:
- ✅ "Training and sport" (id: 5)
- ✅ "Resting places" (id: 6)

**Persian route (`/fa/shop`)**:
- ✅ "غذای گربه" (id: 31)
- ✅ "غذای سگ" (id: 32)

### Products
**English route (`/shop`)**:
- ✅ "Kitten shampoo" (id: 28)
- ✅ "DE shedding shampoo" (id: 29)

**Persian route (`/fa/shop`)**:
- ✅ "tپوچ گربه طعم ماهي و اهو" (id: 111)
- ✅ "محصول تست" (id: 112)

## 🔄 Integration Steps

### Step 1: Update Existing Shop Components

```tsx
// Before
function ShopComponent({ categories, products }) {
  return (
    <div>
      {categories.map(cat => <div key={cat.id}>{cat.name}</div>)}
      {products.map(prod => <div key={prod.id}>{prod.name}</div>)}
    </div>
  );
}

// After
import { useFilteredCategories, useFilteredProducts } from '@/hooks/use-language-filter.hook';

function ShopComponent({ categories, products }) {
  const { categories: filteredCategories } = useFilteredCategories(categories);
  const { products: filteredProducts } = useFilteredProducts(products);

  return (
    <div>
      {filteredCategories.map(cat => <div key={cat.id}>{cat.name}</div>)}
      {filteredProducts.map(prod => <div key={prod.id}>{prod.name}</div>)}
    </div>
  );
}
```

### Step 2: Update API Calls

```tsx
// Option 1: Filter on client-side (easier)
import { useFilteredCategories } from '@/hooks/use-language-filter.hook';

function useAllCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: () => fetch('/api/categories').then(res => res.json())
  });
}

function ShopPage() {
  const { data: allCategories } = useAllCategories();
  const { categories: filteredCategories } = useFilteredCategories(allCategories || []);
  
  return <CategoriesList categories={filteredCategories} />;
}

// Option 2: Filter on server-side (more efficient)
function useFilteredCategoriesAPI() {
  const { language } = useLanguageFilter();
  
  return useQuery({
    queryKey: ['categories', language],
    queryFn: () => fetch(`/api/categories?lang=${language}`).then(res => res.json())
  });
}
```

### Step 3: Test the Implementation

1. Visit `/shop` → Should show only English products/categories
2. Visit `/fa/shop` → Should show only Persian products/categories
3. Check browser console for any filtering logs

## 🐛 Troubleshooting

### Common Issues

1. **No items showing**:
   - Check if names actually contain Persian characters
   - Verify route detection is working

2. **Wrong language detected**:
   - Check pathname is correctly formatted (`/fa/shop` not `/fa\shop`)

3. **Mixed results**:
   - Some names might have mixed characters
   - Consider using description field as fallback

### Debug Helper

```tsx
import { hasPersianChars } from '@/lib/utils/language-filter';

// Debug component
function DebugLanguageFilter({ items }) {
  return (
    <div className="p-4 bg-gray-100 rounded">
      <h3>Debug: Language Detection</h3>
      {items.map(item => (
        <div key={item.id}>
          <strong>{item.name}</strong>: {hasPersianChars(item.name) ? 'Persian' : 'English'}
        </div>
      ))}
    </div>
  );
}
```

## 🎉 You're Ready!

The language filtering system is now ready to use in your bilingual pet shop! It will automatically show the appropriate products and categories based on the user's selected language route.

### Quick Start Checklist:
- ✅ Use `useFilteredCategories()` for category lists
- ✅ Use `useFilteredProducts()` for product lists  
- ✅ Check current language with `useLanguageFilter().isPersian`
- ✅ Test both `/shop` and `/fa/shop` routes
