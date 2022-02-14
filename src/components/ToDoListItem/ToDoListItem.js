import React, { useEffect, useState } from "react";
import editLogo from "./EditLogo.svg"
import deleteLogo from "./DeleteLogo.svg"

function ToDoListItem( { title, completed, id, doFlag, remove, edit } ) {

    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        setInputValue(title)
    }, [])

    let className

    function toggleHide() {
        const text = document.getElementById(`text ${id}`),
                     textInput = document.getElementById(`${id}`)
                text.classList.toggle('hide');
                textInput.classList.toggle('hide')
    }

    if (completed) {
        className = "flagged"
    }

    return (
        <div
            className= 'toDo-list__item'
        >
            <button onClick={(e) => {
                e.target.classList.toggle("flagged")
                doFlag(id)
            }} className={`toDo-list__item-flag ${className}`}></button>
            <div id={`text ${id}`} className="toDo-list__item-text">
                {title}
            </div>
            <form onSubmit={(e) => {
                e.preventDefault();
                if (inputValue.length === 0 || inputValue.trim() === '') {
                    alert('Задача не может быть пустой')
                } else if (inputValue.length > 80) {
                    alert('Попробуйте покороче')
                } else {
                edit(id, inputValue);
                toggleHide()
            }}}id={id} className="toDo-list__item__form hide">
                <input value={inputValue} className="toDo-list__item__form__input" onChange={(e) => setInputValue(e.target.value)} placeholder='Введите новый текст задачи' />
                <button className="toDo-list__item__form__button">Сохранить новый текст</button>
            </form>
            <div className="toDo-list__item-wrapper">
                <img onClick={() => {
                    toggleHide()
                }} className="toDo-list__item-edit" alt="Изменить" src={editLogo}/>
                <img onClick={() => {
                    remove(id)
                }} className="toDo-list__item-delete" alt="Удалить" src={deleteLogo}/>
            </div>
        </div>
    )
}

export default ToDoListItem;