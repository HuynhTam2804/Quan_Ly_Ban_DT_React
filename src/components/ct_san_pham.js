function CTSanPham(props) {

    const chonMuaHandler=()=>{
        var sanPham = {id: props.data.id, ten: props.data.ten, so_luong: 1};

        var cartItems = localStorage.getItem('cartItems');
        if (cartItems == null) {
            cartItems = [sanPham];
        } else {
            cartItems = JSON.parse(cartItems);
            var i=0;
            for(; i<cartItems.length; i++) {
                if (cartItems[i].id === sanPham.id) {
                        cartItems[i].so_luong += sanPham.so_luong;
                    break;
                }
            }
            if (i === cartItems.length) {
                cartItems.push(sanPham);
            }
        }
        
        console.log(cartItems);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        alert('Thêm sản phẩm vào giỏ hàng thành công');
    }

    return (
        <>
            <h1>Chi tiết sản phẩm</h1>
            <h2>{props.data.ten}</h2>
            <p>Loại sản phẩm: {props.data.loai_san_pham.ten}</p>
            <p>Giá bán: {props.data.gia_ban} VND</p>
            <button onClick={chonMuaHandler}>Chọn mua</button>
        </>
    );
}

export default CTSanPham;
