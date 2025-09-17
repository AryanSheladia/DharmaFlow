import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { mockCourses } from '@/data/mockData';
import { Star, Clock, Users, Play, FileText, Award, ArrowLeft } from 'lucide-react';

const CourseDetail = () => {
  const { id } = useParams();
  const course = mockCourses.find(c => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-spiritual flex items-center justify-center">
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Course Not Found</h2>
          <p className="text-muted-foreground mb-6">
            The course you're looking for doesn't exist.
          </p>
          <Link to="/courses">
            <Button variant="saffron">Browse Courses</Button>
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-spiritual py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link 
          to="/courses" 
          className="inline-flex items-center gap-2 mb-8 text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Courses
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Header */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge variant="secondary">{course.category}</Badge>
                <Badge variant="outline">{course.level}</Badge>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
              
              <p className="text-lg text-muted-foreground mb-6">
                {course.description}
              </p>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{course.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{course.studentsEnrolled.toLocaleString()} students</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
              </div>
            </div>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="w-6 h-6 text-primary-foreground ml-1" />
                  </div>
                  <p className="text-muted-foreground">Video player will be available here</p>
                  <p className="text-sm text-muted-foreground mt-2">Course: {course.title}</p>
                </div>
              </div>
            </Card>

            {/* Course Content */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Course Materials
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {course.articles.map((article, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <span className="font-medium">{article.title}</span>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Mentor Info */}
            <Card>
              <CardHeader>
                <CardTitle>Your Mentor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-saffron rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {course.mentor.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{course.mentor}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {course.mentorBio}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Enrollment Card */}
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">Free</div>
                    <p className="text-sm text-muted-foreground">
                      Access to all course materials
                    </p>
                  </div>
                  
                  <Button variant="saffron" size="lg" className="w-full">
                    Enroll Now
                  </Button>
                  
                  <Separator />
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Play className="w-4 h-4 text-primary" />
                      <span>Video lectures</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-primary" />
                      <span>Reading materials</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      <span>Certificate of completion</span>
                    </div>
                  </div>
                  
                  <Link to={`/quiz/${course.quizId}`}>
                    <Button variant="spiritual" className="w-full">
                      Take Quiz
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;