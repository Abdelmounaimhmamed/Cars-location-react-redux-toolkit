import CarForm from './components/CarForm';
import CarList from './components/CarList';
import CarSearch from './components/CarSearch';
import CarValue from './components/CarValue';
import "./app.css";
import "bulma/css/bulma.css";

const  App = () =>  {
  return (
    <div className='container is-fluid'>
      
      <CarForm />
      <CarSearch />
      <hr/>
      <CarList />
      <CarValue />
    </div>
  );
}

export default App;
