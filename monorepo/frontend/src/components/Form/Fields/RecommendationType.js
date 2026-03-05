import { useState } from "react";
import { Layers, Box } from "lucide-react";
import Checkbox from '../../shared/Checkbox';

function RecommendationType({ onRecommendationTypeChange }) {
  const [selected, setSelected] = useState("SingleProduct");

  const handleSelect = (value) => {
    setSelected(value);
    onRecommendationTypeChange(value);
  };

  const options = [
    {
      value: "SingleProduct",
      label: "Produto Único",
      description: "Recomende um item específico",
      icon: Box
    },
    {
      value: "MultipleProducts",
      label: "Múltiplos Produtos",
      description: "Recomende uma seleção de itens",
      icon: Layers
    },
  ];

  return (
    <div className="mb-4">
      <h2 className="text-md font-semibold uppercase text-black mb-3">
        Tipo de Recomendação
      </h2>

      <div className="flex gap-3">
        {options.map(({ value, label, description, icon: Icon }) => {
          const isActive = selected === value;
          return (
            <label
              key={value}
              htmlFor={value}
              className={`relative flex flex-row items-start gap-2 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 min-w-80
                ${isActive
                  ? "border-blue-600 bg-gradient-to-br from-blue-50 to-blue-100 shadow-md -translate-y-px"
                  : "border-gray-200 bg-white shadow-sm hover:border-blue-300 hover:shadow-md"
                }`}
            >
              <div className="absolute top-2.5 right-2.5">
                <Checkbox
                  id={value}
                  type="radio"
                  name="recommendationType"
                  value={value}
                  checked={isActive}
                  onChange={() => handleSelect(value)}
                />
              </div>

              <div className={`p-2 rounded-lg transition-all duration-200
                ${isActive ? "bg-blue-600" : "bg-gray-100"}`}>
                <Icon size={18} className={isActive ? "text-white" : "text-gray-500"} strokeWidth={2} />
              </div>

              <div>
                <div className={`text-sm font-semibold transition-colors duration-200
                  ${isActive ? "text-blue-800" : "text-gray-900"}`}>
                  {label}
                </div>
                <div className={`text-xs mt-0.5 transition-colors duration-200
                  ${isActive ? "text-blue-500" : "text-gray-400"}`}>
                  {description}
                </div>
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default RecommendationType;