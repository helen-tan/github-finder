class Github {
    constructor() {
        this.client_id = '481f52e38ba22ec5e7fe';
        this.client_secret = 'e5373c8e258f7eb158c258204ece5db2938469e4';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
        const profile = await profileResponse.json();

        return {
            profile: profile
        }
    }
}