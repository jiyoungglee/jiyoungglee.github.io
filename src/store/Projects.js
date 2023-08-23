/* eslint-disable global-require */
const projects = [
  {
    link: 'https://www.npmjs.com/package/nvisionjs',
    name: 'nVision',
    description: {
      heading:
        'A Next.js dev-tool providing real-time insights on server-side network requests and route visualization',
      bullets: [
        'Real-time observability for network requests made from Server Side Rendered Components in Next.js',
        'Interactive tree model showing nested file structure to help visualize complex routes',
        'Allows developers to debug network requests and optimize performance through accurate error messages and filters',
      ],
    },
    demo: require('../Previews/nvision-demo.mov'),
  },
  {
    link: '/social-feed',
    name: 'Social Feed',
    description: {
      heading:
        'Social newsfeed application with common social media features to post and interact with users.',
      bullets: [
        'Implemented user sign up and authentication using Passport.js local strategy',
        'Built an API that provides search and CRUD functionality for user posts using MYSQL and Express, hosted on Heroku',
        'Componentized reusable elements using React hooks with a useContext store to prevent prop drilling',
        'Demonstrated UX best practices using mobile first design, form validation, and error handling.',
      ],
    },
    demo: require('../Previews/social-feed-demo.mov'),
  },
  {
    link: '/',
    name: 'Portfolio Website',
    description: {
      heading:
        'Music player themed portfolio website to showcase projects and resume',
      bullets: [
        'Synchronized maximized and PIP(Picture in Picture) video players with React hooks (useRef and useContext)',
        'Created and designed seamless image carousel from scratch using pure Javascript and CSS',
        'Implemented CI/CD with Github Actions to automate deployment to Github Pages on git push',
      ],
    },
    demo: require('../Previews/portfolio-demo.mov'),
  },
  {
    link: '/shopping-list',
    name: 'Shopping List',
    description: {
      heading: 'Editable shopping checklist',
      bullets: [
        'Implemented persistent state by saving user data in browser’s local storage',
        'Perform CRUD operations through array manipulation',
      ],
    },
    demo: require('../Previews/shopping-list-demo.mov'),
  },
];

export default projects;
