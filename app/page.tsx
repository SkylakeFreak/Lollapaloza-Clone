"use client";
import Image from "next/image";
import Front from "@/components/Front";
import Test from "@/components/Test";
import Second from "@/components/Second";
import Plainfourth from "@/components/Plainfourth";
import Third from "@/components/Third";
import Plainfifth from "@/components/Plainfifth";
import Videosixth from "@/components/Videosixth";
import Videoblank7th from "@/components/Videoblank7th";
import { useEffect, useLayoutEffect, useState } from "react";

export default function Home() {
  const [pageHeight, setPageHeight] = useState(0);

  useLayoutEffect(() => {
    function updatePageHeight() {
      setPageHeight(window.innerWidth);
    }

    // Update height on resize
    window.addEventListener('resize', updatePageHeight);

    // Initial height calculation
    updatePageHeight();

    // Clean up event listener
    return () => window.removeEventListener('resize', updatePageHeight);
  }, []);
  console.log(pageHeight,"new");
  return (
    <main className="">
      <Front/>
      <Second/>
      <Third/>
      {/* <Test/> */}
      <Plainfourth/>
      <Plainfifth/>
      <Videosixth/>
      <Videoblank7th/>

    </main>
  );
}
