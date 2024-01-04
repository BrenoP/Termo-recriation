import { useEffect, useState } from "react";

export default function OneSecondComponent({ children }: any) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
    }, 1650);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return show ? children : null;
}