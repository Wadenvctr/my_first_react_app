import LoginForm from '../molecules/LoginForm'
const LoginPage = ({ onLogin }) => (
    <div>
      <h1>Login</h1>
      <LoginForm onLogin={onLogin} />
    </div>
  );

  export default LoginPage