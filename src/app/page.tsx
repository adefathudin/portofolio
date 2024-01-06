"use client";
import { Navbar } from "./component/navbar";
import { useState, useEffect } from "react";
import Footer from "./component/footer";
import RightbarArticles from "./component/widget/rightbar_articles";
import RightbarProducts from "./component/widget/rightbar_products";
import RightbarTools from "./component/widget/rightbar_tools";
import LeftbarProfile from "./component/widget/leftbar_profile";
import data from "./static/short_post.json";

export default function Home() {
  const [items, setItems]: any[] = useState([]);

  useEffect(() => {
    setItems(data);
  }, []);

  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "short",
      year: "2-digit",
    };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "id-ID",
      options
    );

    return formattedDate;
  };

  return (
    <main>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="container">
          <div className="mx-auto lg:px-4 max-w-screen-xl pt-16 lg:pt-28">
            <div className="flex flex-wrap">
              <div className="hidden lg:block w-full lg:w-3/12">
                <LeftbarProfile />
              </div>
              <div className="w-full lg:w-6/12">
                <div className="lg:container">
                  <div className="px-4 py-2 lg:px-12 lg:py-8 shadow rounded-lg border">
                    <h2 className="text-center lg:text-2xl mb-4">Short Post</h2>
                    <hr className="border-gray-200" />

                    {items.map((item: any, i: any) => (
                      <>
                        <div className="my-2 lg:my-4">
                          <span className="text-xs lg:text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                            {formatDate(item.add_time)}
                          </span>
                        </div>
                        <div className="pl-0">
                          <p className="text-xs lg:text-base width-auto lg:font-medium flex-shrink text-gray-600">
                            {item.description.length > 250
                              ? item.description.substring(0, 250) + "... "
                              : item.description}
                          </p>
                          {item.images ? (
                            <div className="md:flex-shrink lg:pr-6 pt-3">
                              <img
                                className="rounded-lg w-full h-full"
                                src={item.images}
                                alt={item.title}
                              />
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                        <hr className="border-gray-200 my-4" />
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden lg:block w-full lg:w-3/12">
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
