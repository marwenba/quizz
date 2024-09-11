"use client";
import aiAcademyLogo from "../public/ai_academy.png";
import partners from "../public/partners.png";
import Image from "next/image";

import background from "../public/background.png";
import { useRouter } from "next/navigation";

export default function Home() {
 
  const router = useRouter();


  return (
    <div
      className="min-h-screen flex-col flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background.src})` }}
    >
      <div className="bg-white p-8 rounded shadow-lg max-w-2xl w-full">
        <div className="flex flex-col items-center mb-8">
          <Image
            src={aiAcademyLogo}
            alt="AI Academy Logo"
            maxWidth={500}
            maxHeight={120}
          />
          <h2
            className="text-3xl font-bold mt-6 text-center"
            style={{ fontFamily: "Poppins",color: "#19255B" }}
          >
            AI Developer Training Quiz
          </h2>
        </div>

          <div className="flex justify-center">
            <button
onClick={
  function()
{  router.push("/register");
}

}         
     className="bg-blue-600 text-white py-4 px-3 rounded"
              style={{
                backgroundColor: "#19255B",
                width: "70%",
                maxWidth: "300px",
              }}
            >
              Start
            </button>
          </div>

      </div>
      <div className=" items-center mb-8">
        <Image
          src={partners}
          alt="AI Academy Logo"
          maxWidth={50}
          maxHeight={50}
        />
      </div>
    </div>
  );
}
