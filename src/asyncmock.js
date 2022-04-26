export const products = [
  {
    id: 1,
    title: "Remera Nike Swoosh 50",
    price: "$6.299",
    talles: {
      s: true,
      m: true,
      l: true,
      xl: true,
    },
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
    talles: {
      s: true,
      m: true,
      l: false,
      xl: false,
    },
    image:
      "https://essential.vteximg.com.br/arquivos/ids/516623-1000-1000/302-0671_1.jpg?v=637791009551070000",
    description:
      "Está confeccionada con un ajuste clásico y nuestro algodón de uso diario para brindar una sensación familiar.",
    stock: 10,
    category: "man",
  },
  {
    id: 3,
    title: "Remera Nike SG",
    price: "$6.299",
    talles: {
      s: true,
      m: true,
      l: true,
      xl: false,
    },
    image:
      "https://essential.vteximg.com.br/arquivos/ids/518722-1000-1000/302-0710_1.jpg?v=637793372247470000",
    description:
      "Con algodón y un ajuste clásico, esta camiseta tiene gráficos bordados repetidos y en capas que dan nueva vida a un básico de Nike.",
    stock: 13,
    category: "man",
  },
  {
    id: 4,
    title: "Remera Nike NSW Icon Clash",
    price: "$6.999",
    talles: {
      xs: true,
      s: true,
      m: true,
      l: false,
      xl: false,
    },
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
    talles: {
      xs: true,
      s: true,
      m: true,
      l: false,
      xl: false,
    },
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
    talles: {
      xs: true,
      s: true,
      m: true,
      l: false,
      xl: false,
    },
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
    talles: {
      xs: true,
      s: true,
      m: true,
      l: false,
      xl: false,
    },
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