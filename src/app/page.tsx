import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      <p className="text-lg">I'm a passionate developer with experience in building web applications.</p>
      <Image
        className="rounded-full"
        src="/profile.jpg"
        alt="Profile Picture"
        width={150}
        height={150}
      />
    </div>
  );
}
