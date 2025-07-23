import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Toaster } from "@/components/ui/toaster";
import Navigation from "@/components/Navigation";
import TemplatesMarketplace from "@/components/TemplatesMarketplace";
import GearExchange from "@/components/GearExchange";
import StudioOffers from "@/components/StudioOffers";
import CommunityChat from "@/components/CommunityChat";
import UserRegistration from "@/components/UserRegistration";
import { Sparkles, Camera, Users, Store, MessageCircle, Menu, X } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const stats = [
    { label: "Active Photographers", value: "5,000+", icon: "📸" },
    { label: "Templates Sold", value: "25,000+", icon: "🎨" },
    { label: "Gear Exchanges", value: "8,500+", icon: "📷" },
    { label: "Studio Partners", value: "1,200+", icon: "🏢" },
  ];

  const features = [
    {
      icon: "🎨",
      title: "Templates Marketplace",
      description: "Buy and sell stunning photography templates for weddings, traditional events, and more",
      action: () => setActiveSection("templates")
    },
    {
      icon: "📷", 
      title: "Gear Exchange",
      description: "Trade cameras, lenses, and equipment with trusted photographers worldwide",
      action: () => setActiveSection("gear")
    },
    {
      icon: "🏢",
      title: "Studio Directory",
      description: "Discover local studios and photographers, compare prices and book services",
      action: () => setActiveSection("studios")
    },
    {
      icon: "💬",
      title: "Community Hub",
      description: "Connect with fellow photographers, share tips, and collaborate on projects",
      action: () => setActiveSection("community")
    }
  ];

  const renderActiveSection = () => {
    switch (activeSection) {
      case "templates":
        return <TemplatesMarketplace />;
      case "gear":
        return <GearExchange />;
      case "studios":
        return <StudioOffers />;
      case "community":
        return <CommunityChat />;
      default:
        return (
          <div className="space-y-16">
            {/* Hero Section */}
            <section className="relative overflow-hidden rounded-3xl">
              <div 
                className="h-96 bg-gradient-hero flex items-center justify-center relative"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.7), rgba(139,69,244,0.8)), url(${heroImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="text-center text-white z-10 px-6">
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up">
                    SnapSpark Hub ✨
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-up" style={{animationDelay: '0.2s'}}>
                    Where Photographers Connect, Create & Collaborate
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center animate-fade-up" style={{animationDelay: '0.4s'}}>
                    <UserRegistration />
                    <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                      <Camera className="w-5 h-5 mr-2" />
                      Explore Platform
                    </Button>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-20 left-10 animate-float">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl">
                    📸
                  </div>
                </div>
                <div className="absolute bottom-20 right-10 animate-float" style={{animationDelay: '1s'}}>
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-3xl">
                    ✨
                  </div>
                </div>
              </div>
            </section>

            {/* Stats Section */}
            <section className="text-center">
              <h2 className="text-3xl font-bold mb-8">Trusted by Photographers Worldwide 🌍</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <Card key={index} className="bg-gradient-card hover:shadow-medium transition-all duration-300 animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <CardContent className="text-center p-6">
                      <div className="text-3xl mb-2">{stat.icon}</div>
                      <div className="text-2xl font-bold text-accent mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Features Grid */}
            <section className="space-y-8">
              <div className="text-center">
                <h2 className="text-4xl font-bold mb-4">Everything You Need in One Place 🚀</h2>
                <p className="text-xl text-muted-foreground">From templates to gear, studios to community - we've got you covered</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <Card 
                    key={index} 
                    className="group cursor-pointer hover:shadow-strong transition-all duration-300 hover:-translate-y-2 bg-gradient-card animate-fade-up"
                    style={{animationDelay: `${index * 0.1}s`}}
                    onClick={feature.action}
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="text-4xl group-hover:animate-bounce">{feature.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                            {feature.title}
                          </h3>
                          <p className="text-muted-foreground mb-4">{feature.description}</p>
                          <Button variant="outline" size="sm" className="group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                            Explore Now →
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center bg-gradient-accent rounded-3xl p-12 text-accent-foreground">
              <h2 className="text-4xl font-bold mb-4">Ready to Join Our Community? 🎉</h2>
              <p className="text-xl opacity-90 mb-8">
                Connect with 5,000+ photographers, access exclusive templates, and grow your business
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <UserRegistration />
                <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                  Learn More
                </Button>
              </div>
            </section>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Toaster />
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div 
              className="flex items-center gap-2 cursor-pointer" 
              onClick={() => setActiveSection("home")}
            >
              <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-accent-foreground" />
              </div>
              <span className="text-2xl font-bold">SnapSpark</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Button 
                variant={activeSection === "home" ? "default" : "ghost"}
                onClick={() => setActiveSection("home")}
              >
                Home
              </Button>
              <Button 
                variant={activeSection === "templates" ? "default" : "ghost"}
                onClick={() => setActiveSection("templates")}
              >
                <Store className="w-4 h-4 mr-2" />
                Templates
              </Button>
              <Button 
                variant={activeSection === "gear" ? "default" : "ghost"}
                onClick={() => setActiveSection("gear")}
              >
                <Camera className="w-4 h-4 mr-2" />
                Gear
              </Button>
              <Button 
                variant={activeSection === "studios" ? "default" : "ghost"}
                onClick={() => setActiveSection("studios")}
              >
                <Users className="w-4 h-4 mr-2" />
                Studios
              </Button>
              <Button 
                variant={activeSection === "community" ? "default" : "ghost"}
                onClick={() => setActiveSection("community")}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Community
              </Button>
            </nav>

            <div className="flex items-center gap-4">
              <UserRegistration />
              
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t pt-4 animate-fade-in">
              <div className="flex flex-col gap-2">
                <Button 
                  variant={activeSection === "home" ? "default" : "ghost"}
                  onClick={() => {setActiveSection("home"); setMobileMenuOpen(false);}}
                  className="justify-start"
                >
                  Home
                </Button>
                <Button 
                  variant={activeSection === "templates" ? "default" : "ghost"}
                  onClick={() => {setActiveSection("templates"); setMobileMenuOpen(false);}}
                  className="justify-start"
                >
                  <Store className="w-4 h-4 mr-2" />
                  Templates
                </Button>
                <Button 
                  variant={activeSection === "gear" ? "default" : "ghost"}
                  onClick={() => {setActiveSection("gear"); setMobileMenuOpen(false);}}
                  className="justify-start"
                >
                  <Camera className="w-4 h-4 mr-2" />
                  Gear
                </Button>
                <Button 
                  variant={activeSection === "studios" ? "default" : "ghost"}
                  onClick={() => {setActiveSection("studios"); setMobileMenuOpen(false);}}
                  className="justify-start"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Studios
                </Button>
                <Button 
                  variant={activeSection === "community" ? "default" : "ghost"}
                  onClick={() => {setActiveSection("community"); setMobileMenuOpen(false);}}
                  className="justify-start"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Community
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {renderActiveSection()}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-accent-foreground" />
                </div>
                <span className="text-xl font-bold">SnapSpark</span>
              </div>
              <p className="text-primary-foreground/80">
                Connecting photographers worldwide through templates, gear, studios, and community.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <div>Templates Marketplace</div>
                <div>Gear Exchange</div>
                <div>Studio Directory</div>
                <div>Community Chat</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <div>Help Center</div>
                <div>Contact Us</div>
                <div>Privacy Policy</div>
                <div>Terms of Service</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <div>📧 hello@snapspark.com</div>
                <div>📱 +91 98765 43210</div>
                <div>🌍 Global Community</div>
                <div>💬 24/7 Support</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            © 2024 SnapSpark Hub. Made with ❤️ for photographers worldwide.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
