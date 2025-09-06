/**
 * Language-based filtering utilities for categories and products
 * Filters items based on Persian/English language detection in the name field
 */

// Persian character range regex pattern
const PERSIAN_REGEX = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;

/**
 * Detects if a string contains Persian characters
 * @param text - Text to check for Persian characters
 * @returns true if text contains Persian characters, false otherwise
 */
export function hasPersianChars(text: string): boolean {
  return PERSIAN_REGEX.test(text);
}

/**
 * Category type definition based on your API response
 */
export interface Category {
  id: number;
  name: string;
  image: string;
  is_top: boolean;
}

/**
 * Product type definition based on your API response
 */
export interface Product {
  id: number;
  brand: number;
  name: string;
  description: string;
  weight: number;
  price: number;
  internal_price: number;
  price_after_promotion: number;
  total_discount: number;
  inventory: number;
  features: string;
  pets: number[];
  subcategories: number[];
  categories: number[];
  status: boolean;
  created_date: string;
  updated_date: string;
  published_date: string;
  active_promotions: any;
  image_urls: string[];
  IngredientsAnalysis?: string;
  ShippingReturns?: string;
  is_best_selling: boolean;
  is_top: boolean;
  is_on_sale: boolean;
}

/**
 * Filters categories based on language
 * @param categories - Array of categories from API
 * @param language - Current language ('en' | 'fa')
 * @returns Filtered categories array
 */
export function filterCategoriesByLanguage(
  categories: Category[],
  language: 'en' | 'fa'
): Category[] {
  return categories.filter(category => {
    const isPersianName = hasPersianChars(category.name);
    
    // If Persian language selected, show only items with Persian characters
    if (language === 'fa') {
      return isPersianName;
    }
    
    // If English language selected, show only items without Persian characters
    return !isPersianName;
  });
}

/**
 * Filters products based on language
 * @param products - Array of products from API
 * @param language - Current language ('en' | 'fa')
 * @returns Filtered products array
 */
export function filterProductsByLanguage(
  products: Product[],
  language: 'en' | 'fa'
): Product[] {
  return products.filter(product => {
    const isPersianName = hasPersianChars(product.name);
    
    // If Persian language selected, show only items with Persian characters
    if (language === 'fa') {
      return isPersianName;
    }
    
    // If English language selected, show only items without Persian characters
    return !isPersianName;
  });
}

/**
 * Generic function to filter any array of items with 'name' property
 * @param items - Array of items with name property
 * @param language - Current language ('en' | 'fa')
 * @returns Filtered items array
 */
export function filterItemsByLanguage<T extends { name: string }>(
  items: T[],
  language: 'en' | 'fa'
): T[] {
  return items.filter(item => {
    const isPersianName = hasPersianChars(item.name);
    
    // If Persian language selected, show only items with Persian characters
    if (language === 'fa') {
      return isPersianName;
    }
    
    // If English language selected, show only items without Persian characters
    return !isPersianName;
  });
}

/**
 * Hook-like function for React components to get language from pathname
 * @param pathname - Current pathname (e.g., '/fa/shop' or '/shop')
 * @returns Current language ('en' | 'fa')
 */
export function getLanguageFromPath(pathname: string): 'en' | 'fa' {
  return pathname.startsWith('/fa') ? 'fa' : 'en';
}

/**
 * Utility function to get filtered data based on current route
 * Combines language detection and filtering in one function
 */
export function getFilteredDataByRoute<T extends { name: string }>(
  items: T[],
  pathname: string
): T[] {
  const language = getLanguageFromPath(pathname);
  return filterItemsByLanguage(items, language);
}

// Example usage functions for common scenarios
export const languageFilter = {
  /**
   * Filter categories for current language
   */
  categories: (categories: Category[], language: 'en' | 'fa') => 
    filterCategoriesByLanguage(categories, language),
  
  /**
   * Filter products for current language
   */
  products: (products: Product[], language: 'en' | 'fa') => 
    filterProductsByLanguage(products, language),
  
  /**
   * Get language from pathname
   */
  getLanguage: (pathname: string) => 
    getLanguageFromPath(pathname),
  
  /**
   * Check if text has Persian characters
   */
  isPersian: (text: string) => 
    hasPersianChars(text),
  
  /**
   * Filter any items by language from pathname
   */
  byRoute: <T extends { name: string }>(items: T[], pathname: string) => 
    getFilteredDataByRoute(items, pathname)
};
