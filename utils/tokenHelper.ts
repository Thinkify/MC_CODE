import jwt from "jsonwebtoken";
const tokenGenerator = (data) => {
    const token = jwt.sign(data, process.env.SECRET_KEY, {
        expiresIn: "2h",
    });
    return token;
};

const verifyToken = (token) => {
    const Veritoken = jwt.verify(token, process.env.SECRET_KEY);
    return Veritoken;
};

const setToken = (token) => {
    return window.localStorage.setItem("token", token);
};

const getToken = () => {
    const token = window.localStorage.getItem("token");
    return token;
};

const deleteToken = () => {
    return window.localStorage.setItem("token", "");
};
export { verifyToken, tokenGenerator, setToken, getToken, deleteToken };
