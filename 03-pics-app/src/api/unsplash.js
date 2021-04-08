import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization: "Client-ID f87aXSNwn8sTQMgktaEwgqTfg1Y6RUZ1f3qHKBpOKqQ",
	},
});

// customized little copy
