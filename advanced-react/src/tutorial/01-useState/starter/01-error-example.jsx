const ErrorExample = () => {
  let count = 0;

  const OnIncrement = () => {
    count = count + 1;
    console.log(count);
  };

  return (
    <>
      <h1>{count}</h1>
      <button type="button" onClick={OnIncrement}>Increment</button>
    </>
  );
};

export default ErrorExample;
