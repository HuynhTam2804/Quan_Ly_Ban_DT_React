import { useState } from "react";

function SanPham(props) {
    return (
        <>
            <div className="san-pham">
                {/* <img src={props.info.url} /> */}
                <p>{props.info.ten}</p>
                <p>Gia ban: {props.info.gia_ban}</p>
                <button className="btn">Chọn mua</button>
            </div>
        </>
    );
}

export default SanPham;
