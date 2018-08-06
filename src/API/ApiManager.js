const ApiManager = Object.create(
    {},
    {
        getAll: {
            value: collectionName => {
                return fetch(`http://localhost:5002/${collectionName}`).then(e =>
                    e.json()
                );
            }
        },
        getIdofCurrentUser: {
            value: () => {

                const databaseString = localStorage.getItem("credentials")
                const currentUserObject = JSON.parse(databaseString)
                console.log("User stuff", currentUserObject)
                return currentUserObject.user
            }
        },
        getUserTrip: {
            value: (collectionName, id) => {
                return fetch(`http://localhost:5002/${collectionName}?userId=${id}`).then(e =>
                    e.json()
                );
            }
        },
        getUserSuggestionTrip: {
            value: (id) => {
                return fetch(`http://localhost:5002/suggestions?userId=${id}&_expand=group`).then(e =>
                    e.json()
                );
            }
        },
        getSuggestionsForTrip: {
            value: (collectionName, id) => {
                return fetch(`http://localhost:5002/${collectionName}?groupId=${id}`).then(e =>
                    e.json()
                );
            }
        },
        deleteItem: {
            value: (collectionName, itemId) => {
                return fetch(`http://localhost:5002/${collectionName}/${itemId}`, {
                    method: "DELETE"
                });
            }
        },
        patchItem: {
            value: (collectionName, itemId, theObject) => {
                return fetch(`http://localhost:5002/${collectionName}/${itemId}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(theObject)
                });
            }
        },
        postItem: {
            value: (collectionName, theObject) => {
                console.log("object", theObject);

                return fetch(`http://localhost:5002/${collectionName}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(theObject)
                });
            }
        },
        updateItem: {
            value: (collectionName, itemId, dataObject) => {
                return fetch(`http://localhost:5002/${collectionName}/${itemId}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(dataObject)
                });
            }
        },
    }
);

export default ApiManager;