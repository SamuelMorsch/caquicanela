import React, { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CartPage from './pages/CartPage';

// Componente Principal (App)
// Gerencia a navegação/roteamento
export default function App() {
  // 'home', 'login', 'register', 'cart'
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'login':
        return <LoginPage setPage={setCurrentPage} />;
      case 'register':
        return <RegisterPage setPage={setCurrentPage} />;
      case 'cart':
        return <CartPage setPage={setCurrentPage} />;
      default:
        return <HomePage />;
    }
  };

  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen bg-gray-100 flex flex-col">
          <Header setPage={setCurrentPage} />
          <main className="flex-grow">
            {renderPage()}
          </main>
          <Footer />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}
