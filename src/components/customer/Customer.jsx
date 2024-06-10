import React from 'react'
// import ReactDOM from "react-dom";
import './Customer.css'
import customer from '../../assets/customer.png'

const Customer = () => {
    const [displayed, setDisplayed] = React.useState(false);
    const [displayed2, setDisplayed2] = React.useState(false);
    const [displayed3, setDisplayed3] = React.useState(false);
    return (
        <div className='customers'>

            <div className="custFeed">
                <img src={customer} alt="" 
                    onMouseEnter={() => setDisplayed(true)}
                    onMouseLeave={() => setDisplayed(false)}
                />
                {displayed && (
                    <div className="feedback">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut vel aut nam?</p>
                    </div>
                )}
            </div>

            <div className="custFeed">
                <img src={customer} alt="" 
                    onMouseEnter={() => setDisplayed2(true)}
                    onMouseLeave={() => setDisplayed2(false)}
                />
                {displayed2 && (
                    <div className="feedback">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut vel aut nam?</p>
                    </div>
                )}
            </div>

            <div className="custFeed">
            <img src={customer} alt="" 
                    onMouseEnter={() => setDisplayed3(true)}
                    onMouseLeave={() => setDisplayed3(false)}
                />
                {displayed3 && (
                    <div className="feedback">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut vel aut nam?</p>
                    </div>
                )}
            </div>

        </div>
  )
}

export default Customer
