import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CTSanPham from '../components/ct_san_pham';

function ChiTietSanPham(props) {

    const [sanPham, setSanPham] = useState({})
    let { spID } = useParams(); // Lay tham so spID tren URL

    useEffect(() => {
        async function getDatFromAPI() {
            var response = await fetch(`http://127.0.0.1:8000/api/san-pham/${spID}`);
            var json = await response.json();
            setSanPham(json.data)
        }
    
        getDatFromAPI();
    }, []);

    const sanPhamUI = () => {
        if (Object.keys(sanPham).length > 0) {
            return <CTSanPham data={sanPham}/>
        }
        return <></>
    }

    return (
        <>
            {
                sanPhamUI()
            }
        </>
    )
}

export default ChiTietSanPham;