import React from "react";
import Layouts from "../../components/Layout";
import RegisterPicture from "../../assets/register-image.png";
import GoogleIcon from "../../assets/google-logo.svg";
import Image from "next/image";
import Button from "./button.component";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

function Index() {
  return (
    <Layouts title="Login">
      <div className="flex lg:h-full justify-center items-center">
        <div className="relative h-screen w-full">
          <Fade className="">
            <Image
              src={RegisterPicture}
              alt="login picture"
              layout="fill"
              objectFit="cover"
              priority
            />
          </Fade>
        </div>

        <Fade delay={500} className="mx-[5%]">
          <div className="flex justify-center items-center w-full">
            <div className="border rounded-2xl shadow-md mx-20 px-[49px] max-w-[561px] bg-orange-400">
              <h2 className="text-white font-semibold text-3xl text-center my-11">
                Register
              </h2>
              <div className="w-[300px]">
                <p className="mt-6 font-normal text-white text-l">Email</p>
                <input
                  className="mt-2 w-full rounded-full py-1 px-2"
                  type="email"
                  name="email"
                  id="email"
                />
                <p className="mt-6 font-normal text-white text-l">Password</p>
                <input
                  className="mt-2 w-full rounded-full py-1 px-2"
                  type="password"
                  name="password"
                  id="password"
                />
                <p className="mt-6 font-normal text-white text-l">
                  Confirm Password
                </p>
                <input
                  className="mt-2 w-full rounded-full py-1 px-2"
                  type="password"
                  name="confirm_password"
                  id="confirm_password"
                />
              </div>
              <p className="text-white font-semibold text-xs pt-3">
                Already have account ?{" "}
                <Link href={"/login"}>
                  <a
                    className="text-black hover:text-white transition duration-300 ease-in-out"
                    href=""
                  >
                    Login here
                  </a>
                </Link>
              </p>
              <div className="flex items-center justify-center mt-14 mb-2">
                <Button className="bg-orange-600" text="Register" />
              </div>
              <div className="flex items-center justify-center mb-12.5">
                <Button
                  className="bg-gradient-to-r from-purple-500 to-orange-600"
                  icon={GoogleIcon}
                  auth={true}
                />
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </Layouts>
  );
}

export default Index;
