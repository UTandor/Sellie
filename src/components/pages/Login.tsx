import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const Login = () => {
  return (
    <div className="h-screen grid grid-cols-2">
      <div className="bg-accent-foreground items-center justify-center pb-[10%] flex flex-col">
        <img src="src\assets\Mascot.png" alt="" height={600} width={600} />
        <p className="text-white font-semibold  text-center text-lg md:text-2xl lg:text-3xl">
          Transform every interaction <br />
          into an opportunity
        </p>
      </div>
      <div className="flex flex-col py-12 space-y-16">
        <div className="font-semibold text-2xl text-center">
          You are one step away from <br /> revolutionizing your business with
          A.I.
        </div>
        <div className="flex flex-col">
          <button className="px-8 items-center py-4 border flex gap-2 border-slate-200 bg-gray-100 text-gray-500 font-secondary  rounded-full mx-auto hover:shadow transition duration-150">
            <img
              className="w-5 h-5 "
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              loading="lazy"
              alt="google logo"
            />
            <span>Log In with Google</span>
          </button>
          <div className="w-1/2 mx-auto mt-4">
            <div className="space-y-4 mt-8">
              <div className="grid w-full max-w-sm items-center gap-3 space-y-">
                <Label htmlFor="username" className="font-secondary opacity-70">
                  Username
                </Label>
                <Input
                  placeholder="johndoe@email.com"
                  id="username"
                  className="border-b px-0 placeholder:opacity-60"
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-3 space-y-1">
                <Label htmlFor="password" className="font-secondary opacity-70">
                  Password
                </Label>
                <Input
                  placeholder="johndoe@email.com"
                  id="password"
                  className="border-b px-0 placeholder:opacity-60"
                  type="password"
                />
              </div>
              <div className="flex justify-between py-4 w-full">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms">Remember</Label>
                </div>
                <div>
                  <Button>Login</Button>
                </div>
              </div>
              <div className="text-center py-4 flex  mx-auto w-full items-center justify-center space-x-1">
                <div className="opacity-70">Dont have an account?</div>
                <Link
                  to="/register"
                  className="font-medium opacity-100 hover:no-underline underline "
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;