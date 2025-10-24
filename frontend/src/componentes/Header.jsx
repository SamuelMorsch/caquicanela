import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

// Componente: Cabeçalho/Navegação
export default function Header({ setPage }) {
  const { isAuthenticated, user, logout } = useAuth();
  const { items } = useCart();
  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-10 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a onClick={() => setPage('home')} className="text-2xl font-bold text-brand-secondary cursor-pointer font-serif">
              CaquiCanela
            </a>
          </div>
          
          {/* Links de Navegação */}
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <a onClick={() => setPage('home')} className="border-transparent text-brand-secondary hover:border-brand-primary/50 hover:text-brand-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium cursor-pointer">
              Home
            </a>
            {/* Você pode adicionar mais links aqui (Ex: Categorias) */}
          </div>
          
          {/* Ícones da Direita (Login, Carrinho) */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="relative">
                 <span className="text-sm text-brand-secondary">{user.name.split(' ')[0]}</span>
                 <a onClick={() => { logout(); setPage('home'); }} className="ml-4 text-sm font-medium text-brand-accent hover:text-brand-primary cursor-pointer">
                  Sair
                </a>
              </div>
            ) : (
              <a onClick={() => setPage('login')} className="text-sm font-medium text-brand-accent hover:text-brand-primary cursor-pointer">
                Login
              </a>
            )}
            
            <span className="text-gray-300">|</span>

            {/* Ícone do Carrinho */}
            <a onClick={() => setPage('cart')} className="relative text-brand-accent hover:text-brand-primary cursor-pointer">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-primary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
