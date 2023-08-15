"use client";
import { Navbar } from "../component/navbar";
import Footer from "../component/footer";
import RightbarArticles from "../component/widget/rightbar_articles";
import RightbarProducts from "../component/widget/rightbar_products";
import RightbarTools from "../component/widget/rightbar_tools";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="lg:container">
          <div className="mx-auto max-w-screen-xl pt-12 lg:pt-28">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-3/4">
                {/* S:Hero */}
                <section id="home" className="mb-4">
                  <div className="lg:container">
                    <div className="border-b lg:shadow lg:rounded-lg lg:border">
                      <div className="w-full">
                        <div className="lg:rounded-t-lg h-full overflow-hidden">
                          <img
                            className="object-cover object-top w-full h-3/6"
                            src="/banner.jpg"
                            alt="Mountain"
                          />
                        </div>
                        <div className="px-4">
                          <div className="max-w-screen-lg w-24 h-24 lg:ml-4 lg:w-32 lg:h-32 -mt-16 rounded-full overflow-hidden shadow-lg">
                            <img
                              className=""
                              src="/adefathudin.png"
                              alt="ade fathudin"
                            />
                          </div>
                          <div className="lg:container mb-4 lg:mb-0">
                            <div className="lg:flex lg:flex-row">
                              <div className="w-full mt-4 text-start lg:ml-4 lg:mt-8 lg:w-2/3">
                                <h2 className="block font-medium mb-2 lg:font-bold text-slate-900 lg:text-2xl">
                                  Ade Fathudin
                                </h2>
                                <h2 className="lg:font-medium text-slate-500 text-xs lg:text-lg">
                                  IT Product Portal Developer at detik.com
                                </h2>
                                <p className="lg:font-medium text-secondary leading-relaxed lg:mb-10 text-xs lg:text-base">
                                  Kab. Bekasi, Jawa Barat, Indonesia
                                </p>
                              </div>
                              <div className="w-full ml-8 mt-8 lg:w-1/3 hidden sm:block">
                                detikcom
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* E:Hero */}
                {/* S:About */}
                <section id="about" className="mb-4">
                  <div className="lg:container">
                    <div className="px-4 lg:px-12 py-2 lg:py-8 border-b lg:shadow lg:rounded-lg lg:border">
                      <h2 className="block text-start text-base pb-4 text-slate-900 lg:text-2xl lg:pb-8">
                        About
                      </h2>
                      <div className="leading-loose text-sm text-left lg:text-base">
                        <p className="mb-3">
                          Greetings... Nama Saya Ade Fathudin. Seorang IT
                          Consultant level newbie, yang berkeinginan kuat untuk
                          BISA. Humoris; Serius, Santai dan Sukses.
                        </p>
                        <p className="mb-3">
                          Saya penikmat kopi hitam tanpa diaduk, entah kenapa
                          dengan meminum kopi hitam tanpa diaduk rasanya lebih
                          terang di mata dan lebih terang di pikiran. Well..
                          mungkin itu hanya sugesti saja :D
                        </p>
                        <p>
                          Saya juga sangat menyukai dunia Open Source, termasuk
                          OS Linux yang sampai saat ini saya gunakan untuk
                          membangun mini server lokal di rumah. Yah... Walaupun
                          saya hanya sebatas pengguna saja dan tidak ikut
                          berkontribusi mengembangkannya, se-enggaknya saya bisa
                          ikut kontribusi sebagai user :D
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                {/* E:About */}

                <section id="experience" className="mb-4">
                  <div className="lg:container">
                    <div className="px-4 py-2 lg:px-12 lg:py-8 border-b lg:shadow lg:rounded-lg lg:border">
                      <h2 className="block text-start text-base pb-4 text-slate-900 lg:text-2xl lg:pb-8">
                        Experience
                      </h2>
                      <div className="flex flex-row py-2">
                        <div className="w-1/12">
                          <img
                            height={56}
                            width={56}
                            src="https://media.licdn.com/dms/image/C4D0BAQFUAgJugB7P_w/company-logo_100_100/0/1519913904582?e=2147483647&v=beta&t=5bkyUk1myChsum_OAWQwl6qZ3KQns0qVIx2ksFXJ5b8"
                          />
                        </div>
                        <div className="w-full leading-loose pl-4">
                          <h2 className="block font-medium text-base text-slate-900 lg:font-bold lg:text-xl">
                            IT Product Portal Developer
                          </h2>
                          <div className="text-sm">
                            <p>detikcom</p>
                            <div className="text-secondary">
                              <p>Mar 2022 - Present . 1 year 5 months</p>
                              <p>Jakarta, Indonesia</p>
                            </div>
                            <p className="my-2">Front-End Web Developer</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row py-2">
                        <div className="w-1/12">
                          <img
                            height={56}
                            width={56}
                            src="https://media.licdn.com/dms/image/D4D0BAQGyKnCBXnnGHw/company-logo_100_100/0/1682475815982?e=1700092800&v=beta&t=sAI6ODvelj8YdSC2MNp9Zt6imYdjINbE_diO25itILo"
                          />
                        </div>
                        <div className="w-full leading-loose pl-4">
                          <h2 className="block font-medium text-base text-slate-900 lg:font-bold lg:text-xl">
                            DevOps Engineer
                          </h2>
                          <div className="text-sm">
                            <p>PT BRIngin Sejahtera Makmur</p>
                            <div className="text-secondary">
                              <p>Sep 2019 - Feb 2022 . 2 year 6 months</p>
                              <p>Jakarta, Indonesia</p>
                            </div>
                            <p className="my-2">TSI</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row py-2">
                        <div className="w-1/12">
                          <img
                            height={56}
                            width={56}
                            src="https://media.licdn.com/dms/image/C510BAQHhjskgHz-4kA/company-logo_100_100/0/1519911324543?e=1700092800&v=beta&t=GHLTyPMtki7T0sZ79G1v8i5IKRAG3-gluxwiqq0l00o"
                          />
                        </div>
                        <div className="w-full leading-loose pl-4">
                          <h2 className="block font-medium text-base text-slate-900 lg:font-bold lg:text-xl">
                            Electronic Data Processing
                          </h2>
                          <div className="text-sm">
                            <p>Indomaret Group</p>
                            <div className="text-secondary">
                              <p>Jan 2014 - Sep 2019 . 5 year 9 months</p>
                              <p>Bekasi, West Java, Indonesia</p>
                            </div>
                            <p className="my-2">Web & Desktop Developer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="education" className="mb-4">
                  <div className="lg:container">
                    <div className="px-4 py-2 lg:px-12 lg:py-8 border-b lg:shadow lg:rounded-lg lg:border">
                      <h2 className="block text-start text-base pb-4 text-slate-900 lg:text-2xl lg:pb-8">
                        Education
                      </h2>
                      <div className="flex flex-row">
                        <div className="w-1/12">
                          <img
                            height={56}
                            width={56}
                            src="https://media.licdn.com/dms/image/C560BAQHvIZ_RlNlPew/company-logo_100_100/0/1519894638150?e=2147483647&v=beta&t=heQymRu5jM4r3bdxGCKAxL9C_5oX5wFPGGrQS_OlauE"
                          />
                        </div>
                        <div className="w-full leading-loose pl-4">
                          <h2 className="block font-medium text-base text-slate-900 lg:font-bold lg:text-xl">
                            Mercu Buana University
                          </h2>
                          <div className="text-sm mb-2">
                            <p>S. Kom . Information Technology</p>
                            <div className="text-secondary">
                              <p>2016 - 2020</p>
                              <p>Jakarta, Indonesia</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* <section id="interest" className="mb-4">
                  <div className="lg:container">
                    <div className="px-4 py-2 lg:px-12 lg:py-8 border-b lg:shadow lg:rounded-lg lg:border">
                      <h2 className="block text-start text-base pb-4 text-slate-900 lg:text-2xl lg:pb-8">
                        Interest
                      </h2>
                      <ul className="text-sm lg:text-base max-w-md space-y-1 mb-2 text-gray-500 list-disc list-inside dark:text-gray-400">
                        <li>PHP</li>
                        <li>Javascript</li>
                      </ul>
                    </div>
                  </div>
                </section> */}

                {/* <section id="projects" className="mb-4">
                  <div className="lg:container">
                    <div className="px-4 py-2 lg:px-12 lg:py-8 border-b lg:shadow lg:rounded-lg lg:border">
                      <h2 className="block text-start text-base pb-4 text-slate-900 lg:text-2xl lg:pb-8">
                        Projects
                      </h2>
                      <div className="text-sm lg:text-base">
                        <div className="mb-3">
                          <p>SPKPIP</p>
                          <div className="text-secondary">
                            Jan 2020 - Mar2021
                          </div>
                        </div>
                        <div className="mb-3">
                          <p>SPKPIP</p>
                          <div className="text-secondary">
                            Jan 2020 - Mar2021
                          </div>
                        </div>
                        <div className="mb-3">
                          <p>SPKPIP</p>
                          <div className="text-secondary">
                            Jan 2020 - Mar2021
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section> */}

                <section id="contact" className="lg:mb-4">
                  <div className="lg:container">
                    <div className="px-4 lg:px-12 lg:py-8 lg:shadow lg:rounded-lg lg:border">
                      <h2 className="block text-start text-base pb-4 text-slate-900 lg:text-2xl lg:pb-8">
                        Contact Me
                      </h2>
                      <div className="my-4 text-sm lg:text-base">
                        <div className="flex flex-row">
                          <div className="w-1/12">
                            <svg
                              className="w-4 h-4 lg:w-6 lg:h-6 text-secondary dark:text-white"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 16"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m19 2-8.4 7.05a1 1 0 0 1-1.2 0L1 2m18 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1m18 0v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2"
                              />
                            </svg>
                          </div>
                          <div className="w-full leading-loose pl-4 mb-2">
                            <h2 className="block font-normal text-base text-slate-900">
                              Email
                            </h2>
                            <a
                              href="mailto:mail@adefathudin.com"
                              className="text-blue-600 dark:text-blue-500 hover:underline"
                            >
                              mail@adefathudin.com
                            </a>
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div className="w-1/12">
                            <svg
                              className="w-4 h-4 lg:w-6 lg:h-6 text-secondary dark:text-white"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 15 15"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                                clip-rule="evenodd"
                              />
                              <path d="M3 5.012H0V15h3V5.012Z" />
                            </svg>
                          </div>
                          <div className="w-full leading-loose pl-4 mb-2">
                            <h2 className="block font-normal text-base text-slate-900">
                              Linkedin
                            </h2>
                            <a
                              href="https://www.linkedin.com/in/adefathudin/"
                              target="_blank"
                              className="text-blue-600 dark:text-blue-500 hover:underline"
                            >
                              https://www.linkedin.com/in/adefathudin/
                            </a>
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div className="w-1/12">
                            <svg
                              className="w-4 h-4 lg:w-6 lg:h-6 text-secondary dark:text-white"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </div>
                          <div className="w-full leading-loose pl-4">
                            <h2 className="block font-normal text-base text-slate-900">
                              Github
                            </h2>
                            <a
                              href="https://github.com/adefathudin"
                              target="_blank"
                              className="text-blue-600 dark:text-blue-500 hover:underline"
                            >
                              https://github.com/adefathudin
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* <section id="contact" className="mb-4">
                  <div className="lg:container">
                    <div className="px-4 py-2 lg:px-12 lg:py-8 lg:shadow lg:rounded-lg lg:border">
                      <h2 className="block text-start text-base pb-4 text-slate-900 lg:text-2xl lg:pb-8">
                        Contact Me
                      </h2>
                      <section className="bg-white dark:bg-gray-900">
                        <div className="lg:py-16 mx-auto max-w-screen-md">
                          <form action="#" className="space-y-6">
                            <div>
                              <input
                                type="email"
                                id="email"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder="Your name"
                                required
                              />
                            </div>
                            <div>
                              <input
                                type="text"
                                id="subject"
                                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder="email or phone number"
                                required
                              />
                            </div>
                            <div className="sm:col-span-2">
                              <textarea
                                id="message"
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Leave a message..."
                              ></textarea>
                            </div>
                            <button
                              type="button"
                              className=" text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                            >
                              send
                            </button>
                          </form>
                        </div>
                      </section>
                    </div>
                  </div>
                </section> */}
              </div>
              <div className="hidden lg:block w-full lg:w-1/4">
                <RightbarArticles />

                <RightbarProducts />

                <RightbarTools />
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </main>
  );
}
