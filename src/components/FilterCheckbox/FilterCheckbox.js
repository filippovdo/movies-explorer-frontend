import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <div className="checkFilter">
      <div className="checkFilter__filter">
        <label>
          <input type="checkFilter" className="checkFilter__swich" />
          <span className="checkFilter__swich-slider"></span>
        </label>
      </div>
      <p className="checkFilter__text">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
