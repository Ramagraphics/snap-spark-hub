import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, MessageCircle, Camera, Clock } from "lucide-react";

const GearExchange = () => {
  const gearItems = [
    {
      id: 1,
      title: "Canon EOS 5D Mark IV",
      condition: "Like New",
      price: "₹1,45,000",
      location: "Mumbai, Maharashtra",
      seller: "PhotoPro_Mumbai",
      timeAgo: "2 hours ago",
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300",
      category: "DSLR",
      description: "Professional DSLR camera, barely used with original box and accessories."
    },
    {
      id: 2,
      title: "Sony Alpha A7 III",
      condition: "Excellent",
      price: "₹1,20,000",
      location: "Bangalore, Karnataka",
      seller: "SonyShooter_BLR",
      timeAgo: "5 hours ago",
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300",
      category: "Mirrorless",
      description: "Full-frame mirrorless with 28-70mm kit lens. Perfect for professionals."
    },
    {
      id: 3,
      title: "Nikon 70-200mm f/2.8",
      condition: "Good",
      price: "₹85,000",
      location: "Delhi, NCR",
      seller: "LensGuru_Delhi",
      timeAgo: "1 day ago",
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=300",
      category: "Lens",
      description: "Professional telephoto lens, ideal for sports and wildlife photography."
    },
    {
      id: 4,
      title: "DJI Ronin-S Gimbal",
      condition: "Very Good",
      price: "₹35,000",
      location: "Chennai, Tamil Nadu",
      seller: "VideoMaster_CHN",
      timeAgo: "3 days ago",
      image: "https://images.unsplash.com/photo-1567450586716-251b93acd732?w=300",
      category: "Accessory",
      description: "3-axis handheld gimbal stabilizer for DSLR and mirrorless cameras."
    },
  ];

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case "Like New": return "bg-camera-green text-primary-foreground";
      case "Excellent": return "bg-camera-blue text-primary-foreground";
      case "Very Good": return "bg-camera-gold text-primary";
      case "Good": return "bg-camera-orange text-primary-foreground";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">📷 Camera & Gear Exchange</h2>
        <p className="text-muted-foreground">Buy and sell photography equipment with fellow creators</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 justify-center">
        {["All Gear", "DSLR", "Mirrorless", "Lens", "Accessory", "Lighting"].map((filter) => (
          <Badge
            key={filter}
            variant={filter === "All Gear" ? "default" : "secondary"}
            className="cursor-pointer hover:bg-accent transition-colors px-4 py-2"
          >
            {filter}
          </Badge>
        ))}
      </div>

      {/* Gear Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {gearItems.map((item, index) => (
          <Card 
            key={item.id} 
            className="overflow-hidden hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-up bg-gradient-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex">
              <div className="relative flex-shrink-0">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-32 h-32 object-cover"
                />
                <Badge className={`absolute top-2 left-2 text-xs ${getConditionColor(item.condition)}`}>
                  {item.condition}
                </Badge>
              </div>
              
              <div className="flex-1 p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">by {item.seller}</p>
                  </div>
                  <span className="text-xl font-bold text-camera-gold">{item.price}</span>
                </div>
                
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {item.description}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{item.timeAgo}</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="camera" className="flex-1">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    Chat
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button variant="camera" size="lg" className="mr-4">
          <Camera className="w-4 h-4 mr-2" />
          Sell Your Gear
        </Button>
        <Button variant="outline" size="lg">
          Browse All Listings →
        </Button>
      </div>
    </div>
  );
};

export default GearExchange;