
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/common/NotFound';
import UploadConfig from './components/UploadConfig';
import MainPage from './components/MainPage';

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App;
