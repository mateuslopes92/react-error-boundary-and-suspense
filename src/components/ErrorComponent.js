
const ErrorComponent = () => {
  throw new Error("I crashed!");
  return <div>This will never be rendered</div>;
};

export default ErrorComponent;