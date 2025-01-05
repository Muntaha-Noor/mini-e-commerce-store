// import Head from 'next/head';
// import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

// export default function Contact() {
//   return (
//     <div className="bg-gray-50 min-h-screen flex items-center justify-center py-16">
//       <Head>
//         <title>Contact Us</title>
//         <meta name="description" content="Get in touch with us!" />
//       </Head>

//       <div className="bg-white p-10 rounded-3xl shadow-lg w-full max-w-3xl">
//         <h1 className="text-3xl font-semibold text-gray-800 text-center mb-8">Get In Touch</h1>

//         {/* Contact Info Section */}
//         <div className="space-y-6 mb-12">
//           <div className="flex items-center">
//             <FaMapMarkerAlt className="text-indigo-600 text-2xl mr-4" />
//             <p className="text-lg text-gray-700">
//               Shop Address: 1234 Main Street, City Center, Your City
//             </p>
//           </div>
//           <div className="flex items-center">
//             <FaEnvelope className="text-indigo-600 text-2xl mr-4" />
//             <p className="text-lg text-gray-700">
//               Shop Email: <a href="mailto:shop@example.com" className="text-indigo-600">shop@gmail.com</a>
//             </p>
//           </div>
//           <div className="flex items-center">
//             <FaPhoneAlt className="text-indigo-600 text-2xl mr-4" />
//             <p className="text-lg text-gray-700">+1 (123) 456-7890</p>
//           </div>
//         </div>

//         {/* Contact Form */}
//         <form action="#" method="POST" className="space-y-8">
//           <div className="flex flex-col md:flex-row gap-6">
//             <div className="w-full md:w-1/2">
//               <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 required
//                 className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition ease-in-out duration-300"
//               />
//             </div>

//             <div className="w-full md:w-1/2">
//               <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 required
//                 className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition ease-in-out duration-300"
//               />
//             </div>
//           </div>

//           <div>
//             <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">
//               Your Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               required
//               className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition ease-in-out duration-300"
//             ></textarea>
//           </div>

//           <button
//             type="submit"
//             className="w-full py-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none transform hover:scale-105 transition ease-in-out duration-200"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
