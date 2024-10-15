export default uploadImage = async (image, apiUrl) => {
  try {
    const formData = new FormData();

    formData.append("file", {
      name: image.fileName,
      uri: image.uri,
      type: image.mimeType,
    });

    const response = await fetch(apiUrl, {
      method: "POST",
      body: formData,
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    const response_data = await response.json();
    return response_data;
  } catch (err) {
    return err;
  }
};
