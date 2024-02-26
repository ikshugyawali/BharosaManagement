import * as React from 'react';

import { ChakraProvider, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import GoToTopButton from './goTop';
import Team from './components/Team';
import Comitte from './components/Team/Comitte';
import Management from './components/Team/Management';
import ScrollToTop from './scrolltotop'

// BLOGS
import About from './components/About';
import Mission from './components/About/mission';
import PrivacyPolicy from './components/Pages/privacy';
import NotFound from './components/Pages/notfound';

// SERVICES
import Auditing from './components/Services/services_single_page/auditing-and-taxing';
import Finincial from './components/Services/services_single_page/finincial-advice';
import TrainingDevelopment from './components/Services/services_single_page/training-and-development';
import DigitalMarketing from './components/Services/services_single_page/digital-marketing';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Box
          display="flex"
          flexDirection="column"
          minHeight="calc(100vh - 67px)"
        >
          <Navbar />
          <ScrollToTop />
          <Routes>
            {/* About */}
            <Route exact path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/about/mission" element={<Mission />} />
            
            {/* Services */}

            <Route path="/services/auditing-and-taxing" element={<Auditing />} />
            <Route path="/services/finincial-advice" element={<Finincial />} />
            <Route path="/services/training-and-development" element={<TrainingDevelopment />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
           
            {/* Team */}
            <Route path="/Team" element={<Team />} />
            <Route path="/Team/Comitte" element={<Comitte />} />
            <Route path="/Team/Management" element={<Management />} />
           
           {/* Contact */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path='*' element={<NotFound />}/>
          </Routes>
          <GoToTopButton />
        </Box>
        <Footer />
      </Router>
    </ChakraProvider>
  );
};
export default App;
