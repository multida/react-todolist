import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "./redux/modules/todos";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const onChangeTitleHandler = (e) => {
    setTitle(e.target.value);
  };

  const onChangeContentHandler = (e) => {
    setContent(e.target.value);
  };

  const onClickAddList = () => {
    const newItem = {
      id: todos.length + 1,
      title,
      content,
    };

    dispatch(addTodo(newItem.id, newItem.title, newItem.content));

    setTitle("");
    setContent("");
  };

  const onClickDeleteList = (id) => {
    dispatch(deleteTodo(id));
  };

  const onClickCompleteList = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div className="App">
      <div>
        <span>
          <input
            type="text"
            value={title}
            onChange={onChangeTitleHandler}
            placeholder="제목을 입력해주세요."
          />
          <input
            type="text"
            value={content}
            onChange={onChangeContentHandler}
            placeholder="내용을 입력해주세요."
          />
        </span>
        <button type="button" onClick={onClickAddList}>
          등록하기
        </button>
      </div>

      <ul>
        {todos.map(
          (listItem) =>
            !listItem.isCompleted && (
              <li key={listItem.id}>
                <div>제목: {listItem.title}</div>
                <div>내용: {listItem.content}</div>
                <button onClick={() => onClickCompleteList(listItem.id)}>
                  완료
                </button>
                <button onClick={() => onClickDeleteList(listItem.id)}>
                  삭제
                </button>
              </li>
            )
        )}
      </ul>

      <hr />

      <ul>
        {todos.map(
          (listItem) =>
            listItem.isCompleted && (
              <li key={listItem.id}>
                <div>제목: {listItem.title}</div>
                <div>내용: {listItem.content}</div>
                <button onClick={() => onClickCompleteList(listItem.id)}>
                  완료
                </button>
                <button onClick={() => onClickDeleteList(listItem.id)}>
                  삭제
                </button>
              </li>
            )
        )}
      </ul>
    </div>
  );
}

export default App;
