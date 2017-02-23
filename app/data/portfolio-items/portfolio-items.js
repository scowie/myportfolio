const portfolioItems = [
  {
    title: 'Portfolio Manager',
    subheader: 'Subhead',
    imageUrl: 'https://s3.amazonaws.com/cowie-calkins/CascaisStreet_n.jpg',
    timeline: 'Currently in progress...',
    description: 'This is a test description',
    tags: [
        {label: 'React.js', link: 'https://facebook.github.io/react/'},
        {label: 'Redux', link: 'http://redux.js.org/'},
        {label: 'Material-UI', link: 'http://www.material-ui.com/#/'},
        {label: 'Node.js', link: 'https://nodejs.org/en/'},
        {label: 'MongoDB', link: 'https://www.mongodb.com/'},
        {label: 'Mongoose', link: 'http://mongoosejs.com/'},
        {label: 'Express', link: 'http://expressjs.com/'},
        {label: 'Webpack', link: 'https://webpack.js.org/'}
    ]
  },
  {
    title: 'HomeBaseX',
    imageUrl: 'https://s3.amazonaws.com/cowie-calkins/CascaisStreet_n.jpg',
    timeline: '2015',
    description: 'This is a test description',
    tags: [
        {label: 'AngularJS', link: 'https://angularjs.org/'},
        {label: 'Bootstrap', link: 'http://getbootstrap.com/'},
        {label: 'Node.js', link: 'https://nodejs.org/en/'},
        {label: 'MongoDB', link: 'https://www.mongodb.com/'},
        {label: 'Mongoose', link: 'http://mongoosejs.com/'},
        {label: 'Express', link: 'http://expressjs.com/'}
    ]
  },
  {
    title: 'Web Animation Project',
    imageUrl: 'https://s3.amazonaws.com/cowie-calkins/CascaisStreet_n.jpg',
    timeline: '2015',
    description: 'This is a test description',
    tags: [
        {label: 'GSAP', link: 'https://greensock.com/gsap'},
        {label: 'PHP', link: 'http://php.net/'},
        {label: 'Apache', link: 'https://www.apache.org/'}
    ]
  },
  {
    title: 'Susan Calkins Photography',
    imageUrl: 'https://s3.amazonaws.com/cowie-calkins/CascaisStreet_n.jpg',
    timeline: '2014',
    description: 'This is a test description',
    tags: [
        {label: 'JQuery', link: 'https://jquery.com/'},
        {label: 'XML', link: 'http://www.xmlfiles.com/xml/'},
        {label: 'PHP', link: 'http://php.net/'},
        {label: 'Apache', link: 'https://www.apache.org/'}
    ]
  },
  {
    title: 'Big Data & Machine Learning Project',
    imageUrl: 'https://s3.amazonaws.com/cowie-calkins/CascaisStreet_n.jpg',
    timeline: '2014',
    description: 'This is a test description',
    tags: [
        {label: 'RStudio', link: 'https://www.rstudio.com/'},
        {label: 'RHadoop', link: 'https://github.com/RevolutionAnalytics/RHadoop/wiki'}
    ]
  }
]

class PortfolioItems {

  static getAllPortfolioItems() {console.log('getAllPortfolioItems')
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], portfolioItems));
      }, 10);
    });
  }

}

export default PortfolioItems;
