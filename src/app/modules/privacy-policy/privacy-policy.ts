import { Component } from '@angular/core';

interface PrivacySection {
  title: string;
  content: string;
}

@Component({
  selector: 'app-privacy-policy',
  imports: [],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.css',
})
export class PrivacyPolicy {
  effectiveDate: string = 'October 2025';
  sections: PrivacySection[] = [
    {
      title: `Effective From: ${this.effectiveDate}`,
      content: ``
    },
    {
      title: 'Information We Collect',
      content: `
        We collect personal information that you voluntarily provide when making a booking or contacting us, such as your name, email address, phone number, and address. We may also collect basic usage information such as IP address, browser type, and pages visited on our website.
      `,
    },
    {
      title: 'How We Use Your Information',
      content: `
        Your information is used to manage reservations, respond to your inquiries, improve our website and services, and communicate updates if you choose to receive them.
      `,
    },
    {
      title: 'Sharing With Third Parties',
      content: `
        We may share your information with trusted service providers who help us operate our website and deliver services. We do not sell, rent, or trade your personal information to third parties.
      `,
    },
    {
      title: 'Security',
      content: `
        We take reasonable steps to protect your personal information from unauthorized access, loss, or misuse. However, no method of internet transmission or storage is completely secure.
      `,
    },
    {
      title: 'Your Choices',
      content: `
        You may request access to, correction of, or deletion of your personal information by contacting us directly.
      `,
    },
    {
      title: 'Changes to This Policy',
      content: `
        This Privacy Policy may be updated from time to time. Any changes will be posted on this page with an updated effective date.
      `,
    },
  ];
}
