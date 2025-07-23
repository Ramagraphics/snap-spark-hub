import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Phone, Calendar, Camera, Heart } from "lucide-react";

const StudioOffers = () => {
  const studios = [
    {
      id: 1,
      name: "Dreamy Moments Studio",
      avatar: "🎨",
      location: "Hyderabad, Telangana",
      rating: 4.9,
      reviews: 156,
      specialties: ["Wedding", "Traditional"],
      services: [
        { name: "Wedding Photography", price: "₹25,000" },
        { name: "Album Design", price: "₹6,000" },
        { name: "Photo Frames", price: "₹2,500" }
      ],
      phone: "+91 98765 43210",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300",
      established: "2018"
    },
    {
      id: 2,
      name: "Lens & Light Photography",
      avatar: "📸",
      location: "Mumbai, Maharashtra",
      rating: 4.8,
      reviews: 203,
      specialties: ["Portrait", "Fashion"],
      services: [
        { name: "Portrait Session", price: "₹8,000" },
        { name: "Fashion Shoot", price: "₹15,000" },
        { name: "Product Photography", price: "₹5,000" }
      ],
      phone: "+91 87654 32109",
      image: "https://images.unsplash.com/photo-1554048612-b6a482b224ec?w=300",
      established: "2016"
    },
    {
      id: 3,
      name: "Cultural Canvas Studio",
      avatar: "🎭",
      location: "Chennai, Tamil Nadu",
      rating: 4.7,
      reviews: 89,
      specialties: ["Traditional", "Cultural"],
      services: [
        { name: "Half Saree Ceremony", price: "₹12,000" },
        { name: "Classical Dance Photos", price: "₹7,000" },
        { name: "Traditional Album", price: "₹4,500" }
      ],
      phone: "+91 76543 21098",
      image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=300",
      established: "2020"
    },
    {
      id: 4,
      name: "Modern Memories",
      avatar: "✨",
      location: "Bangalore, Karnataka",
      rating: 4.6,
      reviews: 127,
      specialties: ["Engagement", "Pre-wedding"],
      services: [
        { name: "Engagement Photography", price: "₹18,000" },
        { name: "Pre-wedding Shoot", price: "₹22,000" },
        { name: "Digital Album", price: "₹3,500" }
      ],
      phone: "+91 65432 10987",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=300",
      established: "2019"
    },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">🏢 Studio Offers & Listings</h2>
        <p className="text-muted-foreground">Connect with professional studios and photographers</p>
      </div>

      {/* Location & Service Filters */}
      <div className="flex flex-wrap gap-2 justify-center">
        {["All Studios", "Wedding", "Portrait", "Traditional", "Fashion", "Event"].map((filter) => (
          <Badge
            key={filter}
            variant={filter === "All Studios" ? "default" : "secondary"}
            className="cursor-pointer hover:bg-accent transition-colors px-4 py-2"
          >
            {filter}
          </Badge>
        ))}
      </div>

      {/* Studios Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {studios.map((studio, index) => (
          <Card 
            key={studio.id} 
            className="overflow-hidden hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-scale-in bg-gradient-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative">
              <img 
                src={studio.image} 
                alt={studio.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm rounded-full p-2">
                <span className="text-2xl">{studio.avatar}</span>
              </div>
              <Button
                size="sm"
                variant="ghost"
                className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm hover:bg-background"
              >
                <Heart className="w-4 h-4" />
              </Button>
            </div>
            
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">{studio.name}</CardTitle>
                  <div className="flex items-center gap-2 mt-1">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{studio.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-camera-gold text-camera-gold" />
                    <span className="font-medium">{studio.rating}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">({studio.reviews} reviews)</span>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="pt-0">
              {/* Specialties */}
              <div className="flex gap-2 mb-4">
                {studio.specialties.map((specialty) => (
                  <Badge key={specialty} variant="secondary" className="text-xs">
                    {specialty}
                  </Badge>
                ))}
              </div>

              {/* Services */}
              <div className="space-y-2 mb-4">
                <h4 className="font-medium text-sm">Popular Services:</h4>
                {studio.services.slice(0, 2).map((service, idx) => (
                  <div key={idx} className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">{service.name}</span>
                    <span className="font-medium text-camera-gold">{service.price}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Button size="sm" variant="studio" className="flex-1">
                  <Phone className="w-4 h-4 mr-1" />
                  Contact
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <Calendar className="w-4 h-4 mr-1" />
                  Book Now
                </Button>
              </div>

              <div className="text-center mt-3">
                <span className="text-xs text-muted-foreground">
                  Established {studio.established} • 150+ customers served
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button variant="studio" size="lg" className="mr-4">
          <Camera className="w-4 h-4 mr-2" />
          Register Your Studio
        </Button>
        <Button variant="outline" size="lg">
          View All Studios →
        </Button>
      </div>
    </div>
  );
};

export default StudioOffers;