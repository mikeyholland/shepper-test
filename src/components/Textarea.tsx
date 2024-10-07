export default function Textarea({
  label,
  name,
  onChange,
  placeholder,
  value,
  error,
}: {
  label: string;
  name: string;
  placeholder?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="mb-2">
        {label}
      </label>
      <textarea
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className="p-2 border rounded-sm"
      />
      {error && <p className="mt-2 text-red-400">{error}</p>}
    </div>
  );
}
