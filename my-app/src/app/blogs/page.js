// import link from "next/link";
// import React from "react"

// const Blogs = async () => {
//     let news = await fetch(
//         "https://api.thenewsapi.com/v1/news/top?api_token=026l85WrTZtvYR9AR2WxXUNI6iJmiTFZNq0oZI4B&locale=us&limit=3"
//     );
//     news = await news.json();
//     return (
//       //  <div className="">
//         // {news?.formData.map((data)=> }
//        //  </div>
        
//         <div className="text-center justify-center mt-28 bg-purple-300" > 
//         <h1 className="font-bold text-5xl text-black " > Hello Blogs</h1>
//         </div>
//     );
//     }

// export default Blogs;

import Link from "next/link";
import React from "react";

const Blogs = async () => {
  let news = await fetch(
    "https://api.thenewsapi.com/v1/news/top?api_token=4kg9t6R9h2j1gFnP6oerJz0h6BHr9ZebTXA3GUl6&locale=us&limit=3"
  );
  news = await news.json();
  return (
    <div className="">
      {news?.data.map((data) => (
        <Link href={`/blogs/${data.uuid}`} key={data.uuid} className="border m-2 rounded p-4 flex">
          <img src={data.image_url} className="h-20 w-20 rounded" />
          <div className="ml-2">
            <h1 className="font-bold">{data?.title}</h1>
            <h1 className="my-2">{data?.description}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blogs;