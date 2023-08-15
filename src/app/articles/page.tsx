"use client";
import { Navbar } from "../component/navbar";
import Footer from "../component/footer";
import { useState, useEffect } from "react";
import data from "./newsfeed.json";

export default function Articles() {
  const [items, setItems]: any[] = useState([]);

  useEffect(() => {
    setItems(data.items);
  }, []);

  return (
    <main>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="lg:container">
          <div className="pt-16 lg:pt-28">
            <section className="bg-white dark:bg-gray-900">
              <div className="px-4 mx-auto max-w-screen-xl lg:px-6">
                <div className="grid gap-8 lg:grid-cols-2">
                  {items.map((item: any) => (
                    <>
                      <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex justify-between items-center mb-5 text-gray-500">
                          <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                            <svg
                              className="mr-1 w-3 h-3"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                            </svg>
                            {item.labels}
                          </span>
                          <span className="text-xs">
                            {item.replies.totalItems} comments
                          </span>
                        </div>
                        <h2 className="mb-2 text-base lg:text-xl font-medium tracking-tight text-gray-500 dark:text-white">
                          <a href={item.url} target="_blank">
                            {item.title}
                          </a>
                        </h2>
                        <p className="mb-2 text-sm font-light text-gray-500 dark:text-gray-400"></p>
                      </article>
                    </>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
