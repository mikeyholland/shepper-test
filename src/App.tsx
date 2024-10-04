import { Routes, Route, } from "react-router-dom";

import Layout from "./components/Layout";
import List from './routes/List'
import FormBuilder from './routes/FormBuilder'
import FormLoader from './routes/FormLoader'
// import Layout from '@components/Layout'

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<List />} />
          <Route path="/form-builder" element={<FormBuilder />} />
          <Route path="/form-loader" element={<FormLoader />} />
        </Route>
      </Routes>
    
    </>
  );
}

export default App;
