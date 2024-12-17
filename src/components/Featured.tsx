"use client";
import React, { useEffect, useState } from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { useRouter } from "next/navigation";

async function getCards() {
  const response = await fetch("http://localhost:3000/api/cards");
  if (!response.ok) {
    throw new Error("Failed to fetch card data");
  }
  const data = await response.json();
  return data;
}

const Card = ({
  title,
  description,
  imageUrl,
  onClick,
}: {
  title: string;
  description: string;
  imageUrl: string;
  onClick: () => void;
}) => (
  <BackgroundGradient>
    <div
      className="bg-white dark:bg-gray-800 shadow-md rounded-[33px] overflow-hidden cursor-pointer h-60"
      onClick={onClick}
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-40 object-cover rounded-t-md"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  </BackgroundGradient>
);

const Featured = () => {
  const [cards, setCards] = useState<
    { id: number; title: string; description: string; imageUrl: string }[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const data = await getCards();
        setCards(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);
  const router = useRouter();
  const handleClick = (id:number) => {
  router.push(`/api/cards/${id}`);
  };

  if (loading) {
    return (
      <div className="text-center text-white py-20">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-20">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 py-12">
      <div className="text-center">
        <h2 className="text-base font-semibold tracking-wide uppercase bg-clip-text text-transparent bg-gradient-to-b from-violet-400 to-gray-700">
          FEATURED COURSES
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-200 sm:text-4xl">
          Learn With the Best
        </p>
      </div>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center py-8 mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-4xl ">
          {cards.map((card) => (
           <Card
           key={card.id}
           title={card.title}
           description="" 
           imageUrl={card.imageUrl}
           onClick={() => handleClick(card.id)}
         />
         
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
