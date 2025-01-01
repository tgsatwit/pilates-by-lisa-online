"use client"

import { ScrollArea } from "@/components/ui/scroll-area"

export default function TermsPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
        <ScrollArea className="h-[800px] rounded-md border p-8">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Terms & Conditions</h2>
            <p className="text-sm text-muted-foreground mb-4">Last updated on September 7, 2021</p>
            
            <div className="space-y-8">
              {/* Content sections */}
              <section>
                <h3 className="text-xl font-semibold mb-3">1. Your Acceptance</h3>
                <p>The following terms and conditions relate to the provision of any services or sale of Products (including physical Products or downloadable material or material capably of internet streaming) from the Pilates By Lisa website (www.pilatesbylisa.com.au) ("Site") ("Services") ("Terms and Conditions"). These Terms and Conditions constitute an agreement between, Lisa Michelle Petony trading as Pilates By Lisa ABN 55 292 511 754 ("Pilates By Lisa" "us", "we", "our"), the owner and operator of the Site, and any Services and you ("you", "your" or "user(s)"), a user of the Site and/or Services ("Agreement").</p>
                <p>By using our Site or any Services you agree to be bound by this Agreement, our Website Terms of Use and our Privacy Policy. We may amend this Agreement, our Website Terms of Use or our Privacy Policy and will notify you if we do so. If you do not agree to the terms and conditions contained in this Agreement, Website Terms of Use or our Privacy Policy (or any subsequent amendments) you must cease using our Site and Services immediately.</p>
                <p>Users must be 18 years or older to purchase any of our Products or Services.</p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">2. Requirement to Obtain Professional Medical Advice</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All content on our Site is for informational and educational purposes only.</li>
                  <li>Any statements appearing on our Site or in our Services have not been evaluated by any other national or international agencies.</li>
                  <li>None of the content or Products offered on our Site are meant to diagnose, treat, alleviate or relieve any medical or health conditions, nor to guarantee any particular outcome or results.</li>
                  <li>The Products and content found on the Site are not intended as a substitute for the advice provided by your doctor or other healthcare professional.</li>
                  <li>You should always speak with your doctor or other healthcare professional before adopting any treatment for a health problem or before adopting any new fitness or dietary regime or using any of our Services.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">3. Our Reliance on Your Accuracy of Information</h3>
                <p>You are responsible for making your own inquiries and seeking independent advice from a healthcare professional before acting on any information or material made available to you through our Site. Our Services may not be suitable to your particular circumstances.</p>
                <p>You acknowledge that our Services are provided on the basis of the accuracy and completeness of the information that you provide us, following our evaluation of that information. You further acknowledge that your failure to provide accurate or complete information may adversely affect the quality, efficacy or suitability of these Services.</p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">4. Fitness Level</h3>
                <p>Persons with pre-existing medical conditions, in poor health, or with any concerns as to commencement of new fitness regime should consult with an appropriate healthcare professional before beginning any fitness program. You are responsible to make your own inquiries and seek independent advice from a healthcare professional before acting on any information or material made available to you through our website.</p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">5. Testimonials</h3>
                <p>Please be aware that any testimonials on the Site may not reflect the results that you may achieve. Results may vary and your experience may not be similar to the experience of the user testimonials.</p>
              </section>

              {/* Continue with remaining sections following the same pattern */}
              
              <section>
                <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
                <p>For more information about our terms and conditions, if you have questions, or if you would like to make a complaint, please contact us by email at: lisa@pilatesbylisa.com.au</p>
              </section>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  )
} 