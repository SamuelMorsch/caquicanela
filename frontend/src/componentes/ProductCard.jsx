import React from 'react';
import { useCart } from '../context/CartContext';

// Componente: Card de Produto
export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="group relative bg-white border border-brand-light rounded-lg shadow-sm overflow-hidden transform transition-all duration-300 hover:shadow-lg">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:opacity-75 transition-opacity duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-sm text-brand-secondary font-medium truncate">{product.name}</h3>
        <p className="mt-1 text-xs text-brand-accent">{product.short_description}</p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-lg font-bold text-brand-secondary">R$ {product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="px-3 py-2 bg-brand-primary text-white text-xs font-bold rounded-md shadow-sm hover:bg-brand-primary/90 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 transition-colors duration-200"
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}
