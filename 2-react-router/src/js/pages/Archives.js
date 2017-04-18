import React from 'react';

import Article from './../components/Article.js';
export default class Archives extends React.Component {
  render(){
    const { query } = this.props.location;
    const { params } = this.props;
    const { article } = params;
    const { date, filter } = query;

    const Articles = [
      'Some article',
      'Some other article',
      'Yet another Article',
      'Still More',
      'Some other article',
      'Yet another Article',
      'Still More',
    ].map((title, index)=> <Article key={index} title={title}/>);


    const adText = [
      'Ad spot #1',
      'Ad spot #2',
      'Ad spot #3',
      'Ad spot #4',
      'Ad spot #5'
    ];

    const randomAd = adText[Math.round(Math.random() * (adText.length - 1))];


    return (
      <div>
      <h1>Archives</h1>
      date: {date}, filter: {filter}
      <div class="row">{Articles}</div>
      </div>
    );
  }
}
