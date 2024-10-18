// src/context/CourseContext.js
import React, { createContext, useState } from 'react';

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: 'Web Development Bootcamp',
      description: 'Learn web development from scratch.',
      instructor: 'John Doe',
      isFeatured: true,
      category: 'Web Development',
      imageUrl: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/FSIjaoI2QtKWZL65cogd',
      videoUrl: 'https://www.youtube.com/watch?v=ajdRvxDWH4w&list=PLNRk_NOPmoCXKPMTIkV-JjfD467V75jZi&ab_channel=ShradhaKhapra',
      lessons: [
      ],
    },
    {
      id: 2,
      title: 'Data Science with Python',
      description: 'Data analysis and visualization using Python.',
      instructor: 'Jane Smith',
      isFeatured: true,
      category: 'Data Science',
      imageUrl: 'https://media.geeksforgeeks.org/wp-content/uploads/20210629202956/DataV.png',
      videoUrl: 'https://www.youtube.com/watch?v=JDcZBzb46ts&ab_channel=GreatLearning',
      lessons: [
      ],
    },
    {
      id: 3,
      title: 'Advanced JavaScript',
      description: 'Deep dive into JavaScript and its frameworks.',
      instructor: 'Alex Johnson',
      isFeatured: false,
      category: 'JavaScript',
      imageUrl: 'https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2019/12/Advanced-JavaScript-Tutorial-1.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=VlPiVmYuoqw&t=17055s&ab_channel=ApnaCollege',
      lessons: [
      ],
    },
    {
      id: 4,
      title: 'React for Beginners',
      description: 'Learn React from the ground up.',
      instructor: 'Emily White',
      isFeatured: true,
      category: 'Web Development',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM4ool0_ixiIH8oGiwJ1RiuloZI1J6OWZbQQ&s',
      videoUrl: 'https://www.youtube.com/watch?v=SqcY0GlETPk&ab_channel=ProgrammingwithMosh',
      lessons: [],
    },
    {
      id: 5,
      title: 'Node.js Development',
      description: 'Build server-side applications with Node.js.',
      instructor: 'Michael Brown',
      isFeatured: false,
      category: 'Web Development',
      imageUrl: 'https://d2ms8rpfqc4h24.cloudfront.net/When_to_Consider_Using_Node_js_0d84032172.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=yEHCfRWz-EI&ab_channel=Telusko',
      lessons: [],
    },
    {
      id: 6,
      title: 'Machine Learning Fundamentals',
      description: 'Introduction to machine learning concepts.',
      instructor: 'Sarah Connor',
      isFeatured: true,
      category: 'Data Science',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfj-Ap0ssQAv48Y_H4hoFNJaJv4ohAxCpzVA&s',
      videoUrl: 'https://www.youtube.com/watch?v=gmvvaobm7eQ&list=PLeo1K3hjS3uvCeTYTeyfe0-rN5r8zn9rw&ab_channel=codebasics',
      lessons: [],
    },
    {
      id: 7,
      title: 'UI/UX Design Essentials',
      description: 'Understanding the basics of UI/UX design.',
      instructor: 'Chris Evans',
      isFeatured: false,
      category: 'Design',
      imageUrl: 'https://instructorhq.sfo2.cdn.digitaloceanspaces.com/3/course/thumbnail/Homepage%20tile%20.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=_6Tl2_eM0DE&list=PLl0Umi92CQzUiSX7uY-_XuI3LeSUyCysm&ab_channel=DesignerUp',
      lessons: [],
    },
    {
      id: 8,
      title: 'Digital Marketing Strategies',
      description: 'Learn the best practices in digital marketing.',
      instructor: 'Robert Downey Jr.',
      isFeatured: true,
      category: 'Marketing',
      imageUrl: 'https://media.licdn.com/dms/image/D4D12AQHSKnwlxC8qZQ/article-cover_image-shrink_720_1280/0/1716984359789?e=2147483647&v=beta&t=NdPOqfzlPOsXW9Kvcnvy_lNDHXOOMiHgZGpWwULzN6Q',
      videoUrl: 'https://www.youtube.com/watch?v=bixR-KIJKYM&ab_channel=Simplilearn',
      lessons: [],
    },
    {
      id: 9,
      title: 'Cybersecurity Basics',
      description: 'Introduction to cybersecurity principles.',
      instructor: 'Scarlett Johansson',
      isFeatured: false,
      category: 'Security',
      imageUrl: 'https://media.licdn.com/dms/image/D5612AQELXhYhwllECA/article-cover_image-shrink_600_2000/0/1696695533971?e=2147483647&v=beta&t=0sv77lfkzDwlnWwuZ5OBXBmR9cq4V78tNTtKM1bO0L8',
      videoUrl: 'https://www.youtube.com/watch?v=vK4Mno4QYqk&t=10s&ab_channel=ApnaCollege',
      lessons: [],
    },
    {
      id: 10,
      title: 'Cloud Computing Overview',
      description: 'Understanding cloud computing technologies.',
      instructor: 'Mark Ruffalo',
      isFeatured: true,
      category: 'Cloud Computing',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTSwFFhgvsKwQZXfeWtQ4_hM-5LUHwHSWpeg&s',
      videoUrl: 'https://www.youtube.com/watch?v=70oYrSnRgoI&ab_channel=ApnaCollege',
      lessons: [],
    },
  ]);

  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const enrollCourse = (courseId) => {
    const courseToEnroll = courses.find(course => course.id === courseId);
    if (courseToEnroll && !enrolledCourses.some(course => course.id === courseId)) {
      setEnrolledCourses([...enrolledCourses, { ...courseToEnroll, progress: 0 }]);
    }
  };

  return (
    <CourseContext.Provider value={{ courses, enrolledCourses, setCourses, enrollCourse }}>
      {children}
    </CourseContext.Provider>
  );
};

