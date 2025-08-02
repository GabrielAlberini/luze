import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Lock, User, Eye, EyeOff, ArrowLeft } from 'lucide-react';
import Seo from '../components/Seo';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Redirigir si ya está autenticado
  useEffect(() => {
    if (isAuthenticated) {
      const from = location.state?.from?.pathname || '/admin';
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, location]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simular un pequeño delay para mejor UX
    setTimeout(() => {
      const success = login(username, password);

      if (success) {
        const from = location.state?.from?.pathname || '/admin';
        navigate(from, { replace: true });
      } else {
        setError('Credenciales incorrectas. Verifica tu usuario y contraseña.');
      }

      setLoading(false);
    }, 500);
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="login-page">
      <Seo
        title="Iniciar Sesión | Luzé Rugs"
        description="Acceso al panel de administración de Luzé Rugs."
        noIndex={true}
      />

      <div className="login-container">
        <div className="login-header">
          <button
            onClick={handleBackToHome}
            className="btn btn-primary"
            type="button"
          >
            <ArrowLeft size={20} />
            Volver al inicio
          </button>
        </div>

        <div className="login-card">
          <div className="login-logo">
            <h1>Panel de Administración</h1>
            <p>Ingresa tus credenciales para acceder</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            {error && (
              <div className="error-alert">
                <Lock size={18} />
                {error}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="username">Usuario</label>
              <div className="input-wrapper">
                <User size={20} className="input-icon" />
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Ingresa tu usuario"
                  required
                  disabled={loading}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <div className="input-wrapper">
                <Lock size={20} className="input-icon" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Ingresa tu contraseña"
                  required
                  disabled={loading}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={loading}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="login-button"
              disabled={loading || !username || !password}
            >
              {loading ? (
                <>
                  <div className="button-spinner"></div>
                  Iniciando sesión...
                </>
              ) : (
                <>
                  <Lock size={20} />
                  Iniciar Sesión
                </>
              )}
            </button>
          </form>

          <div className="login-footer">
            <p>¿Problemas para acceder? Contacta al administrador del sistema.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;