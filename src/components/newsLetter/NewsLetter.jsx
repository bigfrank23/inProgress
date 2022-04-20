import React from 'react'
import SubscribeFrom from "react-mailchimp-subscribe";

const url = "https://elonatech.us7.list-manage.com/subscribe/post?u=03ab700b3b53b59cbf37a6e4d&id=35564fb9a9";



const formProps = {
    action:
      "https://elonatech.us7.list-manage.com/subscribe/post?u=03ab700b3b53b59cbf37a6e4d&id=35564fb9a9",
    styles: {
      sending: {
        fontSize: 18,
        color: "auto"
      },
      success: {
        fontSize: 18,
        color: "green"
      },
      error: {
        fontSize: 18,
        color: "red"
      }
    }
  };
const NewsLetter = () => {
  return (
    <SubscribeFrom {...formProps} />
  )
}

export default NewsLetter