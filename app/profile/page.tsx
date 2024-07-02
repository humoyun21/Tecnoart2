"use client";
import React from "react";
import Container from "@/components/container/page";
import Image from "next/image";
import Profile from "@/images/profile.svg";

function page() {
  return (
    <div>
      <div>
        <Container>
          <p className="flex gap-[10px] mt-[20px]">
            <span className="block px-[18px] py-[6px] rounded bg-[#F5F5F5] text-[#240E0066] font-medium">
              Bosh sahifa
            </span>
            <span className="block px-[18px] py-[6px] rounded bg-[white] font-medium">
              Accout
            </span>
          </p>
        </Container>
      </div>

      <div>
        <Container>
          <div className="flex gap-[20px] mt-[24px] max-sm:flex-col max-sm:justify-center">
            <div className="bg-white  w-[380px] py-[44px] px-[30px] rounded-md max-sm:mx-auto ">
              <div className="flex justify-between items-center">
                <Image src={Profile} alt="profile" />
                <div className="mr-[60px]">
                  <h4 className="font-bold text-[18px] ">Ahmad Ben Bella</h4>
                  <p>Id8937657921</p>
                </div>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M7 2C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V12C22 11.4477 21.5523 11 21 11C20.4477 11 20 11.4477 20 12V17C20 18.6569 18.6569 20 17 20H7C5.34315 20 4 18.6569 4 17V7C4 5.34315 5.34315 4 7 4H12C12.5523 4 13 3.55228 13 3C13 2.44772 12.5523 2 12 2H7Z"
                      fill="#240E00"
                      fill-opacity="0.8"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M20.2071 3.79312C18.9882 2.57417 17.0119 2.57417 15.7929 3.79312L8.68463 10.9014C8.30015 11.2859 8.0274 11.7676 7.89552 12.2951L7.02988 15.7577C6.94468 16.0985 7.04453 16.459 7.29291 16.7073C7.54129 16.9557 7.90178 17.0556 8.24256 16.9704L11.7051 16.1047C12.2326 15.9729 12.7144 15.7001 13.0988 15.3156L20.2071 8.20733C21.4261 6.98838 21.4261 5.01207 20.2071 3.79312ZM17.2071 5.20733C17.645 4.76943 18.355 4.76943 18.7929 5.20733C19.2308 5.64524 19.2308 6.35522 18.7929 6.79312L11.6846 13.9014C11.5565 14.0296 11.3959 14.1205 11.2201 14.1644L9.37439 14.6259L9.83581 12.7802C9.87976 12.6044 9.97068 12.4438 10.0988 12.3156L17.2071 5.20733Z"
                      fill="#240E00"
                      fill-opacity="0.8"
                    />
                  </svg>
                </span>
              </div>
              <div className="mt-[53px]">
                <div className="cursor-pointer flex justify-between items-center py-[14px] px-[20px] bg-[#FF6F14] text-white font-medium rounded-md">
                  <p>Shaxsiy malumotlar</p>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.95833 3.53389C6.60889 3.8334 6.56842 4.35949 6.86794 4.70893L11.4031 9.99993L6.86794 15.2909C6.56842 15.6404 6.60889 16.1665 6.95833 16.466C7.30776 16.7655 7.83385 16.725 8.13337 16.3756L13.1334 10.5423C13.4009 10.2302 13.4009 9.76968 13.1334 9.45761L8.13337 3.62427C7.83385 3.27484 7.30776 3.23437 6.95833 3.53389Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
                <div className="cursor-pointer mt-[8px]  flex justify-between items-center py-[14px] px-[20px] bg-[#F0F0F0] text-black font-medium rounded-md">
                  <p>Xaridlar tarixi</p>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.95833 3.53389C6.60889 3.8334 6.56842 4.35949 6.86794 4.70893L11.4031 9.99993L6.86794 15.2909C6.56842 15.6404 6.60889 16.1665 6.95833 16.466C7.30776 16.7655 7.83385 16.725 8.13337 16.3756L13.1334 10.5423C13.4009 10.2302 13.4009 9.76968 13.1334 9.45761L8.13337 3.62427C7.83385 3.27484 7.30776 3.23437 6.95833 3.53389Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </div>
                <div className="cursor-pointer mt-[8px]  flex justify-between items-center py-[14px] px-[20px] bg-[#F0F0F0] text-black font-medium rounded-md">
                  <p>Yoqtirgan mahsulotlar</p>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.95833 3.53389C6.60889 3.8334 6.56842 4.35949 6.86794 4.70893L11.4031 9.99993L6.86794 15.2909C6.56842 15.6404 6.60889 16.1665 6.95833 16.466C7.30776 16.7655 7.83385 16.725 8.13337 16.3756L13.1334 10.5423C13.4009 10.2302 13.4009 9.76968 13.1334 9.45761L8.13337 3.62427C7.83385 3.27484 7.30776 3.23437 6.95833 3.53389Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </div>
                <div className="cursor-pointer mt-[8px]  flex justify-between items-center py-[14px] px-[20px] bg-[#F0F0F0] text-black font-medium rounded-md">
                  <p>To’lovlar tarixi</p>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.95833 3.53389C6.60889 3.8334 6.56842 4.35949 6.86794 4.70893L11.4031 9.99993L6.86794 15.2909C6.56842 15.6404 6.60889 16.1665 6.95833 16.466C7.30776 16.7655 7.83385 16.725 8.13337 16.3756L13.1334 10.5423C13.4009 10.2302 13.4009 9.76968 13.1334 9.45761L8.13337 3.62427C7.83385 3.27484 7.30776 3.23437 6.95833 3.53389Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white  w-[400px] py-[44px] px-[30px] rounded-md max-sm:mx-auto">
                <h4 className="font-black text-[24px] mb-[24px]">Shaxsiy malumotlar</h4>
                <p className="text-[16px] mb-[20px]">Ismi: <span className="font-bold text-18px">Ahmadboy</span></p>
                <p className="text-[16px] mb-[20px]">Fafilyasi: <span className="font-bold text-18px">Ben Bella</span></p>
                <p className="text-[16px] mb-[20px]">Telfon raqami:: <span className="font-bold text-18px">+998 99 300 30 30</span></p>
                <p className="text-[16px] mb-[20px]">Manzili: <span className="font-bold text-18px">Surxandaryo.v/Denov.t/</span></p>
                <p className="text-[16px] mb-[20px]">Aniq manzil: <span className="font-bold text-18px">Yoshlik-1.k/12-honodon</span></p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default page;