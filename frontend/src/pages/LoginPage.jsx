import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

// Componente: Página de Login
export default function LoginPage({ setPage }) {
  const [email, setEmail] = useState('cliente@email.com');
  const [password, setPassword] = useState('1234');
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const result = await login(email, password);
    if (result.success) {
      setPage('home'); // Redireciona para home após login
    } else {
      setError(result.error || 'Erro ao fazer login.');
    }
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white p-10 rounded-lg shadow-lg border border-brand-light">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-brand-secondary">
            Acesse sua conta
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">Email</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-brand-secondary placeholder-brand-accent focus:z-10 focus:border-brand-primary focus:outline-none focus:ring-brand-primary sm:text-sm"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Senha</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-brand-secondary placeholder-brand-accent focus:z-10 focus:border-brand-primary focus:outline-none focus:ring-brand-primary sm:text-sm"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && (
            <div className="text-red-600 text-sm text-center">
              {error}
            </div>
          )}

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a onClick={() => setPage('register')} className="font-medium text-brand-primary hover:text-brand-primary/90 cursor-pointer">
                Não tem uma conta? Cadastre-se
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-brand-primary py-2 px-4 text-sm font-medium text-white hover:bg-brand-primary/90 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
