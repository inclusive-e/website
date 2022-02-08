import MainLayout from "./components/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className="h-screen">
        <div className="flex flex-col justify-center items-center h-full">
          <span className="text-6xl my-1 font-semibold">This is staging!</span>
        </div>
      </div>
    </MainLayout>
  )
}
