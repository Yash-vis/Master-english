"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CardDetail({ card }) {
  const router = useRouter();

  const handleDownloadClick = () => {
    const link = document.createElement("a");
    link.href = card.pdfUrl;
    link.download = card.title + " - Study Material.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePlayClick = () => {
    router.push(`/api/cards/${card.id}/study`);
  };

  return (
    <div className="py-36 px-20 bg-gradient-to-r from-black via-gray-800 to-black">
      <div>
        <h1 className="text-4xl font-bold text-white">{card.title}</h1>
        <p className="mt-4 text-lg text-gray-400">{card.description}</p>
      </div>

      <div className="flex justify-between items-center my-6  p-6 rounded-lg shadow-xl">
        <img
          src={card.imageUrl}
          alt={card.title}
          className="rounded-lg shadow-lg w-80 h-44 object-cover"
        />
        <div className="flex flex-col items-center">
          <button
            className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-purple-600 hover:to-blue-500 border-2 border-white rounded-lg mb-4"
            onClick={() => router.push("/enroll")}
          >
            Enroll Now
          </button>
        </div>
      </div>

      <div className="mt-4 text-white">
        <p className="text-xl font-medium">Course Duration: {card.duration}</p>
        <p className="text-xl font-medium">Faculty: {card.faculty}</p>
      </div>

      <p className="mt-2 text-2xl font-bold text-yellow-500">Fee: ₹{card.fee}</p>

      <div className="mt-6 text-center">
        <button
          onClick={handleDownloadClick}
          className="p-4 bg-gradient-to-r from-blue-600 to-gray-400 text-white hover:from-gray-600 hover:to-blue-500 border-2 border-white rounded-lg mb-4 m-9"
        >
          Download Study Material
        </button>

        <button
          onClick={handlePlayClick}
          className="p-4 bg-gradient-to-r from-green-400 to-green-600 text-white hover:from-green-600 hover:to-green-400 border-2 border-white rounded-lg"
        >
          Play Course
        </button>
      </div>
    </div>
  );
}
