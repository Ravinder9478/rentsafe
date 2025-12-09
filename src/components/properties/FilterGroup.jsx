import FilterButton from './FilterButton';

function FilterGroup({ title, options, selectedValue, onSelect, isMultiSelect = false, selectedValues = [] }) {
  return (
    <div>
      <h3 className="text-base font-semibold text-text-primary mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isSelected = isMultiSelect
            ? selectedValues.includes(option.value)
            : selectedValue === option.value;
          
          return (
            <FilterButton
              key={option.value}
              label={option.label}
              isSelected={isSelected}
              onClick={() => onSelect(option.value)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FilterGroup;

