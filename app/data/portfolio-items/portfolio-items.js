const portfolioItems = [
  {
    title: 'Portfolio Manager',
    imageUrl: 'https://s3.amazonaws.com/cowie-calkins/CascaisStreet_n.jpg',
    timeline: 'Currently in progress...',
    description: 'This is a test description',
    tags: ['React.js', 'Redux', 'Material-UI', 'Node.js', 'MongoDB', 'Mongoose', 'Webpack', 'AWS S3']
  },
  {
    title: 'Portfolio Manager',
    imageUrl: 'https://s3.amazonaws.com/cowie-calkins/CascaisStreet_n.jpg',
    timeline: 'Currently in progress...',
    description: 'This is a test description',
    tags: ['React.js', 'Redux', 'Material-UI', 'Node.js', 'MongoDB', 'Mongoose', 'Webpack', 'AWS S3']
  }
]

class PortfolioItems {

  static getAllPortfolioItems() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], portfolioItems));
      }, 10);
    });
  }

}

export default PortfolioItems;
