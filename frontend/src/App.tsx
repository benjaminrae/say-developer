const App = () => {
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:3000/auth/google";
  }
  const handleGithubLogin = () => {
    window.location.href = "http://localhost:3000/auth/github";
  }

  return (
    <>
      <h1>Say Developer</h1>
      <button onClick={handleGoogleLogin}>
        Login With Google
      </button>
      <button onClick={handleGithubLogin}>
        Login With Github
      </button>
    </>
  )
}

export default App
