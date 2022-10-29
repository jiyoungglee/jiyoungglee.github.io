export const projects = [
  {      
    link: '/social-feed', 
    name: 'Social Feed', 
    description: {
      heading: `Social newsfeed application with common social media features to post and interact with users.`,
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
      heading: `Music player themed portfolio website to showcase projects and resume`,
      bullets: [
        'Synchronized maximized and PIP(Picture in Picture) video players with React hooks (useRef and useContext)',
        'Created and designed seamless image carousel from scratch using pure Javascript and CSS',
        'Implemented CI/CD with Github Actions to automate deployment to Github Pages on git push'
    ],
    },
    demo: require('../Previews/portfolio-demo.mov'),
  },
  {      
    link: '/shopping-list', 
    name: 'Shopping List', 
    description: {
      heading: `Editable shopping checklist`,
      bullets: [
        'Implemented persistent state by saving user data in browser’s local storage',
        'Perform CRUD operations through array manipulation'
      ],
    },
    demo: require('../Previews/mall-trip-demo.mov'),
  },
  {      
    link: '/pricing-page', 
    name: 'Pricing Page', 
    description: {
      heading: `Landing page template with common pricing/subscription page features`,
      bullets: [
        'Created webpage using UX best practices of mobile first design and accessibility',
        'Verified page accessibility with 100% Lighthouse accessibility score',
      ],
    },
    demo: require('../Previews/social-feed-demo.mov'),
  },
  {
    link: '/mall-trip', 
    name: 'Mall Trip', 
    description: {
      heading: `Mall Trip application built with React.js. In Progress.`,
      bullets: ['In Progress'],
    },
    demo: require('../Previews/mall-trip-demo.mov'),
  },
]