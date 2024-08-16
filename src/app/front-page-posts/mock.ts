import { GetPost } from "../interfaces/posts/GetPost";

export const mockPosts: GetPost[] = [
    {
      id: '1',
      title: 'Introduction to TypeScript',
      content: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
      categoryId: '101',
      userId: 'user1',
      comments: []
    },
    {
      id: '2',
      title: 'Understanding Angular Modules',
      content: 'Angular modules help you organize an application into cohesive blocks of functionality.',
      categoryId: '102',
      userId: 'user2',
      comments: []
    },
    {
      id: '3',
      title: 'React Component Lifecycle',
      content: 'React components go through several stages during their lifecycle, such as mounting, updating, and unmounting.',
      categoryId: '103',
      userId: 'user3',
      comments: []
    },
    {
      id: '4',
      title: 'State Management with Redux',
      content: 'Redux is a predictable state container for JavaScript apps, often used with React for managing application state.',
      categoryId: '104',
      userId: 'user4',
      comments: []
    },
    {
      id: '5',
      title: 'Getting Started with Node.js',
      content: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine, enabling server-side scripting.',
      categoryId: '105',
      userId: 'user5',
      comments: []
    }
  ];
