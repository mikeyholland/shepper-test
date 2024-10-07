import { Form, Formik } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import * as Yup from 'yup';
import localforage from 'localforage';
import { useNavigate } from 'react-router-dom';

import TextInput from '../components/TextInput';
import Button from '../components/Button';
import CreateBlock, { Block } from '../components/CreateBlock';
export interface Form {
  id: string;
  name: string;
  blocks: Block[];
}

const emptyBlock: Block = {
  id: '',
  name: '',
  label: '',
  placeholder: '',
  required: false,
  type: 'text',
  options: [],
  children: [],
  isChild: false,
};

const schema = Yup.object().shape({
  name: Yup.string().required('Form name is required'),
  blocks: Yup.array()
    .of(
      Yup.object({
        name: Yup.string().required('Block name is required'),
        label: Yup.string().required('Block label is required'),
      }),
    )
    .min(1, 'Please add at least one form block'),
});

export default function FormBuilder() {
  const navigate = useNavigate();

  const handleSubmit = async (form: Form) => {
    alert(JSON.stringify(form, null, 2));
    const forms = (await localforage.getItem('forms')) || [];
    localforage
      .setItem('forms', [...(forms as []), form])
      .then(() => navigate(`/form-loader/${form.id}`));
  };

  return (
    <Formik
      initialValues={{
        id: uuidv4(),
        name: '',
        blocks: [],
      }}
      validationSchema={schema}
      onSubmit={(values) => handleSubmit(values)}
    >
      {({ values, setFieldValue, errors, isValid }) => {
        const handleAddBlock = () => {
          const newBlock = { ...emptyBlock, id: uuidv4() };
          setFieldValue('blocks', [...values.blocks, newBlock]);
        };

        const handleRemoveBlock = (id: string) => {
          const filteredBlocks = values.blocks?.filter(
            (block) => block['id'] !== id,
          );
          setFieldValue('blocks', [...filteredBlocks]);
        };

        return (
          <Form className="flex flex-col gap-4">
            <TextInput
              label="Form name"
              name="name"
              placeholder="Give your form a name"
              value={values.name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue('name', e.currentTarget.value);
              }}
              error={errors.name}
            />
            {values.blocks.map((block: Block, index: number) => (
              <CreateBlock
                key={block.id}
                {...block}
                onChange={(field, value) =>
                  setFieldValue(`blocks[${index}].${field}`, value)
                }
                onClick={() => handleRemoveBlock(block.id)}
              />
            ))}
            <div className="flex gap-4 justify-end">
              <Button
                onClick={handleAddBlock}
                type="button"
                buttonStyle="secondary"
              >
                Add Block
              </Button>
              <Button
                type="submit"
                buttonStyle={!isValid ? 'disabled' : 'primary'}
                disabled={!isValid}
              >
                Save Form
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
