import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import { Helmet } from 'react-helmet-async';

import Main from '../layouts/Main';

const About = () => {
  const [markdown, setMarkdown] = useState('');

  /* useEffect(() => {
    import('../data/about.md')
      .then((res) => {
        fetch(res.default)
          .then((r) => r.text())
          .then(setMarkdown);
      });
  }); */

  useEffect(() => {
    import('../data/about.md')
      .then((res) => {
        fetch(res.default)
          .then((r) => r.text())
          .then(setMarkdown);
      });
  }, []);

  /* const count = markdown.split(/\s+/)
    .map((s) => s.replace(/\W/g, ''))
    .filter((s) => s.length).length; */

  return (
    <Main
      title="About"
      description="Lab Info"
    >
      <Helmet>
        <meta charSet="utf-8" />
      </Helmet>
      <article className="post markdown" id="about">
        <header>
          <div className="title">
            <h2>Lab Information</h2>
          </div>
        </header>
        <Markdown>
          {markdown}
        </Markdown>
      </article>
    </Main>
  );
};

export default About;
