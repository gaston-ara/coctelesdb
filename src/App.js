import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()
    let focusName = e.target.children[1];
     const newCoctel = await axios.post('http://localhost:4000/cocteles', {
       nombre: name,
       ingredientes: ingredientes,
       category: category
     })
     console.log(newCoctel.data);
    setName('');
    setIngredientes('');
     focusName.focus();
  }

  return (
    <div className="App">
      <form className='form' onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="Categoria" value={category} onChange={(e) => setCategory(e.target.value)}/>
        <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)}/>
        <textarea type="text" placeholder="Ingredientes" value={ingredientes} onChange={(e) => setIngredientes(e.target.value)}/>
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
}

export default App;
