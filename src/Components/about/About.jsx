import "./about.scss";
// import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a" id="about">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="assets/bhushanpics.jpg"
            alt=""
            className="a-img"
          />
        </div>
        
      </div>
      <div className="a-right">

        <h1 className="a-title">About Me</h1>
        <div className="resume">
          <a href="#z" className="btn" download> Download Resume </a>
        </div>
        <p className="a-role">
          MERN,Full Stack Developer | Alpha Batch Student| Intern At TCR innovation | Intern At Lets GrowMore.
        </p>
        <p className="a-desc">
          .I am experienced in Full Stack for developing  Web Portal Placement Management System And Music website like spotify ( Intern At TCR innvotion as Frontend role and At Let's growMore).
          .


         </p>
         <div className="a-pr">
          <b>I have got  1st price Web Design in Milestone 2k22.</b>
          <p>I have worked on Frontend technologies (HTML, CSS, BootStraps, Javascript,React Js) and Backend technologies(Node js ,Mongodb And Mysql ) for almost a year and had done several projects.

            Skillful in C, C++, Java and Data Structure with hands on experience on web development tools.
          </p>
        </div> 

        <div  className="f">
            <p>
Aspiring for a challenging career in Software Development as to use my learned skills and experience </p>
          </div> 



        
      </div>
    </div>





  );
};

export default About;
