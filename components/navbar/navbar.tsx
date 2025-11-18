import Image from "next/image";
import Link from "next/link";
import Navlink from "@/components/navbar/navlink";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full bg-white shadow-sm z-20">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p0 px-6">
        {/* Logo + Title */}
        <Link href="/" className="flex items-center gap-3">
          <div className=" max-h-30 flex items-center">
            <Image
              src="/logo1.PNG"
              width={180} // 🔥 Lebih besar agar terlihat jelas
              height={110}
              alt="logo"
              priority
              className="object-contain"
            />
          </div>

          <span className="font-bold text-2xl text-gray-800">
            KIZE <span className="text-orange-700">TRANS</span>
          </span>
        </Link>

        {/* Navigation Menu */}
        <div className="flex items-center">
          <Navlink />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
