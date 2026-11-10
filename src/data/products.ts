import { Product } from '../types';

export const CATEGORIES = [
  { id: 'all', name: 'All Products (15 Models)' },
  { id: 'brushless-motor', name: 'Brushless Motor (无刷 7款)' },
  { id: 'coreless-motor', name: 'Coreless Motor (空心杯 2款)' },
  { id: 'brushed-iron-core', name: 'Brushed / Iron Core (有刷/铁芯 6款)' },
];

export const KEYWORD_GROUPS = [
  {
    categoryTitle: 'Brushless Motor Servo (无刷电机舵机 - TS系列 7款)',
    keywords: [
      'TS12 (矮机身12KG)',
      'TS15 (矮机身15KG)',
      'TS22 Brushless',
      'TS27 Competition 8.4V',
      'TS36 High Torque',
      'TS60 Submersible IP68',
      'TS70 Monster 70KG',
      'HV Brushless Servo',
      '8.4V brushless RC servo',
      'Full CNC aluminum case'
    ]
  },
  {
    categoryTitle: 'Coreless Motor Servo (空心杯电机舵机 - CJ系列 2款)',
    keywords: [
      'CJ0005 (0.050s极速)',
      'CJ0009 (9g超薄翼面)',
      'Digital RC Servo',
      'Coreless Motor Servo',
      'High speed digital servo 0.05s',
      'Thin wing servo for RC glider'
    ]
  },
  {
    categoryTitle: 'Brushed / Iron Core Servo (有刷/铁芯电机舵机 - CJ系列 6款)',
    keywords: [
      'CJ12KG Standard',
      'CJ15KG Workhorse',
      'CJ17KG High Torque',
      'CJ35KG Steel Gear',
      'CJ45KG 1/5 Giant',
      'CJ60KG Ultra Giant 60KG',
      'Steel gear digital servo',
      'Induction-hardened gears',
      'Cost-effective workhorse servo'
    ]
  }
];

export const PRODUCTS: Product[] = [
  // ==================== 1. 无刷电机 (BRUSHLESS MOTOR) - 7款 ====================
  {
    id: 'ts12',
    modelName: 'TS12 LOW-PROFILE BRUSHLESS',
    category: 'brushless-motor',
    badgeLabel: '12 KG · 0.055S 矮机身',
    badgeColor: '#38bdf8',
    headline: '12KG LOW-PROFILE BRUSHLESS COMPETITION SERVO',
    description: 'TS12 矮机身12KG无刷数码舵机，采用27.2mm超低重心全CNC铝合金外壳与钛合金齿轮，0.055s极速响应，专为1/10 RWD漂移车与电房竞赛底盘打造。',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuN3o6l-R1n4ZzjLDjgwA5-UnfGK7Tporm2AVjArvV6niuvKYZ3ixlK6dn1O2oBIqgSzXOKYthK_NBsc-71C1ZA-DS4qtiiaaKme4QiBljwSfFhO3dC-kZUetb9YKgdn1PfH0tw2ACVWlX3yT7Qq7deDu2Ha1SIq17wWKnf8pzbbKlknjwjUONUgaBM8kMvhvK4UGZ9xxdNaSu0drjBBIbrW1XN8zwd19oR0NttquXLor38jDcBIbzKA',
    specs: {
      '8.4V': {
        speed: '0.055 sec/60°',
        torque: '12.0 kg-cm',
        torqueOzIn: '166.6 oz-in',
        stallCurrent: '3.8 A',
        idleCurrent: '25 mA',
      },
      '7.4V': {
        speed: '0.065 sec/60°',
        torque: '10.5 kg-cm',
        torqueOzIn: '145.8 oz-in',
        stallCurrent: '3.2 A',
        idleCurrent: '20 mA',
      },
      '6.0V': {
        speed: '0.078 sec/60°',
        torque: '9.0 kg-cm',
        torqueOzIn: '125.0 oz-in',
        stallCurrent: '2.6 A',
        idleCurrent: '18 mA',
      },
    },
    gears: 'Full Titanium & Hardened 7075 Alloy',
    dimensions: '41.0 x 20.0 x 27.2 mm',
    weight: '52.0g (1.83 oz)',
    spline: '25T Spline',
    deadband: '0.8 µs',
    motorType: 'High-Efficiency Brushless Motor',
    bearingType: 'Dual High-Speed Ceramic Bearings',
    operatingFrequency: '1520 µs / 333 Hz (SSR / SXR Mode)',
    waterproofRating: 'IP65 Water Resistant',
    workingVoltage: '6.0V ~ 8.4V DC Direct HV',
    hornType: 'Low-Profile 25T CNC Horn Included',
    features: [
      'TS12 矮机身12KG设计，27.2mm高度显著降低赛车底盘重心与侧倾惯量',
      '无刷高效电机配合高响应数字驱动电路，实现 0.055s 极速转向过渡',
      '航空级 7075-T6 CNC 全铝合金镂空散热中壳，极速导出电机温升',
      '兼容 Sanwa SSR / SUR / SXR 与 Futaba S.BUS2 高频极速遥测系统'
    ],
    schematicDetails: {
      length: 41.0,
      width: 20.0,
      height: 27.2,
      splineTeeth: 25
    }
  },
  {
    id: 'ts15',
    modelName: 'TS15 LOW-PROFILE BRUSHLESS',
    category: 'brushless-motor',
    badgeLabel: '15 KG · 0.050S 矮机身',
    badgeColor: '#00daf3',
    headline: '15KG ULTRA-SPEED LOW-PROFILE BRUSHLESS SERVO',
    description: 'TS15 矮机身15KG无刷数码舵机，0.050s顶尖瞬态响应，15kg-cm充沛锁定扭矩，27.2mm超低机身，专为高抓地力平跑与专业RWD漂移竞技调校。',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuN3o6l-R1n4ZzjLDjgwA5-UnfGK7Tporm2AVjArvV6niuvKYZ3ixlK6dn1O2oBIqgSzXOKYthK_NBsc-71C1ZA-DS4qtiiaaKme4QiBljwSfFhO3dC-kZUetb9YKgdn1PfH0tw2ACVWlX3yT7Qq7deDu2Ha1SIq17wWKnf8pzbbKlknjwjUONUgaBM8kMvhvK4UGZ9xxdNaSu0drjBBIbrW1XN8zwd19oR0NttquXLor38jDcBIbzKA',
    specs: {
      '8.4V': {
        speed: '0.050 sec/60°',
        torque: '15.0 kg-cm',
        torqueOzIn: '208.3 oz-in',
        stallCurrent: '4.2 A',
        idleCurrent: '30 mA',
      },
      '7.4V': {
        speed: '0.060 sec/60°',
        torque: '13.0 kg-cm',
        torqueOzIn: '180.5 oz-in',
        stallCurrent: '3.6 A',
        idleCurrent: '25 mA',
      },
      '6.0V': {
        speed: '0.072 sec/60°',
        torque: '11.0 kg-cm',
        torqueOzIn: '152.7 oz-in',
        stallCurrent: '3.0 A',
        idleCurrent: '20 mA',
      },
    },
    gears: 'Titanium & Hardened Steel Hybrid',
    dimensions: '41.0 x 20.0 x 27.2 mm',
    weight: '54.0g (1.90 oz)',
    spline: '25T Spline',
    deadband: '0.6 µs',
    motorType: 'High-Efficiency Brushless Motor',
    bearingType: 'Dual Precision Ceramic Bearings',
    operatingFrequency: '1520 µs / 333 Hz',
    waterproofRating: 'IP65 Splash Proof',
    workingVoltage: '6.0V ~ 8.4V DC Direct HV',
    hornType: 'CNC 7075 Clamping Horn Included',
    features: [
      'TS15 矮机身15KG旗舰版，0.050s亚毫秒响应，提供超精准中立点回位',
      '全钛合金精密传动齿轮组，高频反向重载切弯零旷量',
      '内置过流与堵转智能保护算法，高负荷过弯不烧板',
      'CNC 铝合金外壳倒角高光处理，完美贴合专业车架舵机位'
    ],
    schematicDetails: {
      length: 41.0,
      width: 20.0,
      height: 27.2,
      splineTeeth: 25
    }
  },
  {
    id: 'ts22',
    modelName: 'TS22 BRUSHLESS COMPETITION',
    category: 'brushless-motor',
    badgeLabel: '22 KG · 0.065S SPEED',
    badgeColor: '#10b981',
    headline: '22KG STANDARD BRUSHLESS HIGH-SPEED SERVO',
    description: 'TS22 标准体型无刷竞赛舵机，22kg-cm高扭力与0.065s闪电速度的黄金平衡，专为1/8越野油车油门刹车与1/10竞技车转向而生。',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA03DbImpp1czNp3kFj4QF9yMyHR3RIsbjpqMTHWkGC3UVrHL6IGhK1K4BJ0bQ3RXMA8UY4q7cK0rfNnDN0Krao9AQcBWcWWPAAb6Uf7cn9c95xNADA8jPnMIfBECMSx75_Bx794rBH5OMWIuYhVKGEvusDcGQulDS9PKLmL8tVGV17aoeLThe_0RXWtSs5DTPdxVektO5TtL11D4dqZC2xSPzaKiyGldws-xBwe2l_paT-pqXH0vRKQg',
    specs: {
      '8.4V': {
        speed: '0.065 sec/60°',
        torque: '22.0 kg-cm',
        torqueOzIn: '305.5 oz-in',
        stallCurrent: '4.8 A',
        idleCurrent: '30 mA',
      },
      '7.4V': {
        speed: '0.075 sec/60°',
        torque: '19.0 kg-cm',
        torqueOzIn: '263.8 oz-in',
        stallCurrent: '4.1 A',
        idleCurrent: '25 mA',
      },
      '6.0V': {
        speed: '0.088 sec/60°',
        torque: '16.0 kg-cm',
        torqueOzIn: '222.2 oz-in',
        stallCurrent: '3.4 A',
        idleCurrent: '20 mA',
      },
    },
    gears: 'Titanium & Hardened Steel',
    dimensions: '40.0 x 20.0 x 37.5 mm',
    weight: '68.0g (2.40 oz)',
    spline: '25T Spline',
    deadband: '0.8 µs',
    motorType: 'High-Efficiency Brushless Motor',
    bearingType: 'Dual Precision Japanese Ball Bearings',
    operatingFrequency: '1520 µs / 333 Hz',
    waterproofRating: 'IP66 Water Resistant',
    workingVoltage: '6.0V ~ 8.4V DC Direct HV',
    hornType: 'Aluminum 25T Horn Included',
    features: [
      'TS22 无刷强劲动力输出，适合1/8油动越野车刹车与敏捷转向控制',
      '全金属齿轮加厚齿根设计，抵御起跳落地猛烈冲击与飞坡震颤',
      '一体化 CNC 铝合金中壳，散热槽面积增加 35%，温控表现优异',
      '32位数字处理器，提供极佳的循迹手感与转向线性'
    ],
    schematicDetails: {
      length: 40.0,
      width: 20.0,
      height: 37.5,
      splineTeeth: 25
    }
  },
  {
    id: 'ts27',
    modelName: 'TS27 BRUSHLESS COMPETITION',
    category: 'brushless-motor',
    badgeLabel: '27 KG · 8.4V HV 竞赛旗舰',
    badgeColor: '#ff525f',
    headline: '27KG HIGH VOLTAGE BRUSHLESS COMPETITION SERVO',
    description: 'TS27 CJ.POWER 旗舰款高压无刷全金属齿轮舵机，27kg-cm充沛扭力，0.075s极速响应，CNC全铝合金精雕机身，SSR/SHR兼容，专业车手领奖台之选。',
    image: '/assets/aistudio/image_0740ab56.png',
    specs: {
      '8.4V': {
        speed: '0.075 sec/60°',
        torque: '27.0 kg-cm',
        torqueOzIn: '375.0 oz-in',
        stallCurrent: '5.2 A',
        idleCurrent: '30 mA',
      },
      '7.4V': {
        speed: '0.085 sec/60°',
        torque: '23.5 kg-cm',
        torqueOzIn: '326.3 oz-in',
        stallCurrent: '4.5 A',
        idleCurrent: '25 mA',
      },
      '6.0V': {
        speed: '0.098 sec/60°',
        torque: '20.0 kg-cm',
        torqueOzIn: '277.7 oz-in',
        stallCurrent: '3.8 A',
        idleCurrent: '22 mA',
      },
    },
    gears: 'Competition Grade Full Titanium / Hardened Steel',
    dimensions: '40.0 x 20.0 x 38.0 mm',
    weight: '72.0g (2.54 oz)',
    spline: '25T Futaba / CJ Standard',
    deadband: '0.8 µs',
    motorType: 'High-Torque 4-Pole Brushless Motor',
    bearingType: 'Dual High-Speed Sealed Ball Bearings',
    operatingFrequency: '1520 µs / 333 Hz (SSR / SHR Compatible)',
    waterproofRating: 'IP66 Dust & Splash Proof',
    workingVoltage: '6.0V ~ 8.4V DC Direct HV LiPo',
    hornType: 'CNC 7075 Heavy-Duty Clamping Horn',
    features: [
      'TS27 经典竞赛涂装，全机身 CNC 7075 精密切割，高精度激光镭雕',
      '8.4V 高压无刷电机直接供电，27kg-cm 强悍输出且发热极低',
      '全钛合金金属齿轮系统，高冲击不扫齿，IFMAR 国际锦标赛认证平台',
      '无触点磁电编码器反馈，消除传统电位器碳膜磨损，寿命提升 5 倍'
    ],
    schematicDetails: {
      length: 40.0,
      width: 20.0,
      height: 38.0,
      splineTeeth: 25
    }
  },
  {
    id: 'ts36',
    modelName: 'TS36 HIGH-TORQUE BRUSHLESS',
    category: 'brushless-motor',
    badgeLabel: '36 KG · 8.4V 大扭力',
    badgeColor: '#f59e0b',
    headline: '36KG HIGH-TORQUE BRUSHLESS ACTUATOR',
    description: 'TS36 高扭力无刷数码舵机，36kg-cm澎湃动力，0.090s敏捷运转，淬火钢钛复合齿轮，专为1/8大脚车、大比例攀爬与高负荷机械转向设计。',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA03DbImpp1czNp3kFj4QF9yMyHR3RIsbjpqMTHWkGC3UVrHL6IGhK1K4BJ0bQ3RXMA8UY4q7cK0rfNnDN0Krao9AQcBWcWWPAAb6Uf7cn9c95xNADA8jPnMIfBECMSx75_Bx794rBH5OMWIuYhVKGEvusDcGQulDS9PKLmL8tVGV17aoeLThe_0RXWtSs5DTPdxVektO5TtL11D4dqZC2xSPzaKiyGldws-xBwe2l_paT-pqXH0vRKQg',
    specs: {
      '8.4V': {
        speed: '0.090 sec/60°',
        torque: '36.0 kg-cm',
        torqueOzIn: '500.0 oz-in',
        stallCurrent: '5.8 A',
        idleCurrent: '35 mA',
      },
      '7.4V': {
        speed: '0.105 sec/60°',
        torque: '31.0 kg-cm',
        torqueOzIn: '430.5 oz-in',
        stallCurrent: '5.0 A',
        idleCurrent: '30 mA',
      },
      '6.0V': {
        speed: '0.120 sec/60°',
        torque: '26.0 kg-cm',
        torqueOzIn: '361.1 oz-in',
        stallCurrent: '4.2 A',
        idleCurrent: '25 mA',
      },
    },
    gears: 'Induction-Hardened Steel + Titanium',
    dimensions: '40.5 x 20.2 x 38.5 mm',
    weight: '76.0g (2.68 oz)',
    spline: '25T Spline',
    deadband: '1.0 µs',
    motorType: 'High-Torque Brushless Motor',
    bearingType: 'Dual Heavy-Duty Ball Bearings',
    operatingFrequency: '1520 µs / 333 Hz',
    waterproofRating: 'IP67 Submersible Waterproof',
    workingVoltage: '6.0V ~ 8.4V DC Direct HV',
    hornType: 'Reinforced Metal Clamping Horn',
    features: [
      'TS36 强劲无刷输出，36kg-cm扭力压制各种深坎与高附着力障碍',
      '全铝合金中框与高精度密封圈结构，达到 IP67 防水防尘等级',
      '淬火合金钢与钛合金高耐磨齿轮组，耐受极限暴力翻滚与冲撞',
      '支持 USB/OTA 参数调参卡对死区、中位及正反向进行个性化微调'
    ],
    schematicDetails: {
      length: 40.5,
      width: 20.2,
      height: 38.5,
      splineTeeth: 25
    }
  },
  {
    id: 'ts60',
    modelName: 'TS60 SUBMERSIBLE BRUSHLESS',
    category: 'brushless-motor',
    badgeLabel: '60 KG · IP68 潜水级',
    badgeColor: '#38bdf8',
    headline: '60KG IP68 SUBMERSIBLE BRUSHLESS MARINE & CRAWLER SERVO',
    description: 'TS60 60KG无刷防水潜水舵机，双唇硅胶灌封，防腐蚀海洋涂层，2米静水压认证，专为高速RC船模舵机、重型越野攀爬车与水下机器人定制。',
    image: '/assets/aistudio/B3_0434f7fc.jpg',
    specs: {
      '8.4V': {
        speed: '0.110 sec/60°',
        torque: '60.0 kg-cm',
        torqueOzIn: '833.2 oz-in',
        stallCurrent: '6.5 A',
        idleCurrent: '35 mA',
      },
      '7.4V': {
        speed: '0.125 sec/60°',
        torque: '52.0 kg-cm',
        torqueOzIn: '722.1 oz-in',
        stallCurrent: '5.8 A',
        idleCurrent: '30 mA',
      },
      '6.0V': {
        speed: '0.145 sec/60°',
        torque: '44.0 kg-cm',
        torqueOzIn: '611.0 oz-in',
        stallCurrent: '4.8 A',
        idleCurrent: '25 mA',
      },
    },
    gears: 'Hardened Stainless Steel + Marine Bronze',
    dimensions: '40.7 x 20.5 x 39.5 mm',
    weight: '84.0g (2.96 oz)',
    spline: '25T Spline',
    deadband: '1.2 µs',
    motorType: 'High-Torque Brushless Motor',
    bearingType: 'Dual Stainless Steel Shielded Bearings',
    operatingFrequency: '1520 µs / 333 Hz',
    waterproofRating: 'IP68 Certified Submersible 2M',
    workingVoltage: '6.0V ~ 8.4V DC Direct HV',
    hornType: 'Anti-Corrosive CNC Horn Included',
    features: [
      'TS60 具备 IP68 潜水级密封，深水泥泞、溪流浸泡及海水飞溅无忧',
      '不锈钢与高强度海洋青铜齿轮，抵御水下腐蚀与长期高压磨损',
      '60kg-cm 坚挺扭矩，高速船模80+ MPH全速破浪绝不推头',
      '高导热航空铝壳体，连续高负荷水流中保持极佳热平衡'
    ],
    schematicDetails: {
      length: 40.7,
      width: 20.5,
      height: 39.5,
      splineTeeth: 25
    }
  },
  {
    id: 'ts70',
    modelName: 'TS70 MONSTER BRUSHLESS',
    category: 'brushless-motor',
    badgeLabel: '70 KG · 8.4V 霸王扭力',
    badgeColor: '#ec4899',
    headline: '70KG MONSTER HIGH-TORQUE BRUSHLESS SERVO',
    description: 'TS70 70KG巨型无刷怪兽舵机，70.0 kg-cm超强峰值扭矩，全CNC加厚加固铝壳，无触点磁编码，专为1/5巨型汽油车、UAV重载舵面与重型机器人关节设计。',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA03DbImpp1czNp3kFj4QF9yMyHR3RIsbjpqMTHWkGC3UVrHL6IGhK1K4BJ0bQ3RXMA8UY4q7cK0rfNnDN0Krao9AQcBWcWWPAAb6Uf7cn9c95xNADA8jPnMIfBECMSx75_Bx794rBH5OMWIuYhVKGEvusDcGQulDS9PKLmL8tVGV17aoeLThe_0RXWtSs5DTPdxVektO5TtL11D4dqZC2xSPzaKiyGldws-xBwe2l_paT-pqXH0vRKQg',
    specs: {
      '8.4V': {
        speed: '0.120 sec/60°',
        torque: '70.0 kg-cm',
        torqueOzIn: '972.1 oz-in',
        stallCurrent: '7.5 A',
        idleCurrent: '40 mA',
      },
      '7.4V': {
        speed: '0.135 sec/60°',
        torque: '61.0 kg-cm',
        torqueOzIn: '847.1 oz-in',
        stallCurrent: '6.6 A',
        idleCurrent: '35 mA',
      },
      '6.0V': {
        speed: '0.155 sec/60°',
        torque: '52.0 kg-cm',
        torqueOzIn: '722.1 oz-in',
        stallCurrent: '5.5 A',
        idleCurrent: '30 mA',
      },
    },
    gears: 'Full Hardened Steel + Heavy Titanium',
    dimensions: '40.7 x 20.5 x 41.0 mm',
    weight: '88.0g (3.10 oz)',
    spline: '25T Heavy-Duty Spline',
    deadband: '1.0 µs',
    motorType: '4-Pole Heavy Brushless Motor',
    bearingType: 'Dual High-Load Ball Bearings',
    operatingFrequency: '1520 µs / 333 Hz',
    waterproofRating: 'IP67 Submersible Waterproof',
    workingVoltage: '6.0V ~ 8.4V DC Direct HV',
    hornType: '7075-T6 CNC Heavy Clamping Horn',
    features: [
      'TS70 无刷怪兽扭力，70kg-cm输出轻松驱动特大轮胎与重载机械臂',
      '无触点 12位高分辨率磁电编码器，抗强震不抖舵，零碳磨损',
      '全机身 CNC 7075 强化机壳，内部加强筋设计抵抗巨大径向剪切应力',
      '智能热保护与恒流伺服控制电路，长效安全稳定工作'
    ],
    schematicDetails: {
      length: 40.7,
      width: 20.5,
      height: 41.0,
      splineTeeth: 25
    }
  },

  // ==================== 2. 空心杯电机 (CORELESS MOTOR) - 2款 ====================
  {
    id: 'cj0005',
    modelName: 'CJ0005 SPEED CORELESS',
    category: 'coreless-motor',
    badgeLabel: '5.5 KG · 0.050S 极速',
    badgeColor: '#10b981',
    headline: '0.050S ULTRA-HIGH SPEED CORELESS SERVO',
    description: 'CJ0005 空心杯极速数码舵机，0.050s顶尖瞬态速度，日系高效率空心杯电机，启动惯量极低，专为直升机尾舵、微型竞技车与轻量精准航模打造。',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA03DbImpp1czNp3kFj4QF9yMyHR3RIsbjpqMTHWkGC3UVrHL6IGhK1K4BJ0bQ3RXMA8UY4q7cK0rfNnDN0Krao9AQcBWcWWPAAb6Uf7cn9c95xNADA8jPnMIfBECMSx75_Bx794rBH5OMWIuYhVKGEvusDcGQulDS9PKLmL8tVGV17aoeLThe_0RXWtSs5DTPdxVektO5TtL11D4dqZC2xSPzaKiyGldws-xBwe2l_paT-pqXH0vRKQg',
    specs: {
      '8.4V': {
        speed: '0.050 sec/60°',
        torque: '5.5 kg-cm',
        torqueOzIn: '76.4 oz-in',
        stallCurrent: '2.2 A',
        idleCurrent: '18 mA',
      },
      '7.4V': {
        speed: '0.060 sec/60°',
        torque: '4.6 kg-cm',
        torqueOzIn: '63.9 oz-in',
        stallCurrent: '1.9 A',
        idleCurrent: '15 mA',
      },
      '6.0V': {
        speed: '0.072 sec/60°',
        torque: '3.8 kg-cm',
        torqueOzIn: '52.8 oz-in',
        stallCurrent: '1.6 A',
        idleCurrent: '12 mA',
      },
    },
    gears: 'Hardened Metal Gears (Titanium & Aluminum)',
    dimensions: '35.0 x 15.0 x 30.0 mm',
    weight: '35.0g (1.23 oz)',
    spline: '25T Spline',
    deadband: '0.8 µs',
    motorType: 'Japanese High-Efficiency Coreless Motor',
    bearingType: 'Dual Precision Ball Bearings',
    operatingFrequency: '1520 µs / 333 Hz',
    waterproofRating: 'IP65 Splash Proof',
    workingVoltage: '6.0V ~ 8.4V DC High Voltage',
    hornType: 'Micro CNC Metal Horn Included',
    features: [
      'CJ0005 空心杯转子无铁芯，转动惯量极低，加速与制动响应毫无迟滞',
      '0.050s 闪电运转速度，高频锁尾与精准反舵随心所欲',
      '金属精密齿轮组配合双滚珠轴承，大幅降低运转抖动与回中死区',
      '紧凑级中型铝壳结构，轻量化与高结构强度兼备'
    ],
    schematicDetails: {
      length: 35.0,
      width: 15.0,
      height: 30.0,
      splineTeeth: 25
    }
  },
  {
    id: 'cj0009',
    modelName: 'CJ0009 THIN WING CORELESS',
    category: 'coreless-motor',
    badgeLabel: '9G · 8.5MM 超薄翼面',
    badgeColor: '#ec4899',
    headline: '8.5MM ULTRA-SLIM THIN WING CORELESS SERVO',
    description: 'CJ0009 9g级超薄固定翼与滑翔机翼面空心杯舵机，8.5mm纤薄身段，全金属齿轮，0.07s极速，专为碳纤滑翔机F3K/DLG与高敏无人机机翼内嵌安装打造。',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDe2FK2uQz5xWIg_pG_85SvFGypuz5zfp4ssLwrKm4YosPaMBPfIUA3oY9bkNMgzQ-WxxxKEx4HeKwA61zI9h9UBRwN-CN-bsby8wrfQX-X_UZ3ddawehUbIEpA52qE0dhR3AS6DWl712cReXMAh1u7pV5k3ReU_8aRk_aB7w71KeT9kmY5Tgggoo3O0JfLOhwaqnXGxvai-Nu2GfqBQ54Cvnz0Us4yZ3gkCq4CrP5Guxgf6hFlpgobAg',
    specs: {
      '8.4V': {
        speed: '0.070 sec/60°',
        torque: '4.2 kg-cm',
        torqueOzIn: '58.3 oz-in',
        stallCurrent: '0.85 A',
        idleCurrent: '12 mA',
      },
      '7.4V': {
        speed: '0.080 sec/60°',
        torque: '3.5 kg-cm',
        torqueOzIn: '48.6 oz-in',
        stallCurrent: '0.72 A',
        idleCurrent: '10 mA',
      },
      '6.0V': {
        speed: '0.095 sec/60°',
        torque: '2.8 kg-cm',
        torqueOzIn: '38.8 oz-in',
        stallCurrent: '0.60 A',
        idleCurrent: '8 mA',
      },
    },
    gears: 'Hardened Metal Gears (Titanium & Bronze)',
    dimensions: '23.5 x 8.5 x 24.0 mm',
    weight: '9.5g (0.33 oz)',
    spline: '21T Micro Spline',
    deadband: '1.0 µs',
    motorType: 'Coreless Motor Servo',
    bearingType: 'Dual Micro Precision Bearings',
    operatingFrequency: '1520 µs / 333 Hz',
    waterproofRating: 'IP64 Dust & Splash Resistant',
    workingVoltage: '4.8V ~ 8.4V DC Direct HV',
    hornType: 'Aero Glider Wing Horn Set',
    features: [
      'CJ0009 8.5mm 超薄厚度，可直接平嵌埋入薄型复合材料机翼内部',
      '空心杯电机结合精密金属齿，杜绝副翼与升降舵面颤振',
      '仅重 9.5 克，为竞技级滑翔机节省宝贵机载有效载荷',
      '水平双翼平头安装凸耳，机翼安装稳固平整不破坏气动流线'
    ],
    schematicDetails: {
      length: 23.5,
      width: 8.5,
      height: 24.0,
      splineTeeth: 21
    }
  },

  // ==================== 3. 有刷/铁芯电机 (BRUSHED / IRON CORE) - 6款 ====================
  {
    id: 'cj12kg',
    modelName: 'CJ-12KG STANDARD IRON CORE',
    category: 'brushed-iron-core',
    badgeLabel: '12 KG · 铁芯标准款',
    badgeColor: '#f97316',
    headline: '12KG STANDARD BRUSHED IRON CORE SERVO',
    description: 'CJ12KG 有刷铁芯标准数码舵机，12kg-cm稳定扭矩，铜铝金属齿轮，经典耐用铁芯直流电机，为 1/10 训练车架、船模与遥控模型入门主力之选。',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJrzZk1XAymG0fsl-Ka5aaxAnxdjbgA0owj4lBh5mnq9i7EcEbfROp5xmG_c3PHFp_FyCvWlWKgby06unjxzIpdqseHtsG70WxkW-zKE-XHGZzbihAD9EM4OgJlSM1omZzO-agJ8bEUsvRAwhloNoR2B-3HSDFhdBP7r7giRLstn3PgCTTuVpGWBMzSqr72aUaBabojUdlQdFW1BKi8JSRYUzYKcS3IqLgL8hhNtL9PiENGqvBrCj5gw',
    specs: {
      '8.4V': {
        speed: '0.14 sec/60°',
        torque: '12.0 kg-cm',
        torqueOzIn: '166.6 oz-in',
        stallCurrent: '2.2 A',
        idleCurrent: '18 mA',
      },
      '7.4V': {
        speed: '0.16 sec/60°',
        torque: '10.5 kg-cm',
        torqueOzIn: '145.8 oz-in',
        stallCurrent: '1.9 A',
        idleCurrent: '15 mA',
      },
      '6.0V': {
        speed: '0.18 sec/60°',
        torque: '9.0 kg-cm',
        torqueOzIn: '125.0 oz-in',
        stallCurrent: '1.6 A',
        idleCurrent: '12 mA',
      },
    },
    gears: 'Copper & Aluminum Metal Geartrain',
    dimensions: '40.7 x 20.5 x 39.5 mm',
    weight: '55.0g (1.94 oz)',
    spline: '25T Spline',
    deadband: '2.0 µs',
    motorType: 'Brushed / Iron Core DC Motor',
    bearingType: 'Dual Precision Ball Bearings',
    operatingFrequency: '1520 µs / 333 Hz',
    waterproofRating: 'IP65 Splash Proof',
    workingVoltage: '4.8V ~ 8.4V DC',
    hornType: 'Standard Heavy Duty Arm Set',
    features: [
      'CJ12KG 成熟可靠的有刷铁芯电机，输出平稳耐用，故障率极低',
      '全金属混合齿轮架构，相比普通塑料齿轮耐用度提升 10 倍',
      '双滚珠轴承支撑主输出轴，防止长期颠簸导致轴心晃动',
      '性价比优异，适合批量整车出厂配套与日常练习改装'
    ],
    schematicDetails: {
      length: 40.7,
      width: 20.5,
      height: 39.5,
      splineTeeth: 25
    }
  },
  {
    id: 'cj15kg',
    modelName: 'CJ-15KG WORKHORSE IRON CORE',
    category: 'brushed-iron-core',
    badgeLabel: '15 KG · 铁芯性价比主力',
    badgeColor: '#f59e0b',
    headline: '15KG HIGH-RELIABILITY IRON CORE SERVO',
    description: 'CJ15KG 有刷铁芯高性价比数码舵机，15kg-cm充裕扭矩，双球轴承稳固支撑，金属齿轮组，经久耐造，适合1/10越野、大脚车以及各类工业云台摆角。',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJrzZk1XAymG0fsl-Ka5aaxAnxdjbgA0owj4lBh5mnq9i7EcEbfROp5xmG_c3PHFp_FyCvWlWKgby06unjxzIpdqseHtsG70WxkW-zKE-XHGZzbihAD9EM4OgJlSM1omZzO-agJ8bEUsvRAwhloNoR2B-3HSDFhdBP7r7giRLstn3PgCTTuVpGWBMzSqr72aUaBabojUdlQdFW1BKi8JSRYUzYKcS3IqLgL8hhNtL9PiENGqvBrCj5gw',
    specs: {
      '8.4V': {
        speed: '0.14 sec/60°',
        torque: '15.0 kg-cm',
        torqueOzIn: '208.3 oz-in',
        stallCurrent: '2.4 A',
        idleCurrent: '18 mA',
      },
      '7.4V': {
        speed: '0.15 sec/60°',
        torque: '13.0 kg-cm',
        torqueOzIn: '180.5 oz-in',
        stallCurrent: '2.0 A',
        idleCurrent: '15 mA',
      },
      '6.0V': {
        speed: '0.17 sec/60°',
        torque: '11.2 kg-cm',
        torqueOzIn: '155.5 oz-in',
        stallCurrent: '1.7 A',
        idleCurrent: '12 mA',
      },
    },
    gears: 'Hardened Metal Geartrain',
    dimensions: '40.7 x 20.5 x 39.5 mm',
    weight: '58.0g (2.04 oz)',
    spline: '25T Spline',
    deadband: '2.0 µs',
    motorType: 'Brushed / Iron Core DC Motor',
    bearingType: 'Dual Precision Ball Bearings',
    operatingFrequency: '1520 µs / 333 Hz',
    waterproofRating: 'IP65 Splash Proof',
    workingVoltage: '4.8V ~ 8.4V DC',
    hornType: 'Standard Heavy Duty Arm Set',
    features: [
      'CJ15KG 铁芯电机高性价比主力机型，扎实耐打，不惧泥泞与灰尘',
      '加厚金属齿轮与强韧轴心，承受日常越野磕碰与跳跃震荡',
      '铝合金中壳辅助散热，保障连续工作下温度处于安全区间',
      '支持 4.8V 至 8.4V 宽幅工作电压输入，适配各类型接收机与锂电池'
    ],
    schematicDetails: {
      length: 40.7,
      width: 20.5,
      height: 39.5,
      splineTeeth: 25
    }
  },
  {
    id: 'cj17kg',
    modelName: 'CJ-17KG HIGH-TORQUE IRON CORE',
    category: 'brushed-iron-core',
    badgeLabel: '17.5 KG · 经典热销王',
    badgeColor: '#eab308',
    headline: '17.5KG CLASSIC HIGH-TORQUE IRON CORE SERVO',
    description: 'CJ17KG 经典热销有刷铁芯大扭矩舵机，17.5kg-cm强悍堵转力矩，淬火合金金属齿，品质久经市场数十万台实车检验，1/10改装首选神舵。',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJrzZk1XAymG0fsl-Ka5aaxAnxdjbgA0owj4lBh5mnq9i7EcEbfROp5xmG_c3PHFp_FyCvWlWKgby06unjxzIpdqseHtsG70WxkW-zKE-XHGZzbihAD9EM4OgJlSM1omZzO-agJ8bEUsvRAwhloNoR2B-3HSDFhdBP7r7giRLstn3PgCTTuVpGWBMzSqr72aUaBabojUdlQdFW1BKi8JSRYUzYKcS3IqLgL8hhNtL9PiENGqvBrCj5gw',
    specs: {
      '8.4V': {
        speed: '0.13 sec/60°',
        torque: '17.5 kg-cm',
        torqueOzIn: '243.0 oz-in',
        stallCurrent: '2.5 A',
        idleCurrent: '18 mA',
      },
      '7.4V': {
        speed: '0.15 sec/60°',
        torque: '15.5 kg-cm',
        torqueOzIn: '215.2 oz-in',
        stallCurrent: '2.2 A',
        idleCurrent: '15 mA',
      },
      '6.0V': {
        speed: '0.16 sec/60°',
        torque: '13.0 kg-cm',
        torqueOzIn: '180.5 oz-in',
        stallCurrent: '1.9 A',
        idleCurrent: '12 mA',
      },
    },
    gears: 'Hardened Copper & Aluminum Metal Gears',
    dimensions: '40.7 x 20.5 x 39.5 mm',
    weight: '63.0g (2.22 oz)',
    spline: '25T Spline',
    deadband: '2.0 µs',
    motorType: 'High-Torque Iron Core Brushed DC Motor',
    bearingType: 'Dual Precision Ball Bearings',
    operatingFrequency: '1520 µs / 333 Hz',
    waterproofRating: 'IP65 Splash Proof',
    workingVoltage: '4.8V ~ 8.4V DC',
    hornType: 'Standard Heavy Duty Arm Set',
    features: [
      'CJ17KG 全球销量常青树，铁芯动力稳定，极具性价比的大扭矩标准件',
      '优化传动减速齿比，17.5kg-cm 大转向力轻松推动大轮径卡车',
      '双密封滚珠轴承，减少轴心虚位与偏摆，保障长久居中精度',
      '广泛应用于短卡、大脚、攀爬车以及各种自动化教具机械臂'
    ],
    schematicDetails: {
      length: 40.7,
      width: 20.5,
      height: 39.5,
      splineTeeth: 25
    }
  },
  {
    id: 'cj35kg',
    modelName: 'CJ-35KG STEEL GEAR IRON CORE',
    category: 'brushed-iron-core',
    badgeLabel: '35 KG · 全钢齿抗冲击',
    badgeColor: '#f97316',
    headline: '35KG STEEL GEAR IMPACT-PROOF IRON CORE SERVO',
    description: 'CJ35KG 有刷铁芯淬火全钢齿轮舵机，35kg-cm重载力矩，耐高温铁芯强磁电机，全钢齿轮抗爆齿设计，专治暴力越野大脚撞击与重负荷攀爬卡石。',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJrzZk1XAymG0fsl-Ka5aaxAnxdjbgA0owj4lBh5mnq9i7EcEbfROp5xmG_c3PHFp_FyCvWlWKgby06unjxzIpdqseHtsG70WxkW-zKE-XHGZzbihAD9EM4OgJlSM1omZzO-agJ8bEUsvRAwhloNoR2B-3HSDFhdBP7r7giRLstn3PgCTTuVpGWBMzSqr72aUaBabojUdlQdFW1BKi8JSRYUzYKcS3IqLgL8hhNtL9PiENGqvBrCj5gw',
    specs: {
      '8.4V': {
        speed: '0.12 sec/60°',
        torque: '35.0 kg-cm',
        torqueOzIn: '486.0 oz-in',
        stallCurrent: '4.5 A',
        idleCurrent: '30 mA',
      },
      '7.4V': {
        speed: '0.14 sec/60°',
        torque: '30.0 kg-cm',
        torqueOzIn: '416.6 oz-in',
        stallCurrent: '3.8 A',
        idleCurrent: '25 mA',
      },
      '6.0V': {
        speed: '0.16 sec/60°',
        torque: '25.0 kg-cm',
        torqueOzIn: '347.2 oz-in',
        stallCurrent: '3.2 A',
        idleCurrent: '20 mA',
      },
    },
    gears: 'Induction-Hardened Steel Gear Train',
    dimensions: '40.5 x 20.2 x 38.5 mm',
    weight: '72.0g (2.54 oz)',
    spline: '25T Spline',
    deadband: '1.5 µs',
    motorType: 'High-Power Iron Core DC Motor',
    bearingType: 'Dual Heavy Duty Sealed Bearings',
    operatingFrequency: '1520 µs / 333 Hz',
    waterproofRating: 'IP66 Water Resistant',
    workingVoltage: '6.0V ~ 8.4V DC',
    hornType: 'Reinforced Metal Horn Set Included',
    features: [
      'CJ35KG 淬火硬化全钢齿轮，彻底告别打齿烦恼，抗撞击强度提升 300%',
      '35kg-cm 超强保持力矩，大比例攀爬死抠岩石不退缩',
      '数码芯片驱动，响应迅猛回中准，抑制抖舵发热',
      'CNC 铝合金散热中壳，加粗引出线，经受极端野外暴力摧残'
    ],
    schematicDetails: {
      length: 40.5,
      width: 20.2,
      height: 38.5,
      splineTeeth: 25
    }
  },
  {
    id: 'cj45kg',
    modelName: 'CJ-45KG GIANT SCALE IRON CORE',
    category: 'brushed-iron-core',
    badgeLabel: '45 KG · 1/5 汽油巨型',
    badgeColor: '#ff525f',
    headline: '45KG 1/5 GIANT SCALE STEEL GEAR IRON CORE SERVO',
    description: 'CJ45KG 1/5大比例有刷铁芯巨型舵机，45kg-cm强悍大扭矩，高功率铁芯马达，重型全钢齿，专为 1/5 Baja 汽油车转向与大型工业机器人关节重载设计。',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJrzZk1XAymG0fsl-Ka5aaxAnxdjbgA0owj4lBh5mnq9i7EcEbfROp5xmG_c3PHFp_FyCvWlWKgby06unjxzIpdqseHtsG70WxkW-zKE-XHGZzbihAD9EM4OgJlSM1omZzO-agJ8bEUsvRAwhloNoR2B-3HSDFhdBP7r7giRLstn3PgCTTuVpGWBMzSqr72aUaBabojUdlQdFW1BKi8JSRYUzYKcS3IqLgL8hhNtL9PiENGqvBrCj5gw',
    specs: {
      '8.4V': {
        speed: '0.15 sec/60°',
        torque: '45.0 kg-cm',
        torqueOzIn: '624.9 oz-in',
        stallCurrent: '4.8 A',
        idleCurrent: '30 mA',
      },
      '7.4V': {
        speed: '0.17 sec/60°',
        torque: '40.0 kg-cm',
        torqueOzIn: '555.5 oz-in',
        stallCurrent: '4.2 A',
        idleCurrent: '25 mA',
      },
      '6.0V': {
        speed: '0.19 sec/60°',
        torque: '35.0 kg-cm',
        torqueOzIn: '486.0 oz-in',
        stallCurrent: '3.6 A',
        idleCurrent: '20 mA',
      },
    },
    gears: 'Hardened Steel + Heavy Copper Alloy',
    dimensions: '59.5 x 29.5 x 54.0 mm',
    weight: '160.0g (5.64 oz)',
    spline: '17T Large Scale Spline',
    deadband: '2.0 µs',
    motorType: 'High-Power Iron Core Brushed Motor',
    bearingType: 'Dual Heavy Duty Sealed Ball Bearings',
    operatingFrequency: '1520 µs / 333 Hz',
    waterproofRating: 'IP66 Water Resistant',
    workingVoltage: '6.0V ~ 8.4V DC',
    hornType: 'Oversized Reinforced Dual Arm & Round Horn',
    features: [
      'CJ45KG 1/5 汽油大脚专用规格（59.5 x 29.5 x 54.0 mm），体型威猛',
      '超厚全钢减速齿，抵御汽油机狂暴震动与巨大路面反冲',
      '双高负荷滚珠轴承，承受大比例巨型车轮转向拉杆巨大径向力',
      '广泛配套于 1/5 Baja、汽油越野车及重载工业摆动机构'
    ],
    schematicDetails: {
      length: 59.5,
      width: 29.5,
      height: 54.0,
      splineTeeth: 17
    }
  },
  {
    id: 'cj60kg',
    modelName: 'CJ-60KG ULTRA-GIANT IRON CORE',
    category: 'brushed-iron-core',
    badgeLabel: '60 KG · 超大扭矩工业级',
    badgeColor: '#dc2626',
    headline: '60KG ULTRA-GIANT HEAVY-DUTY IRON CORE SERVO',
    description: 'CJ60KG 60公斤特大扭矩有刷铁芯巨型舵机，高负荷工业级钢齿，超大散热铝壳，专为重型工业自动化机械手、大型汽油大脚与无人特种车辆重载转向打造。',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJrzZk1XAymG0fsl-Ka5aaxAnxdjbgA0owj4lBh5mnq9i7EcEbfROp5xmG_c3PHFp_FyCvWlWKgby06unjxzIpdqseHtsG70WxkW-zKE-XHGZzbihAD9EM4OgJlSM1omZzO-agJ8bEUsvRAwhloNoR2B-3HSDFhdBP7r7giRLstn3PgCTTuVpGWBMzSqr72aUaBabojUdlQdFW1BKi8JSRYUzYKcS3IqLgL8hhNtL9PiENGqvBrCj5gw',
    specs: {
      '8.4V': {
        speed: '0.16 sec/60°',
        torque: '60.0 kg-cm',
        torqueOzIn: '833.2 oz-in',
        stallCurrent: '5.5 A',
        idleCurrent: '35 mA',
      },
      '7.4V': {
        speed: '0.18 sec/60°',
        torque: '52.0 kg-cm',
        torqueOzIn: '722.1 oz-in',
        stallCurrent: '4.8 A',
        idleCurrent: '30 mA',
      },
      '6.0V': {
        speed: '0.20 sec/60°',
        torque: '45.0 kg-cm',
        torqueOzIn: '624.9 oz-in',
        stallCurrent: '4.0 A',
        idleCurrent: '25 mA',
      },
    },
    gears: 'Ultra-Heavy Hardened Induction Steel',
    dimensions: '59.5 x 29.5 x 54.0 mm',
    weight: '175.0g (6.17 oz)',
    spline: '17T Large Scale Spline',
    deadband: '2.0 µs',
    motorType: 'Ultra-High-Power Iron Core DC Motor',
    bearingType: 'Dual High-Load Angular Contact Bearings',
    operatingFrequency: '1520 µs / 333 Hz',
    waterproofRating: 'IP66 Industrial Sealed',
    workingVoltage: '6.0V ~ 8.4V DC',
    hornType: 'Reinforced 1/5 Giant Metal Horn',
    features: [
      'CJ60KG 60公斤极限铁芯扭矩，轻松驱动重型工业机械与巨型转向总成',
      '特种模数强化全钢齿轮，抗疲劳与抗剪切能力达到工业级标准',
      '超厚铝合金金属外壳，高强度肋板设计，卓越的结构刚性与散热性',
      '大行程稳定运行，支持长寿命高负荷工业循环往复动作'
    ],
    schematicDetails: {
      length: 59.5,
      width: 29.5,
      height: 54.0,
      splineTeeth: 17
    }
  }
];
