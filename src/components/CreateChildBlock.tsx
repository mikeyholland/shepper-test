import CreateBlock, { Block, BlockValues } from './CreateBlock';
import Button from './Button';

export default function CreateChildBlock({
  items,
  onAdd,
  onRemove,
  onChange,
}: {
  items: Block[];
  onAdd: () => void;
  onRemove: (id: string) => void;
  onChange: (field: string, value: BlockValues) => void;
}) {
  return (
    <>
      <div className="grid grid-cols-3 gap-y-6 gap-3">
        {items?.map((item: Block, index: number) => (
          <CreateBlock
            key={item.id}
            {...item}
            onChange={(field: string, value: BlockValues) =>
              onChange(`children[${index}].${field}`, value)
            }
            onClick={() => onRemove(item.id)}
          />
        ))}
      </div>
      <div className="flex justify-end">
        <Button onClick={onAdd} type="button" buttonStyle="secondary">
          Add Child Block
        </Button>
      </div>
    </>
  );
}
