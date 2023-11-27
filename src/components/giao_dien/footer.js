function Footer(){
    return(
        <>
            <div className="row see_all">
                <div class="row">
                    <div class="col-6 col-md-2 mb-3">
                        <h5>SamSung</h5>
                        <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">SamSung Note 20 Ultra</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">SamSung S22 Ultra</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">SamSung S22 Plus</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">SamSung A753</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">SamSung S7 Edge</a></li>
                        </ul>
                    </div>

                    <div class="col-6 col-md-2 mb-3">
                        <h5>IPhone</h5>
                        <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">IPhone 13 </a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">IPhone 15 Pro</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">IPhone 14 Plus</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Iphone 8 Plus</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">IPhone XS Max</a></li>
                        </ul>
                    </div>

                    <div class="col-6 col-md-2 mb-3">
                        <h5>Oppo</h5>
                        <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Oppo A75</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Oppo Reno 10</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Oppo Note 8</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Oppo A80</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Oppo Plus</a></li>
                        </ul>
                    </div>

                    <div class="col-md-5 offset-md-1 mb-3">
                        <form>
                            <h5>Theo dõi bản tin của chúng tôi</h5>
                            <p>Thông báo hàng tháng về những gì mới và thú vị từ chúng tôi.</p>
                            <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                                <label for="newsletter1" class="visually-hidden">Email </label>
                                <input id="newsletter1" type="text" class="form-control" placeholder="Email address"/>
                                <button class="btn btn-primary" type="button">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
                
                <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                    <p>&copy; 2023 Company, Inc. All rights reserved.</p>
                    <ul class="list-unstyled d-flex">
                        <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"></svg></a></li>
                        <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"></svg></a></li>
                        <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"></svg></a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}
export default Footer;