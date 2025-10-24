import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} CaquiCanela. Todos os direitos reservados. (Protótipo)
        </p>
      </div>
    </footer>
  );
}

