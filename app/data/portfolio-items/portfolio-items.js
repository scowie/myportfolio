const portfolioItems = [
  {
    title: 'Portfolio Manager',
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
        {label: 'Express', link: 'http://expressjs.com/'}
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
