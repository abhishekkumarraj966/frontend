import React from "react";
import logo from "../assets/Logo.png";
export function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-[#130f31] text-white">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
          <div className="flex h-full flex-col justify-between">
            <div className="mb-4 inline-flex items-center">
              <img src={logo} alt="" className="h-[90px]" />
            </div>
            <div>
              <p className="mb-4 text-base font-medium">
                The Tailwind CSS Component library
              </p>
              <p className="text-sm text-white-600">
                &copy; Copyright 2022. All Rights Reserved by DevUI.
              </p>
            </div>
          </div>
          <div className="h-full">
            <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-white-500">
              Company
            </h3>
            <ul>
              <li className="mb-4">
                <a
                  className="text-base font-medium text-white-900 hover:text-gray-700"
                  href="#"
                >
                  Features
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="text-base font-medium text-white-900 hover:text-gray-700"
                  href="#"
                >
                  Pricing
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="text-base font-medium text-white-900 hover:text-gray-700"
                  href="#"
                >
                  Affiliate Program
                </a>
              </li>
              <li>
                <a
                  className="text-base font-medium text-white-900 hover:text-gray-700"
                  href="#"
                >
                  Press Kit
                </a>
              </li>
            </ul>
          </div>
          <div className="h-full">
            <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-white-500">
              Support
            </h3>
            <ul>
              <li className="mb-4">
                <a
                  className="text-base font-medium text-white-900 hover:text-gray-700"
                  href="#"
                >
                  Account
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="text-base font-medium text-white-900 hover:text-gray-700"
                  href="#"
                >
                  Help
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="text-base font-medium text-white-900 hover:text-gray-700"
                  href="#"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  className="text-base font-medium text-white-900 hover:text-gray-700"
                  href="#"
                >
                  Customer Support
                </a>
              </li>
            </ul>
          </div>
          <div className="h-full">
            <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-white-500">
              Legals
            </h3>
            <ul>
              <li className="mb-4">
                <a
                  className="text-base font-medium text-white-900 hover:text-gray-700"
                  href="#"
                >
                  Terms &amp; Conditions
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="text-base font-medium text-white-900 hover:text-gray-700"
                  href="#"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className="text-base font-medium text-white-900 hover:text-gray-700"
                  href="#"
                >
                  Licensing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
