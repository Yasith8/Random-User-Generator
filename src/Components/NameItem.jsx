import React from 'react'

function NameItem(props) {

  const handleEmail = (email) => {
    const mailtoLink = `mailto: ${email}`;
    
    window.location.href=mailtoLink;
  }
  

  const handleAddressClick = (address) => {
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

    window.open(mapUrl);
  };

  return (
    <div className='flex jusfify-center items-center text-black border-2 m-5 border-neutral-900 hover:bg-blue-200 hover:border-blue-200 ease-in-out'>
      <img src={props.img} alt={props.img} className='m-3 rounded-md hover:scale-110' />
      <h1 className='border-2  m-3 w-[250px] h-[50px] flex items-center justify-center'>{props.name}</h1>
      <h1 className='border-2  m-3 w-[600px] h-[50px] flex items-center justify-center' onClick={() => handleAddressClick(props.address)}>{props.address}</h1>
      <h2 className='border-2  m-3 w-[250px] h-[50px] flex items-center justify-center' onClick={()=>handleEmail(props.email)} >{props.email}</h2>
      <h3 className='border-2  m-3 w-[250px] h-[50px] flex items-center justify-center bg-blue-400' >{props.phone}</h3>

    </div>
  )
}

export default NameItem