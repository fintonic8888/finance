import { motion } from "framer-motion";
import { BarChart3, Brain, Lock, Wallet } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Portfolio Analytics",
    description: "Track performance across all your assets with real-time charts and breakdowns.",
  },
  {
    icon: Brain,
    title: "AI Insights",
    description: "Get personalized recommendations powered by machine learning models.",
  },
  {
    icon: Lock,
    title: "Secure Vaults",
    description: "Multi-layer encryption and cold storage integration for maximum protection.",
  },
  {
    icon: Wallet,
    title: "Smart Budgeting",
    description: "Automated expense tracking and savings goals that adapt to your habits.",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-6">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Everything you need to <span className="text-gradient">grow</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Professional-grade tools, simplified for everyone.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 card-glow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
