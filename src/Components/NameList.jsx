import React, { useEffect, useState } from 'react'
import NameItem from './NameItem'


function NameList() {

    
    useEffect(() => {
        btnHandler;
    })

   


    const [nameList, setNameList] = useState(
        [
            {
                "medium": "https://randomuser.me/api/portraits/med/women/96.jpg",
                "name": { "title": "Ms", "first": "Tanny", "last": "Reynolds" },
                "location": {
                    "street": { "number": 9098, "name": "N Stelling Rd" },
                "city": "Bathurst",
                "state": "Australian Capital Territory",
                "country": "Australia"
                },
                "email": "terry.reynolds@example.com",
                "phone": "07-9996-4110"
            },
            {
                "medium": "https://randomuser.me/api/portraits/med/women/12.jpg",
                "name": {
                    "title": "Mrs",
                    "first": "Sofia",
                    "last": "Ahola"
                  },
                "location": {
                    "street": {
                        "number": 6077,
                        "name": "Bulevardi"
                      },
                      "city": "Siuntio",
                      "state": "Southern Ostrobothnia",
                      "country": "Finland"
                },
                "email": "sofia.ahola@example.com",
                "phone": "03-748-583"
            },
            {
                "medium": "https://randomuser.me/api/portraits/med/women/1.jpg",
                "name": {
                    "title": "Mrs",
                    "first": "Liva",
                    "last": "Hilmarsen"
                  },
                "location": {
                    "street": {
                        "number": 8470,
                        "name": "Roseveien"
                      },
                      "city": "Byrknes",
                      "state": "Akershus",
                      "country": "Norway"
                },
                "email": "liva.hilmarsen@example.com",
                "phone": "25507164"
            }
        ]
    );

    const btnHandler = async () => {
        try {
            const response = await fetch('https://randomuser.me/api');
            const data = await response.json();
            const randomUser = data.results[0]; 

            const { name, location, picture, email, phone } = randomUser;

            const newUser = {
                medium: picture.medium,
                name: {
                    title: name.title,
                    first: name.first,
                    last: name.last,
                  },
                  location: {
                    street: {
                      number: location.street.number,
                      name: location.street.name,
                    },
                    city: location.city,
                    state: location.state,
                    country: location.country,
                },
                email: email,
                phone:phone
                
            }
            setNameList(nameList=>[...nameList,newUser])


        } catch (error) {
            console.log("Error: ", error);
        }
         
 }


    
        
    return (
      
        <div>
            <div className='sticky top-0 bg-blue-500 pt-3 pb-3 px-6 py-6 flex items-center justify-between'>

                <h1 className='text-[40px] font-extrabold'>Random User</h1>
            <button className='rounded-none bg-black text-white p-4 mt-2 mx-5' onClick={btnHandler}>Add New User</button>
            </div>

        <div className='m-10 border-4 border-neutral-900'>
            
            {nameList.map((arr) => (
                <NameItem
                img={arr.medium}
                name={`${arr.name.title} ${arr.name.first} ${arr.name.last}`}
                address={`${arr.location.street.number}, ${arr.location.street.name}, ${arr.location.city},  ${arr.location.state}, ${arr.location.country}`}
                email={arr.email}
                    phone={arr.phone}
                    
                />
                ))}
                </div>
        
    </div>
  )
}

export default NameList