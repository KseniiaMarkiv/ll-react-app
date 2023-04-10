import Specials from './Specials';
import About from './About';


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

          <section id="specials-section" className='specials-sections'>
            <Specials/>
          </section>

          <section className='testimonials-sections'>
            <div className='container'>
              <header className="testimonials-header">
                <h4>Testimonials</h4>
              </header>
              <article className="article-testimonials">
                <div className='testimonials-imgs'>
                  <p className="rating-header">Ratings</p>
                  <div className="user-icon">
                    <div className="user-img">
                      <img src="./Assets/user.gif" alt="Photo User rating" width={50} height={50}/>
                    </div>
                    <div className="user-name">User</div>
                  </div>
                  <p className="review">Review</p>
                </div>
                <div className='testimonials-imgs'>
                  <p className="rating-header">Ratings</p>
                  <div className="user-icon">
                    <div className="user-img">
                      <img src="./Assets/user.gif" alt="Photo User rating" width={50} height={50}/>
                    </div>
                    <div className="user-name">User</div>
                  </div>
                  <p className="review">Review</p>
                </div>
                <div className='testimonials-imgs'>
                  <p className="rating-header">Ratings</p>
                  <div className="user-icon">
                    <div className="user-img">
                      <img src="./Assets/user.gif" alt="Photo User rating" width={50} height={50}/>
                    </div>
                    <div className="user-name">User</div>
                  </div>
                  <p className="review">Review</p>
                </div>
                <div className='testimonials-imgs'>
                  <p className="rating-header">Ratings</p>
                  <div className="user-icon">
                    <div className="user-img">
                      <img src="./Assets/user.gif" alt="Photo User rating" width={50} height={50}/>
                    </div>
                    <div className="user-name">User</div>
                  </div>
                  <p className="review">Review</p>
                </div>
              </article>
            </div>
          </section>

          <section id="about-section" className='about-sections'>
            <About/>
          </section>

      </main>
  );
};

export default Main;