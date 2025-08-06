import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Home() {
  return (
    <Avatar>
      <AvatarImage src="/image/profile.png" alt="Profile Picture" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  );
}
