const PortfolioManager = {
    title: 'Portfolio Manager',
    subheader: 'CMS for Artist and Photographer Portfolio Sites',
    imageUrls: [
        'https://s3.amazonaws.com/cowie-public/Screen+Shot+2017-03-05+at+7.17.29+AM.png',
        'https://s3.amazonaws.com/cowie-public/Screen+Shot+2017-03-05+at+7.23.20+AM.png',
        'https://s3.amazonaws.com/cowie-public/Screen+Shot+2017-03-05+at+7.30.55+AM.png',
        'https://s3.amazonaws.com/cowie-public/Screen+Shot+2017-03-05+at+7.34.23+AM.png'
    ],
    timeline: '2016',
    description: 'Portfolio Manager is a <i>content management system (CMS)</i> that allows owners of portfolio presentation websites to control what is displayed on those sites.  The user interface (UI) is a web appliation, built with React.js and Redux.  A REST api handles http requests from the UI and stores information in a non-relational, document database--MongoDB.  The api can retrieve and deliver the content to the presentational website.  Material-UI, a React.js library implementation of material design concepts, is used heavily to build the look and feel of the UI.  This product is simple and intuitive, delivering just what the users need.  Some key features that make this product a pleasure to use include: drag and drop for ordering galleries and images, automatically saving changes, and useful, but subtle and tastefully presented notifications.',
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
}

export default PortfolioManager