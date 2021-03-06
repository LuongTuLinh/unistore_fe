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
                <li className="breadcrumb-item"><a href="/admin"><b>B???ng ??i???u khi???n</b></a></li>
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
                    <h4>T???ng t??i kho???n</h4>
                    <p><b>{totalUser} t??i kho???n</b></p>
                    <p className="info-tong">T???ng s??? t??i kho???n ???????c qu???n l??.</p>
                  </div>
                </div>
              </div>
              {/* col-6 */}
              <div className="col-md-6">
                <div className="widget-small info coloured-icon"><i className="icon bx bxs-data fa-3x" />
                  <div className="info">
                    <h4>T???ng s???n ph???m</h4>
                    <p><b>{totalProduct} s???n ph???m</b></p>
                    <p className="info-tong">T???ng s??? s???n ph???m ???????c qu???n l??.</p>
                  </div>
                </div>
              </div>
              {/* col-6 */}
              <div className="col-md-6">
                <div className="widget-small warning coloured-icon"><i className="icon bx bxs-shopping-bags fa-3x" />
                  <div className="info">
                    <h4>T???ng ????n h??ng</h4>
                    <p><b>{totalOrder} ????n h??ng</b></p>
                    <p className="info-tong">T???ng s??? h??a ????n b??n h??ng.</p>
                  </div>
                </div>
              </div>
              {/* col-6 */}
              <div className="col-md-6">
                <div className="widget-small danger coloured-icon"><i className="icon bx bxs-error-alt fa-3x" />
                  <div className="info">
                    <h4>S???p h???t h??ng</h4>
                    <p><b>{outOfStock} s???n ph???m</b></p>
                    <p className="info-tong">S??? s???n ph???m c???nh b??o h???t c???n nh???p th??m.</p>
                  </div>
                </div>
              </div>
              {/* col-12 */}
              <div className="col-md-12">
                <div className="tile">
                  <h3 className="tile-title">T??nh tr???ng ????n h??ng</h3>
                  <div>
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>ID ????n h??ng</th>
                          <th>T??n kh??ch h??ng</th>
                          <th>T???ng ti???n</th>
                          <th>Tr???ng th??i</th>
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
                                            Ch??? x??c nh???n
                                        </span>
                                        :order.status=="confirm"?
                                        <span className="badge bg-info">
                                            ???? x??c nh???n
                                        </span>
                                        :order.status==="delivery"?
                                        <span className="badge bg-primary">
                                            ??ang giao h??ng
                                        </span>
                                        :order.status==="success"?
                                        <span className="badge bg-success">
                                            Th??nh c??ng
                                        </span>
                                        :
                                        <span className="badge bg-danger">
                                            H???y ????n
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
                  {/* / div tr???ng*/}
                </div>
              </div>
              {/* / col-12 */}
              {/* col-12 */}
              <div className="col-md-12">
                <div className="tile">
                  <h3 className="tile-title">Kh??ch h??ng m???i</h3>
                  <div>
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>T??n kh??ch h??ng</th>
                          <th>S??? ??i???n tho???i</th>
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
                  <h3 className="tile-title">D??? li???u 6 th??ng ?????u v??o</h3>
                  <div className="embed-responsive embed-responsive-16by9">
                    <canvas className="embed-responsive-item" id="lineChartDemo" />
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="tile">
                  <h3 className="tile-title">Th???ng k?? 6 th??ng doanh thu</h3>
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
