import './App.css'
import Welcome from './Welcome'
import Product from './Product'
import Greeting from './Greeting'
import { CardWrapper } from './CardWrapper'
import UserDetails from './USerDetails'
import { ProductList } from './ProductList'
import { NameList } from './NameList'
import { Alert } from './Alert'
import { CustomButtom } from './CustomButton'
import { Contact } from './Contact'
import { Newsletter } from './Newsletter'
import { Menu } from './Menu'
import { Counter } from './state/Counter'
import { LoginCard } from './LoginCard'
import { SimpleCounter } from './SimpleCounter'
import { PrevStateCounter } from './PrevStateCounter'
import { BatchingCounter } from './BatchingCounter'
import { UserProfile } from './state/UserProfile'
import { TodoList } from './TodoList'
import { ShoppingCart } from './state/ShoppingCart'
import { CounterReducer } from './reducer/CounterReducer'
import { ShoppingCartReducer } from './reducer/ShoppingCartReducer'
import { CounterReducerLazy } from './reducer/CounterReducerLazy'
import { CustomCounter } from './reducer/CustomCounter'
import AppContext from './context/AppContext'
import { StopWatch } from './refs/StopWatch'
import { FocusInput } from './refs/FocusInput'
// Children Props
function App() {

  return (
    <div>
      <h1>Codevolution React Course</h1>
      <Welcome name = "Tzuyu" alias = "Honeybee"></Welcome>
      <Welcome name = "Jennie" alias = "Sweetpea"></Welcome>
      <Welcome name = "Hyeri" alias = "Chocogirl"></Welcome>
      <Product title = "Gaming PC" price = {1799.99} inStock = {true} categories = {["Electronics", "Computers", "Gaming"]}></Product>
      <Greeting name = 'Emmy' message='Hi, Wolfy girl!'></Greeting>
      <Greeting name = 'Nayeon'></Greeting>
      <Greeting message='Welcome to the Club'></Greeting>
      <Greeting></Greeting>
      <CardWrapper title = "User Profile">
        <p>Tzuyu Chou</p>
        <p>tzuyu@gmail.com</p>
        <button>Edit Profile</button>
      </CardWrapper>
      <UserDetails name = "Tzuyu" isOnline = {true}></UserDetails>
      <UserDetails name = "Jennie" isOnline = {false}></UserDetails>
      <ProductList></ProductList>
      <NameList></NameList>
      <Alert type='success'>Success</Alert>
      <Alert type='error'>Error</Alert>
      <CustomButtom></CustomButtom>
      <Contact></Contact>
      <Newsletter></Newsletter>
      <Menu></Menu>
      <Counter></Counter>
      <LoginCard></LoginCard>
      <SimpleCounter></SimpleCounter>
      <PrevStateCounter></PrevStateCounter>
      <BatchingCounter></BatchingCounter>
      <UserProfile></UserProfile>
      <TodoList></TodoList>
      <ShoppingCart></ShoppingCart>
      <CounterReducer></CounterReducer>
      <ShoppingCartReducer></ShoppingCartReducer>
      <CounterReducerLazy></CounterReducerLazy>
      <CustomCounter></CustomCounter>
      <AppContext></AppContext>
      <StopWatch></StopWatch>
      <FocusInput></FocusInput>
    </div>
  )
}

export default App
