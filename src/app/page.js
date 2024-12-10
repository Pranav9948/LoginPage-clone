import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white flex flex-col justify-center items-center h-screen gap-5">
      <h1 className="font-sans text-xl font-semibold">
        {" "}
        Home page of application visit Login Page
      </h1>

      <Button className="text-white "  asChild>
        <Link href="/login">Visit Login Page</Link>
      </Button>
    </div>
  );
}
