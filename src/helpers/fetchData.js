const fetchData = async (url, data) => {
  const user = await fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return user.json();
};

export default fetchData
