import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import CourseCard from '@/components/CourseCard';
import { mockCourses } from '@/data/mockData';
import { ArrowRight, BookOpen, Users, Award, Sparkles } from 'lucide-react';
import heroImage from '@/assets/hero-spiritual.jpg';

const Home = () => {
  const featuredCourses = mockCourses.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-spiritual">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  Welcome to DharmaFlow
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-saffron bg-clip-text text-transparent">
                  Engineering
                </span>{' '}
                a digital ecosystem for{' '}
                <span className="text-primary">spiritual education</span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                Discover the profound wisdom of ISKCON teachings and Sanatana Dharma through 
                expertly crafted courses, guided by experienced mentors on your spiritual journey.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/courses">
                  <Button variant="saffron" size="lg" className="gap-2">
                    Explore Courses
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button variant="spiritual" size="lg">
                    Join Now
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-saffron rounded-3xl opacity-20 blur-2xl" />
              <img
                src={heroImage}
                alt="Spiritual Learning"
                className="relative w-full h-auto rounded-2xl shadow-elevated"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="bg-gradient-saffron bg-clip-text text-transparent">DharmaFlow</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience authentic spiritual education with modern learning tools
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-accent/30 hover:shadow-spiritual transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-saffron rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Authentic Teachings</h3>
              <p className="text-muted-foreground">
                Learn directly from experienced mentors following traditional ISKCON methodology
              </p>
            </Card>
            
            <Card className="text-center p-8 border-accent/30 hover:shadow-spiritual transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-wisdom rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Community Learning</h3>
              <p className="text-muted-foreground">
                Join a vibrant community of spiritual seekers from around the world
              </p>
            </Card>
            
            <Card className="text-center p-8 border-accent/30 hover:shadow-spiritual transition-all duration-300">
              <div className="w-16 h-16 bg-secondary-warm rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Certified Progress</h3>
              <p className="text-muted-foreground">
                Earn certificates of completion and track your spiritual learning journey
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-gradient-spiritual">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Courses</h2>
            <p className="text-muted-foreground text-lg">
              Begin your spiritual journey with these foundational courses
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/courses">
              <Button variant="saffron" size="lg" className="gap-2">
                View All Courses
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-saffron">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Begin Your Spiritual Journey?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of devotees who are deepening their understanding of 
            Vedic wisdom through our comprehensive courses.
          </p>
          <Link to="/signup">
            <Button variant="secondary" size="xl" className="shadow-lg hover:shadow-xl">
              Start Learning Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;