import SocialMedia from "./compononents/SocialMedia"
import Header from "./compononents/Header"
import { Widget } from "./compononents/Widget"
import AppRoutes from "./routes/appRoutes"

function App() {

  return (
    <div className="bg-hero-pattern bg-cover min-h-screen justify-center items-center">
      <Header />
      <AppRoutes />
      <SocialMedia />
      <Widget />
    </div>
  )
}

export default App
