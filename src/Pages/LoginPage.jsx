import login from '../Style/login.module.css';


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
    <main>
        <div className={login.box}>
          <div className={login.innerBox}>
            <div className={login.formsWrap}>
              <form action="index.html" autoComplete="off" className={login.signinForm}>
                <div className={login.logo}>
                  <a href="index.html">LOGO</a>
                </div>
                <div className={login.heading}>
                  <h2>Welcome Back</h2>
                  <h6>Not registred yet?</h6>
                  <a href="#" className={login.toggle}>Sign </a>
                </div>
                <div className={login.actualForm}>
                  <div className={login.inputWrap}>
                    <input type="text" minLength={4} className={login.inputField} autoComplete="off" required />
                    <label className={login.label}>Name</label>
                  </div>
                  <div className={login.inputWrap}>
                    <input type="password" minLength={4} className={login.inputField} autoComplete="off" required />
                    <label className={login.label}>Password</label>
                  </div>
                  <button defaultValue="Sign In" className={login.signBtn} >Sign in</button>
                  <p className={login.text}>
                    Forgotten your password or you login datails?
                    <a href="">Get help</a> signing in
                  </p>
                </div>
              </form>
              <form action="index.html" autoComplete="off" className={login.signupForm}>
                <div className={login.logo}>
                  <a href="index.html"><img src="logo.png" alt="logo" /></a>
                </div>
                <div className={login.heading}>
                  <h2>Get Started</h2>
                  <h6>Already have an account?</h6>
                  <a href="#" className={login.toggle}>Sign in</a>
                </div>
                <div className={login.actualForm}>
                  <div className={login.inputWrap}>
                    <input type="text" minLength={4} className={login.inputfield} autoComplete="off" required />
                    <label className={login.label}>Name</label>
                  </div>
                  <div className={login.inputWrap}>
                    <input type="email" className={login.inputfield} autoComplete="off" required />
                    <label className={login.label}>Email</label>
                  </div>
                  <div className={login.inputWrap}>
                    <input type="password" minLength={4} className={login.inputfield} autoComplete="off" required />
                    <label className={login.label}>Password</label>
                  </div>
                  <input type="text" defaultValue="Sign Up" className={login.signBtn} />
                  <img className={login.logo} src="google.png" width="25px" height="25px" style={{ left: 45 }} />
                  <p className={login.text}>
                    By signing up, I agree to the
                    <a href="#">Terms of Services</a> and
                    <a href="#">Privacy Policy</a>
                  </p>
                </div>
              </form>
            </div>
            <div className={login.carousele}>
              <div className={login.imagesWrapper}>
                <img src="https://c4.wallpaperflare.com/wallpaper/41/681/303/pc-hd-1080p-nature-1920x1080-wallpaper-preview.jpg" className="{login.image img1 }" alt />
                <img src="https://c4.wallpaperflare.com/wallpaper/41/681/303/pc-hd-1080p-nature-1920x1080-wallpaper-preview.jpg" className="{login.image img2}" alt />
                <img src="https://c4.wallpaperflare.com/wallpaper/41/681/303/pc-hd-1080p-nature-1920x1080-wallpaper-preview.jpg" className="{login.image img3}" alt />
              </div>
              <div className={login.textSlider}>
                <div className={login.textWrap}>
                  <div className={login.textGroup}>
                    <h2>Create your own courses</h2>
                    <h2>Customize as you like</h2>
                    <h2>Invite students to your class</h2>
                  </div>
                </div>
                <div className={login.bullets}>
                  <span className={login.active} data-value={1} />
                  <span data-value={2} />
                  <span data-value={3} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
  )
}
