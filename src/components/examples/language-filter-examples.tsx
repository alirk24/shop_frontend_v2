'use client';

import { useFilteredCategories, useFilteredProducts } from '@/hooks/use-language-filter.hook';
import { Category, Product } from '@/lib/utils/language-filter';

/**
 * Example component showing how to use filtered categories
 */
interface CategoriesDisplayProps {
  categories: Category[];
}

export function CategoriesDisplay({ categories }: CategoriesDisplayProps) {
  const { categories: filteredCategories, language, isPersian, totalCount, filteredCount } = 
    useFilteredCategories(categories);

  return (
    <div className="p-4">
      <div className="mb-4">
        <h2 className="text-xl font-bold">
          {isPersian ? 'دسته‌بندی‌ها' : 'Categories'}
        </h2>
        <p className="text-sm text-gray-600">
          {isPersian 
            ? `زبان: فارسی | کل: ${totalCount} | نمایش: ${filteredCount}`
            : `Language: English | Total: ${totalCount} | Showing: ${filteredCount}`
          }
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCategories.map((category) => (
          <div key={category.id} className="border rounded-lg p-4">
            <img 
              src={category.image} 
              alt={category.name}
              className="w-full h-48 object-cover rounded mb-2"
            />
            <h3 className="font-semibold">{category.name}</h3>
            {category.is_top && (
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                {isPersian ? 'برتر' : 'Top'}
              </span>
            )}
          </div>
        ))}
      </div>

      {filteredCategories.length === 0 && (
        <p className="text-center text-gray-500 py-8">
          {isPersian 
            ? 'هیچ دسته‌بندی‌ای برای این زبان یافت نشد'
            : 'No categories found for this language'
          }
        </p>
      )}
    </div>
  );
}

/**
 * Example component showing how to use filtered products
 */
interface ProductsDisplayProps {
  products: Product[];
}

export function ProductsDisplay({ products }: ProductsDisplayProps) {
  const { products: filteredProducts, language, isPersian, totalCount, filteredCount } = 
    useFilteredProducts(products);

  const formatPrice = (price: number) => {
    return isPersian 
      ? `${price.toLocaleString('fa-IR')} تومان`
      : `$${price.toLocaleString()}`;
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <h2 className="text-xl font-bold">
          {isPersian ? 'محصولات' : 'Products'}
        </h2>
        <p className="text-sm text-gray-600">
          {isPersian 
            ? `زبان: فارسی | کل: ${totalCount} | نمایش: ${filteredCount}`
            : `Language: English | Total: ${totalCount} | Showing: ${filteredCount}`
          }
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border rounded-lg p-4">
            <img 
              src={product.image_urls[0]} 
              alt={product.name}
              className="w-full h-48 object-cover rounded mb-2"
            />
            <h3 className="font-semibold text-sm mb-1">{product.name}</h3>
            <p className="text-xs text-gray-600 mb-2 line-clamp-2">
              {product.description}
            </p>
            
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-lg">
                {formatPrice(product.price_after_promotion)}
              </span>
              {product.total_discount > 0 && (
                <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
                  -{product.discount}%
                </span>
              )}
            </div>

            <div className="flex gap-1 mb-2">
              {product.is_best_selling && (
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                  {isPersian ? 'پرفروش' : 'Best Selling'}
                </span>
              )}
              {product.is_top && (
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  {isPersian ? 'برتر' : 'Top'}
                </span>
              )}
              {product.is_on_sale && (
                <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
                  {isPersian ? 'حراج' : 'Sale'}
                </span>
              )}
            </div>

            <p className="text-xs text-gray-500">
              {isPersian ? 'موجودی:' : 'Stock:'} {product.inventory}
            </p>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500 py-8">
          {isPersian 
            ? 'هیچ محصولی برای این زبان یافت نشد'
            : 'No products found for this language'
          }
        </p>
      )}
    </div>
  );
}

/**
 * Example component showing combined categories and products
 */
interface ShopPageProps {
  categories: Category[];
  products: Product[];
}

export function ShopPage({ categories, products }: ShopPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <CategoriesDisplay categories={categories} />
      <ProductsDisplay products={products} />
    </div>
  );
}
