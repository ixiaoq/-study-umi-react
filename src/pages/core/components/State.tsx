export default function Clock() {
  const state = {
    date: new Date().toLocaleTimeString(),
  };

  setInterval(() => {
    state.date = new Date().toLocaleTimeString();
  }, 1000);

  return (
    <div className="">
      <h1>Hello, world!</h1>
      <p>It is {state.date}</p>
    </div>
  );
}
