function ValidateRegisterForm(data: { username: string; email: string; password: string }): string | null {
    const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/; 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    const passwordRegex = /^.{6,}$/; 

    if (!data.username.trim()) return "Username is required.";
    if (!usernameRegex.test(data.username)) return "Username must be 3-16 characters and can only contain letters, numbers, and underscores.";
    if (!data.email.trim()) return "Email is required.";
    if (!emailRegex.test(data.email)) return "Invalid email format.";
    if (!data.password.trim()) return "Password is required.";
    if (!passwordRegex.test(data.password)) return "Password must be at least 6 characters long.";

    return null; 
}

export default ValidateRegisterForm

