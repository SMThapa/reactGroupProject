// import '../Style/ComponentStyle/Login-Register/Login-Register.css';

export const LoginPage = () => {
  const inputs = document.querySelectorAll(".input-field");
  const toggle_btn = document.querySelectorAll(".toggle");
  const main = document.querySelector("main");
  const bullets = document.querySelectorAll(".bullets span");
  const images = document.querySelectorAll(".image");

  inputs.forEach((inp) => {
    inp.addEventListener("focus", () => {
      inp.classList.add("active");
    });
    inp.addEventListener("blur", () => {
      if (inp.value != "") return;
      inp.classList.remove("active");
    });
  });

  toggle_btn.forEach((btn) => {
    btn.addEventListener("click", () => {
      main.classList.toggle("sign-up-mode");
    });
  });

  function moveSlider() {
    let index = this.dataset.value;

    let currentImage = document.querySelector(`.img-${index}`);
    images.forEach((img) => img.classList.remove("show"));
    currentImage.classList.add("show");

    const textSlider = document.querySelector(".text-group");
    textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

    bullets.forEach((bull) => bull.classList.remove("active"));
    this.classList.add("active");
  }

  bullets.forEach((bullet) => {
    bullet.addEventListener("click", moveSlider);
  });

  return (
    <div className='login-register-container'>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            <form action="index.html" autoComplete="off" className="sign-in-form">
              <div className="logo">
                <a href="index.html">LOGO</a>
              </div>
              <div className="heading">
                <h2>Welcome Back</h2>
                <h6>Not registred yet?</h6>
                <a href="#" className="toggle">Sign </a>
              </div>
              <div className="actual-form">
                <div className="input-wrap">
                  <input type="text" minLength={4} className="input-field" autoComplete="off" required />
                  <label>Name</label>
                </div>
                <div className="input-wrap">
                  <input type="password" minLength={4} className="input-field" autoComplete="off" required />
                  <label>Password</label>
                </div>
                <button defaultValue="Sign In" className="sign-btn" >Sign in</button>
                <p className="text">
                  Forgotten your password or you login datails?
                  <a href="">Get help</a> signing in
                </p>
              </div>
            </form>
            <form action="index.html" autoComplete="off" className="sign-up-form">
              <div className="logo">
                <a href="index.html"><img src="logo.png" alt="logo" /></a>
              </div>
              <div className="heading">
                <h2>Get Started</h2>
                <h6>Already have an account?</h6>
                <a href="#" className="toggle">Sign in</a>
              </div>
              <div className="actual-form">
                <div className="input-wrap">
                  <input type="text" minLength={4} className="input-field" autoComplete="off" required />
                  <label>Name</label>
                </div>
                <div className="input-wrap">
                  <input type="email" className="input-field" autoComplete="off" required />
                  <label>Email</label>
                </div>
                <div className="input-wrap">
                  <input type="password" minLength={4} className="input-field" autoComplete="off" required />
                  <label>Password</label>
                </div>
                <input type="text" defaultValue="Sign Up" className="sign-btn" />
                <img className="logo" src="google.png" width="25px" height="25px" style={{ left: 45 }} />
                <p className="text">
                  By signing up, I agree to the
                  <a href="#">Terms of Services</a> and
                  <a href="#">Privacy Policy</a>
                </p>
              </div>
            </form>
          </div>
          <div className="carousele">
            <div className="images-wrapper">
              <img src="https://c4.wallpaperflare.com/wallpaper/41/681/303/pc-hd-1080p-nature-1920x1080-wallpaper-preview.jpg" className="image img-1 show" alt='' />
              <img src="https://c4.wallpaperflare.com/wallpaper/41/681/303/pc-hd-1080p-nature-1920x1080-wallpaper-preview.jpg" className="image img-2" alt='' />
              <img src="https://c4.wallpaperflare.com/wallpaper/41/681/303/pc-hd-1080p-nature-1920x1080-wallpaper-preview.jpg" className="image img-3" alt='' />
            </div>
            <div className="text-slider">
              <div className="text-wrap">
                <div className="text-group">
                  <h2>Create your own courses</h2>
                  <h2>Customize as you like</h2>
                  <h2>Invite students to your class</h2>
                </div>
              </div>
              <div className="bullets">
                <span className="active" data-value={1} />
                <span data-value={2} />
                <span data-value={3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
