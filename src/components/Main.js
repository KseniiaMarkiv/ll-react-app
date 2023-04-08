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
              {/* <div className="container-specials"> */}
                <header className="specials-header">
                  <h3>This weeks specials!</h3>
                  <button>Online Menu</button>
                </header>
                <article className="article-specials">
                  <div className='specials-card'>
                    <div className="card-img">
                      <img src="./Assets/greek salad.jpg" alt="Restauran food picture for Specials today" width={265} height={156}/>
                    </div>
                    <div className="card-text">

                      <div className="card-header">
                        <h5>Greek Salad</h5>
                        <div className="card-price">$12.99</div>
                      </div>
                      <p className="card-description">
                        The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. 
                      </p>
                      <p className="card-link">
                        Order & delivery
                        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50" height="50">
                          <title>New Project</title>
                          <defs>
                            <image  width="63" height="63" id="img1" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA/CAMAAABggeDtAAAAAXNSR0IB2cksfwAAAqNQTFRF/////////v7+9vb239/fwcHBvLy8y8vL5eXl9/f37u7ugICAREREODg4U1NTj4+PzMzM8vLy8/Pztra2Ozs7BgYGAAAAFBQUYmJix8fH29vbVFRUCgoK6enpxsbGExMTOTk5s7OzwsLCCQkJNDQ0qampyMjIHBwcPT09vb293d3dTk5ODQ0NY2Nj4eHh8fHxpaWlOjo6BwcHFRUVsrKy+/v71dXV0dHR3t7e5ubmqKioXl5eQ0NDb29vu7u79fX1a2treHh4ubm54+Pj6Ojow8PD7Ozs/f39t7e3RUVFAgICJSUllZWV7e3t6urqc3NzGBgYAwMDenp65ubmcnJyAQEBCwsLp6en9PT04+PjiYmJDw8PMjIyg4ODHh4eVlZW0NDQ+vr61tbWgYGBJiYmz8/P/Pz8f39/LS0tBAQEIiIiiIiILi4u0tLS6Ojo7+/vkZGRMDAwBQUFaWlpGRkZCAgIbGxsioqK4ODgVVVVfHx8YGBgEhISPz8/wMDAQEBAGhoa3NzcycnJKSkpsbGx2NjYTExMICAgo6Ojvr6+RkZGDAwMKysr2dnZv7+/5+fnW1tbZmZm+Pj41NTUnJycSkpKFxcXd3d3Hx8foqKi8PDwoKCg19fXi4uLZ2dnzc3Nnp6edHR0T09PMzMzSUlJcXFxm5ubrKysxcXFmJiYbW1tUFBQurq6tbW1ra2tWFhYKioqERERDg4OV1dXEBAQxMTELy8vWlpa09PTXV1dQUFBpKSkn5+fWVlZR0dHsLCwgoKCLCwsKCgoJycnUVFR6+vreXl5FhYWlJSUk5OTjo6OZWVl+fn5ZGRkYWFhS0tLXFxcq6urX19fGxsbdnZ25OTkjY2NmpqaQkJCqqqqr6+vcHBwIyMjnZ2dTU1Nl5eXoaGhwEFlLwAAAOF0Uk5T/wAAAP////+gABD///////8AAP////////////9g/////////////////////+AA//////8A////////////AP///////zAA//////8gUP////+Q/////wDA/////////wD/////AP////////9wAP//////////8P////////////////////////////+A//8A/////////wD///////////////////////////////////////////////////////9A////////AP//////////sP//////////////wT3RpgAABDFJREFUeJxjYBgFgwAwkgyI1s/EzMLKxs7BSaZ+Ji5Wbh5ePn4BQfL0CwmLiIqJiYlLSDKRpV9KWgwMZCRkydIvJw/RL6agSJZ+JWWofhVVsvSrqUP1a2iSpV9LG6JdR1ePLP36BoZGQO3G0iamJOs35TAzt7C0slZQsbG1s2ckUT+TPTu/g4Sjk7OLopWrmzsjifqZ3Dw8gWHv5e3ji810AvqZmPz8AwLBISceJES6fvfgkEBoxIWGhUeQqp8pMipaDA5i5JhJ08+kFRvnhdAvGp+QSIp+pqTklEAxJGAckppGvP40qfSMTGTtYqFZ2VpMROtPispBaM+UB2XAQF7+3Dw3EMhPJKSfuaCwCOH1jGKJEiBdqlJWXgAC4ZGE9FdUImwPzKqKzK0uCgUyi3RqQKCWjZD+unq4dq8Gh0ZGzqZmpNAo9CCkv0UBrjgg2Q8kIuydSYL+1jaY2vYOaKbr7OomXr9pQQ807RT590KE7GXZnUwgoK+fYPxF1E2AFpo6E1MhQkzuiZMgINGdoH7GiMlTpkKKzWnFFYzYAT79jO5umtNngCItNGcm8frTZvV2Ws0Ot5uTn8Y4qXVubQAw1OXnQQPF18wufLZVZ0UETvfPmr9g4aLFzTFLli6br8/ozrV8oTEwCKeCVbutWLmqLaZ58er08KQI7Pq51szLgqRbo/Z5a7lAnjAEcupBirnWrY+DZEiZDdNZubDp51wHjGOvIp2NOkVeYmGeJqD6uh6qn7NDpFTMSwYkJya2abNmIhb97DwyYmJhi1dFLRXZArSGhx1J/9ZtwCp4o8jSqFUxQAN0tu/A1G+/s0ZMZtduN6BM/h6gURv36sP0uwvtUxbrXr0/HxQOBw4aiZXYCmHoNz8kKlZrlQ8qZZiEFGvFvA43wfRzNm0JDT3iYQ+SSzu6MkNMtNYcQ//MmlD5YxzQuM07Zhx6/ARMv9BJL7GAU3nQhKh1ektoymwM/dN1xBYbnIHqN929WEznNEy/21kxsV1rYLXfGf4NYtMcMfSfUxZrQ1TQbG1iyudh+vOmioldmA+Xu6ghVnOO6vqxun/etm3bLoHdr4Hk/maxy5junz0tVPyKFKSMZrp6BRiaPoyMHnv27PFgnOUTGDrtGgdUrtU6OvSQAYb+JGCRrXJdCJQ53GeFq4gZZSTAHDwp4Xio2I2b9iAD3PuzvcWUeZJwpJ8OSPqxAaaf7fD2IjT93IKnn4bbEVjSryco/caUZd9GpF8Y2FoIbMJsMbydXYYz/TJyKoLKSFD+kQHmn651yO1dzg6VUmjeEhOLXq/JiS3/5q+deAeSf0VnTFzDxYgMZNddUIcU4crNt1kjsOVfYPkhcHfpIpXmxfeWXheYxYgKZrneX7VkcbPK6nQDMxzlBzDageWX6gMrcPmFDhJ9k+ysHqjiK79IAwyjYDgAANQUWHWVhFBbAAAAAElFTkSuQmCC"/>
                          </defs>
                          <style>
                          </style>
                          <use id="Layer 1" href="#img1" x="-6" y="-6"/>
                        </svg>
                      </p>
                    </div>

                  </div>
                  <div className='specials-card'>
                    <div className="card-img">
                      <img src="./Assets/bruchetta-svg.png" alt="Restauran food picture for Specials today" width={265} height={156}/>
                    </div>
                    <div className="card-text">

                      <div className="card-header">
                        <h5>Brushetta</h5>
                        <div className="card-price">$7.99</div>
                      </div>
                      <p className="card-description">
                        Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                      </p>
                      <p className="card-link">
                        Order & delivery
                        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50" height="50">
                          <title>New Project</title>
                          <defs>
                            <image  width="63" height="63" id="img1" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA/CAMAAABggeDtAAAAAXNSR0IB2cksfwAAAqNQTFRF/////////v7+9vb239/fwcHBvLy8y8vL5eXl9/f37u7ugICAREREODg4U1NTj4+PzMzM8vLy8/Pztra2Ozs7BgYGAAAAFBQUYmJix8fH29vbVFRUCgoK6enpxsbGExMTOTk5s7OzwsLCCQkJNDQ0qampyMjIHBwcPT09vb293d3dTk5ODQ0NY2Nj4eHh8fHxpaWlOjo6BwcHFRUVsrKy+/v71dXV0dHR3t7e5ubmqKioXl5eQ0NDb29vu7u79fX1a2treHh4ubm54+Pj6Ojow8PD7Ozs/f39t7e3RUVFAgICJSUllZWV7e3t6urqc3NzGBgYAwMDenp65ubmcnJyAQEBCwsLp6en9PT04+PjiYmJDw8PMjIyg4ODHh4eVlZW0NDQ+vr61tbWgYGBJiYmz8/P/Pz8f39/LS0tBAQEIiIiiIiILi4u0tLS6Ojo7+/vkZGRMDAwBQUFaWlpGRkZCAgIbGxsioqK4ODgVVVVfHx8YGBgEhISPz8/wMDAQEBAGhoa3NzcycnJKSkpsbGx2NjYTExMICAgo6Ojvr6+RkZGDAwMKysr2dnZv7+/5+fnW1tbZmZm+Pj41NTUnJycSkpKFxcXd3d3Hx8foqKi8PDwoKCg19fXi4uLZ2dnzc3Nnp6edHR0T09PMzMzSUlJcXFxm5ubrKysxcXFmJiYbW1tUFBQurq6tbW1ra2tWFhYKioqERERDg4OV1dXEBAQxMTELy8vWlpa09PTXV1dQUFBpKSkn5+fWVlZR0dHsLCwgoKCLCwsKCgoJycnUVFR6+vreXl5FhYWlJSUk5OTjo6OZWVl+fn5ZGRkYWFhS0tLXFxcq6urX19fGxsbdnZ25OTkjY2NmpqaQkJCqqqqr6+vcHBwIyMjnZ2dTU1Nl5eXoaGhwEFlLwAAAOF0Uk5T/wAAAP////+gABD///////8AAP////////////9g/////////////////////+AA//////8A////////////AP///////zAA//////8gUP////+Q/////wDA/////////wD/////AP////////9wAP//////////8P////////////////////////////+A//8A/////////wD///////////////////////////////////////////////////////9A////////AP//////////sP//////////////wT3RpgAABDFJREFUeJxjYBgFgwAwkgyI1s/EzMLKxs7BSaZ+Ji5Wbh5ePn4BQfL0CwmLiIqJiYlLSDKRpV9KWgwMZCRkydIvJw/RL6agSJZ+JWWofhVVsvSrqUP1a2iSpV9LG6JdR1ePLP36BoZGQO3G0iamJOs35TAzt7C0slZQsbG1s2ckUT+TPTu/g4Sjk7OLopWrmzsjifqZ3Dw8gWHv5e3ji810AvqZmPz8AwLBISceJES6fvfgkEBoxIWGhUeQqp8pMipaDA5i5JhJ08+kFRvnhdAvGp+QSIp+pqTklEAxJGAckppGvP40qfSMTGTtYqFZ2VpMROtPispBaM+UB2XAQF7+3Dw3EMhPJKSfuaCwCOH1jGKJEiBdqlJWXgAC4ZGE9FdUImwPzKqKzK0uCgUyi3RqQKCWjZD+unq4dq8Gh0ZGzqZmpNAo9CCkv0UBrjgg2Q8kIuydSYL+1jaY2vYOaKbr7OomXr9pQQ807RT590KE7GXZnUwgoK+fYPxF1E2AFpo6E1MhQkzuiZMgINGdoH7GiMlTpkKKzWnFFYzYAT79jO5umtNngCItNGcm8frTZvV2Ws0Ot5uTn8Y4qXVubQAw1OXnQQPF18wufLZVZ0UETvfPmr9g4aLFzTFLli6br8/ozrV8oTEwCKeCVbutWLmqLaZ58er08KQI7Pq51szLgqRbo/Z5a7lAnjAEcupBirnWrY+DZEiZDdNZubDp51wHjGOvIp2NOkVeYmGeJqD6uh6qn7NDpFTMSwYkJya2abNmIhb97DwyYmJhi1dFLRXZArSGhx1J/9ZtwCp4o8jSqFUxQAN0tu/A1G+/s0ZMZtduN6BM/h6gURv36sP0uwvtUxbrXr0/HxQOBw4aiZXYCmHoNz8kKlZrlQ8qZZiEFGvFvA43wfRzNm0JDT3iYQ+SSzu6MkNMtNYcQ//MmlD5YxzQuM07Zhx6/ARMv9BJL7GAU3nQhKh1ektoymwM/dN1xBYbnIHqN929WEznNEy/21kxsV1rYLXfGf4NYtMcMfSfUxZrQ1TQbG1iyudh+vOmioldmA+Xu6ghVnOO6vqxun/etm3bLoHdr4Hk/maxy5junz0tVPyKFKSMZrp6BRiaPoyMHnv27PFgnOUTGDrtGgdUrtU6OvSQAYb+JGCRrXJdCJQ53GeFq4gZZSTAHDwp4Xio2I2b9iAD3PuzvcWUeZJwpJ8OSPqxAaaf7fD2IjT93IKnn4bbEVjSryco/caUZd9GpF8Y2FoIbMJsMbydXYYz/TJyKoLKSFD+kQHmn651yO1dzg6VUmjeEhOLXq/JiS3/5q+deAeSf0VnTFzDxYgMZNddUIcU4crNt1kjsOVfYPkhcHfpIpXmxfeWXheYxYgKZrneX7VkcbPK6nQDMxzlBzDageWX6gMrcPmFDhJ9k+ysHqjiK79IAwyjYDgAANQUWHWVhFBbAAAAAElFTkSuQmCC"/>
                          </defs>
                          <style>
                          </style>
                          <use id="Layer 1" href="#img1" x="-6" y="-6"/>
                        </svg>
                      </p>
                    </div>

                  </div>
                  <div className='specials-card'>
                    <div className="card-img">
                      <img src="./Assets/lemon dessert.jpg" alt="Restauran food picture for Specials today" width={265} height={156}/>
                    </div>
                    <div className="card-text">

                      <div className="card-header">
                        <h5>Lemon Dessert</h5>
                        <div className="card-price">$6.99</div>
                      </div>
                      <p className="card-description">
                        This comes straight from Grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                      </p>
                      <p className="card-link">
                        Order & delivery
                        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50" height="50">
                          <title>New Project</title>
                          <defs>
                            <image  width="63" height="63" id="img1" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA/CAMAAABggeDtAAAAAXNSR0IB2cksfwAAAqNQTFRF/////////v7+9vb239/fwcHBvLy8y8vL5eXl9/f37u7ugICAREREODg4U1NTj4+PzMzM8vLy8/Pztra2Ozs7BgYGAAAAFBQUYmJix8fH29vbVFRUCgoK6enpxsbGExMTOTk5s7OzwsLCCQkJNDQ0qampyMjIHBwcPT09vb293d3dTk5ODQ0NY2Nj4eHh8fHxpaWlOjo6BwcHFRUVsrKy+/v71dXV0dHR3t7e5ubmqKioXl5eQ0NDb29vu7u79fX1a2treHh4ubm54+Pj6Ojow8PD7Ozs/f39t7e3RUVFAgICJSUllZWV7e3t6urqc3NzGBgYAwMDenp65ubmcnJyAQEBCwsLp6en9PT04+PjiYmJDw8PMjIyg4ODHh4eVlZW0NDQ+vr61tbWgYGBJiYmz8/P/Pz8f39/LS0tBAQEIiIiiIiILi4u0tLS6Ojo7+/vkZGRMDAwBQUFaWlpGRkZCAgIbGxsioqK4ODgVVVVfHx8YGBgEhISPz8/wMDAQEBAGhoa3NzcycnJKSkpsbGx2NjYTExMICAgo6Ojvr6+RkZGDAwMKysr2dnZv7+/5+fnW1tbZmZm+Pj41NTUnJycSkpKFxcXd3d3Hx8foqKi8PDwoKCg19fXi4uLZ2dnzc3Nnp6edHR0T09PMzMzSUlJcXFxm5ubrKysxcXFmJiYbW1tUFBQurq6tbW1ra2tWFhYKioqERERDg4OV1dXEBAQxMTELy8vWlpa09PTXV1dQUFBpKSkn5+fWVlZR0dHsLCwgoKCLCwsKCgoJycnUVFR6+vreXl5FhYWlJSUk5OTjo6OZWVl+fn5ZGRkYWFhS0tLXFxcq6urX19fGxsbdnZ25OTkjY2NmpqaQkJCqqqqr6+vcHBwIyMjnZ2dTU1Nl5eXoaGhwEFlLwAAAOF0Uk5T/wAAAP////+gABD///////8AAP////////////9g/////////////////////+AA//////8A////////////AP///////zAA//////8gUP////+Q/////wDA/////////wD/////AP////////9wAP//////////8P////////////////////////////+A//8A/////////wD///////////////////////////////////////////////////////9A////////AP//////////sP//////////////wT3RpgAABDFJREFUeJxjYBgFgwAwkgyI1s/EzMLKxs7BSaZ+Ji5Wbh5ePn4BQfL0CwmLiIqJiYlLSDKRpV9KWgwMZCRkydIvJw/RL6agSJZ+JWWofhVVsvSrqUP1a2iSpV9LG6JdR1ePLP36BoZGQO3G0iamJOs35TAzt7C0slZQsbG1s2ckUT+TPTu/g4Sjk7OLopWrmzsjifqZ3Dw8gWHv5e3ji810AvqZmPz8AwLBISceJES6fvfgkEBoxIWGhUeQqp8pMipaDA5i5JhJ08+kFRvnhdAvGp+QSIp+pqTklEAxJGAckppGvP40qfSMTGTtYqFZ2VpMROtPispBaM+UB2XAQF7+3Dw3EMhPJKSfuaCwCOH1jGKJEiBdqlJWXgAC4ZGE9FdUImwPzKqKzK0uCgUyi3RqQKCWjZD+unq4dq8Gh0ZGzqZmpNAo9CCkv0UBrjgg2Q8kIuydSYL+1jaY2vYOaKbr7OomXr9pQQ807RT590KE7GXZnUwgoK+fYPxF1E2AFpo6E1MhQkzuiZMgINGdoH7GiMlTpkKKzWnFFYzYAT79jO5umtNngCItNGcm8frTZvV2Ws0Ot5uTn8Y4qXVubQAw1OXnQQPF18wufLZVZ0UETvfPmr9g4aLFzTFLli6br8/ozrV8oTEwCKeCVbutWLmqLaZ58er08KQI7Pq51szLgqRbo/Z5a7lAnjAEcupBirnWrY+DZEiZDdNZubDp51wHjGOvIp2NOkVeYmGeJqD6uh6qn7NDpFTMSwYkJya2abNmIhb97DwyYmJhi1dFLRXZArSGhx1J/9ZtwCp4o8jSqFUxQAN0tu/A1G+/s0ZMZtduN6BM/h6gURv36sP0uwvtUxbrXr0/HxQOBw4aiZXYCmHoNz8kKlZrlQ8qZZiEFGvFvA43wfRzNm0JDT3iYQ+SSzu6MkNMtNYcQ//MmlD5YxzQuM07Zhx6/ARMv9BJL7GAU3nQhKh1ektoymwM/dN1xBYbnIHqN929WEznNEy/21kxsV1rYLXfGf4NYtMcMfSfUxZrQ1TQbG1iyudh+vOmioldmA+Xu6ghVnOO6vqxun/etm3bLoHdr4Hk/maxy5junz0tVPyKFKSMZrp6BRiaPoyMHnv27PFgnOUTGDrtGgdUrtU6OvSQAYb+JGCRrXJdCJQ53GeFq4gZZSTAHDwp4Xio2I2b9iAD3PuzvcWUeZJwpJ8OSPqxAaaf7fD2IjT93IKnn4bbEVjSryco/caUZd9GpF8Y2FoIbMJsMbydXYYz/TJyKoLKSFD+kQHmn651yO1dzg6VUmjeEhOLXq/JiS3/5q+deAeSf0VnTFzDxYgMZNddUIcU4crNt1kjsOVfYPkhcHfpIpXmxfeWXheYxYgKZrneX7VkcbPK6nQDMxzlBzDageWX6gMrcPmFDhJ9k+ysHqjiK79IAwyjYDgAANQUWHWVhFBbAAAAAElFTkSuQmCC"/>
                          </defs>
                          <style>
                          </style>
                          <use id="Layer 1" href="#img1" x="-6" y="-6"/>
                        </svg>
                      </p>
                    </div>

                  </div>
                </article>
              {/* </div> */}
            </div>
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