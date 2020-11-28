import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";

describe("todoReducer.js", () => {
  test("should return default state", () => {
    const state = todoReducer(demoTodos, "");
    expect(state).toEqual(demoTodos);
  });

  test("should return new todo", () => {
    const newTodo = { id: 3, description: "Aprender Node.js", done: false };
    const newAction = {
      type: "add",
      payload: newTodo,
    };
    const state = todoReducer(demoTodos, newAction);

    expect(state.length).toBe(3);
    expect(state).toEqual([...demoTodos, newTodo]);
  });
});
