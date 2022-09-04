import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Layouts from "../../components/Layout";
import Navbar from "../../components/Navbar";
import { useFirebaseService } from "../../services/firebase";
import { useSelector } from "react-redux";
import Loading from "../../components/Loading";
import Swal from "sweetalert2";

const ResetPassword = () => {
  const { handleResetPassword } = useFirebaseService();
  const router = useRouter();
  const { oobCode } = router.query;
  const [password, setPassword] = useState("");
  const { isLoading } = useSelector((state) => state.app);

  return (
    <Layouts title="Edit Profile">
      <Navbar />
      {isLoading && <Loading colors="#FFC100" />}
      <div className="flex h-screen justify-center items-center">
        <div className="grid grid-cols-1 w-1/2 -mt-[15%]">
          <div className="text-2xl font-bold text-center mb-4">
            Reset your password
          </div>
          <div className="text-l text-center mb-1">New password</div>
          <input
            type="password"
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
            id="password"
            placeholder=""
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="m-auto">
            <button
              className="bg-[#FFC001] hover:bg-[#FF8200] text-white font-bold py-2 px-4 rounded "
              onClick={() => {
                if (password !== "") {
                  handleResetPassword(password, oobCode);
                } else {
                  Swal.fire({
                    icon: "warning",
                    text: "Password cannot be empty",
                  });
                }
              }}
            >
              Reset password
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

export default ResetPassword;
