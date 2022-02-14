import "./style.css"
import React, { useState } from "react";
import ToDoListItem from "../ToDoListItem/ToDoListItem";
import { connect } from "react-redux";
import { setList, setFlag, addPost, removePost, editPost, incShowedIndex } from "../../redux/actions";
import { v4 } from 'uuid';


function ToDoList( { loading, fetchList, incShowedIndex, setFlag, removePost, addPost } ) {

    const  [inputState, setInputState] = useState('');

    if (loading) {
        return (
            <div className="toDo-container">
                <h2 className="toDo-title">
                Текущие задачи
            </h2>
            <div className="toDo-list">
                <h3 className="loading">Загрузка...</h3>
            </div>
        </div> 
        )
    }
         
    return (
        <div className="toDo-container">
            <h2 className="toDo-title">
                Текущие задачи
            </h2>
            <div className="toDo-list">
                {fetchList.map(item => {
                    return (
                        <ToDoListItem {...item}
                         doFlag={setFlag} key={item.id} remove={removePost} edit={editPost}/>
                    )
                })}
            </div>
            <button className="toDo-list__button" onClick={() => {
                incShowedIndex()
            }}>Загрузить еще</button>
            <form className="toDo-list__form" onSubmit={(e) => {
                e.preventDefault();
                if (inputState.length === 0 || inputState.trim() === '') {
                    alert('Задача не может быть пустой')
                } else if (inputState.length > 80) {
                    alert('Попробуйте покороче')
                } else {
                    const newElem = {
                        completed: false,
                        id: v4(),
                        title: inputState
                    }
                    addPost(newElem)
                }
            }}>
                <input className="toDo-list__form__input" onChange={(e) => {
                    setInputState(e.target.value)
                }}></input>
                <button className="toDo-list__form__button">Добавить задачу</button>
            </form>
        </div>
    )
}

const mapStatetoProps = (store) => {
    return {
        opennedList: store.opennedList,
        fetchList: store.fetchList,
        loading: store.loading,
        edited: store.edited,
        customList: store.customList
    }
}

const mapDispatchToProps = {
    setList,
    setFlag,
    addPost,
    removePost,
    editPost,
    incShowedIndex
}

export default connect(mapStatetoProps, mapDispatchToProps)(ToDoList);