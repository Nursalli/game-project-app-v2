import React, { useEffect, useState } from "react";
import Layouts from "../../../components/Layout";
import Input from "../../../module/profile/components/Input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import moment from "moment";

import { useDispatch, useSelector } from "react-redux";
import {
  setFirstName,
  setLastName,
  setBio,
  setBirthday,
  setCountry,
} from "../../../module/profile/reducer/profile-edit.reducer";
import Loading from "../../../components/Loading";
import { useProfileEditService } from "../../../module/profile/services/service";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import authUser from "../../../utils/authUser";

function Index() {
  const { isLoading } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const router = useRouter();
  const { user } = useSelector((state) => state.profileEdit);
  const { handleGetBio, handlePostEditProfile, handleUpload } =
    useProfileEditService();
  const [file, setFile] = useState(undefined);
  const [ableChange, setAbleChange] = useState(false);

  function handleChange(event) {
    if (event.target.files.length > 0) {
      setAbleChange(true);
      setFile(event.target.files[0]);
    }
  }

  useEffect(() => {
    if (ableChange) {
      Swal.fire({
        title: "Are you sure?",
        text: "You will upload this image",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, upload it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await handleUpload(file);
        }
      });
    }
  }, [file]);

  useEffect(() => {
    const fetchData = async () => {
      await handleGetBio(await authUser());
    };
    fetchData();
  }, []);

  return (
    <Layouts title="Edit Profile">
      <Navbar />
      {isLoading && <Loading colors="#FFC100" />}
      <div className="flex h-screen lg:h-full justify-center items-center">
        <div className="flex h-screen justify-center items-center w-full">
          <div className="m-auto w-1/2">
            <button
              onClick={() => router.push(`/profile/${user.id}`)}
              className="text-[#247BA0]"
            >
              back to my profile
            </button>
            <div className="border rounded-2xl shadow-md mt-2">
              <div className="mx-6">
                <p className="font-normal text-black text-l mt-6">
                  Upload new picture
                </p>
                <input
                  type="file"
                  className="form-control
                  block
                  w-full
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
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                  id="profilePic"
                  onChange={handleChange}
                />
                <Input title="Email" type="email" disabled value={user.email} />
                <div className="grid grid-cols-2 gap-4">
                  <div className="form-group">
                    <Input
                      placeholder="First name"
                      title="First name"
                      value={user.firstName}
                      onChange={(e) => {
                        dispatch(setFirstName(e.target.value));
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <Input
                      placeholder="Last name"
                      title="Last name"
                      value={user.lastName}
                      onChange={(e) => {
                        dispatch(setLastName(e.target.value));
                      }}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="form-group">
                    <Input
                      placeholder="Country"
                      title="Country"
                      value={user.country}
                      onChange={(e) => {
                        dispatch(setCountry(e.target.value));
                      }}
                    />
                  </div>
                  <div className="form-group mt-6">
                    <p className="font-normal text-black text-l">Birthday</p>
                    <DatePicker
                      selected={new Date(user.birthday)}
                      onChange={(date) => {
                        console.log(moment(date).format("yyyy-MM-DD"));
                        dispatch(
                          setBirthday(moment(date).format("yyyy-MM-DD"))
                        );
                      }}
                    />
                  </div>
                </div>
                <p className="font-normal text-black text-l mt-6">Bio</p>
                <textarea
                  rows="5"
                  className="form-control
                    block
                    w-full
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
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                  id="bio"
                  value={user.bio}
                  onChange={(e) => {
                    dispatch(setBio(e.target.value));
                  }}
                ></textarea>
                <div className="grid grid-cols-4 gap-4 mt-6 mb-6">
                  <div
                    className="form-group col-span-3 text-center rounded border bg-[#70C1B3]"
                    onClick={() => handlePostEditProfile(file)}
                  >
                    <button className="p-2 font-semibold">Submit</button>
                  </div>
                  <div
                    className="form-group text-center rounded text-[#70C1B3] border border-[#70C1B3]"
                    onClick={() => router.push(`/profile/${user.id}`)}
                  >
                    <button className="p-2 font-semibold">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layouts>
  );
}

export default Index;
