import React from "react";

const Qrcode = (props) => {
console.log(props)
    return (
        <div>Qr code:
            <p><a href={props.props[1]}><img src={props.props[0]} alt='Qr code'></img></a></p>
        </div>
    )

}

export default Qrcode



