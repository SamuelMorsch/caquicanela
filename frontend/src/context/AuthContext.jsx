import React, { useState, createContext, useContext } from 'react';

// --- Contexto de Autenticação ---
// Simula o estado de login (baseado na rota /auth)
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); // { id: 1, email: '...' }
  const [token, setToken] = useState(null);

  // Simula a chamada POST /auth/login
  const login = async (email, password) => {
    console.log('Simulando login para:', email);
    
    // TODO: Substituir por chamada fetch real ao seu backend
    // const response = await fetch('http://localhost:3000/auth/login', { 
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email, password })
    // });
    // const data = await response.json();
    
    // Simulando sucesso
    if (email === 'cliente@email.com' && password === '1234') {
      const fakeToken = 'jwt.fake.token.123';
      setToken(fakeToken);
      setIsAuthenticated(true);
      setUser({ id: 1, email: email, name: 'Cliente Teste' });
      return { success: true };
    } else {
      return { success: false, error: 'Credenciais inválidas' };
    }
  };

  // Simula a chamada POST /auth/register
  const register = async (name, email, password) => {
    console.log('Simulando registro para:', email);

    // TODO: Substituir por chamada fetch real ao seu backend
    // const response = await fetch('http://localhost:3000/auth/register', { 
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ name, email, password })
    // });
    // const data = await response.json();
    
    // Simulando sucesso
    return { success: true, data: { id: 2, email: email } };
  };

  const logout = () => {
    setToken(null);
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook customizado para facilitar o uso do contexto
export const useAuth = () => {
    return useContext(AuthContext);
}

