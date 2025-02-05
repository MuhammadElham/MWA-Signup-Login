import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";

function App() {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <Login />
        <SignUp />
      </div>
    </>
  );
}

export default App;
