import React from 'react'

export default function TableData({data, showModal}) {
    return (
        <table className="table table-hover table-bordered" id="sampleTable">
            <thead>
                <tr>
                    <th width={10}><input type="checkbox" id="all" /></th>
                    <th width={30}>ID đơn hàng</th>
                    <th width={40}>ID thành viên</th>
                    <th width={100}>Tên khách hàng</th>
                    <th width={150}>Địa chỉ</th>
                    <th width={10}>Số lượng</th>
                    <th width={5}>Tổng tiền</th>
                    <th width={120}>Ngày đặt</th>
                    <th width={70}>Ngày dự kiến nhận</th>
                    <th width={50}>Trạng thái</th>
                    <th width={70}>Chức năng</th>

                </tr>
            </thead>
            <tbody>
                {
                    data.map((order, index) => {
                        return (
                            <tr key={index}>
                                <td width={10}><input type="checkbox" name="check1" defaultValue={1} /></td>
                                <td>{order.order_id}</td>
                                <td>{order.user_id}</td>
                                <td>{order.name}</td>
                                <td>{order.address}</td>
                                <td>{order.quantity}</td>
                                <td>$ {order.total.toFixed(2)}</td>
                                <td>{order.purchase_date}</td>
                                <td>{order.received_date}</td>
                                {/* <td>
                                    {order.status}
                                </td> */}
                                <td>
                                    {
                                        order.status==="wait"?
                                        <span className="badge bg-warning">
                                            Chờ xác nhận
                                        </span>
                                        :order.status=="confirm"?
                                        <span className="badge bg-info">
                                            Đã xác nhận
                                        </span>
                                        :order.status==="delivery"?
                                        <span className="badge bg-primary">
                                            Đang giao hàng
                                        </span>
                                        :order.status==="success"?
                                        <span className="badge bg-success">
                                            Thành công
                                        </span>
                                        :
                                        <span className="badge bg-danger">
                                            Hủy đơn
                                        </span>
                                    }
                                    
                                </td>
                                <td>
                                    {/* <button className="btn btn-primary btn-sm trash" type="button" title="Xóa"><i className="fas fa-trash-alt" /> </button> */}
                                    <button className="btn btn-primary btn-sm edit" type="button" title="Sửa" 
                                        onClick={() => showModal(order)}><i className="fa fa-edit" /></button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
