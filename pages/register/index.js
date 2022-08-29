import React from "react";
import Layouts from "../../components/Layout";
import RegisterPicture from "../../assets/register-image.png";
import CloseIcon from "../../assets/Close.svg";
import GoogleIcon from "../../assets/google-logo.svg";
import Image from "next/image";
import Button from "./button.component";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { useGameProject } from "../../hooks";
import Loading from "../../components/Loading";
import { useRouter } from "next/router";

function Index() {
  const {
    handleRegister,
    email,
    setEmail,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    password,
    setPassword,
    setConfirmPassword,
    confirmPassword,
    isLoading,
  } = useGameProject();
  const router = useRouter();
  return (
    <Layouts title="Register">
      {isLoading && <Loading colors="#FFC100" />}
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

        <Fade delay={500} className="mx-[5%] w-full">
          <div className="relative flex justify-center items-center w-full">
            <div className="border relative rounded-2xl shadow-md mx-20 px-[49px] max-w-[561px] bg-orange-400">
              <div
                className="absolute top-3 right-3 w-10 h-10 rotate-0 hover:rotate-180 transition-all duration-300"
                onClick={() => {
                  router.push("/");
                }}
              >
                <Image src={CloseIcon} priority alt="close" />
              </div>
              <h2 className="text-white font-semibold text-3xl text-center my-11">
                Register
              </h2>
              <div className="w-[300px]">
                <p className="mt-2 font-normal text-white text-l">Email</p>
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
                <div className="flex justify-between gap-x-2">
                  <div className="text-center">
                    <p className="mt-2 font-normal text-white text-l">
                      First Name
                    </p>
                    <input
                      className="mt-2 w-full rounded-full py-1 px-2"
                      type="text"
                      name="firstName"
                      id="firstName"
                      value={firstName}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="text-center">
                    <p className="mt-2 font-normal text-white text-l">
                      Last Name
                    </p>
                    <input
                      className="mt-2 w-full rounded-full py-1 px-2"
                      type="text"
                      name="lastName"
                      id="lastName"
                      value={lastName}
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <p className="mt-2 font-normal text-white text-l">Password</p>
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
                <p className="mt-2 font-normal text-white text-l">
                  Confirm Password
                </p>
                <input
                  className="mt-2 w-full rounded-full py-1 px-2"
                  type="password"
                  name="confirm_password"
                  id="confirm_password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
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
              <div className="flex items-center justify-center mt-12 mb-2">
                <Button
                  className="bg-orange-600"
                  text="Register"
                  onClick={handleRegister}
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
