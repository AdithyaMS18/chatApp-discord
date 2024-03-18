import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
    this is a test.
    <UserButton 
      afterSignOutUrl="/" 
    />
    <ModeToggle />
    </div>
  );
}
