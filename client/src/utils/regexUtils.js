const loginUserNameRegex = /^[A-Za-z0-9]{5,15}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,32}$/;
const emailRegex = /^(([^<>()\],;:\s@]+(\.[^<>()\],;:\s@]+)*)|(.+))@(([^<>()[\],;:\s@]+\.)+[^<>()[\],;:\s@]{2,})$/i;

export { loginUserNameRegex, passwordRegex, emailRegex };
