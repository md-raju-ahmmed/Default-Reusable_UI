import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Output form data to console
  };

  return (
    <div>
      <h2>Already have an account!</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("username", { required: true })}
          placeholder="Username"
          className="w-[230px] border py-1 px-2 rounded-md"
        />
        <br /><br />

        <input
          {...register("email", { required: true })}
          placeholder="Email"
          type="email"
          className="w-[230px] border py-1 px-2 rounded-md"
        />
        <br /><br />

        <input
          {...register("password", { required: true })}
          placeholder="Password"
          type="password"
          className="w-[230px] border py-1 px-2 rounded-md"
        />
        <br /><br />

        <button
          type="submit"
          className="bg-amber-500 text-white w-[130px] py-1 px-2 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
