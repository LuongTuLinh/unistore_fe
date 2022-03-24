import React from 'react'

export default function ElementButton() {
    return (
        <div className="row element-button">
            <div className="col-sm-2">
                <a className="btn btn-add btn-sm" href="form-add-nhan-vien.html" title="Thêm"><i className="fas fa-plus" />
                    Tạo mới nhân viên</a>
            </div>
            <div className="col-sm-2">
                <a className="btn btn-delete btn-sm nhap-tu-file" href='/admin' type="button" title="Nhập" ><i className="fas fa-file-upload" /> Tải từ file</a>
            </div>
            <div className="col-sm-2">
                <a className="btn btn-delete btn-sm print-file" href='/admin' type="button" title="In"><i className="fas fa-print" /> In dữ liệu</a>
            </div>
            <div className="col-sm-2">
                <a className="btn btn-delete btn-sm print-file js-textareacopybtn" href='/admin' type="button" title="Sao chép"><i className="fas fa-copy" /> Sao chép</a>
            </div>
            <div className="col-sm-2">
                <a className="btn btn-excel btn-sm" href='/admin' title="In"><i className="fas fa-file-excel" /> Xuất Excel</a>
            </div>
            <div className="col-sm-2">
                <a className="btn btn-delete btn-sm pdf-file" href='/admin' type="button" title="In" ><i className="fas fa-file-pdf" /> Xuất PDF</a>
            </div>
            <div className="col-sm-2">
                <a className="btn btn-delete btn-sm" href='/admin' type="button" title="Xóa" ><i className="fas fa-trash-alt" /> Xóa tất cả </a>
            </div>
        </div>
    )
}
