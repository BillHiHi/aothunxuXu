
import inlua from '@/assets/images/inlua.jpg' // Placeholder
// Suggestion: Add specific sticker images to assets later

export const features = [
    {
        icon: 'bi bi-droplet-fill',
        title: 'Chống Nước Tốt',
        desc: 'Decal nhựa và cán màng giúp tem nhãn bền màu, không thấm nước.'
    },
    {
        icon: 'bi bi-scissors',
        title: 'Cắt Bế Theo Yêu Cầu',
        desc: 'Cắt bế theo mọi hình dáng (tròn, vuông, elip, hình nhân vật...) với độ chính xác cao.'
    },
    {
        icon: 'bi bi-sticky-fill',
        title: 'Độ Bám Dính Cao',
        desc: 'Keo dán chất lượng, bám chắc trên nhiều bề mặt: chai lọ, bao bì, nhựa, thủy tinh.'
    }
];

export const technologies = [
    {
        name: 'In Decal Giấy',
        image: inlua, // Placeholder
        icon: 'bi bi-file-earmark-text-fill',
        features: ['Giá thành rẻ nhất', 'Thích hợp tem nhãn phụ', 'Màu sắc tươi sáng']
    },
    {
        name: 'In Decal Nhựa (Sữa/Trong)',
        image: inlua, // Placeholder
        icon: 'bi bi-droplet',
        features: ['Chống nước tuyệt đối', 'Bền bỉ với môi trường', 'Không rách']
    },
    {
        name: 'In Tem Bạc / Xi Bạc',
        image: inlua, // Placeholder
        icon: 'bi bi-star-fill',
        features: ['Sang trọng, cao cấp', 'Chịu nhiệt tốt', 'Thường dùng cho máy móc']
    },
    {
        name: 'In Tem Vỡ (Bảo Hành)',
        image: inlua, // Placeholder
        icon: 'bi bi-shield-lock-fill',
        features: ['Chống tháo gỡ', 'Bảo vệ thương hiệu', 'Đánh dấu bảo hành']
    }
];

export const process = [
    { icon: 'bi bi-chat-right-text', title: 'Tư Vấn Chất Liệu', desc: 'Chọn loại decal phù hợp với sản phẩm (chai lọ, bao bì, máy móc...)' },
    { icon: 'bi bi-bezier2', title: 'Thiết Kế & Cắt Bế', desc: 'Thiết kế mẫu và khuôn cắt theo kích thước yêu cầu' },
    { icon: 'bi bi-printer-fill', title: 'In Ấn & Gia Công', desc: 'In sắc nét và gia công cán màng, ép kim nếu có' },
    { icon: 'bi bi-box-seam', title: 'Kiểm Tra & Giao Hàng', desc: 'Đóng gói cẩn thận, giao hàng tận nơi' }
];

export const contactDetails = [
    { icon: 'bi bi-telephone-fill', label: 'Hotline/Zalo', val: '076 771 0030' },
    { icon: 'bi bi-envelope-fill', label: 'Email', val: 'aothunxuxu@gmail.com' },
    { icon: 'bi bi-geo-alt-fill', label: 'Xưởng in', val: '38/16 Đ. Đặng Đức Thuật, Tam Hiệp, Biên Hòa, Đồng Nai' },
];

export const galleryImages = [
    { src: inlua, alt: 'Tem nhãn chai lọ', title: 'Tem Mỹ Phẩm' }, // Placeholder
    { src: inlua, alt: 'Tem decal giấy', title: 'Tem Nhãn Phụ' },
    { src: inlua, alt: 'Tem bảo hành', title: 'Tem Vỡ Bảo Hành' },
    { src: inlua, alt: 'Tem nhựa trong', title: 'Decal Trong Suốt' },
    { src: inlua, alt: 'Sticker logo', title: 'Sticker Logo' },
    { src: inlua, alt: 'Tem xi bạc', title: 'Tem Máy Móc' },
    { src: inlua, alt: 'Tem giấy kraft', title: 'Tem Giấy Kraft' },
    { src: inlua, alt: 'Tem cute', title: 'Sticker Cute' },
];
