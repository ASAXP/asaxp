const api = {
  async get<ResponseType>(
    url: string,
    init?: RequestInit,
  ): Promise<ResponseType> {
    const options = init ?? {};
    const response = await fetch(url, { ...options });
    if (!response.ok) {
      throw new Error("fetch failed");
    }
    return response.json();
  },
};

export default api;
