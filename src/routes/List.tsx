import { useLoaderData, Link } from 'react-router-dom';
import localforage from 'localforage';

import { Form } from './FormBuilder';

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  try {
    const forms = await localforage.getItem('forms');
    return forms;
  } catch (err) {
    console.log(err);
  }
}

export default function List() {
  const forms = useLoaderData() as Form[];

  return (
    <main>
      <h2 className="text-lg mb-4">Forms</h2>
      {forms.length ? (
        <ul>
          {forms.map((form) => (
            <li key={form.id} className="odd:bg-gray-100">
              <Link to={`/form-loader/${form.id}`}>
                <span className="block p-4">{form.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-col items-center justify-center py-8">
          <h3 className="mb-4">No forms created yet</h3>
          <Link
            to="/form-builder"
            className="h-12 flex items-center px-8 rounded text-center bg-white text-black border"
          >
            Create form
          </Link>
        </div>
      )}
    </main>
  );
}
