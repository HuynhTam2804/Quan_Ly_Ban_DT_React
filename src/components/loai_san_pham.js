import SanPham from "./san_pham";

function LoaiSanPham(props) {
    console.log(props.data);
    const listSanPhams = props.data.ds_san_pham.map(function(item){
        return (
            <SanPham info={item}/>
        );
    })
    return (
        <>
            <h1 className="ten-loai-san-pham">{ props.data.ten }</h1>
            <div>{listSanPhams}</div>
        </>
    );
}

export default LoaiSanPham;

