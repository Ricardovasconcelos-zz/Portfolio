import React from "react";

import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import LineUp from "../lineUp/LineUp";
import { DiJsBadge } from "react-icons/di";
import { FiGlobe, FiAlignJustify } from "react-icons/fi";
import { MdCached } from "react-icons/md";

const Time = props => (
  <div className="Timeline">
    <div className="Texts">
      <h3 className="TitleTalks">Talks</h3>
      <LineUp className="lineUP"/>

      <div className="description">
        <p>
          Here you can see some talks that I made. I Like to share my knowledge with others people and help them.
        </p>
      </div>
    </div>
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="September - 2018"
        iconStyle={{ background: "rgb(241,194,51)", color: "#fff" }}
        icon={<DiJsBadge />}
      > 

        <h3 className="vertical-timeline-element-title">
          Javascript The Future Language
        </h3>
        <h5 className="vertical-timeline-element-subtitle">
          <span className="placeName">Centro Universitário Tiradentes</span>
        </h5>

        <p>
          <a href="https://docs.google.com/presentation/d/1mL4ktdC5NJxBpv6Vb4_Zhulf7llBo0zr4r0-VyFI5TI/edit?usp=sharing">
            Javascript Talk
          </a>
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="November - 2018"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<FiGlobe />}
      >
        <h3 className="vertical-timeline-element-title">Sorting Algorithm</h3>
        <h5 className="vertical-timeline-element-subtitle">
          <span className="placeName">Centro Universitário Tiradentes</span>
        </h5>
        <p>
          <a href="https://docs.google.com/presentation/d/1N1pz9P6uck6pj_qFHA1yiCb2H3_B-8lPyBv5Nvr6nQs/edit?usp=sharing">
            Sorting Algorithm Talk
          </a>
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="June - 2019"
        iconStyle={{ background: "rgb(33, 150,43)", color: "#fff" }}
        icon={<FiAlignJustify />}
      >
        <h3 className="vertical-timeline-element-title">
          Software Architecture Styles
        </h3>
        <h5 className="vertical-timeline-element-subtitle">
          <span className="placeName">Centro Universitário Tiradentes</span>
        </h5>
        <p>
          <a href="https://drive.google.com/file/d/1f9KPJQPVsHyGee_mFZhbcrpZp34K7J0d/view?usp=sharing">
            Types of Software Architecture Talk
          </a>
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="August - 2019"
        iconStyle={{ background: "rgb(241,194,51)", color: "#fff" }}
        icon={<DiJsBadge />}
      >
        <h3 className="vertical-timeline-element-title">What is Javascript?</h3>
        <h5 className="vertical-timeline-element-subtitle">
          <span className="placeName">Centro Universitário Tiradentes</span>
        </h5>
        <p>
          <a href="https://docs.google.com/presentation/d/1KqoUlfpUUfTx2TroaqC24eo9yO0oMeLEBOk9NC-Hyig/edit?usp=sharing">
            Introduction to Javascript Talk
          </a>
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        iconStyle={{ background: "#6a7ff9", color: "#fff" }}
        date="Loading..."
        icon={<MdCached />}
      />
    </VerticalTimeline>
  </div>
);
export default Time;
