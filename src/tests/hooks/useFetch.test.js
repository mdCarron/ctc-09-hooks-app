import { renderHook } from "@testing-library/react-hooks";
import { useFetch } from "../../hooks/useFetch";

describe("useFetch.js", () => {
  test("should return default values", () => {
    const url = "https://www.breakingbadapi.com/api/quotes/1";
    const { result } = renderHook(() => useFetch(url));
    const { data, loading, error } = result.current;

    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(false);
  });

  test("should fetch and set indicated values", async () => {
    const url = "https://www.breakingbadapi.com/api/quotes/1";
    const { result, waitForNextUpdate } = renderHook(() => useFetch(url));
    await waitForNextUpdate();

    const { data, loading, error } = result.current;
    expect(data.length).toBe(1);
    expect(loading).toBe(false);
    expect(error).toBe(false);
  });

  test("should handle fetch error", async () => {
    const urlError = "https://reqres.in/apierror/users?page=2";
    const { result, waitForNextUpdate } = renderHook(() => useFetch(urlError));
    await waitForNextUpdate();

    const { data, loading, error } = result.current;
    expect(data).toBe(null);
    expect(loading).toBe(false);
    expect(error).toBe("Error en el fetch, informacion no disponible.");
  });
});
