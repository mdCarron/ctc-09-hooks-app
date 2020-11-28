import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";

describe("todoReducer.js", () => {
  test("should return default state", () => {
    const state = todoReducer(demoTodos, "");
    expect(state).toEqual(demoTodos);
  });

  test("should return NEW todo", () => {
    const newTodo = { id: 3, description: "Aprender Node.js", done: false };
    const newAction = {
      type: "add",
      payload: newTodo,
    };
    const state = todoReducer(demoTodos, newAction);

    expect(state.length).toBe(3);
    expect(state).toEqual([...demoTodos, newTodo]);
  });

  test("should return new state without DELETED todo", () => {
    const action = {
      type: "delete",
      payload: 2,
    };
    const state = todoReducer(demoTodos, action);

    expect(state.length).toBe(1);
    expect(state).toEqual([demoTodos[0]]);
  });

  test("should return todo with done TOGGLE ", () => {
    const action = {
      type: "toggle",
      payload: 2,
    };
    const state = todoReducer(demoTodos, action);
    expect(state[1].done).toBe(true);
    expect(state[0]).toEqual(demoTodos[0]);
  });
});
