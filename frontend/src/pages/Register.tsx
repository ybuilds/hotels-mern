import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as api from "../api.ts";

export type RegisterForm = {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  confirmPassword: string
};

const Register = () => {
  const { register, watch, handleSubmit, formState: { errors } } = useForm<RegisterForm>();

  const mutation = useMutation({
    mutationFn: api.register,
    onSuccess: (data: any) => {
      console.log("Registration successful", data);
    },
    onError: (err: Error) => {
      console.log("Something went wrong", err);
    }
  });

  const registerForm = handleSubmit((data) => {
    console.log(data);
    mutation.mutate(data);
  });

  return (
    <form className="flex flex-col gap-4" onSubmit={registerForm}>
      <h2 className="text-3xl font-bold">Create an account</h2>
      
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col flex-1">
          <p className="font-semibold">First name</p>
          <input className="border border-gray-300 rounded px-2 py-2" type="text" {...register("firstName", {required: "First name is required"})}/>
          {errors.firstName && <span className="text-red-500 font-bold">{errors.firstName.message}</span>}
        </div>

        <div className="flex flex-col flex-1">
          <p className="font-semibold">Last name</p>
          <input className="border border-gray-300 rounded px-2 py-2" type="text" {...register("lastName", {required: "Last name is required"})}/>
          {errors.lastName && <span className="text-red-500 font-bold">{errors.lastName.message}</span>}
        </div>
      </div>

      <div className="flex flex-col">
        <p className="font-semibold">Email</p>
        <input className="border border-gray-300 rounded px-2 py-2" type="email" {...register("email", {required: "Email name is required"})}/>
        {errors.email && <span className="text-red-500 font-bold">{errors.email.message}</span>}
      </div>

      <div className="flex flex-col">
        <p className="font-semibold">Password</p>
        <input className="border border-gray-300 rounded px-2 py-2" type="password" {...register("password", {required: "First name is required", minLength: {value: 8, message: "Password must be at least 8 characters"}, maxLength: {value: 20, message: "Password must be at most 20 characters"}})}/>
        {errors.password && <span className="text-red-500 font-bold">{errors.password.message}</span>}
      </div>
      
      <div className="flex flex-col">
        <p className="font-semibold">Confirm Password</p>
        <input className="border border-gray-300 rounded px-2 py-2" type="password" {...register("confirmPassword", {validate: (val) => {
          if(!val)
            return "Confirm password is required";
          else if(watch("password") != val)
            return "Passwords do not match";
        }})}/>
        {errors.confirmPassword && <span className="text-red-500 font-bold">{errors.confirmPassword.message}</span>}
      </div>

      <div className="flex justify-between">
        <Link to="/sign-in">Already registered? <u>Sign in here</u></Link>
        <button type="submit" className="bg-blue-700 hover:bg-blue-800 transition text-white px-4 py-2 rounded cursor-pointer">Register</button>
      </div>
    </form>
  );
};

export default Register;