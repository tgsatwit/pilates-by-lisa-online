"use client"

import { ScrollArea } from "@/components/ui/scroll-area"

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto mt-20 py-12">
      <div className="max-w-4xl mx-auto mt-5">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <ScrollArea className="h-[800px] rounded-md border p-8">
          <div className="prose prose-slate max-w-none">
            <p className="text-sm text-muted-foreground mb-6">This is the Privacy Policy of Pilates by Lisa (hereafter referred to as "us" or "we"). This Privacy Policy describes how your personal information is collected, used, and shared when you use our streaming service, Pilates by Lisa through our website (pilatesbylisa.com.au) or any of our branded apps (together, the "Service").</p>
            
            <p className="mb-8">By using the Service, you agree to the collection, use and disclosure of your information as described in this Privacy Policy. We may modify this Privacy Policy from time to time. Your continued use of the Service constitutes your agreement to any updated Privacy Policy on a prospective basis.</p>

            {/* Table of Contents */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contents:</h2>
              <ul className="list-none pl-0 space-y-1">
                <li><a href="#personal-info" className="text-purple-600 hover:text-purple-800 no-underline">Personal Information We Collect</a></li>
                <li><a href="#info-use" className="text-purple-600 hover:text-purple-800 no-underline">How We Use Your Information</a></li>
                <li><a href="#third-parties" className="text-purple-600 hover:text-purple-800 no-underline">Disclosures to Third Parties</a></li>
                <li><a href="#advertising" className="text-purple-600 hover:text-purple-800 no-underline">Targeted Advertising</a></li>
                <li><a href="#emails" className="text-purple-600 hover:text-purple-800 no-underline">Emails</a></li>
                <li><a href="#privacy-rights" className="text-purple-600 hover:text-purple-800 no-underline">Your Privacy Rights</a></li>
                <li><a href="#children" className="text-purple-600 hover:text-purple-800 no-underline">Children's Privacy</a></li>
                <li><a href="#changes" className="text-purple-600 hover:text-purple-800 no-underline">Changes</a></li>
                <li><a href="#contact" className="text-purple-600 hover:text-purple-800 no-underline">Contact Us</a></li>
              </ul>
            </div>

            <div className="space-y-8">
              <section id="personal-info">
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
                  <li>with accuracy, on the basis that you may at any time request a copy of the health information that we hold by emailing us at lisa@pilatesbylisa.com.au. In the event our records are found to be inaccurate, we will rectify any inaccuracies on the basis of the further information you provide.</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">Information Collected Automatically</h3>
                <p>Each time you visit the Service, we automatically collect certain information about your device and your interaction with the Service. This may include your viewing activity, your IP address, location information, your browser type, your Internet service provider (ISP), referring/exit pages, your operating system, date/time stamps, and related metadata.</p>

                <h3 className="text-xl font-semibold mt-6 mb-3">Comments</h3>
                <p>We may offer the ability to provide comments or to post messages in a forum. Any posts you make will be publicly available.</p>

                <h3 className="text-xl font-semibold mt-6 mb-3">Other Information</h3>
                <p>You may also choose to provide other information about yourself in connection with surveys, contests, special offers, customer support inquiries, and other communications with us.</p>
              </section>

              <section id="info-use">
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

              <section id="third-parties">
                <h2 className="text-2xl font-semibold mb-4">DISCLOSURES TO THIRD PARTIES</h2>
                <p>We may disclose your information to the following types of third parties:</p>

                <h3 className="text-xl font-semibold mt-6 mb-3">Authorized Service Providers</h3>
                <p>We share your information with authorized service providers involved in operating the Service. For example, we use Vimeo OTT to power the Service and provide customer support. You can read more about how Vimeo uses your personal information here: vimeo.com/privacy. Our authorized service providers also include our website platform, payment providers, email service providers, and analytics companies.</p>

                <h3 className="text-xl font-semibold mt-6 mb-3">Legal Situations</h3>
                <p>We may disclose your information when we have a good faith belief that compliance is required by a search warrant, subpoena, court order, or similar request from a law enforcement or other government agency.</p>

                <h3 className="text-xl font-semibold mt-6 mb-3">To the Public</h3>
                <p>We may publicly disclose aggregated user statistics and other information, which is not considered personal information. If you comment on a video or participate in a forum, your comment will be shared publicly.</p>
              </section>

              <section id="advertising">
                <h2 className="text-2xl font-semibold mb-4">TARGETED ADVERTISING</h2>
                <p>We may use your personal information to provide you with targeted advertisements or marketing communications we believe may be of interest to you.</p>
                <p className="mt-4">You can limit the use of your information for purposes of targeted advertising using a number of methods:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Via the Digital Advertising Alliance's tool available at optout.aboutads.info, which lets you opt-out of interest-based ads on websites.</li>
                  <li>Via AppChoices mobile app, available at https://www.youradchoices.com/appchoices, which lets you opt-out of interest-based ads in mobile apps.</li>
                  <li>Using platform specific opt-out features:
                    <ul className="list-disc pl-6 mt-2">
                      <li>Google: https://adssettings.google.com/</li>
                      <li>Facebook: https://www.facebook.com/about/ads</li>
                    </ul>
                  </li>
                  <li>By configuring your browser settings and/or mobile settings to restrict third-party cookies and/or the use of the advertising ID associated with your mobile device for interest-based advertising purposes.</li>
                </ul>
                <p className="mt-4">The options described above must be set on each of your devices in order to apply. Not all companies that serve interest-based ads participate in the ad industry opt-out programs described above, so even after opting-out, you may still receive some cookies and interest-based ads from other companies.</p>
              </section>

              <section id="emails">
                <h2 className="text-2xl font-semibold mb-4">EMAILS</h2>
                <p>When you create an account, you may receive certain emails:</p>

                <h3 className="text-xl font-semibold mt-6 mb-3">Transaction Emails</h3>
                <p>When you first create an account, we may send you a welcome email that provides information about your subscription and your account. If you make a purchase, we may send you an email confirming your purchase. We may also send you other emails concerning your account status and renewals. You may not opt out of transactional emails.</p>

                <h3 className="text-xl font-semibold mt-6 mb-3">Marketing Emails</h3>
                <p>Depending on your preferences, we may send you emails letting you know about new programs or features, or promotions. You may opt out of these emails at any time in your account settings.</p>
              </section>

              <section id="privacy-rights">
                <h2 className="text-2xl font-semibold mb-4">YOUR PRIVACY RIGHTS</h2>
                <p>You may change your account information or close your account at any time by logging into your account and adjusting your account settings. If you close your account or request that we delete your account, you may lose access to content you have purchased. When you close your account, we may preserve your account information to (i) let you know about new offers and content; (ii) restore your account, if you ever wish to re-subscribe; and (iii) where we believe in good faith that preservation is necessary to enforce our rights.</p>

                <h3 className="text-xl font-semibold mt-6 mb-3">EEA Users</h3>
                <p>Users from the European Economic Area (EEA) have the right to: opt out of cookies (see our Cookie Policy); access, correct, delete, restrict or object to our use of your personal information. If you would like to exercise any of these rights, please submit your request by using our form.</p>
                <p>We process personal information to fulfill contracts with you and to provide services you have requested (for example, to fulfil a purchase), or otherwise to pursue our legitimate business interests. Note that your information will be transferred outside of Europe, including to Australia and the United States.</p>

                <h3 className="text-xl font-semibold mt-6 mb-3">California Users</h3>
                <p>Users from California have the right to: request information about the categories and sources of personal information collected about you, and the associated purposes for collection and third-party disclosures; request a copy of your personal information; request deletion of your personal information; and opt out of the sale of your personal information.</p>
                <p>To exercise your right to access or delete your personal information, submit your request by using our form. Note that to process your request, we must be able to verify your identity as the owner of the account you are inquiring about. We may not be able to fulfill your request until we can do so. Although you do not need to have an account to submit a request, we may not be able to locate certain information to process your request if you don't have one.</p>

                <h3 className="text-xl font-semibold mt-6 mb-3">Nevada Users</h3>
                <p>Nevada residents have the right to opt out of the sale of certain "covered information" collected by operators of websites or online services. We currently do not sell covered information, as "sale" is defined by such law, and we don't have plans to sell this information.</p>
              </section>

              <section id="children">
                <h2 className="text-2xl font-semibold mb-4">CHILDREN'S PRIVACY</h2>
                <p>The Service is not intended for individuals under the age of 16. If you are a parent or legal guardian who has discovered that your child has provided personal information through the Service without your consent, please contact us so that we can remove any unauthorized information.</p>
              </section>

              <section id="changes">
                <h2 className="text-2xl font-semibold mb-4">CHANGES</h2>
                <p>We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons. Your continued use of the Service constitutes your agreement to any updated Privacy Policy on a prospective basis.</p>
              </section>

              <section id="contact">
                <h2 className="text-2xl font-semibold mb-4">CONTACT US</h2>
                <p>For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by using our form or by email using the details provided below:</p>
                <p className="mt-4">Email: <a href="mailto:lisa@pilatesbylisa.com.au" className="text-purple-600 hover:text-purple-800">lisa@pilatesbylisa.com.au</a></p>
              </section>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  )
} 