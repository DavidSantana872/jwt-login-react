import { useState } from "react";
import LabelBox from "../labelBox/LabelBox";
import "./style.css"
const InputText = ({typeInput, placeholderInput, nameInput} : {typeInput: string, placeholderInput: string, nameInput : string}) => {
    const [ChangeColor, setChangeColor] = useState("rgba(128, 128, 128, 0.219)")
    return(
        <div className="boxInput" style={{display:"flex", flexDirection: "column-reverse", border : `solid 1px ${ChangeColor}`}}>
            <input type={typeInput} placeholder={placeholderInput} onFocus={() => {
                setChangeColor("rgb(0, 119, 255)")
            }} onBlur={() => {
                setChangeColor("rgba(128, 128, 128, 0.219)")
            }}/>
            <LabelBox textLabel= {nameInput}></LabelBox>
        </div>
    )
}
export default InputText;