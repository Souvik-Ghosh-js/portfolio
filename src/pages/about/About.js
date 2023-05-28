import AboutMe from "../../components/AboutMe";
import PageHeader from "../../components/PageHeader";
import Draw from "../../components/Draw";

const About = ({ name, location, brand, email, availability }) => {
  return (
    <section className="about">
      <Draw />
      <PageHeader title="About Me" description="Let me introduce myself" />
      <AboutMe name={name} location={location} brand={brand} email={email} availability={availability} />
    </section>
  );
};

export default About;
