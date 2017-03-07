import PortfolioManager from './portfolio-manager'
import HomeBaseX from './home-base-x'
import WebAnimation from './web-animation'
import SusanCalkinsPhotography from './susan-calkins-photography'
import BigDataMachineLearning from './big-data-machine-learning'

const portfolioItems = [
  PortfolioManager,
  WebAnimation,
  SusanCalkinsPhotography,
  BigDataMachineLearning
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
