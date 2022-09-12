export const Functions = (): JSX.Element => {
  const add = (a: number, b: number): number => {
    return a + b;
  };

  return (
    <>
      <h3>Functions</h3>
      <span>The answer is: {add(10, 5)}</span>
    </>
  );
};
