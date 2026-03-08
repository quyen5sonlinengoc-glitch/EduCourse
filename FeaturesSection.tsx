import { Award, Clock, Video, MessageCircle, Target, Shield } from "lucide-react";

const features = [
  { icon: Video, title: "Video bài giảng HD", desc: "Bài giảng chất lượng cao, dễ hiểu, xem lại không giới hạn" },
  { icon: Target, title: "Lộ trình cá nhân hóa", desc: "Hệ thống gợi ý bài học phù hợp với trình độ của bạn" },
  { icon: MessageCircle, title: "Hỗ trợ 24/7", desc: "Giải đáp thắc mắc nhanh chóng qua nhóm học tập" },
  { icon: Clock, title: "Học mọi lúc mọi nơi", desc: "Truy cập trên điện thoại, máy tính bảng và laptop" },
  { icon: Award, title: "Giáo viên giỏi", desc: "Đội ngũ thầy cô có kinh nghiệm luyện thi 10+ năm" },
  { icon: Shield, title: "Cam kết chất lượng", desc: "Hoàn tiền 100% nếu không hài lòng trong 7 ngày" },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tại sao chọn <span className="text-accent">EduCourse</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Chúng tôi cam kết mang đến trải nghiệm học tập tốt nhất cho học sinh lớp 12
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 border border-border group">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <f.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-card-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
