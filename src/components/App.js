// create your App component here

const url = "https://dog.ceo/api/breeds/image/random"

function App() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ name: "", username: "" });

  useEffect(() => {
    // code to run after rendering
    fetch(url)
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));
  }, []);

  const sendData = (e) => {
    e.preventDefault();
    // You can add logic to handle form submission here
    setFormData({ name: "", username: "" });
  };

  return (
    <>
      <h1>Test</h1>
      <div>
        <form onSubmit={sendData}>
          <label htmlFor="">Name: </label>
          <input
            type="text"
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
          />
          <br />
          <label htmlFor="">Username: </label>
          <input
            type="text"
            value={formData.username}
            onChange={e => setFormData({ ...formData, username: e.target.value })}
          />
          <br />
          <button type="submit">Add name</button>
        </form>
      </div>
      {users.map(user => (
        <li key={user.id}>
          <div>
            <h4>{user.name}</h4>
            <span>{user.username}</span>
          </div>
        </li>
      ))}
    </>
  );
}

export default App