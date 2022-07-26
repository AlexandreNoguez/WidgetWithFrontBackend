import SocialMedia from "./compononents/SocialMedia"
import Header from "./compononents/Header"
import { Widget } from "./compononents/Widget"
import AppRoutes from "./routes/appRoutes"

function App() {

  return (
    <div className="bg-slate-700 min-h-screen">
      <Header />
      <AppRoutes />
      <SocialMedia />
      <Widget />
    </div>
  )
}

export default App
