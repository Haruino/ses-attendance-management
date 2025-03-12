import React from "react"
import Humbergermenu from "./Humbergermenu"
import Logo from "../Atom/Logo"
import { CurrentTime } from "../Atom/CurrentTime"

const Header = () => {
  return (
    <>
      <div className="flex justify-between bg-white  p-4">
        <Logo />
        <div className="flex items-center ">
          <CurrentTime />
          <Humbergermenu />
        </div>
      </div>
    </>
  )
}

export default Header
