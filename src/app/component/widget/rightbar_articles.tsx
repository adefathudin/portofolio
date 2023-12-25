import { useState, useEffect } from "react";
import data from "../../articles/newsfeed.json";

export default function RightbarArticles() {
  const [items, setItems]: any[] = useState([]);

  useEffect(() => {
    setItems(data.items);
  }, []);

  return (
    //   S:Artikel Populer
    <div className="shadow border rounded-lg px-4 mb-4">
      <h2 className="block text-slate-900 text-xl pt-4">News Articles</h2>
      <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
      {items.map((item: any, i: any) => (
        <>
          <a href={item.url} className="hover:underline" target="_blank">
            <div className="flex flex-wrap">
              {/* <div className="w-1/4">
                <img
                  className="h-12 max-w-full rounded-lg"
                  src="https://media.licdn.com/dms/image/C4D0BAQFUAgJugB7P_w/company-logo_100_100/0/1519913904582?e=2147483647&v=beta&t=5bkyUk1myChsum_OAWQwl6qZ3KQns0qVIx2ksFXJ5b8"
                />
              </div> */}
              <div className="">
                <p className="text-sm font-medium">{item.title}</p>
              </div>
            </div>
          </a>
          <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
        </>
      ))}
      <div className="py-4">
        <a href="/articles" className="hover:underline">
          <div className="text-center">
            <span className="text-sm">Show more </span>
          </div>
        </a>
      </div>
    </div>
    // E:Artikel Populer
  );
}
