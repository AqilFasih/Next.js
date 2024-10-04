import Link from "next/link";

export default function Home() {
  return (
    <nav className=" flex justify-center items-center p-8 pb-20 gap-5 font-[family-name:var(--font-geist-sans)] ">
      {/* <h1 className="font-bold flex text-5xl text-black justify-center" > Hello World</h1> */}
      <Link href={"/dashboard"}>
        <button className="bg-blue-600 text-white p-6 rounded-2xl text-2xl">
          Dashboard
        </button>
      </Link>
      <Link href={"/blogs"}>
        <button className="bg-purple-400 text-white p-6 rounded-2xl text-2xl">
          Blogs
        </button>
      </Link>
      <Link href={"/contactUs"}>
        <button className="bg-blue-400 text-white p-6 rounded-2xl text-2xl">
          Contact Us
        </button>
      </Link>
      <Link href={"/aboutUs"}>
        <button className="bg-red-400 text-black p-6 rounded-2xl text-2xl">
          About Us
        </button>
      </Link>
      <Link href={"/form"}>
        <button className="bg-cyan-400 text-white p-6 rounded-2xl text-2xl">
          Form
        </button>
      </Link>
    </nav>
  );
}
