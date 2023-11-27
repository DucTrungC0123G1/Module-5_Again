import React from "react";

export function Index() {
    return (
        <>
            <header className="bg-dark py-5">
                <div className="container px-5">
                    <div className="row gx-5 align-items-center justify-content-center">
                        <div className="col-lg-8 col-xl-7 col-xxl-6">
                            <div className="my-5 text-center text-xl-start">
                                <h1 className="display-5 fw-bolder text-white mb-2">KHU NGHỈ DƯỠNG ĐẲNG CẤP THẾ GIỚI,
                                    FURAMA ĐÀ NẴNG, NỔI TIẾNG LÀ KHU NGHỈ DƯỠNG ẨM THỰC TẠI VIỆT NAM.</h1>
                                <p className="lead fw-normal text-white-50 mb-4">Hướng ra bãi biển Đà Nẵng trải dài cát trắng,
                                    Furama Resort Đà Nẵng là cửa ngõ đến với 3 di sản văn hoá thế giới: Hội An (20 phút),
                                    Mỹ Sơn (90 phút) và Huế (2 tiếng. 196 phòng hạng sang cùng với 70 căn biệt thự từ hai
                                    đến bốn phòng ngủ có hồ bơi riêng đều được trang trí trang nhã, theo phong cách thiết
                                    kế truyền thống của Việt Nam và kiến trúc thuộc địa của Pháp, biến Furama thành khu
                                    nghỉ dưỡng danh giá nhất tại Việt Nam – vinh dự được đón tiếp nhiều người nổi tiếng,
                                    giới hoàng gia, chính khách, ngôi sao điện ảnh và các nhà lãnh đạo kinh doanh quốc tế.</p>
                                <div
                                    className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                    <a className="btn btn-primary btn-lg px-4 me-sm-3" href="#features">Get Started</a>
                                    <a className="btn btn-outline-light btn-lg px-4" href="#!">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img
                            className="img-fluid rounded-3 my-5" src="https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2020/06/Review-Furama-Resort-Da-Nang-13.jpg"
                            alt="..."/></div>
                    </div>
                </div>
            </header>
            {/*    -------------------*/}
            <section className="py-5" id="features">
                <div className="container px-5 my-5">
                    <div className="row gx-5">
                        <div className="col-lg-4 mb-5 mb-lg-0"><h2 className="fw-bolder mb-0">A better way to start
                            building.</h2></div>
                        <div className="col-lg-8">
                            <div className="row gx-5 row-cols-1 row-cols-md-2">
                                <div className="col mb-5 h-100">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                        <img style={{height:"200px",width:"375px"}} src="https://furamavietnam.com/wp-content/uploads/2023/08/ENGLISH-COUPLES-RETREAT-EXP-30-11-768x512.jpg" alt=""/>
                                    
                                    </div>
                                    <h2 className="h5">Featured title</h2>
                                    <p className="mb-0">Paragraph of text beneath the heading to explain the heading.
                                        Here is just a bit more text.</p>
                                </div>
                                <div className="col mb-5 h-100">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><img style={{height:"200px",width:"375px"}} src="https://furamavietnam.com/wp-content/uploads/2023/08/ENGLISH-COUPLES-RETREAT-EXP-30-11-768x512.jpg" alt=""/>
                                    </div>
                                    <h2 className="h5">Featured title</h2>
                                    <p className="mb-0">Paragraph of text beneath the heading to explain the heading.
                                        Here is just a bit more text.</p>
                                </div>
                                <div className="col mb-5 mb-md-0 h-100">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><img style={{height:"200px",width:"375px"}} src="https://furamavietnam.com/wp-content/uploads/2023/08/ENGLISH-COUPLES-RETREAT-EXP-30-11-768x512.jpg" alt=""/>
                                    </div>
                                    <h2 className="h5">Featured title</h2>
                                    <p className="mb-0">Paragraph of text beneath the heading to explain the heading.
                                        Here is just a bit more text.</p>
                                </div>
                                <div className="col h-100">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><img style={{height:"200px",width:"375px"}} src="https://furamavietnam.com/wp-content/uploads/2023/08/ENGLISH-COUPLES-RETREAT-EXP-30-11-768x512.jpg" alt=""/>
                                    </div>
                                    <h2 className="h5">Featured title</h2>
                                    <p className="mb-0">Paragraph of text beneath the heading to explain the heading.
                                        Here is just a bit more text.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*    -----------*/}
            <div className="py-5 bg-light">
                <div className="container px-5 my-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-10 col-xl-7">
                            <div className="text-center">
                                <div className="fs-4 mb-4 fst-italic">"Khu nghỉ dưỡng Furama Đà Nẵng là một khu nghỉ
                                    dưỡng 5 sao sang trọng, có uy tín và được xem là một trong những biểu tượng của
                                    ngành du lịch Việt Nam."
                                </div>
                                <div className="d-flex align-items-center justify-content-center">
                                    <img className="rounded-circle me-3"
                                         src="https://dummyimage.com/40x40/ced4da/6c757d" alt="..."/>
                                    <div className="fw-bold">
                                        Tom Ato
                                        <span className="fw-bold text-primary mx-1">/</span>
                                        CEO, Pomodoro
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*    ----------------*/}
            <section className="py-5">
                <div className="container px-5 my-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-8 col-xl-6">
                            <div className="text-center">
                                <h2 className="fw-bolder">From our blog</h2>
                                <p className="lead fw-normal text-muted mb-5">KHU NGHỈ DƯỠNG ĐẲNG CẤP THẾ GIỚI,
                                    FURAMA ĐÀ NẴNG, NỔI TIẾNG LÀ KHU NGHỈ DƯỠNG ẨM THỰC TẠI VIỆT NAM.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-5">
                        <div className="col-lg-4 mb-5">
                            <div className="card h-100 shadow border-0">
                                <img style={{height:"300px",width:"375px"}} className="card-img-top" src="https://furamavietnam.com/wp-content/uploads/2023/09/165A2321.jpg"
                                     alt="..."/>
                                <div className="card-body p-4">
                                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">News</div>
                                    <a className="text-decoration-none link-dark stretched-link" href="#!"><h5
                                        className="card-title mb-3">Blog post title</h5></a>
                                    <p className="card-text mb-0">Là khu nghỉ dưỡng danh giá nhất Việt Nam,
                                        Furama Resort Đà Nẵng tự hào phục vụ hàng nghìn du khách mỗi năm và đặc biệt
                                        là điểm đến ưa thích của nhiều hoàng gia, lãnh đạo doanh nghiệp quốc tế và khách
                                        nổi tiếng. Lên kế hoạch cho kỳ nghỉ của bạn với chúng tôi!</p>
                                </div>
                                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                                    <div className="d-flex align-items-end justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <img className="rounded-circle me-3"
                                                 src="https://dummyimage.com/40x40/ced4da/6c757d" alt="..."/>
                                            <div className="small">
                                                <div className="fw-bold">Kelly Rowan</div>
                                                <div className="text-muted">March 12, 2023 · 6 min read</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-5">
                            <div className="card h-100 shadow border-0">
                                <img style={{height:"300px",width:"375px"}} className="card-img-top" src="https://furamavietnam.com/wp-content/uploads/2023/09/1.jpg"
                                     alt="..."/>
                                <div className="card-body p-4">
                                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">Media</div>
                                    <a className="text-decoration-none link-dark stretched-link" href="#!"><h5
                                        className="card-title mb-3">Another blog post title</h5></a>
                                    <p className="card-text mb-0">Trải nghiệm ẩm thực tại Furama có sự pha trộn độc đáo
                                        các món ăn truyền thống Việt Nam với hương vị ẩm thực châu Á, Ý và châu Âu cùng
                                        các món bò nhập khẩu thượng hạng tại đa dạng các nhà hàng, quầy bar đẳng cấp được
                                        bao quanh bởi một khu vườn nhiệt đới hay hướng mình ra biển.</p>
                                </div>
                                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                                    <div className="d-flex align-items-end justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <img className="rounded-circle me-3"
                                                 src="https://dummyimage.com/40x40/ced4da/6c757d" alt="..."/>
                                            <div className="small">
                                                <div className="fw-bold">Josiah Barclay</div>
                                                <div className="text-muted">March 23, 2023 · 4 min read</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-5">
                            <div className="card h-100 shadow border-0">
                                <img style={{height:"300px",width:"375px"}} className="card-img-top" src="https://furamavietnam.com/wp-content/uploads/2023/09/spa.jpg"
                                     alt="..."/>
                                <div className="card-body p-4">
                                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">News</div>
                                    <a className="text-decoration-none link-dark stretched-link" href="#!"><h5
                                        className="card-title mb-3">The last blog post title is a little bit longer
                                        than the others</h5></a>
                                    <p className="card-text mb-0">Ẩn mình trong một góc nhỏ của khu nghỉ dưỡng,
                                        V-Senses Wellness & Spa đưa du khách đến một thiên đường thanh bình của sự thư
                                        giãn và trẻ hóa hoàn toàn. Hãy tận hưởng thời gian thư thái với những liệu trình
                                        trị liệu vô cùng đặc biệt tại V-senses Wellness & Spa.</p>
                                </div>
                                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                                    <div className="d-flex align-items-end justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <img className="rounded-circle me-3"
                                                 src="https://dummyimage.com/40x40/ced4da/6c757d" alt="..."/>
                                            <div className="small">
                                                <div className="fw-bold">Evelyn Martinez</div>
                                                <div className="text-muted">April 2, 2023 · 10 min read</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*// <!-- Call to action-->*/}
                                   </div>
            </section>
        </>
    )

}
