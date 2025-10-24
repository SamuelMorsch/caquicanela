import React from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

// Componente: Página do Carrinho
export default function CartPage({ setPage }) {
  const { items, removeFromCart, updateQuantity, getTotalPrice, checkout } = useCart();
  const auth = useAuth(); // Pega o estado de autenticação

  const handleCheckout = async () => {
    if (!auth.isAuthenticated) {
        alert('Você precisa estar logado para finalizar a compra.');
        setPage('login'); 
        return;
    }
    
    const result = await checkout(auth); 
    if (result.success) {
      setPage('home'); 
    }
  };

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-brand-secondary text-center mb-12 font-serif">
          Meu Carrinho
        </h2>

        {items.length === 0 ? (
          <div className="text-center bg-white p-10 rounded-lg shadow-md border border-brand-light">
            <p className="text-brand-accent text-lg">Seu carrinho está vazio.</p>
            <button
              onClick={() => setPage('home')}
              className="mt-6 px-6 py-2 bg-brand-primary text-white text-sm font-bold rounded-md shadow-sm hover:bg-brand-primary/90 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
            >
              Ver produtos
            </button>
          </div>
        ) : (
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            {/* Lista de Itens */}
            <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md border border-brand-light">
              <ul role="list" className="divide-y divide-gray-200">
                {items.map((item) => (
                  <li key={item.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-brand-secondary">
                          <h3>{item.name}</h3>
                          <p className="ml-4">R$ {(parseFloat(item.price) * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="flex items-center border border-gray-300 rounded">
                           <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 text-brand-accent hover:bg-gray-100">-</button>
                           <span className="px-3 py-1">{item.quantity}</span>
                           <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 text-brand-accent hover:bg-gray-100">+</button>
                        </div>
                        
                        <div className="flex">
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                            className="font-medium text-brand-primary hover:text-brand-primary/90"
                          >
                            Remover
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resumo do Pedido */}
            <div className="lg:col-span-1 mt-10 lg:mt-0">
               <div className="bg-white p-6 rounded-lg shadow-md border border-brand-light sticky top-24">
                  <h3 className="text-lg font-medium text-brand-secondary mb-4">Resumo do Pedido</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-base font-medium text-brand-secondary">
                      <p>Subtotal</p>
                      <p>R$ {getTotalPrice()}</p>
                    </div>
                     <div className="flex justify-between text-sm text-brand-accent">
                      <p>Frete (Simulação)</p>
                      <p>R$ 15.00</p>
                    </div>
                    <div className="flex justify-between text-lg font-bold text-brand-secondary pt-4 border-t border-gray-200">
                      <p>Total</p>
                      <p>R$ {(parseFloat(getTotalPrice()) + 15.00).toFixed(2)}</p>
                    </div>
                  </div>
                  <button
                    onClick={handleCheckout}
                    className="mt-6 w-full rounded-md border border-transparent bg-brand-primary py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-brand-primary/90 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
                  >
                    Finalizar Compra
                  </button>
               </div>
            </div>
            
          </div>
        )}
      </div>
    </div>
  );
}
