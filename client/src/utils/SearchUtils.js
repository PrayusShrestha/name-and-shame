export function loadCompanies(query) {
    return fetch(process.env.REACT_APP_SERVER_URI + "/companies/search/" + query)
            .then(res => res.json());
}

export function loadTags(company, tag) {
    return fetch(process.env.REACT_APP_SERVER_URI + "/tags/" + company + "/" + tag)
            .then(res => res.json().tags);
}
