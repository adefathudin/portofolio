import { usePathname } from "next/navigation";
export default function NavbarMenus() {
  const currentRoute = usePathname();
  return (
    <>
      <li className="group">
        <a
          href="/"
          className="text-base text-secondary lg:py-2 lg:mx-8 lg:flex group-hover:text-primary"
        >
          <svg
            className={` ${
              currentRoute == "/" ? "text-black" : "text-gray-400"
            }  w-4 h-4 lg:w-5 lg:h-5 dark:text-white hover:text-black `}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9"
            />
          </svg>
        </a>
      </li>
      <li className="group">
        <a
          href="/profile"
          className="text-base text-secondary lg:py-2 lg:mx-8 lg:flex "
        >
          <svg
            className={` ${
              currentRoute == "/profile" ? "text-black" : "text-gray-400"
            }  w-4 h-4 lg:w-5 lg:h-5 dark:text-white hover:text-black `}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 18"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-2 3h4a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"
            />
          </svg>
        </a>
      </li>
      <li className="group">
        <a
          href="/articles"
          className="text-base text-secondary lg:py-2 lg:mx-8 lg:flex group-hover:text-primary"
        >
          <svg
            className={` ${
              currentRoute == "/articles" ? "text-black" : "text-gray-400"
            }  w-4 h-4 lg:w-5 lg:h-5 dark:text-white hover:text-black `}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M18 5h1v12a2 2 0 0 1-2 2m0 0a2 2 0 0 1-2-2V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v15a2 2 0 0 0 2 2h14ZM10 4h2m-2 3h2m-8 3h8m-8 3h8m-8 3h8M4 4h3v3H4V4Z"
            />
          </svg>
        </a>
      </li>
      <li className="group">
        <a
          href="/"
          className="text-base text-secondary lg:py-2 lg:mx-8 lg:flex group-hover:text-primary"
        >
          <svg
            className={` ${
              currentRoute == "/projects" ? "text-black" : "text-gray-400"
            }  w-4 h-4 lg:w-5 lg:h-5 dark:text-white hover:text-black `}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 18"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m5 5 4 4-4 4m5 0h5M2 1h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"
            />
          </svg>
        </a>
      </li>
      <li className="group">
        <a
          href="/"
          className="text-base text-secondary lg:py-2 lg:mx-8 lg:flex group-hover:text-primary"
        >
          <svg
            className={` ${
              currentRoute == "/tools" ? "text-black" : "text-gray-400"
            }  w-4 h-4 lg:w-5 lg:h-5 dark:text-white hover:text-black `}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 21 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m8.806 5.614-4.251.362-2.244 2.243a1.058 1.058 0 0 0 .6 1.8l3.036.356m9.439 1.819-.362 4.25-2.243 2.245a1.059 1.059 0 0 1-1.795-.6l-.449-2.983m9.187-12.57a1.536 1.536 0 0 0-1.26-1.26c-1.818-.313-5.52-.7-7.179.96-1.88 1.88-5.863 9.016-7.1 11.275a1.05 1.05 0 0 0 .183 1.25l.932.939.937.936a1.049 1.049 0 0 0 1.25.183c2.259-1.24 9.394-5.222 11.275-7.1 1.66-1.663 1.275-5.365.962-7.183Zm-3.332 4.187a2.115 2.115 0 1 1-4.23 0 2.115 2.115 0 0 1 4.23 0Z"
            />
          </svg>
        </a>
      </li>
      <li className="group">
        <a
          href="/"
          className="text-base text-secondary lg:py-2 lg:mx-8 lg:flex group-hover:text-primary"
        >
          <svg
            className={` ${
              currentRoute == "/products" ? "text-black" : "text-gray-400"
            }  w-4 h-4 lg:w-5 lg:h-5 dark:text-white hover:text-black `}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            fill="none"
            viewBox="0 0 21 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3.308 9a2.257 2.257 0 0 0 2.25-2.264 2.25 2.25 0 0 0 4.5 0 2.25 2.25 0 0 0 4.5 0 2.25 2.25 0 1 0 4.5 0C19.058 5.471 16.956 1 16.956 1H3.045S1.058 5.654 1.058 6.736A2.373 2.373 0 0 0 3.308 9Zm0 0a2.243 2.243 0 0 0 1.866-1h.767a2.242 2.242 0 0 0 3.733 0h.767a2.242 2.242 0 0 0 3.733 0h.767a2.247 2.247 0 0 0 1.867 1A2.22 2.22 0 0 0 18 8.649V19H9v-7H5v7H2V8.524c.37.301.83.469 1.308.476ZM12 12h3v3h-3v-3Z"
            />
          </svg>
        </a>
      </li>
    </>
  );
}
