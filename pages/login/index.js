import React, { useState } from "react";
import Layouts from "../../components/Layout";
import LoginPicture from "../../assets/login-image.png";
import GoogleIcon from "../../assets/google-logo.svg";
import Image from "next/image";
import Button from "./button.component";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import Loading from "../../components/Loading";

function Index() {
  const [loading, setLoading] = useState(false);

  return (
    <Layouts title="Login">
      {loading && <Loading colors="#FFC100"/>}
      <div className="flex lg:h-full justify-center items-center">
        <div className="relative h-screen w-full">
          <Fade>
            <Image
              src={LoginPicture}
              alt="login picture"
              layout="fill"
              objectFit="cover"
              priority
            />
          </Fade>
        </div>
        <Fade delay={500} className="mx-[5%]">
          <div className="flex justify-center items-center w-full">
            <div className="border rounded-2xl shadow-md mx-20 px-[49px] max-w-[561px] bg-purple-300">
              <h2 className="text-black font-semibold text-3xl text-center my-11">
                Login
              </h2>
              <div className="w-[300px]">
                <p className="mt-6 font-normal text-black text-l">Email</p>
                <input
                  className="mt-2 w-full rounded-full py-1 px-2"
                  type="email"
                  name="email"
                  id="email"
                />
                <p className="mt-6 font-normal text-black text-l">Password</p>
                <input
                  className="mt-2 w-full rounded-full py-1 px-2"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
              <p className="text-black font-semibold text-xs pt-3">
                Don’t have account ?{" "}
                <Link href={"/register"}>
                  <a
                    className="text-orange-600 hover:text-white transition duration-300 ease-in-out"
                    href=""
                  >
                    Register here
                  </a>
                </Link>
              </p>
              <div className="flex items-center justify-center mt-14 mb-2">
                <Button
                  className="bg-purple-600"
                  text="Login"
                  onClick={() => setLoading(true)}
                />
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
