interface BottomBarItem {
  label: string;
  icon: string;
}

export default function BottomBar({ items }: { items: BottomBarItem[] }) {
  return (
    <div className="flex justify-around items-center h-16">
      {items.map((item) => (
        <button
          key={item.label}
          className="flex flex-col items-center justify-center text-gray-700 hover:text-indigo-600 transition"
        >
          <span className="text-2xl">{item.icon}</span>
          <span className="text-xs mt-1">{item.label}</span>
        </button>
      ))}
    </div>
  );
}
