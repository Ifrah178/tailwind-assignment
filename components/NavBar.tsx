import Link from 'next/link';

export default function NavBar() {
  return (
    <div>
      {/* <ul className="flex justify-center">
        <Link href="/" className="text-lg font-medium italic px-4 py-3 hover:text-gray-500">HOME</Link>
        <Link href="/about" className="text-lg font-medium italic px-4 py-3 hover:text-gray-500">ABOUT</Link>
        <Link href="/contact" className="text-lg font-medium italic px-4 py-3 hover:text-gray-500">CONTACT</Link>
      </ul> */}

<ul className="Nav">
         <Link className="navLink" href="/">HOME</Link>
         <Link className="navLink" href="/about">ABOUT</Link>
         <Link className="navLink" href="/contact">CONTACT</Link>
         </ul>
    </div>
  );
}
