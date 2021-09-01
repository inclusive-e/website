import MainLayout from "./components/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className="h-screen">
        <div className="flex flex-col justify-center items-center h-full">
          <span className="text-6xl my-1 font-semibold">Inclusive</span>
          <span className="text-lg font-thin my-1">Coming soon ...</span>
        </div>
      </div>
    </MainLayout>
  )
}
