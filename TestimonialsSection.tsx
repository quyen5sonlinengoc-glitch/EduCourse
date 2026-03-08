import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Nguyễn Thị Mai",
    school: "THPT Chu Văn An, Hà Nội",
    score: "9.4 điểm Toán",
    text: "Nhờ EduCourse mà em đã đạt 9.4 điểm Toán trong kỳ thi THPT QG. Bài giảng rất dễ hiểu và phương pháp giải rất hay!",
    avatar: "M",
  },
  {
    name: "Trần Văn Hùng",
    school: "THPT Lê Hồng Phong, TP.HCM",
    score: "9.0 điểm Toán",
    text: "Em từ 6 điểm lên 9 điểm chỉ sau 3 tháng học. Thầy cô giảng rất tận tâm, hỗ trợ nhanh chóng.",
    avatar: "H",
  },
  {
    name: "Lê Thị Hương",
    school: "THPT Phan Đình Phùng, Hà Nội",
    score: "9.6 điểm Toán",
    text: "Lộ trình học rất khoa học, từ cơ bản đến nâng cao. Đặc biệt phần đề thi thử rất sát đề thật.",
    avatar: "H",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Học viên <span className="text-accent">nói gì</span>?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card rounded-xl p-6 card-shadow border border-border flex flex-col gap-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-card-foreground text-sm leading-relaxed italic">"{t.text}"</p>
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-accent/10 text-accent font-heading font-bold flex items-center justify-center text-sm">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-sm text-card-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.school} • {t.score}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
