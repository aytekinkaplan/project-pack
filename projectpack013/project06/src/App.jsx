import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Header */}
        <header className="app-header">
          <h1>Almanca Öğrenme Mikroblog</h1>
        </header>

        {/* Main Content */}
        <main className="app-main">
          <Routes>
            {/* Anasayfa - Mikroblog Listesi */}
            <Route path="/" element={<PostList />} />

            {/* Post Detay Sayfası */}
            <Route path="/post/:id" element={<PostDetail />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="app-footer">
          <p>© 2025 Almanca Mikroblog. Tüm Hakları Saklıdır.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
