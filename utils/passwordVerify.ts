import bcrypt from "bcryptjs";

const verifyPassword = async (
    password: string | any,
    Existpassword?: object | any
): Promise<boolean> => {
    const verify = await bcrypt.compare(password, Existpassword);
    return verify;
};

const generatePassword = async (password: string): Promise<String> => {
    const genPass = await bcrypt.hash(password, 10);
    return genPass;
};

export { verifyPassword, generatePassword };
