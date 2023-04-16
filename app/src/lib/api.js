const API_KEY = "http://192.168.97.27:8000";

export const getTasks = async () => {
  const response = await fetch(`${API_KEY}/tasks`);
  const data = await response.json();

  console.log(data);

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch tasks");
  }

  return response;
};
