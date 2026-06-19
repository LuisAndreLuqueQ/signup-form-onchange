import Header from "./components/Header"
import TryFree from "./components/TryFree"
import FormSub from "./components/FormSub"

function App() {

  return (
    <main className="bg-[#f47f7f] min-h-screen bg-[url('/images/bg-intro-desktop.png')] bg-center flex flex-col text-center ">
      <Header></Header>
      <TryFree></TryFree>
      <FormSub></FormSub>
    </main>
  )
}

export default App
