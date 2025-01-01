"use client"

import { ScrollArea } from "@/components/ui/scroll-area"

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <ScrollArea className="h-[800px] rounded-md border p-8">
          <div className="prose prose-slate max-w-none">
            <p className="text-sm text-muted-foreground mb-6">This is the Privacy Policy of Pilates by Lisa (hereafter referred to as "us" or "we"). This Privacy Policy describes how your personal information is collected, used, and shared when you use our streaming service, Pilates by Lisa through our website (pilatesbylisa.com.au) or any of our branded apps (together, the "Service").</p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">PERSONAL INFORMATION WE COLLECT</h2>
                <p>When you use the Service, we collect the following types of personal information:</p>

                <h3 className="text-xl font-semibold mt-6 mb-3">Account Registration Information</h3>
                <p>In order to sign up for a free trial or make a purchase, you must create an account by providing us with your email address and a password. You may also create a username and upload an avatar to use for comments or forums.</p>

                <h3 className="text-xl font-semibold mt-6 mb-3">Payment Information</h3>
                <p>You must also provide valid payment card information if you wish to sign up for a free trial, subscription, or make any other purchase. Except for the name associated with your card and information about the transaction (e.g., time of transaction, amount), payment card information is collected directly by a third-party payment vendor and is not received or stored by us.</p>

                <h3 className="text-xl font-semibold mt-6 mb-3">Health Information</h3>
                <p>We comply with the Health Privacy Principles in the collection, use and disclosure of all health information. We collect your health information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>from our customers when they request an assessment for the purposes of dietary advice, and/or purchase a meal plan or associated package;</li>
                  <li>as necessary for the provision of our Services, but only as necessary for the provision of our Services, or as otherwise in accordance with your consent, or as may be required by law including Court order;</li>
                  <li>only from you (or from someone authorised by you) (including your caregiver if you have one);</li>
                  <li>with care, taking reasonable steps to ensure your information remains confidential and that any persons we disclose it to in accordance with this Privacy Policy are also required to keep it confidential;</li>
                  <li>with accuracy, on the basis that you may at any time request a copy of the health information that we hold by emailing us at lisa@pilatesbylisa.com.au.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">HOW WE USE YOUR INFORMATION</h2>
                <p>We may use the information collected about you to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fulfill your orders and deliver content to you;</li>
                  <li>Send you marketing communications (depending on your preferences);</li>
                  <li>Targeting and advertising purposes;</li>
                  <li>Provide customer support to you;</li>
                  <li>Analyze how the Service is being used for troubleshooting and improvements;</li>
                  <li>Communicate with you;</li>
                  <li>Collect debts, prevent fraud, and protect the integrity of the Service;</li>
                  <li>Enforce our legal rights;</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">CONTACT US</h2>
                <p>For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by email at: lisa@pilatesbylisa.com.au</p>
              </section>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  )
} 