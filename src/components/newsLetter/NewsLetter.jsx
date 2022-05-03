import React from 'react'
import SubscribeFrom from "react-mailchimp-subscribe";

const url = "https://elonatech.us7.list-manage.com/subscribe/post?u=03ab700b3b53b59cbf37a6e4d&id=35564fb9a9";



const formProps = {
    action:
      "https://pfnlagosstate.us14.list-manage.com/subscribe/post?u=c24c2b0ed5e6c969eb11482f9&amp;id=4a7a3baff4",
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