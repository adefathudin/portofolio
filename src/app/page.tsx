"use client";
import { Navbar } from "./component/navbar";
import Footer from "./component/footer";
import RightbarArticles from "./component/widget/rightbar_articles";
import RightbarProducts from "./component/widget/rightbar_products";
import RightbarTools from "./component/widget/rightbar_tools";
import LeftbarProfile from "./component/widget/leftbar_profile";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="container">
          <div className="mx-auto px-4 max-w-screen-xl pt-28">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-3/12">
                <LeftbarProfile />
              </div>
              <div className="w-full lg:w-6/12">
                <div className="container">
                  <div className="px-12 py-8 shadow rounded-lg border">
                    <h2 className="text-center text-2xl mb-4">Short Post</h2>
                    <hr className="border-gray-200" />
                    <div className="my-4">
                      <span className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                        Yesterday
                      </span>
                    </div>
                    <div className="pl-0">
                      <p className="text-base width-auto font-medium flex-shrink text-gray-600">
                        Day 07 of the challenge{" "}
                        <span className="text-blue-400">#100DaysOfCode</span>I
                        was wondering what I can do with{" "}
                        <span className="text-blue-400">#tailwindcss</span>, so
                        just started building Twitter UI using Tailwind and so
                        far it looks so promising. I will post my code after
                        completion. [07/100]
                        <span className="text-blue-400">
                          {" "}
                          #WomenWhoCode #CodeNewbie
                        </span>
                      </p>

                      <div className="flex">
                        <div className="w-full">
                          <div className="flex items-center">
                            <div className="flex-1 text-center py-2 m-2">
                              <a
                                href="#"
                                className="w-24 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:text-rose-600"
                              >
                                <svg
                                  className="text-center h-5 w-5"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                </svg>
                                <span className="pl-2 text-gray-500 text-xs">
                                  122
                                </span>
                              </a>
                            </div>
                            <div className="flex-1 text-center py-2 m-2">
                              <a
                                href="#"
                                className="w-24 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:text-black"
                              >
                                <svg
                                  className="text-center h-5 w-5"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                                </svg>
                                <span className="pl-2 text-gray-500 text-xs">
                                  122
                                </span>
                              </a>
                            </div>
                            <div className="flex-1 text-center py-2 m-2">
                              <a
                                href="#"
                                className="w-24 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:text-black"
                              >
                                <svg
                                  className="text-center h-5 w-5"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                </svg>
                                <span className="pl-2 text-gray-500 text-xs">
                                  122
                                </span>
                              </a>
                            </div>
                            <div className="flex-1 text-center py-2 m-2">
                              <a
                                href="#"
                                className="w-24 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:text-black"
                              >
                                <svg
                                  className="h-5 w-5 text-center"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 21 15"
                                >
                                  <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m13.717 1 5.518 4.95a1.05 1.05 0 0 1 0 1.549l-5.612 5.088m-5.73-3.214v1.615a.95.95 0 0 0 1.525.845l5.108-4.251a1.1 1.1 0 0 0 0-1.646L9.418 1.685a.95.95 0 0 0-1.525.846v1.7c-3.312 0-6 2.979-6 6.654v1.329a.7.7 0 0 0 1.344.353 5.174 5.174 0 0 1 4.652-3.191l.004-.003Z"
                                  />
                                </svg>
                                <span className="pl-2 text-gray-500 text-xs">
                                  122
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="border-gray-200" />
                    <div className="my-4">
                      <span className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                        01 Agustus 2023
                      </span>
                    </div>
                    <div className="pl-0">
                      <p className="text-base width-auto font-medium flex-shrink text-gray-600">
                        Day 07 of the challenge{" "}
                        <span className="text-blue-400">#100DaysOfCode</span>I
                        was wondering what I can do with{" "}
                        <span className="text-blue-400">#tailwindcss</span>, so
                        just started building Twitter UI using Tailwind and so
                        far it looks so promising. I will post my code after
                        completion. [07/100]
                        <span className="text-blue-400">
                          {" "}
                          #WomenWhoCode #CodeNewbie
                        </span>
                      </p>
                      <div className="md:flex-shrink pr-6 pt-3">
                        <img
                          className="rounded-lg w-full h-full"
                          src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
                          alt="Woman paying for a purchase"
                        />
                      </div>

                      <div className="flex">
                        <div className="w-full">
                          <div className="flex items-center">
                            <div className="flex-1 text-center py-2 m-2">
                              <a
                                href="#"
                                className="w-24 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:text-black"
                              >
                                <svg
                                  className="text-center h-5 w-5"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                </svg>
                                <span className="pl-2 text-gray-500 text-xs">
                                  122
                                </span>
                              </a>
                            </div>
                            <div className="flex-1 text-center py-2 m-2">
                              <a
                                href="#"
                                className="w-24 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:text-black"
                              >
                                <svg
                                  className="text-center h-5 w-5"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                                </svg>
                                <span className="pl-2 text-gray-500 text-xs">
                                  122
                                </span>
                              </a>
                            </div>
                            <div className="flex-1 text-center py-2 m-2">
                              <a
                                href="#"
                                className="w-24 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:text-black"
                              >
                                <svg
                                  className="text-center h-5 w-5"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                </svg>
                                <span className="pl-2 text-gray-500 text-xs">
                                  122
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="border-gray-200" />
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-3/12">
                <RightbarArticles />

                <RightbarProducts />

                <RightbarTools />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
