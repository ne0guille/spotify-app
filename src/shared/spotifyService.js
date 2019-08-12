import * as SpotifyWebApi from "spotify-web-api-js";

const data = {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization:
      "Basic YzY2ZTY5MTcyY2JkNGQ0N2E2ZmVjZTcwMjJkYThmMTU6NDNlNmY4ZWE1ZjZmNGMxMGE5ZTBmOTZiMDBjMmQ2OTM=",
  },
  data: {
    grant_type: "client_credentials", // 'authorization_code'
  },
};

class SpotifyService {
  spotifyApi;
  constructor() {
    console.log("constructor", new SpotifyWebApi().search);
    this.spotifyApi = new SpotifyWebApi();
    this.getToken();
  }
  getToken() {
    // let token = localStorage.getItem("authToken");
    const token = fetch("https://accounts.spotify.com/api/token", {
      ...data,
    }).then((response: any) => {
      console.log(response);

      return response;
    });

    this.spotifyApi.setAccessToken(
      "BQDwr6GqGfyRsTm0Omm_Bw0SCki4kjoHc01Y_GFSLmk4EEvv-EWeO3t2WE9vTBcY0A9ahuBndSAtNsepuoc"
    );
  }
}

const spotifyService = new SpotifyService();
export default spotifyService.spotifyApi;
