import type { Metadata } from "next";
import FAQs from "../Home/FAQs";
import { faqItems } from "../Home/faqData";
import GetInTouch from "../Home/GetInTouch";
import PartnersSection from "../Home/OurPartner";
import Publishers from "../ourpublishing/components/Publishers";
import BookGallery from "./components/BookGallery";
import OurBookHero from "./components/OurBookHero";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = createCanonicalMetadata("/ourbook");

export default function Home() {
  return (
    <>
      <OurBookHero />
      <PartnersSection />
      <BookGallery />
      <Publishers />
      <GetInTouch
        data={{
          left: {
            heading: "Let Us Know If You Need Guidance",
            subheading: "Looking for an expert? Let's talk.",
            paragraphs: [
              <div>
                <p>
                  You've already taken the first step toward self-publishing
                  success, but you may still have questions. If you're looking
                  for expert guidance to bring your ideas and your voice to
                  life, you're in the right place. Ink Founders is here to help.
                </p>
                <p className="mt-3">
                  We offer a free consultation where you can ask questions,
                  share your story ideas, and explore our self-publishing
                  services. Searching for self-publishing services near me? Ink
                  Founders serves authors across the Australia, including our
                  self-publishing agency in Miami, Florida, and is proud to be
                  an affordable self-publishing company for authors at every
                  budget.
                </p>
                <p>Take the next step. Connect with us today.</p>
              </div>,
            ],
            contacts: [
              {
                type: "phone",
                label: "(0468) 285-539",
                href: "tel:+61468285539",
              },
              {
                type: "email",
                label: "info@inkfounders.com",
                href: "mailto:info@inkfounders.com",
              },
              {
                type: "location",
                label: "16A Fox Cl, Kariong NSW 2250, Australia",
                href: "https://www.google.com/maps/search/?api=1&query=16A%20Fox%20Cl%2C%20Kariong%20NSW%202250%2C%20Australia",
              },
            ],
          },
          form: {
            title: "Get In Touch Now!",
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
            submitText: "Let's Get Started",
            sendingText: "Sending...",
            consentError: "Please provide consent to communicate.",
            successMessage: "Thank you! Your message has been received.",
            genericError: "Something went wrong. Please try again.",
            networkError: "Network error. Please try again later.",
          },
        }}
      />
      <FAQs
        items={[
          {
            question: "What Services Are Included in Your Packages, and Can I Customise Them?",
            answerParagraphs: [
              "Ink Founders offers a comprehensive range of publishing services, including editing, proofreading, book formatting, cover design, interior book design, ISBN registration, publishing, and marketing. If you're looking for ghostwriting services, we've got you covered as well.",
              "The best part is that our packages are fully customisable. We understand that every author has different goals, ideas, and publishing needs. That's why we offer personalised consultations to help you tailor a package that suits your objectives, budget, and publishing journey.",
            ],
          },
          {
            question:
              "What makes Ink Founders one of the best self-publishing companies for first-time authors?",
            answerParagraphs: [
              "We built our process specifically with first-time authors in mind. From your very first conversation with our team to the day your book is published, we guide you through every step, explain what to expect, and never rewrite your voice. Our 100+ qualified experts and clear, step-by-step process are why so many new authors choose us for their first book.",
            ],
          },
          {
            question:
              "How Do You Handle Editing and Proofreading? What Are the Qualifications of Your Editors?",
            answerParagraphs: [
              "Our editing and proofreading services are carried out by qualified, experienced editors with strong backgrounds in literature, publishing, and creative writing. Every manuscript is carefully reviewed to correct grammar, spelling, punctuation, structure, and consistency while preserving your unique voice and writing style. Our goal is to ensure your book is polished, professional, and ready for publication.",
            ],
          },
          {
            question: "What Distribution Channels Do You Offer for My Book?",
            answerParagraphs: [
              "We distribute books through leading online retailers and distribution networks, including Amazon, Barnes & Noble, and IngramSpark, helping your book reach readers across the globe.",
            ],
          },
          {
            question: "Do You Offer Marketing and Publicity Support?",
            answerParagraphs: [
              "Yes. We offer a range of book marketing and publicity services, including social media promotion, marketing campaigns, press releases, and targeted advertising to help maximise your book's visibility and connect you with the right audience.",
            ],
          },
          {
            question: "What Are Your Royalty Rates and Payment Structure? Are There Any Upfront Costs or Hidden Fees?",
            answerParagraphs: [
              "We believe in complete transparency. You retain 100% of your royalties and full ownership of your work. We charge agreed service fees only, with no hidden costs or unexpected charges.",
            ],
          },
        ]}
      />
    </>
  );
}
