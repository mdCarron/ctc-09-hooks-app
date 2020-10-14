import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState({ data: null, loading: true, error: null });

  useEffect(() => {
    setData({ data: null, loading: true, error: false });
    fetch(url)
      .then((resp) => resp.json())
      .then((data) =>
        setData({
          data,
          loading: false,
          error: false,
        })
      );
  }, [url]);

  return data;
};
