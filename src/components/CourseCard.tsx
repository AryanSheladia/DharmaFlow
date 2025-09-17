import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Users, Clock } from 'lucide-react';
import { Course } from '@/data/mockData';

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Card className="group hover:shadow-elevated transition-all duration-300 transform hover:-translate-y-1 bg-card-spiritual border-accent/30">
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2">
          <Badge variant="secondary" className="bg-primary/90 text-primary-foreground">
            {course.level}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="mb-2">
          <Badge variant="outline" className="text-xs">
            {course.category}
          </Badge>
        </div>
        
        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
          {course.title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {course.shortDescription}
        </p>
        
        <div className="flex items-center text-sm text-muted-foreground mb-3">
          <span className="font-medium text-foreground">{course.mentor}</span>
        </div>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span>{course.rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            <span>{course.studentsEnrolled.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{course.duration}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Link to={`/course/${course.id}`} className="w-full">
          <Button variant="spiritual" className="w-full">
            Learn More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;