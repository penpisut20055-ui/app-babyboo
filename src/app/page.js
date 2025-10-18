'use client'
import { useState } from "react"

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  return (
    <div>
      <p>
        my name is peepeenuy                                                    
      </p>
    </div>
  );
}

//function Header() {
  //return (
   //<div>
    //<p>a rai ka baby</p>
   //</div>
  //);
//}

function Counter(){
  const [count, setCount] = useState(0)
  return(
    <div>
    0
    <button type="button" onClick={() => setCount(count+1)} >Increase</button>
    <button type="button" >Decrease</button>
    <button type="Reset"></button>
    </div>
  )
};

function Footer(){
  return(
    <div>
      <p>ohhhhhh ahhh</p>
      </div>
  )
};