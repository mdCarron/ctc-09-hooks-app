import { renderHook, act } from "@testing-library/react-hooks";
import useForm from "../../hooks/useForm";

describe("useForm.js", () => {
  const initialForm = {
    name: "Sopita",
    email: "contact@sopita.com",
  };

  test("should return default values", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [formValues, handleInputChange, reset] = result.current;

    expect(formValues).toEqual({
      name: "Sopita",
      email: "contact@sopita.com",
    });
    expect(typeof handleInputChange).toBe("function");
    expect(typeof reset).toBe("function");
  });

  test("should change { name } in formValues", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "Chocolinas",
        },
      });
    });

    const [formValues] = result.current;
    expect(formValues).toEqual({ ...initialForm, name: "Chocolinas" });
  });

  test("should reset formValues to initial state", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "Chocolinas",
        },
      });
      reset();
    });

    const [formValues] = result.current;
    expect(formValues).toEqual(initialForm);
  });
});
