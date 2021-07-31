import { Fragment } from "react";
import MainLayout from "./components/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div>
        <h1 className="dark:text-accent font-medium font-secondary">
          The quick brown fox jumps over the lazy dog.
        </h1>
        <p>
          After the installation is complete, follow the instructions to start the development server. Try editing pages/index.js and see the result on your browser.
        </p>
        <button className="btn">Button</button>
      </div>
    </MainLayout>
  )
}
