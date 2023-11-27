import { NavLink } from "react-router-dom";

function Header() {
    return (
        <>
            <header>
                <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div class="container-fluid">
                        <NavLink to="/" className="navbar-brand">Trang Chủ</NavLink>
                        <ul class="navbar-nav me-auto mb-2 mb-md-0">
                            <li class="nav-item">
                                <NavLink to="/ve_chung_toi" className="nav-link active" aria-current="page">Về Chúng Tôi</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to="/san_pham" className="nav-link active">Sản Phẩm</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to="/tin_tuc" className="nav-link active">Tin Tức</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to="/lien_he" className="nav-link active">Liên Hệ</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to="/gio_hang" className="nav-link active" >Giỏ Hàng</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to="/thanh_toan" className="nav-link active">Thanh Toán</NavLink>
                            </li>
                        </ul>
                        <div class="col-md-3 text-end">
                            <button type="button" class="btn btn-outline-primary me-2">Login</button>
                            <button type="button" class="btn btn-primary">Sign-up</button>
                        </div>
                    </div>
                </nav>

                {/* <nav>
                    <NavLink to="/" >Trang Chủ</NavLink>
                    <NavLink to="/ve_chung_toi" >Về Chúng Tôi</NavLink>
                    <NavLink to="/san_pham" >Sản Phẩm</NavLink>
                    <NavLink to="/tin_tuc" >Tin Tức</NavLink>
                    <NavLink to="/lien_he" >Liên Hệ</NavLink>
                </nav>
                <div class="search-box">
                    <input type="text" placeholder="Tìm kiếm" />
                    <button type="submit">Tìm kiếm</button>
                </div>
                <div class="login-box">
                    <a href="#">Đăng nhập</a>
                    <a href="#">Đăng ký</a>
                </div>
                <div class="cart-box">
                    <a href="#">Giỏ hàng</a>
                </div> */}
            </header>
        </>
    );
}
export default Header;