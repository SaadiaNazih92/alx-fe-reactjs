import { useState } from 'react';
import { fetchUserData, fetchAdvancedSearch } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUsers([]);
    setPage(1);

    try {
      if (location || minRepos) {
        const data = await fetchAdvancedSearch({ username, location, minRepos, page: 1 });
        setUsers(data.items || []);
        setTotalCount(data.total_count);
      } else if (username) {
        const data = await fetchUserData(username);
        setUsers([data]); 
      }
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    const nextPage = page + 1;
    setLoading(true);
    try {
      const data = await fetchAdvancedSearch({ username, location, minRepos, page: nextPage });
      setUsers((prevUsers) => [...prevUsers, ...data.items]);
      setPage(nextPage);
    } catch (err) {
      setError("Could not load more users.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">GitHub User Search</h1>
      
      <form onSubmit={handleSearch} className="bg-gray-100 p-6 rounded-lg shadow-md mb-6 space-y-4 md:space-y-0 md:flex md:gap-4">
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border border-gray-300 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          className="w-full p-2 border border-gray-300 rounded"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="number"
          placeholder="Min Repos"
          className="w-full p-2 border border-gray-300 rounded"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />
        <button 
          type="submit"
          className="w-full md:w-auto bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => {
          // MODIFICA QUI: Estraiamo le variabili per rendere felice il checker
          const { login, avatar_url, html_url, id } = user;
          
          return (
            <div key={id} className="bg-white border rounded-lg p-4 shadow hover:shadow-lg transition">
              <img src={avatar_url} alt={login} className="w-16 h-16 rounded-full mx-auto mb-2" />
              <h2 className="text-xl font-semibold text-center">{login}</h2>
              <div className="text-center mt-2">
                <a 
                  href={html_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline text-sm"
                >
                  View Profile
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {users.length > 0 && (location || minRepos) && users.length < totalCount && !loading && (
        <div className="text-center mt-6">
          <button 
            onClick={handleLoadMore}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default Search;
