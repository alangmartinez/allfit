export const products = [
  {
    id: 1,
    title: "Remera Nike Swoosh 50",
    price: "$6.299",
    talles: [
      { size: 'XS', available: false, id: 1 },
      { size: 'S', available: true, id: 2 },
      { size: 'M', available: true, id: 3 },
      { size: 'L', available: true, id: 4 },
      { size: 'XL', available: true, id: 5 }
    ],
    image:
      "https://essential.vteximg.com.br/arquivos/ids/532332-454-423/302-0708_1.jpg?v=637828507375000000",
    description:
      "La camiseta Nike Sportswear rinde homenaje al logotipo de Nike con un gráfico estampado con bordado de puntadas de satén.",
    stock: 11,
    category: "man",
  },
  {
    id: 2,
    title: "Remera Nike Fantasy",
    price: "$6.299",
    talles: [
      { size: 'XS', available: false, id: 1 },
      { size: 'S', available: true, id: 2 },
      { size: 'M', available: true, id: 3 },
      { size: 'L', available: true, id: 4 },
      { size: 'XL', available: true, id: 5 }
    ],
    image:
      "https://essential.vteximg.com.br/arquivos/ids/441796-1000-1000/302-9219_1.jpg?v=637607550165800000",
    description:
      "REMERA NIKE NSW ICON CLASH De Moda Para Mujer Código: DC5294-615.",
    stock: 10,
    category: "woman",
  },
  {
    id: 5,
    title: "Remera Nike FUTURA",
    price: "$6.999",
    talles: [
      { size: 'XS', available: false, id: 1 },
      { size: 'S', available: true, id: 2 },
      { size: 'M', available: true, id: 3 },
      { size: 'L', available: true, id: 4 },
      { size: 'XL', available: true, id: 5 }
    ],
    image:
    'https://essential.vteximg.com.br/arquivos/ids/513061-454-423/302-0644_1.jpg?v=637783188318230000',
    description:
      "La playera Nike Sportswear tiene un calce holgado para una sensación casual y cómoda. Su construcción de algodón para todos los días presenta un estampado Futura que está acentuado por un diseño de logotipo nacarado en relieve en el centro del pecho.",
    stock: 10,
    category: "woman",
  },
  {
    id: 6,
    title: "Remera Nike SWOOSH 50",
    price: "$6.299",
    talles: [
      { size: 'XS', available: false, id: 1 },
      { size: 'S', available: true, id: 2 },
      { size: 'M', available: true, id: 3 },
      { size: 'L', available: true, id: 4 },
      { size: 'XL', available: true, id: 5 }
    ],
    image:
    'https://essential.vteximg.com.br/arquivos/ids/544148-1000-1000/302-0661_1.jpg?v=637850384184670000',
    description:
    'La camiseta Nike Sportswear rinde homenaje al logotipo de Nike con un gráfico estampado con bordado de puntadas de satén. El ajuste clásico y el algodón de todos los días brindan una sensación familiar desde el primer momento.',
    stock: 10,
    category: "man",
  },
  {
    id: 7,
    title: "Remera Nike FUTURA",
    price: "$6.999",
    talles: [
      { size: 'XS', available: false, id: 1 },
      { size: 'S', available: true, id: 2 },
      { size: 'M', available: true, id: 3 },
      { size: 'L', available: true, id: 4 },
      { size: 'XL', available: true, id: 5 }
    ],
    image:
    'https://essential.vteximg.com.br/arquivos/ids/513057-454-423/302-0643_1.jpg?v=637783186803600000',
    description:
    'La playera Nike Sportswear tiene un calce holgado para una sensación casual y cómoda. Su construcción de algodón para todos los días presenta un estampado Futura que está acentuado por un diseño de logotipo nacarado en relieve en el centro del pecho.',
    stock: 10,
    category: "woman",
  },
];

const categorys = [
  { id: 'man', description: 'Man' },
  { id: 'woman', description: 'Woman' }
]

export const getProducts = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        categoryId
          ? products.filter((product) => product.category === categoryId)
          : products
      );
    },);
  });
};

export const getProductsById = (id) => {
  return new Promise((resolve) => {
    resolve(products.find((product) => product.id == id));
  });
};

export const getCategorys = () => {
  return new Promise ((resolve, reject) => {
    resolve(categorys)
  });
};