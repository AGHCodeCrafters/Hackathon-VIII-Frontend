const API_KEY = "http://192.168.97.27:8000";

export const getTasks = async () => {
  const response = await fetch(`${API_KEY}/tasks/employee/1`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch tasks");
  }
  return data;
};

export const patchTask = async (taskID) => {
  const response = await fetch(`${API_KEY}/tasks/${taskID}/complete`, {
    method: "PATCH",
    body: JSON.stringify(taskID),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  console.log(data);

  if (!response.ok) {
    console.log("error");
  }

  return null;
};
