import './App.css'
import ListingPage from './components/ListingPage/ListingPage';

const App = () => {
  return (
    <>
      <ListingPage userData={undefined} editUser={undefined} getEditUser={function (editTodo: any): void {
        throw new Error('Function not implemented.');
      } } setEditUser={function (editTodo: any): void {
        throw new Error('Function not implemented.');
      } }/>
    </>
  )
}

export default App
