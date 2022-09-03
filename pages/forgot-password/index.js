import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import Footer from "../../components/Footer";
import Layouts from "../../components/Layout";
import Loading from "../../components/Loading";
import Navbar from "../../components/Navbar";
import { useFirebaseService } from "../../services/firebase";

const ForgotPassword = () => {
  const { isLoading } = useSelector((state) => state.app);
  const { sendResetPasswordFirebase } = useFirebaseService();
  const [email, setEmail] = useState("");
  return (
    <Layouts title="Edit Profile">
      <Navbar />
      {isLoading && <Loading colors="#FFC100" />}
      <div className="flex h-screen justify-center items-center">
        <div className="grid grid-cols-1 w-1/2 -mt-[15%]">
          <div className="text-2xl font-bold text-center mb-4">
            Forgot Password
          </div>
          <input
            type="email"
            className="form-control
          text-center
          block
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          mb-10
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
            id="exampleInput124"
            placeholder="example@mail.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div className="m-auto">
            <button
              className="bg-[#FFC001] hover:bg-[#FF8200] text-white font-bold py-2 px-4 rounded "
              onClick={() => {
                if (email !== "") {
                  sendResetPasswordFirebase(email);
                } else {
                  Swal.fire({
                    icon: "warning",
                    text: "Email cannot be empty",
                  });
                }
              }}
            >
              Send new password
            </button>

            <div className="grid grid-cols-2 gap-4"></div>

            <div className="grid grid-cols-4 gap-4 mt-6 mb-6"></div>
          </div>
        </div>
      </div>
      <Footer />
    </Layouts>
  );
};

export default ForgotPassword;
