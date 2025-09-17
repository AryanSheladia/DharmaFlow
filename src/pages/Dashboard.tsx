import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { mockUser, mockCourses } from '@/data/mockData';
import { BookOpen, Award, TrendingUp, Download, Play, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const user = mockUser;
  const enrolledCourses = mockCourses.filter(course => 
    user.enrolledCourses.includes(course.id)
  );

  const totalProgress = enrolledCourses.length > 0 
    ? enrolledCourses.reduce((acc, course) => acc + (user.progress[course.id] || 0), 0) / enrolledCourses.length
    : 0;

  return (
    <div className="min-h-screen bg-gradient-spiritual py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Welcome back, <span className="bg-gradient-saffron bg-clip-text text-transparent">{user.name}</span>
          </h1>
          <p className="text-muted-foreground">
            Continue your spiritual learning journey
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="border-accent/30">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Enrolled Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{enrolledCourses.length}</div>
              <p className="text-xs text-muted-foreground">
                Active learning paths
              </p>
            </CardContent>
          </Card>

          <Card className="border-accent/30">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Overall Progress</CardTitle>
              <TrendingUp className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalProgress.toFixed(0)}%</div>
              <Progress value={totalProgress} className="mt-2 h-2" />
            </CardContent>
          </Card>

          <Card className="border-accent/30">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Certificates</CardTitle>
              <Award className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{user.certificates.length}</div>
              <p className="text-xs text-muted-foreground">
                Completed achievements
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Content */}
        <Tabs defaultValue="courses" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
          </TabsList>

          {/* My Courses Tab */}
          <TabsContent value="courses" className="space-y-6">
            <div className="grid gap-6">
              {enrolledCourses.length === 0 ? (
                <Card className="p-8 text-center">
                  <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No Courses Yet</h3>
                  <p className="text-muted-foreground mb-4">
                    Start your spiritual learning journey by enrolling in a course
                  </p>
                  <Link to="/courses">
                    <Button variant="saffron">Browse Courses</Button>
                  </Link>
                </Card>
              ) : (
                enrolledCourses.map(course => (
                  <Card key={course.id} className="border-accent/30">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        <img
                          src={course.thumbnail}
                          alt={course.title}
                          className="w-full md:w-48 h-32 object-cover rounded-lg"
                        />
                        
                        <div className="flex-1 space-y-3">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <Badge variant="outline" className="text-xs">
                                {course.category}
                              </Badge>
                              <Badge variant="secondary" className="text-xs">
                                {course.level}
                              </Badge>
                            </div>
                            <h3 className="text-xl font-semibold">{course.title}</h3>
                            <p className="text-sm text-muted-foreground">by {course.mentor}</p>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Progress</span>
                              <span>{user.progress[course.id] || 0}%</span>
                            </div>
                            <Progress value={user.progress[course.id] || 0} className="h-2" />
                          </div>
                          
                          <div className="flex gap-2">
                            <Link to={`/course/${course.id}`}>
                              <Button variant="default" size="sm" className="gap-2">
                                <Play className="w-4 h-4" />
                                Continue
                              </Button>
                            </Link>
                            <Link to={`/quiz/${course.quizId}`}>
                              <Button variant="outline" size="sm">
                                Take Quiz
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>

          {/* Progress Tab */}
          <TabsContent value="progress" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Learning Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {enrolledCourses.map(course => (
                  <div key={course.id} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{course.title}</span>
                      <span className="text-sm text-muted-foreground">
                        {user.progress[course.id] || 0}%
                      </span>
                    </div>
                    <Progress value={user.progress[course.id] || 0} className="h-2" />
                  </div>
                ))}
                {enrolledCourses.length === 0 && (
                  <p className="text-muted-foreground text-center py-8">
                    No progress to show. Enroll in a course to start learning!
                  </p>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Certificates Tab */}
          <TabsContent value="certificates" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  My Certificates
                </CardTitle>
              </CardHeader>
              <CardContent>
                {user.certificates.length === 0 ? (
                  <div className="text-center py-8">
                    <Award className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No Certificates Yet</h3>
                    <p className="text-muted-foreground mb-4">
                      Complete courses and pass quizzes to earn certificates
                    </p>
                    <Link to="/courses">
                      <Button variant="saffron">Start Learning</Button>
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {user.certificates.map(certId => {
                      const course = mockCourses.find(c => c.id === certId);
                      return course ? (
                        <div key={certId} className="flex items-center justify-between p-4 border border-accent/30 rounded-lg">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-saffron rounded-lg flex items-center justify-center">
                              <Award className="w-6 h-6 text-primary-foreground" />
                            </div>
                            <div>
                              <h4 className="font-semibold">{course.title}</h4>
                              <p className="text-sm text-muted-foreground">
                                Certificate of Completion
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="gap-2">
                              <Eye className="w-4 h-4" />
                              View
                            </Button>
                            <Button variant="ghost" size="sm" className="gap-2">
                              <Download className="w-4 h-4" />
                              Download
                            </Button>
                          </div>
                        </div>
                      ) : null;
                    })}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;