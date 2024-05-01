import { useEffect, useRef, useState } from "react";

export const Inputs = () => {
  const numberOfInputs = Array(4).fill(1);
  const [currentlyFocused, setcurrenltyFocused] = useState<null | string>(null);
  const [key, setKey] = useState<null | string>(null);
  const ref1 = useRef<null | HTMLInputElement>(null);
  const ref2 = useRef<null | HTMLInputElement>(null);
  const ref3 = useRef<null | HTMLInputElement>(null);
  const ref4 = useRef<null | HTMLInputElement>(null);

  const refMap = new Map<
    string,
    React.MutableRefObject<HTMLInputElement | null>
  >([
    ["ref1", ref1],
    ["ref2", ref2],
    ["ref3", ref3],
    ["ref4", ref4],
  ]);

  console.log(currentlyFocused);
  const handleChange = (
    setCurrentRef: React.Dispatch<React.SetStateAction<string | null>>,
    ref: string
  ) => {
    setCurrentRef(ref);
  };
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    setKey: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    setKey(e.key === "Enter" ? "Enter" : null);
  };

  useEffect(() => {
    ref1.current?.focus();
  }, []);

  useEffect(() => {
    if (currentlyFocused === "ref1" && key === "Enter") {
      setKey(null);
      ref2.current?.focus();
    }
    if (currentlyFocused === "ref2" && key === "Enter") {
      setKey(null);
      ref3.current?.focus();
    }
    if (currentlyFocused === "ref3" && key === "Enter") {
      setKey(null);
      ref4.current?.focus();
    }
  }, [key, currentlyFocused]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {numberOfInputs.map((input, i) => {
        const currentRef = refMap.get(`ref${(i + 1).toString()}`);

        return (
          <input
            key={i}
            onKeyDown={(e) => handleKeyDown(e, setKey)}
            ref={currentRef}
            onChange={() =>
              handleChange(setcurrenltyFocused, `ref${(i + 1).toString()}`)
            }
            type='text'
          />
        );
      })}
    </div>
  );
};
