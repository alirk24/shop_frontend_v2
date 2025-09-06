'use client';

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import {
  Category,
  Product,
  filterCategoriesByLanguage,
  filterProductsByLanguage,
  getLanguageFromPath,
  filterItemsByLanguage,
} from '@/lib/utils/language-filter';

/**
 * Custom hook for filtering data based on current language route
 * Automatically detects language from pathname and provides filtered data
 */
export function useLanguageFilter() {
  const pathname = usePathname();
  
  // Detect current language from pathname
  const currentLanguage = useMemo(() => {
    return getLanguageFromPath(pathname);
  }, [pathname]);

  // Memoized filtering functions
  const filterFunctions = useMemo(() => ({
    /**
     * Filter categories based on current language
     * @param categories - Array of categories from API
     * @returns Filtered categories for current language
     */
    categories: (categories: Category[]) => {
      return filterCategoriesByLanguage(categories, currentLanguage);
    },

    /**
     * Filter products based on current language
     * @param products - Array of products from API
     * @returns Filtered products for current language
     */
    products: (products: Product[]) => {
      return filterProductsByLanguage(products, currentLanguage);
    },

    /**
     * Generic filter for any items with 'name' property
     * @param items - Array of items with name property
     * @returns Filtered items for current language
     */
    items: <T extends { name: string }>(items: T[]) => {
      return filterItemsByLanguage(items, currentLanguage);
    },

    /**
     * Get current language
     */
    language: currentLanguage,

    /**
     * Check if current language is Persian
     */
    isPersian: currentLanguage === 'fa',

    /**
     * Check if current language is English
     */
    isEnglish: currentLanguage === 'en',
  }), [currentLanguage]);

  return filterFunctions;
}

/**
 * Hook for filtering categories with automatic language detection
 * @param categories - Array of categories from API
 * @returns Object with filtered categories and language info
 */
export function useFilteredCategories(categories: Category[]) {
  const { categories: filterCategories, language, isPersian } = useLanguageFilter();

  const filteredCategories = useMemo(() => {
    if (!categories || categories.length === 0) return [];
    return filterCategories(categories);
  }, [categories, filterCategories]);

  return {
    categories: filteredCategories,
    language,
    isPersian,
    totalCount: categories?.length || 0,
    filteredCount: filteredCategories.length,
  };
}

/**
 * Hook for filtering products with automatic language detection
 * @param products - Array of products from API
 * @returns Object with filtered products and language info
 */
export function useFilteredProducts(products: Product[]) {
  const { products: filterProducts, language, isPersian } = useLanguageFilter();

  const filteredProducts = useMemo(() => {
    if (!products || products.length === 0) return [];
    return filterProducts(products);
  }, [products, filterProducts]);

  return {
    products: filteredProducts,
    language,
    isPersian,
    totalCount: products?.length || 0,
    filteredCount: filteredProducts.length,
  };
}

/**
 * Generic hook for filtering any items with automatic language detection
 * @param items - Array of items with name property
 * @returns Object with filtered items and language info
 */
export function useFilteredItems<T extends { name: string }>(items: T[]) {
  const { items: filterItems, language, isPersian } = useLanguageFilter();

  const filteredItems = useMemo(() => {
    if (!items || items.length === 0) return [];
    return filterItems(items);
  }, [items, filterItems]);

  return {
    items: filteredItems,
    language,
    isPersian,
    totalCount: items?.length || 0,
    filteredCount: filteredItems.length,
  };
}
