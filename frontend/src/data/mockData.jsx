// --- Dados de Simulação (Mock) ---
// Substitua isso pela chamada real à API (GET /products)

// Função para gerar URLs de placeholder com a nova paleta de cores
const getImageUrl = (bgColor, fgColor, text) => `https://placehold.co/600x600/${bgColor}/${fgColor}?text=${encodeURIComponent(text)}&font=playfair+display`;

export const mockProducts = [
  {
    id: 1,
    sku: 'CC-001',
    name: 'Vestido Longo Caqui',
    slug: 'vestido-longo-caqui',
    short_description: 'Vestido leve para o verão.',
    price: '189.90',
    // Imagem placeholder atualizada com suas cores (Fundo: FFE2C8, Texto: 7C4A2D)
    imageUrl: getImageUrl('FFE2C8', '7C4A2D', 'CaquiCanela'),
    // Dados de estoque simulados (baseado no model Stock.js)
    Stocks: [
      { size: 'P', color: 'Caqui', quantity: 5 },
      { size: 'M', color: 'Caqui', quantity: 10 },
    ]
  },
  {
    id: 2,
    sku: 'CC-002',
    name: 'Blusa de Linho Canela',
    slug: 'blusa-linho-canela',
    short_description: 'Confortável e elegante.',
    price: '129.90',
    imageUrl: getImageUrl('FFE2C8', '7C4A2D', 'CaquiCanela'),
    Stocks: [
      { size: 'M', color: 'Canela', quantity: 8 },
      { size: 'G', color: 'Canela', quantity: 3 },
    ]
  },
  {
    id: 3,
    sku: 'CC-003',
    name: 'Saia Midi Verde Oliva',
    slug: 'saia-midi-verde-oliva',
    short_description: 'Um toque de cor terrosa.',
    price: '159.90',
    imageUrl: getImageUrl('FFE2C8', '7C4A2D', 'CaquiCanela'),
    Stocks: [
      { size: 'P', color: 'Oliva', quantity: 12 },
    ]
  },
  {
    id: 4,
    sku: 'CC-004',
    name: 'Camisa Social Bege',
    slug: 'camisa-social-bege',
    short_description: 'Clássica e versátil.',
    price: '179.90',
    imageUrl: getImageUrl('FFE2C8', '7C4A2D', 'CaquiCanela'),
    Stocks: [
      { size: 'P', color: 'Bege', quantity: 7 },
      { size: 'M', color: 'Bege', quantity: 7 },
      { size: 'G', color: 'Bege', quantity: 7 },
    ]
  },
];

