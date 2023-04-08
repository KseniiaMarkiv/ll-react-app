function Footer() {
  return (
      <footer className="FooterSection">
       <div className="container">
          <section>
            <div className="footer-sec-one">
              <img src="./Assets/logo-footer.jpg" alt="Footer Logo picture" width={151} height={253}/>
            </div>
            <div className="footer-sec-two">
              <a href="#">Doormat</a>
              <a href="#">Navigation</a>
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Menu</a>
              <a href="#">Reservations</a>
              <a href="#">Order Online</a>
              <a href="#">Login</a>
            </div>
            <div className="footer-sec-three">
              <a href="#">Contact</a>
              <a href="#">Adress</a>
              <a href="#">phone number</a>
              <a href="#">email</a>
            </div>
            <div className="footer-sec-four">
              <a href="#">Social Media Links</a>
              <a href="#">Adress</a>
              <a href="#">phone number</a>
              <a href="#">email</a>
            </div>
          </section>
       </div>
      </footer>
  );
};

export default Footer;