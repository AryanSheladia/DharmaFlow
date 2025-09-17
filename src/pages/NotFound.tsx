import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, Search, BookOpen } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-spiritual flex items-center justify-center px-4">
      <Card className="max-w-md w-full text-center shadow-elevated">
        <CardContent className="p-8">
          <div className="w-20 h-20 bg-gradient-saffron rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="w-10 h-10 text-primary-foreground" />
          </div>
          
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <h2 className="text-xl font-semibold mb-4">Path Not Found</h2>
          
          <p className="text-muted-foreground mb-8">
            The spiritual path you're seeking doesn't exist in our realm. 
            Let us guide you back to the light of knowledge.
          </p>
          
          <div className="space-y-3">
            <Link to="/">
              <Button variant="saffron" size="lg" className="w-full gap-2">
                <Home className="w-4 h-4" />
                Return Home
              </Button>
            </Link>
            <Link to="/courses">
              <Button variant="spiritual" className="w-full gap-2">
                <BookOpen className="w-4 h-4" />
                Browse Courses
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
