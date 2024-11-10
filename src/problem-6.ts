// problem-6
//Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.
// interface Profile {
//     name: string;
//     age: number;
//     email: string;
// }
// const myProfile: Profile = {
//     name: "Alice",
//     age: 25,
//     email: "alice@example.com"
// }

// const updateProfile = (profile: Profile, updates: <retuntprofle>) => {
//     return { ...profile, ...retuntprofle }
// }

// const outPut = updateProfile(myProfile, { age: 26 })

interface Profile {
    name: string;
    age: number;
    email: string;
}

function updateProfile(profile: Profile, updates: Partial<Profile>): Profile {
    return { ...profile, ...updates };
}

const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
// const myProfileUpdate = updateProfile(myProfile, { age: 26 });
// console.log(myProfileUpdate);
updateProfile(myProfile, { age: 26 })