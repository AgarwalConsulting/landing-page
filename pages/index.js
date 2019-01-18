import css from "../style.scss"

export default () => (
  <div className="body-wrap boxed-container">
    <header className="site-header">
      <div className="container">
        <div className="site-header-inner">
          <div className="brand header-brand">
            <h1 className="m-0">
              <a href="#">
                <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <title>Agarwal Consulting</title>
                  <defs>
                    <linearGradient x1="100%" y1="0%" x2="0%" y2="100%" id="logo-gradient-b">
                      <stop stop-color="#39D8C8" offset="0%"/>
                      <stop stop-color="#BCE4F4" offset="47.211%"/>
                      <stop stop-color="#838DEA" offset="100%"/>
                    </linearGradient>
                    <path d="M32 16H16v16H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v14z" id="logo-gradient-a"/>
                    <linearGradient x1="23.065%" y1="25.446%" y2="100%" id="logo-gradient-c">
                      <stop stop-color="#1274ED" stop-opacity="0" offset="0%"/>
                      <stop stop-color="#1274ED" offset="100%"/>
                    </linearGradient>
                  </defs>
                  <g fill="none" fill-rule="evenodd">
                    <mask id="logo-gradient-d" fill="#fff">
                      <use xlinkHref="#logo-gradient-a"/>
                    </mask>
                    <use fill="url(#logo-gradient-b)" xlinkHref="#logo-gradient-a"/>
                    <path fill="url(#logo-gradient-c)" mask="url(#logo-gradient-d)" d="M-16-16h32v32h-32z"/>
                  </g>
                </svg>
              </a>
            </h1>
          </div>
        </div>
      </div>
    </header>

    <main>
      <section className="hero text-center">
        <div className="container-sm">
          <div className="hero-inner">
            <h1 className="hero-title h2-mobile mt-0 is-revealing">Agarwal Consulting</h1>
            <p className="hero-paragraph is-revealing">We build software.</p>
            <form name="general" method="post" data-netlify-honeypot="bot-field" data-netlify={true}>
              <input type="hidden" name="bot-field" />
              <div className="hero-form newsletter-form field field-grouped is-revealing">
                <div className="control control-expanded">
                  <input className="input" type="email" name="email" placeholder="Your email&hellip;"/>
                </div>
                <div className="control">
                  <button type="submit" className="button button-primary button-block button-shadow">Get in touch</button>
                </div>
              </div>
            </form>
            <div className="hero-browser">
              <div className="bubble-3 is-revealing">
                <svg width="427" height="286" viewBox="0 0 427 286" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <path d="M213.5 286C331.413 286 427 190.413 427 72.5S304.221 16.45 186.309 16.45C68.396 16.45 0-45.414 0 72.5S95.587 286 213.5 286z" id="bubble-3-a"/>
                  </defs>
                  <g fill="none" fill-rule="evenodd">
                    <mask id="bubble-3-b" fill="#fff">
                      <use xlinkHref="#bubble-3-a"/>
                    </mask>
                    <use fill="#4E8FF8" xlinkHref="#bubble-3-a"/>
                    <path d="M64.5 129.77c117.913 0 213.5-95.588 213.5-213.5 0-117.914-122.779-56.052-240.691-56.052C-80.604-139.782-149-201.644-149-83.73c0 117.913 95.587 213.5 213.5 213.5z" fill="#1274ED" mask="url(#bubble-3-b)"/>
                    <path d="M381.5 501.77c117.913 0 213.5-95.588 213.5-213.5 0-117.914-122.779-56.052-240.691-56.052C236.396 232.218 168 170.356 168 288.27c0 117.913 95.587 213.5 213.5 213.5z" fill="#75ABF3" mask="url(#bubble-3-b)"/>
                  </g>
                </svg>
              </div>
              <div className="bubble-4 is-revealing">
                <svg width="230" height="235" viewBox="0 0 230 235" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <path d="M196.605 234.11C256.252 234.11 216 167.646 216 108 216 48.353 167.647 0 108 0S0 48.353 0 108s136.959 126.11 196.605 126.11z" id="bubble-4-a"/>
                  </defs>
                  <g fill="none" fill-rule="evenodd">
                    <mask id="bubble-4-b" fill="#fff">
                      <use xlinkHref="#bubble-4-a"/>
                    </mask>
                    <use fill="#7CE8DD" xlinkHref="#bubble-4-a"/>
                    <circle fill="#3BDDCC" mask="url(#bubble-4-b)" cx="30" cy="108" r="108"/>
                    <circle fill="#B1F1EA" opacity=".7" mask="url(#bubble-4-b)" cx="265" cy="88" r="108"/>
                  </g>
                </svg>
              </div>
              <div className="hero-browser-inner is-revealing">
                <svg width="800" height="450" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="browser-a">
                      <stop stop-color="#F6F8FA" stop-opacity=".48" offset="0%"/>
                      <stop stop-color="#F6F8FA" offset="100%"/>
                    </linearGradient>
                    <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="browser-b">
                      <stop stop-color="#F6F8FA" stop-opacity=".48" offset="0%"/>
                      <stop stop-color="#F6F8FA" offset="100%"/>
                    </linearGradient>
                    <linearGradient x1="100%" y1="-12.816%" x2="0%" y2="-12.816%" id="browser-c">
                      <stop stop-color="#F6F8FA" stop-opacity="0" offset="0%"/>
                      <stop stop-color="#E3E7EB" offset="50.045%"/>
                      <stop stop-color="#F6F8FA" stop-opacity="0" offset="100%"/>
                    </linearGradient>
                    <filter x="-500%" y="-500%" width="1000%" height="1000%" filterUnits="objectBoundingBox" id="dropshadow-1">
                      <feOffset dy="16" in="SourceAlpha" result="shadowOffsetOuter"/>
                      <feGaussianBlur stdDeviation="24" in="shadowOffsetOuter" result="shadowBlurOuter"/>
                      <feColorMatrix values="0 0 0 0 0.12 0 0 0 0 0.17 0 0 0 0 0.21 0 0 0 0.2 0" in="shadowBlurOuter"/>
                    </filter>
                  </defs>
                  <g fill="none" fill-rule="evenodd">
                    <rect width="800" height="450" rx="4" fill="#FFF" style={{"mixBlendMode":"multiply","filter":"url(#dropshadow-1)"}}/>
                    <rect width="800" height="450" rx="4" fill="#FFF"/>
                    <g fill="url(#browser-a)" transform="translate(47 67)">
                      <path d="M146 0h122v122H146zM0 0h122v122H0zM292 0h122v122H292zM438 0h122v122H438zM584 0h122v122H584z"/>
                    </g>
                    <g transform="translate(47 239)" fill="url(#browser-b)">
                      <path d="M146 0h122v122H146zM0 0h122v122H0zM292 0h122v122H292zM438 0h122v122H438zM584 0h122v122H584z"/>
                    </g>
                    <path fill="url(#browser-c)" d="M0 146h706v2H0z" transform="translate(47 67)"/>
                    <g transform="translate(0 12)">
                      <circle fill="#FF6D8B" cx="36" cy="4" r="4"/>
                      <circle fill="#FFCB4F" cx="52" cy="4" r="4"/>
                      <circle fill="#7CE8DD" cx="68" cy="4" r="4"/>
                      <path fill="url(#browser-c)" d="M0 20h800v2H0z"/>
                      <path fill="#E3E7EB" d="M742 2h24v4h-24z"/>
                    </g>
                    <g>
                      <path fill="#F6F8FA" d="M47 385h706v32H47z"/>
                      <path fill="#E3E7EB" d="M356 399h88v4h-88z"/>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="bubble-1 is-revealing">
                <svg width="61" height="52" viewBox="0 0 61 52" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <path d="M32 43.992c17.673 0 28.05 17.673 28.05 0S49.674 0 32 0C14.327 0 0 14.327 0 32c0 17.673 14.327 11.992 32 11.992z" id="bubble-1-a"/>
                  </defs>
                  <g fill="none" fill-rule="evenodd">
                    <mask id="bubble-1-b" fill="#fff">
                      <use xlinkHref="#bubble-1-a"/>
                    </mask>
                    <use fill="#FF6D8B" xlinkHref="#bubble-1-a"/>
                    <path d="M2 43.992c17.673 0 28.05 17.673 28.05 0S19.674 0 2 0c-17.673 0-32 14.327-32 32 0 17.673 14.327 11.992 32 11.992z" fill="#FF4F73" mask="url(#bubble-1-b)"/>
                    <path d="M74 30.992c17.673 0 28.05 17.673 28.05 0S91.674-13 74-13C56.327-13 42 1.327 42 19c0 17.673 14.327 11.992 32 11.992z" fill-opacity=".8" fill="#FFA3B5" mask="url(#bubble-1-b)"/>
                  </g>
                </svg>
              </div>
              <div className="bubble-2 is-revealing">
                <svg width="179" height="126" viewBox="0 0 179 126" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <path d="M104.697 125.661c41.034 0 74.298-33.264 74.298-74.298s-43.231-7.425-84.265-7.425S0-28.44 0 12.593c0 41.034 63.663 113.068 104.697 113.068z" id="bubble-2-a"/>
                  </defs>
                  <g fill="none" fill-rule="evenodd">
                    <mask id="bubble-2-b" fill="#fff">
                      <use xlinkHref="#bubble-2-a"/>
                    </mask>
                    <use fill="#838DEA" xlinkHref="#bubble-2-a"/>
                    <path d="M202.697 211.661c41.034 0 74.298-33.264 74.298-74.298s-43.231-7.425-84.265-7.425S98 57.56 98 98.593c0 41.034 63.663 113.068 104.697 113.068z" fill="#626CD5" mask="url(#bubble-2-b)"/>
                    <path d="M43.697 56.661c41.034 0 74.298-33.264 74.298-74.298s-43.231-7.425-84.265-7.425S-61-97.44-61-56.407C-61-15.373 2.663 56.661 43.697 56.661z" fill="#B1B6F1" opacity=".64" mask="url(#bubble-2-b)"/>
                  </g>
                </svg>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter section">
        <div className="container-sm">
          <div className="newsletter-inner section-inner">
            <div className="newsletter-header text-center is-revealing">
              <h2 className="section-title mt-0">Learn about our training offerings</h2>
            </div>
            <form name="training" method="post" data-netlify-honeypot="bot-field" data-netlify={true}>
              <input type="hidden" name="bot-field"/>
              <div className="footer-form newsletter-form field field-grouped is-revealing">
                <div className="control control-expanded">
                  <input className="input" type="email" name="email" placeholder="Your email&hellip;"/>
                </div>
                <div className="control">
                  <button type="submit" className="button button-primary button-block button-shadow">Learn more</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>

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
          <div className="footer-copyright">&copy; 2019 Agarwal Consulting, all rights reserved</div>
        </div>
      </div>
    </footer>
  </div>
)
