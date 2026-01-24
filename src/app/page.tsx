import AuthorSection from '@/components/landing/author-section';
import BenefitsSection from '@/components/landing/benefits-section';
import FaqSection from '@/components/landing/faq-section';
import FloatingBuyButton from '@/components/landing/floating-buy-button';
import Footer from '@/components/landing/footer';
import Header from '@/components/landing/header';
import HeroSection from '@/components/landing/hero-section';

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <BenefitsSection />
        <AuthorSection />
        <FaqSection />
      </main>
      <Footer />
      <FloatingBuyButton />
    </div>
  );
}
