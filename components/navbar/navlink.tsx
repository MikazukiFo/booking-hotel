"use client";

import Link from "next/link";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const NavLink = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (href: string) =>
    clsx(
      "block py-2 px-3 rounded-sm md:p-0 transition-all text-base md:text-lg",
      {
        "text-orange-700 font-bold underline underline-offset-8 decoration-2":
          pathname === href,
      },
      {
        "text-gray-800 hover:text-orange-700 md:hover:bg-transparent":
          pathname !== href,
      }
    );

  return (
    <>
      {/* Mobile Button */}
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center p-2 justify-center text-gray-600 rounded-md md:hidden hover:bg-gray-100"
        aria-label="Toggle menu">
        {!open ? (
          <IoMenu className="text-2xl" />
        ) : (
          <IoClose className="text-2xl" />
        )}
      </button>

      {/* Nav Items */}
      <div
        className={clsx(
          "w-full md:w-auto md:block",
          { hidden: !open } // hanya disembunyikan di mobile
        )}>
        <ul
          className="
            flex flex-col
            font-semibold
            text-base md:text-lg
            uppercase
            p-4 mt-4 rounded-sm bg-gray-50
            md:flex-row md:flex-wrap
            md:items-center                /* semua item sejajar vertikal */
            md:gap-x-6                     /* jarak horizontal antar item */
            md:gap-y-0
            md:p-0 md:mt-0
            md:border-0 md:bg-white
          ">
          <li>
            <Link href="/" className={linkClass("/")}>
              Home
            </Link>
          </li>

          <li>
            <Link href="/about" className={linkClass("/about")}>
              About
            </Link>
          </li>

          {/* item panjang, biar wrap natural di mobile, nowrap di desktop */}
          <li className="md:whitespace-nowrap">
            <Link href="/ticket" className={linkClass("/ticket")}>
              Ticket Bus Online
            </Link>
          </li>

          <li className="md:whitespace-nowrap">
            <Link href="/booking" className={linkClass("/booking")}>
              Manage Booking
            </Link>
          </li>

          <li>
            <Link href="/help" className={linkClass("/help")}>
              Help
            </Link>
          </li>

          <li>
            <Link
              href="/admin/dashboard"
              className={linkClass("/admin/dashboard")}>
              Dashboard
            </Link>
          </li>

          {/* Sign In Button */}
          <li className="mt-2 md:mt-0 md:ml-4">
            <Link
              href="/signin"
              className={clsx(
                "py-2 px-5 rounded-sm text-base md:text-lg transition inline-block",
                "min-w-[90px] text-center",
                pathname === "/signin"
                  ? "bg-orange-500 text-white font-bold"
                  : "bg-orange-500 text-white hover:bg-orange-600"
              )}>
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavLink;
