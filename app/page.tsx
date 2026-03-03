import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#fcfaf6]">
      <Navbar />
      <div className="flex-1 flex items-center justify-center">
        <h1 className="text-4xl font-bold">ResumePane Landing Page</h1>
      </div>
    </main>
  );
}