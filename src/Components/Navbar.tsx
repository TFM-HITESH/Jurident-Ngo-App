// // components/Navbar.tsx

// import Link from 'next/link';

// const Navbar: React.FC = () => {
//   return (
//     <nav className="fixed left-0 top-0 bg-gradient-to-b from-cyan-500/40 to-cyan-500/0 p-4 min-w-full z-50">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo or Branding */}
//         <div>
//           <Link href="#" legacyBehavior>
//             <a className="text-white text-xl font-bold">OceanNGO</a>
//           </Link>
//         </div>

//         {/* Navigation Links */}
//         <ul className="flex space-x-4">
//           <NavItem href="#">Home</NavItem>
//           <NavItem href="#aboutus">About Us</NavItem>
//           <NavItem href="#projects">Projects</NavItem>
//           <NavItem href="/get-involved">Get Involved</NavItem>
//           <NavItem href="/events">Events</NavItem>
//           <NavItem href="/blog">Blog/News</NavItem>
//           <NavItem href="/contact">Contact Us</NavItem>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// // Navigation Item Component
// const NavItem: React.FC<{ href: string }> = ({ children, href }) => {
//   return (
//     <li>
//       <Link href={href} legacyBehavior>
//         <a className="text-white hover:underline transition duration-300">{children}</a>
//       </Link>
//     </li>
//   );
// };

// export default Navbar;
