async function imageToFileObj(src, fileName, mimeType) {
  try {
    const buffer = await (await fetch(src)).arrayBuffer();
    return new File([buffer], fileName, { type: mimeType });
  } catch (error) {
    console.log("ERROR WHILE CONVERTING TO IMAGE FILE OBJ", error);
    return undefined;
  }
}

export default imageToFileObj;
