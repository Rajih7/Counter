import React, { useState, useRef } from "react";

function Counter() {
  const [socialShares, setSocialShares] = useState({
    number: "",
    sum: 0,
    percentage: 0,
    percentageNum: 0
  });

  const [seoWorked, setSeoWorked] = useState({
    number: "",
    sum: 0,
    percentage: 0,
    percentageNum: 0
  });

  const [counts, setCounts] = useState({
    Fawas: 109,
    Shahana: 96.5,
    Sruthi: 7,
    Arjun: 56,
    Sameer: 38,
  });

  const textRef = useRef(null);

  const handleSocialSharesChange = (event) => {
    const value = event.target.value;
    setSocialShares({ ...socialShares, number: value });
  };

  const handleSeoWorkedChange = (event) => {
    const value = event.target.value;
    setSeoWorked({ ...seoWorked, number: value });
  };

  const handleAddClick = (counter) => {
    const newSum = Number(counter.number) + counter.sum;
    if (counter === socialShares) {
      setSocialShares({
        ...socialShares,
        sum: newSum,
        number: ""
      });
    } else if (counter === seoWorked) {
      setSeoWorked({
        ...seoWorked,
        sum: newSum,
        number: ""
      });
    }
  };

  const handlePercentageClick = (counter) => {
    const calculatedPercentage = ((counter.sum / counter.number) * 100).toFixed(0);
    if (counter === socialShares) {
      setSocialShares({ ...socialShares, percentage: calculatedPercentage, percentageNum: counter.number });
    } else if (counter === seoWorked) {
      setSeoWorked({ ...seoWorked, percentage: calculatedPercentage, percentageNum: counter.number });
    }
  };

  const handleClearClick = () => {
    // Clear values for both social shares and SEO worked
    setSocialShares({
      number: "",
      sum: 0,
      percentage: 0,
      percentageNum: 0
    });
    setSeoWorked({
      number: "",
      sum: 0,
      percentage: 0,
      percentageNum: 0
    });
  };

  const handleCopyClick = () => {
    const textToCopy = textRef.current.innerText;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => alert("Copied to clipboard"))
      .catch((error) => console.error("Failed to copy:", error));
  };

  const handleCountClick = (key) => {
    const newValue = prompt(`Enter new value for ${key}:`, counts[key]);
    if (newValue !== null) {
      const newCounts = { ...counts, [key]: parseFloat(newValue) };
      setCounts(newCounts);
    }
  };

  return (
    <div className="w-96 mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-lg">
      <div className="mb-6">
        <label htmlFor="socialShares" className="block mb-2 text-lg font-bold">
          No.of social shares:
        </label>
        <input
          type="number"
          id="socialShares"
          value={socialShares.number}
          onChange={handleSocialSharesChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 bg-gray-900 text-white"
          placeholder="Enter number"
        />
      </div>
      <div className="flex justify-between">
        <button
          onClick={() => handleAddClick(socialShares)}
          className="flex-1 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Add
        </button>
        {/* Buttons for social shares */}
        <button
          onClick={() => handlePercentageClick(socialShares)}
          className="flex-1 ml-4 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none"
        >
          Percentage
        </button>
      </div>
      <div className="mb-6 mt-6">
        <label htmlFor="seoWorked" className="block mb-2 text-lg font-bold">
          No. of SEO worked:
        </label>
        <input
          type="number"
          id="seoWorked"
          value={seoWorked.number}
          onChange={handleSeoWorkedChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 bg-gray-900 text-white"
          placeholder="Enter number"
        />
      </div>
      <div className="flex justify-between">
        <button
          onClick={() => handleAddClick(seoWorked)}
          className="flex-1 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Add
        </button>
        {/* Buttons for SEO worked */}
        <button
          onClick={() => handlePercentageClick(seoWorked)}
          className="flex-1 ml-4 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none"
        >
          Percentage
        </button>
      </div>
      <div className="mt-6" ref={textRef}>
        No. of SEO worked - {seoWorked.sum} / {seoWorked.percentageNum} ({seoWorked.percentage}%)
        <br />
        No.of social shares - {socialShares.sum} / {socialShares.percentageNum} ({socialShares.percentage}%)
        <br />
        Report status - 0/60
        <br />
        Current hours in each profile
        {Object.entries(counts).map(([key, value]) => (
          <div key={key} onClick={() => handleCountClick(key)} style={{ cursor: "pointer" }}>
            - {key} - {value}
          </div>
        ))}
        - Channel promotion status checking - Done
        <br />
        Priority tasks status - 6 in processing, 9 Pending
      </div>
      <button
        onClick={handleClearClick}
        className="mt-4 ml-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none"
      >
        Clear All
      </button>
      <button
        onClick={handleCopyClick}
        className="mt-4 ml-4 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-black focus:outline-none"
      >
        Copy
      </button>
    </div>
  );
}

export default Counter;
