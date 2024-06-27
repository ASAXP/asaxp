const api = {
  async get<ResponseType>(
    url: string,
    init?: RequestInit,
  ): Promise<ResponseType> {
    const options = init ?? { cache: "no-cache" };
    const response = await fetch(url, { ...options });
    if (!response.ok) {
      throw new Error("fetch failed");
    }
    return response.json();
  },

  async post<ResponseType>(
    url: string,
    data: any,
    init?: RequestInit,
  ): Promise<ResponseType> {
    const options: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      ...init,
    };
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("fetch failed");
    }
    return response.json();
  },
};

export default api;
