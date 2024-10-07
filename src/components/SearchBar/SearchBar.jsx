import { Field, Form, Formik } from 'formik';
import './SearchBar.module.css';
const SearchBar = ({ handleChangeQuery }) => {
  const initialValues = { query: "" }; 

  const handleSubmit = (values) => {
    handleChangeQuery(values.query.trim()); 
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form >
          <Field  name="query" placeholder="Search movie" className="input"/>
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar; 
