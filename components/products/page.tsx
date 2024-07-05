import {
  ArrowRightOutlined,
  BarChartOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Button } from "antd";
import React, { useEffect } from "react";
import "./style.css";
import Link from "next/link";
import useLikeStore from "@/store/likes/page";
import {toast} from 'react-toastify'
import Cookies from "js-cookie";

function page({datas}:any) {
  const number = Math.ceil(datas.price / 12)
  const {postLikes, getLikes} = useLikeStore()


  async function handleLikePost(id:number){
    const response = await postLikes({product_id:id})
    if(response.status == 201){
      await getLikes({id: Number(Cookies.get('id'))})
      toast.success('Like successful')
    }else{
      toast.error('Like failed You have need login')
    }
  }

  return (
    <div className="w-[305px] h-[490px] pt-[50px] pb-[36px] px-[30px] bg-white rounded-xl max-sm:w-[168px] max-sm:h-[320px] max-sm:p-[5px]">
        <Link onClick={() => Cookies.set('product_id', datas.id)} href={'/product'}>
        <img
          src={datas.images[0]}
          alt="IMG"
          className="w-[150px] h-[160px] mx-auto max-sm:w-[80px] max-sm:h-[80px] max-sm:object-cover bg-transparent"
        />
        <p className="mt-[36px] text-[16px] mb-[16px] max-sm:mt-[5px] max-sm:text-[14px] max-sm:mb-[2px]">
          {datas.name}
        </p>
        <h4 className="font-bold text-[18px] max-sm:text-[16px]">{datas.price} so‘m</h4>
        <p className="text-[#1EB91E] mt-[11px] mb-[19px] bg-[#1EB91E14] inline-block py-2 px-4 rounded-lg max-sm:text-[14px]">
          {number} so’mdan/12 oy
        </p>
        </Link>
        <div className="flex max-sm:flex-col items-center justify-between gap-[10px]">
          <Button className="btn_product max-sm:w-[100%]">
            Savat <ArrowRightOutlined />
          </Button>
         <div className="flex item-center gap-[10px]">
         <Badge>
            <Avatar
              shape="square"
              size="large"
              className="bg-[#F0F0F0] cursor-pointer"
              // onClick={() => handleLikePost(datas.id)}
            >
              <HeartOutlined className="text-[20px] text-[black]" />
            </Avatar>
          </Badge>
          <Badge>
            <Avatar
              shape="square"
              size="large"
              className="bg-[#F0F0F0] cursor-pointer"
            >
              <BarChartOutlined className="text-[20px] text-[black]" />
            </Avatar>
          </Badge>
         </div>
        </div>
      </div>
  );
}

export default page;