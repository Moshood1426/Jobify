import Navbar from "../components/Navbar";
import Wrapper from "../assets/wrappers/Landing";
import IntroImg from "../assets/images/IntroImg.svg";
import { useNavigate } from "react-router-dom";
import { BsFacebook, BsReddit, BsTwitter, BsPinterest } from "react-icons/bs";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
  const navigate = useNavigate();
  const introRef = useRef();
  const introTitleRef = useRef();
  const introSubtitleRef = useRef();
  const introImageRef = useRef();
  const getStartedRef = useRef();

  const moreDetailRef = useRef();
  const moreDetailTitleRef = useRef();
  const moreDetailSubtitleRef = useRef();
  const moreDetailBtnRef = useRef();

  useEffect(() => {
    const introTl = gsap.timeline({
      defaults: { duration: 1.5 },
      ease: "powerIn.inOut",
    });

    introTl
      .fromTo(
        introTitleRef.current,
        { autoAlpha: 0.4, x: -12 },
        { autoAlpha: 1, x: 0 }
      )
      .fromTo(
        introSubtitleRef.current,
        { autoAlpha: 0, x: -8 },
        { autoAlpha: 1, x: 0 },
        0.7
      )
      .fromTo(
        introImageRef.current,
        {
          autoAlpha: 0.9,
          scale: 0.9,
        },
        {
          autoAlpha: 1,
          scale: 1,
          ease: "powerIn.inOut",
        },
        0
      )
      .fromTo(
        getStartedRef.current,
        { autoAlpha: 0.7, y: 6 },
        { autoAlpha: 1, y: 0 },
        0.5
      );

    const moreDetailTl = gsap.timeline({
      ease: "powerIn.inOut",
      scrollTrigger: {
        trigger: moreDetailRef.current,
        start: "top 70%",
        toggleActions: "restart none none reverse",
      },
    });

    moreDetailTl
      .fromTo(
        moreDetailTitleRef.current,
        { y: 15, autoAlpha: 0 },
        { y: 0, autoAlpha: 1 }
      )
      .fromTo(
        moreDetailSubtitleRef.current,
        { y: 15, autoAlpha: 0 },
        { y: 0, autoAlpha: 1 }
      )
      .fromTo(
        moreDetailBtnRef.current,
        { y: 15, autoAlpha: 0 },
        { y: 0, autoAlpha: 1 }
      );
  });

  return (
    <Wrapper>
      <Navbar />
      <section className="intro" ref={introRef}>
        <div className="introText">
          <h1 className="introTitle" ref={introTitleRef}>
            START <span className="special">KEEPING TRACK</span> OF YOUR JOB
            APPLICATION
          </h1>
          <p className="introSubTitle" ref={introSubtitleRef}>
            Every Resume Submission Should Be Monitored.
          </p>
          <p
            className="btn introBtn"
            onClick={() => navigate("/register", { replace: true })}
            ref={getStartedRef}
          >
            Get Started
          </p>
        </div>
        <div className="introImg" ref={introImageRef}>
          <img src={IntroImg} alt="Keeping Records" />
        </div>
      </section>

      <section className="moreDetail" ref={moreDetailRef}>
        <div className="moreDetailContainer">
          <h3 ref={moreDetailTitleRef}>
            UPDATE STATUS OF EVERY JOB APPLICATION
          </h3>
          <p ref={moreDetailSubtitleRef}>
            The jobtify app allows you to keep track of all your job
            applications. You can add a new job application details and stay
            updated with each application by keeping track of its status.
          </p>
          <p
            className="btn updateBtn"
            onClick={() => navigate("/register", { replace: true })}
            ref={moreDetailBtnRef}
          >
            Get Started
          </p>
        </div>
      </section>
      <footer className="footer">
        <div className="footerContainer">
          <p className="footerTitle">
            Looking to share this experience? Share via
          </p>
          <div className="footerIconsDiv">
            <BsTwitter className="footerIconsDivChild" />
            <BsFacebook className="footerIconsDivChild" />
            <BsReddit className="footerIconsDivChild" />
            <BsPinterest />
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

export default Landing;
