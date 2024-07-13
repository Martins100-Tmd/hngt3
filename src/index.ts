export { default as Navbar } from './components/navbar';

export { default as Dummy } from '/B010.jpg';
export { default as Speaker } from '/speaker.png';
export { default as Card } from './components/card';
export { default as HeroI } from '/HE.jpg';
export { default as Hero } from './components/Hero';
export { default as Hero1 } from './components/HeroI';
export { default as CartProxy } from './components/cart';

export { default as HPerson } from '/person.png';
export { default as Search } from '/search.png';
export { default as water } from '/water.png';
export { default as Home } from '/Home.png';
export { default as LinK } from '/Link.png';
export { default as Star } from '/star.png';
export { default as Speak } from '/speak.png';
export { default as Logo } from '/logo.png';
export { default as IG } from '/IG.png';
export { default as YT } from '/YT.png';
export { default as X } from '/X.png';
export { default as searchg } from '/searchg.png';
export { default as left } from '/left.png';
export { default as right } from '/right.png';
export { default as awof } from '/awof.png';

export { default as rating } from '/rating.png';
export { default as purchase } from '/purchase.png';
export { default as cart } from '/cart.png';
export { default as email } from '/email.png';
export { default as em } from '/em.png';
export { default as google } from '/google.png';

export { default as Footer } from './components/footer';

export { default as V1 } from '/Vector.png';
export { default as V2 } from '/Vector (1).png';
export { default as V3 } from '/Vector (2).png';
export { default as V4 } from '/Vector (3).png';
export { default as V5 } from '/Vector (4).png';
export { default as V6 } from '/Vector (5).png';
export { default as V7 } from '/Vector (6).png';
export { default as V8 } from '/Vector (7).png';
export { default as V9 } from '/Vector (8).png';
export { default as V10 } from '/Vector (9).png';
export { default as V11 } from '/Vector (10).png';
export { default as V12 } from '/Vector (11).png';

export function locator() {
   let path = window.location.pathname;
   console.log(path);
   console.log('Martins');
   return path;
}

locator();

export const url = (page: number, size: number) => {
   return `products?organization_id=32753af156b44c6dbbc8f16d12c1caa4&reverse_sort=false&page=${page}&size=${size}&Appid=574QE3L1H8JVJBP&Apikey=bea7244ab1214a228f81cd290762034f20240713051110101434
`;
};

export const productUrl = (id: string) => {
   return `products/${id}?organization_id=32753af156b44c6dbbc8f16d12c1caa4&Appid=574QE3L1H8JVJBP&Apikey=bea7244ab1214a228f81cd290762034f20240713051110101434`;
};

export function sleep(ms: number) {
   return new Promise((resolve) => setTimeout(resolve, ms));
}

export const fetchData = async (id: string) => {
   const response = await fetch(
      `/api/products/${id}?organization_id=32753af156b44c6dbbc8f16d12c1caa4&Appid=574QE3L1H8JVJBP&Apikey=bea7244ab1214a228f81cd290762034f20240713051110101434`
   );
   if (!response.ok) {
      throw new Error('Network response was not ok');
   }
   const data = await response.json();
   return data;
};
