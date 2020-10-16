import { useState, useEffect, useRef } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState({ data: null, loading: true, error: null });

  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setData({ data: null, loading: true, error: false });

    fetch(url)
      .then((resp) => resp.json())
      .then((data) =>
        setTimeout(() => {
          if (isMounted.current) {
            setData({
              data,
              loading: false,
              error: false,
            });
          } else {
            console.log("el setData no se llamó");
          }
        }, 2000)
      );
  }, [url]);

  return data;
};
