import { Metadata } from "next";
import Image from "next/image";
import { IoEyeOutline, IoLocateOutline } from "react-icons/io5";
import HeaderSection from "@/components/header-section";

export const metadata: Metadata = {
  title: "About",
  description: "Who We Are",
};

const AboutPage = () => {
  return (
    <div>
      <HeaderSection title="About Us" subTitle="Lorem ipsum dolor sit." />
      <div className="max-w-screen-xl mx-auto py-20 px-4">
        <div className="drid md:grid-cols-2 gap-8">
          <Image
            src="/about-image.PNG"
            width={650}
            height={579}
            alt="about image"
          />
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Who We Are
            </h1>
            <p className="text-gray-700 py-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis,
              quidem. Aliquam excepturi doloribus itaque libero dolores quo.
            </p>
            <ul className="list-item space-y-6 pt-8">
              <li className="flex gap-5">
                <div className="flex-none mt-1">
                  <IoEyeOutline className="size-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold mb-1">Vission :</h4>
                  <p className="text-gray-600">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aut saepe maxime beatae atque sunt?
                  </p>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="flex-none mt-1">
                  <IoLocateOutline className="size-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold mb-1">Mission :</h4>
                  <p className="text-gray-600">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aut saepe maxime beatae atque sunt?
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
