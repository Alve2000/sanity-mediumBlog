import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
        
        <Link href="/">
          <img 
            className="w-44 object-contain cursor-pointer"
            src="https://links.papareact.com/yvf"
            alt="" />
        </Link>

        <div className="flex items-center space-x-5">
          <div className="hidden md:inline-flex items-center space-x-5">
            <h3 className="cursor-pointer">Our story</h3>
            <h3 className="cursor-pointer">Membership</h3>
            <h3 className="cursor-pointer">Write</h3>
          </div>
          <h3 className="hidden sm:inline-flex cursor-pointer">Sign In</h3>
          <h3 className="text-white bg-black px-4 py-1 rounded-full cursor-pointer">Get started</h3>
        </div>

    </header>
  );
}

export default Header;