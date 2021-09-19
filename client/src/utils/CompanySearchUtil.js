export function loadCompanies(query) {
    return fetch(process.env.REACT_APP_SERVER_URI + "/companies/search/" + query)
            .then(res => res.json());
}
