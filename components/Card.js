import Image from 'next/image';

const Card = ({ prodName, color, setPanelOpen, setSelectedProd, setSelectedCol }) => {
  const handleTryOn = () => {
    setSelectedProd(prodName);
    setSelectedCol(color);
    setPanelOpen(false);
  }

  return (
    <div className='card'>
      <Image
        src='/images/product.jpg'
        width={130}
        height={130}
        alt='product'
      />
      <div className='prod-name'>{prodName}</div>
      <div className='card-shade-name'>{ color.name }</div>
      <div className='try-on' onClick={handleTryOn}>TRY ON</div>
    </div>
  );
}

export default Card;