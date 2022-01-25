import { ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_COMPLETE } from "../types";

const initialState = {
  taskList: [
    {
      id: 0,
      task: "Checkpoint Redux",
      isDone: false,
    },
    {
      id: 1,
      task: "Checkpoint Hooks",
      isDone: false,
    },
    {
      id: 2,
      task: "Checkpoint Router",
      isDone: false,
    },
    {
      id: 3,
      task: "Checkpoint Props",
      isDone: false,
    },
    {
      id: 4,
      task: "Hello Rihab",
      isDone: false,
    },
    {
      id: 5,
      task: "Hello Oumaima",
      isDone: false,
    },
  ],
};

const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return { ...state, taskList: [...state.taskList, payload] };

    case DELETE_TASK:
      return {
        ...state,
        taskList: state.taskList.filter((todo) => todo.id !== payload),
      };

    case TOGGLE_COMPLETE:
      return {
        ...state,
        taskList: state.taskList.map((todo) =>
          todo.id === payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };

    case EDIT_TASK:
      return {
        ...state,
        taskList: state.taskList.map((todo) =>
          todo.id === payload.id ? { ...todo, task: payload.value } : todo
        ),
      };

    default:
      return state;
  }
};

export default taskReducer;
