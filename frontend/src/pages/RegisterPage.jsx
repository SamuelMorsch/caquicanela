import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

// Componente: Página de Registro
export default function RegisterPage({ setPage }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!name || !email || !password) {
      setError('Todos os campos são obrigatórios.');
      return;
    }

    const result = await register(name, email, password);
    if (result.success) {
      alert('Registro realizado com sucesso! Faça o login.');
      setPage('login'); // Redireciona para login após registro
    } else {
      setError(result.error || 'Erro ao registrar.');
    }
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white p-10 rounded-lg shadow-lg border border-brand-light">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-brand-secondary">
            Crie sua conta
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">Nome</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-brand-secondary placeholder-brand-accent focus:z-10 focus:border-brand-primary focus:outline-none focus:ring-brand-primary sm:text-sm"
                placeholder="Nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email-address-reg" className="sr-only">Email</label>
              <input
                id="email-address-reg"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-brand-secondary placeholder-brand-accent focus:z-10 focus:border-brand-primary focus:outline-none focus:ring-brand-primary sm:text-sm"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password-reg" className="sr-only">Senha</label>
              <input
                id="password-reg"
                name="password"
                type="password"
                autoComplete="new-password"
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
              <a onClick={() => setPage('login')} className="font-medium text-brand-primary hover:text-brand-primary/90 cursor-pointer">
                Já tem uma conta? Faça login
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-brand-primary py-2 px-4 text-sm font-medium text-white hover:bg-brand-primary/90 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
            >
              Criar conta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
