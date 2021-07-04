export interface User 
{
    uid : string;
    email : string;
    displayName? : string;
    roles : Roles,
    estado?: boolean;

 }
 export interface Roles
 {
     admin? : boolean;
     editor? : boolean;
     subscriber? : boolean;
 }