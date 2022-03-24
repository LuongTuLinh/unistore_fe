import React from 'react'
import Item from './Item/Item'

export default function TableData({data, showModal}) {
    return (
        <table className="table table-hover table-bordered js-copytextarea" cellPadding={0} cellSpacing={0} border={0} id="sampleTable">
            <thead>
                <tr>
                    <th width={10}><input type="checkbox" id="all" /></th>
                    <th width={20}>ID</th>
                    <th width={150}>Tên</th>
                    <th width={200}>Tên tài khoản</th>
                    <th width={50}>Chức vụ</th>
                    <th>Số điện thoại</th>
                    <th>Email</th>
                    <th>Được kích hoạt</th>
                    <th width={100}>Tính năng</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((user, index) => {
                        return <Item key={index} user={user} showModal={showModal}/>
                    })
                }
                
            </tbody>
        </table>
    )
}
