import CourseCard from "./CourseCard";

const courses = [
  {
    title: "Luyện thi THPT QG - Đại số & Giải tích 12",
    description: "Nắm vững kiến thức đại số, giải tích từ cơ bản đến nâng cao. Bao gồm hàm số, tích phân, logarit.",
    price: "599.000đ",
    originalPrice: "999.000đ",
    lessons: 48,
    students: 3200,
    rating: 4.9,
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop",
  },
  {
    title: "Hình học không gian - Từ Zero đến Hero",
    description: "Chinh phục hình học không gian với phương pháp tọa độ hóa và vector. Giải nhanh mọi dạng bài.",
    price: "499.000đ",
    originalPrice: "799.000đ",
    lessons: 36,
    students: 2100,
    rating: 4.8,
    badge: "Hot",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&h=400&fit=crop",
  },
  {
    title: "Tổ hợp - Xác suất - Thống kê",
    description: "Khóa học chuyên sâu về tổ hợp, xác suất và thống kê. Phương pháp giải nhanh, chính xác.",
    price: "399.000đ",
    originalPrice: "699.000đ",
    lessons: 28,
    students: 1500,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=600&h=400&fit=crop",
  },
  {
    title: "Đề thi thử THPT QG - Toán 2025",
    description: "Bộ 30 đề thi thử sát đề thi thật. Có video chữa chi tiết từng câu, phân tích ma trận đề.",
    price: "349.000đ",
    originalPrice: "599.000đ",
    lessons: 30,
    students: 4500,
    rating: 4.9,
    badge: "Mới",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
  },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Khóa học <span className="text-accent">nổi bật</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Được biên soạn bởi đội ngũ giáo viên giỏi, giàu kinh nghiệm luyện thi THPT Quốc Gia
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, i) => (
            <CourseCard key={i} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
