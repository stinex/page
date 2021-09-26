import { useEffect, useRef } from 'react';
import './app.scss';
import '@csstools/normalize.css';
import Ergonova from './img/ergonova.png';
import Title from './img/title.svg';
import Ellipse14 from './img/Ellipse14.png';
import Ellipse15 from './img/Ellipse15.png';
import Qwe from './img/qwe.png';
import Massage from './img/massage.png';


const item1 = [{ icon: 'energy', title: 'Снимает напряжение', desc: 'Снимает мышечное напряжение и усталость ног' },
{ icon: 'restores', title: 'Восстанавливает', desc: 'Помогает восстановиться после целого дня на ногах' },
{ icon: 'circulate', title: 'Улучшает кровообращение', desc: 'Улучшает циркуляцию крови, уменьшает боли в суставах' },
{ icon: 'strengthens', title: 'Укрепляет', desc: 'Помогает укрепить иммунную систему и повысить метаболизм' },
{ icon: 'relieves_stress', title: 'Снимает стресс', desc: 'Способствует расслаблению всего организма и помогает снять стресс' },
{ icon: 'like', title: 'Улучшает самочувствие ', desc: 'Способствует улучшению самочувствия и настроения' }
]

function App() {
  const ref1 = useRef()
  const ref2 = useRef()
  const ref3 = useRef()
  const ref4 = useRef([])
  const ref5 = useRef()
  const ref6 = useRef()

  useEffect(() => {
    ref1.current.classList.add('ergonova-active');
    ref2.current.classList.add('title-active');
    ref3.current.classList.add('bg_main-active');
  })

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return function () {
      document.removeEventListener('scroll', scrollHandler)
    };
  }, [])

  const scrollHandler = (e) => {
    if (ref6.current.offsetTop - (e.target.documentElement.scrollTop + window.innerHeight) < -50) {
      ref6.current.classList.add('main__info__block_left-active');
    }

    if (ref5.current.offsetTop - (e.target.documentElement.scrollTop + window.innerHeight) < -10) {
      ref5.current.classList.add('main__info__block_right-active');
    }
    for (let i = 0; i < ref4.current.length; i++) {
      if (ref4.current[i].offsetTop - (e.target.documentElement.scrollTop + window.innerHeight) < -10) {
        ref4.current[i].classList.add('active');
        console.log(ref4)
      }
    }
  }
  return (
    <>
      <div className='main__block'>
        <img ref={ref3} className='bg_main' src={Qwe} alt='' />
        <div className='wrapper'>
          <h1 className='main__block_title'>Ergonova MaxiGo 3 </h1>
          <div className='main__block_product'>
            <div className='main__block_product_photo'>
              <img ref={ref1} className='ergonova' src={Ergonova} alt='' />

              <img ref={ref2} className='title' src={Title} alt='' />
            </div>
            <div className='main__block_product_bottom'>
              <h2 className='main__block_product_bottom_title'>Заряжайтесь энергией</h2>
              <p className='main__block_product_bottom_description'>
                Ergonova Maxigo VE третьего поколения - версия с вибрационным массажем, который недоступен в большинстве массажеров для ног. Мощный компрессионный массаж 360° охватывает стопу со всех сторон, сочетание 3 видов массажа, разнообразие видов массажного воздействия. Вы всегда можете регулировать скорость и степень воздействия.
              </p>
              <img className='ellipse15' src={Ellipse15} alt='' />
            </div>

          </div>
        </div>
        <img className='ellipse14' src={Ellipse14} alt='' />
      </div>

      <div className='wrapper'>
        <div className='main__info__blocks'>
          <div ref={ref6} className='main__info__block_left'>
            <img src={Massage} alt='' />
          </div>
          <div ref={ref5} className='main__info__block_right'>
            <h3 className='block_right_title'>
              Вибрационный массаж
            </h3>
            <p className='block_right_description'>
              Вибрационное воздействие стимулирует активные точки стопы, оказывает тонизирующее воздействие и вызывает рефлекторные реакции со стороны нервной системы и системы кровообращения, за счет чего достигается лечебный эффект
            </p>

            <div className='block_right_info'>
              Благодаря регулярным 15-минутным сеансам вибрационного массажа кожа приобретает здоровый цвет, становится более эластичной и улучшается ее питание
            </div>
          </div>
        </div>
      </div>

      <div className='wrapper'>
        <div className='main__advantage__block'>
          <div className='main__advantage__block_top'>
            <div className='block_top_title'>
              Ваш личный массажист
            </div>
            <div className='block_top_subtitle'>
              24/7
            </div>
          </div>
          <div className='main__advantage__block_bottom'>
            <div className='main__advantage__block_bottom_left'>
              {item1.slice(0, 3).map((item, i) => {
                return (
                  <div ref={ref => ref4.current.push(ref)} key={i} className='item'>
                    <span>
                      <img src={`./img/${item.icon}.svg`} alt=''></img></span>
                    <div className='item_block'>
                      <h4 className='item_title'>
                        {item.title}
                      </h4>
                      <p className='item_description'>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className='main__advantage__block_bottom_right'>
              {item1.slice(3, 6).map((item, i) => {
                return (
                  <div ref={ref => ref4.current.push(ref)} key={i} className='item'>
                    <span><img src={`./img/${item.icon}.svg`} alt=''></img></span>
                    <div className='item_block'>
                      <h4 className='item_title'>
                        {item.title}
                      </h4>
                      <p className='item_description'>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
