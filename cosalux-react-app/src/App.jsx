import Navigation from './view/layout/navigation/Navigation.jsx'
import Header from './view/layout/header/Header.jsx'
import MainContent from './view/layout/content/MainContent.jsx'
import Footer from './view/layout/footer/Footer.jsx'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navigation />
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}

export default App
