// 액션 타입 정의
const ADD_TODO = "todos/ADD_TODO";
const COMPLETED_TODO = "todos/COMPLETED_TODO";
const DELETE_TODO = "todos/DELETE_TODO";

// 액션 생성 함수
export const addTodo = (id, title, content) => ({
  type: ADD_TODO,
  payload: {
    id,
    title,
    content,
    isCompleted: false,
  },
});

export const completedTodo = (id) => ({
  type: COMPLETED_TODO,
  payload: {
    id,
  },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: {
    id,
  },
});

// 초기 상태
const initialState = {
  todos: [
    {
      id: 1,
      title: "리액트 연습",
      content: "투두리스트를 만들어보자",
      isCompleted: false,
    },
    {
      id: 2,
      title: "싱가포르 일정 짜기",
      content: "노션이나, 엑셀로 공유 파일 만들어 공유하기",
      isCompleted: false,
    },
  ],
};

// 리듀서 함수
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case COMPLETED_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default todos;
