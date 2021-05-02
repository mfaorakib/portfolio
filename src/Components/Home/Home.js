import React, { useEffect, useRef, useState } from 'react';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import "./Home.css";
const getDimensions = ele => {
    const { height } = ele.getBoundingClientRect();
    const offsetTop = ele.offsetTop;
    const offsetBottom = offsetTop + height;
  
    return {
      height,
      offsetTop,
      offsetBottom,
    };
  };
  const scrollTo = ele => {
    ele.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
const Home = () => {
    const [visibleSection, setVisibleSection] = useState();

  const headerRef = useRef(null);
  const AboutRef = useRef(null);
  const WorkRef = useRef(null);
  const BlogRef = useRef(null);
  const HomeRef=useRef(null);
  const ContactRef= useRef(null);

  const sectionRefs = [
    { section: "Home", ref: HomeRef },
    { section: "About", ref: AboutRef },
    { section: "Work", ref: WorkRef },
    { section: "Blog", ref: BlogRef },
    { section: "Contact", ref: ContactRef },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection]);
    return (
        <div>
           
        <div className="top-spacer"> 
        <Header></Header>
          </div>
  
<div className="content">
  
  <div className="sticky">
    <div className="header" ref={headerRef}>
    <button
        type="button"
        className={`header_link ${visibleSection === "Home" ? "selected" : ""}`} 
      >
         <a class="nav-link" aria-current="page" href="#">Home</a> 
      </button>
      <button
        type="button"
        className={`header_link ${visibleSection === "About" ? "selected" : ""}`}
        onClick={() => {
          scrollTo(AboutRef.current);
        }}
      >
        About
      </button>
      <button
        type="button"
        className={`header_link ${visibleSection === "Work" ? "selected" : ""}`}
        onClick={() => {
          scrollTo(WorkRef.current);
        }}
      >
        Work
      </button>
      <button
        type="button"
        className={`header_link ${visibleSection === "Blog" ? "selected" : ""}`}
        onClick={() => {
          scrollTo(BlogRef.current);
        }}
      >
        Blog
      </button>
      <button
        type="button"
        className={`header_link ${visibleSection === "Contact" ? "selected" : ""}`}
        onClick={() => {
          scrollTo(ContactRef.current);
        }}
      >
        Contact   
      </button>
    </div>
  </div>
  <div style={{width:'100ev'}} className="section" id="About" ref={AboutRef}>  <About></About> </div>
  <div className="section" id="Work" ref={WorkRef}><Projects></Projects> </div>
  <div className="section" id="Blog" ref={BlogRef}><Blog></Blog>  </div>
  <div style={{background:"#252934"}} className="section " id="Contact" ref={ContactRef}> 
  
   <h2 style={{color:"white"}} className="d-flex justify-content-center">Contact</h2>
   <br></br>
    <Contact></Contact>  
    <Footer></Footer>
    </div>
</div>

 

         </div>

    );
};

export default Home;