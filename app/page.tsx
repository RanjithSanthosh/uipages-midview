import Image from "next/image";
// import { get } from "@/server/user";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export default async function Home() {
  // const data = await get();
  return (
    <div>
      <h1>Frontend</h1>
      <div>
        {/* {data.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))} */}
      </div>
      <Button>
        <Link href="/DoctorPage" className="hover:underline">
          Doctor page
        </Link>
      </Button>
      <Button>
        <Link href="/CenterPage" className="hover:underline">
          Center page
        </Link>
      </Button>
    </div>
  );
}
