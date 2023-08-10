import "../Style/hero.css";

export const Hero = () => {

  // document.querySelector('.slide-nav').on('click', function (e) {
  //   e.preventDefault();
  //   // get current slide
  //   var current = document.querySelector('.flex--active').data('slide'),
  //     // get button data-slide
  //     next = document.querySelector(this).data('slide');

  //   document.querySelector('.slide-nav').removeClass('active');
  //   document.querySelector(this).addClass('active');

  //   if (current === next) {
  //     return false;
  //   } else {
  //     document.querySelector('.slider__warpper').find('.flex__container[data-slide=' + next + ']').addClass('flex--preStart');
  //     document.querySelector('.flex--active').addClass('animate--end');
  //     setTimeout(function () {
  //       document.querySelector('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
  //       document.querySelector('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
  //     }, 800);
  //   }
  // });

  return (
    <div>
      <div className="slider__warpper">
        <div className="flex__container flex--pikachu flex--active" data-slide={1}>
          <div className="flex__item flex__item--left">
            <div className="flex__content">
              <p className="text--sub">Pokemon Gen I</p>
              <h1 className="text--big">Pikachu</h1>
              <p className="text--normal">Pikachu is an Electric-type Pokémon introduced in Generation I. Pikachu are small, chubby, and incredibly cute mouse-like Pokémon. They are almost completely covered by yellow fur.</p>
            </div>
            <p className="text__background">Pikachu</p>
          </div>
          <div className="flex__item flex__item--right" />
          <img className="pokemon__img" src="https://s4.postimg.org/fucnrdeq5/pikachu.png" />
        </div>
        <div className="flex__container flex--piplup animate--start" data-slide={2}>
          <div className="flex__item flex__item--left">
            <div className="flex__content">
              <p className="text--sub">Pokemon Gen IV</p>
              <h1 className="text--big">Piplup</h1>
              <p className="text--normal">Piplup is the Water-type Starter Pokémon of the Sinnoh region. It was introduced in Generation IV. Piplup has a strong sense of self-esteem. It seldom accepts food that people give because of its pride.</p>
            </div>
            <p className="text__background">Piplup</p>
          </div>
          <div className="flex__item flex__item--right" />
          <img className="pokemon__img" src="https://s4.postimg.org/sa9dl4825/pilup.png" />
        </div>
        <div className="flex__container flex--blaziken animate--start" data-slide={3}>
          <div className="flex__item flex__item--left">
            <div className="flex__content">
              <p className="text--sub">Pokemon Gen III</p>
              <h1 className="text--big">Blaziken</h1>
              <p className="text--normal">Blaziken is the Fire/Fighting-type Starter Pokémon of the Hoenn region, introduced in Generation III. Blaziken is a large, bipedal, humanoid bird-like Pokémon that resembles a rooster.</p>
            </div>
            <p className="text__background">Blaziken</p>
          </div>
          <div className="flex__item flex__item--right" />
          <img className="pokemon__img" src="https://s4.postimg.org/6795hnlql/blaziken.png" />
        </div>
        <div className="flex__container flex--dialga animate--start" data-slide={4}>
          <div className="flex__item flex__item--left">
            <div className="flex__content">
              <p className="text--sub">Pokemon Gen IV</p>
              <h1 className="text--big">Dialga</h1>
              <p className="text--normal">Dialga is a Steel/Dragon-type Legendary Pokémon. Dialga is a sauropod-like Pokémon. It is mainly blue with some gray, metallic portions, such as its chest plate, which has a diamond in the center. It also has various, light blue lines all over
                its body.</p>
            </div>
            <p className="text__background">Dialga</p>
          </div>
          <div className="flex__item flex__item--right" />
          <img className="pokemon__img" src="https://s4.postimg.org/43yq9zlxp/dialga.png" />
        </div>
        <div className="flex__container flex--zekrom animate--start" data-slide={5}>
          <div className="flex__item flex__item--left">
            <div className="flex__content">
              <p className="text--sub">Pokemon Gen V</p>
              <h1 className="text--big">Zekrom</h1>
              <p className="text--normal">Zekrom is a Dragon/Electric-type Legendary Pokémon. It is part of the Tao Trio, along with Reshiram and Kyurem. Zekrom is a large, black draconian Pokémon that seems to share its theme with its counterpart, Reshiram. It has piercing red eyes and
                dark gray to black skin that seems to be armor-like.</p>
            </div>
            <p className="text__background">Zekrom</p>
          </div>
          <div className="flex__item flex__item--right" />
          <img className="pokemon__img" src="https://s4.postimg.org/malmhgn9p/zekrom.png" />
        </div>
      </div>
      <div className="slider__navi">
        <a href="#" className="slide-nav active" data-slide={1}>pikachu</a>
        <a href="#" className="slide-nav" data-slide={2}>piplup</a>
        <a href="#" className="slide-nav" data-slide={3}>blaziken</a>
        <a href="#" className="slide-nav" data-slide={4}>dialga</a>
        <a href="#" className="slide-nav" data-slide={5}>zekrom</a>
      </div>
    </div>


  )
}


