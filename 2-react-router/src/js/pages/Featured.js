import React from 'react';

import Article from './../components/Article.js';

export default class Featured extends React.Component {
  render() {

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
      <div class="row">
        <div class="col-lg-12">
          <div class="well text-center">
            {randomAd}
          </div>
        </div>
      </div>

      <div class="row">{Articles}</div>
      </div>
    );
  }
}
