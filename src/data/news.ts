import { NewsItem, DealerRegion } from '../types';

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'efra-podium',
    category: 'RACE RESULTS',
    dateTag: 'OCTOBER 24, 2024 • PIT REPORT',
    title: 'CJ.SERVO Dominates EFRA 1/10 Electric Touring Podium',
    summary: 'Double TQ and 1st place overall finish powered by the ultra-low latency TS15 HV brushless low-profile servo on indoor high-grip carpet.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkITP7U4ngZPHHh0B95vMTbijS4a5PrzxtvE6FOvLj6IsIYHieZCUSwcrCF2lghtFfcRJZV77NxPNxlnfSu00KDMZcSNvOl99xYjx19gBIu8nSZKBNHjVjl7s_6UN7y77L8afoWUssibmnzkuayWxLjqkoladgPX3imWx46jE0bvs0gbfYLFSVzoDQL7GKn0-ju2X9KKF4DJZLZpfwHaYMrR4CbT_f7Rw6pQNzeftZUAyZtPg8O7aJvQ',
    content: 'At the 2024 EFRA European Electric Touring Championships, CJ.SERVO factory pilots dominated both Modified and Stock classes. The ultra-low latency TS15 HV low-profile servo delivered razor-sharp turn-in precision and sub-millisecond return-to-center repeatability across all five rounds of qualifying and triple A-mains. Even under the grueling 35°C track conditions and intense tire grip roll, zero thermal drift or servo fade was registered.'
  },
  {
    id: 'factory-expansion',
    category: 'FACTORY REPORT',
    dateTag: 'SEPTEMBER 12, 2024 • PRODUCTION',
    title: 'Chaojia Intelligent Expands 5-Axis CNC Milling Center in Guangdong',
    summary: 'New precision robotics machinery triples internal manufacturing capacity for 7075-T6 titanium gearsets and specialized UAV custom actuator housings.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeCtNblfAEi49QhsfyKg8DL-PUJr8nzmhS__GOxNWczywtRrUh6dgW_zdSvb7X9uqJx-KJu_564hvHXQX2V3EBPPnIR6FS1mWJy1fRLmgLfqmAiEDNNxcuKkp9EbyUrm1RZYQa3VUR-njxp_k9VIeca_0zCCApAHN7XBomPVVPmusHPStFHKlzIWpLUMXPF39Ilb8QhCi_JmsHHbGxTYWeEwK5yXmGTBZ3fd9HrPWjd8tdNg1v7-_FxA',
    content: 'Our Dongguan manufacturing campus has completed commissioning of twelve new Japanese DMG MORI 5-axis CNC machining centers. This dedicated high-precision facility elevates gear hobbing tolerances to DIN class 4, while expanding monthly billet 7075-T6 servo housing production to over 150,000 units. The facility strictly adheres to ISO9001:2015 quality control benchmarks.'
  },
  {
    id: 'torture-lab-video',
    category: 'ENGINEERING LAB • VIDEO BENCH',
    dateTag: 'OCTOBER 08, 2024 • VIDEO REPORT',
    title: 'Torture Lab: TS70 Submerged 2-Meter Pressure Test',
    summary: 'Watch our quality assurance engineers push our IP67 sealing and titanium gear train past 100 continuous stall hours under pressurized water.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1eB0Fz0tWkSfnMbB6qvLKm0etSZE07XuwprMUp1OX0E27CWrjwaLlp17-5uDzrD6hWzxei9dFxUboPh70SOpJL0Wbot_OiZAnjwXp2XdkzkfLwK83hB07ux3TOHVf0XZB3w-9b4_tSY76_ZsuiC1hFySipEDVRea_7FC5vDtbCDoyJxmCtVOlzEiGmqUu9PniIWcb-qNWZCiNB_DL9-jJAuIiRwILSd-yQ-3AJtlsh7rODgGiri4B2g',
    isMediaVideo: true,
    videoDuration: '04:32 • 4K UHD',
    content: 'In our environmental stress testing chamber, the CJ.SERVO TS70 was immersed into a 2.0-meter pressurized column filled with standard saline solution. The servo was commanded through continuous 60° back-and-forth stall cycles under an 8.4V LiPo power rail. After 100 hours of continuous operation, post-test disassembly showed zero internal condensation or oil breakdown.'
  }
];

export const DEALER_REGIONS: DealerRegion[] = [
  {
    id: 'us',
    regionName: 'United States & North America (Horizon / A-Main)',
    distributors: [
      {
        name: 'Horizon Hobby LLC',
        territory: 'North America (USA & Canada)',
        contact: 'sales@horizonhobby.com | 1-800-338-4639',
        type: 'Exclusive Master Distributor',
        website: 'horizonhobby.com'
      },
      {
        name: 'A-Main Hobbies Inc.',
        territory: 'USA Nationwide Distribution',
        contact: 'wholesale@amainhobbies.com | 1-800-705-2215',
        type: 'Authorized Online & Dealer Network',
        website: 'amainhobbies.com'
      },
      {
        name: 'Great Hobbies Canada',
        territory: 'Canada National Territory',
        contact: 'support@greathobbies.com',
        type: 'Regional Distributor',
        website: 'greathobbies.com'
      }
    ]
  },
  {
    id: 'eu',
    regionName: 'European Union & UK (Schumacher / LRP)',
    distributors: [
      {
        name: 'Schumacher Racing Ltd.',
        territory: 'United Kingdom & Northern Europe',
        contact: 'info@racing-cars.com | +44 1604 797000',
        type: 'Official Master Distributor',
        website: 'racing-cars.com'
      },
      {
        name: 'LRP Electronic GmbH',
        territory: 'Germany, Austria, Switzerland',
        contact: 'service@lrp.cc | +49 7181 4098-0',
        type: 'Central European Distributor',
        website: 'lrp.cc'
      },
      {
        name: 'Tonisport GmbH',
        territory: 'Pan-European Racing Supply',
        contact: 'info@tonisport.de',
        type: 'Competition Specialist Dealer',
        website: 'tonisport.de'
      }
    ]
  },
  {
    id: 'jp',
    regionName: 'Japan & Asia-Pacific (Central RC)',
    distributors: [
      {
        name: 'Central RC Co., Ltd.',
        territory: 'Japan & East Asia',
        contact: 'info@centralrc.net | +81 6-6744-7770',
        type: 'Exclusive Importer Japan',
        website: 'centralrc.net'
      },
      {
        name: 'RC Mart Limited',
        territory: 'Hong Kong & Southeast Asia',
        contact: 'cs@rcmart.com',
        type: 'Direct Asia Logistics Hub',
        website: 'rcmart.com'
      }
    ]
  },
  {
    id: 'au',
    regionName: 'Australia & New Zealand',
    distributors: [
      {
        name: 'Frontline Hobbies Pty Ltd',
        territory: 'Australia & Oceania',
        contact: 'sales@frontlinehobbies.com.au',
        type: 'Master Distributor',
        website: 'frontlinehobbies.com.au'
      }
    ]
  },
  {
    id: 'cn',
    regionName: 'China Domestic / Greater Bay Area',
    distributors: [
      {
        name: 'Dongguan Chaojia Intelligent Technology Co., Ltd (Factory HQ)',
        territory: 'China Mainland & Global OEM/ODM Direct',
        contact: '1388888888 | info@Cjservo.com',
        type: 'Direct Factory & Global Headquarters',
        website: 'Cjservo.com'
      }
    ]
  }
];
