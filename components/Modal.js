import '../css/modal.css';
import Image from "next/image";

const Modal = ({ setModalOpen, length, name, description }) => {
  return (
    <>
      <div className='overlay'></div>
      <div className='product-info-modal'>
        <header className='modal-header'>
          <div>
            PRODUCT INFO
          </div>
          <Image 
            src={'/images/close.png'} 
            width={15} 
            height={15} 
            alt='close'
            onClick={() => setModalOpen(false)}
          />
        </header>
        <div className='model-display-product'>
          <Image
            src='/images/product.jpg'
            width={100}
            height={100}
            alt='product'
          />
          <div className='model-product-info'>
            <div className='model-product-name'>{name}</div>
            <div className='model-num-shades'>{length} shades</div>
          </div>
        </div>
        <div className='model-product-description'>
          {description}
        </div>
      </div>
    </>
  )
}

export default Modal;