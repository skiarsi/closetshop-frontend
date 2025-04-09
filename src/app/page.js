"use client"


import Navbar from "@/components/Navbar";
import FilterComponent from "@/components/SiteParts/FilterComponent";
import IndexLastProducts from "@/components/SiteParts/IndexLastProducts";
import { useUser } from "@/lib/useUser";

export default function Home() {

  const user = useUser();


  return (
    <>
      <Navbar className="" />
      <div className="w-9/12 flex flex-row mx-auto py-6">
        <div className="w-[320px]">
          <div className="bg-white rounded-md border border-gray-300 px-5 py-8">
            <FilterComponent />
          </div>
        </div>
        <div className="flex-1 px-6 ">
          <div className="grid grid-cols-3">
            <IndexLastProducts />
          </div>
        </div>
      </div>
    </>
  );
}
