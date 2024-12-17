

import { cards } from "../../../../utils/cards";

export default function StudyPage({ params }) {
  const { id } = params;
  const card = cards.find((item) => item.id === parseInt(id, 10));

  if (!card) {
    return (
      <div className="text-center text-red-500">
        <h1>Study material not found</h1>
      </div>
    );
  }

  return (
    <div className="py-36 px-20">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
        Study Material for {card.title}
      </h1>

      <div className="mt-4">
        {card.videos?.length ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {card.videos.map((video, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg">
                <video
                  controls
                  className="w-full rounded-lg shadow-lg"
                  src={video.url}
                />
                <p className="mt-2 text-white">{video.title}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400">No videos available for this course.</p>
        )}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return cards.map((card) => ({
    id: card.id.toString(),
  }));
}
