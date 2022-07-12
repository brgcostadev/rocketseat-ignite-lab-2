import Header from "../components/Header";
import Sidebar from "../components/Sidebard";
import Video from "../components/Video";


function Event() {
    
  return (
    <div className="flex flex-col">
          <Header />
          <main className="flex min-h-screen flex-1">
            <Video />
            <Sidebar />
          </main>
    </div>
  )
}

export default Event;
