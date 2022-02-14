import { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ToDoList from './components/ToDoList/ToDoList';
import { setList } from './redux/actions';

function App( props ) {

  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(res => res.slice(props.showedIndex-10, props.showedIndex))
        .then(res => props.setList(res))
}, [props.showedIndex])

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/todos" element={<ToDoList />} />
      </Routes>
    </Router>
  );
}

const mapStateToProps = (store) => {
  return {
    showedIndex: store.showedIndex
  }
}

const mapDispatchToProps = {
  setList
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
