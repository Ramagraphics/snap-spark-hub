import { Camera, MessageCircle, Store, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const navItems = [
    { 
      name: "Templates", 
      icon: Store, 
      variant: "marketplace" as const,
      description: "Design templates & resources"
    },
    { 
      name: "Gear Exchange", 
      icon: Camera, 
      variant: "camera" as const,
      description: "Buy & sell equipment"
    },
    { 
      name: "Studios", 
      icon: Users, 
      variant: "studio" as const,
      description: "Find photography services"
    },
    { 
      name: "Community", 
      icon: MessageCircle, 
      variant: "chat" as const,
      description: "Connect & collaborate"
    },
  ];

  return (
    <nav className="flex flex-wrap gap-4 justify-center mb-12">
      {navItems.map((item) => (
        <Button
          key={item.name}
          variant={item.variant}
          size="lg"
          className="flex-col h-auto p-6 min-w-40 animate-fade-up"
          style={{ animationDelay: `${navItems.indexOf(item) * 0.1}s` }}
        >
          <item.icon className="w-6 h-6 mb-2" />
          <span className="font-semibold">{item.name}</span>
          <span className="text-xs opacity-80 mt-1">{item.description}</span>
        </Button>
      ))}
    </nav>
  );
};

export default Navigation;