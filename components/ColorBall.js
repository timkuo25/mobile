const ColorBall = ({ color, selectedCol, setSelectedCol }) => {
  return (
    <div
      className='colorball'
      style={{ 
        backgroundColor: selectedCol.hex === color.hex && selectedCol.name === color.name ? '#ffc550' : color.hex, 
      }}
      onClick={() => setSelectedCol(color)}
      >
     <div
        className='colorball-1'
        style={{ 
          transform: 'scale(0.92)',
          backgroundColor: selectedCol.hex === color.hex && selectedCol.name === color.name ? 'white' : color.hex, 
        }}
      >
      <div
          className='colorball-1'
          style={{ 
            transform: 'scale(0.84)',
            backgroundColor: color.hex, 
          }}
        >
        </div>
      </div> 
    </div>
  );
};

export default ColorBall;