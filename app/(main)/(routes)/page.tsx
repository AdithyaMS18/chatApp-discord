import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      this should be protected page
    <UserButton 
      afterSignOutUrl="/" 
    />
    <ModeToggle />
    </div>
  );
}
