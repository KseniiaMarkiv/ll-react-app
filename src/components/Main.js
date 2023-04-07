function Main() {
  return (
      <main className='MainSection'>
          <section className='hero-sections'>
            <div className='container'>
              <div className='container-hero'>

                <div className="text-two-section">
                  <h1>Little Lemon</h1>
                  <h4>Chicago</h4>
                  <div className="text-two-section-description">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</div>
                  <button className="reserve">Reserve a Table</button>
                </div>
                <div className="image-two-section">
                  <div className='container-img'>
                   <img src="./Assets/restauranfood.jpg" alt="Restauran food picture for Hero section" width={376} height={568}/>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <section className='specials-sections'>
            <div className='container'>
              <header className="specials-header">
                <h3></h3>
                <button>Online Menu</button>
              </header>
              <article>
                <div className='specials-imgs'></div>
                <div className='specials-imgs'></div>
                <div className='specials-imgs'></div>
              </article>
            </div>
          </section>

          <section className='testimonials-sections'>
            <div className='container'>
              <header className="testimonials-header">
                <h4>Testimonials</h4>
              </header>
              <article>
                <div className='testimonials-imgs'></div>
                <div className='testimonials-imgs'></div>
                <div className='testimonials-imgs'></div>
                <div className='testimonials-imgs'></div>
              </article>
            </div>
          </section>

          <section className='about-sections'>
            <div className='container'>
              <article>
                <div className="text-about-section">
                  <h1></h1>
                  <h4></h4>
                  <div className="text-about-section-description"></div>
                </div>
                <div className="image-about-section">
                  <div className='container-img'>
                   <img src="" alt="Photo of owners restaurant, Mario and Adrian" width={270} height={368}/>
                  </div>
                </div>
              </article>
            </div>
          </section>

      </main>
  );
};

export default Main;