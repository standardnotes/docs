import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
const features = [
  
  {
    title: <>Host a Sync Server</>,
    //*imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Standard Notes was designed from the ground up to be easily installed and
        used to get your own sync server up and running quickly.
      </>
    ),
  },
  {
    title: <>Build an Extension</>,
    //imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Extend or customize your Notes app with your own extensions.
        Standard Notes can be extended with custom editors, themes, and actions. 
      </>
    ),
  },
  {
    title: <>Powered by Encryption</>,
    //*imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Standard Notes lets you focus on your notes, and we&apos;ll do the chores.
        Read our specifications. 
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title} Documentation`}
      description="Extend Your Notes App">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('/welcome')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
