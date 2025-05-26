import React from "react";
import { Helmet } from "react-helmet-async";
import Footer from "./Footer";

const Dashboard = () => {
  return (
    <div className="bg-txt-dark font-sf-pro">
      <Helmet>
        <title>Dashboard-Enqode</title>
      </Helmet>
      <div className="flex justify-between items-center h-24 px-14">
        <div>
          {" "}
          <h2 className="text-2xl font-bold text-bg-light tracking-wide">
            Your QR Links
          </h2>
          <h4 className="text-gray-400">Manage your saved QR codes</h4>
        </div>

        <button
          className="px-4 py-2 bg-royal-blue text-white rounded-md hover:bg-royal-blue/80"
          onClick={() => (window.location.href = "/enqodeLink")}
        >
          Create New QR
        </button>
      </div>
      <div className=" text-center space-y-5  bg-gradient-to-b from-txt-dark to-[#1f232a]">
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-bg-light mt-13">
          Generate <span className="bg-gradient-to-r from-royal-blue to-lav bg-clip-text text-transparent">Stunning QR Codes</span> in
          Seconds
        </h1>
        <p className="text-lg text-bg-light/50">
          Design professional, trackable QR codes in just a few clicks.
        </p>
        <button className="mt-4 px-6 py-3 mb-10 bg-royal-blue text-white rounded-md shadow hover:bg-royal-blue/80 transition ">
          Generate My First QR        </button>
      </div>
      <div className="bg-[#1f232a] h-9/12 pb-8">
        {" "}
        <div className="">
          <div className="flex flex-col text-bg-light justify-center items-center space-y-2">
            <h2 className="bg-gradient-to-r from-royal-blue to-lav bg-clip-text text-transparent text-3xl pt-6">
              Premium features
            </h2>
            <p className="text-bg-light/50 text-xl">
              Everything you need to create professional QR codes
            </p>
            <div className=" flex items-center justify-center px-4 pb-5 space-x-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl ">
                {/* Customizable Designs */}
                <div
                  className="flex flex-col items-center bg-grey-soft/40 p-6 rounded-xl border border-grey-soft shadow-md hover:ring-1 hover:ring-royal-blue hover:scale-105 transition delay-75
            "
                >
                  <div className="mb-4 text-bg-light">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-7"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Customizable Designs
                  </h3>
                  <p className="text-gray-400 text-sm text-center">
                    Change QR color, background color, and size to match your
                    style.
                  </p>
                </div>

                {/* Password Protection */}
                <div className=" flex flex-col items-center bg-grey-soft/40 p-6 rounded-xl border border-grey-soft shadow-md hover:ring-1 hover:ring-royal-blue hover:scale-105 transition delay-75">
                  <div className="mb-4 text-bg-light">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-7"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Password Protection
                  </h3>
                  <p className="text-gray-400 text-sm text-center">
                    Save, delete, and edit your QR codes securely with password
                    protection.
                  </p>
                </div>

                {/* Export Option */}
                <div className="flex flex-col items-center bg-grey-soft/40 p-6 rounded-xl border border-grey-soft shadow-md hover:ring-1 hover:ring-royal-blue hover:scale-105 transition delay-75">
                  <div className="mb-4 text-bg-light">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-7"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Export Option
                  </h3>
                  <p className="text-gray-400 text-sm text-center">
                    Download your QR codes in high-quality PNG format.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1f232a] text-white py-12 px-4 md:px-16 font-sf-pro">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-royal-blue to-lav bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6 max-w-4xl mx-auto">
          {/* Question 1 */}
          <details className="group bg-grey-soft/40 p-5 rounded-lg cursor-pointer border border-grey-soft hover:ring-1 hover:ring-royal-blue">
            <summary className="flex justify-between items-center font-semibold">
              <span>How do I create a new QR code?</span>
              <span className="group-open:rotate-180 transition-transform">
                &#9660;
              </span>
            </summary>
            <p className="mt-2 text-bg-light/60">
              Click on the “Create New QR” button at the top right of the
              dashboard. Fill in the necessary details and customize your QR
              code.
            </p>
          </details>

          {/* Question 2 */}
          <details className="group bg-grey-soft/40 p-5 rounded-lg cursor-pointer border border-grey-soft hover:ring-1 hover:ring-royal-blue">
            <summary className="flex justify-between items-center font-semibold">
              <span>Can I edit my saved QR codes?</span>
              <span className="group-open:rotate-180 transition-transform">
                &#9660;
              </span>
            </summary>
            <p className="mt-2 text-bg-light/60">
              Yes, go to your saved QR codes list and click on the edit icon
              next to the code you want to modify.
            </p>
          </details>

          {/* Question 3 */}
          <details className="group bg-grey-soft/40 p-5 rounded-lg cursor-pointer border border-grey-soft hover:ring-1 hover:ring-royal-blue">
            <summary className="flex justify-between items-center font-semibold">
              <span>Are my QR codes secure?</span>
              <span className="group-open:rotate-180 transition-transform">
                &#9660;
              </span>
            </summary>
            <p className="mt-2 text-bg-light/60">
              Absolutely. You can Password-protect your QR codes to ensure only
              authorized users can access or modify them.
            </p>
          </details>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
