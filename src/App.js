import './App.css';
import './bootstrap-5.2.3/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import TrangChu from './pages/trang_chu';
import ChiTietSanPham from './pages/ct_san_pham';
import GioHang from './pages/gio_hang';
import ThanhToan from './pages/thanh_toan';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<TrangChu />}></Route>
                <Route path="/san_pham/:spID" element={<ChiTietSanPham />}></Route>
                <Route path="/gio_hang" element={<GioHang />}></Route>
                <Route path="/thanh_toan" element={<ThanhToan />}></Route>
            </Routes>
        </>
    );
}

export default App;


