async function showNotification() {
  const permission = await Notification.requestPermission()
  if (permission === "granted") {
    console.log(permission)
    new Notification("first ", {
      body: "how it looks"
    })
  }
}

showNotification();