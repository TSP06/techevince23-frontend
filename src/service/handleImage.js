export const cleanUrl = (url) => {
  //convert from https://drive.google.com/file/d/1-n49I0Qk1N-m1e-w05e0-O5OYcHBEcXj/view?usp=share_link to https://drive.google.com/uc?export=view&id=1-n49I0Qk1N-m1e-w05e0-O5OYcHBEcXj if not already

  const googleDriveUrl = 'https://drive.google.com/uc?export=view&id=';
  const googleDriveUrl2 = 'https://drive.google.com/file/d/';

  if (url.startsWith(googleDriveUrl2)) {
    const id = url.split(googleDriveUrl2)[1].split('/')[0];
    return googleDriveUrl + id;
  };
  return url;
}
