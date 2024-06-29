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
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
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
