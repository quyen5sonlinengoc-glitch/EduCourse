import { Button } from "@/components/ui/button";
import { BookOpen, Menu, X, Search } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 bg-[#f97415]/[0.33]">
        <a href="/" className="flex items-center gap-2 font-heading text-xl font-bold text-foreground">
          <BookOpen className="w-6 h-6 text-accent" />
          EduCourse
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">Trang chủ</a>
          <a href="#courses" className="text-muted-foreground hover:text-foreground transition-colors">Khóa học</a>
          <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Đánh giá</a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Liên hệ</a>
          <button className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Tìm kiếm">
            <Search className="w-5 h-5" />
          </button>
          <Button variant="accent" size="sm">Đăng ký ngay</Button>
        </div>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open &&
      <div className="md:hidden border-t border-border bg-card px-4 py-4 flex flex-col gap-4">
          <a href="/" className="text-muted-foreground hover:text-foreground" onClick={() => setOpen(false)}>Trang chủ</a>
          <a href="#courses" className="text-muted-foreground hover:text-foreground" onClick={() => setOpen(false)}>Khóa học</a>
          <a href="#testimonials" className="text-muted-foreground hover:text-foreground" onClick={() => setOpen(false)}>Đánh giá</a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground" onClick={() => setOpen(false)}>Liên hệ</a>
          <Button variant="accent" size="sm">Đăng ký ngay</Button>
        </div>
      }
    </nav>);

};

export default Navbar;