import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './components/Layout';
import List, { loader as listLoader } from './routes/List';
import FormBuilder from './routes/FormBuilder';
import FormLoader, { loader as formLoader } from './routes/FormLoader';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <List />,
        loader: listLoader,
      },
      {
        path: '/form-builder',
        element: <FormBuilder />,
      },
      {
        path: '/form-loader/:id',
        element: <FormLoader />,
        loader: formLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
