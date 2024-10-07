import React from 'react';
import TextInput from './TextInput';
import Button from './Button';
import CloseButton from './CloseButton';

export interface SelectOption {
  id: string;
  label: string;
  value: string;
}

export default function CreateOption({
  options,
  onAdd,
  onRemove,
  onChange,
}: {
  options: SelectOption[];
  onAdd: () => void;
  onRemove: (index: number) => void;
  onChange: (field: string, value: string) => void;
}) {
  return (
    <>
      <div className="grid grid-cols-3 gap-y-6 gap-3">
        {options?.map((option: SelectOption, index: number) => (
          <fieldset
            className="relative py-6 px-4 flex flex-col gap-6 border rounded"
            key={option.id}
          >
            <CloseButton
              onClick={() => onRemove(index)}
              className="absolute -top-6 -right-3"
            />
            <legend>{option.label || 'New Select Option'}</legend>
            <TextInput
              label="Label"
              name="optionLabel"
              placeholder="Put option label here"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                onChange(`options[${index}].label`, e.currentTarget.value);
              }}
              value={option.label}
            />
            <TextInput
              label="Value"
              name="optionValue"
              placeholder="Put option value here"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                onChange(`options[${index}].value`, e.currentTarget.value);
              }}
              value={option.value}
            />
          </fieldset>
        ))}
      </div>
      <div className="flex justify-end">
        <Button onClick={onAdd} type="button" buttonStyle="secondary">
          Add Option
        </Button>
      </div>
    </>
  );
}
