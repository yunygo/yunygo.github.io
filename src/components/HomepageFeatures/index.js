import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "分享",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: <>分享生活，记录成长</>,
  },
  {
    title: "探索",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: <>探索未知，发现美好.</>,
  },
  {
    title: "价值",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <>用心写作，传递价值</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  // return "";
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
