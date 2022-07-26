import Axios from "axios";

export default Axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID cY7FBhhju6IU3qRza0oQPATD9TO4ESonrT5oj3HNqLI"
    }
})