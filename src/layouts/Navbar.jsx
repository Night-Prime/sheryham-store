import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ShoppingBagIcon,
  Bars3Icon,
  AdjustmentsHorizontalIcon,
  CircleStackIcon,
  XMarkIcon,
  ShoppingCartIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import Cart from "../components/Cart";
import { useSelector } from "react-redux";
import Favourite from "../components/Favourite";

const products = [
  {
    name: "Products",
    description: "Men, Female, all type of wears",
    href: "products",
    icon: ShoppingBagIcon,
  },
  {
    name: "Categories",
    description: "Purchase luxrious wears in different categories",
    href: "categories",
    icon: AdjustmentsHorizontalIcon,
  },
  {
    name: "Collections",
    description: "Your customers’ data will be safe and secure",
    href: "collections",
    icon: CircleStackIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [favOpen, setFavOpen] = useState(false);

  const product = useSelector((state) => state.cart.products);
  return (
    <header className="bg-white sticky z-40 top-0 drop-shadow-md">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex flex-row items-center">
            <span className="sr-only font-blackletter">Sheyham.</span>
            <img
              src="../public/logo.png"
              alt="sheryham-logo"
              className="object-contain h-12 w-12"
            />
            <h1 className="text-3xl font-blackletter font-bold">Sheryham.</h1>
          </Link>
        </div>
        {/* Mobile Menu  */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="relative" onClick={() => setOpen(!open)}>
            <ShoppingCartIcon
              className="h-6 w-6 flex-none cursor-pointer"
              aria-hidden="true"
            />
            <span className="w-4 h-4 bg-red-500 absolute top-0 right-0 rounded-full flex justify-center items-center">
              <p className="text-white font-semibold">
                {product.length ? product.length : 0}
              </p>
            </span>
          </div>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Shop
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <Link
                          to={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link
            to="about"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            About Us
          </Link>
          <Link
            to="contact"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Contact
          </Link>
        </Popover.Group>

        <div className="hidden md:flex md:flex-1 md:justify-end">
          <div
            className="cursor-pointer w-1/6"
            onClick={() => setFavOpen(!favOpen)}
          >
            <HeartIcon className="h-8 w-8" />
          </div>
          <div
            className="relative cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <ShoppingCartIcon
              className="h-8 w-8 flex-none"
              aria-hidden="true"
            />
            <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full flex justify-center items-center">
              <p className="text-white text-xs font-semibold">
                {product.length ? product.length : 0}
              </p>
            </span>
          </div>
        </div>
      </nav>
      {/* Mobile-view */}
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5 flex flex-row items-center">
              <span className="sr-only">Your Company</span>
              <img
                src="../public/logo.png"
                alt="sheryham-logo"
                className="object-contain h-12 w-12"
              />
              <h1 className="text-md font-bold">Sheryham.</h1>
            </a>

            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Shop
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About Us
                </a>
                <a
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
      {open && <Cart />}
      {favOpen && <Favourite />}
    </header>
  );
}
