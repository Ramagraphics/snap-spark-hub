import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Download, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const TemplatesMarketplace = () => {
  const { toast } = useToast();

  const handlePurchase = (template: any) => {
    // Simulate payment processing
    toast({
      title: "Processing Payment...",
      description: "Please wait while we process your payment.",
    });
    
    setTimeout(() => {
      toast({
        title: "Purchase Successful! 🎉",
        description: `${template.title} has been added to your downloads.`,
      });
    }, 2000);
  };
  const templates = [
    {
      id: 1,
      title: "Elegant Wedding Album",
      category: "Wedding",
      price: "₹299",
      rating: 4.8,
      downloads: 1240,
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=300",
      seller: "Creative Studio Pro"
    },
    {
      id: 2,
      title: "Half Saree Ceremony",
      category: "Traditional",
      price: "₹189",
      rating: 4.9,
      downloads: 856,
      image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=300",
      seller: "South Indian Designs"
    },
    {
      id: 3,
      title: "Modern Engagement",
      category: "Engagement",
      price: "₹249",
      rating: 4.7,
      downloads: 632,
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=300",
      seller: "PhotoArt Collective"
    },
    {
      id: 4,
      title: "Baby Shower Bliss",
      category: "Baby",
      price: "₹199",
      rating: 4.6,
      downloads: 445,
      image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=300",
      seller: "Sweet Moments"
    },
  ];

  const categories = ["All", "Wedding", "Traditional", "Engagement", "Baby", "Portrait"];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">📸 Templates Marketplace</h2>
        <p className="text-muted-foreground">Discover stunning design templates for every occasion</p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <Badge
            key={category}
            variant={category === "All" ? "default" : "secondary"}
            className="cursor-pointer hover:bg-accent transition-colors px-4 py-2"
          >
            {category}
          </Badge>
        ))}
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {templates.map((template, index) => (
          <Card 
            key={template.id} 
            className="overflow-hidden hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-scale-in bg-gradient-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative">
              <img 
                src={template.image} 
                alt={template.title}
                className="w-full h-48 object-cover"
              />
              <Button
                size="sm"
                variant="ghost"
                className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm hover:bg-background"
              >
                <Heart className="w-4 h-4" />
              </Button>
              <Badge className="absolute bottom-2 left-2 bg-accent text-accent-foreground">
                {template.category}
              </Badge>
            </div>
            
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{template.title}</CardTitle>
              <p className="text-sm text-muted-foreground">by {template.seller}</p>
            </CardHeader>
            
            <CardContent className="pt-0">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-camera-gold text-camera-gold" />
                  <span className="text-sm font-medium">{template.rating}</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Download className="w-4 h-4" />
                  <span className="text-sm">{template.downloads}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-camera-gold">{template.price}</span>
                <Button 
                  size="sm" 
                  variant="marketplace"
                  onClick={() => handlePurchase(template)}
                >
                  Buy Now ✨
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button variant="outline" size="lg">
          View All Templates →
        </Button>
      </div>
    </div>
  );
};

export default TemplatesMarketplace;