import { useEffect, useState } from 'react';
import Header from "../components/giao_dien/header";
import Footer from "../components/giao_dien/footer";
import LoaiSanPham from '../components/loai_san_pham';


// const dsLoaiSanPham = [
//   {
//     'ten': 'Loai san pham 1',
//     'ds_san_pham': [
//       {
//         'img': 'img/loai_dien_thoai_img/i1.png',
//         'ten': 'San pham 15',
//         'gia': 1000,
//       },
//       {
//         'img': 'img/loai_dien_thoai_img/i2.png',
//         'ten': 'Iphone 14',
//         'gia': 2000,
//       },
//     ],
//   },
//   {
//     'ten': 'Loai san pham 2',
//     'ds_san_pham': [
//       {
//         'img': 'img/loai_dien_thoai_img/sam6.png',
//         'ten': 'Iphone 13',
//         'gia': 11000,
//       },
//       {
//         'img': 'img/loai_dien_thoai_img/sam8.png',
//         'ten': 'San pham oppo',
//         'gia': 22000,
//       },
//     ],
//   },
// ]; 

function SanPham() {

	const [dsLoaiSanPham, setDSLoaiSanPham] = useState([]);

	useEffect(() => {
		async function getDataFromAPI() {
			try {
				const response = await fetch('http://127.0.0.1:8000/api/san-pham-danh-sach');
				const json = await response.json();
				setDSLoaiSanPham(json.data);
			} catch (error) {
				console.error(error);
			}
		}
		getDataFromAPI();
	}, []);

	const listlsp = dsLoaiSanPham.map(function (item) {
		return (
			<>
				< LoaiSanPham data={item} />
			</>
		);
	})

	return (
		<>
			<div className="App">
				<Header />
				<br />
				{listlsp}
				<br />
				<Footer />
			</div>
		</>
	);
}

export default SanPham;