// Preferences.js

import React, { useState } from 'react';
import Checkbox from '../../shared/Checkbox';

function Preferences({
  preferences,
  selectedPreferences = [],
  onPreferenceChange,
}) {
  const [currentPreferences, setCurrentPreferences] = useState(selectedPreferences)

  const handlePreferenceChange = (preference) => {
    const updatedPreferences = currentPreferences.includes(preference)
      ? currentPreferences.filter((pref) => pref !== preference)
      : [...currentPreferences, preference];

    setCurrentPreferences(updatedPreferences);
    onPreferenceChange(updatedPreferences);
  };

  return (
    <div className="my-4 mt-10">
      <h2 className="text-md font-bold tracking-widest uppercase text-black mb-2">
        Preferências
      </h2>
      <p className='text-sm text-gray-500 mb-3'>Selecione todas as preferências que são importantes para você.</p>
      <div className="grid grid-cols-3 gap-2">
        {preferences.map((preference, index) => {
          const isChecked = currentPreferences.includes(preference);
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
                  value={preference}
                  checked={isChecked}
                  onChange={() => handlePreferenceChange(preference)}
                />
              </div>
              <span className={`text-sm font-medium leading-snug transition-colors duration-200
                ${isChecked ? "text-blue-800" : "text-gray-700"}`}>
                {preference}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default Preferences;
