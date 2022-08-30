import React from "react";
import Layouts from "../../components/Layout";
import LoginPicture from "../../assets/login-image.png";
import CloseIcon from "../../assets/Close.svg";
import GoogleIcon from "../../assets/google-logo.svg";
import Image from "next/image";
import Button from "./button.component";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import Loading from "../../components/Loading";
import { useGameProject } from "../../hooks";
import { useRouter } from "next/router";

function Index() {
  const { handleLogin, email, setEmail, password, setPassword, isLoading } =
    useGameProject();
  const router = useRouter();
  return (
    <Layouts title="Login">
      {isLoading && <Loading colors="#FFC100" />}
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
        <Fade delay={500} className="mx-[5%] w-full">
          <form className="relative flex justify-center items-center ">
            <div className="relative border rounded-2xl shadow-md mx-20 px-[49px] max-w-[561px] bg-purple-300">
              <div
                className="absolute top-3 right-3 w-10 h-10 rotate-0 hover:rotate-180 transition-all duration-300"
                onClick={() => {
                  router.push("/");
                }}
              >
                <Image src={CloseIcon} priority alt="close" />
              </div>
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
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <p className="mt-6 font-normal text-black text-l">Password</p>
                <input
                  className="mt-2 w-full rounded-full py-1 px-2"
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
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
                  onClick={handleLogin}
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
          </form>
        </Fade>
      </div>
    </Layouts>
  );
}

export default Index;
