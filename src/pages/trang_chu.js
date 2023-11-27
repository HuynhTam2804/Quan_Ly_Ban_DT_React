import { useState,useEffect } from 'react';
import Header from "../components/giao_dien/header";
import Banner from "../components/giao_dien/banner";
import Footer from "../components/giao_dien/footer";
import LoaiSanPham from "../components/loai_san_pham";

function TrangChu(props){

    const [dsLoaiSanPham, setDSLoaiSanPham] = useState([])
  
    useEffect(() => {
        async function getDatFromAPI() {
        var response = await fetch('http://127.0.0.1:8000/api/loai-san-pham');
        var json = await response.json();
        setDSLoaiSanPham(json.data);
        }
      
        getDatFromAPI();

        // fetch('http://127.0.0.1:8000/api/loai-san-pham') // request len URL
        // .then((response) => { 
        //   var json = response.json()
        //   return json;
        // })// lay du lieu JSON tu response
        // .then((json) => {
        //   setDSLoaiSanPham(json.data)
        // }) // cap nhat trang thai dsLoaiSanPham tu du lieu JSON
    }, []);

    const listLoaiSanPhams = dsLoaiSanPham.map(function(lsp){
        return (
            <LoaiSanPham data={lsp}/>
        );
    });

    //render UI
    return(
        <>
            <div className="App">
                <Header/>
                <br/>
                <Banner/>
                <br/>
                {listLoaiSanPhams}
                <br/>
                <Footer/>
            </div>
        </>
    );
}
export default TrangChu;