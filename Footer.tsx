import { BookOpen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <a href="/" className="flex items-center gap-2 font-heading text-xl font-bold mb-4">
              <BookOpen className="w-6 h-6 text-accent" />
              EduCourse
            </a>
            <p className="text-primary-foreground/60 text-sm max-w-sm">
              Nền tảng học Toán trực tuyến hàng đầu Việt Nam. Giúp hàng nghìn học sinh đạt điểm cao trong kỳ thi THPT Quốc Gia.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4">Khóa học</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><a href="#" className="hover:text-accent transition-colors">Đại số & Giải tích</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Hình học không gian</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Tổ hợp - Xác suất</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Đề thi thử</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4">Liên hệ</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li>Email: info@educourse.vn</li>
              <li>Hotline: 1900 xxxx</li>
              <li>Facebook: EduCourse Vietnam</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center text-sm text-primary-foreground/40">
          © 2026 EduCourse. Tất cả quyền được bảo lưu.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
