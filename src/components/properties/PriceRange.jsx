function PriceRange({ min, max, onChange }) {
  return (
    <div>
      <h3 className="text-base font-semibold text-text-primary mb-3">Select Price Range</h3>
      <div className="space-y-4">
        <input
          type="range"
          min="0"
          max="10000"
          value={max}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-text-secondary">
          <span>&lt; {min}</span>
          <span>&lt; {max}</span>
        </div>
      </div>
    </div>
  );
}

export default PriceRange;

