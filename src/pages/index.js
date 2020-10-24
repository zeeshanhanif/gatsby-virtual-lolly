import { navigate } from "gatsby";
import React from "react"
import Header from "../component/Header"
//import Lolly from '../svg/lolly-image.svg'
import Lolly from '../component/Lolly'


export default function Home() {
  return (
    <div className="container">
      <Header />
      <div className="listLollies">
        <div>
          <Lolly fillLollyTop="#d52358" fillLollyMiddle="#e95946" fillLollyBottom="#deaa43"  />
        </div> 
        <div>
          <Lolly fillLollyTop="red" fillLollyMiddle="green" fillLollyBottom="blue"  />
        </div>  
      </div>
      <input type="button" value="Create New Lolly"
        onClick={
          ()=>{
            navigate("/createNew");
          }
        }
      ></input>
    </div>

  );
}
