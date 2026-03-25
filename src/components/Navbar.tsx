import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex items-center justify-between h-16 px-6">
        <div className="flex items-center gap-2 font-display font-bold text-xl">
          <TrendingUp className="w-6 h-6 text-primary" />
          Vaultix
        </div>
        <div className="hidden sm:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Features</a>
          <a href="#" className="hover:text-foreground transition-colors">Pricing</a>
          <a href="#" className="hover:text-foreground transition-colors">About</a>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">Log in</Button>
          <Button variant="hero" size="sm">Sign up</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
