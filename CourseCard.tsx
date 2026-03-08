import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CourseCardProps {
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  lessons: number;
  students: number;
  rating: number;
  badge?: string;
  image: string;
}

const CourseCard = ({ title, description, price, originalPrice, lessons, students, rating, badge, image }: CourseCardProps) => {
  return (
    <div className="group bg-card rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 border border-border">
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        {badge && (
          <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground border-none">{badge}</Badge>
        )}
      </div>
      <div className="p-5 flex flex-col gap-3">
        <h3 className="font-heading font-semibold text-lg text-card-foreground line-clamp-2">{title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-2">{description}</p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{lessons} bài</span>
          <span className="flex items-center gap-1"><Users className="w-4 h-4" />{students}</span>
          <span className="flex items-center gap-1 text-accent"><Star className="w-4 h-4 fill-accent" />{rating}</span>
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-baseline gap-2">
            <span className="font-heading font-bold text-xl text-accent">{price}</span>
            {originalPrice && <span className="text-sm text-muted-foreground line-through">{originalPrice}</span>}
          </div>
          <Button variant="default" size="sm">Xem chi tiết</Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
