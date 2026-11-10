import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DisciplinesSection } from './components/DisciplinesSection';
import { CatalogSection } from './components/CatalogSection';
import { ChampionshipSection } from './components/ChampionshipSection';
import { InnovationsSection } from './components/InnovationsSection';
import { MediaSection } from './components/MediaSection';
import { DealerSection } from './components/DealerSection';
import { AboutPage } from './components/AboutPage';
import { DownloadsPage } from './components/DownloadsPage';
import { NewsPage } from './components/NewsPage';
import { ProductsPage } from './components/ProductsPage';
import { ServicePage } from './components/ServicePage';
import { Footer } from './components/Footer';
import { MiddlePromoBanner } from './components/MiddlePromoBanner';
import { DatasheetModal } from './components/DatasheetModal';
import { CadModal } from './components/CadModal';
import { OtaTuningModal } from './components/OtaTuningModal';
import { DistributorModal } from './components/DistributorModal';
import { VideoModal } from './components/VideoModal';
import { SearchModal } from './components/SearchModal';
import { NewsArticleModal } from './components/NewsArticleModal';
import { CatalogPdfModal } from './components/CatalogPdfModal';
import { Product, VoltageType, NewsItem } from './types';
import { PRODUCTS } from './data/products';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'about' | 'downloads' | 'news' | 'products' | 'service'>('home');
  const [selectedVoltage, setSelectedVoltage] = useState<VoltageType>('8.4V');
  const [selectedCategory, setSelectedCategory] = useState<string>('brushless-motor');
  const [activeDatasheetProduct, setActiveDatasheetProduct] = useState<Product | null>(null);
  const [activeCadProduct, setActiveCadProduct] = useState<Product | null>(null);
  const [isOtaTunerOpen, setIsOtaTunerOpen] = useState<boolean>(false);
  const [isDistributorModalOpen, setIsDistributorModalOpen] = useState<boolean>(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState<boolean>(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);
  const [isPdfCatalogModalOpen, setIsPdfCatalogModalOpen] = useState<boolean>(false);
  const [selectedNewsArticle, setSelectedNewsArticle] = useState<NewsItem | null>(null);
  const [activeLanguage, setActiveLanguage] = useState<string>('en');

  // Handle URL hash routing (#about vs #downloads vs #news vs #products vs #service vs home)
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#about') {
        setCurrentView('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (window.location.hash === '#downloads') {
        setCurrentView('downloads');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (window.location.hash === '#news') {
        setCurrentView('news');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (window.location.hash === '#products') {
        setCurrentView('products');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (window.location.hash === '#service') {
        setCurrentView('service');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (window.location.hash === '#home' || window.location.hash === '') {
        // Keep current view or home
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Global Ctrl+K / Cmd+K listener for quick search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchModalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpenDatasheetStorm75 = () => {
    const ts27 = PRODUCTS.find((p) => p.id === 'ts27') || PRODUCTS[0];
    setActiveDatasheetProduct(ts27);
  };

  const handleNavigate = (view: 'home' | 'about' | 'downloads' | 'news' | 'products' | 'service') => {
    setCurrentView(view);
    if (view === 'about') {
      window.location.hash = '#about';
    } else if (view === 'downloads') {
      window.location.hash = '#downloads';
    } else if (view === 'news') {
      window.location.hash = '#news';
    } else if (view === 'products') {
      window.location.hash = '#products';
    } else if (view === 'service') {
      window.location.hash = '#service';
    } else {
      window.location.hash = '#';
    }
  };

  return (
    <div className="min-h-screen bg-[#10141a] text-[#dfe2eb] flex flex-col font-body selection:bg-[#ff525f] selection:text-white">
      {/* Primary Header */}
      <Header
        onOpenSearch={() => setIsSearchModalOpen(true)}
        onOpenDistributor={() => setIsDistributorModalOpen(true)}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          if (currentView !== 'home' && currentView !== 'products') {
            setCurrentView('products');
          }
        }}
        activeLanguage={activeLanguage}
        setActiveLanguage={setActiveLanguage}
        currentView={currentView}
        onNavigate={handleNavigate}
      />

      {/* Main Content View Switcher */}
      <main className="w-full flex-1">
        {currentView === 'about' ? (
          <AboutPage
            onOpenDistributor={() => setIsDistributorModalOpen(true)}
            onNavigateHome={() => handleNavigate('home')}
          />
        ) : currentView === 'downloads' ? (
          <DownloadsPage
            onNavigateHome={() => handleNavigate('home')}
            onOpenDistributor={() => setIsDistributorModalOpen(true)}
          />
        ) : currentView === 'news' ? (
          <NewsPage
            onNavigateHome={() => handleNavigate('home')}
            onOpenArticle={(item) => setSelectedNewsArticle(item)}
            onOpenVideo={() => setIsVideoModalOpen(true)}
          />
        ) : currentView === 'products' ? (
          <ProductsPage
            onNavigateHome={() => handleNavigate('home')}
            onOpenDatasheet={(product) => setActiveDatasheetProduct(product)}
            onOpenCad={(product) => setActiveCadProduct(product)}
            onOpenDistributor={() => setIsDistributorModalOpen(true)}
            onOpenPdfCatalog={() => setIsPdfCatalogModalOpen(true)}
            selectedCategory={selectedCategory}
            onSelectCategory={(cat) => setSelectedCategory(cat)}
            selectedVoltage={selectedVoltage}
            setSelectedVoltage={setSelectedVoltage}
          />
        ) : currentView === 'service' ? (
          <ServicePage
            onNavigateHome={() => handleNavigate('home')}
            onOpenDistributor={() => setIsDistributorModalOpen(true)}
            onOpenSearch={() => setIsSearchModalOpen(true)}
          />
        ) : (
          <>
            {/* Hero Big Advertisement Banner */}
            <Hero
              onOpenPdfCatalog={() => setIsPdfCatalogModalOpen(true)}
              onOpenDatasheetStorm75={handleOpenDatasheetStorm75}
              onSelectCategory={(cat) => {
                setSelectedCategory(cat);
                handleNavigate('products');
              }}
              onNavigate={handleNavigate}
              onOpenDistributor={() => setIsDistributorModalOpen(true)}
            />

            {/* Six RC & Automation Specialty Disciplines */}
            <DisciplinesSection
              onSelectCategory={(cat) => setSelectedCategory(cat)}
            />

            {/* Complete Parametric Product Lineup */}
            <CatalogSection
              selectedCategory={selectedCategory}
              onSelectCategory={(cat) => setSelectedCategory(cat)}
              onOpenDatasheet={(product) => setActiveDatasheetProduct(product)}
              onOpenCad={(product) => setActiveCadProduct(product)}
              voltage={selectedVoltage}
              setVoltage={setSelectedVoltage}
            />

            {/* Middle Section Grand Full-Bleed Advertisement Banner (中间大的通屏广告BANNER) */}
            <MiddlePromoBanner
              featuredProduct={PRODUCTS.find((p) => p.id === 'ts27') || PRODUCTS[0]}
              onOpenDatasheet={(product) => setActiveDatasheetProduct(product)}
              onNavigateProducts={(cat) => {
                setSelectedCategory(cat || 'brushless-motor');
                handleNavigate('products');
              }}
              onOpenDistributor={() => setIsDistributorModalOpen(true)}
            />

            {/* Global Racing Heritage & Thermal Stability Chart */}
            <ChampionshipSection />

            {/* Proprietary Engineering Patents & Innovations */}
            <InnovationsSection
              onOpenOtaTuner={() => setIsOtaTunerOpen(true)}
            />

            {/* Field Updates & Latest Factory Media */}
            <MediaSection
              onOpenVideo={() => setIsVideoModalOpen(true)}
              onOpenArticle={(item) => setSelectedNewsArticle(item)}
              onNavigateNews={() => handleNavigate('news')}
            />

            {/* Join Distributor Network & Territory Locator */}
            <DealerSection
              onOpenDistributor={() => setIsDistributorModalOpen(true)}
              onOpenSearch={() => setIsSearchModalOpen(true)}
            />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer
        onOpenDistributor={() => setIsDistributorModalOpen(true)}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          if (currentView !== 'home') setCurrentView('home');
        }}
        onNavigate={handleNavigate}
      />

      {/* Interactive Modals */}
      <DatasheetModal
        product={activeDatasheetProduct}
        selectedVoltage={selectedVoltage}
        onClose={() => setActiveDatasheetProduct(null)}
      />

      <CadModal
        product={activeCadProduct}
        onClose={() => setActiveCadProduct(null)}
      />

      <OtaTuningModal
        isOpen={isOtaTunerOpen}
        onClose={() => setIsOtaTunerOpen(false)}
      />

      <DistributorModal
        isOpen={isDistributorModalOpen}
        onClose={() => setIsDistributorModalOpen(false)}
      />

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onSelectProduct={(product) => setActiveDatasheetProduct(product)}
        onSelectDiscipline={(category) => setSelectedCategory(category)}
      />

      <NewsArticleModal
        article={selectedNewsArticle}
        onClose={() => setSelectedNewsArticle(null)}
      />

      <CatalogPdfModal
        isOpen={isPdfCatalogModalOpen}
        onClose={() => setIsPdfCatalogModalOpen(false)}
      />
    </div>
  );
}
