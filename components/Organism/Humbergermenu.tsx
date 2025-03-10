"use client";
import React, { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "../atom/MenuLink";

const Humbergermenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // メニュー外をクリックしたら閉じる
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      {/* ハンバーガーボタン */}
      <button
        className="p-2 rounded-md bg-gray-200 hover:bg-gray-300 transition"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* メニュー */}
      {isOpen && (
        <div className="absolute right-0 mt-4 bg-white shadow-lg  w-48 p-2">
          <h3 className="text-gray-700 font-semibold border-b pb-2 pl-4">
            テスト太郎
          </h3>
          <ul className="mt-2 space-y-2">
            <Link menu="マイページ" href="#" />
            <Link menu="勤怠管理ページ" href="#" />
            <Link menu="ログアウト" href="#" className="text-red-500" />
          </ul>
        </div>
      )}
    </div>
  );
};

export default Humbergermenu;
