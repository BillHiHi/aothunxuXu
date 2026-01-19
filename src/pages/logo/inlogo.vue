<template>
  <div class="inlogo-page">
    <!-- Hero Section -->
    <header class="hero-section text-center text-lg-start text-white position-relative">
      <div class="overlay"></div>
      <div class="container position-relative z-1">
        <div class="row align-items-center py-5">
          <div class="col-lg-8">
            <span class="badge bg-white text-primary rounded-pill px-3 py-2 mb-3 fw-bold">DỊCH VỤ CHUYÊN NGHIỆP</span>
            <h1 class="display-3 fw-bold mb-3">
              In Logo Áo Thun <br />
              <span class="text-warning">Theo Yêu Cầu</span>
            </h1>
            <p class="lead mb-4 text-white-50" style="max-width: 600px;">
              Giải pháp in ấn logo sắc nét, bền màu trên mọi chất liệu vải. 
              Công nghệ hiện đại đáp ứng từ số lượng ít đến quy mô công nghiệp.
            </p>
            <div class="d-flex flex-wrap gap-3">
              <a href="#contact" class="btn btn-primary btn-lg px-5 rounded-pill shadow">
                Nhận Báo Giá Ngay
              </a>
              <a href="#services" class="btn btn-outline-light btn-lg px-5 rounded-pill">
                Xem Công Nghệ
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Why Choose Us -->
    <section class="py-5 bg-white">
      <div class="container py-5">
        <div class="text-center mb-5">
          <span class="section-tag">TẠI SAO CHỌN CHÚNG TÔI?</span>
          <h2 class="fw-bold display-6">Chất lượng tạo nên uy tín</h2>
        </div>
        
        <div class="row g-4">
          <div class="col-md-4" v-for="(feature, index) in features" :key="index">
            <div class="feature-card p-4 rounded-4 h-100 border border-light shadow-sm text-center hover-up">
              <div class="icon-wrapper mb-4 mx-auto bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center">
                <i :class="feature.icon" class="fs-4"></i>
              </div>
              <h5 class="fw-bold mb-3">{{ feature.title }}</h5>
              <p class="text-muted small mb-0">{{ feature.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Printing Technologies -->
    <section id="services" class="py-5 bg-light">
      <div class="container py-5">
        <div class="row align-items-center mb-5">
          <div class="col-lg-6">
            <span class="section-tag">CÔNG NGHỆ IN ẤN</span>
            <h2 class="fw-bold display-6 mb-3">Đa dạng giải pháp in ấn</h2>
            <p class="text-muted">Tùy thuộc vào chất liệu vải và số lượng, chúng tôi sẽ tư vấn công nghệ in phù hợp nhất để tối ưu chi phí và độ bền.</p>
          </div>
          <div class="col-lg-6 text-lg-end">
            <a href="#contact" class="btn btn-outline-primary rounded-pill px-4">Tư vấn kỹ thuật <i class="bi bi-arrow-right ms-2"></i></a>
          </div>
        </div>

        <div class="row g-4">
          <div class="col-md-6 col-lg-3" v-for="(tech, index) in technologies" :key="index">
            <div class="tech-card bg-white rounded-4 overflow-hidden shadow-sm h-100">
              <div class="card-img-top position-relative overflow-hidden" style="height: 220px;">
                 <img :src="tech.image" class="w-100 h-100 object-fit-cover hover-zoom" :alt="tech.name">
                 <div class="position-absolute bottom-0 start-0 p-3 w-100 bg-gradient-dark d-none">
                    <!-- Optional overlay if needed -->
                 </div>
              </div>
              <div class="p-4">
                <h5 class="fw-bold mb-2">{{ tech.name }}</h5>
                <ul class="list-unstyled mb-0 small text-muted">
                  <li v-for="item in tech.features" :key="item" class="mb-1">
                    <i class="bi bi-check2 text-success me-1"></i> {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Color Palette Section -->
    <section id="colors" class="py-5 bg-white">
      <div class="container py-5 text-center">
        <span class="section-tag">BẢNG MÀU ÁO</span>
        <h2 class="fw-bold display-6 mb-3">Hơn 15+ màu sắc phong phú</h2>
        <p class="text-muted mb-5">100% Cotton cao cấp. Màu thực tế có thể chênh lệch nhẹ do ánh sáng.</p>

        <div class="row g-4 justify-content-center">
           <div class="col-4 col-sm-3 col-md-2" v-for="color in shirtColors" :key="color.name">
              <div class="color-swatch rounded-4 shadow-sm ratio ratio-1x1 mb-2" 
                   :style="{ backgroundColor: color.hex, border: color.border ? '1px solid #dee2e6' : 'none' }">
              </div>
              <div class="fw-bold small">{{ color.name }}</div>
           </div>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="py-5 bg-dark text-white process-section">
      <div class="container py-5 text-center">
        <span class="badge bg-primary bg-opacity-25 text-white border border-primary border-opacity-25 rounded-pill px-3 py-2 mb-3">QUY TRÌNH LÀM VIỆC</span>
        <h2 class="fw-bold mb-5">Đơn giản & Nhanh chóng</h2>
        
        <div class="row g-4 position-relative z-1">
          <div class="col-md-3" v-for="(step, index) in process" :key="index">
            <div class="step-item position-relative">
              <div class="step-number fw-bold display-4 text-white opacity-25 mb-2">{{ index + 1 }}</div>
              <div class="step-icon mb-3 text-primary fs-1">
                <i :class="step.icon"></i>
              </div>
              <h5 class="fw-bold">{{ step.title }}</h5>
              <p class="small text-white-50">{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="py-5 bg-light">
      <div class="container py-5">
        <div class="text-center mb-5">
           <span class="section-tag">DỰ ÁN TIÊU BIỂU</span>
           <h2 class="fw-bold display-6">Sản phẩm thực tế</h2>
        </div>
        <div class="row g-4">
           <div class="col-md-3 col-6" v-for="(img, idx) in galleryImages" :key="idx">
              <div class="position-relative overflow-hidden rounded-4 shadow-sm ratio ratio-4x3 tech-card">
                 <img :src="img.src" class="w-100 h-100 object-fit-cover hover-zoom" :alt="img.alt">
                 <div class="position-absolute bottom-0 start-0 p-3 w-100 bg-gradient-dark text-white">
                    <div class="fw-bold small">{{ img.title }}</div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section id="contact" class="py-5 bg-white">
      <div class="container py-5">
        <div class="row g-5 align-items-center">
          <div class="col-lg-5">
            <div class="pe-lg-5">
               <span class="section-tag">LIÊN HỆ BÁO GIÁ</span>
               <h2 class="fw-bold mb-4">Bạn đã sẵn sàng cho mẫu áo mới?</h2>
               <p class="text-muted mb-5">Để lại thông tin, đội ngũ Xuxu sẽ liên hệ tư vấn và gửi báo giá chi tiết trong vòng 30 phút.</p>
               
               <div class="d-flex align-items-center mb-4" v-for="info in contactDetails" :key="info.val">
                 <div class="icon-box bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center me-3" style="width: 50px; height: 50px;">
                   <i :class="info.icon" class="fs-5"></i>
                 </div>
                 <div>
                   <label class="small text-muted d-block">{{ info.label }}</label>
                   <span class="fw-bold fs-5">{{ info.val }}</span>
                 </div>
               </div>
            </div>
          </div>

          <div class="col-lg-7">
            <div class="card border-0 shadow-lg p-4 p-md-5 rounded-4 bg-light">
              <h4 class="fw-bold mb-4">Gửi yêu cầu in ấn</h4>
              <form @submit.prevent="handleSubmit">
                <div class="row mb-3">
                  <div class="col-md-6">
                    <label class="form-label small fw-bold">Họ tên</label>
                    <input v-model="form.name" type="text" class="form-control" placeholder="Tên của bạn" required />
                  </div>
                  <div class="col-md-6">
                    <label class="form-label small fw-bold">Số điện thoại</label>
                    <input v-model="form.phone" type="text" class="form-control" placeholder="090..." required />
                  </div>
                </div>
                
                <div class="mb-3">
                  <label class="form-label small fw-bold">Dịch vụ quan tâm</label>
                  <select v-model="form.service" class="form-select">
                    <option value="" disabled>Chọn loại in ấn</option>
                    <option v-for="tech in technologies" :key="tech.name" :value="tech.name">{{ tech.name }}</option>
                    <option value="other">Khác / Cần tư vấn thêm</option>
                  </select>
                </div>

                <div class="mb-4">
                  <label class="form-label small fw-bold">Nội dung chi tiết</label>
                  <textarea v-model="form.message" class="form-control" rows="3" placeholder="Số lượng, màu sắc, ý tưởng thiết kế..."></textarea>
                </div>

                <button type="submit" class="btn btn-primary w-100 py-3 rounded-pill fw-bold shadow-sm">
                  Gửi Yêu Cầu Tư Vấn
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue';

// Import Data
import { features, technologies, process, shirtColors, contactDetails, galleryImages } from '@/data/logo.js';

const form = ref({
  name: '',
  phone: '',
  service: '',
  message: ''
});

const handleSubmit = () => {
  if(!form.value.name || !form.value.phone) return;
  alert(`Cảm ơn ${form.value.name}! Đã nhận thông tin. Chúng tôi sẽ liên hệ số ${form.value.phone} sớm nhất.`);
  // Reset form
  form.value = { name: '', phone: '', service: '', message: '' };
};

</script>

<style scoped>
/* Hero Settings */
.hero-section {
  background-image: url('@/assets/images/hongbang1.jpg');
  background-size: cover;
  background-position: center;
  /* background-attachment: fixed; Disable fixed on mobile if needed, but looks cool */
  min-height: 60vh;
  display: flex;
  align-items: center;
}
.hero-section .overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 100%);
  z-index: 0;
}

/* Feature Cards */
.feature-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.hover-up:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
}
.icon-wrapper {
  width: 64px;
  height: 64px;
}

/* Section Tag */
.section-tag {
  background: #E8EFFF;
  color: #2D5BFF;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  display: inline-block;
  margin-bottom: 0.5rem;
  letter-spacing: 0.5px;
}


/* Tech Card */
.tech-card {
  border: 1px solid rgba(0,0,0,0.05);
  transition: all 0.3s;
}
.tech-card:hover {
  border-color: #2D5BFF;
  transform: translateY(-5px);
}
.tech-card .hover-zoom {
  transition: transform 0.5s ease;
}
.tech-card:hover .hover-zoom {
  transform: scale(1.1);
}

/* Color Swatch */
.color-swatch {
  transition: transform 0.2s;
  cursor: pointer;
}
.color-swatch:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 10px rgba(0,0,0,0.15) !important;
}

/* Process Section */
.step-item::after {
  content: '';
  display: none; /* Hidden on mobile by default */
  position: absolute;
  top: 30%;
  right: -50%;
  width: 100%;
  height: 2px;
  background: rgba(255,255,255,0.1);
  z-index: -1;
}
@media (min-width: 768px) {
  .step-item:not(:last-child)::after {
    display: block;
  }
}

/* Form */
.form-control, .form-select {
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
}
.form-control:focus, .form-select:focus {
  border-color: #2D5BFF;
  box-shadow: 0 0 0 3px rgba(45, 91, 255, 0.1);
}
</style>
