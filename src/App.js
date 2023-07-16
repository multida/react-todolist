import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [list, setList] = useState([
    {
      id: 1,
      title: "리액트 연습",
      content: "투두리스트를 만들어보자",
      completed: false,
    },
    {
      id: 2,
      title: "싱가포르 일정 짜기",
      content: "노션이나, 엑셀로 공유 파일 만들어 공유하기",
      completed: false,
    },
  ]);
  const onChangeTitleHandler = (e) => {
    setTitle(e.target.value);
  };

  const onChangeContentHandler = (e) => {
    setContent(e.target.value);
  };

  const onClickAddList = () => {
    console.log(title, content);

    const newItem = {
      id: list.length + 1,
      title,
      content,
      completed: false,
    };

    setList((prevList) => [...prevList, newItem]);
    setTitle("");
    setContent("");
  };

  const onClickDeleteList = (id) => {
    setList((prevList) => prevList.filter((item) => item.id !== id));
  };

  const onClickCompleteList = (id) => {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, completed: true } : item
      )
    );
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
        {list.map(
          (listItem) =>
            !listItem.completed && (
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
        {list.map(
          (listItem) =>
            listItem.completed && (
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
