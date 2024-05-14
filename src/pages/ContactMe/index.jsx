import ContactForm from "../../components/ContactMe/form";
import Footer from "../../components/Home/footer";
import Navbar from "../../components/Home/navbar";

export default function ContactMe() {
  return (
    <div className="h-full w-full flex flex-col gap-10 px-[25px] lg:px-[50px] pt-[20px] text-[30px]">
      <Navbar />
      <div className="text-center font-semibold text-[50px] lg:text-[70px] xl:text-[85px] font-serif">
        Contact <span className="text-[#9D8E8E]">Me</span> 
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}
