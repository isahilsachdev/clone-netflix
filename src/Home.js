import React from 'react';
import Row from './Components/Row';
import requests from './Components/requests';
import { Banner } from './Components/Banner';
import Nav from './Components/Nav';
import { Footer } from './Components/Footer';

const Home = () => {
  return (
    <div>
      <Nav />
      <Banner />
      <Row
        title='NETFLIX ORIGINAL'
        fetchUrl={requests.fetchNetflixOriginals}
        isLarge
      />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
      <Footer />
    </div>
  );
};

export { Home };
