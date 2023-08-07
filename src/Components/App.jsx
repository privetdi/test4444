import { useState } from "react";
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
  let [notes, setNotes] = useState(["123", "456", "789"]);
  let [value, setValue] = useState("123");

  let onchange = (e) => {
    setValue(e.target.value);
  };

  let onclick = () => {
    if (value === "") {
      setValue("");
      return;
    }
    setNotes([...notes, value]);
    setValue("");
  };

  let delet = (item) => {
    setNotes(notes.filter((note) => note !== item));
  };
  return (
    <>
      <div className="header">Notes list, total {notes.length}</div>
      <div className="container">
        {/* button must add notes */}
        <div className="btn" onClick={onclick}>
          +
        </div>
        <input
          type="text"
          value={value}
          className="textInput"
          autoFocus
          onChange={onchange}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          {notes.map((item, index) => {
            return (
              <div key={index} onClick={() => delet(item)}>
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
