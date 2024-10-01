import Link from "next/link";

export default function dashboard(){
    return (

        <div className="text-center justify-center mt-28 px-23" > 
        <h1 className="font-bold text-5xl text-white font-serif  bg-red-300" > dashboard</h1>

        <div className="p-20 bg-cyan-300 mt-20 ">
        <Link href={"/dashboard/setting"}>
    <button className="bg-green-600 text-white p-6 mr-4 rounded-2xl text-2xl">
      Setting
    </button>
    </Link>
    <Link href={"/dashboard/profile"}>
    <button className="bg-purple-400 text-white p-6  rounded-2xl text-2xl">
      profile
    </button>
    </Link>
    
        </div>
        </div>
    );
}