import React from 'react';
import { useEffect } from 'react';
import '../styles/CarBooking.css'

// import { Link } from 'react-router-dom';
import { useCarContext } from '../hooks/useCarContext';
import { Link } from 'react-router-dom';


const CarBooking = () => {

    const {cars, dispatch} = useCarContext()
    useEffect(() => {
       const fetchcars = async () => {
           const response = await fetch('/carRental/car/carDetails')
           const json = await response.json()
           if(response.ok){
             dispatch({type : 'SET_CAR', payload : json})
           }
       }
       fetchcars()
     
    }, [dispatch])
    return (
        <div className='main-container'>
            {/* <Header /> */}
            {/* <hr /> */}
            <p> Origin namee &gt; Destination namee &gt; 12 june-2019  -  13-june-2019 <Link to='/quote'><button className='modify-btn'>Modify</button></Link> </p>


            <section className='thirdNavbar'>

                <select className='dropdown'>
                    <option>
                        Car Type
                    </option>
                    <option>
                        XUV
                    </option>
                    <option>
                        UV
                    </option>
                    <option>
                        All
                    </option>
                </select>

               
                <button className='btns'>Setting</button>
                <button className='btns'>Milage</button>
                <button className='btns'>Other</button>
                

            </section>
            


            <section style={{ width: "100%" }} className='big-container'>

                {  cars &&
                    cars.map((item) => {
                        // <Cards item={item} />
                        return (
                            <div key={item._id} className='cards'>

                                <div className='image_box'>
                                    <img src={item.img} alt={item.name} />
                                </div>
                                <p className='seat'>{item.seater} Persons</p>

                                <div className='details'>

                                    <h3>{item.name}</h3>
                                    <p className='rate'>{item.rateperkm}Rs/km</p>

                                </div>
                                <div className='fare-btn'>
                                    <p className='fare'>{item['fare']}</p>

                                    <Link to='/BookingDetails'><button className='btn'>{item.Book}</button></Link>
                                </div>

                            </div>
                        )
                    })
                }
            </section>
        </div >
    )
}
export default CarBooking