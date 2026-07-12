import type { GetInTouchContent } from "../Home/GetInTouch";

export const getInTouchContent: GetInTouchContent = {
  left: {
    heading: "Let Us Know If You Need Guidance",
    subheading: "Looking for an expert? Let's talk.",
    paragraphs: [
      "You've already taken the first step toward self-publishing success, but you may still have questions. If you're looking for expert guidance to bring your ideas and your voice to life, you're in the right place. Ink Founders is here to help.",
      "We offer a free consultation where you can ask questions, share your story ideas, and explore our self-publishing services. Searching for self-publishing services near me? Ink Founders serves authors across the australia, including our self-publishing agency in Miami, Florida, and is proud to be an affordable self-publishing company for authors at every budget.",
      "Take the next step. Connect with us today."
    ],
    contacts: [
      {
        type: "phone",
        label: "(0468) 285-539",
        href: "tel:0468285539",
      },
      {
        type: "email",
        label: "info@inkfounders.com",
        href: "mailto:info@inkfounders.com",
      },
      {
        type: "location",
        label: "16A Fox Cl, Kariong NSW 2250, Australia",
        href: "https://www.google.com/maps/search/?api=1&query=16A%20Fox%20Cl%2C%20Kariong%20NSW%202250%2C%20Australia"
      },
    ],
  },
  form: {
    title: "Take the next step",
    fields: [
      [
        { name: "firstName", type: "text", placeholder: "First name" },
        { name: "lastName", type: "text", placeholder: "Last Name" },
      ],
      [
        { name: "email", type: "email", placeholder: "Email" },
        { name: "phone", type: "tel", placeholder: "Phone number" },
      ],
    ],
    messagePlaceholder: "Message",
    consentText:
      "Please check the box to communicate via SMS or Email (Terms & Conditions & Privacy Policy) - Carrier charges may apply for SMS. Reply STOP or UNSUBSCRIBE to STOP to unsubscribe anytime",
    submitText: "Connect with us Today",
    sendingText: "Sending...",
    consentError: "Please provide consent to communicate.",
    successMessage: "Thank you! Your message has been received.",
    genericError: "Something went wrong. Please try again.",
    networkError: "Network error. Please try again later.",
  },
};
