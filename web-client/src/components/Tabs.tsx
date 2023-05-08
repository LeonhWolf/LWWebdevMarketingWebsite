interface ITab {
  id: string;
  title: string;
  element: React.ReactElement;
}
export interface IProps {
  tabs: ITab[];
}

function Tabs(props: IProps) {
  return (
    <div>
      <ul className="nav nav-tabs">
        {props.tabs.map((tab, index) => (
          <li key={tab.id} className="nav-item">
            <button
              className={`nav-link ${index === 0 && "active"}`}
              data-bs-toggle="tab"
              data-bs-target={`#${tab.id}-tab-pane`}
              type="button"
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>

      <div className="tab-content">
        {props.tabs.map((tab, index) => (
          <div
            key={tab.id}
            id={`${tab.id}-tab-pane`}
            className={`tab-pane fade pb-3 ${index === 0 && "show active"}`}
            style={{ backgroundColor: "white" }}
          >
            {tab.element}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tabs;
