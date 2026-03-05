import React, { useState } from 'react';
import Checkbox from '../../shared/Checkbox';

function Features({ features, selectedFeatures = [], onFeatureChange }) {
  const [currentFeatures, setCurrentFeatures] = useState(selectedFeatures)

  const handleFeatureChange = (feature) => {
    const updatedFeatures = currentFeatures.includes(feature)
      ? currentFeatures.filter((pref) => pref !== feature)
      : [...currentFeatures, feature];

    setCurrentFeatures(updatedFeatures);
    onFeatureChange(updatedFeatures);
  };

  return (
    // <div className="mb-4">
    //   <h2 className="text-lg font-bold mb-2">Funcionalidades:</h2>
    //   <ul>
    //     {features.map((feature, index) => (
    //       <li key={index} className="mb-2">
    //         <Checkbox
    //           value={feature}
    //           checked={currentFeatures.includes(feature)}
    //           onChange={() => handleFeatureChange(feature)}
    //           className="text-green-500"
    //         >
    //           {feature}
    //         </Checkbox>
    //       </li>
    //     ))}
    //   </ul>
    // </div>

    <div className="mb-4 mt-10">
      <h2 className="text-md font-bold tracking-widest uppercase text-black mb-3">
        Funcionalidades
      </h2>
      <p className='text-sm text-gray-500 mb-3'>Selecione todas as funcionalidades que são importantes para você.</p>
      <div className="grid grid-cols-3 gap-2"></div>
      <div className="grid grid-cols-3 gap-2">
        {features.map((feature, index) => {
          const isChecked = currentFeatures.includes(feature);
          return (
            <label
              key={index}
              className={`flex items-start gap-3 px-4 py-3 rounded-xl border-2 cursor-pointer transition-all duration-200
                ${isChecked
                  ? "border-blue-600 bg-gradient-to-br from-blue-50 to-blue-100 shadow-md"
                  : "border-gray-200 bg-white shadow-sm hover:border-blue-300 hover:shadow-md"
                }`}
            >
              <div className="mt-0.5">
                <Checkbox
                  value={feature}
                  checked={isChecked}
                  onChange={() => handleFeatureChange(feature)}
                />
                
              </div>
              <span className={`text-sm font-medium leading-snug transition-colors duration-200
                ${isChecked ? "text-blue-800" : "text-gray-700"}`}>
                {feature}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default Features;
