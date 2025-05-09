import Image from "next/image";
import ColorBall from "./ColorBall";
import Modal from "./Modal";
import { getProdInfo } from "@/public/data";
import '../css/main.css';

const Main = ({ selectedProd, selectedCol, modalOpen, setModalOpen, setPanelOpen, setSelectingProd, setSelectedCol, colors  }) => {
  const prodInfo = getProdInfo(selectedProd);

  return (
    <div className='main'>
      <Image className='image-1' src={'/images/1.png'} width={35} height={35} alt='1'/>
      <Image className='image-2' src={'/images/2.png'} width={35} height={35} alt='2'/>
      <Image className='image-3' src={'/images/3.png'} width={35} height={35} alt='3'/>
      <Image 
        className='image-4'
        src={'/images/4.png'}
        width={35}
        height={35}
        alt='4'
        style={selectedCol.name === '' ? { opacity: '0.5', cursor: 'not-allowed'} : {}}
      />
      <div className='watermark'>Powered by YouCam Makeup</div>
      <div className='product-config'>
        <div className='product-image'>
          <Image src={'/images/product.jpg'} width={80} height={80} alt='product'/>
        </div>
        <div className='product-info'>
          <div className='name-more-info'>
            <div className='product-info-name'>{prodInfo.fullName}</div>
            <div className='more-info' onClick={() => setModalOpen(true)}>MORE INFO</div>
          </div>
          <div className='shade-name'>{selectedCol.name}</div>
          <div className='colorball-holder'>
            <div className='horizontal-scroll'>
              <div 
                className='no-color'
                style={{ 
                  border: selectedCol.name === '' ? '1px solid #ffc550' : '1px solid rgb(0, 0, 0, 0)',
                }}
                onClick={() => setSelectedCol({ name: '', hex: '' })}
              >

                <Image src={'/images/no_color.png'} width={26} height={26} alt='no-color'/>
              </div>
              {colors.map((item, idx) => (
                <ColorBall 
                  key={idx}
                  color={item}
                  setSelectedCol={setSelectedCol}
                  selectedCol={selectedCol}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='pull-up' onClick={() => {
        setPanelOpen(true)
        setSelectingProd('All Products');
      }}>
        <span>ALL MAKEUP &nbsp;</span>
        <Image src={'/images/pullup.png'} width={20} height={20} alt='pull-up' />
      </div>
      {modalOpen
      ? 
        <Modal 
          setModalOpen={setModalOpen} 
          length={colors.length}
          name={prodInfo.fullName}
          description={prodInfo.description}
        /> 
      : null}

    </div>
  )
}

export default Main;