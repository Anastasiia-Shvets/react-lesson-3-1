import { useState } from 'react'
import { useId } from 'react';
import LoginForm from './components/LoginForm/lLoginForm';
import './App.css'



function App() {

  //==========Форми=======//
  // const LoginForm = () => {
  //   const LoginForm = () => {
  //     const handleSubmit = (evt) => {
  //       evt.preventDefault();
  //       console.log(evt);
  //     }
  //   }
  //   return (
  //     <form onSubmit={handleSubmit}>
  //       <input type='text' name='login' />
  //       <input type='password' name='password' />
  //       <button type='submit'>Login</button>
  //     </form>
  //   );
  // }


  //==============Неконтрольована форма==================//
  // const LoginForm = () => {

  //   const handleSubmit = (evt) => {
  //     evt.preventDefault();

  //     const form = evt.target;
  //     const { login, password } = form.elements;

  //     // Посилання на DOM-елементи
  //     console.log(login, password);

  //     // Значення полів
  //     console.log(login.value, password.value)

  //     // Скидаємо значення полів після відправки
  //     form.reset();
  //   };

  //   return (
  //     <form onSubmit={handleSubmit}>
  //       <input type="text" name="login" />
  //       <input type="password" name="password" />
  //       <button type="submit">Login</button>
  //     </form>
  //   );
  // };


  //============Використання форми==========//

  // // Колбек-функція для обробки сабміту форми
  // const handleLogin = (userData) => {
  //   // Виконуємо необхідні операції з даними
  //   console.log(userData);
  // };

  // return (
  //   <div>
  //     <h1>Please login to your account!</h1>
  //     {/* Передаємо колбек як пропс форми */}
  //     <LoginForm onLogin={handleLogin} />
  //   </div>
  // );

  //=========Хук useId==========//

  // const LoginForm = () => {
  //   const loginId = useId();
  //   const passwordId = useId();

  //   return (
  //     <form>
  //       <label htmlFor={loginId}>Login</label>
  //       <input type="text" name="login" id={loginId} />

  //       <label htmlFor={passwordId}>Password</label>
  //       <input type="password" name="password" id={passwordId} />

  //       <button type="submit">Login</button>
  //     </form>
  //   );
  // };
  // return (
  //   <>
  //   <LoginForm/>
  //   </>
  // )

  //==========Контрольовані елементи============//

  // const SearchBar = () => {
  //   const [inputValue, setInputValue] = useState("");

  //   const handleChange = (evt) => {
  //     setInputValue(evt.target.value);
  //   };

  //   return (
  //     <div>
  //       <input type="text" value={inputValue} onChange={handleChange} />
  //       <p>{inputValue}</p>
  //     </div>
  //   );
  // };

  // return (
  //   <>
  //     <SearchBar/>
  //   </>
  // )

  // =============Елемент select==============//

  // const LangSwitcher = () => {
  //   const selectId = useId();

  //   return (
  //     <div>
  //       <label htmlFor={selectId}>Choose language</label>
  //       <select id={selectId}>
  //         <option value="en">English</option>
  //         <option value="uk">Ukrainian</option>
  //         <option value="pl">Polish</option>
  //       </select>
  //     </div>
  //   );
  // };

  // const LangSwitcher = ({ value, onSelect }) => {
  //   const selectId = useId();

  //   return (
  //     <div>
  //       <label htmlFor={selectId}>Choose language</label>
  //       <select
  //         id={selectId}
  //         value={value}
  //         onChange={(evt) => onSelect(evt.target.value)}
  //       >
  //         <option value="uk">Ukrainian</option>
  //         <option value="en">English</option>
  //         <option value="pl">Polish</option>
  //       </select>
  //     </div>
  //   );
  // };

  // return (
  //   <>
  //     <p>Selected language: </p>
  //     <LangSwitcher />
  //   </>
  // )


  //=================Радіо-кнопки===================//

  // const [coffeeSize, setCoffeeSize] = useState("sm");

  // const handleSizeChange = (evt) => {
  //   setCoffeeSize(evt.target.value);
  // };

  // return (
  //   <>
  //     <h1>Select coffee size</h1>
  //     <label>
  //       <input
  //         type="radio"
  //         name="coffeeSize"
  //         value="sm"
  //         checked={coffeeSize === "sm"}
  //         onChange={handleSizeChange}
  //       />
  //       Small
  //     </label>
  //     <label>
  //       <input
  //         type="radio"
  //         name="coffeeSize"
  //         value="md"
  //         checked={coffeeSize === "md"}
  //         onChange={handleSizeChange}
  //       />
  //       Meduim
  //     </label>
  //     <label>
  //       <input
  //         type="radio"
  //         name="coffeeSize"
  //         value="lg"
  //         checked={coffeeSize === "lg"}
  //         onChange={handleSizeChange}
  //       />
  //       Large
  //     </label>
  //   </>
  // );


  //=============Чекбокси==========//
  // const [hasAccepted, setHasAccepted] = useState(false);

  // const handleChange = (evt) => {
  //   setHasAccepted(evt.target.checked);
  // };

  // return (
  //   <div>
  //     <label>
  //       <input
  //         type="checkbox"
  //         name="terms"
  //         checked={hasAccepted}
  //         onChange={handleChange}
  //       />
  //       I accept terms and conditions
  //     </label>
  //     <button type="button" disabled={hasAccepted}>
  //       Proceed
  //     </button>
  //   </div>
  // );

  //================Контрольована форма===================//
  // const LoginForm = () => {
  //   const [values, setValues] = useState({
  //     login: "",
  //     password: "",
  //   });

  //   const handleChange = (evt) => {
  //     setValues({
  //       ...values,
  //       [evt.target.name]: evt.target.value,
  //     });
  //   };

  //   return (
  //     <form>
  //       <input
  //         type="text"
  //         name="login"
  //         value={values.login}
  //         onChange={handleChange}
  //       />
  //       <input
  //         type="password"
  //         name="password"
  //         value={values.password}
  //         onChange={handleChange}
  //       />
  //       <button type="submit">Login</button>
  //     </form>
  //   );
  // };

  //==================Відправка форми==================//

  // const LoginForm = () => {
  //   const [values, setValues] = useState({
  //     login: "",
  //     password: "",
  //   });

  //   const handleChange = (evt) => {
  //     setValues({
  //       ...values,
  //       [evt.target.name]: evt.target.value,
  //     });
  //   };

  //   const handleSumit = (evt) => {
  //     evt.preventDefault();

  //     console.log(values);

  //     setValues({
  //       login: "",
  //       password: "",
  //     });
  //   };

  //   return (
  //     <form onSubmit={handleSumit}>
  //       <input
  //         type="text"
  //         name="login"
  //         value={values.login}
  //         onChange={handleChange}
  //       />
  //       <input
  //         type="password"
  //         name="password"
  //         value={values.password}
  //         onChange={handleChange}
  //       />
  //       <button type="submit">Login</button>
  //     </form>
  //   );
  // };

  // return (
  //   <>
  //   <LoginForm/>
  //   </>
  // )

  //==========================================//



}
export default App
