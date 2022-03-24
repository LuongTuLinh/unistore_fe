import React, { useState, useEffect } from 'react'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import adminApi from 'api/adminApi'
import catalogAPI from 'api/catalogApi'
import userApi from 'api/userApi'

export default function Report() {

    const [countData, setCountData] = useState({
        "countUser": 0,
        "countProduct": 0,
        "countOrder": 0,
        "countOutOfStock": 0,
        "countUsersBlock": 0,
        "totalMoney": 0,
        "countAdminMod": 0,
        "countProductNo": 0,
        "countOrdersCancel": 0
    })

    const [mostSold, setMostSold] = useState([
        {
            "name": "Laptop Acer Nitro 5 Gaming AN515",
            "memory": "8GB, DDR4 2 khe",
            "description": "Acer Nitro 5 Gaming AN515 57 727J i7 (NH.QD9SV.005.) sở hữu vẻ ngoài cá tính, nổi bật và được tích hợp bộ vi xử lý Intel thế hệ 11 tân tiến, card đồ hoạ rời NVIDIA GeForce RTX, hứa hẹn mang đến các trải nghiệm tuyệt vời cho người dùng.",
            "status": "1",
            "productId": 1,
            "sold": 5,
            "quantity": 5,
            "battery": "4-cell Li-ion, 57 Wh",
            "catalog": "Acer",
            "graphics": "NVIDIA GeForce RTX3050Ti, 4 GB",
            "image": "https://i.ibb.co/3F9wWqv/image.png",
            "price": 1322.37,
            "hardDrive": "512 GB SSD NVMe PCIe",
            "os": "Windows 10 Home SL",
            "processer": "i7, 11800H, 2.30GHz",
            "wireless": "Bluetooth 5.1, Wi-Fi 6 (802.11ax)"
        }
    ]);

    const [mostUser, setMostUser] = useState([]);

    useEffect(() => {
        async function getCountData() {
            try {
                const res = await adminApi.dashboard();
                setCountData(res.data);

            } catch (err) {
                console.log(err);
            }
        }

        async function getMostSold() {
            try {
                const res = await catalogAPI.mostSold();
                setMostSold(res.data);
            } catch (err) {
                console.log(err)
            }
        }

        async function getMostUser() {
            try {
                const res = await userApi.mostUser();
                setMostUser(res.data);
            } catch (err) {
                console.log(err)
            }
        }

        getCountData();
        getMostSold();
        getMostUser();
    }, [])

    return (
        <div>
        <Header/>
        <Navbar/>
            <main className="app-content">
                <div className="row">
                    <div className="col-md-12">
                        <div className="app-title">
                            <ul className="app-breadcrumb breadcrumb">
                                <li className="breadcrumb-item"><a href="/admin"><b>Báo cáo</b></a></li>
                            </ul>
                            <div id="clock" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                        <div className="widget-small primary coloured-icon"><i className="icon  bx bxs-user fa-3x" />
                            <div className="info">
                                <h4>Tài khoản đăng kí</h4>
                                <p><b>{countData.countUser} tài khoản</b></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="widget-small info coloured-icon"><i className="icon bx bxs-purchase-tag-alt fa-3x" />
                            <div className="info">
                                <h4>Tổng sản phẩm</h4>
                                <p><b>{countData.countProduct} sản phẩm</b></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="widget-small primary  coloured-icon"><i className="icon fa-3x bx bxs-shopping-bag-alt" />
                            <div className="info">
                                <h4>Tổng đơn hàng</h4>
                                <p><b>{countData.countOrder} đơn hàng</b></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="widget-small info coloured-icon"><i className="icon fa-3x bx bxs-info-circle" />
                            <div className="info">
                                <h4>Tổng tài khoản bị khóa</h4>
                                <p><b>{countData.countUsersBlock} tài khoản</b></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                        <div className="widget-small primary coloured-icon"><i className="icon fa-3x bx bxs-chart" />
                            <div className="info">
                                <h4>Tổng thu nhập</h4>
                                <p><b>$ {countData.totalMoney.toFixed(2)}</b></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="widget-small info coloured-icon"><i className="icon fa-3x bx bxs-user-badge" />
                            <div className="info">
                                <h4>Tổng quản trị viên</h4>
                                <p><b>{countData.countAdminMod} quản trị viên</b></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="widget-small primary coloured-icon"><i className="icon fa-3x bx bxs-tag-x" />
                            <div className="info">
                                <h4>Hết hàng</h4>
                                <p><b>{countData.countProductNo} sản phẩm</b></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="widget-small info coloured-icon"><i className="icon fa-3x bx bxs-receipt" />
                            <div className="info">
                                <h4>Đơn hàng hủy</h4>
                                <p><b>{countData.countOrdersCancel} đơn hàng</b></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="tile">
                            <div>
                                <h3 className="tile-title">SẢN PHẨM BÁN CHẠY</h3>
                            </div>
                            <div className="tile-body">
                                <table className="table table-hover table-bordered" id="sampleTable">
                                    <thead>
                                        <tr>
                                            <th>Mã sản phẩm</th>
                                            <th>Tên sản phẩm</th>
                                            <th>Giá tiền</th>
                                            <th>Số lượng đã bán</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            mostSold.map((product) => {
                                                return (
                                                    <tr>
                                                        <td>{product.productId}</td>
                                                        <td>{product.name}</td>
                                                        <td>$ {product.price}</td>
                                                        <td>{product.sold}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="tile">
                            <div>
                                <h3 className="tile-title">Danh sách khách mua hàng nhiều</h3>
                            </div>
                            <div className="tile-body">
                                <table className="table table-hover table-bordered" id="sampleTable">
                                    <thead>
                                        <tr>
                                            <th>ID tài khoản</th>
                                            <th>Tên khách hàng</th>
                                            <th>Số đơn đã mua</th>
                                            <th>Tổng tiền đã mua</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            mostUser.map((user) => {
                                                return (
                                                    <tr>
                                                        <td>{user[0]}</td>
                                                        <td>{user[1]}</td>
                                                        <td>{user[2]}</td>
                                                        <td>$ {user[3].toFixed(2)}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                        
                                        {/* <tr>
                                            <th colSpan={3}>Tổng cộng:</th>
                                            <td>104.890.000 đ</td>
                                        </tr> */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="row">
                    <div className="col-md-12">
                        <div className="tile">
                            <div>
                                <h3 className="tile-title">SẢN PHẨM ĐÃ HẾT</h3>
                            </div>
                            <div className="tile-body">
                                <table className="table table-hover table-bordered" id="sampleTable">
                                    <thead>
                                        <tr>
                                            <th>Mã sản phẩm</th>
                                            <th>Tên sản phẩm</th>
                                            <th>Ảnh</th>
                                            <th>Số lượng</th>
                                            <th>Tình trạng</th>
                                            <th>Giá tiền</th>
                                            <th>Danh mục</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>83826226</td>
                                            <td>Tủ ly - tủ bát</td>
                                            <td><img src="/img-sanpham/tu.jpg" alt="" width="100px;" /></td>
                                            <td>0</td>
                                            <td><span className="badge bg-danger">Hết hàng</span></td>
                                            <td>2.450.000 đ</td>
                                            <td>Tủ</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="tile">
                            <div>
                                <h3 className="tile-title">NHÂN VIÊN MỚI</h3>
                            </div>
                            <div className="tile-body">
                                <table className="table table-hover table-bordered" id="sampleTable">
                                    <thead>
                                        <tr>
                                            <th>Họ và tên</th>
                                            <th>Địa chỉ</th>
                                            <th>Ngày sinh</th>
                                            <th>Giới tính</th>
                                            <th>SĐT</th>
                                            <th>Chức vụ</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Hồ Thị Thanh Ngân</td>
                                            <td>155-157 Trần Quốc Thảo, Quận 3, Hồ Chí Minh </td>
                                            <td>12/02/1999</td>
                                            <td>Nữ</td>
                                            <td>0926737168</td>
                                            <td>Bán hàng</td>
                                        </tr>
                                        <tr>
                                            <td>Trần Khả Ái</td>
                                            <td>6 Nguyễn Lương Bằng, Tân Phú, Quận 7, Hồ Chí Minh</td>
                                            <td>22/12/1999</td>
                                            <td>Nữ</td>
                                            <td>0931342432</td>
                                            <td>Bán hàng</td>
                                        </tr>
                                        <tr>
                                            <td>Nguyễn Đặng Trọng Nhân</td>
                                            <td>59C Nguyễn Đình Chiểu, Quận 3, Hồ Chí Minh </td>
                                            <td>23/07/1996</td>
                                            <td>Nam</td>
                                            <td>0846881155</td>
                                            <td>Dịch vụ</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="tile">
                            <h3 className="tile-title">DỮ LIỆU HÀNG THÁNG</h3>
                            <div className="embed-responsive embed-responsive-16by9">
                                <canvas className="embed-responsive-item" id="lineChartDemo" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="tile">
                            <h3 className="tile-title">THỐNG KÊ DOANH SỐ</h3>
                            <div className="embed-responsive embed-responsive-16by9">
                                <canvas className="embed-responsive-item" id="barChartDemo" />
                            </div>
                        </div>
                    </div>
                </div> */}
            </main>

        </div>
    )
}
