import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="AboutProject" id="AboutProject">
      <h2 className="AboutProject__name">О проекте</h2>
      <div className="AboutProject__columns">
        <div className="AboutProject__column">
          <h2 className="AboutProject__title">
            Дипломный проект включал 5 этапов
          </h2>
          <h3 className="AboutProject__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </h3>
        </div>
        <div className="AboutProject__column">
          <h2 className="AboutProject__title">
            На выполнение диплома ушло 5 недель
          </h2>
          <h3 className="AboutProject__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </h3>
        </div>
      </div>
      <div className="AboutProject__container">
        <p className="AboutProject__week AboutProject__week-left">1 неделя</p>
        <p className="AboutProject__week AboutProject__week-right">4 недели</p>
        <p className="AboutProject__techs">Back-end</p>
        <p className="AboutProject__techs">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
