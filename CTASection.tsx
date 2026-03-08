import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 hero-gradient relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Sẵn sàng chinh phục Toán 12?
        </h2>
        <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
          Đăng ký ngay hôm nay để nhận ưu đãi giảm 40% cho tất cả khóa học. Chỉ còn trong tháng này!
        </p>
        <Button variant="accent" size="lg" className="text-lg px-10">
          Bắt đầu học ngay
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
