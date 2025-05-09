'use client';

import Image from 'next/image';
import Main from '@/components/Main';
import PullUpPanel from '@/components/PullUpPanel';
import { useState } from 'react';
import { getColorsByProd } from '@/public/data';

const Home = () => {
  const [selectedProd, setSelectedProd] = useState('Tinted Lip Balm');
  const [selectingProd, setSelectingProd] = useState('All Products');
  const [selectedCol, setSelectedCol] = useState({ name : 'ROSE', hex: '#cf544d' });
  const [panelOpen, setPanelOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const colors = getColorsByProd(selectedProd);


  return (
    <div className='view'>
      <header className='header'>
        <Image src={'/images/logo.png'} alt='logo' width={150} height={40} />
      </header>
      { 
        panelOpen
        ? 
        <PullUpPanel 
          selectedProd={selectedProd} 
          selectingProd={selectingProd}
          setSelectedProd={setSelectedProd}
          setSelectedCol={setSelectedCol}
          setSelectingProd={setSelectingProd}
          setPanelOpen={setPanelOpen}
          colors={colors}
          />
          :
          <Main 
          selectedProd={selectedProd} 
          selectedCol={selectedCol} 
          modalOpen={modalOpen}
          setPanelOpen={setPanelOpen}
          setModalOpen={setModalOpen}
          setSelectingProd={setSelectingProd}
          setSelectedProd={setSelectedProd}
          setSelectedCol={setSelectedCol}
          colors={colors}
        />
      }
    </div>
  );
}

export default Home;
