import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { mockQuizzes, mockCourses } from '@/data/mockData';
import { CheckCircle, XCircle, ArrowLeft, Award, RotateCcw } from 'lucide-react';

const Quiz = () => {
  const { id } = useParams();
  const quiz = mockQuizzes.find(q => q.id === id);
  const course = mockCourses.find(c => c.id === quiz?.courseId);
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: number }>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  if (!quiz || !course) {
    return (
      <div className="min-h-screen bg-gradient-spiritual flex items-center justify-center">
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Quiz Not Found</h2>
          <Link to="/courses">
            <Button variant="saffron">Browse Courses</Button>
          </Link>
        </Card>
      </div>
    );
  }

  const handleAnswerSelect = (questionId: string, answerIndex: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: answerIndex }));
  };

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    let correctAnswers = 0;
    quiz.questions.forEach(question => {
      if (answers[question.id] === question.correctAnswer) {
        correctAnswers++;
      }
    });
    setScore((correctAnswers / quiz.questions.length) * 100);
    setShowResults(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setScore(0);
  };

  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;
  const currentQ = quiz.questions[currentQuestion];

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-spiritual py-8">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to={`/course/${course.id}`}
            className="inline-flex items-center gap-2 mb-8 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Course
          </Link>

          <Card className="text-center">
            <CardHeader>
              <div className="w-20 h-20 bg-gradient-saffron rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl">Quiz Completed!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">
                  {score.toFixed(0)}%
                </div>
                <p className="text-muted-foreground">
                  You scored {Math.round((score / 100) * quiz.questions.length)} out of {quiz.questions.length} questions correctly
                </p>
              </div>

              <div className="space-y-4">
                {quiz.questions.map((question, index) => {
                  const userAnswer = answers[question.id];
                  const isCorrect = userAnswer === question.correctAnswer;
                  
                  return (
                    <div key={question.id} className="text-left p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-start gap-3">
                        {isCorrect ? (
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        )}
                        <div className="space-y-2">
                          <p className="font-medium">
                            {index + 1}. {question.question}
                          </p>
                          {!isCorrect && (
                            <div className="text-sm">
                              <p className="text-red-600">
                                Your answer: {question.options[userAnswer]}
                              </p>
                              <p className="text-green-600">
                                Correct answer: {question.options[question.correctAnswer]}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex gap-4 justify-center">
                <Button variant="spiritual" onClick={resetQuiz} className="gap-2">
                  <RotateCcw className="w-4 h-4" />
                  Retake Quiz
                </Button>
                <Link to="/dashboard">
                  <Button variant="saffron">View Dashboard</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-spiritual py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to={`/course/${course.id}`}
            className="inline-flex items-center gap-2 mb-4 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Course
          </Link>
          
          <h1 className="text-2xl font-bold mb-2">{quiz.title}</h1>
          <p className="text-muted-foreground">Course: {course.title}</p>
        </div>

        {/* Progress */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">
                Question {currentQuestion + 1} of {quiz.questions.length}
              </span>
              <span className="text-sm text-muted-foreground">
                {progress.toFixed(0)}% Complete
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </CardContent>
        </Card>

        {/* Question Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">
              {currentQuestion + 1}. {currentQ.question}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <RadioGroup
              value={answers[currentQ.id]?.toString() || ''}
              onValueChange={(value) => handleAnswerSelect(currentQ.id, parseInt(value))}
            >
              {currentQ.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <Label 
                    htmlFor={`option-${index}`} 
                    className="cursor-pointer flex-1 p-3 rounded-lg hover:bg-muted/50"
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            <div className="flex justify-between pt-4">
              <Button 
                variant="outline" 
                onClick={handlePrevious} 
                disabled={currentQuestion === 0}
              >
                Previous
              </Button>
              
              <div className="flex gap-2">
                {currentQuestion === quiz.questions.length - 1 ? (
                  <Button 
                    variant="saffron" 
                    onClick={handleSubmit}
                    disabled={!answers[currentQ.id] && answers[currentQ.id] !== 0}
                  >
                    Submit Quiz
                  </Button>
                ) : (
                  <Button 
                    variant="default" 
                    onClick={handleNext}
                    disabled={!answers[currentQ.id] && answers[currentQ.id] !== 0}
                  >
                    Next
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Quiz;