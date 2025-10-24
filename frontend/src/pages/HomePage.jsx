import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { mockProducts } from '../data/mockData';

// Componente: Página de Listagem de Produtos (Home)
export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simula a chamada GET /products
  useEffect(() => {
    setLoading(true);
    
    // TODO: Substituir por chamada fetch real ao seu backend
    // fetch('http://localhost:3000/products')
    //   .then(res => res.json())
    //   .then(data => {
    //     setProducts(data);
    //     setLoading(false);
    //   })
    //   .catch(err => {
    //     console.error("Erro ao buscar produtos:", err);
    //     setLoading(false);
    //   });

    // Simulação:
    setTimeout(() => {
      setProducts(mockProducts);
      setLoading(false);
    }, 500); // Simula delay da rede
  }, []);

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-brand-secondary text-center mb-12 font-serif">
          Nossas Coleções
        </h2>

        {loading ? (
          <p className="text-center text-brand-accent">Carregando produtos...</p>
        ) : (
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
