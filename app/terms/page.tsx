"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms & Conditions of Use</h1>
        <ScrollArea className="h-[800px] rounded-md border p-8">
          <div className="prose prose-slate max-w-none">
            <p className="text-sm text-muted-foreground mb-4">Last updated on September 7, 2021</p>
            <p className="mb-8">Please read carefully.</p>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contents:</h2>
              <ul className="list-none pl-0 space-y-1">
                <li><a href="#terms" className="text-purple-600 hover:text-purple-800 no-underline">Terms & Conditions</a></li>
                <li><a href="#website-terms" className="text-purple-600 hover:text-purple-800 no-underline">Website Terms of Use</a></li>
                <li><a href="#privacy" className="text-purple-600 hover:text-purple-800 no-underline">Privacy Policy</a></li>
                <li><a href="#shipping" className="text-purple-600 hover:text-purple-800 no-underline">Shipping, Returns & Refunds Policy</a></li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4" id="terms">Terms & Conditions Contents:</h2>
              <ul className="list-none pl-0 space-y-1">
                <li><a href="#acceptance" className="text-purple-600 hover:text-purple-800 no-underline">Your Acceptance</a></li>
                <li><a href="#medical-advice" className="text-purple-600 hover:text-purple-800 no-underline">Requirement to Obtain Professional Medical Advice</a></li>
                <li><a href="#accuracy" className="text-purple-600 hover:text-purple-800 no-underline">Our Reliance on Your Accuracy of Information</a></li>
                <li><a href="#fitness" className="text-purple-600 hover:text-purple-800 no-underline">Fitness Level</a></li>
                <li><a href="#testimonials" className="text-purple-600 hover:text-purple-800 no-underline">Testimonials</a></li>
                <li><a href="#personal-info" className="text-purple-600 hover:text-purple-800 no-underline">Personal Information</a></li>
                <li><a href="#accounts" className="text-purple-600 hover:text-purple-800 no-underline">User Accounts</a></li>
                <li><a href="#payment" className="text-purple-600 hover:text-purple-800 no-underline">Payment</a></li>
                <li><a href="#memberships" className="text-purple-600 hover:text-purple-800 no-underline">Delivery of Memberships</a></li>
                <li><a href="#purchase-options" className="text-purple-600 hover:text-purple-800 no-underline">Viewing & Purchase Options</a></li>
                <li><a href="#contact" className="text-purple-600 hover:text-purple-800 no-underline">Contact Information</a></li>
                <li><a href="#disclaimers" className="text-purple-600 hover:text-purple-800 no-underline">Disclaimers</a></li>
                <li><a href="#liability" className="text-purple-600 hover:text-purple-800 no-underline">Limitations and Liability</a></li>
                <li><a href="#indemnity" className="text-purple-600 hover:text-purple-800 no-underline">Indemnity</a></li>
                <li><a href="#privacy-protection" className="text-purple-600 hover:text-purple-800 no-underline">Privacy and Child Protection</a></li>
                <li><a href="#choice-of-law" className="text-purple-600 hover:text-purple-800 no-underline">Choice of Law</a></li>
                <li><a href="#dispute" className="text-purple-600 hover:text-purple-800 no-underline">Forum of Dispute</a></li>
                <li><a href="#force-majeure" className="text-purple-600 hover:text-purple-800 no-underline">Force Majeure</a></li>
                <li><a href="#severability" className="text-purple-600 hover:text-purple-800 no-underline">Severability</a></li>
                <li><a href="#non-waiver" className="text-purple-600 hover:text-purple-800 no-underline">Non-Waiver</a></li>
                <li><a href="#assignment" className="text-purple-600 hover:text-purple-800 no-underline">Assignment</a></li>
                <li><a href="#amendments" className="text-purple-600 hover:text-purple-800 no-underline">Amendments</a></li>
                <li><a href="#communications" className="text-purple-600 hover:text-purple-800 no-underline">Electronic Communications</a></li>
                <li><a href="#general" className="text-purple-600 hover:text-purple-800 no-underline">General</a></li>
              </ul>
            </div>
            
            <div className="space-y-8">
              <section>
                <h3 className="text-xl font-semibold mb-3" id="acceptance">1. Your Acceptance</h3>
                <p>The following terms and conditions relate to the provision of any services or sale of Products (including physical Products or downloadable material or material capably of internet streaming) from the Pilates By Lisa website (www.pilatesbylisa.com.au) ("Site") ("Services") ("Terms and Conditions"). These Terms and Conditions constitute an agreement between, Lisa Michelle Petony trading as Pilates By Lisa ABN 55 292 511 754 ("Pilates By Lisa" "us", "we", "our"), the owner and operator of the Site, and any Services and you ("you", "your" or "user(s)"), a user of the Site and/or Services ("Agreement").</p>
                <p>By using our Site or any Services you agree to be bound by this Agreement, our Website Terms of Use and our Privacy Policy. We may amend this Agreement, our Website Terms of Use or our Privacy Policy and will notify you if we do so. If you do not agree to the terms and conditions contained in this Agreement, Website Terms of Use or our Privacy Policy (or any subsequent amendments) you must cease using our Site and Services immediately.</p>
                <p>Users must be 18 years or older to purchase any of our Products or Services.</p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3" id="medical-advice">2. Requirement to Obtain Professional Medical Advice</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All content on our Site is for informational and educational purposes only.</li>
                  <li>Any statements appearing on our Site or in our Services have not been evaluated by any other national or international agencies.</li>
                  <li>None of the content or Products offered on our Site are meant to diagnose, treat, alleviate or relieve any medical or health conditions, nor to guarantee any particular outcome or results.</li>
                  <li>The Products and content found on the Site are not intended as a substitute for the advice provided by your doctor or other healthcare professional.</li>
                  <li>You should always speak with your doctor or other healthcare professional before adopting any treatment for a health problem or before adopting any new fitness or dietary regime or using any of our Services.</li>
                  <li>If you have or suspect that you have a medical problem, or if you have a pre-existing medical condition, you should contact your health care provider before using our Services.</li>
                  <li>Never disregard, avoid, or delay obtaining medical advice from your doctor or other qualified health care provider because something you have read on our Site.</li>
                  <li>You should be in good health and physically fit when using our product or Service, failure to be in good health may result in adverse health consequences.</li>
                  <li>Please seek medical advice in regards to your health conditions and physical fitness.</li>
                  <li>If at any time you notice any unanticipated changes to your health (physical, mental or emotional), you should seek medical attention immediately.</li>
                </ul>

                <div className="mt-4">
                  <p className="font-medium mb-2">If you are pregnant, breast-feeding or post-pregnancy you consult your doctor or a qualified medical professional before using any of our Services. As a guide and in addition to, but not to replace or contradict, any medical advice received from your doctor or a qualified medical professional:</p>
                  <ul className="list-[lower-alpha] pl-6 space-y-2">
                    <li>Avoid exercise in warm/humid environments, especially during the 1st trimester;</li>
                    <li>Avoid isometric exercise or straining while holding your breath;</li>
                    <li>Maintain adequate nutrition and hydration – drink liquids before and after exercise;</li>
                    <li>Know your limits – pregnancy is not a good time to train for athletic competition;</li>
                    <li>Know the signs to immediately stop exercise and consult your doctor or a qualified medical professional as soon as they occur:
                      <ul className="list-[lower-roman] pl-6 mt-2 space-y-1">
                        <li>Excessive shortness of breath</li>
                        <li>Chest pain</li>
                        <li>Painful uterine contractions (more than 6-8 per hour)</li>
                        <li>Vaginal bleeding</li>
                        <li>Any "gush" of fluid from vagina (suggesting premature rupture of the membranes)</li>
                        <li>Dizziness or faintness</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <p className="mt-4">If you are postpartum, you must have had your 6 week postpartum checkup with your doctor and be cleared by your doctor to start exercise.</p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3" id="accuracy">3. Our Reliance on Your Accuracy of Information</h3>
                <p>You are responsible for making your own inquiries and seeking independent advice from a healthcare professional before acting on any information or material made available to you through our Site. Our Services may not be suitable to your particular circumstances.</p>
                <p>You acknowledge that our Services are provided on the basis of the accuracy and completeness of the information that you provide us, following our evaluation of that information. You further acknowledge that your failure to provide accurate or complete information may adversely affect the quality, efficacy or suitability of these Services.</p>
                <p>You warrant the truth, accuracy, currency and completeness of any information you provide us.</p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3" id="fitness">4. Fitness Level</h3>
                <p>Persons with pre-existing medical conditions, in poor health, or with any concerns as to commencement of new fitness regime should consult with an appropriate healthcare professional before beginning any fitness program. You are responsible to make your own inquiries and seek independent advice from a healthcare professional before acting on any information or material made available to you through our website. Our information service may not be suitable to your particular circumstances and is not a substitute for obtaining specific advice from a qualified health care professional.</p>
                <p>You acknowledge that by participating in our information service you are doing so voluntarily and, depending on your particular circumstances, there may be risks to your health. You further acknowledge that these risks may be caused by your own acts or omissions, or those of other users of our Site, or may be risks that are not known to you or are not readily foreseeable at the time of using the information service. This is a risk warning pursuant to the Australian Consumer Law. You assume all risks in connection with your participation in our information service. To the extent permitted by law, we exclude any express or implied warranties of reasonable care and skill.</p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3" id="testimonials">5. Testimonials</h3>
                <p>Please be aware that any testimonials on the Site may not reflect the results that you may achieve. Results may vary and your experience may not be similar to the experience of the user testimonials.</p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3" id="personal-info">6. Personal Information</h3>
                <p>We are required to collect such personal information from you as reasonably required to provide you with our Services, and in accordance with our Privacy Policy. This information may include your personal details such as name, email address and postcode together with certain health information; not limited to your age range, height, weight, exercise levels, biochemistry, medical history, medication and supplement use. We acknowledge and agree that this information is confidential and will be used for the purposes of the provision of our Services only, unless otherwise required by law as set out in our Privacy Policy.</p>
                <p>You warrant the personal information and health information you provide us is truthful, accurate, current and complete to the best of your knowledge or belief. We accept no liability in the event you fail to provide us with personal information or health information that is truthful, accurate, current and complete.</p>
                <p>By agreeing to the terms and conditions contained in this Agreement you agree to receive our email newsletter. You can unsubscribe at any time by emailing us at lisa@pilatesbylisa.com.au with 'unsubscribe' in your email's subject</p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3" id="accounts">7. User Accounts</h3>
                <p>We may assign you a username/password and account information in order to enable you to access and use certain areas of our Site or require you to set up your own account access using a username/password chosen by you ("Login"). Each time you use your Login, you will be deemed to be authorized to access and use our Site in a manner consistent with this Agreement. We have no obligation to investigate the authorization or source of any such access or use of our Site.</p>
                <p>You are solely responsible for protecting the security and confidentiality of your Login and for all activities on our Site using that Login, including without limitation, all communications and transmissions and all obligations (including without limitation financial obligations) incurred on our Site through such access or use of your Login.</p>
                <p>You must immediately notify us of any unauthorized use of your Login or any other breach or threatened breach of our Site's security you may be aware of.</p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3" id="payment">8. Payment</h3>
                <p>We use a secure online payment system.</p>
                <p>In order to purchase any of our Services (including any Products) you will be required to provide us with your credit card information. Please be aware that all credit card information may be shared with our third party payment processors, such as Stripe and PayPal. By purchasing through our Site, you agree that we may charge you the price listed at the checkout screen, and that any payments made via credit card may attract an additional percentage fee, as charged by the relevant merchant from time-to-time.</p>
                <p>All orders must be pre-paid. Orders will only be sent out or available for download (for electronic Products) after full payment of the total amount is cleared.</p>
                <p>You warrant that the payment details and any related personal details you provide us are correct. We accept no liability in the event you fail to provide correct or incomplete payment or personal details or for any losses suffered as a result of the fraudulent or unauthorised use of credit cards.</p>
                <p>The prices for Services provided under this Agreement will be as set out on our Site at the time you apply for the Services. All prices are in Australian Dollars unless otherwise stated, and inclusive of GST, and you agree that we may charge you GST as set out in the A New Tax System (Goods and Services Tax) Act 1999 ("GST Act").</p>
                <p>From time to time we may issue promotional or discount codes. These can be redeemed at checkout and are subject to the terms of issue stated by us in relation to each promotion or discount.</p>
                <p>If you have any issues with payment do not hesitate to contact us at lisa@pilatesbylisa.com.au.</p>
                <p>All Services (including any goods) available from our Site are subject to consumer protections under the Australian Consumer Law.</p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3" id="memberships">9. Delivery of Memberships</h3>
                <h4 className="text-lg font-medium mt-4 mb-2">50% Off First Month</h4>
                <p>The 50% Off First Month offer on monthly plans offer is available to new and first-time members only. Individuals who have previously registered, including, but not limited to, individuals using different email addresses, will not be eligible for the 50% off and will be charged from the date of which they re-register. New and first-time members will get 50% off their first month only. 50% Off First Month is available on monthly subscriptions only and is not available on annual subscriptions.</p>
                
                <h4 className="text-lg font-medium mt-4 mb-2">Recurring Subscription Memberships</h4>
                <p>All memberships, monthly and yearly, are recurring subscriptions and automatically renew at the end of each period. After processing your payment, you will be granted access to The Pilates By Lisa website content. Additional information about Pilates By Lisa can be found within our Site.</p>

                <h4 className="text-lg font-medium mt-4 mb-2">Subscription Upgrades</h4>
                <p>You can choose to upgrade your subscription at any time. This will start a new subscription, starting from the day you upgrade. Your previous subscription will be cancelled and any unused portion will be refunded to you.</p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3" id="purchase-options">10. Viewing and Purchase Options</h3>
                <p>We may offer the following purchase options through Pilates by Lisa websites and applications:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Rental:</strong> After paying the stated fee, you may stream the Program an unlimited number of times during the stated rental period.</li>
                  <li><strong>Purchase:</strong> After paying the stated fee, you may stream the Program an unlimited number of times; if offered by us, you may download the Program.</li>
                  <li><strong>Subscription:</strong> For a recurring fee, you may stream the Programs offered within our subscription channel an unlimited number of times during your subscription period. We may add or remove Programs from the channel at any time.</li>
                </ul>

                <p className="mt-4">To make a purchase, you must provide a valid payment method. We may apply taxes, including VAT (value-added tax), to any charges. Prices and other terms of purchase are subject to change. If we provide you access to a Program on a free basis, such access will be deemed a "purchase" for the purpose of this Agreement.</p>

                <p className="mt-4 font-semibold">ALL PURCHASES, INCLUDING RECURRING CHARGES, ARE FINAL AND NON-REFUNDABLE.</p>

                <div className="mt-4 space-y-4">
                  <p><strong>Free trials and Discounts:</strong> We may offer free-trial or discounted subscriptions. When a free-trial period ends, your paid subscription begins (unless you have cancelled) and you must pay the full monthly or annual fee. If we provide a discount for the first subscription period, you must pay the discounted fee; in any renewal, you must pay the full fee.</p>

                  <p><strong>Automatic Renewal:</strong> To the extent permitted by applicable law, subscriptions automatically renew for the subscription period until you cancel. Your payment method will be charged at the beginning of each subscription period. If a Purchaser offers a free-trial period, your payment method will be charged at the end of the free-trial period unless you cancel before the end of that period.</p>

                  <p><strong>How to Decline Renewal:</strong> To pause or cancel a subscription, visit your account settings. Your changes will be applied to your next subscription period.</p>

                  <p><strong>In-App Purchase:</strong> We may allow you to purchase subscriptions within apps you download. When you make such "in-app" purchases, you will be billed by the app platform, not us. To turn off automatic renewal for subscriptions, access your platform's account settings (not Vimeo's). Any billing inquiries should be directed to the app platform.</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3" id="contact">11. Contact Information</h3>
                <p>If you have any questions or concerns about your order or if you have any questions about our Products do not hesitate to contact us. You may contact us by email at lisa@pilatesbylisa.com.au.</p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3" id="disclaimers">12. Disclaimers</h3>
                <p>To the fullest extent permissible by applicable law, we hereby disclaim all warranties of any kind, either express or implied, including, any implied warranties with respect to the Services (including any Products listed or purchased on or through our Site. Except for the purposes of Consumer Guarantees under the Australian Consumer Law, we hereby expressly disclaim all liability for our Service, and for product defects or failures, claims that are due to your use of our Service or Products, product misuse, abuse, product modification, improper product selection, non-compliance with any codes, or misappropriation. The foregoing exclusions of implied warranties do not apply to the extent prohibited by law. Please refer to your local laws for any such prohibitions.</p>
                <p>In regards to any breach or failure to comply with any Consumer Guarantees under the Australian Consumer Law, we may replace any goods or supply equivalent goods, repair such goods, or pay for the cost of repair. For any services, we may resupply the service or pay for the service to be supplied again.</p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3" id="liability">13. Limitations and Liability</h3>
                <div className="space-y-4">
                  <p>a) Notwithstanding any limitations or restrictions placed on this limitation of liability by the Consumer Act, we do not assume any responsibility or liability for any damages to you. In no event will we, or any of our respective officers, directors, employees, shareholders, affiliates, agents, successors or assigns, nor any party involved in the creation, production or transmission of this Site or any Services offered, be liable to you or anyone else for any direct, indirect, special, punitive, incidental or consequential damages arising out of the use, inability to use, or the results of use of this Site, any web sites linked to this Site, or the materials, information or services contained on any or all such web sites, whether based on warranty, contract, tort or any other legal theory and whether or not advised of the possibility of such damages.</p>
                  
                  <p>b) For the purposes of the following clause, in addition to the defined terms above "Consequential Loss" means any loss or damage suffered by a party or any other person that is indirect or consequential, including but not limited to loss of revenue, loss of income, loss of business, loss of profits, loss of goodwill or credit, loss of business reputation, loss of use, loss of interest, damage to credit rating or loss or denial of opportunity.</p>
                  
                  <p>c) With the exception of Consumer Guarantees, we exclude:</p>
                  <ul className="list-[lower-roman] pl-6 space-y-1">
                    <li>any term, condition or warranty that may otherwise be implied by custom, law or statute;</li>
                    <li>any liability for loss caused by our negligence; and</li>
                    <li>any liability for Consequential Loss.</li>
                  </ul>

                  <p>d) To the extent permitted by law, our liability in respect of any breach of or failure to comply with any Consumer Guarantee is limited, at our option to any one or more of the following:</p>
                  <p className="pl-4">i) In the case of goods, to:</p>
                  <ul className="list-[upper-alpha] pl-8 space-y-1">
                    <li>the replacement of the goods or the supply of equivalent goods;</li>
                    <li>the repair of the goods;</li>
                    <li>the payment of the cost of replacing the goods or of acquiring equivalent goods; or</li>
                    <li>the payment of the cost of having the goods repaired.</li>
                  </ul>
                  <p className="pl-4">ii) In the case of services, to:</p>
                  <ul className="list-[upper-alpha] pl-8 space-y-1">
                    <li>the supplying of the services again; or</li>
                    <li>the payment of the cost of having the services supplied again.</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3" id="indemnity">14. Indemnity</h3>
                <p>You agree to defend, indemnify and hold harmless Pilates By Lisa Pty Ltd its officers, directors, employees and agents, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees) arising from:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>your use of and access to our Site and Service;</li>
                  <li>your violation of any term or condition of this Agreement;</li>
                  <li>your violation of any third party right, including without limitation any copyright, property, or privacy right; or</li>
                  <li>any claim that any of your use caused damage to a third party.</li>
                </ul>
                <p className="mt-4">This indemnity will survive this Agreement and your use of our Services. You also agree that you have a duty to defend us against such claims and we may require you to pay for a solicitor of our choice in such cases. You agree that this indemnity extends to requiring you to pay for our reasonable solicitor's fees, court costs, and disbursements including in relation to the settlement of any claim.</p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3" id="privacy-protection">15. Privacy and Child Protection</h3>
                <p>We comply with the Privacy Act 1988 (Cth) ("Privacy Act") and the applicable Privacy Principles in the Privacy Act when handling personal information and the applicable Health Privacy Principles in the Privacy Act when handling personal information which is health information.</p>
                <p>Our Privacy Policy can be accessed by clicking on this link</p>
                <p>Pilates By Lisa complies with all Australian Child Protection legislation to the extent applicable</p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3" id="choice-of-law">16. Choice of Law</h3>
                <p>This Agreement shall be governed by the laws in force in the state of Queensland, Australia. The offer and acceptance of this contract is deemed to have occurred in Queensland, Australia.</p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3" id="dispute">17. Forum of Dispute</h3>
                <p>You agree that any dispute arising from or relating to this Agreement will be heard solely by a court of competent jurisdiction nearest to the state of Queensland, Australia.</p>
                <p>If you bring a dispute in a manner other than in accordance with this section, you agree that we may move to have it dismissed, and that you will be responsible for our reasonable attorneys' fees, court costs, and disbursements in doing so.</p>
                <p>You agree that the unsuccessful party in any dispute arising from or relating to this Agreement will be responsible for the reimbursement of the successful party's reasonable attorneys' fees, court costs, and disbursements.</p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3" id="force-majeure">18. Force Majeure</h3>
                <p>You agree that we are not responsible to you for anything that we may otherwise be responsible for, if it is the result of events beyond our control, including, but not limited to, acts of God, war, insurrection, riots, terrorism, crime, labour shortages (including lawful and unlawful strikes), embargoes, postal disruption, communication disruption, failure or shortage of infrastructure, shortage of materials, or any other event beyond our control.</p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3" id="severability">19. Severability</h3>
                <p>In the event that a provision of this Agreement is found to be unlawful, conflicting with another provision of the Agreement, or otherwise unenforceable, the Agreement will remain in force as though it had been entered into without that unenforceable provision being included in it.</p>
                <p>If two or more provisions of this Agreement are deemed to conflict with each other's operation, we shall have the sole right to elect which provision remains in force.</p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3" id="non-waiver">20. Non-Waiver</h3>
                <p>We reserve all rights permitted to us under this Agreement as well as under the provisions of any applicable law. Our non-enforcement of any particular provision or provisions of this Agreement or the any applicable law should not be construed as our waiver of the right to enforce that same provision under the same or different circumstances at any time in the future.</p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3" id="assignment">21. Assignment</h3>
                <p>You may not assign your rights and/or obligations under this Agreement to any other party without our prior written consent. We may assign our rights and/or obligations under this Agreement to any other party at our discretion.</p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3" id="amendments">22. Amendments</h3>
                <p>We may amend this Agreement from time to time. When we amend this Agreement, we will update this page and indicate the date that it was last modified or we may email you. You may refuse to agree to the amendments, but if you do, you must immediately cease using our Site and our Service.</p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3" id="communications">23. Electronic Communications</h3>
                <p>We use electronic means of communication, whether you visit the Site or Service or send use-mails, or whether we post notices on the Site or Service or communications with you via e-mail. For contractual purposes, you (1) consent to receive communications from us in an electronic form; (2) agree that all terms, conditions, agreements, notices, disclosures, and other communications that we provide to you electronically satisfy any legal requirement that such communications would satisfy if it were to be in writing. The foregoing does not affect your statutory rights.</p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3" id="general">24. General</h3>
                <div className="space-y-4">
                  <p>a) This Agreement constitutes the whole of the agreement between the parties. It supersedes and extinguishes any previous agreement or understanding between the parties about the subject matter of this Agreement and any representation or warranty previously given.</p>
                  <p>b) If any provision of this Agreement is or becomes illegal, invalid or unenforceable in any jurisdiction, the provision must be read down so as to give it as much effect as possible. If it is not possible to give the provision any effect at all, it is severed from this Agreement. Any reading down or severance does not affect the validity and enforceability of the remaining provisions in that jurisdiction or the validity and enforceability of the offending provision in any other jurisdiction.</p>
                  <p>c) No failure by either party to exercise and no delay in exercising any right under this Agreement will be taken as a waiver of the right. No waiver of any right is effective unless made in writing. Waiver of any particular right does not in any way release the other party from strict compliance in the future with the same or any other obligation.</p>
                  <p>d) The rights and remedies provided in this Agreement are cumulative and do not exclude any other rights provided by law.</p>
                </div>
              </section>

              <section className="mt-12">
                <h2 className="text-2xl font-semibold mb-6" id="website-terms">Website Terms of Use</h2>
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-3">Contents:</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>General</li>
                    <li>Specific Warnings</li>
                    <li>Copyright</li>
                    <li>Our Licence Grant to you</li>
                    <li>Use of our site: Restricted use</li>
                    <li>Linked websites / Third party websites</li>
                    <li>Modification of Service</li>
                    <li>Disclaimer</li>
                    <li>Indemnity</li>
                    <li>Security of Information</li>
                    <li>Termination of Access</li>
                    <li>Force Majeure</li>
                    <li>Governing Law</li>
                    <li>Serverability</li>
                    <li>Non-waiver</li>
                    <li>No Assignment</li>
                    <li>Amendments to Website Terms of Use</li>
                  </ul>
                </div>
              </section>

              <section className="mt-12">
                <h2 className="text-2xl font-semibold mb-6" id="shipping">Shipping, Returns & Refunds Policy</h2>
                
                <section>
                  <h3 className="text-xl font-semibold mb-3">Shipping</h3>
                  <h4 className="text-lg font-medium mt-4 mb-2">General Information:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Shipping times may vary according to Australia Post time frames and zones and does not include order processing time.</li>
                    <li>All orders are processed Monday to Friday (excluding public holidays) from 8:00am – 3.00pm AEST.</li>
                    <li>Processing of orders can take up to two business days before being shipped.</li>
                  </ul>

                  <h4 className="text-lg font-medium mt-4 mb-2">International Shipping:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>ALL International orders may be subject to customs inspections and import taxes unique to your country.</li>
                    <li>All orders are shipped from our dispatch centre via Australia Post.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3">Refunds & Returns</h3>
                  <p>If you are not 100% satisfied with your purchase, you may exchange or return the product and get a refund. You are responsible for the return shipping and postage charges so please choose carefully.</p>
                  
                  <p className="mt-4">All returns must be received within 30 days of the purchase date:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Please ensure all items are packaged securely and arrive back to us in their original, unworn, unused condition. Packaged items must be in their original unopened packages. We reserve the right to deny any item that does not meet these requirements;</li>
                    <li>Once your return has been processed, you will receive a confirmation email from our team;</li>
                    <li>For health reasons there is no exchange or refund on resistance and booty bands.</li>
                  </ul>

                  <p className="mt-4">You will need to provide us with these when returning goods:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Returned goods by post – with tags attached and packaging unopened;</li>
                    <li>Your tax invoice enclosed with goods for identification purposes.</li>
                  </ul>

                  <p className="mt-4">Refunds will only be paid to the credit card used at time of purchase.</p>
                  <p>Goods that have been worn or used will not be accepted for change of mind. You must return all goods with original packaging.</p>
                  <p>All streaming videos and download purchases are final and are non-refundable.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
                  <p>Contact us at lisa@pilatesbylisa.com.au for questions related to refunds and returns.</p>
                </section>
              </section>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}