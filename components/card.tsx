import Image from "next/image";
import Link from "next/link";
import { IoPeopleOutline } from "react-icons/io5";

const Card = () => {
  return (
    <div className="bg-white shadow-lg rounded-sm transition duration-100 hover:shadow-sm">
      <div className="h-2[260px] w-auto rounded-t-sm relative">
        <Image
          src="/hero1.PNG"
          width={384}
          height={256}
          alt="bus image"
          className="w-full h-full object-cover rounded-t-sm"
        />
      </div>

      <div className="p-8">
        <h4 className="text-2xl font-medium">
          <Link
            href="#"
            className="hover:text-gray-800 transition duration-150">
            Luxury Class
          </Link>
        </h4>
        <h4 className="text-2xl mb-7">
          <span className="font-semibold text-gray-600">RP 190000</span>
          <span className="text-gray-400 text-sm"> Sinar Jaya </span>
        </h4>
        <div className="flex items-center space-x-2">
          <IoPeopleOutline />
          <span>2</span>
        </div>
        <Link
          href="#"
          className="px-6 py-2.5 md:px-10 md:py-3 font-semibold text-white bg-orange-600 rounded-sm hover:bg-orange-700 transition duration-150">
          Buy Now
        </Link>
      </div>
    </div>
  );
};

export default Card;
