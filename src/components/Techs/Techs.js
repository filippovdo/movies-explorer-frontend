import "./Techs.css";

function Techs() {
  return (
    <section className="tech html__centered">
      <h3 className="title">Технологии</h3>
      <h3 className="tech__heading">7 технологий</h3>
      <p className="tech__info">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="tech__list">
        <li className="tech__items">HTML</li>
        <li className="tech__items">CSS</li>
        <li className="tech__items">JS</li>
        <li className="tech__items">React</li>
        <li className="tech__items">Git</li>
        <li className="tech__items">Express.js</li>
        <li className="tech__items">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
