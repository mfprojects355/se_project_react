const baseUrl = "http://localhost:3001";

export function checkResponse(response) {
  if (!response.ok) {
    return response
      .json()
      .then((data) => {
        throw new Error(data.message || "Request failed");
      })
      .catch((error) => {
        if (error instanceof Error && error.message !== "Request failed") {
          throw error;
        }

        throw new Error("Request failed");
      });
  }

  return response.json();
}

function normalizeItem(item) {
  return {
    ...item,
    link: item.imageUrl ?? item.link,
  };
}

export function getItems() {
  return fetch(`${baseUrl}/items`)
    .then(checkResponse)
    .then((items) =>
      items.map(normalizeItem).sort((a, b) => b._id - a._id),
    );
}

export function addItem({ name, imageUrl, weather }) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, imageUrl, weather }),
  })
    .then(checkResponse)
    .then(normalizeItem);
}

export function deleteItem(id) {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
  }).then(checkResponse);
}
