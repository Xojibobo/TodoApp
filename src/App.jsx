import { Fragment, useState, useEffect } from 'react';
import './App.css';
import Forma from './components/Forma';
import Tablar from './components/Tablar';
import Input from './components/Input';

function App() {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [membership, setMembership] = useState("");
  const [todo, setTodo] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [search, setSearch] = useState("");

  // Sahifa yuklanganda localStorage'dan todo'larni olish
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodo(JSON.parse(storedTodos));
    }
  }, []);

  // localStorage'ga todo'larni saqlash
  useEffect(() => {
    if (todo.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todo));
    }
  }, [todo]);

  const submit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      const newTodo = {
        name,
        lastName,
        number,
        membership,
        isFavourite: false,
      };

      if (editIndex !== null) {
        const updatedTodos = [...todo];
        updatedTodos[editIndex] = newTodo;
        setTodo(updatedTodos);
        setEditIndex(null);
      } else {
        setTodo([...todo, newTodo]);
      }

      setName("");
      setLastName("");
      setNumber("");
      setMembership("");

      e.preventDefault();
    }

    setValidated(true);
  };

  const handleValue = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "firstName":
        setName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "number":
        setNumber(value);
        break;
      case "membership":
        setMembership(value);
        break;
      default:
        break;
    }
  };

  const handleFavourite = (index) => {
    const newTodo = [...todo];
    newTodo[index].isFavourite = !newTodo[index].isFavourite;
    setTodo(newTodo);
  };

  const handleDelete = (index) => {
    const updatedTodos = todo.filter((_, i) => i !== index);
    setTodo(updatedTodos);
  };

  const handleEdit = (index) => {
    const selectedTodo = todo[index];
    setName(selectedTodo.name);
    setLastName(selectedTodo.lastName);
    setNumber(selectedTodo.number);
    setMembership(selectedTodo.membership);
    setEditIndex(index);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase()); // Kichik harf bilan qidiruv
  };

  // Filtrlangan todos
  const filteredTodos = todo.filter(
    (t) =>
      t.name.toLowerCase().includes(search) ||
      t.lastName.toLowerCase().includes(search) ||
      t.membership.toLowerCase().includes(search)
  );

  let todoForm = { name, validated, lastName, number, membership, submit, handleValue };
  let inputSearch = { search, handleSearch };

  return (
    <Fragment>
      <Forma {...todoForm} />
      <Input {...inputSearch} />
      <Tablar todos={filteredTodos} handleFavourite={handleFavourite} handleEdit={handleEdit} handleDelete={handleDelete} />
    </Fragment>
  );
}

export default App;
