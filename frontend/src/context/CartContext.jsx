import React, { useState, createContext, useContext } from 'react';

// --- Contexto do Carrinho ---
// Simula o estado do carrinho (para criar um /order)
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addToCart = (product, quantity = 1) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prevItems, { ...product, quantity }];
    });
    alert(`${product.name} adicionado ao carrinho!`);
  };

  const removeFromCart = (productId) => {
    setItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0).toFixed(2);
  };

  // Simula a chamada POST /orders
  const checkout = async (auth) => {
    if (!auth.isAuthenticated) {
      alert('Você precisa estar logado para finalizar a compra.');
      return;
    }
    
    // Monta o payload baseado no model Order.js e OrderItem.js
    const orderPayload = {
      user_id: auth.user.id,
      shipping_amount: 15.00, // Valor fixo para simulação
      items: items.map(item => ({
        product_id: item.id,
        quantity: item.quantity,
        unit_price: item.price,
      }))
    };
    
    console.log('Simulando POST /orders com payload:', orderPayload);
    
    // TODO: Substituir por chamada fetch real ao seu backend
    // const response = await fetch('http://localhost:3000/orders', { 
    //   method: 'POST',
    //   headers: { 
    //     'Content-Type': 'application/json',
    //     // 'Authorization': `Bearer ${token}` // Se seu backend exigir autenticação
    //   },
    //   body: JSON.stringify(orderPayload)
    // });
    // const data = await response.json();
    
    // Simulando sucesso
    alert('Pedido finalizado com sucesso! (Simulação)');
    clearCart();
    return { success: true, orderId: 1001 };
  };

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, getTotalPrice, checkout }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook customizado
export const useCart = () => {
    return useContext(CartContext);
}

