import { pushNotification } from "../services/notification.js";

export const testNotification = (req, res) => {
  const { message } = req.body;

  pushNotification({
    id: Date.now(),
    message: message || "Default notification",
  });

  res.json({ success: true });
};
