import { useEffect, useRef } from "react";

export const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null!); // ! See without exclamation mark and with exclamation mark. Hover on useRef.

  // ? This is also known as "non-null assertion". By this we are confirming that useRef will never remain null

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};
