import React from "react";
import { shallow } from "enzyme";
import { demoTodos } from "../../fixtures/demoTodos";
import TodoList from "../../../components/08-useReducer/TodoList";

describe("<TodoList />", () => {
  const handleToggle = jest.fn();
  const handleDelete = jest.fn();

  const wrapper = shallow(
    <TodoList
      todos={demoTodos}
      handleToggle={handleToggle}
      handleDelete={handleDelete}
    />
  );

  test("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should have 2 child <TodoListItem />", () => {
    expect(wrapper.find("TodoListItem").length).toBe(demoTodos.length);

    expect(wrapper.find("TodoListItem").at(0).prop("handleToggle")).toEqual(
      expect.any(Function)
    );
  });
});
