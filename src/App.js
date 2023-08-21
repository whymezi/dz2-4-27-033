import React from "react";
const helloClick = (e) => {
    if(e.target.classList.contains('red')){
        e.target.classList.add('blue')
    }else{
        e.target.classList.add('red')
    }
}
class Square extends React.Component{
    render(){
        return(
            <div className="trwo">
                <button onClick={helloClick} className="red"></button>
                <button onClick={helloClick} className="blue"></button>
            </div>
        )
    }
}

export default Square;
