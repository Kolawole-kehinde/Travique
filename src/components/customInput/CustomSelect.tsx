"use client";

interface Option {
  value: string;
  label: string;
}

interface SelectBoxProps {
  title: string;
  options: Option[];
  selected: string;
  onSelect: (value: string) => void;
}

export default function SelectBox({ title, options, selected, onSelect }: SelectBoxProps) {
  return (
    <div>
      <h3 className="text-sm font-medium mb-3 opacity-80">{title}</h3>

      <div className="bg-white/5 rounded-xl overflow-hidden border border-white/10">
        {options.map((option) => {
          const active = selected === option.value;

          return (
            <div
              key={option.value}
              className={`px-4 py-3 cursor-pointer transition border-b border-white/5 last:border-none
                ${active ? "bg-white/10 text-blue-400" : "hover:bg-white/5"}`}
              onClick={() => onSelect(option.value)}
            >
              {option.label}
            </div>
          );
        })}
      </div>
    </div>
  );
}
