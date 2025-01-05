// export default function Footer() {
//     return (
//   <>
// <footer className="bg-gray-900 text-white py-8">
//   <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//     {/* About Section */}
//     <div>
//       <h2 className="text-2xl font-semibold mb-4">About Us</h2>
//       <p className="text-gray-400">
//         We are your one-stop shop for the best products at unbeatable prices.
//         Our mission is to provide quality products with excellent customer
//         service.
//       </p>
//     </div>
//     {/* Links Section */}
//     <div>
//       <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
//       <ul className="text-gray-400 space-y-2">
//         <li>
//           <a href="/shop" className="hover:text-white transition">
//             Shop
//           </a>
//         </li>
//         <li>
//           <a href="/about" className="hover:text-white transition">
//             About Us
//           </a>
//         </li>
//         <li>
//           <a href="/contact" className="hover:text-white transition">
//             Contact
//           </a>
//         </li>
//         <li>
//           <a href="/faq" className="hover:text-white transition">
//             FAQs
//           </a>
//         </li>
//       </ul>
//     </div>
//     {/* Subscribe Section */}
//     <div>
//       <h2 className="text-2xl font-semibold mb-4">Subscribe</h2>
//       <p className="text-gray-400 mb-4">
//         Subscribe to our newsletter to get updates on new products and special
//         offers.
//       </p>
//       <form className="flex space-x-2">
//         <input
//           type="email"
//           placeholder="Enter your email"
//           className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//         />
//         <button
//           type="submit"
//           className="px-4 py-2 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition"
//         >
//           Subscribe
//         </button>
//       </form>
//     </div>
//   </div>
//   <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500">
//     <p>© 2025 E-Commerce Store. All Rights Reserved.</p>
//     <div className="flex justify-center space-x-4 mt-4">
//       <a href="#" className="hover:text-white transition">
//         <i className="fab fa-facebook-f" />
//       </a>
//       <a href="#" className="hover:text-white transition">
//         <i className="fab fa-twitter" />
//       </a>
//       <a href="#" className="hover:text-white transition">
//         <i className="fab fa-instagram" />
//       </a>
//       <a href="#" className="hover:text-white transition">
//         <i className="fab fa-linkedin-in" />
//       </a>
//     </div>
//   </div>
// </footer>

//   </>
//     );
//   }

















export default function Footer() {
  return (
    <>
      <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* About Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">About Us</h2>
            <p className="text-gray-400 leading-relaxed">
              ShopEase is your ultimate destination for quality products at
              unbeatable prices. We strive to provide an exceptional shopping
              experience with excellent customer service.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Quick Links</h2>
            <ul className="text-gray-400 space-y-2">
              <li>
                <a href="/shop" className="hover:text-yellow-500 transition">
                  Shop
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-yellow-500 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-yellow-500 transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-yellow-500 transition">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Subscribe</h2>
            <p className="text-gray-400 mb-4">
              Join our mailing list to stay updated on new arrivals and exclusive offers.
            </p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500">
          <p>© 2025 ShopEase. All Rights Reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:text-yellow-500 transition">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#" className="hover:text-yellow-500 transition">
              <i className="fab fa-twitter" />
            </a>
            <a href="#" className="hover:text-yellow-500 transition">
              <i className="fab fa-instagram" />
            </a>
            <a href="#" className="hover:text-yellow-500 transition">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}




















                       

//   import Image from "next/image";

// import Image from "next/image";

// export default async function Product({params}:{params:{product:string}}) {
//     const fetchdata = await fetch(`https://fakestoreapi.com/products${params.product}`)
//     const res = await fetchdata.json()
//     console.log(res)
//   return (
//    <> 
//     <section className="text-gray-600 body-font overflow-hidden">
//   <div className="container px-5 py-24 mx-auto">
//     <div className="lg:w-4/5 mx-auto flex flex-wrap">
//       <Image
//         alt="ecommerce"
//         className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
//         src={res.image}
//         height={400}
//         width={400}
//       />
//       <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
//         <h2 className="text-sm title-font text-gray-500 tracking-widest">
//           BRAND NAME
//         </h2>
//         <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
//           {res.title}
//         </h1>
//         <div className="flex mb-4">
//           <span className="flex items-center">
//             <svg
//               fill="currentColor"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               className="w-4 h-4 text-indigo-500"
//               viewBox="0 0 24 24"
//             >
//               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//             </svg>
//             <svg
//               fill="currentColor"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               className="w-4 h-4 text-indigo-500"
//               viewBox="0 0 24 24"
//             >
//               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//             </svg>
//             <svg
//               fill="currentColor"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               className="w-4 h-4 text-indigo-500"
//               viewBox="0 0 24 24"
//             >
//               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//             </svg>
//             <svg
//               fill="currentColor"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               className="w-4 h-4 text-indigo-500"
//               viewBox="0 0 24 24"
//             >
//               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//             </svg>
//             <svg
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               className="w-4 h-4 text-indigo-500"
//               viewBox="0 0 24 24"
//             >
//               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//             </svg>
//             <span className="text-gray-600 ml-3">4 Reviews</span>
//           </span>
//           <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
//             <a className="text-gray-500">
//               <svg
//                 fill="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 className="w-5 h-5"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
//               </svg>
//             </a>
//             <a className="text-gray-500">
//               <svg
//                 fill="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 className="w-5 h-5"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
//               </svg>
//             </a>
//             <a className="text-gray-500">
//               <svg
//                 fill="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 className="w-5 h-5"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
//               </svg>
//             </a>
//           </span>
//         </div>
//         <p className="leading-relaxed">
//          {res.description}
//         </p>
//         <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
//           <div className="flex">
//             <span className="mr-3">Color</span>
//             <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" />
//             <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
//             <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none" />
//           </div>
//           <div className="flex ml-6 items-center">
//             <span className="mr-3">Size</span>
//             <div className="relative">
//               <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
//                 <option>SM</option>
//                 <option>M</option>
//                 <option>L</option>
//                 <option>XL</option>
//               </select>
//               <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
//                 <svg
//                   fill="none"
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   className="w-4 h-4"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M6 9l6 6 6-6" />
//                 </svg>
//               </span>
//             </div>
//           </div>
//         </div>
//         <div className="flex">
//           <span className="title-font font-medium text-2xl text-gray-900">
//             ${res.price}
//           </span>
//           <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
//             Button
//           </button>
//           <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
//             <svg
//               fill="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               className="w-5 h-5"
//               viewBox="0 0 24 24"
//             >
//               <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

//    </>
//   );
// }


























// import Image from "next/image";

// export default async function Prodects({params}:{params:{product:string}}) {
//     const data = await fetch(`https://fakestoreapi.com/products/${params.product}`)
//     const res = await data.json()
//     console.log(res)
//     return (
//       <>  
//            <section className="text-gray-600 body-font overflow-hidden">
//   <div className="container px-5 py-24 mx-auto">
//     <div className="lg:w-4/5 mx-auto flex flex-wrap">
//       <Image
//         alt="ecommerce"
//         className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
//         src={res.image}
//         width={400}
//         height={400}
//       />
//       <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
//         <h2 className="text-sm title-font text-gray-500 tracking-widest">
//           BRAND NAME
//         </h2>
//         <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
//           {res.title}
//         </h1>
//         <div className="flex mb-4">
//           <span className="flex items-center">
//             <svg
//               fill="currentColor"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               className="w-4 h-4 text-indigo-500"
//               viewBox="0 0 24 24"
//             >
//               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//             </svg>
//             <svg
//               fill="currentColor"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               className="w-4 h-4 text-indigo-500"
//               viewBox="0 0 24 24"
//             >
//               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//             </svg>
//             <svg
//               fill="currentColor"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               className="w-4 h-4 text-indigo-500"
//               viewBox="0 0 24 24"
//             >
//               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//             </svg>
//             <svg
//               fill="currentColor"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               className="w-4 h-4 text-indigo-500"
//               viewBox="0 0 24 24"
//             >
//               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//             </svg>
//             <svg
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               className="w-4 h-4 text-indigo-500"
//               viewBox="0 0 24 24"
//             >
//               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//             </svg>
//             <span className="text-gray-600 ml-3">4 Reviews</span>
//           </span>
//           <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
//             <a className="text-gray-500">
//               <svg
//                 fill="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 className="w-5 h-5"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
//               </svg>
//             </a>
//             <a className="text-gray-500">
//               <svg
//                 fill="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 className="w-5 h-5"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
//               </svg>
//             </a>
//             <a className="text-gray-500">
//               <svg
//                 fill="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 className="w-5 h-5"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
//               </svg>
//             </a>
//           </span>
//         </div>
//         <p className="leading-relaxed">
//          {res.description}
//         </p>
//         <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
//           <div className="flex">
//             <span className="mr-3">Color</span>
//             <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" />
//             <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
//             <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none" />
//           </div>
//           <div className="flex ml-6 items-center">
//             <span className="mr-3">Size</span>
//             <div className="relative">
//               <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
//                 <option>SM</option>
//                 <option>M</option>
//                 <option>L</option>
//                 <option>XL</option>
//               </select>
//               <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
//                 <svg
//                   fill="none"
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   className="w-4 h-4"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M6 9l6 6 6-6" />
//                 </svg>
//               </span>
//             </div>
//           </div>
//         </div>
//         <div className="flex">
//           <span className="title-font font-medium text-2xl text-gray-900">
//             ${res.price}
//           </span>
//           <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
//             Button
//           </button>
//           <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
//             <svg
//               fill="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               className="w-5 h-5"
//               viewBox="0 0 24 24"
//             >
//               <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

//       </>
//     );
//   }
  