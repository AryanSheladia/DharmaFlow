// Mock data for DharmaFlow spiritual e-learning platform

export interface Course {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  mentor: string;
  mentorBio: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  rating: number;
  studentsEnrolled: number;
  articles: Array<{ title: string; url: string }>;
  quizId: string;
}

export interface Quiz {
  id: string;
  courseId: string;
  title: string;
  questions: Array<{
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
  }>;
}

export interface User {
  id: string;
  name: string;
  email: string;
  enrolledCourses: string[];
  progress: { [courseId: string]: number };
  certificates: string[];
}

export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Bhagavad Gita Foundations',
    description: 'A comprehensive study of the Bhagavad Gita, exploring its philosophical depths and practical applications in daily life. Learn the timeless wisdom of Krishna and Arjuna\'s dialogue.',
    shortDescription: 'Master the essential teachings of the Bhagavad Gita',
    mentor: 'Swami Prabhupada Das',
    mentorBio: 'Senior devotee with 25+ years of studying Vedic scriptures',
    thumbnail: '/api/placeholder/300/200',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    duration: '8 hours',
    level: 'Beginner',
    category: 'Scriptures',
    rating: 4.9,
    studentsEnrolled: 1250,
    articles: [
      { title: 'Introduction to Karma Yoga', url: '#' },
      { title: 'Understanding Dharma', url: '#' }
    ],
    quizId: '1'
  },
  {
    id: '2',
    title: 'Vedic Philosophy & Practice',
    description: 'Explore the profound philosophical traditions of ancient India, including Vedanta, Samkhya, and Yoga philosophy. Understand how these teachings apply to modern spiritual practice.',
    shortDescription: 'Deep dive into ancient wisdom and modern application',
    mentor: 'Devi Shakti Mataji',
    mentorBio: 'PhD in Sanskrit, spiritual teacher for 15+ years',
    thumbnail: '/api/placeholder/300/200',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    duration: '12 hours',
    level: 'Intermediate',
    category: 'Philosophy',
    rating: 4.8,
    studentsEnrolled: 890,
    articles: [
      { title: 'The Six Systems of Indian Philosophy', url: '#' },
      { title: 'Meditation Techniques from the Vedas', url: '#' }
    ],
    quizId: '2'
  },
  {
    id: '3',
    title: 'Temple Worship & Deity Service',
    description: 'Learn the sacred art of deity worship, including proper procedures, mantras, and the spiritual significance of temple service in the ISKCON tradition.',
    shortDescription: 'Sacred practices of deity worship and temple service',
    mentor: 'Pujari Govinda Das',
    mentorBio: 'Head priest with 20+ years of temple service experience',
    thumbnail: '/api/placeholder/300/200',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    duration: '6 hours',
    level: 'Beginner',
    category: 'Worship',
    rating: 4.7,
    studentsEnrolled: 650,
    articles: [
      { title: 'Morning Deity Greeting Procedures', url: '#' },
      { title: 'Significance of Aarti Ceremonies', url: '#' }
    ],
    quizId: '3'
  },
  {
    id: '4',
    title: 'Chanting & Kirtan Mastery',
    description: 'Discover the transformative power of sacred sound through proper chanting techniques, kirtan leading, and understanding the spiritual science behind mantra meditation.',
    shortDescription: 'Master the art of sacred chanting and kirtan',
    mentor: 'Kirtan Gopal Das',
    mentorBio: 'Renowned kirtan leader and musician, touring globally for 10+ years',
    thumbnail: '/api/placeholder/300/200',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    duration: '5 hours',
    level: 'Beginner',
    category: 'Music & Chanting',
    rating: 4.9,
    studentsEnrolled: 2100,
    articles: [
      { title: 'The Science of Mantra Meditation', url: '#' },
      { title: 'Leading Community Kirtans', url: '#' }
    ],
    quizId: '4'
  }
];

export const mockQuizzes: Quiz[] = [
  {
    id: '1',
    courseId: '1',
    title: 'Bhagavad Gita Foundations Quiz',
    questions: [
      {
        id: '1',
        question: 'Who spoke the Bhagavad Gita?',
        options: ['Krishna', 'Arjuna', 'Vyasa', 'Brahma'],
        correctAnswer: 0
      },
      {
        id: '2',
        question: 'What is the main battlefield mentioned in the Gita?',
        options: ['Dwarka', 'Vrindavan', 'Kurukshetra', 'Hastinapura'],
        correctAnswer: 2
      },
      {
        id: '3',
        question: 'What does "dharma" primarily mean?',
        options: ['Religion', 'Duty', 'Righteousness', 'All of the above'],
        correctAnswer: 3
      }
    ]
  },
  {
    id: '2',
    courseId: '2',
    title: 'Vedic Philosophy Quiz',
    questions: [
      {
        id: '1',
        question: 'How many main philosophical schools are there in Vedic tradition?',
        options: ['4', '6', '8', '10'],
        correctAnswer: 1
      },
      {
        id: '2',
        question: 'Which philosophy focuses on the distinction between Purusha and Prakriti?',
        options: ['Vedanta', 'Samkhya', 'Yoga', 'Mimamsa'],
        correctAnswer: 1
      }
    ]
  },
  {
    id: '3',
    courseId: '3',
    title: 'Temple Worship Quiz',
    questions: [
      {
        id: '1',
        question: 'What is the first ceremony performed for the deities in the morning?',
        options: ['Mangala Aarti', 'Darshan Aarti', 'Raj Bhog', 'Sandhya Aarti'],
        correctAnswer: 0
      }
    ]
  },
  {
    id: '4',
    courseId: '4',
    title: 'Chanting & Kirtan Quiz',
    questions: [
      {
        id: '1',
        question: 'What is the recommended daily chanting for ISKCON devotees?',
        options: ['8 rounds', '16 rounds', '32 rounds', '64 rounds'],
        correctAnswer: 1
      }
    ]
  }
];

export const mockUser: User = {
  id: '1',
  name: 'Devotee Arjuna',
  email: 'arjuna@dharmaflow.com',
  enrolledCourses: ['1', '2', '4'],
  progress: {
    '1': 75,
    '2': 40,
    '4': 90
  },
  certificates: ['1']
};

// Auth utilities
export const authenticateUser = (email: string, password: string): User | null => {
  if (email === 'demo@dharmaflow.com' && password === 'demo123') {
    return mockUser;
  }
  return null;
};

export const registerUser = (name: string, email: string, password: string): User => {
  return {
    id: Date.now().toString(),
    name,
    email,
    enrolledCourses: [],
    progress: {},
    certificates: []
  };
};