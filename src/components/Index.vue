<template>
  <div class="index-page">
    <header class="hero-section text-center text-lg-start">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-7 text-white">
            <h1 class="display-3 fw-bold mb-3">
              Áo thun Xuxu <br />
              <span class="text-brand-blue">In ấn áo thun</span>
            </h1>
            <p class="lead mb-4">
            Tự hào là đơn vị chuyên thiết kế và sản xuất các sản phẩm in ấn chất lượng cao, kết hợp giữa công nghệ hiện đại và tư duy thẩm mỹ, mang đến những giải pháp in ấn bền đẹp, sắc nét và giàu giá trị cho thương hiệu, không gian làm việc và các hoạt động truyền thông.            </p>
            <div class="d-flex flex-wrap gap-3">
              <a href="#project-story" class="btn btn-primary btn-lg px-5 rounded-pill shadow-sm">
                Khám phá dự án
              </a>          
              <a href="#contact" class="btn btn-outline-light btn-lg px-5 rounded-pill">Liên hệ ngay</a>
            </div>
          </div>
        </div>

        <div class="row mt-5 pt-4">
          <div class="col-md-3 col-6 mb-3" v-for="stat in quickStats" :key="stat.label">
            <div class="stat-card text-white">
              <div class="h3 fw-bold mb-0">{{ stat.value }}</div>
              <div class="small opacity-75">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section id="about" class="py-5">
      <div class="container py-5">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <div class="row g-3">
              <div class="col-12">
                <img :src="hb3" class="img-fluid rounded-4 shadow w-100 object-fit-cover" style="height: 400px;" alt="Năng lực sản xuất">
              </div>
              <div class="col-6">
                <img :src="hb2" class="img-fluid rounded-4 shadow w-100 object-fit-cover" style="height: 250px;" alt="Chi tiết sản xuất">
              </div>
              <div class="col-6">
                <img :src="hb4" class="img-fluid rounded-4 shadow w-100 object-fit-cover" style="height: 250px;" alt="Sản phẩm hoàn thiện">
              </div>
            </div>
          </div>
          <div class="col-lg-6 ps-lg-5">
            <span class="badge bg-primary bg-opacity-10 text-primary rounded-pill px-3 py-2 mb-3">VỀ CHÚNG TÔI</span>
            <h2 class="fw-bold mb-4 display-6">Áo thun Xuxu với năng lực sản xuất đa dạng</h2>
            <p class="text-muted mb-4 lh-lg">
              Với hơn 15 năm kinh nghiệm trong ngành may mặc và trang phục, chúng tôi tự hào là đối tác tin cậy của nhiều doanh nghiệp và tổ chức giáo dục. Không chỉ chuyên về may mặc, chúng tôi còn mở rộng năng lực sản xuất các sản phẩm quà tặng cao cấp.
            </p>

            <div class="d-flex align-items-start mb-4" v-for="cap in capabilities" :key="cap.title">
              <div class="bg-primary bg-opacity-10 p-3 rounded-3 me-3 text-primary d-flex align-items-center justify-content-center" style="width: 48px; height: 48px;">
                <i :class="cap.icon" class="fs-5"></i>
              </div>
              <div>
                <h5 class="fw-bold mb-1 fs-6">{{ cap.title }}</h5>
                <p class="small text-muted mb-0">{{ cap.desc }}</p>
              </div>
            </div>

            <div class="text-success fw-medium d-flex align-items-center mt-4">
              <i class="bi bi-check-circle-fill me-2"></i> 
              <span>Đã phục vụ hơn 500+ khách hàng doanh nghiệp</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="projects" class="py-5 bg-light">
      <div class="container py-5 text-center">
        <span class="badge bg-primary bg-opacity-10 text-primary rounded-pill px-3 py-2 mb-3">NĂNG LỰC SẢN XUẤT</span>
        <h2 class="fw-bold mb-4 display-5">Đồng Hồ Kỷ Niệm Đại Học Hồng Bàng</h2>
        <p class="text-muted mx-auto mb-5 lh-lg" style="max-width: 800px;">
          Một chiến dịch đầy ý nghĩa khi chúng tôi được đồng hành cùng Trường Đại học Hồng Bàng trong việc tạo ra món quà kỷ niệm đặc biệt cho gần 7,000 sinh viên.
        </p>

        <div class="row g-4">
          <div class="col-lg-3 col-md-6" v-for="detail in projectDetails" :key="detail.label">
            <div class="p-4 rounded-4 bg-primary bg-opacity-10 h-100 text-start border border-primary border-opacity-10">
              <i :class="detail.icon" class="text-primary fs-4 mb-3 d-block"></i>
              <div class="small text-muted mb-1">{{ detail.label }}</div>
              <div class="fw-bold text-dark">{{ detail.value }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section id="project-story" class="py-5 bg-white">
      <div class="container py-5">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <div class="position-relative">
              <img :src="storyImg" class="img-fluid rounded-4 shadow-lg w-100 object-fit-cover" style="min-height: 500px;" alt="Câu chuyện">
              <div class="position-absolute bottom-0 start-0 bg-primary text-white p-3 m-3 rounded-3 shadow-sm d-none d-md-block">
                <p class="mb-0 fw-bold">Quy mô lớn</p>
                <small>Hợp tác cùng HIU</small>
              </div>
            </div>
          </div>
          <div class="col-lg-6 ps-lg-5">
            <span class="badge bg-primary bg-opacity-10 text-primary rounded-pill px-3 py-2 mb-3">NĂNG LỰC CỦA CHÚNG TÔI</span>
            <h2 class="fw-bold mb-4 display-6">Năng lực sản xuất & dấu ấn thương hiệu</h2>
            <div class="story-content text-muted lh-lg">
                <p class="mb-4">Với kinh nghiệm trong lĩnh vực thiết kế và sản xuất đồng hồ theo yêu cầu, 
                chúng tôi tự hào là đơn vị được Trường Đại học Hồng Bàng tin tưởng lựa chọn 
                để thực hiện dòng đồng hồ kỷ niệm dành cho sinh viên.
                </p>
                <p>
                Mỗi sản phẩm được thiết kế đồng bộ với logo, màu sắc và tinh thần thương hiệu của nhà trường, 
                không chỉ đảm bảo tính thẩm mỹ mà còn truyền tải giá trị kỷ niệm và dấu ấn học đường. 
                Đồng hồ không đơn thuần là công cụ đo thời gian, mà còn là biểu tượng của hành trình trưởng thành.
                </p>
              <div class="p-4 bg-light rounded-3 border-start border-primary border-4">
                <p class="mb-0 fw-semibold text-dark fst-italic">
                "Với quy mô sản xuất gần 7.000 chiếc, chúng tôi khẳng định năng lực triển khai số lượng lớn, 
                kiểm soát chất lượng chặt chẽ và đảm bảo sự đồng nhất trong từng chi tiết sản phẩm."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section id="gallery" class="py-5 bg-dark text-white"> <div class="container py-5 text-center">
        <div class="row g-5">
          <div class="col-md-6 mb-4" v-for="service in services" :key="service.title">
            
            <div class="mb-3">
              <h5 class="fw-bold mb-1">
                <span class="text-uppercase">{{ service.category }}</span> 
                <span class="fw-light opacity-75"> | {{ service.subCategory }}</span>
              </h5>
              <p class="small opacity-75 mx-auto" style="max-width: 500px;">{{ service.desc }}</p>
            </div>

            <div class="video-box rounded-2 overflow-hidden shadow-lg border border-secondary">
              <div class="ratio ratio-16x9">
                <iframe 
                  :src="service.videoUrl" 
                  title="YouTube video" 
                  allowfullscreen>
                </iframe>
              </div>
              
              <div class="bg-black p-2 d-flex justify-content-between align-items-center">
                <small class="text-truncate me-2">{{ service.title }}</small>
                <a :href="service.link" target="_blank" class="btn btn-sm btn-outline-light px-3 py-0" style="font-size: 0.75rem;">
                  Xem thêm
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="py-5">
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-5">
            <span class="section-tag">LIÊN HỆ</span>
            <h2 class="fw-bold mb-4">Hãy để chúng tôi giúp bạn</h2>
            <div class="contact-info mt-5">
              <div class="d-flex mb-4" v-for="info in contactDetails" :key="info.val">
                <div class="bg-light p-3 rounded-circle me-3 text-primary">
                  <i :class="info.icon"></i>
                </div>
                <div>
                  <div class="small text-muted">{{ info.label }}</div>
                  <div class="fw-bold">{{ info.val }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="card border-0 shadow p-4 p-md-5 rounded-4">
              <h4 class="fw-bold mb-4">Gửi thông tin liên hệ</h4>
              <form @submit.prevent="handleSubmit">
                <div class="mb-3">
                  <label class="form-label small fw-bold">Họ và tên</label>
                  <input v-model="form.name" type="text" class="form-control" placeholder="Nguyễn Văn A" required />
                </div>
                <div class="row mb-3">
                  <div class="col-md-6">
                    <label class="form-label small fw-bold">Email</label>
                    <input v-model="form.email" type="email" class="form-control" placeholder="email@example.com" />
                  </div>
                  <div class="col-md-6">
                    <label class="form-label small fw-bold">Số điện thoại</label>
                    <input v-model="form.phone" type="text" class="form-control" placeholder="0123 456 789" required />
                  </div>
                </div>
                <div class="mb-4">
                  <label class="form-label small fw-bold">Nội dung</label>
                  <textarea v-model="form.message" class="form-control" rows="4"></textarea>
                </div>
                <button type="submit" class="btn btn-primary btn-lg w-100 rounded-pill">Gửi thông tin</button>
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

// Import Images - Sử dụng đường dẫn @/ cho an toàn
import hb1 from '@/assets/images/hongbang1.jpg'
import hb2 from '@/assets/images/hongbang2.jpg'
import hb3 from '@/assets/images/hongbang3.jpg'
import hb4 from '@/assets/images/hongbang4.jpg'
import storyImg from '@/assets/images/hongbang5.jpg'

const quickStats = ref([
  { label: 'Năm kinh nghiệm', value: '15+' },
  { label: 'Cam kết chất lượng', value: '100%' },
  { label: 'Đối tác tin cậy', value: '500+' }
]);

const projectDetails = ref([
  { icon: 'bi bi-mortarboard', label: 'Đối tác', value: 'Trường Đại học Hồng Bàng' },
  { icon: 'bi bi-calendar-event', label: 'Thời gian', value: 'Tháng 9 - 11/2025' },
  { icon: 'bi bi-box-seam', label: 'Số lượng', value: 'Gần 7,000 chiếc' },
  { icon: 'bi bi-star', label: 'Mục tiêu', value: 'Quà tặng sinh viên' }
]);

const capabilities = ref([
  { icon: 'bi bi-buildings', title: 'Năng lực sản xuất mạnh mẽ', desc: 'Trang thiết bị hiện đại, quy trình sản xuất chuyên nghiệp' },
  { icon: 'bi bi-award', title: 'Chất lượng đảm bảo', desc: 'Kiểm soát chất lượng nghiêm ngặt từng khâu sản xuất' },
  { icon: 'bi bi-graph-up-arrow', title: 'Đa dạng sản phẩm', desc: 'Từ may mặc đến các sản phẩm quà tặng cao cấp' }
]);

const services = ref([
  { 
    category: 'MAY - IN - THÊU',
    subCategory: 'Đồng phục',
    title: 'Bàn in lụa thủ công trên áo thun | In tràm...', 
    desc: 'Áo thun đồng phục công ty, tạp dề, nón, khăn... Quảng cáo: decal, standee, băng rôn, poster, tranh canvas, biển báo mica, alu...', 
    videoUrl: 'https://www.youtube.com/embed/INMTKZ4Uc5c', 
  },
  { 
    category: 'IN TÚI',
    subCategory: 'Thời trang, thực phẩm',
    title: 'In túi quai sữa đựng thực phẩm - túi như...', 
    desc: 'Túi đựng sản phẩm thời trang, giày dép, thuốc tây và túi đựng thực phẩm tự hủy, bao thư, túi giấy bánh mì, túi hồ sơ...', 
    videoUrl: 'https://www.youtube.com/embed/03qm5C5qznI', 
    link: 'https://aothunxuxu.com' 
  },
  { 
    category: 'QUÀ TẶNG',
    subCategory: 'Doanh nghiệp',
    title: 'In thư cảm ơn, in tờ rơi, form mẫu, phiếu...', 
    desc: 'Sản phẩm cao cấp cho sự kiện và marketing. Thiết kế chuyên nghiệp, in ấn sắc nét trên nhiều chất liệu.', 
    videoUrl: 'https://www.youtube.com/embed/eUwwNweyG5s', 
    link: 'https://aothunxuxu.com' 
  },
  {
    category: 'TEM DÁN NHÃN',
    subCategory: 'Sản phẩm',
    title: 'Tem nhãn dán sản phẩm...Quà tặng doanh nghiệp: Bình giữ nhiệt, quạt nhựa, lược nhựa, bình nước, móc khoá,...', 
    desc: 'Sản phẩm cao cấp cho sự kiện và marketing. Thiết kế chuyên nghiệp, in ấn sắc nét trên nhiều chất liệu.', 
    videoUrl: 'https://www.youtube.com/embed/eUwwNweyG5s', 
    link: 'https://aothunxuxu.com' 
  }
]);

const contactDetails = ref([
  { icon: 'bi bi-telephone', label: 'Điện thoại', val: '076 771 0030' },
  { icon: 'bi bi-envelope', label: 'Email', val: 'aolopxuxu@gmail.com' },
  { icon: 'bi bi-geo-alt', label: 'Địa chỉ', val: 'Biên Hòa, Đồng Nai' }
]);

const form = ref({ name: '', email: '', phone: '', message: '' });

const handleSubmit = () => {
  alert('Thông tin của ' + form.value.name + ' đã được gửi thành công!');
  form.value = { name: '', email: '', phone: '', message: '' };
};
</script>

<style scoped>
.text-brand-blue { color: #2D5BFF; }

/* Hero Section */
.hero-section {
  background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), 
              url('@/assets/images/hongbang1.jpg');
  background-size: cover;
  background-position: center;
  padding: 120px 0;
}

.stat-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 20px;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.2);
}

.section-tag {
  background: #E8EFFF;
  color: #2D5BFF;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
  display: inline-block;
  margin-bottom: 1rem;
}

.icon-box {
  width: 60px;
  height: 60px;
}

.bg-purple { background-color: #9b59b6; }
.bg-orange { background-color: #f39c12; }

/* Form Focus */
.form-control:focus {
  border-color: #2D5BFF;
  box-shadow: 0 0 0 0.25rem rgba(45, 91, 255, 0.1);
}

/* Scroll Offset cho Anchor Links */
section {
  scroll-margin-top: 80px;
}
</style>