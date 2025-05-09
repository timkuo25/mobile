import Image from "next/image";
import Select from "react-select";
import Card from "./Card";
import { groupedOptions, allColors } from '@/public/data';
import '../css/pullup.css';

const PullUpPanel = ({ selectingProd, selectedProd, setSelectedProd, setSelectingProd, setSelectedCol, setPanelOpen, colors }) => {
  const customStyles = {
    control: (provided, { isFocused }) => {
      return ({
        ...provided,
        marginBottom: '20px',
        borderRadius: '0px',
        fontSize: '14px',
        borderColor: isFocused ? 'hsl(0, 0%, 80%)' : 'hsl(0, 0%, 80%)',
        boxShadow: isFocused ? '0 0 0 3px #EBF4FA' : null,
        '&:hover': {
          borderColor: 'hsl(0, 0%, 80%);',
        },
      })
    },

    option: (provided, { isSelected }) => {
      return ({
        ...provided,
        cursor: 'pointer',
        backgroundColor: isSelected ? '#F5FAFF' : '#fff',
        color: '#000',
        fontSize: '14px',
        '&:hover': {
          backgroundColor: '#EBF4FA',
        },
      })
    },
  }

  const IndicatorSeparator = () => null;
  const DropdownIndicator = () => 
    <Image
      src='/images/dropdown.png'
      alt='dropdown'
      width={22}
      height={22}
      style={{ marginRight: '15px', cursor: 'pointer' }}
    />

  const toggleProd = (option) => {
    setSelectedProd(option.value);
    setSelectingProd(option.value);
  }

  return (
    <div className='pull-up-panel'>
      <header className='pull-up-header'>
        <div>
          ALL MAKEUP
        </div>
        <Image 
          src={'/images/close.png'} 
          width={15} 
          height={15} 
          alt='close'
          onClick={() => {
            setPanelOpen(false)}
          }
        />
      </header>
      <Select
        options={groupedOptions}
        styles={customStyles}
        onChange={toggleProd}
        value={{ value: selectingProd, label: selectingProd }}
        components={{ IndicatorSeparator, DropdownIndicator }}
      />
      <div className='show-card'>
        <div className='card-holder'>
          {
          selectingProd === 'All Products'
          ?
          allColors.map((item, idx) => (
            <Card 
              prodName={item.displayName}
              color={item.color}
              key={idx}
              setPanelOpen={setPanelOpen}
              setSelectedCol={setSelectedCol}
              setSelectedProd={setSelectedProd}
              />
            ))
            :
            colors.map((item, idx) => (
              <Card 
              prodName={selectedProd}
              color={item}
              key={idx}
              setPanelOpen={setPanelOpen}
              setSelectedCol={setSelectedCol}
              setSelectedProd={setSelectedProd}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PullUpPanel;