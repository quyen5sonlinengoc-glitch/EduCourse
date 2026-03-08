import heroImage from "@/assets/hero-math.jpg";
import { Button } from "@/components/ui/button";
import { BookOpen, Star, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] overflow-hidden hero-gradient">
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }} />
      
      <div className="relative z-10 container mx-auto px-4 py-24 items-center text-center gap-8 flex flex-col">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm text-accent-foreground">
          <Star className="w-4 h-4 text-accent" />
          <span className="text-primary-foreground/80">Nền tảng #1 luyện thi Toán 12</span>
        </div>
        <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground max-w-3xl leading-tight">
          Chinh phục <span className="text-accent">Toán lớp 12</span> cùng EduCourse
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl">
          Hệ thống khóa học chất lượng cao, giúp bạn tự tin đạt điểm cao trong kỳ thi THPT Quốc Gia.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="accent" size="lg" className="text-lg px-8">
            Xem khóa học
          </Button>
          <Button variant="heroOutline" size="lg" className="text-lg px-8">
            Học thử miễn phí
          </Button>
        </div>
        <div className="flex flex-wrap justify-center gap-8 mt-8 text-primary-foreground/60">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-accent" />
            <span>10,000+ học viên</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-accent" />
            <span>50+ khóa học</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-accent" />
            <span>4.9/5 đánh giá</span>
          </div>
        </div>
      </div>
    </section>);

};

export default Hero;
