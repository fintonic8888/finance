import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 px-6">
      <div className="container max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-12 sm:p-16 rounded-3xl bg-card border border-border relative overflow-hidden"
        >
          <div className="absolute inset-0 hero-glow opacity-50" />
          <div className="relative z-10">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Ready to take control?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
              Join thousands of investors who trust us with their financial future.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button variant="hero" size="lg" className="text-base px-8 py-6">
                Open Account
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
              <Button variant="hero-outline" size="lg" className="text-base px-8 py-6">
                <MessageCircle className="w-5 h-5 mr-1" />
                Talk to Sales
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
