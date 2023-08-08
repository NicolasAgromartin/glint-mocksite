import { FormButton, FormInput } from "../../styled-components/styled-formComponents";

export default function Footer() {
  return (
    <footer className="w-full min-h-[500px] bg-black text-white/30 flex flex-wrap justify-center items-center gap-4 pb-4">

      <div className="w-[min(100%,600px)] p-6 flex flex-col gap-4">
        <h1 className="text-primary text-[34px] font-bold text-left">Glint.</h1>
        <p className="leading-7 text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quia illum perspiciatis cum provident expedita. Perferendis saepe deleniti veniam, illum dolorum modi numquam maiores distinctio ratione iste ipsum natus fugit!</p>
      </div>

      <div className="w-[min(100%,600px)] p-6 flex flex-col justify-start gap-4">
        <h1 className="text-white text-base font-bold text-left">Get Notified</h1>
        <p className="leading-7 text-[14px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quia illum perspiciatis cum 
        </p>
        <form action="" className="w-full flex justify-start items-center mt-3">
          <FormInput placeholder="Email Address" />
          <FormButton>Suscribe</FormButton>
        </form>
      </div>

      <div className="w-full flex flex-wrap justify-center items-center gap-8 text-[14px]">
        <h5>Copyright Glint 2022</h5>
        <h5>Site template by <a href="#" className="text-primary">Colorlib</a></h5>
      </div>

    </footer>
  )
}
