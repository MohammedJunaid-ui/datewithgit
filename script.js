function getUserRole(name, role) {
    switch (role) {
        case "admin":
            return `${name} is admin with al  access`
            break;
       case "subadmin":
            return `${name} is sub-admin with access to create and delete cources`
            break; 
        case "testprep":
            return `${name} is testprep with access to create and delerte tests`
            break;
        case "user":
            return `${name} is userto consume content`
            break;
    
        default:
             return `${name} is a trial user`
    
            break;
    }
}

console.log(getUserRole("junaid", "user"))

var getRole = getUserRole("doe", "testprep")
console.log(getRole);