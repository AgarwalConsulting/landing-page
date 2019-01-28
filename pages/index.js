import css from "../style.scss"

import Header from './Header';
import Footer from './Footer';
import HeroBrowser from "./HeroBrowser";

var GeneralForm = () => (
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
)

var TrainingForm = () => (
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
)

export default () => (
  <div className="body-wrap boxed-container">
    <Header/>
    <main>
      <section className="hero text-center">
        <div className="container-sm">
          <div className="hero-inner">
            <h1 className="hero-title h2-mobile mt-0 is-revealing">Agarwal Consulting</h1>
            <p className="hero-paragraph is-revealing">We build software and offer training services.</p>
            <GeneralForm/>
            <HeroBrowser/>
          </div>
        </div>
      </section>
      <TrainingForm/>
    </main>
    <Footer/>
  </div>
)
