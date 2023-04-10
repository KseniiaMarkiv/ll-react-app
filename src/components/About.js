function About() {
  return (
    <div className='container'>
      <article className="article-about">
        <div className="text-about-section">
          <h1>Little Lemon</h1>
          <h4>Chicago</h4>
          <div className="text-about-section-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur numquam, facilis veritatis amet incidunt officia pariatur non natus corporis.
            Corrupti debitis quia ullam consequatur commodi. Deserunt dolor sit similique dolorum.
          </div>
        </div>
        <div className="image-about-section">
          <div className='container-img-first'>
            <img src="./Assets/Mario and Adrian A.jpg" alt="Photo of owners restaurant, Mario and Adrian" width={552} height={368}/>
          </div>
          <div className='container-img-second'>
            <img src="./Assets/restaurant chef B.jpg" alt="Photo of owner restaurant, Adrian" width={552} height={368}/>
          </div>
        </div>
      </article>
    </div>
  );
}

export default About;
