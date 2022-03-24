import React from 'react'

export default function Item({user, showModal}) {
    return (
        <tr>
            {/* <td><img className="img-card-person" src="/img-anhthe/1.jpg" alt="" /></td> */}
            <td width={10}><input type="checkbox" name="check1" defaultValue={1} /></td>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
                {
                    user.roles.map(element => {
                        return element.name + " ";
                    })
                }
            </td>
            <td>{user.phone}</td>
            <td>{user.email}</td>
            <td>{user.enable?<span className="badge bg-success">True</span>:<span className="badge bg-danger">False</span>}</td>
            <td className="table-td-center">
                {/* <button className="btn btn-primary btn-sm trash" type="button" title="Xóa"><i className="fas fa-trash-alt" />
            </button> */}
                <button className="btn btn-primary btn-sm edit" type="button" title="Sửa" id="show-emp" data-toggle="modal" data-target="#ModalUP" onClick={() => showModal(user)}><i className="fas fa-edit" />
                </button>
            </td>
        </tr>
    )
}
