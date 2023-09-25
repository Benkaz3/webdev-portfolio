import backToTopImg from "/assets/images/arrow-up.svg"
import githubLogo from "/assets/images/github.svg"

export default function renderHtml() {
  document.querySelector("#app").innerHTML = `
<!-- ***** Header ***** -->

<header class="header" role="banner" id="top">
  <div class="row">
    <nav class="nav" role="navigation">
      <ul class="nav__items">
        <li class="nav__item"><a href="#work" class="nav__link">Work</a></li>
        <!-- <li class="nav__item"><a href="#clients" class="nav__link">Clients</a></li> -->
        <li class="nav__item">
          <a href="#about" class="nav__link">About</a>
        </li>
        <li class="nav__item">
          <a href="#contact" class="nav__link">Contact</a>
        </li>
      </ul>
    </nav>
  </div>
  <div class="header__text-box row">
    <div class="header__text">
      <h1 class="heading-primary">
        <span>Dung Tran</span>
      </h1>
      <p>A Marketer and Front-End Developer based in HCMC, VN</p>
      <a href="#contact" class="btn btn--purple">Get in touch</a>
    </div>
  </div>
</header>


<main role="main">

  <!-- ***** Work ***** -->

  <section class="work" id="work">
    <div class="row">
      <h2>My Work</h2>
      <div class="work__boxes">
        <div class="work__box">
          <div class="work__text">
            <h3>Tenzies Game</h3>
            <p>
            Tenzies is a fast and fun game. Roll the dice as fast as possible, 
            the player who gets all dice on the same number and yells "TENZI!" 
            is the winner.
            </p>
            <ul class="work__list">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>

            <div class="work__links">
              <a href="https://benkaz3-tenzies-game.netlify.app/" target="_blank" class="link__text">
                Visit Site <span>&rarr;</span>
              </a>
              <a href="https://github.com/Benkaz3/tenzies-game" title="View Source Code" target="_blank">
                <img src=${githubLogo} class="work__code" alt="GitHub">
              </a>
            </div>
          </div>
          <div class="work__image-box">
            <img src="/assets/images/tenzies.png" class="work__image" alt="Tenzies game" />
          </div>
        </div>

        <div class="work__box">
          <div class="work__text">
            <h3>Password Generator</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
              eius.
            </p>
            <ul class="work__list">
              <li>React</li>
              <li>Next.js</li>
              <li>Node</li>
              <li>MongoDB</li>
            </ul>

            <div class="work__links">
              <a href="#" class="link__text">
                Visit Site <span>&rarr;</span>
              </a>
              <a href="#">
                <img src=${githubLogo} class="work__code" title="View Source Code" alt="GitHub">
              </a>
            </div>
          </div>
          <div class="work__image-box">
            <img src="./images/password.jpg" class="work__image" alt="Project 1" />
          </div>
        </div>

        <div class="work__box">
          <div class="work__text">
            <h3>Quizzical App</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
              eius.
            </p>
            <ul class="work__list">
              <li>React</li>
              <li>Next.js</li>
              <li>Node</li>
              <li>MongoDB</li>
            </ul>

            <div class="work__links">
              <a href="#" class="link__text">
                Visit Site <span>&rarr;</span>
              </a>
              <a href="#">
                <img src=${githubLogo} class="work__code" title="View Source Code" alt="GitHub">
              </a>
            </div>
          </div>
          <div class="work__image-box">
            <img src="./images/quiz.jpg" class="work__image" alt="Project 3" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ***** Clients ***** -->
  <!-- *****
  <section class="client" id="clients">
    <div class="row">
      <h2>Clients</h2>
      <div class="client__logos">
        <img src="./images/ronjones.png" class="client__logo" alt="Company 2" />
        <img src="./images/goldengrid.png" class="client__logo" alt="Company 3" />
        <img src="./images/bullseye.png" class="client__logo" alt="Company 1" />
        <img src="./images/mighty-furnitures.png" class="client__logo" alt="Company 1" />
        <img src="./images/fastlane.png" class="client__logo" alt="Company 3" />
        <img src="./images/chippy.png" class="client__logo" alt="Company 1" />
      </div>
    </div>
  </section> 
  ***** -->

  <!-- ***** About ***** -->

  <section class="about" id="about">
    <div class="row">
      <h2>About Me</h2>
      <div class="about__content">
        <div class="about__text">
        <p> A few years back, I started playing around with Python, 
        building a hobby project to scrape random web info. 
        That's when I discovered my passion for programming and decided 
        to dive into web development. Along the way, I learned 
        new languages, frameworks, and tools through trial and error.</br></br>
  
        Nowadays, my focus is on creating user-centered web apps with a great 
        user experience. I also write a blog to share my learning journey and
         help others in the programming world. When I'm not coding, 
         I enjoy spending time with my family, hosting friends, 
         and hanging out with my shy dog.</br></br>
  
        That's a glimpse into my journey from marketer to web developer, 
        where creativity meets technical skills. I'm excited for the future 
        and the endless possibilities on this ever-evolving path.
        </p>
          <a href="assets/media/resume.pdf" class="btn btn-invert">My Resume</a>
        </div>
      </div>
    </div>
  </section>
</main>

<!-- ***** Contact ***** -->

<section class="contact" id="contact">
  <div class="row">
    <h2>Get in Touch</h2>
    <div class="contact__info">
      <p>
      Don't hesitate to get in touch! 📞 Whether you have questions, 
      need advice, or simply want to connect with a fellow web enthusiast, 
      I'm here to help. Reach out, and let's start a conversation! 😊✉️
      </p>
      <a 
        href="mailto:tran.dung@hotmail.com" class="btn btn-invert">tran.dung@hotmail.com</a>
    </div>
  </div>
</section>

<!-- ***** Footer ***** -->

<footer role="contentinfo" class="footer">
  <div class="row">
    <!-- Update the links to point to your accounts -->
    <ul class="footer__social-links">
      <li class="footer__social-link-item">
        <a href="https://twitter.com/nisarhassan12/" title="Link to Twitter Profile">
          <img src="/assets/images/twitter.svg" class="footer__social-image" alt="Twitter">
        </a>
      </li>
      <li class="footer__social-link-item">
        <a href="https://github.com/nisarhassan12/" title="Link to Github Profile">
          <img src="/assets/images/github.svg" class="footer__social-image" alt="Github">
        </a>
      </li>
      <li class="footer__social-link-item">
        <a href="https://codepen.io/nisar_hassan" title="Link to Codepen Profile">
          <img src="/assets/images/codepen.svg" class="footer__social-image" alt="Codepen">
        </a>
      </li>
      <li class="footer__social-link-item">
        <a href=https://www.linkedin.com/in/nisar-hassan-naqvi-413466199/">
          <img src="/assets/images/linkedin.svg" title="Link to Linkedin Profile" class="footer__social-image" alt="Linkedin">
        </a>
      </li>
    </ul>
  </div>
</footer>
<a href="#top" class="back-to-top" title="Back to Top">
  <img src=${backToTopImg} alt="Back to Top" class="back-to-top__image"/>
</a>
`;
}
