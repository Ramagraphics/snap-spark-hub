import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Camera, Users, UserPlus, MapPin, Phone, Mail } from "lucide-react";

const UserRegistration = () => {
  const [userType, setUserType] = useState("photographer");
  const [specialties, setSpecialties] = useState<string[]>([]);

  const specialtyOptions = [
    "Wedding Photography",
    "Portrait Photography", 
    "Fashion Photography",
    "Event Photography",
    "Traditional Photography",
    "Product Photography",
    "Wildlife Photography",
    "Architecture Photography"
  ];

  const toggleSpecialty = (specialty: string) => {
    setSpecialties(prev => 
      prev.includes(specialty) 
        ? prev.filter(s => s !== specialty)
        : [...prev, specialty]
    );
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="hero" size="lg" className="animate-bounce-in">
          <UserPlus className="w-5 h-5 mr-2" />
          Join Our Community ✨
        </Button>
      </DialogTrigger>
      
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">
            Welcome to SnapSpark! 🎉
          </DialogTitle>
          <p className="text-center text-muted-foreground">
            Join our vibrant photography community and unlock amazing features
          </p>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* User Type Selection */}
          <div className="space-y-3">
            <Label className="text-lg font-semibold">I am a:</Label>
            <RadioGroup 
              value={userType} 
              onValueChange={setUserType}
              className="grid grid-cols-2 gap-4"
            >
              <div>
                <RadioGroupItem 
                  value="photographer" 
                  id="photographer" 
                  className="peer sr-only" 
                />
                <Label
                  htmlFor="photographer"
                  className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-gradient-card p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-accent peer-data-[state=checked]:bg-accent/10 cursor-pointer transition-all"
                >
                  <Camera className="mb-2 h-6 w-6" />
                  <span className="font-medium">Photographer</span>
                  <span className="text-sm text-muted-foreground text-center mt-1">
                    Share work, sell templates, offer services
                  </span>
                </Label>
              </div>
              
              <div>
                <RadioGroupItem 
                  value="customer" 
                  id="customer" 
                  className="peer sr-only" 
                />
                <Label
                  htmlFor="customer"
                  className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-gradient-card p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-accent peer-data-[state=checked]:bg-accent/10 cursor-pointer transition-all"
                >
                  <Users className="mb-2 h-6 w-6" />
                  <span className="font-medium">Customer</span>
                  <span className="text-sm text-muted-foreground text-center mt-1">
                    Buy templates, hire photographers, join community
                  </span>
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name *</Label>
              <Input id="fullName" placeholder="Your full name" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="+91 98765 43210" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" placeholder="City, State" />
            </div>
          </div>

          {/* Photographer Specific Fields */}
          {userType === "photographer" && (
            <div className="space-y-4 p-4 bg-accent/5 rounded-lg border">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <Camera className="w-5 h-5" />
                Photographer Details
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="studioName">Studio/Business Name</Label>
                  <Input id="studioName" placeholder="Your studio name" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="experience">Years of Experience</Label>
                  <Input id="experience" placeholder="e.g., 5 years" />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Specialties (Select all that apply)</Label>
                <div className="grid grid-cols-2 gap-2">
                  {specialtyOptions.map((specialty) => (
                    <Badge
                      key={specialty}
                      variant={specialties.includes(specialty) ? "default" : "secondary"}
                      className="cursor-pointer transition-all hover:scale-105 justify-center py-2"
                      onClick={() => toggleSpecialty(specialty)}
                    >
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="portfolio">Portfolio Website/Instagram</Label>
                <Input id="portfolio" placeholder="https://your-portfolio.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Brief Bio</Label>
                <Textarea 
                  id="bio" 
                  placeholder="Tell us about your photography journey and style..."
                  className="resize-none"
                  rows={3}
                />
              </div>
            </div>
          )}

          {/* Customer Specific Fields */}
          {userType === "customer" && (
            <div className="space-y-4 p-4 bg-accent/5 rounded-lg border">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <Users className="w-5 h-5" />
                Customer Preferences
              </h3>
              
              <div className="space-y-2">
                <Label>Interested Services (Select all that apply)</Label>
                <div className="grid grid-cols-2 gap-2">
                  {["Wedding Photography", "Portrait Session", "Event Photography", "Traditional Photography", "Product Photography", "Family Photography"].map((service) => (
                    <Badge
                      key={service}
                      variant={specialties.includes(service) ? "default" : "secondary"}
                      className="cursor-pointer transition-all hover:scale-105 justify-center py-2"
                      onClick={() => toggleSpecialty(service)}
                    >
                      {service}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Terms and Actions */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="terms" className="rounded" />
              <Label htmlFor="terms" className="text-sm">
                I agree to the Terms of Service and Privacy Policy
              </Label>
            </div>

            <div className="flex gap-3">
              <Button variant="hero" size="lg" className="flex-1">
                Create Account 🚀
              </Button>
              <Button variant="outline" size="lg">
                Sign In
              </Button>
            </div>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            Join 5,000+ photographers and customers already using SnapSpark! 📸✨
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UserRegistration;