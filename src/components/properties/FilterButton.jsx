function FilterButton({ label, isSelected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-base font-medium transition-colors ${
        isSelected
          ? 'bg-[#EAE6FF] border border-[#6649F7] text-[#6649F7]'
          : 'text-text-secondary border border-[#E5E7EB] hover:bg-gray-100'
      }`}
    >
      {label}
    </button>
  );
}

export default FilterButton;

