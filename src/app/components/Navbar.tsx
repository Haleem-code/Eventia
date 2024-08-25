import Link from 'next/link';
import Image from 'next/image';
const Navbar = () => {
  return (
    <nav className=" p-4 text-white" style={{backgroundColor:"#080C0A"}}>
      <div className="container mx-auto flex justify-between items-center">
     <div  className=" flex justify-between items-center" >
     <Image src="/images/logo.svg" alt="logo" width={30} height={20}/> 
        <h1 className="text-2xl font-bold  "> Eventia</h1>
          </div>
        <ul className="flex space-x-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/schedule">Schedule</Link></li>
          <li><Link href="/speakers">Speakers</Link></li>
          <li><Link href="/ticket">Ticket</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
