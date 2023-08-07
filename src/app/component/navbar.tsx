"use client";
import NavbarMenus from "./_navbar_menus";
import { usePathname } from "next/navigation";
export const Navbar = () => {
  const currentRoute = usePathname();
  return (
    <header className="bg-transparent absolute top-0 left-0 w-full h-16 flex items-center z-10">
      <div className="container">
        <div className="block lg:hidden relative items-center">
          <div className="flex flex-grow justify-between max-w-full">
            <NavbarMenus />
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <a href="#" className="font-bold text-lg text-primary block py-6">
                <img src="/logo-adefathudin.png"></img>
              </a>
            </div>
            <div className="flex items-center px-4">
              <nav
                id="nav-menu"
                className="absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
              >
                <ul className="flex">
                  <NavbarMenus />
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
