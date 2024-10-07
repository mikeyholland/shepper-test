import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TextInput from './TextInput';
import RadioButton from './RadioButton';
import Checkbox from './Checkbox';
import CloseButton from './CloseButton';
import CreateOption, { SelectOption } from './CreateOption';
import CreateChildBlock from './CreateChildBlock';

type BlockType = 'text' | 'textarea' | 'checkbox' | 'select' | 'group';

export interface Block {
  id: string;
  type: BlockType;
  name: string;
  label: string;
  placeholder: string;
  required: boolean;
  options: SelectOption[];
  children: Block[];
  isChild: boolean;
}

export type BlockValues = string | boolean | Block | Block[] | SelectOption[];

interface CreateBlockType extends Block {
  onChange: (field: string, value: BlockValues) => void;
  onClick: (id: string) => void;
}

const emptyChild: Block = {
  id: '',
  name: '',
  label: '',
  placeholder: '',
  required: false,
  type: 'text',
  options: [],
  children: [],
  isChild: true,
};

const emptyOption: SelectOption = {
  id: '',
  label: '',
  value: '',
};

export default function CreateBlock({
  id,
  name,
  label,
  placeholder,
  required,
  type,
  isChild,
  options,
  children,
  onChange,
  onClick,
}: CreateBlockType) {
  const handleAddChild = () => {
    const newChild = { ...emptyChild, id: uuidv4() };
    onChange('children', [...(children as Block[]), newChild]);
  };

  const handleRemoveChild = (id: string) => {
    const filteredChildren = children?.filter((child) => child.id !== id);
    onChange('children', [...(filteredChildren as Block[])]);
  };

  const handleGroupTypeChange = () => {
    onChange('type', 'group');
    handleAddChild();
  };

  const handleAddOption = () => {
    const newOption = { ...emptyOption, id: uuidv4() };
    onChange('options', [...(options as SelectOption[]), newOption]);
  };

  const handleRemoveOption = (index: number) => {
    const filteredOptions = options?.filter((_, i) => i !== index);
    onChange('options', [...(filteredOptions as SelectOption[])]);
  };

  const handleSelectTypeChange = () => {
    onChange('type', 'select');
    handleAddOption();
  };

  useEffect(() => {
    if (type !== 'group') {
      onChange('children', []);
    }
    if (type !== 'select') {
      onChange('options', []);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  const uniqueTypeKey = `type-${id}`;

  return (
    <fieldset className="relative py-6 px-4 flex flex-col gap-6 border rounded">
      <CloseButton
        onClick={() => onClick(id)}
        className="absolute -top-6 -right-3"
      />
      <legend>
        {label || (isChild ? 'New Child Block' : 'New Field Block')}
      </legend>
      <TextInput
        label="Label"
        name="label"
        placeholder="Put input label here"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onChange('label', e.currentTarget.value);
        }}
        value={label}
      />
      <TextInput
        label="Name"
        name="name"
        placeholder="Put input name here"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onChange('name', e.currentTarget.value);
        }}
        value={name}
      />
      <fieldset className="flex flex-wrap gap-4">
        <legend className="mb-2">Input Type</legend>
        <RadioButton
          label="Text input"
          name={uniqueTypeKey}
          value="text"
          defaultChecked
          onChange={() => onChange('type', 'text')}
        />
        <RadioButton
          label="Textarea"
          name={uniqueTypeKey}
          value="textarea"
          onChange={() => onChange('type', 'textarea')}
        />
        <RadioButton
          label="Checkbox"
          name={uniqueTypeKey}
          value="checkbox"
          onChange={() => onChange('type', 'checkbox')}
        />
        <RadioButton
          label="Select"
          name={uniqueTypeKey}
          value="select"
          onChange={handleSelectTypeChange}
        />
        {!isChild && (
          <RadioButton
            label="Group"
            name={uniqueTypeKey}
            value="group"
            onChange={handleGroupTypeChange}
          />
        )}
      </fieldset>
      {(type === 'text' || type === 'textarea') && (
        <TextInput
          label="Placeholder"
          name="placeholder"
          placeholder="Put input placeholder here"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            onChange('placeholder', e.currentTarget.value);
          }}
          value={placeholder}
        />
      )}
      {type === 'select' && (
        <CreateOption
          options={options}
          onChange={onChange}
          onAdd={handleAddOption}
          onRemove={(index) => handleRemoveOption(index)}
        />
      )}
      {type === 'group' && (
        <CreateChildBlock
          items={children}
          onAdd={handleAddChild}
          onRemove={(id) => handleRemoveChild(id)}
          onChange={onChange}
        />
      )}
      {(type === 'text' || type === 'textarea') && (
        <Checkbox
          label="Required"
          name="required"
          checked={required}
          onChange={() => onChange('required', !required)}
        />
      )}
    </fieldset>
  );
}
