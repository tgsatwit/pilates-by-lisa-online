"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What equipment do I need?",
    answer: "Most of our classes can be done with just a mat. Some classes may use light equipment like resistance bands or small weights, but we always offer modifications for bodyweight-only exercises."
  },
  {
    question: "Is Pilates by Lisa suitable for beginners?",
    answer: "Absolutely! We have dedicated beginner programs and provide detailed instruction for all skill levels. Our 'Kickstart Your Pilates' series is perfect for those just starting their journey."
  },
  {
    question: "How often are new classes added?",
    answer: "We add new classes weekly to keep your practice fresh and engaging. Members get immediate access to all new content as it's released."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time. There are no long-term commitments, and we offer a 7-day free trial for new members."
  },
  {
    question: "What makes Pilates by Lisa different?",
    answer: "With over 12 years of online teaching experience, we offer expert instruction, a supportive global community, and a vast library of classes. Our focus on proper form and detailed cues ensures you get the most out of every workout."
  }
]

export function PBLFAQSection() {
  return (
    <section className="py-24 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="h2 font-playfair-display text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-center text-slate-700 mb-8">
            Everything you need to know about Pilates by Lisa
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg text-slate-800">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-lg">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}