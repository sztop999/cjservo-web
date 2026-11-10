import React, { useState } from 'react';
import { 
  Trophy, 
  Calendar, 
  Search, 
  Play, 
  ChevronRight, 
  ArrowRight, 
  Filter, 
  Flame, 
  Cpu, 
  Building2, 
  Layers,
  Sparkles,
  Share2
} from 'lucide-react';
import { NewsItem } from '../types';

interface NewsPageProps {
  onNavigateHome: () => void;
  onOpenArticle: (item: NewsItem) => void;
  onOpenVideo: () => void;
}

type NewsCategory = 'all' | 'race' | 'factory' | 'lab' | 'product';

export const NewsPage: React.FC<NewsPageProps> = ({
  onNavigateHome,
  onOpenArticle,
  onOpenVideo
}) => {
  const [selectedCategory, setSelectedCategory] = useState<NewsCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const articles: (NewsItem & { categoryType: NewsCategory; readTime: string; author: string })[] = [
    {
      id: 'efra-podium',
      category: 'RACE RESULTS',
      categoryType: 'race',
      dateTag: 'OCTOBER 24, 2024 • PIT REPORT',
      readTime: '4 min read',
      author: 'Racing Operations Team',
      title: 'CJ.SERVO Dominates EFRA 1/10 Electric Touring Podium',
      summary: 'Double TQ and 1st place overall finish powered by the ultra-low latency TS15 HV brushless low-profile servo on indoor high-grip carpet.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkITP7U4ngZPHHh0B95vMTbijS4a5PrzxtvE6FOvLj6IsIYHieZCUSwcrCF2lghtFfcRJZV77NxPNxlnfSu00KDMZcSNvOl99xYjx19gBIu8nSZKBNHjVjl7s_6UN7y77L8afoWUssibmnzkuayWxLjqkoladgPX3imWx46jE0bvs0gbfYLFSVzoDQL7GKn0-ju2X9KKF4DJZLZpfwHaYMrR4CbT_f7Rw6pQNzeftZUAyZtPg8O7aJvQ',
      content: 'At the 2024 EFRA European Electric Touring Championships, CJ.SERVO factory pilots dominated both Modified and Stock classes. The ultra-low latency TS15 HV low-profile servo delivered razor-sharp turn-in precision and sub-millisecond return-to-center repeatability across all five rounds of qualifying and triple A-mains. Even under the grueling 35°C track conditions and intense tire grip roll, zero thermal drift or servo fade was registered.'
    },
    {
      id: 'factory-expansion',
      category: 'FACTORY REPORT',
      categoryType: 'factory',
      dateTag: 'SEPTEMBER 12, 2024 • PRODUCTION',
      readTime: '5 min read',
      author: 'Chaojia Intelligent Engineering Desk',
      title: 'Dongguan Chaojia Intelligent Expands 5-Axis CNC Milling Center',
      summary: 'New precision robotics machinery triples internal manufacturing capacity for 7075-T6 titanium gearsets and specialized UAV custom actuator housings.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeCtNblfAEi49QhsfyKg8DL-PUJr8nzmhS__GOxNWczywtRrUh6dgW_zdSvb7X9uqJx-KJu_564hvHXQX2V3EBPPnIR6FS1mWJy1fRLmgLfqmAiEDNNxcuKkp9EbyUrm1RZYQa3VUR-njxp_k9VIeca_0zCCApAHN7XBomPVVPmusHPStFHKlzIWpLUMXPF39Ilb8QhCi_JmsHHbGxTYWeEwK5yXmGTBZ3fd9HrPWjd8tdNg1v7-_FxA',
      content: 'Our Dongguan manufacturing campus has completed commissioning of twelve new Japanese DMG MORI 5-axis CNC machining centers. This dedicated high-precision facility elevates gear hobbing tolerances to DIN class 4, while expanding monthly billet 7075-T6 servo housing production to over 150,000 units. The facility strictly adheres to ISO9001:2015 quality control benchmarks.'
    },
    {
      id: 'torture-lab-video',
      category: 'ENGINEERING LAB • VIDEO BENCH',
      categoryType: 'lab',
      dateTag: 'OCTOBER 08, 2024 • VIDEO BENCH',
      readTime: '04:32 4K UHD',
      author: 'Reliability Testing Dept.',
      title: 'Torture Lab: STORM-75 Submerged 2-Meter Pressure Test',
      summary: 'Watch our quality assurance engineers push our IP67 sealing and titanium gear train past 100 continuous stall hours under pressurized water.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1eB0Fz0tWkSfnMbB6qvLKm0etSZE07XuwprMUp1OX0E27CWrjwaLlp17-5uDzrD6hWzxei9dFxUboPh70SOpJL0Wbot_OiZAnjwXp2XdkzkfLwK83hB07ux3TOHVf0XZB3w-9b4_tSY76_ZsuiC1hFySipEDVRea_7FC5vDtbCDoyJxmCtVOlzEiGmqUu9PniIWcb-qNWZCiNB_DL9-jJAuIiRwILSd-yQ-3AJtlsh7rODgGiri4B2g',
      isMediaVideo: true,
      videoDuration: '04:32 • 4K UHD',
      content: 'In our environmental stress testing chamber, the STORM-75PRO was immersed into a 2.0-meter pressurized column filled with standard saline solution. The servo was commanded through continuous 60° back-and-forth stall cycles under an 8.4V LiPo power rail. After 100 hours of continuous operation, post-test disassembly showed zero internal condensation or oil breakdown.'
    },
    {
      id: 'roar-nationals',
      category: 'RACE RESULTS',
      categoryType: 'race',
      dateTag: 'AUGUST 18, 2024 • US NATIONALS',
      readTime: '3 min read',
      author: 'North American Field Rep',
      title: 'ROAR 1/8 Nitro Off-Road Nationals: Hall Sensors Survive 60-Min Brutal Final',
      summary: 'Extreme dust and jump impacts test our contactless magnetic encoders to the limit during the 60-minute nitro buggy A-Main final.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8xDVLzFaj41m3fpGYWYOzhvfn1WN6ZWtNF-9nyPtqw5BMn7Yj5hR-66DbqQG4ar5L5g_8xOdHWBF_MFaoFpftjiYmiVkaUI0hvaCpkSD805wea8U0_K--uaRhDWnRusUeFiWTx3zp-qRCh5lC-XSi0QYYjB8ILjKX56Lb4wImHzBMa-wnYZ_dm9CnFh3HrEMjBf4YsYR0XHbmCqQSkLKONtLtpPu5WfOnla06DV9a48CU_SuoghyjHg',
      content: 'At the ROAR 1/8 Fuel Off-Road National Championships, the grueling 60-minute Pro Buggy Main final witnessed 40-degree heat and rock-hard clay ruts. The CJSERVO magnetic encoder servos maintained zero jitter and exact trim center through 58 jumps per lap without mechanical pot degradation.'
    },
    {
      id: 'tr4-crawler-launch',
      category: 'PRODUCT LAUNCH',
      categoryType: 'product',
      dateTag: 'JULY 22, 2024 • NEW HARDWARE',
      readTime: '4 min read',
      author: 'Product R&D Division',
      title: 'TR-4 Mini Waterproof Line Released for Traxxas TRX-4/6 Chassis',
      summary: 'Drop-in metal-gear micro servos engineered specifically for shift mechanisms and T-Lock differentials with extended waterproof wire harnesses.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDe2FK2uQz5xWIg_pG_85SvFGypuz5zfp4ssLwrKm4YosPaMBPfIUA3oY9bkNMgzQ-WxxxKEx4HeKwA61zI9h9UBRwN-CN-bsby8wrfQX-X_UZ3ddawehUbIEpA52qE0dhR3AS6DWl712cReXMAh1u7pV5k3ReU_8aRk_aB7w71KeT9kmY5Tgggoo3O0JfLOhwaqnXGxvai-Nu2GfqBQ54Cvnz0Us4yZ3gkCq4CrP5Guxgf6hFlpgobAg',
      content: 'Traxxas scale crawler enthusiasts have long demanded a heavy-duty mini servo that eliminates broken plastic shift gears. The new CJ TR-4 Mini HV incorporates hardened copper metal gearsets, O-ring sealed cases, and high-temp silicone wiring to withstand swamp trails and deep water crossings.'
    },
    {
      id: 'ros2-package',
      category: 'ENGINEERING & TECH LAB',
      categoryType: 'lab',
      dateTag: 'NOVEMBER 04, 2024 • ROBOTICS',
      readTime: '6 min read',
      author: 'Smart Actuator Software Team',
      title: 'Open-Source ROS2 Control Hardware Interface for RS485-M50 Smart Actuators',
      summary: 'Connecting humanoid walkers, robotic quadruped arms, and industrial grippers with seamless ros2_control communication drivers.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9WU9PEAtX8-M6muqrXRj9drZt8x8gKokXRKq-z3P_Vvwz1fQdFLqAn2gOra3U0xsBnt8xfYTvArFYQLlenFTIv8moh33sOYLXOKJpxYSqYyL4zMR4W5k2SvHjV5YvBprFZSeqfyhwPL9P9KQtq3oLC-cmndAOst77lcoHDDklvInxnEmcBDDyxvMmDZdMC9NE7XMHakFE6mJ8WMUgCcTDg5slZsUrpavfMTLaDP1tLQjntRq7rcSPcA',
      content: 'To empower universities and automation laboratories building next-generation bipedal and quadruped robotics, CJSERVO has released the official ROS2 hardware package on GitHub. Developers can now daisy-chain up to 254 multi-turn actuators over RS485 or CAN bus and query joint angles with 4096-step precision.'
    }
  ];

  const filteredArticles = articles.filter((a) => {
    const matchesCategory = selectedCategory === 'all' || a.categoryType === selectedCategory;
    const matchesQuery = 
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const featured = articles[0];

  return (
    <div className="w-full bg-[#10141a] pt-28 pb-20">
      {/* Breadcrumb Header */}
      <div className="w-full bg-[#0a0e14] border-b border-[#1c2026]">
        <div className="max-w-[1360px] mx-auto px-6 py-3 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2 text-slate-400">
            <button 
              onClick={onNavigateHome}
              className="text-slate-300 hover:text-[#38bdf8] transition-colors"
            >
              CJSERVO Portal
            </button>
            <span className="text-slate-600">/</span>
            <span className="text-white font-bold">News & Factory Field Media</span>
          </div>
          <span className="text-[#38bdf8] hidden sm:inline-block">
            Official Factory Racing & Manufacturing Dispatches
          </span>
        </div>
      </div>

      <div className="max-w-[1360px] mx-auto px-6 pt-12 space-y-12">
        {/* Hero Section Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-[#181c22] text-[#38bdf8] font-mono text-xs uppercase tracking-wider rounded border border-[#262a31] flex items-center gap-1.5 font-bold">
              <Trophy className="w-3.5 h-3.5 text-[#38bdf8]" />
              PRESS & FIELD DISPATCHES
            </span>
            <span className="px-3 py-1 bg-[#181c22] text-white font-mono text-xs uppercase tracking-wider rounded border border-[#262a31]">
              UPDATED WEEKLY
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-[1.15]">
            RACING DISPATCHES, FACTORY UPDATES & MEDIA
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Championship race reports from IFMAR / EFRA podiums, internal 5-axis CNC manufacturing developments, environmental testing lab logs, and technical press releases.
          </p>
        </div>

        {/* Featured Hero Story Card */}
        <div 
          onClick={() => onOpenArticle(featured)}
          className="relative bg-[#141820] hover:bg-[#181c22] rounded-2xl overflow-hidden border border-[#262a31] hover:border-[#38bdf8]/40 transition-all duration-300 cursor-pointer shadow-2xl group grid grid-cols-1 lg:grid-cols-12"
        >
          <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-black">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141820] via-transparent to-transparent lg:hidden"></div>
            <span className="absolute top-4 left-4 bg-[#ff525f] text-white font-mono text-xs uppercase px-3 py-1 rounded font-bold shadow-lg">
              FEATURED STORY · {featured.category}
            </span>
          </div>

          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-[#38bdf8]">
                  <Calendar className="w-3.5 h-3.5" /> {featured.dateTag}
                </span>
                <span>•</span>
                <span>{featured.readTime}</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-white uppercase group-hover:text-[#38bdf8] transition-colors leading-snug">
                {featured.title}
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {featured.summary}
              </p>
            </div>

            <div className="pt-4 border-t border-[#262a31] flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">{featured.author}</span>
              <span className="text-[#38bdf8] font-bold uppercase flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Read Full Dispatch <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="bg-[#141820] p-4 sm:p-6 rounded-2xl border border-[#262a31] shadow-xl space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles, races, CNC, models (e.g. EFRA, STORM-75, ROS2)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#10141a] border border-[#262a31] rounded-lg pl-10 pr-4 py-2 text-white placeholder:text-slate-500 font-mono text-xs focus:outline-none focus:border-[#38bdf8]"
              />
            </div>

            {/* Quick Result Count */}
            <div className="font-mono text-xs text-slate-400">
              Showing <strong className="text-white">{filteredArticles.length}</strong> dispatches & reports
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none font-mono text-xs">
            {[
              { id: 'all', label: 'All Dispatches', icon: Layers },
              { id: 'race', label: 'Race Results & IFMAR', icon: Trophy },
              { id: 'factory', label: 'Factory & Manufacturing', icon: Building2 },
              { id: 'lab', label: 'Engineering & Lab', icon: Cpu },
              { id: 'product', label: 'Product Releases', icon: Flame }
            ].map((cat) => {
              const IconComp = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as NewsCategory)}
                  className={`px-3.5 py-2 rounded-lg font-bold uppercase transition-all whitespace-nowrap flex items-center gap-1.5 ${
                    selectedCategory === cat.id
                      ? 'bg-[#38bdf8] text-black shadow-md shadow-cyan-500/20'
                      : 'bg-[#181c22] text-slate-400 hover:text-white border border-[#262a31]'
                  }`}
                >
                  <IconComp className="w-3.5 h-3.5" />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => {
                if (article.isMediaVideo) {
                  onOpenVideo();
                } else {
                  onOpenArticle(article);
                }
              }}
              className="bg-[#141820] hover:bg-[#181c22] rounded-xl overflow-hidden flex flex-col border border-[#262a31] hover:border-[#38bdf8]/40 transition-all duration-300 shadow-lg cursor-pointer group"
            >
              <div className="relative w-full aspect-video bg-[#0a0e14] overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={article.title}
                  src={article.image}
                />
                <span className="absolute top-3 left-3 bg-[#10141a]/90 backdrop-blur-sm text-white border border-[#262a31] font-mono text-[10px] px-2.5 py-0.5 rounded font-bold uppercase">
                  {article.category}
                </span>

                {article.isMediaVideo && (
                  <>
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                      <div className="w-14 h-14 rounded-full bg-[#ff525f] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 fill-current ml-1" />
                      </div>
                    </div>
                    <span className="absolute bottom-3 right-3 bg-[#10141a]/90 text-white font-mono text-[10px] px-2 py-0.5 rounded border border-[#262a31]">
                      {article.videoDuration}
                    </span>
                  </>
                )}
              </div>

              <div className="p-5 flex flex-col gap-2 flex-1 justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>{article.dateTag}</span>
                    <span className="text-slate-500">{article.readTime}</span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-[#38bdf8] transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#262a31] flex items-center justify-between text-xs font-mono text-[#38bdf8] font-bold uppercase">
                  <span>{article.isMediaVideo ? 'Watch Video Report' : 'Read Article'}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter & Race Dispatch Subscription Box */}
        <div className="bg-[#141820] rounded-2xl p-6 sm:p-10 border border-[#262a31] flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 max-w-xl">
            <span className="font-mono text-xs uppercase text-[#38bdf8] tracking-widest font-bold">
              STAY TUNED TO THE CIRCUIT
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
              Subscribe to Factory Bulletins & Racing Telemetry
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Get official notifications regarding firmware updates, EFRA/IFMAR team setups, and technical advisories direct to your inbox.
            </p>
          </div>

          {isSubscribed ? (
            <div className="bg-[#10141a] border border-[#22c55e]/40 text-[#4ade80] px-5 py-3 rounded-lg font-mono text-xs flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#22c55e]"></span>
              Subscribed! Official bulletins and telemetry will be sent to your inbox.
            </div>
          ) : (
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                setIsSubscribed(true);
              }}
              className="flex items-center gap-2 w-full md:w-auto"
            >
              <input
                type="email"
                required
                placeholder="Enter your engineer email..."
                className="bg-[#10141a] border border-[#262a31] rounded-lg px-4 py-2.5 text-white placeholder:text-slate-500 font-mono text-xs focus:outline-none focus:border-[#38bdf8] w-full md:w-64"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-[#ff525f] hover:bg-[#ff3b30] text-white font-mono text-xs uppercase font-bold rounded transition-colors whitespace-nowrap shadow-md shadow-red-500/20"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
