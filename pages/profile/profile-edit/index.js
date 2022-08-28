import React, { useState } from "react";
import Layouts from "../../../components/Layout";
import Input from "./components/Input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Index() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Layouts title="Edit Profile">
      <div className="flex h-screen lg:h-full justify-center items-center">
        <div className="flex h-screen justify-center items-center w-full">
          <div className="m-auto w-1/2">
            {/**
            TODO: Adjustment url back to my profile
             */}
            <a href="#" className="text-[#247BA0]">
              back to my profile
            </a>
            <div className="border rounded-2xl shadow-md mt-2">
              <div className="mx-6">
                <Input title="Upload new picture" type="file" />
                <Input title="Email" type="email" disabled />
                <div className="grid grid-cols-2 gap-4">
                  <div className="form-group">
                    <Input placeholder="First name" title="First name" />
                  </div>
                  <div className="form-group">
                    <Input placeholder="Last name" title="Last name" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="form-group">
                    <Input placeholder="Country" title="Country" />
                  </div>
                  <div className="form-group mt-6">
                    <p className="font-normal text-black text-l">Birthday</p>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
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
                ></textarea>
                <div className="grid grid-cols-4 gap-4 mt-6 mb-6">
                  <div className="form-group col-span-3 text-center rounded border bg-[#70C1B3]">
                    <button className="p-2 font-semibold">Submit</button>
                  </div>
                  <div className="form-group text-center rounded text-[#70C1B3] border border-[#70C1B3]">
                    {/**
                    TODO: Adjustment cancel button direction
                    */}
                    <button className="p-2 font-semibold">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
}

export default Index;
