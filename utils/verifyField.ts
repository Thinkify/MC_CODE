interface data {
    email: string;
    password: string;
    confirmPassword?: string;
    name?: string;
}

const verify = ({ email, password, confirmPassword, name }: data) => {
    if (!name || !password || !email || !confirmPassword)
        return "Fill all the required Field";
    if (password.length < 6) return "Enter strong Password";
    if (!emailVerify(email)) return "Email is not valid";
    if (password !== confirmPassword) return "Password doesn't match";
};

const emailVerify = (email: string) => {
    const re =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

export { verify };
