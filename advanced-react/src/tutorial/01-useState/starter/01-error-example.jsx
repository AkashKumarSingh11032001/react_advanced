const ErrorExample = () => {
  let count = 0;

  const OnIncrement = () => {
    count = count + 1;
    console.log(count);
  };

  return (
    <>
      <h2>{count}</h2>
      <button type="button" className="btn" onClick={OnIncrement}>Increment</button>
    </>
  );
};

export default ErrorExample;
