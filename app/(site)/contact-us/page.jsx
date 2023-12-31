import Header from "../components/Header";
import H1 from "../components/H1";
import Paragraph from "../components/Paragraph";
import Form from "../components/Form";

const ContactUs = () => {
  return (
    <div className="text-center flex flex-col w-full">
      <div className="flex flex-col w-full items-center justify-center pt-[10vh]">
        <H1>The last step to expand your business</H1>
        <Paragraph>Shedule a meeting. We are ready to chat!</Paragraph>
      </div>
      <Form />
    </div>
  );
};

export default ContactUs;
