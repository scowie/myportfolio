const portfolioItems = [
  {
    parentPortfolioId: '1',
    galleryId: '1',
    galleryName: 'Urban Colors',
    galleryOrder: 1,
    galleryCreatedDate: new Date("2015-03-25"),
    galleryLastModifiedDate: new Date("2015-03-25"),
    galleryImages: [
  
 
      {
        parentGalleryId: '1',
        imageId: '16',
        imageUrl: 'https://s3.amazonaws.com/cowie-calkins/ironhen_n.jpg',
        imageThumbUrl: 'url',
        imageTitle: 'IronHen',
        imageDescription: 'Description',
        imageOrder: 16,
        imageCreatedDate: new Date("2015-03-25"),
        imageLastModifiedDate: new Date("2015-03-25"),
        imageViews: 44,
        imageLikes: 8
      },
      {
        parentGalleryId: '1',
        imageId: '17',
        imageUrl: 'https://s3.amazonaws.com/cowie-calkins/windowless_n.jpg',
        imageThumbUrl: 'url',
        imageTitle: 'Windowless',
        imageDescription: 'Description',
        imageOrder: 17,
        imageCreatedDate: new Date("2015-03-25"),
        imageLastModifiedDate: new Date("2015-03-25"),
        imageViews: 44,
        imageLikes: 8
      }

    ]
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
