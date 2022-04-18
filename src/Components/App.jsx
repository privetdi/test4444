import React from "react";
import Note from "./Note";

// реализовать интерфейс заметок
// по кнопке + заметки должны добавляться
// поле ввода должно очищаться после добавления
// заметки должны хранится в стейте компонента
// Note - компонент одной заметки
// заметки могут быть с одинаковыми названиями
// заметки должны удалятся по клику на Note
// заметки должны быть отсортированы по алфавиту
// количество заметок должно быть подсчитано в header

const App = () => {
  return (
    <>
      <div className="header">Notes list, total {'{Total notes must be here}'}</div>
      <div className="container">
        {/* button must add notes */}
        <div className="btn">
          +
        </div>
        <input
          type="text"
          value={'123'}
          className="textInput"
          autoFocus
        />
        {/* render notes here */}
      </div>
    </>
  );
};

export default App;
