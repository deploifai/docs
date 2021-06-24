import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Quick start
          </Link>
        </div>
      </div>
    </header>
  );
}

function Content() {
  return (
    <div className="container">
      <div className={clsx(styles.titlesection)}>
        <h2>
          Deploifai is a MLOps solution that lets you deploy Machine Learning
          models with ease.
        </h2>
        <p>
          We handle the development of the API and the infrastructure so that
          you can focus on what matters most: Your ML Model
        </p>
      </div>
      <div className={clsx(styles.titlesection)}>
        <h2>We don't care about the ML framework you use</h2>
        <p>
          We will look at your requirements and figure out how to setup things
          on your server! You really dont need to do any additional work.
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <Content />
    </Layout>
  );
}
