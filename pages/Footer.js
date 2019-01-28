var SocialLinks = () => (
  <ul className="footer-social-links list-reset">
    <li>
      <a href="https://twitter.com/algogrit">
        <span className="screen-reader-text">Twitter</span>
        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z" fill="#FFF"/>
        </svg>
      </a>
    </li>
    <li>
      <a href="https://github.com/AgarwalConsulting">
        <span class="screen-reader-text">Github</span>
        <svg  width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="#FFF"></path>
        </svg>
      </a>
    </li>
  </ul>
)

export default () => (
  <footer className="site-footer text-light">
    <div className="container">
      <div className="site-footer-inner">
        <div className="brand footer-brand">
          <a href="#">
            <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <title>Ava</title>
              <defs>
                <path d="M32 16H16v16H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v14z" id="logo-gradient-footer-a"/>
                <linearGradient x1="50%" y1="50%" y2="100%" id="logo-gradient-footer-b">
                  <stop stop-color="#FFF" stop-opacity="0" offset="0%"/>
                  <stop stop-color="#FFF" offset="100%"/>
                </linearGradient>
              </defs>
              <g fill="none" fill-rule="evenodd">
                <mask id="logo-gradient-footer-c" fill="#fff">
                  <use xlinkHref="#logo-gradient-footer-a"/>
                </mask>
                <use fill-opacity=".32" fill="#FFF" xlinkHref="#logo-gradient-footer-a"/>
                <path fill="url(#logo-gradient-footer-b)" mask="url(#logo-gradient-footer-c)" d="M-16-16h32v32h-32z"/>
              </g>
            </svg>

          </a>
        </div>
        <ul className="footer-links list-reset">
          <li>
            <a href="mailto:algogrit@gmail.com">Contact</a>
          </li>
          <li>
            <a href="https://algogrit.com/">About us</a>
          </li>
        </ul>
        <SocialLinks/>
        <div className="footer-copyright">&copy; 2019 Agarwal Consulting, all rights reserved</div>
      </div>
    </div>
  </footer>
)
