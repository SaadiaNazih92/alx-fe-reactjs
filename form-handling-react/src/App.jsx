// src/App.jsx
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/formikForm';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Gestione Form in React</h1>
      <hr />
      <RegistrationForm />
      <hr />
      <FormikForm />
    </div>
  );
}

export default App;
