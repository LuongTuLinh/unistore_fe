import React from 'react'

import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <div className="app-sidebar__overlay" data-toggle="sidebar" />
            <aside className="app-sidebar">
                <div className="app-sidebar__user"><img className="app-sidebar__user-avatar" src="http://facebookfplus.com/upload/images/600_97d118b7a6f8f87d18f7b1385ea7665e.png" width="50px" alt='' />
                    <div>
                        <p className="app-sidebar__user-name"><b>{localStorage.getItem('name')}</b></p>
                        <p className="app-sidebar__user-designation">Chào mừng bạn trở lại</p>
                    </div>
                </div>
                <hr />
                <ul className="app-menu">
                    <li>
                        {/* <a className="app-menu__item active" href="/admin-dashboard"><i className="app-menu__icon bx bx-tachometer" /><span className="app-menu__label">Dashboard</span></a> */}
                        <Link to="/admin/dashboard" className="app-menu__item">
                            <i className="app-menu__icon bx bx-tachometer" /><span className="app-menu__label">Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        {/* <a className="app-menu__item " href="/admin-account"><i className="app-menu__icon bx bx-id-card" /> <span className="app-menu__label">Quản tài khoản</span></a> */}
                        <Link to="/admin/account" className="app-menu__item">
                            <i className="app-menu__icon bx bx-tachometer" /><span className="app-menu__label">Quản tài khoản</span>
                        </Link>
                    </li>
                    <li>
                        {/* <a className="app-menu__item" href="/admin-product"><i className="app-menu__icon bx bx-purchase-tag-alt" /><span className="app-menu__label">Quản lý sản phẩm</span></a> */}
                        <Link to="/admin/product" className="app-menu__item">
                            <i className="app-menu__icon bx bx-tachometer" /><span className="app-menu__label">Quản lý sản phẩm</span>
                        </Link>
                    </li>
                    <li>
                        {/* <a className="app-menu__item" href="/admin-oder"><i className="app-menu__icon bx bx-task" /><span className="app-menu__label">Quản lý đơn hàng</span></a> */}
                        <Link to="/admin/order" className="app-menu__item">
                            <i className="app-menu__icon bx bx-tachometer" /><span className="app-menu__label">Quản lý đơn hàng</span>
                        </Link>
                    </li>
                    <li>
                        {/* <a className="app-menu__item" href="/admin-report"><i className="app-menu__icon bx bx-pie-chart-alt-2" /><span className="app-menu__label">Báo cáo doanh thu</span></a> */}
                        <Link to="/admin/report" className="app-menu__item">
                            <i className="app-menu__icon bx bx-tachometer" /><span className="app-menu__label">Báo cáo doanh thu</span>
                        </Link>
                    </li>
                </ul>
            </aside>
        </div>
    )
}
