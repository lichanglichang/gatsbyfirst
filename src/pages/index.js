import React from "react"
import Main from "../components/main"
import * as mainStyle from "./main.module.css"

export default function Home() {
  return ( <Main >
    <div className = {mainStyle.app}> 主页面 </div>  
    </Main >
  )
}