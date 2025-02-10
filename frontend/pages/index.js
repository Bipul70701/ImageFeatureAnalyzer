import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import dynamic from 'next/dynamic';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import UploadArea from '../components/UploadArea';
import ProcessingAnimation from '../components/ProcessingAnimation';
import DemoResults from '../components/DemoResults';
import RealResults from '../components/RealResults';
import ContactSection from '../components/ContactSection';

// Create a separate component instead of inline Promise.resolve
const HomeContent = () => {
  const [file, setFile] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  const [showDemoButton, setShowDemoButton] = useState(true);
  const [paymentInitiated, setPaymentInitiated] = useState(false);
  const [realResults, setRealResults] = useState(null);
  const [showUpload, setShowUpload] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'image/jpeg': ['.jpeg', '.jpg'], 'image/png': ['.png'] },
    maxSize: 5 * 1024 * 1024,
    onDrop: acceptedFiles => setFile(acceptedFiles[0])
  });

  const handleTryDemo = () => {
    setShowUpload(true);
    setShowDemoButton(false);
    setFile(null);
    setProcessing(false);
    setShowDemo(false);
    setRealResults(null);
  };

  const handleFakeProcessing = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setShowDemo(true);
    }, 25000);
  };

  const handlePayment = async () => {
    try {
      setPaymentInitiated(true);
      await axios.post('http://localhost:5000/api/payment', { amount: 299, currency: 'INR' });
      const { data } = await axios.post('http://localhost:5000/api/process');
      setRealResults(data);
      setShowDemo(false);
    } catch (error) {
      console.error('Payment failed:', error);
      setPaymentInitiated(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-300 to-black">
      <Header showDemoButton={showDemoButton} onTryDemo={handleTryDemo} />
      
      <main className="container mx-auto px-4 py-8 max-w-3xl">
        {showUpload && !processing && !showDemo && !realResults && (
          <UploadArea
            getRootProps={getRootProps}
            getInputProps={getInputProps}
            file={file}
            processing={processing}
            onClose={() =>{
              setShowUpload(false);
              setFile(null);
              setShowDemoButton(true);
            }}
          />
        )}

        {file && !processing && !showDemo && !realResults && ( 
          <button
          onClick={handleFakeProcessing}
          className="btn-premium mt-6 w-full text-white rounded-full text-lg py-4 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          Analyze My Face
        </button>

        )}

        {processing && <ProcessingAnimation />}

        {showDemo && !realResults && (
          <DemoResults handlePayment={handlePayment} />
        )}

        {realResults && <RealResults realResults={realResults} />}
      </main>

      {!showUpload && !showDemo && !realResults && <ContactSection />}
      <Footer />
    </div>
  );
};

// Proper dynamic import setup
const HomePage = dynamic(() => Promise.resolve(HomeContent), {
  ssr: false,
  loading: () => <p>Loading...</p>
});

export default HomePage;