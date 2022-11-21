import { Outlet } from "solid-start";
import { unstable_island } from "solid-start";

const NavDropdown = unstable_island(() => import("../components/NavDropdown"));

export default function TechTwitterLayout() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export function Nav() {
  // https://flowbite.com/docs/getting-started/license/
  return (
    <nav class="border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-gray-900">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/" class="flex items-center">
          {/* <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-6 mr-3 sm:h-9"
              alt="Flowbite Logo"
            /> */}
          <span class="self-center text-xl font-semibold whitespace-nowrap text-white">
            #techtwitter
          </span>
        </a>

        {/* <button
          id="dropdownUserAvatarButton"
          data-dropdown-toggle="dropdownAvatar"
          class="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 focus:ring-gray-600"
          type="button"
        >
          <span class="sr-only">Open user menu</span>
          <div class="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full bg-gray-600">
            <svg
              class="absolute -left-1 w-12 h-12 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </button> */}

        {/* <div
          id="dropdownAvatar"
          class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow bg-gray-700 divide-gray-600"
        >
          <div class="py-3 px-4 text-sm text-gray-900 text-white">
            <div>Bonnie Green</div>
            <div class="font-medium truncate">name@flowbite.com</div>
          </div>
          <ul
            class="py-1 text-sm text-gray-700 text-gray-200"
            aria-labelledby="dropdownUserAvatarButton"
          >
            <li>
              <a
                href="#"
                class="block py-2 px-4 hover:bg-gray-100 hover:bg-gray-600 hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-4 hover:bg-gray-100 hover:bg-gray-600 hover:text-white"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-4 hover:bg-gray-100 hover:bg-gray-600 hover:text-white"
              >
                Earnings
              </a>
            </li>
          </ul>
          <div class="py-1">
            <a
              href="#"
              class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 hover:bg-gray-600 text-gray-200 hover:text-white"
            >
              Sign out
            </a>
          </div>
        </div> */}

        <div class="flex items-center md:order-2">
          <NavDropdown />
        </div>

        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-2"
        >
          <ul class="h-14 flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
            {/* <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                >
                  Contact
                </a>
              </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
