import { useTranslation } from "react-i18next";

import HeadingsSection from "../components/HeadingsSection";
import Card from "../components/Card";

function References() {
  const { t } = useTranslation();

  return (
    <div className="section-wrapper container">
      <HeadingsSection
        smallTitleText={t("references.smallTitle")}
        bigTitleText={t("references.bigTitle")}
      />
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            id="projects-tab"
            className="nav-link active"
            data-bs-toggle="tab"
            data-bs-target="#projects-tab-pane"
            type="button"
          >
            {t("references.tabTitles.projects")}
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            id="courses-tab"
            className="nav-link"
            data-bs-toggle="tab"
            data-bs-target="#courses-tab-pane"
            type="button"
          >
            {t("references.tabTitles.courses")}
          </button>
        </li>
      </ul>
      <div className="tab-content">
        <div id="projects-tab-pane" className="tab-pane fade show active">
          <div
            id="carouselExampleControls"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="mx-auto" style={{ width: "400px" }}>
                  <Card title="Test Title" bodyText="lorem ipsum 123123" />
                </div>
                {/* <img src="..." className="d-block w-100" alt="..." /> */}
                123
              </div>
              <div className="carousel-item">
                456
                {/* <img src="..." className="d-block w-100" alt="..." /> */}
              </div>
              <div className="carousel-item">
                789
                {/* <img src="..." className="d-block w-100" alt="..." /> */}
              </div>
            </div>

            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div id="courses-tab-pane" className="tab-pane fade">
          ...
        </div>
      </div>
    </div>
  );
}

export default References;
