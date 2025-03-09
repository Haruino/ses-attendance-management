"use client";

import React, { useEffect, useRef, useState } from "react";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import Humbergermenu from "./Humbergermenu";

const Header = () => {
  const [cunrrentTime, setCurrentTime] = useState(
    format(new Date(), "yyyy年MM月dd日（E）HH:mm:ss", { locale: ja })
  );
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const updateDateTime = () => {
      setCurrentTime(
        format(new Date(), "yyyy年MM月dd日（E）HH:mm:ss", { locale: ja })
      );
    };
    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex justify-between bg-white  p-4">
        <h1 className="text-2xl font-bold">SES勤怠管理アプリ（仮）</h1>
        <div className="flex items-center ">
          {isClient && <p className="mr-4">{cunrrentTime}</p>}
          <Humbergermenu />
        </div>
      </div>
    </>
  );
};

export default Header;
