import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import { Context } from '.';
import './App.css';
import AppRouter from './components/AppRouter';
import NavBar from './components/navbar/NavBar';
import { check } from './http/userAPI';

const App = observer(() => {
  const { user } = useContext(Context)
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    check().then(data => {
      user.setUser(true)
      user.setIsAuth(true)
    }).finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <Spinner animation='grow' />
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
})

export default App;
