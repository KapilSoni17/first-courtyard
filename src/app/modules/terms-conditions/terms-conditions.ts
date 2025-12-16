import { Component } from '@angular/core';

@Component({
  selector: 'app-terms-conditions',
  imports: [],
  templateUrl: './terms-conditions.html',
  styleUrl: './terms-conditions.css',
})
export class TermsConditions {
sections = [
  {
    title: 'BOOKINGS & RESERVATIONS',
    content: `Reservations can be made through our website, by email, or by contacting First Courtyard directly. All bookings are subject to availability and confirmation at the time of reservation. Any quotation provided is indicative and valid for a limited period unless confirmed in writing. The accommodation may be occupied only for the duration stated in the booking confirmation. Guests agree to settle all accommodation charges and any additional services used prior to departure.`
  },
  {
    title: 'PAYMENT REQUIREMENTS',
    content: `To secure a booking, full payment must be received no later than 14 days prior to the scheduled arrival date. If payment is not completed within this timeframe, First Courtyard reserves the right to cancel the reservation without further notice.`
  },
  {
    title: 'ACCEPTED PAYMENT METHODS',
    content: `Payments may be made using major credit cards, bank transfers, or UPI. All payments are processed in Indian Rupees (INR) only. Credit card transactions may attract applicable processing fees. Online payment gateways or direct bank deposits may be used where available.`
  },
  {
    title: 'ROOM RATES & CHARGES',
    content: `All accommodation rates are quoted in Indian Rupees and may be revised at any time. Rates include applicable taxes as required by law. Verbal quotations are estimates only and are not binding until confirmed in writing. Minimum length of stay requirements may apply during festivals, public holidays, or peak travel periods. Bookings made through third-party platforms may include additional charges due to platform commissions.`
  },
  {
    title: 'CANCELLATION POLICY',
    content: `Full payment is required 14 days prior to arrival.`,
    list: [
      'Cancellations made 14 days or more before arrival: No cancellation fee (excluding peak periods and group bookings)',
      'Cancellations made within 14 days of arrival: Full booking amount is non-refundable'
    ],
    subSections: [
      {
        subtitle: 'Peak Period Bookings',
        text: 'For high-demand periods such as major festivals, national holidays, Christmas, and New Year, a non-refundable deposit of 20% is required 90 days prior to arrival. The remaining balance must be paid 14 days before the arrival date.'
      },
      {
        subtitle: 'Group Reservations',
        text: 'Bookings of four rooms or more require a non-refundable 20% deposit at the time of confirmation, with the remaining balance payable 30 days before arrival.'
      },
      {
        subtitle: 'Advance Purchase – Non-Refundable',
        text: 'Advance purchase reservations require full payment at the time of booking and are strictly non-refundable and non-amendable.'
      }
    ]
  },
  {
    title: 'TRAVEL INSURANCE',
    content: `Guests are strongly encouraged to obtain comprehensive travel insurance at the time of booking. Insurance should cover trip cancellations, medical expenses, loss or damage to personal belongings, and any other unforeseen travel disruptions.`
  },
  {
    title: 'CHECK-IN & CHECK-OUT',
    content: `Check-in time is from 2:00 PM on the day of arrival. Check-out must be completed by 11:00 AM on the day of departure. Late check-out may incur additional charges. Early check-in and late check-out requests are subject to availability and management discretion. Guaranteed early arrival or late departure may require booking an additional half-day or full night.`
  },
  {
    title: 'GUEST IDENTIFICATION',
    content: `All guests must present a valid government-issued photo identification at check-in. Accepted forms of identification include Aadhaar Card, Passport, Driving License, or Voter ID, as required by local regulations.`
  },
  {
    title: 'MINIMUM AGE REQUIREMENT',
    content: `The primary guest must be at least 18 years of age at the time of check-in. Valid photo identification must be provided upon arrival.`
  },
  {
    title: 'MAXIMUM OCCUPANCY',
    content: `The number of guests staying in a room must not exceed the number confirmed at the time of booking unless prior approval is obtained from management. Additional charges may apply for extra beds or additional guests. Unauthorized occupants may be asked to vacate the premises.`
  },
  {
    title: 'CHILD POLICY',
    content: `Children using existing bedding are included in standard room rates. Not all room categories may be suitable for children. Guests are advised to confirm family-friendly accommodation options at the time of booking.`
  },
  {
    title: 'HOUSEKEEPING & CLEANING',
    content: `Additional housekeeping services and linen changes can be arranged for an extra charge. Guests are expected to leave rooms in a reasonable condition upon departure. Excessive cleaning requirements may result in an additional cleaning charge of ₹2,000.`
  },
  {
    title: 'DAMAGE & PROPERTY LOSS',
    content: `Guests are responsible for any damage caused to property, furnishings, or fixtures during their stay. Any damage or loss should be reported to management promptly. Repair, replacement, or additional cleaning costs may be charged to the guest.`
  },
  {
    title: 'SMOKING POLICY',
    content: `Smoking is not permitted inside guest rooms or indoor areas. Evidence of smoking inside rooms will result in a cleaning fee of ₹5,000. Designated smoking areas are available within the property.`
  },
  {
    title: 'PETS',
    content: `Pets are not allowed on the property unless prior written approval has been obtained from management.`
  },
  {
    title: 'PERSONAL BELONGINGS',
    content: `First Courtyard is not responsible for loss or damage to guests’ personal belongings during their stay. Guests are advised to take appropriate precautions to safeguard their valuables.`
  },
  {
    title: 'LOST & FOUND',
    content: `Recovered items will be held for a period of up to three months. Guests may arrange collection or prepaid courier services. Unclaimed items will be donated or disposed of after this period.`
  },
  {
    title: 'PARKING',
    content: `Complimentary parking is available for guests. First Courtyard is not liable for loss, theft, or damage to vehicles or personal property left in the parking area.`
  },
  {
    title: 'GUEST CONDUCT',
    content: `Guests are expected to behave in a respectful and considerate manner at all times. Parties, excessive noise, or disruptive behaviour are not permitted and may result in eviction without refund.`
  },
  {
    title: 'AFTER-HOURS ASSISTANCE',
    content: `Requests for staff assistance outside normal operating hours may incur a service charge. Replacement of lost room keys will be subject to an additional fee.`
  },
  {
    title: 'COMMERCIAL USE & FILMING',
    content: `The property may not be used for commercial activities, professional photography, or filming without prior written consent from management. Additional charges may apply.`
  },
  {
    title: 'LIMITATION OF LIABILITY',
    content: `First Courtyard shall not be held liable for any loss, damage, injury, or inconvenience arising from events beyond our reasonable control, including natural disasters, weather conditions, or government restrictions.`
  },
  {
    title: 'FORCE MAJEURE',
    content: `In the event of travel restrictions or circumstances beyond our control, guests may be offered a date change or booking credit at management discretion. Standard cancellation terms apply in all other cases.`
  },
  {
    title: 'ACCEPTANCE OF TERMS',
    content: `Payment of a deposit or full booking amount constitutes acceptance of these Terms and Conditions. First Courtyard reserves the right to amend these terms at any time without prior notice.`
  },
  {
    title: 'CONTACT DETAILS',
    content: `First Courtyard  
Mandawa, Jhunjhunu, Rajasthan, India  

For booking or general inquiries, please contact us via our website or reception.`
  },
  {
    title: 'GOVERNING LAW',
    content: `These Terms and Conditions are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of Jhunjhunu, Rajasthan.`
  }
];

}
