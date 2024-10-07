export default function RadioButton({
  label,
  name,
  onChange,
  value,
  defaultChecked,
}: {
  label: string;
  name: string;
  onChange: () => void;
  value: string;
  defaultChecked?: boolean;
}) {
  return (
    <label className="flex gap-1">
      <input
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
        defaultChecked={defaultChecked}
      />
      {label}
    </label>
  );
}
