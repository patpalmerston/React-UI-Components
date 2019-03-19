import React from 'react';
import './App.css';
// import './components/HeaderComponents/HeaderContainer';

import HeaderContainer from './components/HeaderComponents/HeaderContainer';

// import ImageThumbnail from './ImageThumbnail';

// import HeaderTitle from './HeaderTitle';

// import HeaderContent from './HeaderContent';

import CardContainer from './components/CardComponents/CardContainer';

// import CardBanner from './CardBanner';


const App = () => {
  return (
    <div className='app'>
      <HeaderContainer />
      {/* <ImageThumbnail />
      <HeaderTitle />
      <HeaderContent /> */}
      <CardContainer />
      {/* <CardBanner /> */}

    </div>
  );
};

export default App;
