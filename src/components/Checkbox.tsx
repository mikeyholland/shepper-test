export default function Checkbox({
  label,
  name,
  onChange,
  checked,
}: {
  label: string;
  name: string;
  onChange: () => void;
  checked: boolean;
}) {
  return (
    <label className="flex gap-1">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  );
}
