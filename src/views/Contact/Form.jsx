import { FormInput, FormTextArea, FormButton } from "../../styled-components/styled-formComponents"


export default function Form() {

  function handleSubmit(e) {
    e.preventDefault()
  }



  return (
    <form className='w-full h-full flex flex-col justify-start items-start gap-8 pt-14 px-[10%]
      bg-[rgb(17, 17, 17)]'
      onSubmit={(e) => handleSubmit(e)}>

        <h3 className="uppercase font-bold text-white text-[14px] mb-12">Send us a message</h3>
        
        <FormInput placeholder="Your Name" />
        <FormInput placeholder="Your Email" />
        <FormInput placeholder="Subject" />
        <FormTextArea placeholder='Your Message' />

        <FormButton>Submit</FormButton>

    </form>
  )
}
