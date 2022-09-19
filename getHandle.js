const getHandle = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        botOrnot: "NOT",
        posOrneg: "POSITIVE",
        avgTopic: "HOW GREAT SHE IS",
      });
    }, 1500);
  });
};

export default getHandle;
