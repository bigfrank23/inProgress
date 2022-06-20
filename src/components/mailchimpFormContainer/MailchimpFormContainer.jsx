import React, {useState, useEffect} from 'react';
import './mcFormStyles.css';
import MailchimpSubscribe from "react-mailchimp-subscribe";
// import InputField from "./ui/InputField";
// import { useGHStContext } from './utils/ContextProvider'

const CustomForm = ({ status, message, onValidated }) => {

    // const {modalOpen, setModalOpen} = useGHStContext();

    const [email, setEmail] = useState('');
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');


    useEffect(() => {
        if(status === "success") clearFields();
      }, [status])
    
      const clearFields = () => {
        // setFirstName('');
        // setLastName('');
        setEmail('');
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        // firstName &&
        // lastName &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email,
            // MERGE8: firstName,
            // MERGE2: lastName,
        });
    }

    return (
        <form className="mc__form" onSubmit={(e) => handleSubmit(e)}>
          <h3 className="mc__title">
            {status === "success" 
                ? <h3 style={{color: "lightseagreen"}}>Subscribed!</h3> 
                : <h3>Subscribe to our newsletter</h3>
            }
          </h3>

          {status === "sending" && (
            <div className="mc__alert mc__alert--sending">
                sending...
            </div>
            )}
            {status === "error" && (
            <div 
                className="mc__alert mc__alert--error"
                dangerouslySetInnerHTML={{ __html: message }}
            />
            )}

            {status === "success" && (
            <div
                className="mc__alert mc__alert--success"
                dangerouslySetInnerHTML={{ __html: message }}
            />
            )}

        {status !== "success" ? (
            <div className="mc__field-container">
            {/* <input
              onChange={(e)=> setFirstName(e.target.value)}
              type="text"
              value={firstName}
              placeholder="Jane"
              // isRequired
            />
  
            <input
              onChange={(e)=> setLastName(e.target.value)}
              type="text"
              value={lastName}
              placeholder="Doe"
              // isRequired
            /> */}
  
            <input
              onChange={(e)=>setEmail(e.target.value)}
              type="email"
              value={email}
              placeholder="email"
              className='newsLetterInput'
              isrequired="true"
            />
  
          <input
            type="submit"
            formvalues={[email]}
            className="mc__btn"
          />
          </div>
        ) : null}
          
        </form>
      );
};

const MailchimpFormContainer = props => {
  const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}`;
    return (
        <div className="mc__form-container">
            <MailchimpSubscribe
              url= {postUrl}
              render={({ subscribe, status, message }) => (
                  <CustomForm
                      status={status} 
                      message={message}
                      onValidated={formData => subscribe(formData)}
                  />
              )}
             />
        </div>
    );
};

export default MailchimpFormContainer;