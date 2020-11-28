import React from "react";
import { shallow } from "enzyme";
import { demoTodos } from "../../fixtures/demoTodos";
import TodoListItem from "../../../components/08-useReducer/TodoListItem";

describe("<TodoListItem />", () => {
  const handleToggle = jest.fn();
  const handleDelete = jest.fn();

  const wrapper = shallow(
    <TodoListItem
      todo={demoTodos[0]}
      i={0}
      handleToggle={handleToggle}
      handleDelete={handleDelete}
    />
  );

  test("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should call handleDelete function", () => {
    wrapper.find("button").simulate("click");
    expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test("should call handleToggle function", () => {
    wrapper.find("p").simulate("click");
    expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test("should render text with variables", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(`1. ${demoTodos[0].desc}`);
  });

  test("should if todo.done = true, class = complete", () => {
    const todo = demoTodos[0];
    todo.done = true;

    const wrapper = shallow(<TodoListItem todo={todo} />);

    expect(wrapper.find("p").hasClass("completed")).toBe(true);
  });
});
