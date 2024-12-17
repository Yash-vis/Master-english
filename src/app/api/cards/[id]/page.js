import { cards } from "../../../utils/cards";
import CardDetail from "./CardDetail";


export default function CardDetailPage({ params }) {
  const { id } = params;

  const card = cards.find((item) => item.id === parseInt(id, 10));

  if (!card) {
    return (
      <div className="text-center text-red-500">
        <h1>Card not found</h1>
      </div>
    );
  }

  return <CardDetail card={card} />;
}

export async function generateStaticParams() {
  return cards.map((card) => ({
    id: card.id.toString(),
  }));
}
