export default class ParisEvents {

    constructor() {
        this.urlBase = 'https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-';
    }

    searchContent(title, date, type) {
        let url = `https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=${title}&sort=${type}&refine.date_start=${date}`;
        return fetch(url).then(response => response.json());
    }

}