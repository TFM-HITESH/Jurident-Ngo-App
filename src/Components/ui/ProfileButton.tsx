import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/Components/ui/dropdown-menu";
  import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
  
  const ProfileButton = () => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src="/Images/ProfilePic.jpeg/" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />+
          <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">Billing</DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">Subscription</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer">Log Out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };
  
  export default ProfileButton;