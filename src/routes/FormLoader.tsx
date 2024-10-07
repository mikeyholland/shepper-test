import localforage from 'localforage';
import { useLoaderData } from 'react-router-dom';
import { Form as FormikForm, Formik } from 'formik';

import { Form } from './FormBuilder';
import FormBlock from '../components/FormBlock';
import Button from '../components/Button';

type ParamsType = {
  id: string;
};

type FormsList = Form[] | null;

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params }: { params: ParamsType }) {
  try {
    const forms: FormsList = await localforage.getItem('forms');
    const formById = forms?.find((form) => form.id === params.id);
    return formById;
  } catch (err) {
    console.log(err);
  }
}

export type FormResult = {
  [key: string]: undefined;
};

export default function FormLoader() {
  const form = useLoaderData() as Form;

  const handleSubmit = (form: FormResult) => {
    alert(JSON.stringify(form, null, 2));
  };

  const initialValues = form.blocks.reduce<FormResult>((accumulator, item) => {
    accumulator[item.name] = undefined;
    return accumulator;
  }, {});

  return (
    <main>
      <h2 className="mb-4">Form name - {form.name}</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ values, setFieldValue }) => {
          return (
            <FormikForm className="flex flex-col gap-4">
              <fieldset className="py-6 px-4 flex flex-col gap-6 border rounded">
                <legend>{form.name}</legend>
                {form.blocks.map((block) => (
                  <FormBlock
                    key={block.id}
                    block={block}
                    value={values[block.name] || ''}
                    onChange={(name, value) => setFieldValue(name, value)}
                  />
                ))}
              </fieldset>
              <div className="flex gap-4 justify-end">
                <Button type="submit">Save Form</Button>
              </div>
            </FormikForm>
          );
        }}
      </Formik>
    </main>
  );
}
