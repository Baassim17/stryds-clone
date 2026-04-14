import Script from "next/script";

const inlineResponsiveStyles = `
<!-- <style>
  @media screen and (min-width: 992px) {
    .hero-headline-l {
      font-size: calc(12vw + 10vh + 0.5rem);
    }
  }
</style> -->

<style>
  @media screen and (min-width: 992px) {
    .hero-headline-l {
      font-size: calc(6vw + 6vh + 0.5rem);
    }
  }
</style>

<style>
  @media screen and (min-width: 992px) {
    .hero-headline-m {
      font-size: calc(3vw + 3vh + 0.5rem);
    }
  }
</style>

<style>
  @media screen and (min-width: 992px) {
    .global-headline-xxl {
      font-size: calc(7.5vw + 7.5vh + 0.5rem);
    }
  }
</style>

<style>
  @media screen and (min-width: 992px) {
    .global-headline-xl {
      font-size: calc(4.5vw + 4.5vh + 0.2rem);
    }
  }
</style>

<style>
  @media screen and (min-width: 992px) {
    .global-headline-l {
      font-size: calc(1.75vw + 1.75vh + 0.2rem);
    }
  }
</style>

<style>
.hero-lottie > svg {
transform: none !important;
}
</style>
`;

const pointerEventsNoneStyle = `
<style>
.curser_gradient {
  pointer-events: none;
}
</style>
`;

const pointerWrapperStyle = `
<style>
.curser_wrapper {
  pointer-events: none;
}
</style>
`;

const pointerCircleStyle = `
<style>
.curser_circle {
  pointer-events: none;
}
</style>
`;

const identityTransform = {
  transform:
    "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
};

export default function Home() {
  return (
    <>
      <div
        fs-scrolldisable-element="when-visible"
        data-w-id="57f62473-83b5-f8af-a5f2-1b8105ec7428"
        className="preloader"
      >
        <div className="preloader-outer">
          <div
            data-preserve-aspect-ratio="xMidYMid slice"
            data-w-id="c61e93cf-adec-e9ce-858e-8a34cb1dc5a4"
            data-is-ix2-target="1"
            className="preloader-lottie"
            data-animation-type="lottie"
            data-src="/stryds/lottie/preloader_desktop.json"
            data-loop="0"
            data-direction="1"
            data-autoplay="0"
            data-renderer="canvas"
            data-duration="0"
            data-ix2-initial-state="0"
          />
        </div>
      </div>

      <div className="navigation">
        <div
          data-w-id="48e86539-0a6c-d659-2f4e-c061726125fb"
          data-animation="default"
          data-collapse="medium"
          data-duration="400"
          data-easing="ease"
          data-easing2="ease"
          role="banner"
          className="webflow-native-navbar w-nav"
        >
          <div className="navbar-outer">
            <div className="navbar-inner">
              <a href="/" aria-current="page" className="navbar-logo-div w-nav-brand w--current">
                <img
                  src="/stryds/icons/logo.svg"
                  loading="eager"
                  alt="Logo"
                  className="logo-light"
                />
              </a>
              <div
                id="w-node-_48e86539-0a6c-d659-2f4e-c06172612601-726125fa"
                className="nav-area-left"
              >
                <div
                  fs-mirrorclick-element="target"
                  data-w-id="48e86539-0a6c-d659-2f4e-c06172612602"
                  className="menu-btn"
                >
                  <div className="line-1" />
                  <div className="line-2" />
                </div>
                <div className="btn-div">
                  <a
                    data-w-id="48e86539-0a6c-d659-2f4e-c06172612606"
                    href="#"
                    className="primary-btn w-inline-block"
                  >
                    <div className="btn-txt-container">
                      <div className="primary-btn-txt">Join</div>
                      <div className="primary-btn-txt">Join</div>
                    </div>
                    <div className="btn-curser-gradient" />
                  </a>
                  <a
                    data-w-id="48e86539-0a6c-d659-2f4e-c0617261260c"
                    href="#"
                    className="secondary-btn in-nav w-inline-block"
                  >
                    <div className="btn-txt-container">
                      <div className="secondary-btn-txt">Join</div>
                      <div className="secondary-btn-txt">Join</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-content">
        <div data-w-id="163e971e-61b5-756a-9071-daa9f20b3805" className="_01-hero">
          <div className="hero-outer">
            <div className="hero-inner">
              <div className="hero-layer-1">
                <div className="hero-txt-item-1">
                  <h1 className="hero-headline-l">
                    St<span className="kerning-2">r</span>
                    <span className="kerning-1">y</span>ds
                  </h1>
                  <div className="global-subline-div">
                    <div className="hero-headline-s">The Social Health App</div>
                  </div>
                </div>
                <div
                  data-w-id="fd45b934-fe86-7222-d780-7ad33aaf0aa9"
                  style={{ opacity: 0 }}
                  className="hero-txt-item-2"
                >
                  <div className="hero-headline-m">
                    Social apps
                    <br />
                    are <span className="is-white">toxic</span>.
                  </div>
                </div>
                <div
                  data-w-id="7d79a41d-7884-ffcc-cd3d-020851e2d396"
                  style={{ opacity: 0 }}
                  className="hero-txt-item-3"
                >
                  <div className="hero-headline-m">
                    Health apps
                    <br />
                    are <span className="is-white">boring</span>.
                  </div>
                </div>
                <div
                  data-w-id="4a93ecbf-6ce0-2bbf-e4cb-53c87205bdd9"
                  style={{ opacity: 0 }}
                  className="hero-txt-item-4"
                >
                  <div className="hero-headline-m">
                    <span className="is-white">Str</span>
                    <span className="kerning-4">y</span>
                    <span className="is-white">ds</span> is where social gets{" "}
                    <span className="is-white">healthy</span> and health gets{" "}
                    <span className="is-white">social</span>. Finally.
                  </div>
                </div>
              </div>
              <div id="lottie" className="hero-layer-2">
                <div
                  data-preserve-aspect-ratio="xMidYMid slice"
                  className="hero-lottie desktop"
                  data-w-id="4282dfcc-db83-e006-ca82-b90e340a96d3"
                  data-animation-type="lottie"
                  data-src="/stryds/lottie/hero_desktop.json"
                  data-loop="1"
                  data-direction="1"
                  data-autoplay="1"
                  data-is-ix2-target="0"
                  data-renderer="canvas"
                  data-default-duration="7.016666666666667"
                  data-duration="0"
                />
                <div
                  data-preserve-aspect-ratio="xMidYMid slice"
                  className="hero-lottie mobile"
                  data-w-id="b6236eca-686f-e263-a384-37f5c351af69"
                  data-animation-type="lottie"
                  data-src="/stryds/lottie/hero_mobile.json"
                  data-loop="1"
                  data-direction="1"
                  data-autoplay="1"
                  data-is-ix2-target="0"
                  data-renderer="canvas"
                  data-default-duration="7.016666666666667"
                  data-duration="0"
                />
              </div>
            </div>
          </div>
        </div>

        <div data-w-id="17510a98-9277-9d79-b962-97c0ca3ccc91" className="_02-cards">
          <div className="card-1">
            <div className="card-inner">
              <div className="card-txt-div">
                <div className="animated-txt-div">
                  <div data-w-id="858aa4ed-18ed-f3ef-4d7a-bf26a7cbfbd7" className="global-headline-xl">
                    Achieve
                  </div>
                </div>
                <div className="animated-txt-div">
                  <div className="global-headline-xl">Your Goals&nbsp;</div>
                </div>
                <div className="global-subline">
                  <div className="animated-txt-div">
                    <p className="global-headline-l">Supercharge your fitness,</p>
                  </div>
                  <div className="animated-txt-div">
                    <p className="global-headline-l">weight, steps, focus, and</p>
                  </div>
                  <div className="animated-txt-div">
                    <p className="global-headline-l">healthy routines.</p>
                  </div>
                </div>
              </div>
              <div data-w-id="f194c01a-c972-447c-8ddf-cd86a48da53c" className="card-lottie-div is-card-1">
                <div className="card-gradient" />
                <div
                  data-preserve-aspect-ratio="xMidYMid slice"
                  className="card-lottie"
                  data-w-id="f4e886d9-ad3c-4d06-def4-db4f949fcbfc"
                  data-animation-type="lottie"
                  data-src="/stryds/lottie/card_01.json"
                  data-loop="1"
                  data-direction="1"
                  data-autoplay="1"
                  data-is-ix2-target="0"
                  data-renderer="svg"
                  data-default-duration="6.166666666666667"
                  data-duration="0"
                />
              </div>
            </div>
          </div>

          <div className="card-2">
            <div className="card-inner">
              <div className="card-txt-div">
                <div className="animated-txt-div">
                  <div className="global-headline-xl _1-1em">Challenge</div>
                </div>
                <div className="animated-txt-div">
                  <div className="global-headline-xl _1-2em">Your Friends</div>
                </div>
                <div className="global-subline">
                  <div className="animated-txt-div">
                    <p className="global-headline-l">Level up your healthy</p>
                  </div>
                  <div className="animated-txt-div">
                    <p className="global-headline-l">habits - with a little help</p>
                  </div>
                  <div className="animated-txt-div">
                    <p className="global-headline-l">from your friends.</p>
                  </div>
                </div>
              </div>
              <div data-w-id="3d26cbcb-7a33-6814-0491-b23c03db8e79" className="card-lottie-div is-card-2">
                <div className="card-gradient is-card-1" />
                <div
                  data-preserve-aspect-ratio="xMidYMid slice"
                  className="card-lottie card-1-desktop"
                  data-w-id="f2ec7cf7-3c82-98d8-c77f-fa71ab4fafa9"
                  data-animation-type="lottie"
                  data-src="/stryds/lottie/card_02_desktop.json"
                  data-loop="1"
                  data-direction="1"
                  data-autoplay="1"
                  data-is-ix2-target="0"
                  data-renderer="svg"
                  data-default-duration="8"
                  data-duration="0"
                />
                <div
                  data-preserve-aspect-ratio="xMidYMid slice"
                  className="card-lottie card-1-mobile"
                  data-w-id="e9daba78-3c84-3d2d-17d3-c614143497cb"
                  data-animation-type="lottie"
                  data-src="/stryds/lottie/card_02_mobile.json"
                  data-loop="1"
                  data-direction="1"
                  data-autoplay="1"
                  data-is-ix2-target="0"
                  data-renderer="svg"
                  data-default-duration="8"
                  data-duration="0"
                />
              </div>
            </div>
          </div>

          <div className="card-3">
            <div className="card-inner">
              <div className="card-txt-div">
                <div className="animated-txt-div">
                  <div className="global-headline-xl">Share Your</div>
                </div>
                <div className="animated-txt-div pb-05">
                  <div className="global-headline-xl">Journey </div>
                </div>
                <div className="global-subline _2vh">
                  <div className="animated-txt-div">
                    <p className="global-headline-l">Capture your moments to </p>
                  </div>
                  <div className="animated-txt-div">
                    <p className="global-headline-l">savor the experience. </p>
                  </div>
                  <div className="animated-txt-div">
                    <p className="global-headline-l">Living well &gt; living large.</p>
                  </div>
                </div>
              </div>
              <div className="card-lottie-div is-card-3">
                <div
                  data-preserve-aspect-ratio="xMidYMid slice"
                  className="card-lottie"
                  data-w-id="3542e97a-545d-2514-f926-1a3506ab1657"
                  data-animation-type="lottie"
                  data-src="/stryds/lottie/card_03.json"
                  data-loop="1"
                  data-direction="1"
                  data-autoplay="1"
                  data-is-ix2-target="0"
                  data-renderer="canvas"
                  data-duration="0"
                />
              </div>
            </div>
          </div>
        </div>

        <div data-w-id="7e22d0c9-475e-4dd9-d818-d70567087cbd" className="_03-cta">
          <div className="cta-outer">
            <div className="cta-inner">
              <div className="cta-layer-1">
                <div className="global-headline-xxl">Let&apos;s make</div>
                <div className="global-headline-xxl">
                  Str<span className="kerning-3">y</span>ds. Together.
                </div>
                <div className="global-btn-wrapper">
                  <a
                    data-w-id="dea5d2a4-5c62-1b9c-e345-65784129fe52"
                    href="#"
                    className="secondary-btn w-inline-block"
                  >
                    <div
                      className="btn-lottie"
                      data-w-id="8d4680fc-7056-1460-6d6f-a92ab1ecc939"
                      data-animation-type="lottie"
                      data-src="/stryds/lottie/button.json"
                      data-loop="1"
                      data-direction="1"
                      data-autoplay="1"
                      data-is-ix2-target="0"
                      data-renderer="svg"
                      data-default-duration="11.1"
                      data-duration="0"
                    />
                    <div className="btn-txt-container">
                      <div style={identityTransform} className="secondary-btn-txt">
                        Join
                      </div>
                      <div style={identityTransform} className="secondary-btn-txt">
                        Join
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="cta-layer-2">
                <div
                  data-preserve-aspect-ratio="xMidYMid slice"
                  data-is-ix2-target="1"
                  className="cta-lottie"
                  data-w-id="b9f642ca-d054-dca3-0882-9033a0fc39cd"
                  data-animation-type="lottie"
                  data-src="/stryds/lottie/cta.json"
                  data-loop="0"
                  data-direction="1"
                  data-autoplay="0"
                  data-renderer="canvas"
                  data-duration="2.5"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="curser_gradient">
          <div data-w-id="99506e88-9532-f313-2792-c57efd86b63f" className="curser_gradient-bg" />
          <div className="w-embed" dangerouslySetInnerHTML={{ __html: pointerEventsNoneStyle }} />
        </div>
      </div>

      <div className="curser_wrapper">
        <div data-w-id="9c634a1d-dffd-1585-f121-efb837a749eb" className="curser">
          <img src="/stryds/icons/cursor.svg" loading="lazy" alt="" className="pointer" />
        </div>
        <div className="w-embed" dangerouslySetInnerHTML={{ __html: pointerWrapperStyle }} />
      </div>

      <div className="pop-up">
        <div className="pop-up-outer">
          <div className="pop-up-headline is-white">Let&apos;s make Stryds 🙌</div>
          <div className="form">
            <div id="stryds-waitlist" className="global-form w-form">
              <form
                id="wf-form-stryds-waitlist"
                name="wf-form-stryds-waitlist"
                data-name="stryds-waitlist"
                method="get"
                className="form-inner"
                data-wf-page-id="66503afaeb964a084dd8fbf4"
                data-wf-element-id="8f2f33b0-e5c4-fd0e-0fba-1c5d9e31f491"
              >
                <div className="form-item">
                  <input
                    ms-code-phone-number="us"
                    className="text-field w-input"
                    autoFocus
                    maxLength={256}
                    name="Phone"
                    data-name="Phone"
                    placeholder=""
                    data-w-id="8f2f33b0-e5c4-fd0e-0fba-1c5d9e31f493"
                    type="tel"
                    id="phone"
                    required
                  />
                </div>
                <input
                  type="submit"
                  data-wait="Sending"
                  data-w-id="8f2f33b0-e5c4-fd0e-0fba-1c5d9e31f494"
                  className="submit-button w-button"
                  value="Join"
                />
              </form>
              <div className="success-message w-form-done">
                <div className="copytext is-green">We&apos;ll text you with an invite soon 🥳</div>
              </div>
              <div className="error-message w-form-fail">
                <div className="copytext is-red">Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>

          <div className="multistep-form">
            <div className="form-step-1">
              <div className="device-selection-grid">
                <a
                  id="w-node-_9ce09701-4ca8-0333-c623-58bb6de9cb5e-5ba84809"
                  data-w-id="9ce09701-4ca8-0333-c623-58bb6de9cb5e"
                  href="#"
                  className="select-item w-inline-block"
                >
                  <img src="/stryds/icons/ios.svg" loading="lazy" alt="" className="select-icon" />
                  <div className="copytext">iPhone</div>
                </a>
                <a
                  data-w-id="04fc66fd-658f-dce1-6539-39a72ae7adef"
                  href="#"
                  className="select-item w-inline-block"
                >
                  <img src="/stryds/icons/android.svg" loading="lazy" alt="" className="select-icon" />
                  <div className="copytext">Android</div>
                </a>
              </div>
            </div>

            <div className="form-step-ios">
              <div id="form-iphone" className="global-form w-form">
                <form
                  id="wf-form-iphone"
                  name="wf-form-iphone"
                  data-name="iphone"
                  method="get"
                  className="form-inner"
                  data-wf-page-id="66503afaeb964a084dd8fbf4"
                  data-wf-element-id="60a69d20-c294-3929-34d5-2afe5ba8480e"
                >
                  <div className="form-item">
                    <input
                      ms-code-phone-number="us"
                      className="text-field w-input"
                      autoFocus
                      maxLength={256}
                      name="Phone-iOS"
                      data-name="Phone iOS"
                      placeholder=""
                      data-w-id="60a69d20-c294-3929-34d5-2afe5ba84810"
                      type="tel"
                      id="Phone-iOS"
                      required
                    />
                  </div>
                  <input
                    type="submit"
                    data-wait="Sending"
                    data-w-id="60a69d20-c294-3929-34d5-2afe5ba84811"
                    className="submit-button w-button"
                    value="Join"
                  />
                </form>
                <div className="success-message w-form-done">
                  <div className="copytext is-green">We&apos;ll text you an invite soon 🥳</div>
                </div>
                <div className="error-message w-form-fail">
                  <div className="copytext is-red">Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
              <a data-w-id="d7a172a9-4d8f-ad85-7424-b601cc31fead" href="#" className="go-back">
                Back
              </a>
            </div>

            <div ms-code-phone-number="us" className="form-step-android">
              <div id="form-android" className="global-form w-form">
                <form
                  id="wf-form-android"
                  name="wf-form-android"
                  data-name="android"
                  method="get"
                  className="form-inner"
                  data-wf-page-id="66503afaeb964a084dd8fbf4"
                  data-wf-element-id="019efd36-6de1-2966-e79d-3e11bcfe959e"
                >
                  <div className="form-item">
                    <input
                      ms-code-phone-number="us"
                      className="text-field w-input"
                      autoFocus
                      maxLength={256}
                      name="Phone-Android"
                      data-name="Phone Android"
                      placeholder=""
                      data-w-id="019efd36-6de1-2966-e79d-3e11bcfe95a0"
                      type="tel"
                      id="Phone-Android-3"
                      required
                    />
                  </div>
                  <input
                    type="submit"
                    data-wait="Sending"
                    data-w-id="019efd36-6de1-2966-e79d-3e11bcfe95a1"
                    className="submit-button w-button"
                    value="Join"
                  />
                </form>
                <div className="success-message w-form-done">
                  <div className="copytext is-green">We&apos;ll text you an invite soon 🥳</div>
                </div>
                <div className="error-message w-form-fail">
                  <div className="copytext is-red">Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
              <a data-w-id="aaa0c136-be38-e266-4244-a9f94ac21186" href="#" className="go-back">
                Back
              </a>
            </div>
          </div>

          <div id="email-new" className="form-email w-form">
            <form
              id="wf-form-email-new"
              name="wf-form-email-new"
              data-name="email-new"
              method="get"
              className="form-inner"
              data-wf-page-id="66503afaeb964a084dd8fbf4"
              data-wf-element-id="4c197fb1-2e44-2900-20be-6221a9c8dbff"
            >
              <div className="form-item">
                <input
                  className="text-field w-input"
                  autoFocus
                  maxLength={256}
                  name="E-Mail"
                  data-name="E-Mail"
                  placeholder="E-Mail"
                  data-w-id="4c197fb1-2e44-2900-20be-6221a9c8dc01"
                  type="email"
                  id="E-Mail"
                  required
                />
              </div>
              <input
                type="submit"
                data-wait="Sending"
                data-w-id="4c197fb1-2e44-2900-20be-6221a9c8dc02"
                className="submit-button w-button"
                value="Join"
              />
            </form>
            <div className="success-message w-form-done">
              <div className="copytext is-green">Nice! We&apos;ll email you in a sec.</div>
            </div>
            <div className="error-message w-form-fail">
              <div className="copytext is-red">Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>

          <div data-w-id="60a69d20-c294-3929-34d5-2afe5ba84818" className="pop-up-closing-trigger" />
        </div>
      </div>

      <div className="globals w-embed" dangerouslySetInnerHTML={{ __html: inlineResponsiveStyles }} />

      <div className="curser_circle">
        <div data-w-id="a89fa504-ffc4-03a5-29f6-e4f8542a1638" className="curser-circle-bg" />
        <div className="w-embed" dangerouslySetInnerHTML={{ __html: pointerCircleStyle }} />
      </div>

      <Script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=664eea9e5a26d00faaa2716e" strategy="afterInteractive" />
      <Script src="/stryds/js/webflow-schunk.js" strategy="afterInteractive" />
      <Script src="/stryds/js/webflow.js" strategy="afterInteractive" />
      <Script id="stryds-lottie-resize" strategy="afterInteractive">{`
        window.Webflow = window.Webflow || [];
        window.Webflow.push(function() {
          window.addEventListener('resize', function() {
            window.Webflow.require("lottie").lottie.resize();
          });
        });
      `}</Script>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/intlTelInput.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
        strategy="afterInteractive"
      />
      <Script id="stryds-interactions" strategy="afterInteractive">{`
        (function() {
          const preloader = document.querySelector('.preloader');
          const popup = document.querySelector('.pop-up');
          const step1 = document.querySelector('.form-step-1');
          const stepIos = document.querySelector('.form-step-ios');
          const stepAndroid = document.querySelector('.form-step-android');
          const backLinks = Array.from(document.querySelectorAll('.go-back'));
          const openers = Array.from(document.querySelectorAll('.primary-btn, .secondary-btn'));
          const closers = Array.from(document.querySelectorAll('.pop-up-closing-trigger'));
          const iosSelect = document.querySelector('.select-item');
          const androidSelect = document.querySelectorAll('.select-item')[1];

          const show = (el, display) => { if (el) el.style.display = display; };
          const resetPopup = () => {
            show(step1, 'flex');
            show(stepIos, 'none');
            show(stepAndroid, 'none');
          };

          window.setTimeout(() => {
            if (preloader) preloader.style.display = 'none';
          }, 1400);

          openers.forEach((link) => {
            link.addEventListener('click', (event) => {
              event.preventDefault();
              resetPopup();
              show(popup, 'flex');
            });
          });

          closers.forEach((link) => {
            link.addEventListener('click', () => {
              show(popup, 'none');
              resetPopup();
            });
          });

          backLinks.forEach((link) => {
            link.addEventListener('click', (event) => {
              event.preventDefault();
              resetPopup();
            });
          });

          if (iosSelect) {
            iosSelect.addEventListener('click', (event) => {
              event.preventDefault();
              show(step1, 'none');
              show(stepIos, 'flex');
            });
          }

          if (androidSelect) {
            androidSelect.addEventListener('click', (event) => {
              event.preventDefault();
              show(step1, 'none');
              show(stepAndroid, 'flex');
            });
          }

          const cursor = document.querySelector('.curser');
          const cursorCircle = document.querySelector('.curser-circle-bg');
          const cursorGlow = document.querySelector('.curser_gradient-bg');

          window.addEventListener('mousemove', (event) => {
            const { clientX, clientY } = event;
            if (cursor) cursor.style.transform = 'translate(' + clientX + 'px, ' + clientY + 'px)';
            if (cursorCircle) cursorCircle.style.transform = 'translate(' + (clientX - 36) + 'px, ' + (clientY - 36) + 'px)';
            if (cursorGlow) cursorGlow.style.transform = 'translate(' + (clientX - 360) + 'px, ' + (clientY - 360) + 'px)';
          });
        })();
      `}</Script>
      <Script id="stryds-phone-input" strategy="afterInteractive">{`
        (function() {
          if (typeof window.intlTelInput !== 'function' || typeof window.intlTelInputUtils === 'undefined') {
            return;
          }
          document.querySelectorAll('input[ms-code-phone-number]').forEach(function(input) {
            var preferredCountries = (input.getAttribute('ms-code-phone-number') || 'us').split(',');
            var iti = window.intlTelInput(input, {
              preferredCountries: preferredCountries,
              utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
            });

            input.addEventListener('change', formatPhoneNumber);
            input.addEventListener('keyup', formatPhoneNumber);

            function formatPhoneNumber() {
              var formattedNumber = iti.getNumber(intlTelInputUtils.numberFormat.INTERNATIONAL);
              input.value = formattedNumber;
            }

            var form = input.closest('form');
            if (!form) return;
            form.addEventListener('submit', function() {
              var formattedNumber = iti.getNumber(intlTelInputUtils.numberFormat.INTERNATIONAL);
              input.value = formattedNumber;
            });
          });
        })();
      `}</Script>
      <Script id="stryds-form-refresh" strategy="afterInteractive">{`
        document.querySelectorAll('form').forEach(function(form) {
          form.addEventListener('submit', function() {
            setTimeout(function() { location.reload(); }, 3000);
          });
        });
      `}</Script>
    </>
  );
}
