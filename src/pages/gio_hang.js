import Header from "../components/giao_dien/header";
import Footer from "../components/giao_dien/footer";
import { useState, useEffect } from 'react';

function GioHang(props) {
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        var items = localStorage.getItem('cartItems');
        console.log(items);
        if (items != null) {
            setCartItems(JSON.parse(items));
        }
    }, []);

    const xoaHandler = (id) => {
        console.log('Xoa', id)
        var items = cartItems.filter((item) => item.id !== id);
        setCartItems(items);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

    const GioHang = () => {
        if (cartItems.length > 0) {
            return (
                <table border="1">
                    <tr>
                        <th>Tên Sản Phẩm</th>
                        <th>Giá Bán</th>
                        <th>Số Lượng</th>
                        <th>Mô Tả</th>
                        <th></th>
                    </tr>
                    {
                        cartItems.map(function (item) {
                            return (
                                <tr>
                                    <td>{item.ten}</td>
                                    <td>{item.gia_ban}</td>
                                    <td>{item.so_luong}</td>
                                    <td>{item.mo_ta}</td>
                                    <td><button onClick={() => xoaHandler(item.id)}>Xóa sản phẩm</button></td>
                                </tr>
                            );
                        })
                    }
                </table>
            )
        }
        return <>Không có sản phẩm nào trong giỏ hàng</>
    }

    const datHangHandler = () => {
        localStorage.removeItem('cartItems');
        setCartItems([]);
    }

    return (
        <>
            <div className="App">
                <Header />
                <br />
                {
                    GioHang
                }
                <p>
                    <button onClick={datHangHandler}>Đặt hàng</button>
                </p>
                <br />
                <Footer />
            </div>
        </>
    );
}

export default GioHang;