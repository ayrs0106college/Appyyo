export const Environment = {
    UserContext:{
        AppSeeting:{
            GoogleApiKey: process.env.NEXT_PUBLIC_COMPONENT_GoogleMap_geolocation_apiKey,
            MapBoxKey: process.env.NEXT_PUBLIC_COMPONENT_MapBox_token_apiKey,
        },
        UserSeeting:{
            Internationalization: {
                locale:'en',
            },
            Profile: {
                DefaultID:null,
                ClientID:null,
                FirstName:null,
                MidName:null,
                LastName:null,
                SignInDate:[],
                Status:null,
            },
            Geolocation: {
                GLat:null,
                GLng:null,
            },
            Contact: {
                Email:null,
                Phone:null,
                Website:null,
                Chat:[
                    {Platform:null,Id:null}
                ],
                SocialMedia: [
                    {Platform:null,Id:null}
                ],
            },
            Navigation: {
                Navigator:null,
                DarkMode: false,
                Lang1:null,
                Lang2:null,
                Currency:null,
                Authenticated: false,
                StartNavTime: null,
                Cookies:null,
                CookiesSaved:null
            },
            Company: {
                Name:null,
                Brand:null,
                Logo:null,
                Slogan:null,
            },
            BusinessRel: {
                Member:null,
                Membership:null,
            },
            PortalContext: {
                Alerts:[],
                Favorites:[],
            },
        }
    }
}