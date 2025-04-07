"use client"


import Navbar from "@/components/Navbar";
import { useUser } from "@/lib/useUser";

export default function Home() {

  const user = useUser();


  return (
    <>
      <Navbar className="" />
      {user ? (
        <p>
          welcome {user.name}
        </p>
      ) : (
        <p>Login</p>
      )}
    </>
  );
}
