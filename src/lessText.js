import { useState } from "react";

function LassText(text, max=55) {
    const [showLass, sateShoweLass] = useState(true);

    if(text.length <= max){
        return(
            <span>
                {text}
            </span>
        )
    }else{
        return(
            <span>
                {showLass ? `${text.substring(0, max)}...` : text}
                <a href="#" onClick={(evn) => {
                    evn.preventDefault();
                    sateShoweLass(!showLass);
                }}>{showLass ? "more" : "lass"}</a>
            </span>
        )
    }
}

export default LassText;