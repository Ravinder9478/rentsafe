function FilterButton({ label, isSelected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
        isSelected
          ? 'bg-primary text-white'
          : 'bg-gray-100 text-text-secondary hover:bg-gray-200'
      }`}
    >
      {label}
    </button>
  );
}

export default FilterButton;

