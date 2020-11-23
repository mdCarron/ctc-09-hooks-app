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
      .then((data) => {
        if (isMounted.current) {
          setData({
            data,
            loading: false,
            error: false,
          });
        }
      })
      .catch(() => {
        setData({
          data: null,
          loading: false,
          error: "Error en el fetch, informacion no disponible.",
        });
      });
  }, [url]);

  return data;
};
