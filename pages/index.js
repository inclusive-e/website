import MainLayout from "./components/MainLayout";
import Tagline from "./components/Tagline";

export default function Home() {
  return (
    <MainLayout>
      <div>
        <Tagline alt text="The quick brown fox jumps over the lazy dog." />
        <p>
          After the installation is complete, follow the instructions to start the development server. Try editing pages/index.js and see the result on your browser.
        </p>
        <button className="btn">Button</button>
      </div>
    </MainLayout>
  )
}
