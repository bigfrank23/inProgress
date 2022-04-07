import React from "react";
import useCollapse from "react-collapsed";
import Button from "../Button/Button";
import H3 from "../Text/H3";
import PText from "../Text/PText";
import './Collapse.css'
function Section(props) {
  const config = {
    defaultExpanded: props.defaultExpanded || false,
    collapsedHeight: props.collapsedHeight || 0,
  };
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);
  return (
    <div className="collapsible">
      <div className="main" {...getToggleProps()}>
          {/* <H3 children={props.title} /> */}
        <div className="title">{props.title}</div>
        <div className="icon">
          <i
            className={"chevIcon fa fa-chevron-" + (isExpanded ? "up" : "down")}
          ></i>
        </div>
      </div>
      <div {...getCollapseProps()}>
        <div className="colContent">{props.children}</div>
      </div>
    </div>
  );
}
const Collapse = () => {
  return (
    <div className="preferences">
      <Section title="Lorem ipsum dolor sit amet consectetur adipisicing elit" defaultExpanded="true">
        <PText children="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nesciunt asperiores rem in repellat suscipit earum dolor ad aliquam eos." />
      </Section>
      <Section title="Lorem ipsum dolor sit amet consectetur adipisicing elit" defaultExpanded="true">
        <PText children="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nesciunt asperiores rem in repellat suscipit earum dolor ad aliquam eos." />
      </Section>
      <Section title="Lorem ipsum dolor sit amet consectetur adipisicing elit" defaultExpanded="true">
        <PText children="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nesciunt asperiores rem in repellat suscipit earum dolor ad aliquam eos." />
      </Section>
    </div>
  );
}
export default Collapse;
