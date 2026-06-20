import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as api from "../api.ts";

export type SignInForm = {
  email: string, 
  password: string
}

const SignIn = () => {
  const { register, handleSubmit, formState: { errors }} = useForm<SignInForm>();

  const mutation = useMutation({
    mutationFn: api.signin,
    onSuccess: (data: any) => {
      console.log("Sign in successful", data);
    },
    onError: (err: Error) => {
      console.log("Something went wrong", err);
    }
  });

  const signInForm = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <form className="flex flex-col gap-4" onSubmit={signInForm}>
      <h2 className="text-3xl font-bold">Sign In</h2>

      <div className="flex flex-col">
        <p className="font-semibold">Email</p>
        <input className="border border-gray-300 px-1 py-2 rounded" type="email" {...register("email", {required: "Email is required"})}/>
        {errors.email && <span className="text-red-500 font-bold">{errors.email.message}</span>}
      </div>

      <div className="flex flex-col">
        <p className="font-semibold">Password</p>
        <input className="border border-gray-300 px-1 py-2 rounded" type="password" {...register("password", {required: "Password is required"})}/>
        {errors.password && <span className="text-red-500 font-bold">{errors.password.message}</span>}
      </div>

      <div className="flex justify-between">
        <Link to="/register">Not a user? <u>Register here</u></Link>
        <button type="submit" className="bg-blue-700 hover:bg-blue-800 transition text-white px-4 py-2 rounded cursor-pointer">Sign In</button>
      </div>
    </form>
  );
};

export default SignIn;