import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { MessageCircle, Users, Send, Plus, Mic, Image } from "lucide-react";

const CommunityChat = () => {
  const chatGroups = [
    {
      id: 1,
      name: "Wedding Photographers Hub",
      members: 1247,
      online: 89,
      category: "Wedding",
      description: "Share tips, get referrals, and connect with wedding photography professionals",
      avatar: "💍",
      lastMessage: "Just booked my biggest wedding yet! Thanks for the pricing advice 🎉",
      lastMessageTime: "2 min ago",
      unread: 5
    },
    {
      id: 2,
      name: "Gear Talk & Reviews",
      members: 856,
      online: 42,
      category: "Equipment",
      description: "Discuss cameras, lenses, and photography gear",
      avatar: "📷",
      lastMessage: "Anyone tried the new Sony A7R V? Looking for real user feedback",
      lastMessageTime: "8 min ago",
      unread: 12
    },
    {
      id: 3,
      name: "South Indian Photography",
      members: 634,
      online: 28,
      category: "Regional",
      description: "Traditional and cultural photography community",
      avatar: "🎭",
      lastMessage: "Beautiful half saree ceremony shots shared by @TamilShooter",
      lastMessageTime: "15 min ago",
      unread: 3
    },
    {
      id: 4,
      name: "Business & Marketing",
      members: 423,
      online: 19,
      category: "Business",
      description: "Grow your photography business and client base",
      avatar: "💼",
      lastMessage: "Instagram algorithm tips that actually work for photographers",
      lastMessageTime: "32 min ago",
      unread: 0
    }
  ];

  const recentMessages = [
    {
      user: "PhotoPro_Mumbai",
      avatar: "👨‍💼",
      message: "Hey everyone! Just finished an amazing wedding shoot in Goa. The sunset shots turned out incredible! 📸✨",
      time: "5 min ago",
      likes: 12,
      isAI: false
    },
    {
      user: "AI Assistant",
      avatar: "🤖",
      message: "Congratulations! For sunset wedding photography, I recommend trying the golden hour filter techniques discussed in our templates section. Would you like me to suggest some editing presets?",
      time: "3 min ago",
      likes: 8,
      isAI: true
    },
    {
      user: "LensGuru_Delhi",
      avatar: "📸",
      message: "@PhotoPro_Mumbai Which lens did you use for those sunset shots? I'm planning a beach wedding next month.",
      time: "2 min ago",
      likes: 3,
      isAI: false
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">💬 Community & Collaboration</h2>
        <p className="text-muted-foreground">Connect, share, and grow with fellow photographers</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chat Groups */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">Active Groups</h3>
            <Button variant="chat" size="sm">
              <Plus className="w-4 h-4 mr-1" />
              Create Group
            </Button>
          </div>

          {chatGroups.map((group, index) => (
            <Card 
              key={group.id}
              className="hover:shadow-medium transition-all duration-300 cursor-pointer animate-fade-up bg-gradient-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center text-xl">
                      {group.avatar}
                    </div>
                    {group.unread > 0 && (
                      <Badge className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground text-xs min-w-[20px] h-5 flex items-center justify-center rounded-full">
                        {group.unread}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-semibold truncate">{group.name}</h4>
                      <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                        {group.lastMessageTime}
                      </span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-2 line-clamp-1">
                      {group.lastMessage}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          <span>{group.members}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-camera-green rounded-full"></div>
                          <span>{group.online} online</span>
                        </div>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {group.category}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Live Chat Preview */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Live Chat</h3>
          
          <Card className="bg-gradient-card">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">💍 Wedding Photographers</CardTitle>
                <div className="flex items-center gap-1 text-sm text-camera-green">
                  <div className="w-2 h-2 bg-camera-green rounded-full animate-pulse"></div>
                  89 online
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="pt-0">
              {/* Messages */}
              <div className="space-y-4 mb-4 max-h-64 overflow-y-auto">
                {recentMessages.map((msg, index) => (
                  <div 
                    key={index} 
                    className={`flex gap-3 animate-fade-up ${msg.isAI ? 'bg-accent/20 p-3 rounded-lg' : ''}`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-gradient-accent flex items-center justify-center text-sm">
                        {msg.avatar}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`font-medium text-sm ${msg.isAI ? 'text-accent' : ''}`}>
                          {msg.user}
                        </span>
                        {msg.isAI && (
                          <Badge variant="secondary" className="text-xs">
                            AI
                          </Badge>
                        )}
                        <span className="text-xs text-muted-foreground">{msg.time}</span>
                      </div>
                      <p className="text-sm text-foreground">{msg.message}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <button className="text-xs text-muted-foreground hover:text-accent transition-colors">
                          ❤️ {msg.likes}
                        </button>
                        <button className="text-xs text-muted-foreground hover:text-accent transition-colors">
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="flex gap-2">
                <Input 
                  placeholder="Type your message..." 
                  className="flex-1"
                />
                <Button size="sm" variant="ghost">
                  <Image className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="ghost">
                  <Mic className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="chat">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Button variant="outline" className="w-full">
            <MessageCircle className="w-4 h-4 mr-2" />
            Join All Conversations
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommunityChat;