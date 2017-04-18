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
    description: 'Portfolio Manager is a <b><i>content management system (CMS)</i></b> that allows owners of portfolio presentation websites to control what is displayed on those sites.  The user interface (UI) is a web appliation, built with <a href="https://facebook.github.io/react/" target="_blank">React.js</a>.  Predictable state behavior in the UI is achieved through a <b><i>unidirectional data flow</i></b> pattern using <a href="http://redux.js.org/" target="_blank">Redux</a>.  A <b><i>REST</i></b> api (<a href="https://nodejs.org/en/" target="_blank">Node.js</a> and <a href="http://expressjs.com/" target="_blank">Express</a>) handles http requests from the UI and stores JSON data in a non-relational, document database (<a href="https://www.mongodb.com/" target="_blank">MongoDB</a>).  The api can retrieve and deliver the JSON content to the presentational website.  A material design library (<a href="http://www.material-ui.com/#/" target="_blank">Material-UI</a>) is leveraged heavily to create a modern, sensible look.  The product is simple and intuitive, delivering just what the user needs.  Some key features that make this product a pleasure to use include: <b><i>drag and drop</i></b> for ordering galleries and images, <b><i>auto-save</i></b> as changes are made, and useful, but subtle and tastefully presented <b><i>notifications</i></b>.',
    tags: [
        // {label: 'React.js', link: 'https://facebook.github.io/react/'},
        // {label: 'Redux', link: 'http://redux.js.org/'},
        // {label: 'Material-UI', link: 'http://www.material-ui.com/#/'},
        // {label: 'Node.js', link: 'https://nodejs.org/en/'},
        // {label: 'MongoDB', link: 'https://www.mongodb.com/'},
        // {label: 'Mongoose', link: 'http://mongoosejs.com/'},
        // {label: 'Express', link: 'http://expressjs.com/'},
        // {label: 'Webpack', link: 'https://webpack.js.org/'}
    ]   
}

export default PortfolioManager