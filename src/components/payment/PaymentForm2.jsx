import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Img from '../../images/give.jpg'
import Img3 from '../../images/bg2.jpg'
import Img4 from '../../images/web2.jpg'
import paystackImg from '../../images/paystack.png'
import visaImg from '../../images/visa.png'
import mastercardImg from '../../images/mastercard.png'
import { landscapeTab, mobile, tab } from '../../responsive';
import './PaymentForm.css'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Footer from '../Footer/Footer'
import axios from 'axios';
import Dropdown from 'react-dropdown';
import { HiSwitchHorizontal } from 'react-icons/hi';
import 'react-dropdown/style.css';
import PaystackPop from '@paystack/inline-js'
import { usePaystackPayment } from 'react-paystack';

const Container = styled.div`
  user-select: none;
  width: 100%;
  height: 100%;
  background: url(${Img3});
  /* display: flex;
  align-content: center;
  justify-content: center; */
  .page1Wrapper {
    /* -webkit-clip-path: polygon(0 0, 100% 0%, 100% 79%, 0% 100%); */
    /* clip-path: polygon(0 0, 100% 0%, 100% 79%, 0% 100%); */
    clip-path: polygon(100% 0, 100% 92%, 50% 100%, 0 92%, 0 0);
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), black
      url(${Img});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    /* background-position-x: 7%; */
    background-attachment: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    top: 0;
    height: 65vh;
    .page1Header {
      color: #fff;
      text-align: center;
      /* text-shadow: 0 4px brown; */
    }
  }
  .pageBanner {
    background: linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${Img4}) !important;
    background-size: contain !important;
    background-position: left !important;
    background-repeat: no-repeat !important;
    position: relative;
    width: 100% !important;
    padding: 4rem;
    color: #fff;
    text-align: center;
    ${mobile({ padding: "2rem"})}
  }
  .pageContent{
      padding: 4rem;
      ${mobile({padding: "2rem"})}
  }
  .pageContentTop{
      display: flex;
      padding: 2rem 3rem;
      gap: 3rem;
      ${mobile({display: "block", padding: 0})}
      ${tab({display: "block"})}
      ${landscapeTab({display: "flex"})}
      .left{
        flex: 1;
        .pageContentTitle{
            margin-bottom: 1.5rem;
            margin: 0 2rem 0;
        }
        .pageContentPara{
            padding-top: 1rem;
            ${mobile({textAlign: "center"})}
        }
      }
      .right{
          width: 400px;
          height: 400px;
          flex: 1;
          ${mobile({width: "unset", height: "unset", padding: "2rem 0"})}
          ${tab({margin: "auto"})}
          ${landscapeTab({margin: "auto"})}
          img{
              width: 100%;
              height: 100%;
              object-fit: contain;
          }
      }
  }
  .center{
      flex-direction: row-reverse;
  }
  /* .bottom{
      flex-direction: row-reverse;
  } */
`;

const PaymentForm2 = () => {
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [purpose, setPurpose] = useState('')
  const [amount, setAmount] = useState('')

    // Initializing all the state variables 
    const [info, setInfo] = useState([]);
    const [input, setInput] = useState(0);
    const [from, setFrom] = useState("ngn");
    const [to, setTo] = useState("ngn");
    const [options, setOptions] = useState([]);
    const [output, setOutput] = useState(0);
    const [isChecked, setIsChecked] = useState(false);
    
    // Calling the api whenever the dependency changes
    useEffect(() => {
      axios.get(
  `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`)
     .then((res) => {
        setInfo(res.data[from]);
      })
    }, [from]);
    
    // Calling the convert function whenever
    // a user switches the currency
    useEffect(() => {
      setOptions(Object.keys(info));
      convert();
    }, [info])
      
    // Function to convert the currency
    function convert() {
      var rate = info[to];
      setOutput(input * rate);
    }
    
    // Function to switch between two currency
    function flip() {
      var temp = from;
      setFrom(to);
      setTo(temp);
    }
    
    const handleCheck = () => {
      setIsChecked(!isChecked)
      !isChecked ? console.log("checked") : console.log("unchecked");
    }
    

  const paywithpaystack = (e) => {
    convert()
    e.preventDefault()
    const paystack = new PaystackPop()

    paystack.newTransaction({
      key: "pk_test_991ef6cfc641dd4b948b2cac759d00d34d3ef116",
      amount: output.toFixed(2) * 100,
      fullname,
      email,
      purpose,
      onSuccess(transaction){
        let message = `Payment Completed! Transaction reference ${transaction.reference}`
        alert(message)
        setFullname= ""
        setEmail= ""
        setPurpose=""
        setAmount=""
      },
      onCancel(){
        alert("Transaction Cancelled!")
      }
    })
  }

  const paywithpaystack2 = (e) => {
    convert()
    e.preventDefault()
    const paystack = new PaystackPop()

    paystack.newTransaction({
      key: "pk_test_991ef6cfc641dd4b948b2cac759d00d34d3ef116",
      amount: output.toFixed(2) * 100,
      purpose,
      email,
      onSuccess(transaction){
        let message = `Payment Completed! Transaction reference ${transaction.reference}`
        alert(message)
        setPurpose=""
        setAmount=""
        setEmail=""
      },
      onCancel(){
        alert("Transaction Cancelled!")
      }
    })
  }

  const config = {
    reference: (new Date()).getTime().toString(),
    // email: "user@example.com",
    amount: 20000,
    publicKey: 'pk_test_991ef6cfc641dd4b948b2cac759d00d34d3ef116',
};

// you can call this function anything
const onSuccess = (reference) => {
  // Implementation for whatever you want to do with reference and after success call.
  console.log(reference);
};

// you can call this function anything
const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  console.log('closed')
}

const PaystackHookExample = () => {
    const initializePayment = usePaystackPayment(config);
    return (
      <div>
          <button onClick={() => {
              initializePayment(onSuccess, onClose)
          }}>Paystack Hooks Implementation</button>
      </div>
    );
};


  return (
    <Container>
    <div className="page1Wrapper">
        <div className="page1Header">
            <h1>Give Generously</h1>
        </div>
    </div>
    {/* <div className="giveTopContainer">
      <h2 className="title">The Gift Of Giving</h2>
      <h2 className="title2">GIVE.SAVE.SPEND</h2>
      <div className="giveTopContainerPara">
        <p>A simple way to remember biblical financial priorities. First, we give. Christians give a portion of what we receive back to the Lord because God has been so generous to us. Second, we save. We remember Joseph who saved grain so that, when the drought came, there was enough saved to feed thousands. Third, we spend. After giving a portion and saving a portion, we spend the funds we are blessed with to support ourselves. Give. Save. Spend. Order your life around these three biblical principles to feel less stress and be a blessing to others!</p>
      </div>
    </div> */}
    <>
    <iframe loading="lazy" src="https://my.churchplus.co/iframe/bd70cedf-e3c1-4192-ee40-08da4224da26" style={{border: "0px #F4F4F4 dashed", width: "100%", height: "1190px"}} name="online-giving" scrolling="no" frameBorder="1" marginHeight="0px" marginWidth="0px" allowFullScreen></iframe>
    </>
    <Footer />
    </Container>
  )
}

export default PaymentForm2