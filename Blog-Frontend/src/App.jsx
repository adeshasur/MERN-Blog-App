import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <nav className="bg-white shadow-sm py-4 mb-8">
            <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-blue-600">MERN Blog</h1>
                <a href="/create" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">New Post</a>
            </div>
        </nav>
        <main className="max-w-5xl mx-auto px-4">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
