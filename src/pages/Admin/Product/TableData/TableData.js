import React from 'react'

export default function TableData({data, showModal}) {
    return (
        <table className="table table-hover table-bordered" id="sampleTable">
            <thead>
                <tr>
                    <th width={10}><input type="checkbox" id="all" /></th>
                    <th>Mã sản phẩm</th>
                    <th>Tên sản phẩm</th>
                    <th>Ảnh</th>
                    <th>Số lượng</th>
                    <th>Đã bán</th>
                    <th>Tình trạng</th>
                    <th>Giá tiền</th>
                    <th>Danh mục</th>
                    <th>Chức năng</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.data.map((product, index) => {
                        return (
                            <tr key={index}>
                                <td width={10}><input type="checkbox" name="check1" defaultValue={1} /></td>
                                <td>{product.productId}</td>
                                <td>{product.name}</td>
                                <td><img src={product.image} alt="" width="100px;" /></td>
                                <td>{product.quantity}</td>
                                <td>{product.sold}</td>
                                {
                                    product.status==0?
                                    <td><span className="badge bg-danger">Ngừng bán</span></td>:
                                    product.quantity==0?
                                    <td><span className="badge bg-warning">Hết hàng</span></td>:
                                    product.quantity<6?
                                    <td><span className="badge bg-warning">Sắp hết hàng</span></td>:
                                    product.status==1?
                                    <td><span className="badge bg-success">Đang bán</span></td>:
                                    ""
                                }
                                 {/* <td><span className="badge bg-success">{product.status}</span></td> */}
                                <td>${product.price}</td>
                                <td>{product.catalog}</td>
                                <td>
                                    {/* <button className="btn btn-primary btn-sm trash" type="button" title="Xóa" ><i className="fas fa-trash-alt" />
                                    </button> */}

                                    <button className="btn btn-primary btn-sm edit" type="button" title="Sửa" id="show-emp" onClick={() => showModal(product)}><i className="fas fa-edit" /></button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>

    )
}
