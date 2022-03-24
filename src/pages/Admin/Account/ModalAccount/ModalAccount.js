import React, { useState, useEffect } from 'react'

export default function ModalAccount({user, noneModal, save}) {

	const [newUser, setNewUser] = useState(user);
	
	useEffect(() => {
		setNewUser(user);
	}, [user])

	

	function checkRole(roles, roleName) {
		for(const role of roles) {
			if(role.name === roleName) {
				return true;
			}
		}
		return false;
	}

	return (
		<div className="modal fade" id="ModalUP" tabIndex={-1} role="dialog" aria-hidden="true" data-backdrop="static" data-keyboard="false">
			<div className="modal-dialog modal-dialog-centered" role="document">
				<div className="modal-content">
					<div className="modal-body">
						<div className="row">
							<div className="form-group  col-md-12">
								<span className="thong-tin-thanh-toan">
									<h5>Chỉnh sửa thông tin nhân viên cơ bản</h5>
								</span>
							</div>
						</div>
						<div className="row">
							{
								user.id?
								<div className="form-group col-md-6">
									<label className="control-label">ID tài khoản</label>
									<input className="form-control" type="text" required defaultValue={0} value={newUser.id} disabled/>
								</div>
								:""
							}
							<div className="form-group col-md-6">
								<label className="control-label">Tên</label>
								<input className="form-control" type="text" required defaultValue="" value={newUser.name} 
									onChange={e => {
										setNewUser({...newUser, name: e.target.value})
									}}
								/>
							</div>
							<div className="form-group col-md-6">
								<label className="control-label">Tên tài khoản</label>
								<input className="form-control" type="text" required defaultValue="" value={newUser.username} 
									onChange={e => {
										setNewUser({...newUser, username: e.target.value})
									}}
								/>
							</div>
							<div className="form-group  col-md-6">
								<label className="control-label">Số điện thoại</label>
								<input className="form-control" type="text" required defaultValue="" value={newUser.phone} 
									onChange={e => {
										setNewUser({...newUser, phone: e.target.value})
									}}
								/>
							</div>
							<div className="form-group col-md-6">
								<label className="control-label">Địa chỉ email</label>
								<input className="form-control" type="text" required defaultValue="" value={newUser.email} 
									onChange={e => {
										setNewUser({...newUser, email: e.target.value})
									}}
								/>
							</div>
							<div className="form-group col-md-6">
								<label className="control-label">Kích hoạt</label>
								<select className="form-control" id="exampleSelect" defaultValue={true} value={newUser.enable}
									onChange={e => {
										setNewUser({...newUser, enable: e.target.value})
									}}
								>
									<option value={true}>True</option>
									<option value={false}>False</option>
								</select>
							</div>
							<div className="form-group  col-md-6">
								{
									!user.id?
									<>
										<label htmlFor="exampleSelect1" className="control-label">Chức vụ</label>
										<select className="form-control" id="exampleSelect1" defaultValue="ROLE_USER" 
											value={user.roles[0]}
											onChange={e => {
												setNewUser({...newUser, roles: e.target.value===""?[]:[e.target.value]})
											}}
										>
											<option value="">ROLE_USER</option>
											<option value="mod">ROLE_MOD</option>
											<option value="admin">ROLE_ADMIN</option>
										</select>
									</>
									:""
								}
							</div>
							{
								user.password===""?
									<div className="form-group col-md-6">
										<label className="control-label">Mật khẩu</label>
										<input className="form-control" type="text" required defaultValue="" value={newUser.password} 
											onChange={e => setNewUser({...newUser, password: e.target.value})}
										/>
									</div>
								
								:""
							}
						</div>
						<br />
						<a href="/admin" style={{ float: 'right', fontWeight: 600, color: '#ea0000' }}>Chỉnh sửa nâng cao</a>
						<br />
						<br />
						<button className="btn btn-save" type="button"  onClick={() => save(newUser)}>Lưu lại</button>
						<a className="btn btn-cancel" data-dismiss="modal" href="#cancel" onClick={() => noneModal()}>Hủy bỏ</a>
						<br />
					</div>
					<div className="modal-footer">
					</div>
				</div>
			</div>
		</div>
	)
}
