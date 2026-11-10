import { Discipline } from '../types';

export const DISCIPLINES: Discipline[] = [
  {
    id: 'onroad',
    title: 'Onroad & Drift Racing',
    subtitle: '1/10 EP • 1/8 GP • RWD DRIFT',
    badge: 'LOW-PROFILE DRIFT',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArn650qfxWZ627aPwGyB8awsPQMGX5V5g0Eh8IK9THX2w7qz1Xxcqv1cby9Conzsf0ySEV3GOX7iHVNXyOAIzuxB_761bzc3bFJQrYEBH1yy24Da5sBipN_AQBLEdxoMARYQ5FdRaO8H-MusbJFkTRW0FKrGvryPMKidHNxpIAhZCHZOjPjnv86H4-H5pSnZ-19NIqTU54h8WOkfkojCnaAefM_6KK_aETVz9GUfTaeU6K4Dxchy_z6w',
    description: 'Low profile drift & touring servo 1/10 (TS12, TS15) engineered for 0.050s ultra speed response, titanium gear coreless/brushless precision, Sanwa SSR/SXR telemetry, and steering gyro integration.',
    torqueSpectrum: '12.5 - 28.0 kg-cm',
    targetCategory: 'low-profile-micro'
  },
  {
    id: 'plane',
    title: 'Plane & Glider Aerobatics',
    subtitle: '3D AEROBATIC • THIN WING • UAV',
    badge: 'HV BRUSHLESS',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSVKom4P6Om8eY6slUbs9p4FO25mfe4e4iMarVqqF0TqIrQk6CSy5wC3WcTnSbk9TswsEGMcWEfX0JsHONbN-7wNcq_fLdSZHOpYXi_EbZCupt6-yZSVGwrdB_xECZrVkRydGWgilTPzb8rh_khF4CmDRJJxx-49XjCMwJg9HKHLVh31wP_QbuqycOzc-joBTg4Zq95QhbNaW31HWo12GvvCIU3LG_Pl5_2_PlYP0DE2RhZU6jFjNClg',
    description: 'High-holding torque titanium gear trains and thin wing servo for RC glider platforms engineered to withstand violent G-force flutter, gas vibrations, and continuous 8.4V LiPo telemetry.',
    torqueSpectrum: '25.0 - 65.0 kg-cm',
    targetCategory: 'hv-brushless'
  },
  {
    id: 'marine',
    title: 'Boat & Submarine',
    subtitle: 'RUDDER • F1 HULL • SUBMERSIBLE',
    badge: 'IP67 / IP68 WATERPROOF',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCORJh7z3M3Igl5ezpj2AKhZQABLZSBa0lxd8HR409STHDUzeKmHlFq3QYAmFYbdu-9LkWoUeor36N18mMPCVFA-NFCAtKyDNjNBfsspW9aTIwsNTl0MQPV4jl1ahlfm4UNRrD0mktVXIhhRXnVLTmdn4p4Uy5-X-WDBJe3gj_B0xblqCx1M5V-VUlWS5oL_edh2Dc5N5ILxULOBVqYdUcCuPlIWexDZV1gXvbXRN4lWWBrsW9ykiGhpw',
    description: 'Submarine / Boat Servo and IP67 waterproof servo designs with full silicone potting, stainless steel gears, and lip seal gaskets for corrosive marine environments and underwater operations.',
    torqueSpectrum: '30.0 - 75.0 kg-cm',
    targetCategory: 'waterproof'
  },
  {
    id: 'offroad',
    title: 'Offroad & Rock Crawler',
    subtitle: '1/8 NITRO BUGGY • 1/10 ROCK CRAWLER',
    badge: 'HIGH TORQUE 25T',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8xDVLzFaj41m3fpGYWYOzhvfn1WN6ZWtNF-9nyPtqw5BMn7Yj5hR-66DbqQG4ar5L5g_8xOdHWBF_MFaoFpftjiYmiVkaUI0hvaCpkSD805wea8U0_K--uaRhDWnRusUeFiWTx3zp-qRCh5lC-XSi0QYYjB8ILjKX56Lb4wImHzBMa-wnYZ_dm9CnFh3HrEMjBf4YsYR0XHbmCqQSkLKONtLtpPu5WfOnla06DV9a48CU_SuoghyjHg',
    description: 'High torque waterproof servo 40kg to 75kg-cm and waterproof steering servo for crawler platforms with 25T aluminum clamping servo horn compatibility and contactless magnetic encoders.',
    torqueSpectrum: '40.0 - 80.0 kg-cm',
    targetCategory: 'hv-brushless'
  },
  {
    id: 'heli',
    title: 'High Speed & Digital',
    subtitle: '0.06S TRANSIT • CORELESS • TITANIUM',
    badge: '0.06S HIGH SPEED',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtrvJfeOqGi85Bzfv63Obl2Gvjd1gZipBPzAdboZzNwOVr8STk2O5gl_RySItwJaUQz5_mbmIfaV8w0iCz4dqOQfqSMibvEiq_zODIIx9ufej7jFfEz9jYSmhALUqQFE7pWWRLj921W3DRVyH0tGhJ511HwUHAUdYdxBM-4-2O81FfGhxmNhjFJPDNaXzp6cgXh-h9eOhaHGH9ONTMflTh40sO7Ncm-_ze4MCVqW_YPxjSNLlNx1pEeg',
    description: 'High speed digital servo 0.06s and titanium gear coreless servo platforms clocking sub-millisecond precision with low deadband jitter for nitro throttle and competition cyclic swashplates.',
    torqueSpectrum: '15.0 - 35.0 kg-cm',
    targetCategory: 'coreless-digital'
  },
  {
    id: 'robotics',
    title: 'Robot Serial Bus & Gyro',
    subtitle: 'RS485 • CAN BUS • V4 GYRO • USB BOX',
    badge: 'SMART SERIAL BUS',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9WU9PEAtX8-M6muqrXRj9drZt8x8gKokXRKq-z3P_Vvwz1fQdFLqAn2gOra3U0xsBnt8xfYTvArFYQLlenFTIv8moh33sOYLXOKJpxYSqYyL4zMR4W5k2SvHjV5YvBprFZSeqfyhwPL9P9KQtq3oLC-cmndAOst77lcoHDDklvInxnEmcBDDyxvMmDZdMC9NE7XMHakFE6mJ8WMUgCcTDg5slZsUrpavfMTLaDP1tLQjntRq7rcSPcA',
    description: 'Smart multi-turn 360° serial bus actuators with USB servo programmer card / box firmware tuning, ROS2 hardware interfaces, and RC car steering gyro V4 stabilization.',
    torqueSpectrum: 'CAN / RS485 / TTL',
    targetCategory: 'robot-serial'
  }
];
