import user from "../userData.json"

export const hasPermissions = (permissions: Array<string>) => {
    return permissions.every((item) => user.permissions.includes(item))
}