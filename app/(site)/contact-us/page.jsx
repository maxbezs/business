import Header from "../components/Header";
import H1 from "../components/H1";
import Paragraph from "../components/Paragraph";
import Form from "../components/Form";
export const metadata = {
  title: "Get in Touch: Expand Your Business Horizons with Our Expert Team",
  description:
    "Ready to take your business to the next level? Contact us today and let's discuss your specific needs. Our expert team is eager to chat about how we can support your business growth, whether it's through web development, mobile app creation, or bespoke software solutions. Schedule a meeting easily using our user-friendly form and start your journey towards business expansion with our dedicated support.",
  keywords: [
    "Business Consultation Services",
    "Professional Development Support",
    "Custom Web and App Development",
    "Personalized Business Strategy",
    "Expert Team Collaboration",
    "Schedule Meeting Ease",
    "Business Expansion Tools",
    "Tailored Software Solutions",
    "User-Friendly Contact Interface",
    "Dedicated Business Support",
  ],
  author: "max_bezs",
  creator: "max_bezs",
  publisher: "max_bezs",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  charset: "UTF-8",
  icons: {
    other: [
      {
        rel: "image_src",
        url: "https://business.max-bezs.com/listmax.jpg",
      },
    ],
  },
  openGraph: {
    title: "Get in Touch: Expand Your Business Horizons with Our Expert Team",
    description:
      "Ready to take your business to the next level? Contact us today and let's discuss your specific needs. Our expert team is eager to chat about how we can support your business growth, whether it's through web development, mobile app creation, or bespoke software solutions. Schedule a meeting easily using our user-friendly form and start your journey towards business expansion with our dedicated support.",
    url: "https://business.max-bezs.com/contact-us",
    siteName: "max_bezs Business",

    images: [
      {
        url: "https://business.max-bezs.com/listmax.jpg", // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    type: "website",
  },
};
const ContactUs = () => {
  return (
    <div className="text-center flex flex-col w-full">
      <div className="flex flex-col w-full items-center justify-center pt-8">
        <H1>The last step to expand your business</H1>
        <Paragraph>Shedule a meeting. We are ready to chat!</Paragraph>
      </div>
      <Form />
    </div>
  );
};

export default ContactUs;
