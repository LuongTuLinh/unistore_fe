import React, { useState, useEffect } from 'react'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import ElementButton from './ElementButton/ElementButton'
import TableData from './TableData/TableData'
import Pagination from '../components/Pagination/Pagination'

import CatalogApi from 'api/catalogApi'
import ModalProduct from './ModalProduct/ModalProduct'
import Alert from 'components/Alert/Alert';

export default function Product() {

    const [product, setProduct] = useState({
        battery: "",
        catalog: "",
        description: "",
        hardDrive: "",
        image: "",
        memory: "",
        name: "",
        os: "",
        price: 0,
        processer: "",
        quantity: 0,
        sold: 0,
        status: "1",
        wireless: "",
        graphics : "",
    })

    const [data, setData] = useState(
        {
        status : "faild",
        message : "Request products...",
        data : [
            {
                name : "",
                memory : "",
                description : "",
                status : "",
                catalog : "",
                hardDrive : "",
                os : "",
                processer : "",
                graphics : "",
                Wireless : "",
                battery : "",
                image : "",
                productID : 11,
                price : 0
            }
        ],
        pagination: {
            page : 1,
            totalPage: 1,
            totalRow: 1
        }

        }
    );

    const [page,setPage] = useState({ page : 1, limit: 10 });

    useEffect(() => {
        const fetchProductList = async () => {
        try {
            const response = await CatalogApi.getByAdmin(page);
            setData(response);
        } catch (error) {
            console.log("Failed to fetch product list ", error);
            setData({...data, status: "failed", message: "Failed to connect server"});
        }
        }

        fetchProductList();
    },[page])

    

    const handlePagination = (value) => {
        setPage({...page, page: value});
    }

    const noneModal = () => {
        const modal = document.getElementById('ModalUP');
        modal.classList.remove("show");
        modal.style.display = "none";
    }

    const showModal = (detail) => {
        if(!detail=="")
        {setProduct(detail);}
        else setProduct({battery: "",
            catalog: "",
            description: "",
            hardDrive: "",
            image: "",
            memory: "",
            name: "",
            os: "",
            price: 0,
            processer: "",
            quantity: 0,
            sold: 0,
            status: "1",
            wireless: "",
            graphics : "",
        })
        const modal = document.getElementById('ModalUP');
        modal.classList.add("show");
        modal.style.display = "block";
    }

    const save= async (newProduct) => {
        if(newProduct.productId) {
            console.log("update");
            try {
                const res = await CatalogApi.update(newProduct)
                alert("Update product successfully")
                noneModal();
                window.location.reload();
            } catch (e) {
                console.log(e);
                alert("Update product failed")
            }
        } else {
            console.log("add")
            try {
                const res = await CatalogApi.insert(newProduct)
                alert("Insert product successfully")
                noneModal();
                window.location.reload();
            } catch (e) {
                console.log(e);
                alert("Insert product failed")
            }
        }
    }


    return (
        <div>
        <Header/>
        <Navbar/>
            <div>
                <main className="app-content">
                    <div className="app-title">
                        <ul className="app-breadcrumb breadcrumb side">
                            <li className="breadcrumb-item active"><a href="/admin"><b>Danh sách sản phẩm</b></a></li>
                        </ul>
                        <div id="clock" />
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tile">
                                <div className="tile-body">
                                    <ElementButton showModal={showModal}/>
                                    <TableData data={data} showModal={showModal}/>
                                    <Pagination page={data.pagination} handlePagination={handlePagination}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                {/* MODAL */}
                <ModalProduct product={product} noneModal={noneModal} save={save}/>
            </div>

        </div>
    )
}
