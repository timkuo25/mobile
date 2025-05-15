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
        <div className='modal-display-product'>
          <Image
            src='/images/product.jpg'
            width={70}
            height={70}
            alt='product'
          />
          <div className='modal-product-info'>
            <div className='modal-product-name'>{name}</div>
            <div className='modal-num-shades'>{length} shades</div>
          </div>
        </div>
        <div className='modal-product-description'>
          {description}
        </div>
      </div>
    </>
  )
}

export default Modal;