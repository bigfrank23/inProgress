import React from 'react'
import Mailchimp from 'react-mailchimp-form'

const ReactMailChimpForm = () => {
  return (
    <Mailchimp
     action="https://pfnlagosstate.us14.list-manage.com/subscribe/post?u=c24c2b0ed5e6c969eb11482f9&amp;id=4a7a3baff4"
     fields={[
         {
            name: "Email",
            placeholder: "Email",
            type: "email",
            required: true
        }
     ]}
    />
  )
}

export default ReactMailChimpForm