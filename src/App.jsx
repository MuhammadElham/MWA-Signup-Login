import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";

function App() {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <Login className="w-full text-center text-5xl p-6 font-mono font-bold mb-5 bg-red-500 hover:bg-blue-500 hover:text-red-500" />
        <SignUp className="w-full text-center text-5xl p-6 font-mono font-bold bg-blue-500 hover:bg-red-500 hover:text-blue-500" />
      </div>
    </>
  );
}

export default App;
