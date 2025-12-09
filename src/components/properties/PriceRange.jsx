function PriceRange({ min, max, onChange }) {
  return (
    <div>
      <div className="flex items-center justify-between">
      <h3 className="text-base font-semibold text-text-primary mb-3">Select Price Range</h3>
      </div>
      <div className="space-y-4">
        <input
          type="range"
          min="0"
          max="10000"
          value={max}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between">
        <div className="flex justify-between text-sm items-center text-text-secondary gap-3 ">
        <p className="text-text-secondary text-2xl">€</p>
          <span className="border border-gray-300 rounded-lg py-3 px-2 w-[100px]"> {min}</span>
        </div>
        <div className="flex justify-between text-sm items-center text-text-secondary gap-3 ">
        <p className="text-text-secondary text-2xl">€</p>
          <span className="border border-gray-300 rounded-lg py-3 px-2 w-[150px]">{max}</span>
        </div>
        </div>
      </div>
    </div>
  );
}

export default PriceRange;
