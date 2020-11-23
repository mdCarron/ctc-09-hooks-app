import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "../../hooks/useCounter";

describe("useCounter.js", () => {
  test("should return default values", () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.counter).toBe(10);
    expect(typeof result.current.decrement).toBe("function");
    expect(typeof result.current.increment).toBe("function");
    expect(typeof result.current.reset).toBe("function");
  });

  test("should return asigned value", () => {
    const asignedValue = 100;
    const { result } = renderHook(() => useCounter(asignedValue));

    expect(result.current.counter).toBe(asignedValue);
  });

  test("should counter incremente by 1", () => {
    const { result } = renderHook(() => useCounter(10));
    const { increment } = result.current;

    act(() => {
      increment();
    });

    const { counter } = result.current;
    expect(counter).toBe(11);
  });

  test("should counter decrease by 1", () => {
    const { result } = renderHook(() => useCounter(10));
    const { decrement } = result.current;

    act(() => {
      decrement();
    });

    const { counter } = result.current;
    expect(counter).toBe(9);
  });

  test("should counter reset to initial state", () => {
    const initialState = 10;
    const { result } = renderHook(() => useCounter(initialState));
    const { increment, reset } = result.current;

    act(() => {
      increment();
      reset();
    });

    const { counter } = result.current;
    expect(counter).toBe(initialState);
  });
});
