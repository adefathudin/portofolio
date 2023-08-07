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
          <div className="mx-auto max-w-screen-xl pt-16 lg:pt-28">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-3/4">
                {/* S:Hero */}
                <section id="home" className="mb-4">
                  <div className="lg:container">
                    <div className="border-b lg:shadow lg:rounded-lg lg:border">
                      <div className="w-full col-span-2">
                        <div className="lg:rounded-t-lg h-full overflow-hidden">
                          <img
                            className="object-cover object-top w-full h-3/6"
                            src="/banner.jpg"
                            alt="Mountain"
                          />
                        </div>
                        <div className="px-4">
                          <div className="max-w-screen-lg mx-auto lg:ml-4 w-32 h-32 -mt-16 border-4 border-white rounded-full overflow-hidden shadow-lg">
                            <img
                              className=""
                              src="/adefathudin.png"
                              alt="ade fathudin"
                            />
                          </div>
                          <div className="lg:container">
                            <div className="lg:flex lg:flex-row">
                              <div className="w-full ml-0 text-center lg:text-left lg:ml-4 mt-8 lg:w-2/3">
                                <h2 className="block font-medium mb-2 lg:font-bold text-slate-900 lg:text-2xl">
                                  Ade Fathudin
                                </h2>
                                <h2 className="lg:font-medium text-slate-500 text-xs lg:text-lg">
                                  IT Product Portal Developer at detik.com
                                </h2>
                                <p className="lg:font-medium text-secondary leading-relaxed mb-10 text-xs lg:text-base">
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
                <div className="">
                  {/* S:About */}
                  <section id="about" className="mb-4">
                    <div className="lg:container">
                      <div className="px-4 lg:px-12 py-2 lg:py-8 border-b lg:shadow lg:rounded-lg lg:border">
                        <h2 className="block text-center text-2xl text-slate-900 lg:text-2xl pb-8 lg:text-start">
                          About
                        </h2>
                        <div className="leading-loose text-sm text-center lg:text-left lg:text-base">
                          <p className="mb-3">
                            Greetings... Nama Saya Ade Fathudin. Seorang IT
                            Consultant level newbie, yang berkeinginan kuat
                            untuk BISA. Humoris; Serius, Santai dan Sukses.
                          </p>
                          <p className="mb-3">
                            Saya penikmat kopi hitam tanpa diaduk, entah kenapa
                            dengan meminum kopi hitam tanpa diaduk rasanya lebih
                            terang di mata dan lebih terang di pikiran. Well..
                            mungkin itu hanya sugesti saja :D
                          </p>
                          <p>
                            Saya juga sangat menyukai dunia Open Source,
                            termasuk OS Linux yang sampai saat ini saya gunakan
                            untuk membangun mini server lokal di rumah. Yah...
                            Walaupun saya hanya sebatas pengguna saja dan tidak
                            ikut berkontribusi mengembangkannya, se-enggaknya
                            saya bisa ikut kontribusi sebagai user :D
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* E:About */}

                  <section id="experience" className="mb-4">
                    <div className="lg:container">
                      <div className="px-4 lg:px-12 py-8 border-b lg:shadow lg:rounded-lg lg:border">
                        <h2 className="block text-slate-900 text-2xl pb-8">
                          Experience
                        </h2>
                        <div className="flex flex-row">
                          <div className="w-1/12">
                            <img
                              height={56}
                              width={56}
                              src="https://media.licdn.com/dms/image/C4D0BAQFUAgJugB7P_w/company-logo_100_100/0/1519913904582?e=2147483647&v=beta&t=5bkyUk1myChsum_OAWQwl6qZ3KQns0qVIx2ksFXJ5b8"
                            />
                          </div>
                          <div className="w-full leading-loose">
                            <h2 className="block font-bold text-slate-900 text-xl">
                              IT Product Portal Developer
                            </h2>
                            <p>detikcom</p>
                            <div className="text-secondary">
                              <p>Mar 2022 - Present . 1 year 5 months</p>
                              <p>Indonesia</p>
                            </div>
                            <p>Front-End Web Developer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="education" className="mb-4">
                    <div className="container">
                      <div className="px-12 py-8 shadow rounded-lg border">
                        <h2 className="block text-slate-700 text-2xl pb-8">
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
                          <div className="w-full leading-loose">
                            <h2 className="block font-bold text-slate-700 text-xl">
                              Mercu Buana University
                            </h2>
                            <p>S. Kom . Information Technology</p>
                            <div className="text-secondary">
                              <p>2016 - 2020</p>
                              <p>Jakarta, Indonesia</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <div className="w-full lg:w-1/4">
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
