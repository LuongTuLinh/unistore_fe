import React, { useState, useEffect } from 'react'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import '../admin.css'
import adminApi from 'api/adminApi'
import orderApi from 'api/orderApi'
import userApi from 'api/userApi'

export default function Home() {
  
  const [totalUser, setTotalUser] = useState(0);
  const [totalProduct, setTotalProduct] = useState(0);
  const [totalOrder, setTotalOrder] = useState(0);
  const [outOfStock, setOutOfStock] = useState(0);

  // const [orderTab, setOrderTab] = useState();
  const [orders, setOrders] = useState([{
    "order_id": 0,
    "user_id": 0,
    "name": "",
    "status": "",
    "quantity": 0,
    "total": 0,
    "address": "",
    "purchase_date": "",
    "received_date": "",
    "id": 0
  }]);

  const [users, setUsers] = useState([{
    "id": 0,
    "username": "",
    "email": "",
    "password": "",
    "roles": [],
    "phone": "",
    "enable": true,
    "name": ""
  }])


  useEffect(() => {
    async function getTotalCount() {
      try {
        const res = await adminApi.dashboard();

        setTotalUser(res.data.countUser);
        setTotalProduct(res.data.countProduct);
        setTotalOrder(res.data.countOrder);
        setOutOfStock(res.data.countOutOfStock);

      } catch (err) {
        console.log(err);
      }
    }

    async function getOrders() {
      try {
        const res = await orderApi.getAll();
        setOrders(res.data);
      } catch (err) {
        console.log(err)
      }
      
    }

    async function getUsers() {
      try {
        const res = await userApi.getAll();
        setUsers(res.data);
      } catch (err) {
        console.log(err)
      }
      
    }

    getTotalCount();
    getOrders();
    getUsers();
  }, [])

  return (
    <div>
      <Header/>
      {/* Sidebar menu*/}
      <Navbar/>
      <main className="app-content">
        <div className="row">
          <div className="col-md-12">
            <div className="app-title">
              <ul className="app-breadcrumb breadcrumb">
                <li className="breadcrumb-item"><a href="/admin"><b>Bảng điều khiển</b></a></li>
              </ul>
              <div id="clock" />
            </div>
          </div>
        </div>
        <div className="row">
          {/*Left*/}
          <div className="col-md-12 col-lg-12">
            <div className="row">
              {/* col-6 */}
              <div className="col-md-6">
                <div className="widget-small primary coloured-icon"><i className="icon bx bxs-user-account fa-3x" />
                  <div className="info">
                    <h4>Tổng tài khoản</h4>
                    <p><b>{totalUser} tài khoản</b></p>
                    <p className="info-tong">Tổng số tài khoản được quản lý.</p>
                  </div>
                </div>
              </div>
              {/* col-6 */}
              <div className="col-md-6">
                <div className="widget-small info coloured-icon"><i className="icon bx bxs-data fa-3x" />
                  <div className="info">
                    <h4>Tổng sản phẩm</h4>
                    <p><b>{totalProduct} sản phẩm</b></p>
                    <p className="info-tong">Tổng số sản phẩm được quản lý.</p>
                  </div>
                </div>
              </div>
              {/* col-6 */}
              <div className="col-md-6">
                <div className="widget-small warning coloured-icon"><i className="icon bx bxs-shopping-bags fa-3x" />
                  <div className="info">
                    <h4>Tổng đơn hàng</h4>
                    <p><b>{totalOrder} đơn hàng</b></p>
                    <p className="info-tong">Tổng số hóa đơn bán hàng.</p>
                  </div>
                </div>
              </div>
              {/* col-6 */}
              <div className="col-md-6">
                <div className="widget-small danger coloured-icon"><i className="icon bx bxs-error-alt fa-3x" />
                  <div className="info">
                    <h4>Sắp hết hàng</h4>
                    <p><b>{outOfStock} sản phẩm</b></p>
                    <p className="info-tong">Số sản phẩm cảnh báo hết cần nhập thêm.</p>
                  </div>
                </div>
              </div>
              {/* col-12 */}
              <div className="col-md-12">
                <div className="tile">
                  <h3 className="tile-title">Tình trạng đơn hàng</h3>
                  <div>
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>ID đơn hàng</th>
                          <th>Tên khách hàng</th>
                          <th>Tổng tiền</th>
                          <th>Trạng thái</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          orders.map((order,index) => {
                            if(index <5) {
                              return (
                                <tr key={index}>
                                  <td>{order.order_id}</td>
                                  <td>{order.name}</td>
                                  <td>
                                    ${order.total.toFixed(2)}
                                  </td>
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
                                </tr>
                              )
                            }
                          })
                        }
                      </tbody>
                    </table>
                  </div>
                  {/* / div trống*/}
                </div>
              </div>
              {/* / col-12 */}
              {/* col-12 */}
              <div className="col-md-12">
                <div className="tile">
                  <h3 className="tile-title">Khách hàng mới</h3>
                  <div>
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Tên khách hàng</th>
                          <th>Số điện thoại</th>
                          <th>Email</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          users.map((user, index) => {
                            if (index < 5) {
                              return (
                                <tr key={index}>
                                  <td>{user.id}</td>
                                  <td>{user.name}</td>
                                  <td>{user.phone}</td>
                                  <td><span className="tag tag-success">{user.email}</span></td>
                                </tr>
                              )
                            }
                          })
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* / col-12 */}
            </div>
          </div>
          {/*END left*/}
          {/*Right*/}
          {/* <div className="col-md-12 col-lg-6">
            <div className="row">
              <div className="col-md-12">
                <div className="tile">
                  <h3 className="tile-title">Dữ liệu 6 tháng đầu vào</h3>
                  <div className="embed-responsive embed-responsive-16by9">
                    <canvas className="embed-responsive-item" id="lineChartDemo" />
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="tile">
                  <h3 className="tile-title">Thống kê 6 tháng doanh thu</h3>
                  <div className="embed-responsive embed-responsive-16by9">
                    <canvas className="embed-responsive-item" id="barChartDemo" />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/*END right*/}
        </div>
      </main></div>

  )
}
