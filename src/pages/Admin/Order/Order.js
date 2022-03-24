import React, { useState, useEffect } from 'react'
import TableData from './TableData/TableData'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import ElementButton from './ElementButton/ElementButton'
import Pagination from '../components/Pagination/Pagination'
import orderApi from 'api/orderApi'

export default function Oder() {

    const [orderDetail, setOrderDetail] = useState([]);

    const [order, setOrder] = useState({
        "order_id": 3,
        "user_id": 6,
        "name": "Người dùng 5",
        "status": "wait",
        "quantity": 2,
        "total": 2644.74,
        "address": "61/2 Tuyến Liên Xã, xã Xuân Thới Thượng, huyện Hóc Môn",
        "purchase_date": "18-12-2021 22:36:14",
        "received_date": "25-12-2021",
        "id": 3
    })

    const [data, setData] = useState(
        {
        status : "faild",
        message : "Request products...",
        data : [
            {
                "order_id": 3,
                "user_id": 6,
                "name": "Người dùng 5",
                "status": "wait",
                "quantity": 2,
                "total": 2644.74,
                "address": "61/2 Tuyến Liên Xã, xã Xuân Thới Thượng, huyện Hóc Môn",
                "purchase_date": "18-12-2021 22:36:14",
                "received_date": "25-12-2021",
                "id": 3
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
            const response = await orderApi.getAll(page);
            setData(response);
        } catch (error) {
            console.log("Failed to fetch order list ", error);
            setData({...data, status: "failed", message: "Failed to connect server"});
        }
        }

        fetchProductList();
    },[page])

    useEffect(() => {
        console.log(data)
    },[data])

    const handlePagination = (value) => {
        
        setPage({...page, page: value});
    }
 
    const noneModal = () => {
        const modal = document.getElementById('ModalUP');
        modal.classList.remove("show");
        modal.style.display = "none";
    }

    const showModal = async (detail) => {
        if(!detail=="")
        {setOrder(detail);}
        
        try {
            const res = await orderApi.orderDetails(detail.order_id);
            console.log(res);
            setOrderDetail(res.data)
        } catch (e) {
            console.log(e)
        }

        const modal = document.getElementById('ModalUP');
        modal.classList.add("show");
        modal.style.display = "block";
    }

    const save = async (newOrder) => {
        if(newOrder.order_id) {
            console.log("update order");
            try {
                const res = await orderApi.update(newOrder);
                alert("Update order successfully")
                noneModal();
                window.location.reload();
            } catch (e) {
                console.log(e)
                alert("Update product failed")
            }
        } else {
            alert("Update product failed")
        }
    }

    return (
        <div>
            <Header />
            <Navbar />
            <main className="app-content">
                <div className="app-title">
                    <ul className="app-breadcrumb breadcrumb side">
                        <li className="breadcrumb-item active"><a href="/admin"><b>Danh sách đơn hàng</b></a></li>
                    </ul>
                    <div id="clock" />
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="tile">
                            <div className="tile-body">
                                {/* <ElementButton /> */}
                                <TableData data={data.data} showModal={showModal}/>
                                <Pagination page={data.pagination} handlePagination={handlePagination}/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <div className="modal fade" id="ModalUP" tabIndex={-1} role="dialog" aria-hidden="true" data-backdrop="static" data-keyboard="false">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="row">
                                <div className="form-group  col-md-12">
                                    <span className="thong-tin-thanh-toan">
                                        <h5>Đơn hàng</h5>
                                    </span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label className="control-label">ID đơn hàng</label>
                                    <input className="form-control" type="text" required defaultValue="" disabled 
                                        value={order.order_id}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="control-label">Tên</label>
                                    <input className="form-control" type="text" required defaultValue="" 
                                        value={order.name}
                                        onChange={
                                            e => setOrder({...order, name: e.target.value})
                                        }
                                    />
                                </div>
                                <div className="form-group  col-md-12">
                                    <label className="control-label">Địa chỉ</label>
                                    <input className="form-control" type="text" required defaultValue="" 
                                        value={order.address}
                                        onChange={
                                            e => setOrder({...order, address: e.target.value})
                                        }
                                    />
                                </div>
                                <div className="form-group col-md-12">
                                    <label className="control-label">Chi tiết</label>
                                    <table>
                                        <thead>
                                            <tr>
                                                <td>ID sản phẩm</td>
                                                <td>Hình</td>
                                                <td>Tên sản phẩm</td>
                                                <td>Số lượng</td>
                                                <td>Thành tiền</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                orderDetail.map((detail) => {
                                                    return (
                                                        <tr>
                                                            <td>{detail[0]}</td>
                                                            <td>
                                                                <img width={50} src={detail[1]}/>
                                                            </td>
                                                            <td>{detail[2]}</td>
                                                            <td>{detail[3]}</td>
                                                            <td>$ {detail[4].toFixed(2)}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                            
                                        </tbody>
                                    </table>
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="control-label">Tổng tiền</label>
                                    <input className="form-control" type="text" defaultValue={0} disabled
                                        value={order.total.toFixed(2)}
                                    />
                                </div>
                                <div className="form-group  col-md-6">
                                    <label htmlFor="exampleSelect1" className="control-label">Trạng thái</label>
                                    <select className="form-control" id="exampleSelect1" value={order.status}
                                        onChange={
                                            e => setOrder({...order, status: e.target.value})
                                        }
                                    >
                                        <option value="wait">Chờ xác nhận</option>
                                        <option value="confirm">Xác nhận</option>
                                        <option value="delivery">Đang giao</option>
                                        <option value="success">Giao thành công</option>
                                        <option value="cancel">Hủy đơn</option>
                                        
                                    </select>
                                </div>
                                <div className="form-group  col-md-6">
                                    <div className="row">
                                        <div className="form-group  col-md-6">
                                            <label htmlFor="exampleSelect1" className="control-label">Ngày đặt</label>
                                            <input className="form-control" type="text" defaultValue={0} disabled
                                                value={order.purchase_date}
                                            />
                                        </div>
                                        <div className="form-group  col-md-6">
                                            <label htmlFor="exampleSelect1" className="control-label">Ngày giao dự kiến</label>
                                            <input className="form-control" type="text" defaultValue={0}
                                                value={order.received_date}
                                                onChange={
                                                    e => setOrder({...order, received_date: e.target.value})
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            {/* <a href="/admin" style={{ float: 'right', fontWeight: 600, color: '#ea0000' }}>Chỉnh sửa nâng cao</a> */}
                            <br />
                            <br />
                            <button className="btn btn-save" type="button" onClick={() => save(order)}>Lưu lại</button>
                            <a className="btn btn-cancel" data-dismiss="modal" href="#cancel" onClick={() => noneModal()}>Hủy bỏ</a>
                            <br />
                        </div>
                        <div className="modal-footer">
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
