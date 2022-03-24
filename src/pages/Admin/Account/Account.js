import userApi from 'api/userApi'
import React, { useState, useEffect } from 'react'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import ElementButton  from './ElementButton/ElementButton'
import TableData from './TableData/TableData'
import Pagination from '../components/Pagination/Pagination'
import ModalAccount from './ModalAccount/ModalAccount'
import Alert from 'components/Alert/Alert'
import authApi from 'api/authApi'

export default function Account() {

    const [alerts, setAlerts] = useState({type: "infor", text: "Quản lý tài khoản", action:false});

    const [user, setUser] = useState({
        "id": 0,
        "username": "",
        "email": "",
        "password": "",
        "roles": [
            {
                "id": 3,
                "name": "ROLE_USER"
            }
        ],
        "phone": "",
        "enable": true,
        "name": ""
    })

    const [data, setData] = useState(
        {
        status : "faild",
        message : "Request products...",
        data : [
            {
                "id": 0,
                "username": "",
                "email": "",
                "password": "",
                "roles": [
                    {
                        "id": 3,
                        "name": "ROLE_USER"
                    }
                ],
                "phone": "",
                "enable": true,
                "name": ""
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
            const response = await userApi.getAll(page);
            setData(response);
        } catch (error) {
            console.log("Failed to fetch user list ", error);
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

    // Hide modal
    const noneModal = () => {
        const modal = document.getElementById('ModalUP');
        modal.classList.remove("show");
        modal.style.display = "none";
    }

    // Show modal
    const showModal = (detail) => {
        if(!detail=="")
            {setUser(detail);}
        else setUser({
            "username": "",
            "email": "",
            "password": "",
            "roles": [],
            "phone": "",
            "enable": true,
            "name": ""
        })
        const modal = document.getElementById('ModalUP');
        modal.classList.add("show");
        modal.style.display = "block";
    }

    // Save
    const save= async (newUser) => {
        console.log(newUser)
        if(newUser.username==="" || newUser.password==="" || newUser.email==="" || newUser.phone==="" || newUser.name==="") {
            setAlerts({type: "warning", text: "Không được bỏ trống", action: true})
            return null;
        }

        let regex =/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;
		
		if(!regex.test(newUser.phone)) {
			setAlerts({type: "warning", text: "Số điện thoại không chính xác", action: true})
			return null;
		} 

        if(newUser.id) {
            console.log("update");
            try {
                const res = await userApi.update(newUser)
                alert("Update user successfully");
                noneModal();
                window.location.reload();
            } catch (e) {
                console.log(e);
                alert("Update product failed");
            }
        } else {
            console.log("add")
            console.log(newUser)
            try {
                const res = await authApi.signup(newUser);
                alert("Đăng kí thành công");
                // setAlerts({type: "success", text: res.message, action: true})
                noneModal();
                window.location.reload();
            } catch (e) {
                console.log(e);
                alert("Đăng kí không thành công");
                
            }
        }
    }

    useEffect(() => {
		const showAlert = () => {
			const alert = document.getElementById('alert');
			document.getElementById('alert').style.display = "block";

			setTimeout(function() {alert.style.display='none'}, 2000);
		}
		showAlert();
	},[alerts])

    return (
        <div>
        <Header/>
        <Navbar/>
        <Alert type={alerts.type} text={alerts.text} action={alerts.action} />
            <div>
                <main className="app-content">
                    <div className="app-title">
                        <ul className="app-breadcrumb breadcrumb side">
                            <li className="breadcrumb-item active"><a href="/admin"><b>Danh sách nhân viên</b></a></li>
                        </ul>
                        <div id="clock" />
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tile">
                                <div className="tile-body">
                                    <ElementButton showModal={showModal}/>
                                    <TableData data={data.data} showModal={showModal}/>
                                    <Pagination page={data.pagination} handlePagination={handlePagination}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Modal */}
                <ModalAccount user={user} noneModal={noneModal} save={save}/>
            </div>

        </div>
    )
}
