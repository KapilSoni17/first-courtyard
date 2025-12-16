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
      title: 'BOOKINGS AND RESERVATIONS',
      content: `Bookings can be made online at booking@firstcourtyard.com or by contacting First Courtyard directly. Reservations are subject to availability and actual pricing at the time of booking. Quotes are valid for 24 hours only. Any quote given is an estimate only of price, which will be subject to written confirmation upon booking. You agree to pay the rate for each night of your stay and any additional charges up until the time you have departed the accommodation. The accommodation may be occupied by you only for the period stated on the booking confirmation.`
    },
    {
      title: 'PAYMENT POLICY',
      content: `Full payment is required 14 days prior to arrival. If payment is not received by the due date, First Courtyard reserves the right to cancel the booking without further notice.`
    },
    {
      title: 'PAYMENT OPTIONS',
      content: `Payments are accepted by credit cards (Visa, MasterCard, or AMEX), bank transfer, and UPI. All payments are accepted in Indian Rupees (INR) only. All credit card payments incur a processing fee. Payments can be accepted via direct bank deposit or online payment gateways.`
    },
    {
      title: 'RATES & CHARGES',
      content: `Rates quoted are in Indian Rupees and are subject to change at any time. Rates are inclusive of applicable taxes (GST) where required. Any verbal quote given is an estimate only of price, which will be subject to written confirmation upon booking. All credit card payments will incur a processing surcharge. Minimum length of stay restrictions may apply during special event periods, festivals, and peak seasons. The price of your accommodation cannot be guaranteed until the deposit is received or full payment is made at the time of booking.

Bookings made via third-party platforms or online travel agents may incur additional charges due to commissions payable.`
    },
    {
      title: 'STANDARD CANCELLATION & CHARGES',
      content: `The full tariff is required 14 days prior to arrival.`,
      list: [
        '14 days or more before arrival: No cancellation charge (excluding Peak Season & Group bookings)',
        '0-14 days before arrival: Full tariff is non-refundable'
      ],
      subSections: [
        {
          subtitle: 'Peak Season:',
          text: 'A non-refundable 20% deposit is required 90 days before your booking arrival date, with the balance charged 14 days prior to arrival. Peak Season dates include major festivals (Diwali, Holi), national holidays, Christmas, New Year, and other high-demand periods as determined by management.'
        },
        {
          subtitle: 'Group Bookings:',
          text: 'Bookings of 4 rooms or more require a non-refundable 20% deposit at the time of booking, with the balance charged 30 days prior to arrival.'
        },
        {
          subtitle: 'Advance Purchase Non-Refundable:',
          text: 'These bookings will be charged the total tariff at the time of booking and are 100% non-refundable. No changes or cancellations can be made to this room rate.'
        }
      ]
    },
    {
      title: 'TRAVEL INSURANCE',
      content: `We strongly recommend you purchase comprehensive travel insurance at the time of booking. We suggest that the policy should include, but not be limited to, the reimbursement of any monies paid in the event the travel is cancelled, loss or damage to personal baggage, loss of money, and medical expenses.`
    },
    {
      title: 'CHECK-IN & CHECK-OUT',
      content: `Standard check-in time is 2:00 PM on the day of arrival and the room is to be vacated by 11:00 AM on the day of departure. An additional fee may be charged if you do not check out by 11:00 AM.

Early arrivals and late check-outs are at the discretion of Management and must be requested at the time of booking. Whilst every effort will be made to accommodate early arrivals and late departures, the only way to absolutely ensure early check-in or late check-out is to book an extra night or half-day where availability permits. Half-day rates are charged at 50% of the nightly tariff and will extend the check-out time until 2:00 PM or allow an early check-in from 10:00 AM.`
    },
    {
      title: 'GUEST IDENTIFICATION',
      content: `Valid government-issued photo identification (Aadhaar Card, Passport, Driving License, or Voter ID) is required at check-in for all guests. This is mandatory as per local regulations and hotel policy.`
    },
    {
      title: 'MINIMUM AGE REQUIREMENT',
      content: `The lead guest must be at least 18 years of age at the time of check-in. Valid photo identification must be presented upon arrival.`
    },
    {
      title: 'NUMBER OF GUESTS',
      content: `At no time during your occupancy may the number of guests staying exceed the number booked, unless prior approval is sought and given by management. The use of extra beds other than the number booked will attract an additional tariff. Any persons exceeding the maximum occupancy of the property will be considered trespassers and will be evicted.`
    },
    {
      title: 'CHILDREN\'S POLICY',
      content: `Children's prices for accommodation are included in the standard tariff rates and refer to children using existing bedding. Please note that not all room types are child-friendly. Please inquire at the time of booking about family-friendly accommodation options.`
    },
    {
      title: 'CLEANING',
      content: `Extra cleaning and linen change can be arranged during your stay for an additional charge. Please contact management for further details. On departure, your room is to be left in a clean and tidy state. If excessive cleaning is required, an additional cleaning cost of ₹2,000 will be deducted from your deposit or charged to your credit card.`
    },
    {
      title: 'DAMAGES & BREAKAGES',
      content: `We reserve the right to charge the lead guest for any damages caused through the course of a booking by any member of the booking party. This includes breakages, spillages, stains, damage to furniture, or fixtures and fittings. Any accidental damages should be reported as soon as possible to minimize damage and associated costs.

Damages or breakages of furniture or furnishings must be reported to Management immediately. Excess cleaning required on departure or replacement of items removed from the accommodation will be charged to the guest's credit card or deducted from the security deposit.`
    },
    {
      title: 'SMOKING POLICY',
      content: `Smoking inside any rooms is strictly prohibited. If there is any evidence of smoking inside rooms, you will be charged an additional ₹5,000 for specialized cleaning to eliminate odours. Please ensure doors and windows are closed if smoking near rooms. Designated smoking areas are available on the property.`
    },
    {
      title: 'PETS',
      content: `Pets are not permitted at First Courtyard unless prior written approval has been obtained from management.`
    },
    {
      title: 'PERSONAL BELONGINGS',
      content: `You acknowledge that we do not cover your personal belongings under our insurance policy and therefore take no responsibility for any loss or damage to the occupant's personal property left on the premises. You agree that you will not make any claim against us for any damages or loss to your personal belongings regardless of how or where the loss or damage occurred.`
    },
    {
      title: 'LOST PROPERTY',
      content: `Should we recover your lost property, we request that you arrange for its collection or send a prepaid self-addressed envelope so we can post it back to you. Please note, we only hold items for 3 months. After that period, items will either be donated or disposed of.`
    },
    {
      title: 'PARKING',
      content: `Complimentary parking is provided for guests. First Courtyard is not liable for any loss or damage to a vehicle, nor to any property or effects of any persons using the car park, nor for any personal injury suffered by them howsoever caused.`
    },
    {
      title: 'BEHAVIOUR & CONDUCT',
      content: `Parties or gatherings are strictly prohibited unless prior arrangements have been made with Management. Disturbance to other First Courtyard guests and neighbours, including excessive noise and music, is prohibited and may result in eviction without refund.

If a noise complaint is received, a first warning will be given. If a second complaint is received, this will result in immediate eviction with no refund.

Guests are expected to conduct themselves in a respectful and courteous manner at all times. Any behaviour that threatens the safety, comfort, or well-being of other guests or staff will not be tolerated.`
    },
    {
      title: 'AFTER-HOURS ASSISTANCE & LOST KEYS',
      content: `If staff assistance is required outside of reception hours for lost keys, noise complaints, or other issues, a call-out fee of ₹1,500 will be charged to your credit card.

Loss of room keys will incur a ₹1,000 replacement charge.`
    },
    {
      title: 'COMMERCIAL USE & PHOTOSHOOTS',
      content: `The property is not to be used for commercial purposes. Professional photoshoots, filming, or content creation require prior written approval from First Courtyard Management and may incur additional fees.`
    },
    {
      title: 'LIABILITIES',
      content: `You acknowledge that we do not accept liability for any injury, damage, loss, additional expenses, or disruptions due to electrical storms, natural disasters, or other acts of God caused directly or indirectly by events beyond our control. You agree not to make any claim in relation thereto.`
    },
    {
      title: 'CHANGES BEYOND OUR CONTROL',
      content: `Compensation will not apply if significant changes are made for reasons beyond our control. These include: civil disturbances, terrorist activity, industrial disputes, natural disasters, fire, epidemics, health risks, severe weather conditions, government restrictions, acts of public authorities, or other circumstances amounting to force majeure.`
    },
    {
      title: 'FORCE MAJEURE & TRAVEL RESTRICTIONS',
      content: `If government restrictions are placed on domestic or regional travel due to public health emergencies, natural disasters, or other force majeure events, we will provide a free change of date to your booking or provide a voucher for the full value of your booking. All other cancellations will be subject to our normal cancellation policy.

By agreeing to our terms of service, you confirm that you are and will continue to abide by all applicable health and safety guidelines issued by local and national authorities.`
    },
    {
      title: 'ACCEPTANCE OF TERMS',
      content: `Payment of deposit or full payment constitutes acceptance of these Terms and Conditions.

These terms and conditions are subject to change without notice. It is your responsibility to review them before making a booking.`
    },
    {
      title: 'CONTACT INFORMATION',
      content: `First Courtyard
Mandawa, Jhunjhunu, Rajasthan, India

For booking inquiries and general information, please contact us through our website or reception.`
    },
    {
      title: 'GOVERNING LAW',
      content: `These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Jhunjhunu, Rajasthan.`
    }
  ];
}
