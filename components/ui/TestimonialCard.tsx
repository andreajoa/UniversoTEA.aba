interface Props {
  name: string;
  role: string;
  text: string;
  stars: number;
}

export default function TestimonialCard({ name, role, text, stars }: Props) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col gap-3">
      <div className="flex gap-1 text-yellow-400 text-xl">
        {"⭐".repeat(stars)}
      </div>
      <p className="text-gray-700 italic text-sm leading-relaxed">"{text}"</p>
      <div>
        <p className="font-display font-bold text-primary text-sm">{name}</p>
        <p className="text-gray-400 text-xs">{role}</p>
      </div>
    </div>
  );
}
