<template>
  <footer class="text-white py-5" style="background-color: #0f172a;">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-5 col-md-12">
          <div class="d-flex align-items-center mb-4">
            <div class="bg-primary rounded-3 d-flex align-items-center justify-content-center me-2" style="width: 45px; height: 45px;">
              <span class="fw-bold text-white fs-5">XX</span>
            </div>
            <h5 class="mb-0 fw-bold text-white">Áo Thun Xuxu</h5>
          </div>
          <p class="text-secondary lh-lg mb-4" style="max-width: 400px;">
            Với hơn 15 năm kinh nghiệm trong ngành may mặc, chúng tôi tự hào là đối tác tin cậy của doanh nghiệp và trường học.
          </p>
          <div class="d-flex gap-2">
            <a href="#" class="social-icon-box text-white border p-2 rounded-circle"><i class="bi bi-facebook"></i></a>
            <a href="#" class="social-icon-box text-white border p-2 rounded-circle"><i class="bi bi-envelope"></i></a>
          </div>
        </div>

        <div class="col-lg-3 col-md-6">
          <h6 class="fw-bold mb-4">Liên kết</h6>
          <ul class="list-unstyled">
            <li class="mb-3"><router-link to="/" class="text-secondary text-decoration-none">Trang chủ</router-link></li>
            <li class="mb-3"><a href="#about" class="text-secondary text-decoration-none">Về chúng tôi</a></li>
            <li class="mb-3"><router-link to="/products" class="text-secondary text-decoration-none">Sản phẩm</router-link></li>
          </ul>
        </div>

        <div class="col-lg-4 col-md-6">
          <h6 class="fw-bold mb-4">Liên hệ</h6>
          <ul class="list-unstyled text-secondary small">
            <li class="d-flex mb-3"><i class="bi bi-telephone text-primary me-3"></i>076 771 0030</li>
            <li class="d-flex mb-3"><i class="bi bi-envelope text-primary me-3"></i>aolopxuxu@gmail.com</li>
            <li class="d-flex"><i class="bi bi-geo-alt text-primary me-3"></i>Biên Hòa, Đồng Nai</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>