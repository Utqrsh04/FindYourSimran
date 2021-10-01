// const navigation = [
//   { name: "Home", href: "/dashboard", current: true },
//   { name: "Connections", href: "#", current: false },
//   { name: "Groups", href: "#", current: false },
//   { name: "Latest Views", href: "/login", current: false },
// ];

import { Link } from "react-router-dom";
import SearchBar from "./Searchbar";

export default function Navbar() {
  return (
    <header class="text-white body-font shadow-lg font-semibold bg-purple-500">
      <div class="mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <a
          href=" "
          class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span class="ml-3 text-xl">FindYourSimran</span>
        </a>
        <nav class="flex lg:w-2/5 flex-wrap items-center justify-center text-base md:ml-auto space-x-2">
          <div>
            <Link
              to="/dashboard"
              class="mr-3 px-8 py-2 border-2 rounded-md hover:bg-black hover:border-gray-100"
            >
              Home
            </Link>
            <span className=""></span>
          </div>
          <div>
            <Link
              to=" "
              class="mr-3 px-3 py-2 border-2 rounded-md hover:bg-black"
            >
              Connections
            </Link>
          </div>
          <div>
            <Link
              to=" "
              class="mr-3 px-8 py-2 border-2 rounded-md hover:bg-black"
            >
              Profile
            </Link>
          </div>
        </nav>

        <div class="lg:w-2/5 inline-flex lg:justify-end m lg:ml-0">
          <SearchBar />
        </div>
      </div>
    </header>
  );
}
