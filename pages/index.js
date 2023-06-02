import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

import Navbar from '../components/navbar'
import Features from '../components/features'
import Practice from '../components/practice'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Digio Radiatorista</title>
          <meta property="og:title" content="Digio Radiatorista" />
        </Head>
        <div data-modal="practices" className="home-modal">
          <div className="home-practices">
            <div className="home-heading">
              <span className="home-header">Our practices</span>
              <svg
                viewBox="0 0 1024 1024"
                data-close="practices"
                className="home-close"
              >
                <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
              </svg>
            </div>
            <div className="home-grid">
              <div className="home-section">
                <div className="home-heading01">
                  <span className="home-header01">Cardiology</span>
                  <span className="home-caption">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </span>
                </div>
                <div className="read-more">
                  <span className="home-text">Read more</span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-image"
                  />
                </div>
              </div>
              <div className="home-section1">
                <div className="home-heading02">
                  <span className="home-header02">Orthopedics</span>
                  <span className="home-caption1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </span>
                </div>
                <div className="read-more">
                  <span className="home-text01">Read more</span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-image01"
                  />
                </div>
              </div>
              <div className="home-section2">
                <div className="home-heading03">
                  <span className="home-header03">Ophtalmology</span>
                  <span className="home-caption2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </span>
                </div>
                <div className="read-more">
                  <span className="home-text02">Read more</span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-image02"
                  />
                </div>
              </div>
              <div className="home-section3">
                <div className="home-heading04">
                  <span className="home-header04">Pediatrics</span>
                  <span className="home-caption3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </span>
                </div>
                <div className="read-more">
                  <span className="home-text03">Read more</span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-image03"
                  />
                </div>
              </div>
              <div className="home-section4">
                <div className="home-heading05">
                  <span className="home-header05">Nutrition</span>
                  <span className="home-caption4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </span>
                </div>
                <div className="read-more">
                  <span className="home-text04">Read more</span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-image04"
                  />
                </div>
              </div>
              <div className="home-section5">
                <div className="home-heading06">
                  <span className="home-header06">General</span>
                  <span className="home-caption5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </span>
                </div>
                <div className="read-more">
                  <span className="home-text05">Read more</span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-image05"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="home-hero">
          <Navbar rootClassName="navbar-root-class-name"></Navbar>
          <div className="home-main">
            <div className="home-content">
              <div className="home-heading07">
                <h1 className="home-header07">
                  <span className="home-text06">Digio</span>
                  <br></br>
                  <span>Radiatorista</span>
                  <br></br>
                </h1>
                <p className="home-caption6">
                  <span>
                    Assistenza rapida e professionale per il tuo radiatore auto
                  </span>
                  <br></br>
                </p>
                <p className="home-caption7">
                  <span>Maglie (LE)</span>
                  <br></br>
                </p>
              </div>
              <div className="home-container1">
                <button type="button" className="button button-main home-book">
                  <svg
                    viewBox="0 0 804.5714285714286 1024"
                    className="home-icon1"
                  >
                    <path d="M804.571 708.571c0 20.571-9.143 60.571-17.714 79.429-12 28-44 46.286-69.714 60.571-33.714 18.286-68 29.143-106.286 29.143-53.143 0-101.143-21.714-149.714-39.429-34.857-12.571-68.571-28-100-47.429-97.143-60-214.286-177.143-274.286-274.286-19.429-31.429-34.857-65.143-47.429-100-17.714-48.571-39.429-96.571-39.429-149.714 0-38.286 10.857-72.571 29.143-106.286 14.286-25.714 32.571-57.714 60.571-69.714 18.857-8.571 58.857-17.714 79.429-17.714 4 0 8 0 12 1.714 12 4 24.571 32 30.286 43.429 18.286 32.571 36 65.714 54.857 97.714 9.143 14.857 26.286 33.143 26.286 50.857 0 34.857-103.429 85.714-103.429 116.571 0 15.429 14.286 35.429 22.286 49.143 57.714 104 129.714 176 233.714 233.714 13.714 8 33.714 22.286 49.143 22.286 30.857 0 81.714-103.429 116.571-103.429 17.714 0 36 17.143 50.857 26.286 32 18.857 65.143 36.571 97.714 54.857 11.429 5.714 39.429 18.286 43.429 30.286 1.714 4 1.714 8 1.714 12z"></path>
                  </svg>
                  <a
                    href="tel:3471811467"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Chiamaci Ora
                  </a>
                </button>
              </div>
            </div>
            <div className="home-image06">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1599474151975-1f978922fa02?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1500&amp;q=80"
                loading="lazy"
                className="home-image07"
              />
            </div>
          </div>
          <div id="features" className="home-features">
            <div className="home-content1">
              <Features
                Title="Manutenzione"
                Description="Manutenzione ordinaria e straordinaria"
              ></Features>
              <Features
                Title="Controllo"
                Description="Cambio Olio e Lubrificanti auto"
              ></Features>
              <Features
                Title="Assistenza"
                Description="Consulenza e Assistenza gratuita su interventi auto"
              ></Features>
            </div>
          </div>
          <div className="home-background"></div>
        </section>
        <section id="ourservice" className="home-practices1">
          <div className="home-heading08">
            <h2 className="home-text14">Nostri Servizi</h2>
          </div>
          <div className="home-content2">
            <div className="home-grid1">
              <Link href="/">
                <a>
                  <div className="home-practice-wrapper">
                    <Practice
                      Title="Riparazioni radiatori"
                      Description="Revisione, Manutenzione Ordinaria e Riparazioni dei più comuni radiatori auto"
                    ></Practice>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <div className="home-practice-wrapper1">
                    <Practice
                      Title="Servizio di assistenza urgente"
                      Description="Assistenza dedicata per qualsiasi imprevisto. Auto di cortesia prevista per interventi complessi"
                    ></Practice>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <div className="home-practice-wrapper2">
                    <Practice
                      Title="Ricariche condizionatori"
                      Description="Manutenzione, Igienizzazione e Ricarica Impianti di condizionatore auto "
                    ></Practice>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <div className="home-practice-wrapper3">
                    <Practice
                      Title="Check Up completo"
                      Description="Controllo Stato Motore e Sistemi Elettronici tramite collegamento centralina"
                    ></Practice>
                  </div>
                </a>
              </Link>
            </div>
            <button
              data-open="practices"
              className="button button-main home-all"
            >
              <span>Scopri di più</span>
            </button>
          </div>
        </section>
        <section id="info" className="home-features1">
          <div className="home-section6">
            <div className="home-content3">
              <div className="home-header08">
                <h2 className="home-heading09">Servizi Radiatori</h2>
                <p className="home-capton">
                  <span>
                    {' '}
                    Vendita diretta e installazione di radiatori nuovi o usati
                  </span>
                  <br></br>
                  <br></br>
                  <span> D</span>
                  <span>
                    iagnosi precisa e rapida sulla stato del tuo radiatore auto
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    {' '}
                    Servizi dedicati per raffreddamento del motore
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </p>
              </div>
            </div>
            <div className="home-container2">
              <img
                alt="image"
                src="/simonfresh_generate_a_3d_model_of_a_sports_car_engine._the_engi_471e8533-39b2-4b4f-8a5c-5f80fa2f5d2b-removebg-preview-1500w.png"
                className="home-image08"
              />
            </div>
          </div>
          <div className="home-section7">
            <div className="home-content4">
              <div className="home-header09">
                <h2 className="home-heading10">Aria Condizionata</h2>
                <p className="home-capton1">
                  <span>Riparazaione e Sostituzione impianti di aerazione</span>
                  <br></br>
                  <br></br>
                  <span>Ricariche Aria Condizionata</span>
                  <br></br>
                </p>
              </div>
            </div>
            <div className="home-container3">
              <img
                alt="image"
                src="/simonfresh_generate_a_3d_model_of_a_sports_car_engine._the_engi_471e8533-39b2-4b4f-8a5c-5f80fa2f5d2b-removebg-preview-1500w.png"
                className="home-image09"
              />
            </div>
          </div>
          <button className="home-book1 button button-main">
            <span>Book a virtual appointment</span>
          </button>
        </section>
        <section id="schedule" className="home-schedule">
          <div id="tocontact" className="home-content5">
            <div className="home-header10">
              <h2 className="home-heading11">
                Contattaci
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h2>
              <p className="home-caption8">
                <span>
                  Siamo disponibili per assistenza auto, consigli su interventi
                  e manutenzione, preventivi.
                </span>
                <br></br>
                <br></br>
                <span>Contattaci senza impegno</span>
                <br></br>
              </p>
            </div>
            <div className="home-container4">
              <div className="home-types">
                <a
                  href="#book"
                  className="home-book-person button button-main button-white"
                >
                  <span href="#subform">Messaggio</span>
                </a>
                <span className="home-text36">oppure</span>
                <button className="button button-main button-white home-book-person1">
                  <a
                    href="tel:3471811467"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span>Chiamata</span>
                    <br></br>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section id="book" className="home-book2">
          <div className="home-heading12">
            <h2 id="subform" className="home-text39">
              <span className="home-text40">Compila il Form</span>
              <br className="home-text41"></br>
              <span className="home-text42">
                Ti ricontatteremo il prima possibile
              </span>
              <br className="home-text43"></br>
            </h2>
          </div>
          <form className="home-form">
            <div className="home-inputs">
              <input
                type="text"
                placeholder="Name"
                autoComplete="name"
                className="input book-input"
              />
              <input
                type="email"
                placeholder="Email"
                autoComplete="email"
                className="input book-input"
              />
              <input
                type="tel"
                placeholder="Telefono"
                autoComplete="tel"
                className="input book-input"
              />
              <input
                type="text"
                placeholder="Messaggio"
                className="input book-input"
              />
              <div className="home-lower">
                <div className="home-button">
                  <button
                    type="submit"
                    autoFocus
                    className="home-book3 button button-main"
                  >
                    <span>Invia</span>
                  </button>
                  <p className="home-text45">
                    <span>
                      Lorem ipsum dolor sit amet, consectetur
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="home-text47">adipiscing elit</span>
                    <span>
                      , sed do eiusmod tempor
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="home-text49">incididunt</span>
                    <span>.</span>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </section>
        <div className="home-container5"></div>
        <div className="home-hero1">
          <div className="home-container6">
            <h1 className="home-text51">
              <span className="home-text52">Dove</span>
              <br></br>
              <span>Trovarci</span>
              <br></br>
              <br></br>
            </h1>
          </div>
          <div className="home-container7">
            <div>
              <DangerousHTML
                html={`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d762.5845725132749!2d18.288771534959587!3d40.13474769360892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13443d812353aa8d%3A0x9ecc780bc8b7aa1!2sVia%20Fratelli%20Piccinno%2C%20106%2C%2073024%20Maglie%20LE!5e0!3m2!1sen!2sit!4v1681856722553!5m2!1sen!2sit"  width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`}
              ></DangerousHTML>
            </div>
          </div>
        </div>
        <div className="home-footer">
          <div className="home-left">
            <div className="home-brand">
              <img
                alt="image"
                src="/Branding/logo1-200h.png"
                className="home-image10"
              />
              <p className="home-text57">
                Assistenza rapida e professionale per il tuo radiatore auto
              </p>
            </div>
            <div className="home-socials">
              <div className="social">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon3"
                >
                  <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                </svg>
              </div>
            </div>
            <div className="home-legal">
              <span className="home-copyright">
                © 2023 finbest. All Rights Reserved.
              </span>
              <span className="legal-link">Privacy Policy</span>
              <span className="legal-link">Terms of Use</span>
            </div>
          </div>
          <div className="home-right">
            <div className="home-list">
              <span className="home-header11">Menu</span>
              <div className="home-links">
                <span className="home-link06">Home</span>
                <span href="#info" className="home-link07">
                  Informazioni
                </span>
                <span href="#ourservice" className="home-link08">
                  Servizi
                </span>
              </div>
            </div>
            <div className="home-list1">
              <span className="home-header12">Contatti</span>
              <div className="home-links1">
                <span className="home-link09">
                  <span className="home-text58">Via Fratelli Piccinno, 63</span>
                  <br></br>
                  <span>73024 Maglie (LE)</span>
                  <br></br>
                  <br className="home-text62"></br>
                  <br className="home-text63"></br>
                </span>
                <a
                  href="mailto:contact@template.new?subject=Main"
                  className="home-link10"
                >
                  digio@cheapnet.it
                </a>
                <a
                  href="tel:3471811467"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link11"
                >
                  Cel.: +39 3471811467
                </a>
                <a
                  href="tel:3471811467"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link12"
                >
                  Officina: 0836 428213
                </a>
              </div>
            </div>
          </div>
          <div className="home-legal1">
            <div className="home-row">
              <span className="legal-link">Privacy Policy</span>
              <span className="legal-link">Terms of Use</span>
            </div>
            <span className="home-copyright5">© 2023 All Rights Reserved.</span>
          </div>
        </div>
        <div>
          <DangerousHTML
            html={`<script>
const modalOpen = document.querySelectorAll('[data-open]');
const modalClose = document.querySelectorAll('[data-close]');

modalOpen.forEach(button => {
    button.addEventListener('click', event => {
        const modal = document.querySelector(\`[data-modal="\${event.target.dataset.open}"]\`);
        modal.style.display = "flex";
    });
});

modalClose.forEach(button => {
    button.addEventListener('click', event => {
        const modal = document.querySelector(\`[data-modal="\${event.target.dataset.close}"]\`);
        modal.style.display = "none";
    });
});
</script>
`}
          ></DangerousHTML>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            flex-direction: column;
            scroll-behavior: smooth;
          }
          .home-modal {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            z-index: 200;
            position: fixed;
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            backdrop-filter: blur(4px);
            justify-content: center;
          }
          .home-practices {
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            box-shadow: 0px 0px 25px -2px rgba(66, 68, 90, 0.4);
            align-items: center;
            border-radius: 12px;
            flex-direction: column;
            justify-content: center;
            background-color: #ffffff;
          }
          .home-heading {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: space-between;
          }
          .home-header {
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
          }
          .home-close {
            width: 24px;
            cursor: pointer;
            height: 24px;
            transition: 0.3s;
          }
          .home-close:hover {
            opacity: 0.5;
          }
          .home-grid {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            display: grid;
            align-items: flex-start;
            flex-direction: column;
            grid-template-columns: repeat(2, 1fr);
          }
          .home-section {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: #b4b9c6;
            flex-direction: column;
            border-top-width: 1px;
          }
          .home-heading01 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header01 {
            font-size: 30px;
            font-style: normal;
            font-weight: 600;
            line-height: 36px;
          }
          .home-caption {
            max-width: 385px;
            line-height: 24px;
          }
          .home-text {
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-image {
            width: 12px;
            object-fit: cover;
          }
          .home-section1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: #b4b9c6;
            flex-direction: column;
            border-top-width: 1px;
          }
          .home-heading02 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header02 {
            font-size: 30px;
            font-style: normal;
            font-weight: 600;
            line-height: 36px;
          }
          .home-caption1 {
            max-width: 385px;
            line-height: 24px;
          }
          .home-text01 {
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-image01 {
            width: 12px;
            object-fit: cover;
          }
          .home-section2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: #b4b9c6;
            flex-direction: column;
            border-top-width: 1px;
          }
          .home-heading03 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header03 {
            font-size: 30px;
            font-style: normal;
            font-weight: 600;
            line-height: 36px;
          }
          .home-caption2 {
            max-width: 385px;
            line-height: 24px;
          }
          .home-text02 {
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-image02 {
            width: 12px;
            object-fit: cover;
          }
          .home-section3 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: #b4b9c6;
            flex-direction: column;
            border-top-width: 1px;
          }
          .home-heading04 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header04 {
            font-size: 30px;
            font-style: normal;
            font-weight: 600;
            line-height: 36px;
          }
          .home-caption3 {
            max-width: 385px;
            line-height: 24px;
          }
          .home-text03 {
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-image03 {
            width: 12px;
            object-fit: cover;
          }
          .home-section4 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: #b4b9c6;
            flex-direction: column;
            border-top-width: 1px;
          }
          .home-heading05 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header05 {
            font-size: 30px;
            font-style: normal;
            font-weight: 600;
            line-height: 36px;
          }
          .home-caption4 {
            max-width: 385px;
            line-height: 24px;
          }
          .home-text04 {
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-image04 {
            width: 12px;
            object-fit: cover;
          }
          .home-section5 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: #b4b9c6;
            flex-direction: column;
            border-top-width: 1px;
          }
          .home-heading06 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header06 {
            font-size: 30px;
            font-style: normal;
            font-weight: 600;
            line-height: 36px;
          }
          .home-caption5 {
            max-width: 385px;
            line-height: 24px;
          }
          .home-text05 {
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-image05 {
            width: 12px;
            object-fit: cover;
          }
          .home-hero {
            width: 100%;
            height: 100vh;
            display: flex;
            position: relative;
            max-width: 1440px;
            align-self: center;
            align-items: center;
            flex-direction: column;
          }
          .home-main {
            flex: 1;
            width: 100%;
            display: flex;
            z-index: 100;
            max-width: 1440px;
            align-items: stretch;
            padding-left: var(--dl-space-space-fiveunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-content {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
          }
          .home-heading07 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header07 {
            width: 100%;
            font-size: 62px;
            max-width: 750px;
            font-style: normal;
            font-weight: 600;
            line-height: 74px;
          }
          .home-caption6 {
            width: 80%;
            font-size: 18px;
            max-width: 600px;
            line-height: 27px;
          }
          .home-caption7 {
            width: 80%;
            font-size: 18px;
            max-width: 600px;
            line-height: 27px;
          }
          .home-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
          }
          .home-icon1 {
            fill: #ffffff;
            width: 18px;
            object-fit: cover;
          }
          .home-image06 {
            flex: 1;
            width: 50%;
            height: 100%;
            display: flex;
            align-items: flex-end;
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            justify-content: center;
          }
          .home-image07 {
            width: 640px;
            height: 420px;
            align-self: center;
            object-fit: cover;
          }
          .home-features {
            width: 100%;
            display: flex;
            z-index: 100;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
            background-color: #2461ff;
          }
          .home-content1 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
          }
          .home-background {
            right: 0px;
            width: 37%;
            bottom: 0px;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-end;
            background-color: #d0f4fd;
          }
          .home-practices1 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-self: center;
            align-items: flex-start;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: 120px;
            flex-direction: row;
            padding-bottom: 120px;
          }
          .home-heading08 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text14 {
            font-size: 56px;
            font-style: normal;
            font-weight: 600;
          }
          .home-content2 {
            gap: var(--dl-space-space-fourunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-grid1 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            display: grid;
            align-items: flex-start;
            flex-direction: column;
            grid-template-columns: repeat(2, 1fr);
          }
          .home-practice-wrapper {
            cursor: pointer;
            text-decoration: none;
          }
          .home-practice-wrapper1 {
            cursor: pointer;
            text-decoration: none;
          }
          .home-practice-wrapper2 {
            cursor: pointer;
            text-decoration: none;
          }
          .home-practice-wrapper3 {
            cursor: pointer;
            text-decoration: none;
          }
          .home-features1 {
            gap: 120px;
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-self: center;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
          }
          .home-section6 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-content3 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-header08 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-heading09 {
            font-size: 56px;
            max-width: 600px;
            font-style: normal;
            font-weight: 600;
          }
          .home-capton {
            font-size: 18px;
            max-width: 600px;
            line-height: 27px;
          }
          .home-container2 {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            align-items: flex-start;
          }
          .home-image08 {
            width: 500px;
            object-fit: cover;
          }
          .home-section7 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row-reverse;
            justify-content: space-between;
          }
          .home-content4 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-header09 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-heading10 {
            font-size: 56px;
            max-width: 600px;
            font-style: normal;
            font-weight: 600;
          }
          .home-capton1 {
            font-size: 18px;
            max-width: 600px;
            line-height: 27px;
          }
          .home-container3 {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            align-items: flex-start;
          }
          .home-image09 {
            width: 500px;
            object-fit: cover;
          }
          .home-book1 {
            display: none;
          }
          .home-schedule {
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-self: center;
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
          }
          .home-content5 {
            gap: var(--dl-space-space-fourunits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-fiveunits);
            align-self: center;
            align-items: center;
            flex-direction: column;
            background-color: #2461ff;
          }
          .home-header10 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-heading11 {
            color: #ffffff;
            font-size: 56px;
            max-width: 800px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .home-caption8 {
            color: rgba(255, 255, 255, 0.8);
            font-size: 18px;
            max-width: 900px;
            text-align: center;
            line-height: 27px;
          }
          .home-container4 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .home-types {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-book-person {
            text-decoration: none;
          }
          .home-text36 {
            color: #ffffff;
          }
          .home-book2 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 1440px;
            align-self: center;
            align-items: stretch;
            padding-top: 60px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 60px;
          }
          .home-heading12 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text39 {
            font-size: 56px;
            max-width: 600px;
            text-align: center;
            font-weight: 600;
          }
          .home-text40 {
            font-style: normal;
          }
          .home-text42 {
            font-size: 32px;
            font-weight: 400;
          }
          .home-form {
            width: 100%;
            height: 100%;
            display: flex;
            align-self: center;
            justify-content: center;
          }
          .home-inputs {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-lower {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-button {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-book3 {
            width: 100%;
          }
          .home-text45 {
            font-size: 10px;
            max-width: 700px;
            text-align: left;
            line-height: 15px;
          }
          .home-text47 {
            color: #2461ff;
            font-style: normal;
            font-weight: 600;
          }
          .home-text49 {
            color: #2461ff;
            font-style: normal;
            font-weight: 600;
          }
          .home-container5 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-hero1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            min-height: 80vh;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container6 {
            width: 30%;
            display: flex;
            flex-direction: column;
          }
          .home-text51 {
            font-size: 3rem;
            max-width: 450px;
          }
          .home-container7 {
            flex: 0 0 auto;
            width: 70%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-footer {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: space-between;
            background-color: #000000;
          }
          .home-left {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .home-brand {
            gap: var(--dl-space-space-unit);
            display: flex;
            max-width: 400px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image10 {
            width: 165px;
            object-fit: cover;
          }
          .home-text57 {
            color: rgb(255, 255, 255);
            font-size: 14px;
            line-height: 21px;
          }
          .home-socials {
            gap: var(--dl-space-space-unit);
            display: flex;
            max-width: 400px;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-icon3 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
          }
          .home-legal {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-copyright {
            color: rgb(255, 255, 255);
            font-size: 12px;
          }
          .home-right {
            gap: 140px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-list {
            gap: var(--dl-space-space-unit);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header11 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
          }
          .home-links {
            gap: 12px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link06 {
            color: rgb(255, 255, 255);
            cursor: pointer;
            transition: 0.3s;
          }
          .home-link06:hover {
            opacity: 0.5;
          }
          .home-link07 {
            color: rgb(255, 255, 255);
            cursor: pointer;
            transition: 0.3s;
          }
          .home-link07:hover {
            opacity: 0.5;
          }
          .home-link08 {
            color: rgb(255, 255, 255);
            cursor: pointer;
            transition: 0.3s;
          }
          .home-link08:hover {
            opacity: 0.5;
          }
          .home-list1 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header12 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
          }
          .home-links1 {
            gap: 12px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link09 {
            color: rgb(255, 255, 255);
            width: 215px;
            cursor: pointer;
            transition: 0.3s;
          }
          .home-link09:hover {
            opacity: 0.5;
          }
          .home-text58 {
            width: 215px;
            cursor: pointer;
            transition: 0.3s;
          }
          .home-text58:hover {
            opacity: 0.5;
          }
          .home-text63:hover {
            opacity: 0.5;
          }
          .home-link10 {
            color: rgb(255, 255, 255);
            width: 215px;
            cursor: pointer;
            transition: 0.3s;
            text-decoration: none;
          }
          .home-link10:hover {
            opacity: 0.5;
          }
          .home-link11 {
            color: rgb(255, 255, 255);
          }
          .home-link12 {
            color: rgb(255, 255, 255);
          }
          .home-legal1 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: none;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-row {
            display: flex;
          }
          .home-copyright5 {
            color: rgb(255, 255, 255);
            font-size: 12px;
          }
          @media (max-width: 1600px) {
            .home-modal {
              display: none;
            }
            .home-hero {
              max-width: var(--dl-size-size-maxwidth);
              align-self: center;
            }
            .home-caption6 {
              font-size: 18px;
              line-height: 27px;
            }
            .home-caption7 {
              font-size: 18px;
              line-height: 27px;
            }
            .home-container1 {
              gap: var(--dl-space-space-unit);
              align-items: center;
            }
            .home-practices1 {
              flex-direction: row;
            }
            .home-heading09 {
              font-size: 56px;
            }
            .home-capton {
              font-size: 18px;
              line-height: 27px;
            }
            .home-image08 {
              width: 500px;
              height: 480px;
            }
            .home-image09 {
              width: 500px;
              height: 480px;
            }
            .home-schedule {
              padding-bottom: 60px;
            }
            .home-heading11 {
              color: rgb(255, 255, 255);
            }
            .home-caption8 {
              color: rgba(255, 255, 255, 0.8);
              font-size: 18px;
              line-height: 36px;
            }
            .home-text36 {
              color: rgb(255, 255, 255);
            }
            .home-book2 {
              height: 100%;
              align-self: center;
              align-items: stretch;
              padding-top: 60px;
              border-color: #ffffff;
              margin-bottom: 6px;
              padding-bottom: 60px;
            }
            .home-text40 {
              font-style: normal;
            }
            .home-text41 {
              font-style: normal;
            }
            .home-text42 {
              font-size: 32px;
              font-style: inherit;
              font-weight: 400;
            }
            .home-text43 {
              font-style: normal;
            }
            .home-form {
              width: 100%;
              height: 100%;
              align-self: center;
              justify-content: center;
            }
            .home-hero1 {
              margin-top: 6px;
            }
            .home-text57 {
              color: rgb(255, 255, 255);
              font-size: 14px;
              line-height: 21px;
            }
            .home-icon3 {
              fill: #d9d9d9;
            }
            .home-copyright {
              color: rgb(255, 255, 255);
              font-size: 12px;
            }
          }
          @media (max-width: 1200px) {
            .home-hero {
              max-width: var(--dl-size-size-maxwidth);
              align-self: stretch;
              align-items: stretch;
            }
            .home-header07 {
              line-height: 74px;
            }
            .home-caption6 {
              font-size: 18px;
              line-height: 27px;
            }
            .home-caption7 {
              font-size: 18px;
              line-height: 27px;
            }
            .home-text14 {
              font-size: 56px;
              font-style: normal;
              font-weight: 600;
            }
            .home-features1 {
              padding-top: 100px;
              padding-bottom: 100px;
            }
            .home-section6 {
              align-self: flex-end;
            }
            .home-heading09 {
              font-size: 56px;
            }
            .home-capton {
              font-size: 18px;
              line-height: 27px;
            }
            .home-container2 {
              width: 50%;
            }
            .home-content4 {
              height: 380px;
            }
            .home-capton1 {
              line-height: 27px;
            }
            .home-container3 {
              width: 50%;
            }
            .home-text39 {
              font-size: 56px;
              font-style: normal;
              font-weight: 600;
            }
            .home-text40 {
              font-size: 56px;
              font-style: normal;
              font-weight: 600;
            }
            .home-form {
              width: 100%;
              height: auto;
              align-self: center;
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .home-link07 {
              color: rgb(255, 255, 255);
            }
            .home-link08 {
              color: rgb(255, 255, 255);
            }
            .home-header12 {
              color: rgb(255, 255, 255);
              font-style: normal;
              font-weight: 600;
            }
            .home-link09 {
              color: rgb(255, 255, 255);
            }
            .home-text62 {
              color: #ffffff;
            }
            .home-link10 {
              color: rgb(255, 255, 255);
              text-decoration: none;
            }
          }
          @media (max-width: 991px) {
            .home-hero {
              flex: 1;
              height: 0px;
            }
            .home-main {
              align-items: center;
              padding-left: var(--dl-space-space-halfunit);
              margin-bottom: 16px;
              padding-right: var(--dl-space-space-halfunit);
              flex-direction: column;
            }
            .home-content {
              margin-top: 12px;
              padding-top: 0px;
              margin-bottom: 12px;
              padding-bottom: 0px;
            }
            .home-heading07 {
              align-items: center;
            }
            .home-header07 {
              max-width: 75%;
              align-self: center;
              text-align: center;
            }
            .home-text06 {
              max-width: 75%;
            }
            .home-caption6 {
              width: 100%;
              max-width: 100%;
              align-self: stretch;
              text-align: center;
            }
            .home-caption7 {
              width: 100%;
              max-width: 100%;
              align-self: stretch;
              text-align: center;
            }
            .home-container1 {
              height: 100px;
              z-index: 100;
              flex-direction: column;
            }
            .home-book {
              z-index: 100;
              align-self: center;
            }
            .home-image06 {
              flex: 0 0 auto;
              width: 100%;
              height: 300px;
              position: relative;
              align-items: center;
              padding-right: 0px;
              flex-direction: row;
              justify-content: center;
            }
            .home-image07 {
              z-index: 90;
              align-self: flex-start;
            }
            .home-features {
              padding-top: var(--dl-space-space-fourunits);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-content1 {
              align-items: center;
              flex-direction: column;
            }
            .home-background {
              left: 0px;
              width: 100%;
              bottom: 0px;
              height: 45%;
              position: absolute;
              justify-content: flex-end;
            }
            .home-practices1 {
              flex-direction: column;
            }
            .home-features1 {
              gap: var(--dl-space-space-threeunits);
              align-self: center;
            }
            .home-section6 {
              gap: var(--dl-space-space-twounits);
              align-self: stretch;
              align-items: center;
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-content3 {
              width: 100%;
              align-items: center;
            }
            .home-container2 {
              width: 100%;
              align-items: center;
              flex-direction: column;
            }
            .home-image08 {
              align-self: center;
            }
            .home-section7 {
              gap: var(--dl-space-space-twounits);
              align-items: stretch;
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-content4 {
              width: 100%;
              height: auto;
              align-self: flex-end;
              align-items: center;
            }
            .home-heading10 {
              font-size: 56px;
              font-style: normal;
              font-weight: 600;
            }
            .home-container3 {
              width: 100%;
              justify-content: center;
            }
            .home-image09 {
              align-self: flex-end;
            }
            .home-schedule {
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 60px;
            }
            .home-heading11 {
              color: rgb(255, 255, 255);
              font-size: 56px;
              font-style: normal;
              font-weight: 600;
            }
            .home-caption8 {
              color: rgba(255, 255, 255, 0.8);
            }
            .home-types {
              width: 100%;
              flex-direction: row;
            }
            .home-book-person {
              width: 50%;
            }
            .home-book-person1 {
              width: 50%;
            }
            .home-text39 {
              font-size: 56px;
              font-style: normal;
              font-weight: 600;
            }
            .home-text40 {
              font-size: 56px;
              font-style: normal;
              font-weight: 600;
            }
            .home-hero1 {
              flex-direction: column;
            }
            .home-container6 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-halfunit);
              padding-right: 0px;
            }
            .home-text51 {
              text-align: center;
            }
            .home-text52 {
              text-align: center;
            }
            .home-container7 {
              width: 100%;
            }
            .home-footer {
              gap: 100px;
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-left {
              padding-right: 0px;
            }
            .home-socials {
              display: none;
            }
            .home-legal {
              display: none;
            }
            .home-right {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .home-legal1 {
              gap: var(--dl-space-space-twounits);
              display: flex;
              flex-direction: column;
            }
            .home-row {
              gap: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 767px) {
            .home-hero1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .home-hero1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container6 {
              margin-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 470px) {
            .home-main {
              padding: 0px;
            }
            .home-header07 {
              font-size: 48px;
            }
            .home-image07 {
              width: 100%;
              height: 370px;
              position: static;
            }
            .home-practices1 {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-heading08 {
              align-items: center;
            }
            .home-text14 {
              padding: var(--dl-space-space-unit);
              padding-bottom: 16px;
            }
            .home-content2 {
              width: 100%;
            }
            .home-grid1 {
              gap: var(--dl-space-space-twounits);
              width: 100%;
              grid-template-columns: repeat(1, 1fr);
            }
            .home-all {
              align-self: center;
            }
            .home-features1 {
              padding-top: 60px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-section6 {
              align-items: center;
            }
            .home-content3 {
              width: 100%;
              align-items: center;
            }
            .home-header08 {
              align-items: center;
            }
            .home-heading09 {
              padding: var(--dl-space-space-unit);
              font-size: 48px;
              font-style: normal;
              font-weight: 600;
            }
            .home-capton {
              padding: var(--dl-space-space-unit);
              line-height: 20px;
            }
            .home-container2 {
              width: 100%;
            }
            .home-image08 {
              width: 100%;
              height: 360px;
            }
            .home-section7 {
              align-items: center;
            }
            .home-content4 {
              align-items: center;
            }
            .home-header09 {
              align-items: center;
            }
            .home-heading10 {
              padding: var(--dl-space-space-unit);
              font-size: 48px;
            }
            .home-capton1 {
              padding: var(--dl-space-space-unit);
            }
            .home-container3 {
              width: 100%;
            }
            .home-image09 {
              width: 100%;
              height: 360px;
            }
            .home-container4 {
              align-self: stretch;
              align-items: stretch;
              flex-direction: column;
              fflex-direction: column;
            }
            .home-types {
              flex-direction: column;
            }
            .home-book2 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 385px) {
            .home-main {
              gap: 0;
              align-items: center;
              padding-left: 0px;
              padding-right: 0px;
              justify-content: space-between;
            }
            .home-content {
              align-items: center;
            }
            .home-heading07 {
              align-items: center;
            }
            .home-header07 {
              font-size: 48px;
              max-width: 80%;
              line-height: 70px;
            }
            .home-text06 {
              max-width: 80%;
            }
            .home-caption6 {
              font-size: 18px;
              max-width: 100%;
              line-height: 27px;
            }
            .home-caption7 {
              font-size: 18px;
              max-width: 100%;
              line-height: 27px;
            }
            .home-container1 {
              padding: 6px;
            }
            .home-book {
              width: 100%;
              flex-direction: row;
              justify-content: center;
            }
            .home-image07 {
              max-height: 500px;
            }
            .home-practices1 {
              align-items: center;
            }
            .home-content2 {
              gap: var(--dl-space-space-threeunits);
              align-items: center;
            }
            .home-all {
              flex-direction: column;
            }
            .home-section6 {
              height: auto;
              position: relative;
            }
            .home-content3 {
              height: 400px;
            }
            .home-container2 {
              flex-direction: column;
            }
            .home-image08 {
              width: 100%;
              align-self: flex-start;
            }
            .home-section7 {
              align-items: flex-end;
            }
            .home-container3 {
              flex-direction: column;
            }
            .home-image09 {
              width: 100%;
              align-self: flex-start;
            }
            .home-content5 {
              padding: var(--dl-space-space-unit);
            }
            .home-types {
              flex-direction: column;
            }
            .home-hero1 {
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
            }
            .home-container7 {
              width: 100%;
            }
            .home-copyright5 {
              color: rgb(255, 255, 255);
              font-size: 12px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
