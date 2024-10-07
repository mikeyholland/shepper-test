interface SelectOption {
  label: string;
  value: string;
}

export default function Select({
  options,
  name,
  label,
  onChange,
}: {
  name: string;
  label: string;
  options: SelectOption[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="mb-2">
        {label}
      </label>
      <select name={name} onChange={onChange} className="border rounded p-2">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
