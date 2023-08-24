import Image from "next/image";
import { IoIosConstruct } from "react-icons/io";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col bg-white h-screen">
      <h1 className="text-yellow-500 text-8xl font-bold">
        DevPulse<span className="text-white">.</span>
      </h1>
      <div className="flex justify-center items-center flex-col pt-10">
        <IoIosConstruct size={64} />
        <h1 className="text-7xl text-black font-bold">Website</h1>
        <h2 className="text-3xl text-black">Under Construction</h2>
      </div>
    </div>
  );
}
