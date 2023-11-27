import React from "react";
import Input from '../atoms/Input'
import Button from '../atoms/Button'
import axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/auth/login', {
        email: email,
        password: password
      });

      if (response.status === 200) {
        // Здесь вы можете обработать ответ сервера при успешной авторизации.
        // Например, вы можете сохранить токен авторизации или перенаправить пользователя на другую страницу.
      } else {
        // Если сервер возвращает статус, отличный от 200, значит, произошла ошибка.
        // Здесь вы можете обработать эту ошибку.
      }
    } catch (error) {
      // Если произошла ошибка при выполнении запроса, вы можете обработать ее здесь.
      console.error('An error occurred while trying to login:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit">Login</Button>
    </form>
  );
};

export default LoginForm;
