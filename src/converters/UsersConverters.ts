export const usersConverter = (data: any) => data.map((user: any) => ({
    id: user.id,
    email: user.email,
    firstName: user.first_name,
    lastName: user.last_name,
    avatar: user.avatar,
}));

export const userConverter = (data: any) => ({
    id: data.id,
    email: data.email,
    firstName: data.first_name,
    lastName: data.last_name,
    avatar: data.avatar,
});