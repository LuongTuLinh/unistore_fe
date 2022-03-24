import React, { useState, useEffect } from 'react'

export default function ModalProduct({product, noneModal, save}) {

	const [newProduct, setNewProduct] = useState(product);

	useEffect(() => {
		setNewProduct(product);
	},[product])

	return (
		<div className="modal fade" id="ModalUP" role="dialog" tabIndex={-1} aria-hidden="true" data-backdrop="static" data-keyboard="false">
			<div className="modal-dialog modal-dialog-centered" role="document">
				<div className="modal-content">
					<div className="modal-body">
						<div className="row">
							<div className="form-group  col-md-12">
								<span className="thong-tin-thanh-toan">
									<h5>Thêm sản phẩm</h5>
								</span>
							</div>
						</div>
						<div className="row">
							<div className="form-group col-md-12">
								<label className="control-label">Tên sản phẩm</label>
								<input className="form-control" type="text" required value={newProduct.name}
									onChange={e => {
										setNewProduct({...newProduct, name: e.target.value})
									}}
								/>
							</div>
							<div className="form-group col-md-6">
								<label className="control-label">Hãng</label>
								<select className="form-control" id="exampleSelect" defaultValue="MSI" value={newProduct.catalog}
									onChange={e => setNewProduct({...newProduct, catalog: e.target.value})}
								>
									<option value="MSI">MSI</option>
									<option value="DELL">DELL</option>
									<option value="Acer">Acer</option>
									<option value="ASUS">Asus</option>
								</select>
							</div>
							<div className="form-group col-md-6">
								<label className="control-label">Giá</label>
								<input className="form-control" type="number" defaultValue={0} value={newProduct.price} 
									onChange={e => setNewProduct({...newProduct, price: parseFloat(e.target.value)})}
								/>
							</div>
							<div className="form-group  col-md-6">
								<label className="control-label">Số lượng</label>
								<input className="form-control" type="number" required defaultValue={0} value={newProduct.quantity} 
									onChange={e => setNewProduct({...newProduct, quantity: parseInt(e.target.value)})}
								/>
							</div>
							<div className="form-group col-md-6 ">
								<label htmlFor="exampleSelect1" className="control-label">Tình trạng sản phẩm</label>
								<select className="form-control" id="exampleSelect1" defaultValue={0} value={newProduct.status}
									onChange={e => setNewProduct({...newProduct, status: e.target.value})}
								>
									<option value="1">Bán</option>
									<option value="0">Ngừng bán</option>
								</select>
							</div>
							
							<div className="form-group col-md-6">
								<label className="control-label">Graphics</label>
								<input className="form-control" type="text" defaultValue="" value={newProduct.graphics} 
									onChange={e => setNewProduct({...newProduct, graphics: e.target.value})}
								/>
							</div>
							<div className="form-group col-md-6">
								<label className="control-label">OS</label>
								<input className="form-control" type="text" defaultValue="" value={newProduct.os} 
									onChange={e => setNewProduct({...newProduct, os: e.target.value})}
								/>
							</div>
							<div className="form-group col-md-6">
								<label className="control-label">Processer</label>
								<input className="form-control" type="text" defaultValue="" value={newProduct.processer} 
									onChange={e => setNewProduct({...newProduct, processer: e.target.value})}
								/>
							</div>
							<div className="form-group col-md-6">
								<label className="control-label">Memory</label>
								<input className="form-control" type="text" defaultValue="" value={newProduct.memory} 
									onChange={e => setNewProduct({...newProduct, memory: e.target.value})}
								/>
							</div>
							<div className="form-group col-md-6">
								<label className="control-label">Hard Drive</label>
								<input className="form-control" type="text" defaultValue="" value={newProduct.hardDrive} 
									onChange={e => setNewProduct({...newProduct, hardDrive: e.target.value})}
								/>
							</div>
							<div className="form-group col-md-6">
								<label className="control-label">Battery</label>
								<input className="form-control" type="text" defaultValue="" value={newProduct.battery} 
									onChange={e => setNewProduct({...newProduct, battery: e.target.value})}
								/>
							</div>
							<div className="form-group col-md-6">
								<label className="control-label">Wireless</label>
								<input className="form-control" type="text" defaultValue="" value={newProduct.wireless} 
									onChange={e => setNewProduct({...newProduct, wireless: e.target.value})}
								/>
							</div>
							<div className="form-group col-md-6">
								<label className="control-label">Link ảnh</label>
								<input className="form-control" type="text" defaultValue="" value={newProduct.image} 
									onChange={e => setNewProduct({...newProduct, image: e.target.value})}
								/>
							</div>
							
							<div className="form-group col-md-12">
								<label className="control-label">Mô tả</label>
								<textarea className="form-control" type="text" defaultValue={newProduct.description} 
									onChange={e => setNewProduct({...newProduct, description: e.target.value})}
								/>
							</div>
						</div>
						<br />
						<br />
						<br />
						<button className="btn btn-save" type="button" onClick={() => save(newProduct)}>Lưu</button>
						<a className="btn btn-cancel" data-dismiss="modal" href="#cancel" onClick={() => noneModal()}>Hủy</a>
						<br />
					</div>
					<div className="modal-footer">
					</div>
				</div>
			</div>
		</div>
	)
}
