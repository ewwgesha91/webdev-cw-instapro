export function saveUserToLocalStorage(user) {
  window.localStorage.setItem("user", JSON.stringify(user));
}

export function getUserFromLocalStorage(user) {
  try {
    return JSON.parse(window.localStorage.getItem("user"));
  } catch (error) {
    return null;
  }
}

export function removeUserFromLocalStorage(user) {
  window.localStorage.removeItem("user");
}

export const sanitizeHtml = (htmlString) => {
  return htmlString
    .replaceAll("<", "&lt;", 
    ">", "&gt;", "&", "&amp;", 
    '"', "&quot;", "&lt;", "<", 
    "&gt;", ">", "&amp;", "&", '&quot;', "");

};

export const currentDate = (date) => {
  let dateTime = new Date(date);
  let day = String(dateTime.getDate()).padStart(2, '0');
  let month = String(dateTime.getMonth() + 1).padStart(2, '0');
  let year = String(dateTime.getFullYear() - 2000);
  let hour = String(dateTime.getHours()).padStart(2, '0');
  let minutes = String(dateTime.getMinutes()).padStart(2, '0');
  return `${day}.${month}.${year} ${hour}:${minutes}`;
};