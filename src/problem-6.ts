// problem-6
//Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.
interface Profile {
    name: string;
    age: number;
    email: string;
}
const myProfile: Profile = {
    name: "Alice",
    age: 25,
    email: "alice@example.com"
}

const updateProfile = (profile: Profile, updates: <myProfile>) => {
    return { ...profile, updates }
}

const outPut = updateProfile(myProfile, { age: 26 })