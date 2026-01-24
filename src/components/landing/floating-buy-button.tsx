'use client';
import { Button } from '@/components/ui/button';
import { CreditCard } from 'lucide-react';

interface FloatingBuyButtonProps {
  isOfferAccepted: boolean;
}

export default function FloatingBuyButton({ isOfferAccepted }: FloatingBuyButtonProps) {
  return (
    <div
      id="buy"
      className="sticky bottom-0 z-50 mt-auto w-full border-t border-border/40 bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden"
    >
      <Button
        className="w-full"
        size="lg"
        disabled={!isOfferAccepted}
        onClick={() => window.location.href = 'https://uvarovn771-blip.github.io/studio-success/'}
      >
        <CreditCard className="mr-2 h-5 w-5" />
        Купить курс сейчас
      </Button>
    </div>
  );
}
