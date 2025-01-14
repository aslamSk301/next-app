"use client";
import Image from "next/image";
import logo from "../../public/icons8-google.svg";
import logol from "../../public/5359105.jpg";
import { useFormik } from "formik";
import * as Yup from "yup";

const schema = new Yup.ObjectSchema().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required"),
});

const YupFormick = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: () => {},
  });
  const { values, handleChange, errors, handleSubmit } = formik;
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
          <div className="  relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
            <div className="flex flex-col justify-center p-8 md:p-14 ">
              <span className="mb-3 text-4xl font-bold">Welcome Back</span>
              <span className="mb-8 text-gray-400 font-light">
                Welcome Back! Pleace Enter Your Details{" "}
              </span>
              <div className="py-4">
                <span className="mb-2 text-md"></span>Email
              </div>
              <input
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                placeholder="Enter Your Email"
                type="text"
                name="email"
                id="email"
                onChange={handleChange}
                value={values.email}
              />
               <div className="border border-transparent">
                  {errors.email ? (
                    <div className="text-red-500">{errors.email}</div>
                  ) : <div className="text-gray-400" >example@gmail.com</div>}
                </div>

              <div className="py-4 ">
                <span className="mb-2 text-md">Password</span>
                <input
                  className="w-full p-2 border border-gray-300 rounded-md  placeholder:font-light placeholder:text-gray-500"
                  type="password"
                  name="password"
                  placeholder="Enter a password"
                  onChange={handleChange}
                  value={values.password}
                />
                <div className="border border-transparent">
                  {errors.password ? (
                    <div className="text-red-500">{errors.password}</div>
                  ) : <div className="text-gray-400">Example !Lov3MyPiano</div>}
                </div>
              </div>
              <div className="flex justify-between w-full py-4">
                <div className="mr-24">
                  <input className="mr-2" type="checkbox" name="ch" id="ch" />
                  <span className="text-md">Remember for 30 days</span>
                </div>
                <span className="font-bold text-md cursor-pointer ">
                  Forgot password
                </span>
              </div>
              <button
                className="w-full bg-black text-white p-2 rounded-lg mb-6 border border-transparent
            hover:bg-white hover:text-black hover:border hover:border-gray-300 "
              >
                Sign-in
              </button>
              <button className=" flex justify-center items-center w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white ">
                <Image
                  className="inline mr-2"
                  src={logo}
                  width={30}
                  height={30}
                  alt="logo"
                />
                Sign in with Google
              </button>
              <div className="text-center text-gray-400 ">
                Don't have an account?
                <span className="font-bold text-black cursor-pointer">
                  Sign up for free
                </span>
              </div>
            </div>
            <div className=" relative  hidden md:block">
              <Image
                src={logol}
                alt="front"
                className="w-[640px] h-full rounded-r-2xl md:block object-cover"
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default YupFormick;
