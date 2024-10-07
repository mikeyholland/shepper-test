import { Block as BlockType } from './CreateBlock';
import TextInput from './TextInput';
import Textarea from './Textarea';
import Checkbox from './Checkbox';
import Select from './Select';

export default function FormBlock({
  block,
  onChange,
  value,
}: {
  block: BlockType;
  onChange: (field: string, value: string | boolean) => void;
  value: string;
}) {
  switch (block.type) {
    case 'text':
      return (
        <TextInput
          label={block.label}
          name={block.name}
          placeholder={block.placeholder}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            onChange(block.name, e.currentTarget.value);
          }}
          value={value}
        />
      );
    case 'textarea':
      return (
        <Textarea
          label={block.label}
          name={block.name}
          placeholder={block.placeholder}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            onChange(block.name, e.currentTarget.value);
          }}
          value={value}
        />
      );
    case 'checkbox':
      return (
        <Checkbox
          label={block.label}
          name={block.name}
          checked={!!value}
          onChange={() => onChange(block.name, !value)}
        />
      );
    case 'select':
      return (
        <Select
          name={block.name}
          label={block.label}
          options={block.options}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            onChange(block.name, e.currentTarget.value);
          }}
        />
      );
    case 'group':
      return (
        <fieldset className="py-6 px-4 flex flex-col gap-6 border rounded">
          <legend>{block.name}</legend>
          {block.children.map((child: BlockType) => (
            <FormBlock
              key={child.id}
              block={child}
              onChange={(field: string, value: string | boolean) =>
                onChange(`${block.name}.${field}`, value)
              }
              value={value[child.name] || ''}
            />
          ))}
        </fieldset>
      );
    default:
      return null;
  }
}
