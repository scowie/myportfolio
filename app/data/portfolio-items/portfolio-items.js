const portfolioItems = [
  {
    title: 'Portfolio Manager',
    imageUrl: 'https://s3.amazonaws.com/cowie-calkins/CascaisStreet_n.jpg',
    timeline: 'Currently in progress...',
    description: 'This is a test description',
    tags: ['React.js', 'Redux', 'Material-UI', 'Node.js', 'MongoDB', 'Mongoose', 'Webpack', 'AWS S3']
  },
  {
    title: 'HomeBaseX',
    imageUrl: 'https://s3.amazonaws.com/cowie-calkins/CascaisStreet_n.jpg',
    timeline: '2015',
    description: 'This is a test description',
    tags: ['AngularJS', 'Bootstrap', 'Node.js', 'MongoDB', 'GridFS', 'Mongoose']
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
