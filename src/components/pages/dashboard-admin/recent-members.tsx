import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  import { Badge } from "@/components/ui/badge"
  
  export function RecentMembers() {
    return (
      <div className="space-y-8">
        {recentMembers.map((member) => (
          <div key={member.email} className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarImage src={member.avatar} alt="Avatar" />
              <AvatarFallback>{member.name[0]}</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">{member.name}</p>
              <p className="text-sm text-muted-foreground">{member.email}</p>
            </div>
            <Badge variant={member.status === 'active' ? 'default' : 'secondary'} className="ml-auto">
              {member.status}
            </Badge>
          </div>
        ))}
      </div>
    )
  }
  
  const recentMembers = [
    {
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      avatar: "/avatars/01.png",
      status: "active"
    },
    {
      name: "Jackson Lee",
      email: "jackson.lee@email.com",
      avatar: "/avatars/02.png",
      status: "active"
    },
    {
      name: "Isabella Nguyen",
      email: "isabella.nguyen@email.com",
      avatar: "/avatars/03.png",
      status: "pending"
    },
    {
      name: "William Kim",
      email: "will.kim@email.com",
      avatar: "/avatars/04.png",
      status: "active"
    },
  ]
  
  