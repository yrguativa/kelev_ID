const API_URL = 'https://kelev-puppy-platform.onrender.com/graphql';

const QUERY = `{
  featuredCanines {
    id
    fullName
    breedKeywords
    breed
    birthDate
    gender
    status
    color
    furType
    weight
    profilePhotoUrl
    galleryPhotos
  }
}`;

export async function getAllPuppies() {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: QUERY }),
  });
  const json = await res.json();
  return json.data.featuredCanines;
}

export async function getPuppyById(id) {
  const all = await getAllPuppies();
  return all.find(p => p.id === id) || null;
}
