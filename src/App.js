// import logo from './logo.svg';
import './App.css';

const user = {
  name: "Roshini",
  age: "25",
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
}
const array = [
  { title: 'apple', isFruit: false, id: 1 },
  { title: 'mango', isFruit: false, id: 2 },
  { title: 'banana', isFruit: true, id: 3 }];

function App() {
  // return (
  // eslint-disable-next-line
  const listItems = array.map(array =>
    <li key={array.id} style={{ color: array.isFruit ? 'magenta' : 'red' }}>{array.title}</li>
  );
  return (
    <>
      <ul>{listItems}</ul>
      <h1>{user.name}</h1>
      <img className='avatar' src={user.imageUrl} alt={'photo of' + user.name}
        style={{ width: user.imageSize, height: user.imageSize }} />
    </>
  )
}

export default App;
