import React from "react";
import {Link} from "react-router-dom";

function ListFacility() {
    return (
        <>
            <div className="container">
                {/*--------------------*/}
                <div className="row gx-4 gx-lg-5 align-items-center my-5">
                    <div className="col-lg-7"><img className="img-fluid rounded mb-4 mb-lg-0"
                                                   src="https://decofuni.vn/Upload/images/tin-tuc/noi-that-phong-ngu-resort.jpg"
                                                   alt="..."/></div>
                    <div className="col-lg-5">
                        <h1 className="font-weight-light">Facility Rooms</h1>
                        <p>Được trang trí với tông màu dịu nhẹ kết hợp với những đồ thủ công trang trí mang đậm hơi thở
                            văn
                            hóa Chăm-pa của địa phương, căn phòng được chia tầng rõ rệt. Ở dưới là khu vực sinh hoạt với
                            ghế
                            sofa chữ L và ở trên là giường ngủ tạo cảm giác trang nhã mà rất thân thuộc như ở nhà.</p>
                        <Link to={"/facility-room"} className="btn btn-warning">Chi Tiết</Link>
                    </div>
                </div>
                {/*--------------------*/}
                {/*--------------------*/}
                <div className="row gx-4 gx-lg-5 align-items-center my-5">
                    <div className="col-lg-5">
                        <h1 className="font-weight-light">Facility House</h1>
                        <p>Phòng President Suite được trang trí với phong cách hoàng gia, hướng ra bãi biển Bắc Mỹ An
                            tuyệt
                            đẹp.
                            Căn phòng mang nhiều những nét độc đáo riêng khác lạ với bất kỳ loại phòng nào khác tại khu
                            nghỉ
                            có trang bị TV màn hình lớn trong phòng khách rộng, giường King kết nối cùng phòng tắm lát
                            đá
                            cẩm
                            thạch với bồn tắm và bồn vệ sinh điện tử, hiện đại.</p>
                        <Link to="/facility-house" className="btn btn-warning">Chi Tiết</Link>
                    </div>
                    <div className="col-lg-7"><img className="img-fluid rounded mb-4 mb-lg-0"
                                                   src="https://decofuni.vn/Upload/images/tin-tuc/cac-loai-phong-cua-resort.jpg"
                                                   alt="..."/></div>
                </div>
                {/*--------------------*/}
                {/*--------------------*/}
                <div className="row gx-4 gx-lg-5 align-items-center my-5">
                    <div className="col-lg-7"><img className="img-fluid rounded mb-4 mb-lg-0"
                                                   src="https://nhatrang-tourist.com/image/cache/catalog/KH%C3%81CH%20S%E1%BA%A0N/Fusion%20Cam%20Ranh/Ocean%20Suite-750x414.jpg"
                                                   alt="..."/></div>
                    <div className="col-lg-5">
                        <h1 className="font-weight-light">Facility Villa</h1>
                        <p>Biệt thự Diamond là căn Biệt thự sang trọng nhất khu Biệt thự Furama Villas Đà Nẵng.
                            Nằm ngay trên bãi biển với nội thất hiện đại được hoàn thiện với các điểm nhấn truyền thống,
                            điểm xuyết những yếu tố phong thủy Á Đông, các căn phòng được thiết kế để hứng trọn ánh sáng
                            miền
                            biển nhiệt đới tạo ra sự hài hòa và sáng lấp lánh, sang trọng và tuyệt mỹ như một viên kim
                            cương
                            trên cát.</p>
                        <Link to="/facility-villa" className="btn btn-warning">Chi Tiết</Link>
                    </div>

                </div>
                {/*--------------------*/}
                {/*<div className="min-vh-100 ">*/}
                {/*    <h1 style={{textAlign: "center", marginTop: "1rem"}}>Facility</h1>*/}
                {/*    /!*<Link to="/facility-add" className="btn btn-outline-success"*!/*/}
                {/*    /!*      style={{float: "right", marginRight: "2rem"}}>Thêm mới</Link>*!/*/}
                {/*    <div className="d-flex flex-wrap justify-content-start m-5">*/}
                {/*        <div className="card flex-grow-1" style={{width: "18rem"}}>*/}
                {/*            <img src="https://decofuni.vn/Upload/images/tin-tuc/noi-that-phong-ngu-resort.jpg"*/}
                {/*                 className="card-img-top" alt="..." style={{height: "16rem"}}/>*/}
                {/*            <div className="card-body">*/}
                {/*                <h5 className="card-title">Rooms</h5>*/}
                {/*                <p className="card-text">Some quick example text to build on the card title and make up*/}
                {/*                    the bulk*/}
                {/*                    of*/}
                {/*                    the card's content.</p>*/}
                {/*                <Link to={"/facility-room"} className="btn btn-warning">Chi Tiết</Link>*/}
                {/*                /!*<Link style={{marginLeft:"50%"}} to="/facility-edit" className="btn btn-warning">Sửa</Link>*!/*/}
                {/*            </div>*/}

                {/*        </div>*/}
                {/*        <div className="card flex-grow-1" style={{width: "18rem"}}>*/}
                {/*            <img src="https://decofuni.vn/Upload/images/tin-tuc/cac-loai-phong-cua-resort.jpg"*/}
                {/*                 className="card-img-top" alt="..." style={{height: "16rem"}}/>*/}
                {/*            <div className="card-body">*/}
                {/*                <h5 className="card-title">House</h5>*/}
                {/*                <p className="card-text">Some quick example text to build on the card title and make up*/}
                {/*                    the bulk*/}
                {/*                    of*/}
                {/*                    the card's content.</p>*/}
                {/*                <Link to="/facility-house" className="btn btn-warning">Chi Tiết</Link>*/}
                {/*                /!*<Link  style={{marginLeft:"50%"}} to="/facility-edit" className="btn btn-warning">Sửa</Link>*!/*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="card flex-grow-1" style={{width: "18rem"}}>*/}
                {/*            <img*/}
                {/*                src="https://nhatrang-tourist.com/image/cache/catalog/KH%C3%81CH%20S%E1%BA%A0N/Fusion%20Cam%20Ranh/Ocean%20Suite-750x414.jpg"*/}
                {/*                className="card-img-top" alt="..." style={{height: "16rem"}}/>*/}
                {/*            <div className="card-body">*/}
                {/*                <h5 className="card-title">Villa</h5>*/}
                {/*                <p className="card-text">Some quick example text to build on the card title and make up*/}
                {/*                    the bulk*/}
                {/*                    of*/}
                {/*                    the card's content.</p>*/}
                {/*                <Link to="/facility-villa" className="btn btn-warning">Chi Tiết</Link>*/}
                {/*                /!*<Link style={{marginLeft:"50%"}} to="/facility-edit" className="btn btn-warning">Sửa</Link>*!/*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        /!*<div className="card flex-grow-1" style={{width: "18rem"}}>*!/*/}
                {/*        /!*    <img*!/*/}
                {/*        /!*        src="https://homepage.momocdn.net/blogscontents/momo-upload-api-200717145329-637305944092533569.jpg"*!/*/}
                {/*        /!*        className="card-img-top" alt="..." style={{height: "16rem"}}/>*!/*/}
                {/*        /!*    <div className="card-body">*!/*/}
                {/*        /!*        <h5 className="card-title">Vip</h5>*!/*/}
                {/*        /!*        <p className="card-text">Some quick example text to build on the card title and make up*!/*/}
                {/*        /!*            the bulk*!/*/}
                {/*        /!*            of*!/*/}
                {/*        /!*            the card's content.</p>*!/*/}
                {/*        /!*        <Link  to="/facility-edit" className="btn btn-warning">Chi Tiết</Link>*!/*/}
                {/*        /!*        <Link style={{marginLeft:"50%"}} to="/facility-edit" className="btn btn-warning">Sửa</Link>*!/*/}
                {/*        /!*    </div>*!/*/}
                {/*        /!*</div>*!/*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </>
    )

}

export default ListFacility;