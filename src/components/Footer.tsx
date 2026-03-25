import { TrendingUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2 font-display font-semibold text-foreground">
          <TrendingUp className="w-5 h-5 text-primary" />
          Vaultix
        </div>
        <p>© 2026 Vaultix. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
