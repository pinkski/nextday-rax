import {createElement, Component} from 'rax';
import {View, Text} from 'rax-components';
import Slider from './xslider/XSlider';

class App extends Component {
  render() {
    var bannerData = [
      {
        image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1486710002640&di=db1250032cb92c1cb5815ab8327ec235&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201601%2F28%2F20160128215939_eH25t.thumb.700_0.jpeg',
        link: 'http://www.jd.com',
      },
      {
        image: 'https://img14.360buyimg.com/da/jfs/t2059/33/1470019226/108175/508876b2/56b084beNad0b6b70.jpg',
        link: 'http://www.jd.com',
      },
      {
        image: 'https://img10.360buyimg.com/da/jfs/t2062/221/1510838633/89510/4998fe7e/56c44183Nb48aa9f9.jpg',
        link: 'http://www.jd.com',
      },
      {
        image: 'https://img12.360buyimg.com/da/jfs/t2521/136/1413367734/118788/7645be30/56c68b57N143a2e6c.jpg',
        link: 'http://www.jd.com',
      },
      {
        image: 'https://img10.360buyimg.com/da/jfs/t2389/198/1486907439/98881/79c0317d/56c42b59Ndc3ff695.jpg',
        link: 'http://www.jd.com',
      }
    ];
    return (
        <Slider lasy={true} loop={true}>
          {
            bannerData.map(function(item, i){
              return (
                  <div className="slider-item">
                    <a href={item.link}><img src={item.image}/></a>
                  </div>
              );
            })
          }
        </Slider>
    );
  }
}

export default App;
