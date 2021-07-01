export interface User 
{
    uid : string;
    email : string;
    displayName? : string;
    roles : Roles
 }
 export interface Roles
 {
     admin? : boolean;
     editor? : boolean;
     subscriber? : boolean;
 }