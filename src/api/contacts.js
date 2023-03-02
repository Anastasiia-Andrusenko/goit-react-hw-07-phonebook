
const baseURL = 'https://63ff88ae63e89b09139e5ee9.mockapi.io/contacts';


export const getAllContacts = async() => {
  return await fetch(`${baseURL}`).then(response => response.json());
}

export const addContact = async(data) => {
  const response = await fetch(baseURL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(response => response.json());
  return response;
}

export const deleteContact = async (id) => {
  console.log(id);
  const response = await fetch(`${baseURL}/${id}`, {
    method: "DELETE",
  }).then(response => response.json());
  return response;
}


